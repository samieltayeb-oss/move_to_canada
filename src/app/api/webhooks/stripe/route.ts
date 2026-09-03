import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';
import { getServiceRoleSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';

// Local in-memory set as secondary guard alongside durable DB idempotency
const localMemoryEvents = new Set<string>();

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
  // DURABLE DATABASE IDEMPOTENCY (Section 4 Audit Gate)
  // Survives serverless cold starts and multi-instance concurrency
  // ----------------------------------------------------------------------------
  if (isSupabaseConfigured()) {
    try {
      const supabase = getServiceRoleSupabaseClient();
      
      // Check if event already recorded in public.payment_events
      const { data: existingEvent } = await supabase
        .from('payment_events')
        .select('stripe_event_id')
        .eq('stripe_event_id', event.id)
        .maybeSingle();

      if (existingEvent) {
        console.log(`[Stripe Webhook] Deduplicated via DB event table: ${event.id}`);
        return NextResponse.json({ received: true, deduplicated: true, store: 'database' });
      }

      // Record event durably with unique constraint
      await supabase.from('payment_events').insert({
        stripe_event_id: event.id,
        event_type: event.type,
        payment_environment: event.livemode ? 'LIVE' : 'TEST',
        payload: {
          id: event.id,
          type: event.type,
          created: event.created
        }
      });
    } catch (dbErr) {
      console.warn('[Stripe Webhook] DB idempotency check fallback:', dbErr);
    }
  }

  // Secondary process memory check
  if (localMemoryEvents.has(event.id)) {
    return NextResponse.json({ received: true, deduplicated: true, store: 'memory' });
  }
  localMemoryEvents.add(event.id);

  // ----------------------------------------------------------------------------
  // AUTHORITATIVE ENTITLEMENT & PURCHASE STATE DISPATCH
  // ----------------------------------------------------------------------------
  const supabase = isSupabaseConfigured() ? getServiceRoleSupabaseClient() : null;

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const planId = session.metadata?.planId;
      const userId = session.client_reference_id || session.metadata?.userId;
      const amountCAD = (session.amount_total || 0) / 100;
      const paymentEnv = session.livemode ? 'LIVE' : 'TEST';

      console.log(`[Stripe Webhook] Checkout completed for user ${userId}, plan ${planId}, env: ${paymentEnv}`);

      if (supabase && userId && userId !== 'anonymous' && userId !== 'guest_user') {
        // 1. Record purchase
        await supabase.from('purchases').insert({
          user_id: userId,
          plan_id: planId || 'MOVE_PASS',
          amount_cad: amountCAD,
          currency: session.currency?.toUpperCase() || 'CAD',
          payment_environment: paymentEnv,
          stripe_session_id: session.id,
          stripe_payment_intent_id: typeof session.payment_intent === 'string' ? session.payment_intent : null,
          status: 'PAID'
        });

        // 2. Update user_entitlements durably
        const isConcierge = planId === 'CONCIERGE';
        const isMovePass = planId === 'MOVE_PASS' || isConcierge;
        const isPro = planId === 'PRO_MONTHLY' || isConcierge;

        // Concierge grants 3 months of Pro (+90 days)
        const proExpiresAt = isConcierge
          ? new Date(Date.now() + 90 * 24 * 3600 * 1000).toISOString()
          : (isPro ? new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString() : null);

        await supabase.from('user_entitlements').upsert({
          user_id: userId,
          plan_id: planId || 'MOVE_PASS',
          is_move_pass_purchased: isMovePass,
          is_pro_subscribed: isPro,
          pro_expires_at: proExpiresAt,
          is_concierge_customer: isConcierge,
          updated_at: new Date().toISOString()
        });
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`[Stripe Webhook] Subscription canceled: ${subscription.id}`);

      if (supabase) {
        // Mark subscription canceled
        await supabase
          .from('subscriptions')
          .update({ status: 'canceled', canceled_at: new Date().toISOString() })
          .eq('stripe_subscription_id', subscription.id);

        // Does NOT delete user data. Resumes, scenarios, and applications are preserved.
      }
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      console.log(`[Stripe Webhook] Charge refunded: ${charge.id}`);

      if (supabase && charge.payment_intent) {
        // Update purchase record to REFUNDED
        await supabase
          .from('purchases')
          .update({ status: 'REFUNDED' })
          .eq('stripe_payment_intent_id', charge.payment_intent.toString());
      }
      break;
    }

    default:
      console.log(`[Stripe Webhook] Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
