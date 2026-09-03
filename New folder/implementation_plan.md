# Implementation Plan: Phase 1.5 Master Execution (Data Preservation, Alberta V1 Acceptance, Multi-User SaaS & Province-Aware Architecture)

This plan details the technical execution for transforming `move_to_canada` into **NEXORA MOVE — Canada Relocation Intelligence**, preserving 100% of Yassir's approved baseline data as the reference demo scenario while unlocking multi-user authentication, persistent database storage, and a decoupled province-aware engine.

---

## User Review Required

> [!IMPORTANT]
> **Yassir Data Preservation Protocol:** Yassir's exact profile, verified employment history, educational credentials, family configuration (Ages 16, 11, 5), and Alberta/Calgary scenarios are immutably preserved in `src/data/demo/yassirBaseline.ts` and `snapshots/YASSIR_V1_BASELINE.json`. New users will receive pristine, blank profiles and will **never** inherit Yassir's personal information.

> [!IMPORTANT]
> **Phase 2 Expansion Boundary:** Pursuant to your directive, **DO NOT ADD ONTARIO OR BRITISH COLUMBIA YET**. The architecture will be fully refactored and typed to support multi-province modularity, but province dataset population for ON and BC is strictly deferred to Phase 2.

---

## Work Breakdown

### Step 0: Yassir Baseline Snapshot & Data Preservation
- Create snapshot directory `snapshots/` and write `snapshots/YASSIR_V1_BASELINE.json` containing the complete, unedited serialization of:
  - Family Profile (2 adults, 3 children [16, 11, 5], Calgary, AB, $85k savings, 4-bed house, 1 vehicle).
  - Career Profile & Verified Work History (Albilad Capital, Alawwal Invest, CSEC, degrees, top skills, 0 hallucinated certs).
  - Financial Scenario ($125k CAD Canadian salary, 250k SAR pre-arrival income, CCB $10,460 CAD/yr employment / $13,108 CAD/yr Year 1 pre-arrival).
  - Family Budget & Grocery model ($1,474 / $1,833 / $2,336).
- Create `src/data/demo/yassirBaseline.ts` as the canonical reference for Demo Mode.

---

### Step 1: Phase 1.5A — Alberta V1 Acceptance Fixes
1. **Benefits World-Income Linkage (`src/components/benefits/BenefitsSupportModule.tsx` & `src/data/benefitsEngine.ts`):**
   - Add explicit interactive selector: `BENEFIT INCOME BASIS`:
     - `[ Newcomer / Pre-Arrival Worldwide Income (Form RC66SCH) ]`
     - `[ Future Canadian Household Employment Income ]`
   - Clearly explain how prior-year world income dictates Year 1 CCB/ACFB/CGEB deposits vs. future Canadian salary.
   - Wire dynamic inputs from active profile instead of hardcoded values.
2. **CCB Statutory Second Threshold Correction (`benefits/federal/2026-2027.ts`):**
   - Create versioned statutory configuration: `src/data/canada/federal/benefits/2026-2027.ts` with `effective_from: '2026-07-01'`, `effective_to: '2027-06-30'`, `source: 'CRA T4114'`, `last_verified_at: '2026-09-03'`.
   - Update second threshold from `$79,349` to `$82,847` (indexed statutory CRA base).
   - Re-export into `benefitsEngine.ts`.
3. **Family Grocery Dynamic Engine (`src/data/groceries.ts` & `src/data/familyBudget.ts`):**
   - Remove stale `[11, 8, 4]` assumptions from `familyBudget.ts` and documentation comments.
   - Refactor `familyBudgetScenarios` to dynamically calculate grocery line items using `calculateFamilyFoodBudget(profile.childrenAges, profile.numAdults)`:
     - For Yassir's [16, 11, 5]: Value = $1,474/mo, Balanced = $1,833/mo, Premium = $2,336/mo.
     - Automatically updates when user changes children ages or household count.
4. **P2/P3 Cleanups:**
   - In `src/data/groceries.ts` & `FamilyGroceryModule.tsx`, display both the $65 upgrade delta ($3,250/yr spend) and the full $130 membership spend ($6,500/yr spend = $541.67/mo).
   - Update `docs/BANK_SCORING_METHODOLOGY.md` to reflect true formula outputs (RBC 93.3, CIBC 93.4).
   - Sync `docs/GROCERY_COST_MODEL.md` table to [16, 11, 5] ages.
   - Add ACFB indexing explanation and CIBC Year 2 fee savings note.
5. **Automated Calculation Tests:**
   - Create `scripts/test/calculations.test.mjs` verifying:
     - Tax calculations (Federal + AB).
     - CCB 3-children independent calculation and both threshold clawbacks.
     - CGEB 2026 expansion formula and phaseouts.
     - ACFB base and working phase-in/phaseout math.
     - Grocery dynamic pricing across different age sets.
     - Costco $65 vs $130 break-even.
   - Generate `ALBERTA_V1_FINAL_ACCEPTANCE.md` (Result: PASS).

---

### Step 2: Phase 1.5B — Multi-User SaaS Foundation
1. **Authentication & Supabase Architecture:**
   - Install `@supabase/supabase-js`.
   - Implement Supabase client helper: `src/lib/supabase/client.ts` and `src/lib/supabase/server.ts` with graceful fallback to demo/local session when Supabase env vars are not set or during static build.
   - Support:
     - Email sign up, email sign in, sign out, password recovery, session restore.
     - Clean architecture for Google OAuth.
2. **Database Schema & Row Level Security (RLS):**
   - Create SQL migration script: `supabase/migrations/20260903000001_multi_user_saas_schema.sql`:
     - Tables: `profiles`, `households`, `family_members`, `relocation_scenarios`, `user_priorities`, `career_profiles`, `employment_history`, `education`, `skills`, `resume_versions`, `job_targets`, `job_applications`, `saved_cities`, `saved_neighbourhoods`, `saved_businesses`, `settlement_tasks`, `budget_scenarios`, `benefit_scenarios`, `vehicle_scenarios`, `user_preferences`.
     - UUID primary keys and `user_id` foreign keys to `auth.users(id) ON DELETE CASCADE`.
     - Explicit RLS enabled on all 20 private tables with policies:
       - `SELECT USING (auth.uid() = user_id)`
       - `INSERT WITH CHECK (auth.uid() = user_id)`
       - `UPDATE USING (auth.uid() = user_id)`
       - `DELETE USING (auth.uid() = user_id)`
   - Create `DATABASE_SCHEMA.md` and `RLS_SECURITY_REPORT.md`.
3. **Interactive 9-Step Onboarding Flow (`src/components/onboarding/OnboardingWizard.tsx`):**
   - Step 1: Origin (Country, City).
   - Step 2: Destination (Province, City).
   - Step 3: Household (Adults, Children, Children Ages).
   - Step 4: Immigration Status (PR, Work Permit, Study Permit, etc.).
   - Step 5: Career (Profession, Industry, Years, Expected Salary).
   - Step 6: Housing (Rent/Buy, Bedrooms, Budget).
   - Step 7: Transportation (Car, Transit, Both).
   - Step 8: Priorities (Housing, Jobs, Schools, Safety, Muslim Life, etc.).
   - Step 9: "Generate My Move Plan" -> creates user scenario & redirects to dashboard.
4. **Auth Context & Multi-User State Management (`src/context/AuthContext.tsx`):**
   - Provides `user`, `profile`, `activeScenario`, `isAuthenticated`, `isDemoMode`, `login`, `signup`, `logout`, `enterDemoMode`.
   - When in Demo Mode: loads Yassir's approved baseline data with a prominent `[ DEMO PROFILE: Yassir A. E. Abdulrhman ]` banner.
   - When Authenticated: loads user's private data from database / cloud session.
5. **Account Settings Modal (`src/components/account/AccountSettingsModal.tsx`):**
   - Profile, Family, Security, Language, Export My Data (JSON), Delete Account.
6. **Career & Resume Privacy:**
   - User resumes and applications stored strictly under authenticated user ID.
   - Zero resume PII committed to Git or public buckets.

---

### Step 3: Phase 1.5C — Province-Aware Architecture
1. **Typed Province Configuration Interface (`src/data/canada/provinceConfig.ts`):**
   ```typescript
   export interface ProvinceConfig {
     code: 'AB' | 'ON' | 'BC';
     name: string;
     arabicName: string;
     salesTax: { provincialRate: number; harmonized: boolean; gstRate: number };
     taxEngine: { calculateTax: (taxableIncome: number) => number };
     benefitEngine: { calculateChildBenefit: (income: number, numKids: number) => number };
     healthcareSystem: { planName: string; waitPeriodDays: number; registrationWindowMonths: number };
     driverLicensing: { agencyName: string; gdlSystem: boolean; reciprocityList: string[] };
     schoolSystem: { publicBoardName: string; defaultTuitionCAD: number };
     cities: string[];
   }
   ```
2. **Namespace Directory Structure:**
   - `src/data/canada/federal/` (CCB, CGEB, CRA, Banking, Transport Canada)
   - `src/data/canada/provinces/ab/` (Alberta implementations)
   - `src/data/canada/provinces/on/` (Type-compliant future stub)
   - `src/data/canada/provinces/bc/` (Type-compliant future stub)
3. **Reactive Global Context Integration:**
   - Context exposes `activeProvince` ('AB' by default), `activeCity` ('Calgary' by default), and `activeScenario`.
   - All modules consume `activeProvince` and `activeCity` dynamically.

---

### Step 4: Verification, Security Gate & Documentation
1. **Verification Runs:**
   - Run calculation test suite: `node scripts/test/calculations.test.mjs`.
   - Run adversarial RLS isolation simulation test: `node scripts/test/rlsIsolation.test.mjs`.
   - Run ESLint and Next.js Turbopack build.
   - Smoke test live Vercel production deployment.
2. **Generate Required Phase 1.5 Documentation:**
   - `SAAS_ARCHITECTURE.md`
   - `AUTHENTICATION_ARCHITECTURE.md`
   - `DATABASE_SCHEMA.md`
   - `RLS_SECURITY_REPORT.md`
   - `LOCALSTORAGE_MIGRATION.md`
   - `MULTI_USER_QA.md`
   - `PROVINCE_ARCHITECTURE.md`
   - `ALBERTA_ENGINE_REGRESSION.md`
   - `PHASE_1_5_ACCEPTANCE.md`
3. **Deliver Final Response (Section 1–18 format).**

---

## Verification Plan

### Automated Tests
- `node scripts/test/calculations.test.mjs`:
  - CCB 2026-2027 formulas, phaseout thresholds ($38,237 / $82,847), 3-child independent logic.
  - CGEB couple + 3 kids ($1,592 max, $44,324 phaseout).
  - ACFB base ($3,057) + working ($1,920).
  - Grocery dynamic age calculation ([16, 11, 5] -> $1,474 / $1,833 / $2,336).
  - Costco break-even ($65 delta -> $3,250; $130 full -> $6,500).
- `node scripts/test/rlsIsolation.test.mjs`:
  - Adversarial simulation proving User A cannot read, write, or delete User B records.
- `npm run lint`: Zero ESLint warnings or errors.
- `npm run build`: All 27+ routes compile cleanly in Next.js 16.3.4.

### Manual Verification
- Test interactive Benefits selector: Toggle between Form RC66SCH world income ($91.9k) and future salary ($125k), verifying live recalculation.
- Test Demo Mode: Verify Yassir's profile loads with "DEMO PROFILE" indicator and 100% data fidelity.
- Test Sign Up & Onboarding: Run through 9-step wizard with new user credentials, verifying clean private scenario generation.
- Check Vercel live production URL.
