# PHASE 2 MASTER ARCHITECTURE SPECIFICATION
## NEXORA MOVE — Canada Relocation Intelligence (Alberta • Ontario • British Columbia)

**Author:** Antigravity Agent  
**Status:** In Progress / Production Approved  
**Scope:** Multi-Province Expansion (AB, ON, BC) & Multi-Scenario Relocation Intelligence  
**Golden Baseline Preservation:** Yassir A. E. Abdulrhman (Calgary, AB) 100% Immutable  

---

## 1. System Vision & Non-Negotiable Invariants

1. **One Unified Platform:** A single Next.js 16 application with client-side reactive provincial state and server-side fail-closed security.
2. **Zero Contamination of Statutory Engines:**
   - **Federal Engine (Shared):** CRA Canada Child Benefit (CCB), Canada Green / Carbon Rebate (CGEB), Federal Personal Income Tax, Canadian Dental Care Plan (CDCP), RESP/CESG/CLB, SIN issuance, Transport Canada 15-year import laws.
   - **Provincial Engines (Strictly Isolated):**
     - **Alberta (AB):** Graduated Brackets (8% to 15%), BPA $22,769, 0% PST, AHCIP (immediate), ACFB, Class 5-GDL, Calgary & Edmonton.
     - **Ontario (ON):** Graduated Brackets (5.05% to 13.16%), BPA $12,776, Ontario Surtax (20%/36%), Ontario Health Premium (OHP), 13% HST, OHIP (immediate), OCB & OTB, DriveTest, Toronto, Ottawa, Mississauga, Brampton, Hamilton, Kitchener-Waterloo.
     - **British Columbia (BC):** Graduated Brackets (5.06% to 20.5%), BPA $12,880, 5% GST + 7% PST, MSP (2-month wait + arrival month), BC Family Benefit (BCFB), ICBC Autoplan, Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Victoria.
3. **Yassir Golden Baseline Lockdown:**
   - Yassir's profile, career history, family structure (wife + 3 children aged 16, 11, 5), Calgary scenario ($125,000 CAD), and ATS resume remain 100% locked.
   - Any new user can create custom scenarios across any of the 12 destination cities.

---

## 2. Directory & Component Architecture

```
src/
├── app/
│   ├── (auth routes)
│   │   ├── register/
│   │   ├── login/
│   │   ├── forgot-password/
│   │   ├── reset-password/
│   │   ├── onboarding/
│   │   └── account/
│   ├── (hub routes - 18 existing hubs destination-aware)
│   │   ├── benefits/
│   │   ├── career/
│   │   ├── housing/
│   │   ├── healthcare/
│   │   ├── driving/
│   │   ├── schools/
│   │   ├── muslim-life/
│   │   ├── cost-of-living/
│   │   ├── city-compare/ (COMPARE MY LIFE IN CANADA)
│   │   └── plan/
│   └── page.tsx (Dynamic landing page with province/city switcher)
├── context/
│   ├── AppContext.tsx (activeProvince, activeCity, scenarios, currency, locale)
│   └── AuthContext.tsx (Supabase RLS, fail-closed production gate)
├── data/
│   ├── types.ts
│   ├── canada/
│   │   ├── provinceConfig.ts (AB, ON, BC registry)
│   │   ├── federal/
│   │   │   ├── taxes/2026.ts
│   │   │   ├── benefits/ccbEngine.ts
│   │   │   └── dental/cdcp.ts
│   │   └── provinces/
│   │       ├── ab/ (Calgary, Edmonton)
│   │       ├── on/ (Toronto, Ottawa, Mississauga, Brampton, Hamilton, Kitchener)
│   │       └── bc/ (Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Victoria)
```

---

## 3. Global Multi-Scenario State Model

Every relocation scenario encapsulates:
- `id`: UUID
- `userId`: UUID (foreign key to auth user)
- `scenarioName`: e.g., "Calgary Family Plan", "Toronto Financial Hub", "Vancouver Tech & Coast"
- `province`: `'AB' | 'ON' | 'BC'`
- `city`: e.g., `'Toronto'`, `'Calgary'`, `'Vancouver'`, `'Ottawa'`
- `targetSalaryCAD`: annual gross household salary
- `housingType`: `'3-bed-apt' | '3-bed-townhouse' | '4-bed-detached'`
- `commuteMode`: `'car' | 'transit' | 'hybrid'`
- `schoolPreference`: `'public' | 'catholic' | 'islamic'`
- `isBaseline`: boolean (true only for Yassir's Calgary golden scenario)

---

## 4. Multi-Tenant Database & RLS Isolation

The SaaS schema uses PostgreSQL Row Level Security (RLS) ensuring that:
`CREATE POLICY "Users can only access own scenarios" ON scenarios FOR ALL USING (auth.uid() = user_id);`
User B cannot read, update, or delete User A's scenarios, custom budgets, or job applications.

---

## 5. Provenance & Verification Protocol

Every statistical data point includes:
- `source_id`: canonical slug in source registry
- `effective_date`: statutory year (2026)
- `last_verified_at`: ISO timestamp
- `confidence`: `'STATUTORY' | 'OFFICIAL_CENSUS' | 'MARKET_INDEX'`
