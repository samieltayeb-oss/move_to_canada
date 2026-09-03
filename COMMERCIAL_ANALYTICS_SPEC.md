# NEXORA MOVE — COMMERCIAL ANALYTICS & PRIVACY SPECIFICATION
**Version:** 3.0.0  
**Implementation Target:** Privacy-conscious telemetry  

---

## 1. Core Privacy Invariants
1. **Zero PII inside analytics payloads:** Income amounts, child names, resume text, exact addresses, and private medical notes MUST NEVER be included in analytics payloads.
2. **Anonymous Identification:** Events are keyed to randomized session tokens or pseudonymized user IDs.

---

## 2. Tracked Funnel Milestones

```
[ landing_view ]
       │
       ▼
[ demo_started ]
       │
       ▼
[ signup_started ] ───► [ signup_completed ]
                              │
                              ▼
                   [ onboarding_completed ]
                              │
                              ▼
                   [ scenario_created ]
                              │
                              ▼
                   [ comparison_viewed ]
                              │
                              ▼
                   [ pricing_viewed ]
                              │
                              ▼
                   [ checkout_started ]
                              │
                              ▼
                   [ purchase_completed ]
                   (Move Pass / Pro / Concierge)
```

---

## 3. Telemetry Event Schema

```typescript
interface AnalyticsEventPayload {
  eventName: string; // e.g. 'checkout_started'
  timestamp: string; // ISO 8601
  anonymousId: string;
  properties: {
    planId?: string; // 'MOVE_PASS', 'PRO_MONTHLY', 'CONCIERGE'
    currency?: 'CAD' | 'SAR';
    locale?: 'en' | 'ar';
    originMarket?: 'saudi' | 'uae' | 'qatar' | 'kuwait' | 'other';
    destinationCity?: string; // e.g. 'Calgary', 'Toronto', 'Vancouver'
  };
}
```
