import { NextRequest, NextResponse } from 'next/server';
import { getPurchasesByEmail, getEntitlement } from '@/lib/commerce/store';
import { COMMERCIAL_PLANS } from '@/config/plans';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required.' },
        { status: 400 }
      );
    }

    const normEmail = email.toLowerCase().trim();
    const purchases = await getPurchasesByEmail(normEmail);
    const entitlement = await getEntitlement(normEmail);

    const activePurchases = purchases
      .filter(p => p.status === 'PAID')
      .map(p => {
        const plan = COMMERCIAL_PLANS[p.planId] || COMMERCIAL_PLANS.MOVE_PASS;
        return {
          sessionId: p.stripeSessionId,
          planId: p.planId,
          planName: plan.displayName,
          amountCAD: p.amountCAD,
          purchasedAt: p.createdAt,
          downloadUrl: `/api/download/blueprint?session_id=${p.stripeSessionId}`
        };
      });

    return NextResponse.json({
      success: true,
      found: activePurchases.length > 0,
      email: normEmail,
      entitlement: entitlement ? {
        planId: entitlement.planId,
        isMovePassPurchased: entitlement.isMovePassPurchased,
        isProSubscribed: entitlement.isProSubscribed,
        proExpiresAt: entitlement.proExpiresAt
      } : null,
      purchases: activePurchases
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Recovery error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
