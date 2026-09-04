import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { 
  isEventProcessed, 
  recordEvent, 
  savePurchase, 
  saveEntitlement, 
  StoredPurchase, 
  StoredEntitlement 
} from '@/lib/commerce/store';
import { sendOrderConfirmationEmail } from '@/lib/email/orderConfirmation';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    console.warn('Stripe webhook received without configured secret or signature header.');
    return NextResponse.json({ error: 'Webhook secret or signature missing' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Unknown webhook error';
    console.error(`Webhook signature verification failed: ${message}`);
    return NextResponse.json({ error: `Webhook error: ${message}` }, { status: 400 });
  }

  // ----------------------------------------------------------------------------
  // 1. DURABLE IDEMPOTENCY CHECK
  // Deduplicates repeated webhooks across serverless restarts and retries
  // ----------------------------------------------------------------------------
  try {
    const alreadyProcessed = await isEventProcessed(event.id);
    if (alreadyProcessed) {
      console.log(`[Stripe Webhook] Deduplicated via durable event store: ${event.id}`);
      return NextResponse.json({ received: true, deduplicated: true });
    }
  } catch (idempErr) {
    console.error('[Stripe Webhook] Idempotency check failed:', idempErr);
    // Return 500 so Stripe automatically retries rather than silently failing
    return NextResponse.json(
      { error: 'Internal storage error checking event idempotency' }, 
      { status: 500 }
    );
  }

  // ----------------------------------------------------------------------------
  // 2. AUTHORITATIVE PURCHASE & ENTITLEMENT LIFECYCLE
  // ----------------------------------------------------------------------------
  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session;
        const planId = (session.metadata?.planId as PlanId) || 'MOVE_PASS';
        const rawUserId = session.client_reference_id || session.metadata?.userId;
        
        const customerEmail = 
          session.customer_email || 
          session.customer_details?.email || 
          (session.metadata?.userEmail) || 
          'purchaser@nexoramove.ca';

        // Robust Guest Identity Resolution
        const isGuest = !rawUserId || rawUserId === 'guest_user' || rawUserId === 'anonymous';
        const effectiveUserId = isGuest
          ? `guest_${Buffer.from(customerEmail.toLowerCase()).toString('hex').slice(0, 16)}`
          : rawUserId;

        const amountCAD = (session.amount_total || 0) / 100;
        const paymentEnv = session.livemode ? 'LIVE' : 'TEST';
        const plan = COMMERCIAL_PLANS[planId] || COMMERCIAL_PLANS.MOVE_PASS;

        console.log(`[Stripe Webhook] Processing verified checkout:`, {
          session: session.id,
          user: effectiveUserId,
          email: customerEmail,
          isGuest,
          plan: planId,
          amount: `$${amountCAD} CAD`,
          env: paymentEnv
        });

        // A. Persist Purchase Record
        const purchaseRecord: StoredPurchase = {
          id: `pur_${Date.now()}_${session.id.slice(-8)}`,
          userId: effectiveUserId,
          customerEmail,
          planId,
          amountCAD,
          currency: session.currency?.toUpperCase() || 'CAD',
          paymentEnvironment: paymentEnv,
          stripeSessionId: session.id,
          stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
          status: 'PAID',
          createdAt: new Date().toISOString()
        };
        await savePurchase(purchaseRecord);

        // B. Persist Entitlement
        const isConcierge = planId === 'CONCIERGE';
        const isMovePass = planId === 'MOVE_PASS' || isConcierge;
        const isPro = planId === 'PRO_MONTHLY' || isConcierge;

        const proExpiresAt = isConcierge
          ? new Date(Date.now() + 90 * 24 * 3600 * 1000).toISOString()
          : (isPro ? new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString() : null);

        const entitlementRecord: StoredEntitlement = {
          userId: effectiveUserId,
          customerEmail,
          planId,
          isMovePassPurchased: isMovePass,
          isProSubscribed: isPro,
          proExpiresAt,
          isConciergeCustomer: isConcierge,
          updatedAt: new Date().toISOString()
        };
        await saveEntitlement(entitlementRecord);

        // C. Record Event for Idempotency AFTER Successful Persistence
        await recordEvent({
          stripeEventId: event.id,
          eventType: event.type,
          environment: event.livemode ? 'LIVE' : 'TEST',
          processedAt: new Date().toISOString()
        });

        // D. Transactional Email Receipt & Secure Download Link Dispatch
        const origin = process.env.NEXT_PUBLIC_APP_URL || 'https://movetocanada.vercel.app';
        const downloadUrl = `${origin}/api/download/blueprint?session_id=${session.id}`;

        await sendOrderConfirmationEmail({
          customerEmail,
          planName: plan.displayName,
          amountCAD,
          sessionId: session.id,
          downloadUrl
        });

        break;
      }

      case 'customer.subscription.deleted': {
        const subscription = event.data.object as Stripe.Subscription;
        console.log(`[Stripe Webhook] Subscription canceled: ${subscription.id}`);
        // Record event
        await recordEvent({
          stripeEventId: event.id,
          eventType: event.type,
          environment: event.livemode ? 'LIVE' : 'TEST',
          processedAt: new Date().toISOString()
        });
        break;
      }

      default:
        console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
        // Record event
        await recordEvent({
          stripeEventId: event.id,
          eventType: event.type,
          environment: event.livemode ? 'LIVE' : 'TEST',
          processedAt: new Date().toISOString()
        });
        break;
    }

    return NextResponse.json({ received: true });
  } catch (fulfillmentErr) {
    console.error('[Stripe Webhook:P0.1] Fulfillment failed during processing:', fulfillmentErr);
    // CRITICAL P0.1 RECOVERY LAW:
    // If persistence fails, return HTTP 500 to trigger Stripe's automatic webhook retry.
    // Event was NOT recorded as processed, ensuring clean retry reconciliation.
    return NextResponse.json(
      { error: 'Durable fulfillment persistence failed. Webhook will retry.' },
      { status: 500 }
    );
  }
}
