# NEXORA MOVE — PHASE 3 MASTER ARCHITECTURE
**Document Version:** 3.0.0  
**Status:** IMPLEMENTED & TEST-GATE VALIDATED  
**Canonical App URL:** `https://movetocanada.vercel.app`  
**Deployment Date:** September 3, 2026  

---

## 1. Executive Summary
Phase 3 commercializes the production-tested NEXORA MOVE multi-user SaaS platform without altering approved Phase 1.5 and Phase 2 statutory engines, and without compromising Yassir's approved Calgary baseline.

The architecture introduces:
1. **Four Canonical Commercial Tiers:** Explore (Free), Move Pass ($49 founding / $79 regular one-time), Pro ($19.99/mo subscription), and Family Concierge ($249 one-time).
2. **Server-Authoritative Entitlements:** Capabilities are evaluated on the server against subscription states and purchased tiers; frontend tampering cannot grant unauthorized access.
3. **Stripe Integration in Test Mode:** Fully isolated payment sessions, webhook signature verification, and idempotency protection with `LIVE_PAYMENTS_ENABLED = false` strictly enforced.
4. **Data Preservation Guarantee:** Downgrading or canceling Pro preserves 100% of user resumes, scenarios, and family budgets.
5. **Arabic GCC Market Funnels:** Native, culturally attuned landing pages for Saudi Arabia, the UAE, Qatar, and Kuwait.
6. **Consumer Protection & Legal Boundary:** Unambiguous terms and disclaimers stating NEXORA MOVE is an informational and financial planning tool, not an RCIC immigration consulting firm.

---

## 2. High-Level System Architecture

```
[ Visitor / GCC Newcomer ]
            │
            ▼
┌───────────────────────────────┐
│     Public Acquisition        │
│ • Home Page (Try Demo)        │
│ • /pricing (CAD / SAR Toggle) │
│ • /ar/saudi-to-canada         │
│ • /ar/uae-to-canada           │
│ • /ar/qatar-to-canada         │
│ • /ar/kuwait-to-canada        │
└───────────────┬───────────────┘
                │
                ▼
┌───────────────────────────────┐
│     Authentication Gate       │
│ • Supabase Auth (JWT)         │
│ • Public / Register / Login   │
└───────────────┬───────────────┘
                │
                ▼
┌─────────────────────────────────────────────────────────┐
│              Server-Authoritative Entitlements          │
│ • src/config/plans.ts (Canonical Registry)              │
│ • src/lib/entitlements.ts (hasFeatureAccess)            │
│ • src/components/FeatureGate.tsx (Graceful Previews)   │
└───────────────┬─────────────────────────────────────────┘
                │
      ┌─────────┴─────────┐
      ▼                   ▼
┌──────────────┐    ┌───────────────────────────────────┐
│ Free Explore │    │         Stripe Checkout           │
│  (1 Scenario)│    │ • Server Price ID Validation     │
└──────────────┘    │ • LIVE_PAYMENTS_ENABLED = false   │
                    └─────────────┬─────────────────────┘
                                  │
                                  ▼
                    ┌───────────────────────────────────┐
                    │     Stripe Webhook Listener       │
                    │ • Cryptographic Signature Check   │
                    │ • Idempotency & Deduplication     │
                    │ • Grant / Revoke Entitlements     │
                    └───────────────────────────────────┘
```

---

## 3. Core Component Boundaries
*   `src/config/plans.ts`: Canonical single source of truth for pricing, limits, and Stripe test/live Price IDs.
*   `src/config/features.ts`: Master feature switches enforcing `LIVE_PAYMENTS_ENABLED: false`.
*   `src/lib/stripe.ts`: Server-only Stripe SDK client.
*   `src/app/api/checkout/route.ts`: Secure checkout session creation with zero client price tampering.
*   `src/app/api/webhooks/stripe/route.ts`: Idempotent webhook receiver with signature validation.
*   `src/app/api/portal/route.ts`: Stripe Customer Billing Portal for self-serve cancellation.
