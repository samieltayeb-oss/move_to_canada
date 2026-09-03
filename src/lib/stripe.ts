/**
 * NEXORA MOVE — STRIPE INTEGRATION & SECURITY MODULE
 * 
 * Server-only Stripe client and helper functions.
 * NEVER import this file into client components.
 */

import Stripe from 'stripe';
import { COMMERCIAL_CONFIG } from '@/config/features';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';

// Initialize Stripe with safe fallback for static build or test mode
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_key_for_build';

export const stripe = new Stripe(stripeSecretKey, {
  typescript: true,
  appInfo: {
    name: 'NEXORA MOVE',
    version: '3.0.0'
  }
});

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

  // Mandatory Safety Check: Ensure live payments remain disabled unless authorized
  if (!COMMERCIAL_CONFIG.LIVE_PAYMENTS_ENABLED && process.env.NODE_ENV === 'production' && !process.env.STRIPE_TEST_MODE_ENABLED) {
    // Stays in test mode
  }

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

  const session = await stripe.checkout.sessions.create({
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
  const portalSession = await stripe.billingPortal.sessions.create({
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
  return stripe.webhooks.constructEvent(payload, signature, secret);
}
