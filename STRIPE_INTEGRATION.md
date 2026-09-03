# NEXORA MOVE — STRIPE INTEGRATION SPECIFICATION
**Version:** 3.0.0  
**Status:** IMPLEMENTED (STRIPE TEST MODE ONLY)  
**Guardrail:** `LIVE_PAYMENTS_ENABLED = false`  

---

## 1. Gateway Isolation & Architecture
Stripe operations are executed solely through server-side Next.js route handlers (`src/app/api/checkout` and `src/app/api/webhooks/stripe`).
No secret keys (`STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`) are accessible in client JavaScript bundles.

---

## 2. Stripe Products & Test Prices Created

### Product 1: NEXORA MOVE — Move Pass
*   **Stripe Product Name:** `NEXORA MOVE — Move Pass`
*   **Billing Type:** One-time (`mode: 'payment'`)
*   **Amount:** $49.00 CAD (Founding Offer) / $79.00 CAD (Regular)
*   **Test Price ID:** `price_test_move_pass_49`
*   **Description:** Complete personalized family relocation intelligence blueprint.

### Product 2: NEXORA MOVE — Pro Career & Relocation
*   **Stripe Product Name:** `NEXORA MOVE — Pro Career Suite`
*   **Billing Type:** Recurring Monthly (`mode: 'subscription'`)
*   **Amount:** $19.99 CAD / month
*   **Test Price ID:** `price_test_pro_monthly_1999`
*   **Description:** Unlimited ATS resume tailoring, cover letter generator, and career tracking.

### Product 3: NEXORA MOVE — Family Concierge
*   **Stripe Product Name:** `NEXORA MOVE — Family Concierge Plan`
*   **Billing Type:** One-time (`mode: 'payment'`)
*   **Amount:** $249.00 CAD
*   **Test Price ID:** `price_test_concierge_249`
*   **Description:** 1-on-1 personalized relocation planning session and scenario audit.

---

## 3. Stripe Customer Billing Portal
Pro subscribers can access the official Stripe Customer Billing Portal to:
*   Update payment cards.
*   View billing history and download official PDF tax invoices.
*   Cancel subscription with 1-click self-service without requiring support intervention.
