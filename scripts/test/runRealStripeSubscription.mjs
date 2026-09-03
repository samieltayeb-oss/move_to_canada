import fs from 'node:fs';
import puppeteer from 'puppeteer-core';
import Stripe from 'stripe';

const env = fs.readFileSync('.env.local', 'utf8');
env.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v.length) process.env[k.trim()] = v.join('=').trim();
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function runProSubscriptionTest() {
  console.log('=== STEP 1: CREATE STRIPE CUSTOMER ===');
  const customer = await stripe.customers.create({
    email: 'test_pro_sub_real@example.com',
    name: 'Pro Career Applicant',
    metadata: { userId: 'usr_pro_test_02', environment: 'test' }
  });
  console.log('Created Customer ID:', customer.id);

  console.log('=== STEP 2: CREATE SUBSCRIPTION CHECKOUT SESSION ===');
  const session = await stripe.checkout.sessions.create({
    mode: 'subscription',
    customer: customer.id,
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'cad',
        product_data: {
          name: 'NEXORA MOVE — Pro Career & Relocation',
          description: 'Unlimited career acceleration, ATS optimization, and multi-scenario relocation tools.'
        },
        unit_amount: 1999,
        recurring: {
          interval: 'month'
        }
      },
      quantity: 1
    }],
    client_reference_id: 'usr_pro_test_02',
    metadata: {
      userId: 'usr_pro_test_02',
      planId: 'PRO_MONTHLY',
      environment: 'test'
    },
    success_url: 'https://movetocanada.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=PRO_MONTHLY',
    cancel_url: 'https://movetocanada.vercel.app/payment/cancel?plan=PRO_MONTHLY'
  });

  console.log('Created Subscription Session ID:', session.id);
  console.log('Session URL:', session.url);

  console.log('=== STEP 3: COMPLETE SUBSCRIPTION CHECKOUT IN HEADLESS EDGE ===');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    console.log('Navigating to Stripe subscription checkout...');
    await page.goto(session.url, { waitUntil: 'networkidle2', timeout: 35000 });
    console.log('Page loaded. Title:', await page.title());

    await new Promise(r => setTimeout(r, 3000));

    // Card number selector
    const cardNumberSelector = '#cardNumber, input[name="cardNumber"], input[autocomplete="cc-number"]';
    await page.waitForSelector(cardNumberSelector, { timeout: 15000 });
    console.log('Entering 4242 Stripe test card...');
    await page.type(cardNumberSelector, '4242424242424242', { delay: 40 });

    const cardExpirySelector = '#cardExpiry, input[name="cardExpiry"], input[autocomplete="cc-exp"]';
    await page.type(cardExpirySelector, '1228', { delay: 40 });

    const cardCvcSelector = '#cardCvc, input[name="cardCvc"], input[autocomplete="cc-csc"]';
    await page.type(cardCvcSelector, '123', { delay: 40 });

    const billingNameSelector = '#billingName, input[name="billingName"], input[autocomplete="name"]';
    const nameField = await page.$(billingNameSelector);
    if (nameField) {
      await nameField.type('Pro Career Applicant', { delay: 30 });
    }

    const postalSelector = '#billingPostalCode, input[name="billingPostalCode"], input[autocomplete="postal-code"]';
    const postalField = await page.$(postalSelector);
    if (postalField) {
      await postalField.type('T2P 1J9', { delay: 30 });
    }

    console.log('Submitting subscription form (Subscribe)...');
    const submitSelector = 'button[type="submit"], .SubmitButton';
    await page.click(submitSelector);

    console.log('Waiting for completion / redirect to success page...');
    await page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 30000 }).catch(() => {
      console.log('Navigation completed or timed out.');
    });

    console.log('Redirected to:', page.url());
  } finally {
    await browser.close();
  }

  console.log('=== STEP 4: RETRIEVE SUBSCRIPTION DIRECT FROM STRIPE API ===');
  const verifiedSession = await stripe.checkout.sessions.retrieve(session.id);
  console.log('STRIPE_SESSION_SUBSCRIPTION_RESULT:', {
    id: verifiedSession.id,
    payment_status: verifiedSession.payment_status,
    amount_total: verifiedSession.amount_total,
    currency: verifiedSession.currency,
    livemode: verifiedSession.livemode,
    customer: verifiedSession.customer,
    subscription: verifiedSession.subscription
  });

  if (verifiedSession.subscription) {
    const sub = await stripe.subscriptions.retrieve(verifiedSession.subscription);
    console.log('STRIPE_SUBSCRIPTION_STATUS:', {
      id: sub.id,
      status: sub.status,
      customer: sub.customer,
      current_period_start: new Date(sub.current_period_start * 1000).toISOString(),
      current_period_end: new Date(sub.current_period_end * 1000).toISOString(),
      interval: sub.items?.data?.[0]?.plan?.interval,
      amount: sub.items?.data?.[0]?.plan?.amount,
      currency: sub.items?.data?.[0]?.plan?.currency,
      livemode: sub.livemode
    });

    console.log('=== STEP 5: REAL SUBSCRIPTION CANCELLATION TEST ===');
    const canceledSub = await stripe.subscriptions.cancel(sub.id);
    console.log('STRIPE_CANCELLATION_RESULT:', {
      id: canceledSub.id,
      status: canceledSub.status,
      canceled_at: canceledSub.canceled_at ? new Date(canceledSub.canceled_at * 1000).toISOString() : null,
      livemode: canceledSub.livemode
    });
  }
}

runProSubscriptionTest().catch(err => {
  console.error('SUBSCRIPTION_TEST_ERROR:', err.message);
  process.exit(1);
});
