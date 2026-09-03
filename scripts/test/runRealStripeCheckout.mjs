import fs from 'node:fs';
import puppeteer from 'puppeteer-core';
import Stripe from 'stripe';

// Read .env.local without exposing values
const env = fs.readFileSync('.env.local', 'utf8');
env.split('\n').forEach(line => {
  const [k, ...v] = line.split('=');
  if (k && v.length) process.env[k.trim()] = v.join('=').trim();
});

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

async function runMovePassCheckout() {
  console.log('=== STEP 1: CREATE STRIPE TEST CHECKOUT SESSION ===');
  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'cad',
        product_data: {
          name: 'NEXORA MOVE — Move Pass',
          description: 'The complete family relocation intelligence blueprint. Pay once, plan with clarity.'
        },
        unit_amount: 4900
      },
      quantity: 1
    }],
    customer_email: 'test_mover_real@example.com',
    client_reference_id: 'usr_real_test_01',
    metadata: {
      userId: 'usr_real_test_01',
      planId: 'MOVE_PASS',
      environment: 'test'
    },
    success_url: 'https://movetocanada.vercel.app/payment/success?session_id={CHECKOUT_SESSION_ID}&plan=MOVE_PASS',
    cancel_url: 'https://movetocanada.vercel.app/payment/cancel?plan=MOVE_PASS'
  });

  console.log('Created Session ID:', session.id);
  console.log('Session URL:', session.url);

  console.log('=== STEP 2: COMPLETE CHECKOUT IN HEADLESS EDGE ===');
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    console.log('Navigating to Stripe hosted checkout...');
    await page.goto(session.url, { waitUntil: 'networkidle2', timeout: 35000 });
    console.log('Page loaded. Title:', await page.title());

    // Give Stripe checkout UI a moment to mount
    await new Promise(r => setTimeout(r, 3000));

    // Fill email if needed
    const emailSelector = 'input[type="email"], #email';
    const emailField = await page.$(emailSelector);
    if (emailField) {
      console.log('Filling email...');
      await emailField.type('test_mover_real@example.com', { delay: 30 });
    }

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
      await nameField.type('Test Newcomer', { delay: 30 });
    }

    // Postal code if required by Canada billing
    const postalSelector = '#billingPostalCode, input[name="billingPostalCode"], input[autocomplete="postal-code"]';
    const postalField = await page.$(postalSelector);
    if (postalField) {
      await postalField.type('T2P 1J9', { delay: 30 });
    }

    console.log('Submitting payment form...');
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

  console.log('=== STEP 3: API VERIFICATION DIRECT FROM STRIPE ===');
  const verifiedSession = await stripe.checkout.sessions.retrieve(session.id);
  console.log('STRIPE_SESSION_STATUS:', {
    id: verifiedSession.id,
    payment_status: verifiedSession.payment_status,
    amount_total: verifiedSession.amount_total,
    currency: verifiedSession.currency,
    livemode: verifiedSession.livemode,
    payment_intent: verifiedSession.payment_intent,
    customer: verifiedSession.customer
  });

  if (verifiedSession.payment_intent) {
    const pi = await stripe.paymentIntents.retrieve(verifiedSession.payment_intent);
    console.log('STRIPE_PAYMENT_INTENT_STATUS:', {
      id: pi.id,
      status: pi.status,
      amount: pi.amount,
      currency: pi.currency,
      livemode: pi.livemode,
      charges_count: pi.charges?.data?.length
    });

    console.log('=== STEP 4: REAL REFUND TEST ===');
    const refund = await stripe.refunds.create({
      payment_intent: pi.id,
      reason: 'requested_by_customer'
    });
    console.log('STRIPE_REFUND_RESULT:', {
      id: refund.id,
      status: refund.status,
      amount: refund.amount,
      currency: refund.currency,
      payment_intent: refund.payment_intent
    });
  }
}

runMovePassCheckout().catch(err => {
  console.error('EXECUTION_ERROR:', err.message);
  process.exit(1);
});
