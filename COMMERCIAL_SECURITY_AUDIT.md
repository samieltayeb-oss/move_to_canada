# NEXORA MOVE — COMMERCIAL SECURITY & ATTACK VECTOR AUDIT
**Version:** 3.0.0  
**Audit Scope:** Stripe Checkout, Webhooks, RLS Isolation, Client Tampering  
**Status:** 100% DEFENSE-IN-DEPTH PASS  

---

## 1. Attack Vector Testing & Verification

### Vector 1: Client Price Tampering (e.g. Change $49 to $1 in Request)
*   **Attack:** Malicious user intercepts checkout POST request and injects `{ amount: 100, price: 1 }`.
*   **Defense:** The checkout route (`src/app/api/checkout/route.ts`) discards any client-supplied amount or price fields. It resolves the price strictly from the canonical server registry (`COMMERCIAL_PLANS[planId].priceCAD`).
*   **Result:** **DEFENDED (PASS)**

### Vector 2: Success URL Forgery / Parameter Tampering
*   **Attack:** User manually visits `/payment/success?session_id=fake_123` hoping to activate Move Pass without paying.
*   **Defense:** Entitlements are never granted on page load. Entitlements are granted solely via cryptographic Stripe webhook notifications (`checkout.session.completed`) or direct Stripe API verification.
*   **Result:** **DEFENDED (PASS)**

### Vector 3: Webhook Forgery & Replay
*   **Attack:** Attacker posts fake webhook payload to `/api/webhooks/stripe` to spoof subscription activation.
*   **Defense:** `stripe.webhooks.constructEvent` cryptographically verifies the HMAC-SHA256 signature using `STRIPE_WEBHOOK_SECRET`. Unsigned/forged requests fail with HTTP 400. In addition, `event.id` deduplication prevents replaying valid past events.
*   **Result:** **DEFENDED (PASS)**

### Vector 4: LocalStorage / State Manipulation
*   **Attack:** User edits browser `localStorage` to inject `userEntitlement = "PRO_MONTHLY"`.
*   **Defense:** API routes and server actions evaluate entitlements server-side via `hasFeatureAccess` against database records. Frontend state manipulation only alters visual rendering, not backend execution.
*   **Result:** **DEFENDED (PASS)**

### Vector 5: Premature Real-Money Charging
*   **Attack:** System inadvertently charges a real credit card during testing or deployment.
*   **Defense:** `COMMERCIAL_CONFIG.LIVE_PAYMENTS_ENABLED = false` is hard-enforced in code and verified by automated unit tests.
*   **Result:** **DEFENDED (PASS)**
