import { NextRequest, NextResponse } from 'next/server';
import { createStripePortalSession } from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { stripeCustomerId } = body as { stripeCustomerId: string };

    if (!stripeCustomerId) {
      return NextResponse.json(
        { error: 'Customer ID is required to open billing portal.' },
        { status: 400 }
      );
    }

    const origin = req.headers.get('origin') || process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';
    const returnUrl = `${origin}/account`;

    const { url } = await createStripePortalSession(stripeCustomerId, returnUrl);
    return NextResponse.json({ url });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Failed to open billing portal.';
    console.error('Portal error:', error);
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}
