# NEXORA MOVE — STRIPE WEBHOOK SECURITY & IDEMPOTENCY
**Version:** 3.0.0  
**Handler Route:** `src/app/api/webhooks/stripe/route.ts`  

---

## 1. Cryptographic Signature Verification
All incoming webhook requests MUST carry a valid `stripe-signature` header generated using the secret shared between Stripe and NEXORA MOVE (`STRIPE_WEBHOOK_SECRET`).

*   Payload verification uses `stripe.webhooks.constructEvent(rawBody, signature, secret)`.
*   Any request lacking the signature or presenting an invalid cryptographic signature is immediately rejected with HTTP 400 Bad Request.
*   The raw request body is read via `req.text()` to prevent JSON parsing mutations that would invalidate HMAC-SHA256 signatures.

---

## 2. Webhook Idempotency & Replay Protection
To protect against network retries, duplicate webhook delivery, or malicious replay attacks:
1. Every received Stripe event ID (`event.id`) is tracked in an authoritative deduplication cache.
2. If `processedEvents.has(event.id)` returns `true`, the event is acknowledged immediately (`{ received: true, deduplicated: true }`) without re-executing entitlement grants or database writes.
3. Multiple concurrent checkout completions for the same user reference will not result in duplicate billing or duplicate purchases.

---

## 3. Supported Lifecycle Events

| Event Type | Action Taken | Entitlement Impact |
| :--- | :--- | :--- |
| `checkout.session.completed` | Validates session metadata (`planId`, `userId`) | Grants `MOVE_PASS`, `PRO_MONTHLY`, or `CONCIERGE` |
| `invoice.payment_succeeded` | Records recurring monthly renewal | Extends `proExpiresAt` by 30 days |
| `customer.subscription.deleted` | Marks subscription canceled | Preserves data; downgrades tier at period end |
| `charge.refunded` | Records refund transaction | Transitions purchase status to `REFUNDED` |
