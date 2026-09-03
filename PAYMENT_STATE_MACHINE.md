# NEXORA MOVE — PAYMENT STATE MACHINE SPECIFICATION
**Version:** 3.0.0  

---

## 1. One-Time Purchase States (Move Pass & Concierge)

```
[ INITIATED ] ───► [ PENDING_CHECKOUT ]
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
        [ COMPLETED ]               [ CANCELED ]
             │
      (Customer Refund)
             │
             ▼
        [ REFUNDED ]
```

*   `INITIATED`: User selected plan in `/pricing` or clicked upgrade prompt.
*   `PENDING_CHECKOUT`: Stripe Checkout Session created with server-verified amount.
*   `COMPLETED`: Verified `checkout.session.completed` webhook received. Entitlement permanently granted.
*   `CANCELED`: User clicked back or aborted on Stripe Checkout page (`/payment/cancel`). User profile and scenarios preserved.
*   `REFUNDED`: Full or partial refund issued via Stripe dashboard. Entitlement revoked gracefully.

---

## 2. Subscription Lifecycle States (Pro Monthly)

```
[ CHECKOUT ] ───► [ ACTIVE ] ───(Renewal)───► [ ACTIVE ]
                     │
              (User Cancels)
                     │
                     ▼
           [ CANCELED_PENDING ]
           (Access until period end)
                     │
             (Period Expires)
                     │
                     ▼
                 [ EXPIRED ]
       (Downgrades to Move Pass / Free;
           ALL USER DATA PRESERVED)
```

*   `ACTIVE`: Customer pays $19.99/mo; unlimited ATS resume tools and scenario creator are active.
*   `CANCELED_PENDING`: User canceled via Stripe Customer Billing Portal. Access remains active through the paid 30-day period.
*   `EXPIRED`: Period has passed. User drops to Move Pass or Explore tier. User's previous resumes and job tracker entries remain stored safely.
