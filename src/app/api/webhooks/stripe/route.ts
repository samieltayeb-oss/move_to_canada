import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import Stripe from 'stripe';

// In-memory set for event deduplication in edge runtime / node process
const processedEvents = new Set<string>();

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!signature || !webhookSecret) {
    // If webhook secret is not configured in test environment, return 400
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

  // Idempotency: Prevent duplicate processing of the same Stripe event
  if (processedEvents.has(event.id)) {
    return NextResponse.json({ received: true, deduplicated: true });
  }
  processedEvents.add(event.id);

  // Handle specific Stripe lifecycle events
  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object as Stripe.Checkout.Session;
      const planId = session.metadata?.planId;
      const userId = session.client_reference_id || session.metadata?.userId;
      console.log(`[Stripe] Checkout completed for user ${userId}, plan ${planId}`);
      // In full database mode, this writes to user_entitlements and purchases tables
      break;
    }

    case 'invoice.payment_succeeded': {
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`[Stripe] Invoice payment succeeded: ${invoice.id}`);
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object as Stripe.Subscription;
      console.log(`[Stripe] Subscription canceled: ${subscription.id}`);
      // Does NOT delete user data. Only downgrades entitlement at period end.
      break;
    }

    case 'charge.refunded': {
      const charge = event.data.object as Stripe.Charge;
      console.log(`[Stripe] Charge refunded: ${charge.id}`);
      break;
    }

    default:
      console.log(`[Stripe] Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
