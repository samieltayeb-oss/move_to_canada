# PROVINCE-AWARE ARCHITECTURE & DECOUPLING SPECIFICATION

**Platform:** NEXORA MOVE  
**Phase:** 1.5C Architecture  
**Target:** Clean Provincial Decoupling preparing for Phase 2 Expansion (Ontario & BC) without polluting V1.

---

## 1. Directory & Namespace Structure

```
src/data/canada/
├── federal/
│   ├── benefits/
│   │   └── 2026-2027.ts        # Statutory CCB & CGEB benchmarks
│   ├── taxes/                  # Federal tax brackets (15%, 20.5%, 26%, 29%, 33%)
│   ├── banking/                # Big 6 newcomer programs & credit rules
│   └── immigration/            # Transport Canada 15-year vehicle import rules
│
├── provinces/
│   ├── ab/                     # Alberta Implementation (Active V1)
│   │   ├── taxes/              # 10% flat personal rate, 0% PST
│   │   ├── benefits/           # ACFB, ACHB, $15/day childcare
│   │   ├── healthcare/         # AHCIP 0-day wait rules
│   │   ├── driving/            # GDL exemption for Saudi licence
│   │   └── schools/            # CBE Public $0 & CIS Alternative
│   │
│   ├── on/                     # Ontario Stubs (Prepared for Phase 2 — strictly deferred)
│   └── bc/                     # BC Stubs (Prepared for Phase 2 — strictly deferred)
│
└── provinceConfig.ts           # Typed ProvinceConfig registry
```

---

## 2. Typed ProvinceConfig Interface

Every Canadian province in NEXORA MOVE conforms to the `ProvinceConfig` contract:

```typescript
export interface ProvinceConfig {
  code: 'AB' | 'ON' | 'BC';
  name: string;
  arabicName: string;
  capitalCity: string;
  majorCities: string[];
  tagline: string;
  arabicTagline: string;
  tax: ProvinceTaxConfig;
  healthcare: ProvinceHealthcareConfig;
  licensing: ProvinceLicensingConfig;
  education: ProvinceEducationConfig;
  isImplementedInV1: boolean;
  phaseRelease: 'V1' | 'PHASE_2';
}
```

---

## 3. Strict Phase Boundary Protection

- **Directive Adherence:** No Ontario or British Columbia datasets, tax tables, or listings have been populated into V1.
- **Expansion Readiness:** When Phase 2 is authorized, populating `ON` and `BC` requires only filling out their respective namespace data engines and setting `isImplementedInV1: true` in `CANADIAN_PROVINCES`.
