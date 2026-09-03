import { NextRequest, NextResponse } from 'next/server';
import { createStripeCheckoutSession } from '@/lib/stripe';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';
import { COMMERCIAL_CONFIG } from '@/config/features';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { planId, userEmail, userId = 'guest_user', referralCode } = body as {
      planId: PlanId;
      userEmail?: string;
      userId?: string;
      referralCode?: string;
    };

    if (!planId || !COMMERCIAL_PLANS[planId]) {
      return NextResponse.json(
        { error: 'Invalid planId provided.' },
        { status: 400 }
      );
    }

    if (planId === 'FREE') {
      return NextResponse.json(
        { error: 'Free plan does not require checkout.' },
        { status: 400 }
      );
    }

    // Safety check: Ensure live payments remain disabled
    if (COMMERCIAL_CONFIG.LIVE_PAYMENTS_ENABLED) {
      // In Phase 3, this is strictly forbidden by project directive
      console.warn('CRITICAL: LIVE_PAYMENTS_ENABLED is set to true prematurely.');
    }

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const successUrl = `${origin}/payment/success`;
    const cancelUrl = `${origin}/payment/cancel`;

    const { url } = await createStripeCheckoutSession({
      planId,
      userId,
      userEmail,
      referralCode,
      successUrl,
      cancelUrl
    });

    return NextResponse.json({ url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to create checkout session';
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
