# NEXORA MOVE — LIVE PAYMENT ACTIVATION CHECKLIST
**Status:** DRAFT / PENDING OWNER SIGN-OFF  
**Security Enforcement:** `LIVE_PAYMENTS_ENABLED = false`  

---

## 1. Prerequisites Required Before Enabling Real Money (Live Mode)

Before changing `LIVE_PAYMENTS_ENABLED` to `true`, the business owner MUST complete and certify:

### Legal & Corporate Entity Setup
- [ ] Incorporate Canadian or relevant corporate business entity.
- [ ] Determine federal GST/HST registration number and provincial PST requirements.
- [ ] Set up corporate commercial bank account denominated in CAD.

### Live Stripe Account Configuration
- [ ] Activate Stripe account with verified corporate identity, legal entity, and bank details.
- [ ] Configure live products and prices in the Stripe Dashboard to match `src/config/plans.ts`:
  - `price_live_move_pass_79` ($79 CAD)
  - `price_live_pro_monthly_1999` ($19.99 CAD/mo)
  - `price_live_concierge_249` ($249 CAD)
- [ ] Create live webhook endpoint pointing to `https://movetocanada.vercel.app/api/webhooks/stripe` listening for:
  - `checkout.session.completed`
  - `invoice.payment_succeeded`
  - `customer.subscription.deleted`
  - `charge.refunded`
- [ ] Securely add production secrets in Vercel environment variables:
  - `STRIPE_SECRET_KEY` = `sk_live_...`
  - `STRIPE_WEBHOOK_SECRET` = `whsec_...`
  - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` = `pk_live_...`

### Commercial Policy Sign-off
- [ ] Owner reviews and approves final Terms of Service (`/terms`).
- [ ] Owner reviews and approves final Refund Policy (`/refund-policy`).
- [ ] Owner verifies customer support email dispatch (`support@nexoramove.ca`).

### Technical Switch Activation
- [ ] Once all items above are certified, update `src/config/features.ts`:
  ```typescript
  LIVE_PAYMENTS_ENABLED: true,
  STRIPE_TEST_MODE_ENABLED: false
  ```
- [ ] Execute test transaction with live card ($1 test refund or live purchase test).
- [ ] Confirm receipt delivery and entitlement activation.
