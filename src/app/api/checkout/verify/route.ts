import { NextRequest, NextResponse } from 'next/server';
import { stripe } from '@/lib/stripe';
import { getPurchaseBySession, getEntitlement, savePurchase, saveEntitlement } from '@/lib/commerce/store';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { verified: false, error: 'Missing session_id parameter' },
        { status: 400 }
      );
    }

    // 1. Check local/durable store first
    let purchase = await getPurchaseBySession(sessionId);

    // 2. If not yet in store (e.g. race condition before webhook or direct verify), query Stripe
    if (!purchase) {
      try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session && session.payment_status === 'paid') {
          const planId = (session.metadata?.planId as PlanId) || 'MOVE_PASS';
          const customerEmail = 
            session.customer_email || 
            session.customer_details?.email || 
            'customer@nexoramove.ca';
          const amountCAD = (session.amount_total || 0) / 100;
          const rawUserId = session.client_reference_id || session.metadata?.userId;
          const effectiveUserId = (!rawUserId || rawUserId === 'guest_user' || rawUserId === 'anonymous')
            ? `guest_${Buffer.from(customerEmail.toLowerCase()).toString('hex').slice(0, 16)}`
            : rawUserId;

          purchase = {
            id: `pur_${Date.now()}_${session.id.slice(-8)}`,
            userId: effectiveUserId,
            customerEmail,
            planId,
            amountCAD,
            currency: session.currency?.toUpperCase() || 'CAD',
            paymentEnvironment: session.livemode ? 'LIVE' : 'TEST',
            stripeSessionId: session.id,
            stripePaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
            status: 'PAID',
            createdAt: new Date().toISOString()
          };
          await savePurchase(purchase);

          // Save entitlement as well
          const isConcierge = planId === 'CONCIERGE';
          const isMovePass = planId === 'MOVE_PASS' || isConcierge;
          const isPro = planId === 'PRO_MONTHLY' || isConcierge;
          const proExpiresAt = isConcierge
            ? new Date(Date.now() + 90 * 24 * 3600 * 1000).toISOString()
            : (isPro ? new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString() : null);

          await saveEntitlement({
            userId: effectiveUserId,
            customerEmail,
            planId,
            isMovePassPurchased: isMovePass,
            isProSubscribed: isPro,
            proExpiresAt,
            isConciergeCustomer: isConcierge,
            updatedAt: new Date().toISOString()
          });
        }
      } catch (stripeErr) {
        console.warn('[Verify] Stripe retrieval error:', stripeErr);
      }
    }

    if (purchase && purchase.status === 'PAID') {
      const plan = COMMERCIAL_PLANS[purchase.planId] || COMMERCIAL_PLANS.MOVE_PASS;

      return NextResponse.json({
        verified: true,
        status: 'PAID',
        sessionId: purchase.stripeSessionId,
        planId: purchase.planId,
        planName: plan.displayName,
        customerEmail: purchase.customerEmail,
        amountCAD: purchase.amountCAD,
        currency: purchase.currency,
        paymentEnvironment: purchase.paymentEnvironment,
        downloadUrl: `/api/download/blueprint?session_id=${purchase.stripeSessionId}`
      });
    }

    return NextResponse.json(
      {
        verified: false,
        status: 'PENDING_OR_UNPAID',
        error: 'Payment confirmation pending or not found.'
      },
      { status: 200 }
    );
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Internal verification error';
    return NextResponse.json({ verified: false, error: message }, { status: 500 });
  }
}
