/**
 * NEXORA MOVE — STRIPE INTEGRATION & SECURITY MODULE
 * 
 * Server-only Stripe client and helper functions.
 * NEVER import this file into client components.
 */

import Stripe from 'stripe';
import { COMMERCIAL_CONFIG } from '@/config/features';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';

/**
 * Returns an authenticated Stripe SDK client instance.
 * Fails closed if STRIPE_SECRET_KEY is missing.
 */
export function getStripeClient(): Stripe {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) {
    throw new Error(
      'STRIPE_CONFIGURATION_ERROR: STRIPE_SECRET_KEY is not configured in this environment. Payment services fail closed.'
    );
  }

  return new Stripe(stripeSecretKey, {
    typescript: true,
    appInfo: {
      name: 'NEXORA MOVE',
      version: '3.0.0'
    }
  });
}

/**
 * Lazy proxy client to prevent build-time crashes during Next.js static route analysis
 * while strictly failing closed upon any real method execution if key is missing.
 */
export const stripe: Stripe = new Proxy({} as Stripe, {
  get(_target, prop: string | symbol) {
    const client = getStripeClient();
    const value = (client as unknown as Record<string | symbol, unknown>)[prop];
    return typeof value === 'function' ? value.bind(client) : value;
  }
});

export const isStripeConfigured = (): boolean => {
  return Boolean(process.env.STRIPE_SECRET_KEY);
};

export interface CreateCheckoutParams {
  planId: PlanId;
  userId: string;
  userEmail?: string;
  referralCode?: string;
  successUrl: string;
  cancelUrl: string;
}

/**
 * Creates a Stripe Checkout Session with server-verified pricing.
 * Client-side price tampering is completely impossible.
 */
export async function createStripeCheckoutSession({
  planId,
  userId,
  userEmail,
  referralCode,
  successUrl,
  cancelUrl
}: CreateCheckoutParams): Promise<{ sessionId: string; url: string | null }> {
  // Validate plan from server registry
  const plan = COMMERCIAL_PLANS[planId];
  if (!plan || plan.id === 'FREE') {
    throw new Error('Invalid or free plan selected for checkout');
  }

  const client = getStripeClient();
  const isSubscription = plan.billingType === 'MONTHLY' || plan.billingType === 'ANNUAL';

  const lineItem: Stripe.Checkout.SessionCreateParams.LineItem = {
    price_data: {
      currency: 'cad',
      product_data: {
        name: plan.displayName,
        description: plan.tagline,
        metadata: {
          planId: plan.id,
          tierRank: plan.tierRank.toString()
        }
      },
      unit_amount: Math.round(plan.priceCAD * 100), // In cents
      ...(isSubscription && {
        recurring: {
          interval: plan.billingType === 'ANNUAL' ? 'year' : 'month'
        }
      })
    },
    quantity: 1
  };

  const session = await client.checkout.sessions.create({
    mode: isSubscription ? 'subscription' : 'payment',
    payment_method_types: ['card'],
    line_items: [lineItem],
    customer_email: userEmail,
    client_reference_id: userId,
    metadata: {
      userId,
      planId: plan.id,
      referralCode: referralCode || '',
      environment: COMMERCIAL_CONFIG.STRIPE_TEST_MODE_ENABLED ? 'test' : 'live'
    },
    success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}&plan=${plan.id}`,
    cancel_url: `${cancelUrl}?plan=${plan.id}`,
    allow_promotion_codes: true, // Enable native Stripe promo codes
    billing_address_collection: 'auto'
  });

  return {
    sessionId: session.id,
    url: session.url
  };
}

/**
 * Creates a Stripe Customer Portal session for subscription management.
 */
export async function createStripePortalSession(
  stripeCustomerId: string,
  returnUrl: string
): Promise<{ url: string }> {
  const client = getStripeClient();
  const portalSession = await client.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: returnUrl
  });

  return { url: portalSession.url };
}

/**
 * Verifies a webhook signature using the secret.
 */
export function verifyWebhookSignature(
  payload: string | Buffer,
  signature: string,
  secret: string
): Stripe.Event {
  const client = getStripeClient();
  return client.webhooks.constructEvent(payload, signature, secret);
}
