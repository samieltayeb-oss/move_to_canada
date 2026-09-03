# DATA FRESHNESS, PROVENANCE & AUDIT POLICY
**Project:** MOVE_TO_CANADA — Yassir's Calgary Move Command Center  
**Policy Version:** 2026.1  

---

## 1. Statutory & Market Freshness Thresholds

To ensure Yassir and his family make critical life decisions based only on verified, active data, every data entity in the application carries strict freshness lifespans:

```
┌─────────────────────────────────┬───────────────────┬──────────────────────┐
│ Data Category                   │ Maximum Validity  │ Refresh Frequency    │
├─────────────────────────────────┼───────────────────┼──────────────────────┤
│ Bank Newcomer Promotions        │ 30 Days           │ Monthly Audit        │
│ Telecom / Mobile Rate Plans     │ 30 Days           │ Monthly Audit        │
│ Residential Rent Benchmarks     │ 30 Days           │ Monthly (Rentals.ca) │
│ Municipal Transit Fares         │ 365 Days          │ Annual (Dec/Jan)     │
│ Municipal Utility Charges       │ 365 Days          │ Annual (Dec/Jan)     │
│ Regulated Energy Default (RoLR) │ 30 Days           │ Monthly (AUC)        │
│ Statutory Tax & Child Benefits  │ 365 Days          │ Annual (Jan / July)  │
│ AHCIP & Driving Licensing Rules │ 90 Days           │ Quarterly            │
│ School Tuition & Fees           │ 365 Days          │ Annual (Spring)      │
│ Census & Income Demographics    │ 5 Years (Census)  │ As Released (StatCan)│
│ Foreign Exchange (SAR/CAD)      │ Daily             │ Bank of Canada API   │
└─────────────────────────────────┴───────────────────┴──────────────────────┘
```

---

## 2. Freshness Status Indicator System

Every data card, price summary, and comparison module in the UI renders a dynamic status badge:

1. **CURRENT (Green):** Verified within the primary validity window (e.g., within 30 days for banking/telecom, within 90 days for statutory programs).
2. **RECENT (Blue):** Within 30–60 days; minor promotional shifts possible, but baseline rates remain stable.
3. **AGING (Amber):** Exceeding 60 days; requires verification before making contractual commitments.
4. **STALE (Red):** Past maximum validity; flagged with a clear warning: *"Offer expired or pending re-verification. Do not rely without clicking official source."*

---

## 3. Data Integrity & Provenance Schema

Every price, fee, and rate entity in `/src/data/` adheres to the following TypeScript interface:

```typescript
export interface VerifiedRecord<T = number | string> {
  id: string;
  name: string;
  value: T;
  unit?: string;
  currency: 'CAD' | 'SAR' | 'PERCENT' | 'RATIO';
  geography: string;
  effectiveDate: string; // ISO 8601
  lastVerifiedAt: string; // ISO 8601
  expiresAt?: string; // ISO 8601
  sourceId: string; // References SOURCE_REGISTRY.md
  sourceUrl: string;
  confidence: number; // 0 to 100
  freshnessStatus: 'CURRENT' | 'RECENT' | 'AGING' | 'STALE';
  notes?: string;
}
```

---

## 4. Maintenance & Audit Commands
The repository includes dedicated audit scripts:
- `npm run data:audit` — Scans all JSON/TS datasets, checks `lastVerifiedAt` against current date, and outputs a formatted verification ledger.
- `npm run data:validate` — Validates structural schemas, broken source links, and currency types.
- `npm run data:stale` — Generates an automated alert report of records approaching or exceeding expiration dates.
