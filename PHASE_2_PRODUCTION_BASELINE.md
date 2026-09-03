# NEXORA MOVE — PHASE 2 PRODUCTION BASELINE AUDIT
**Release Tag:** `NEXORA_MOVE_PHASE_2_PRODUCTION_BASELINE`  
**Git Commit:** `e2ffad4` (preceded by `4f7e253`)  
**Production URL:** `https://movetocanada.vercel.app`  
**Timestamp:** September 3, 2026  
**Status:** LOCKED & IMMUTABLE BASELINE  

---

## 1. Immutable Baseline Identification
*   **Git Tag:** `NEXORA_MOVE_PHASE_2_PRODUCTION_BASELINE`
*   **Base Commit Hash:** `e2ffad49a6225e5b3ee0b2b8cbb8fa4d924d5464`
*   **Production Deployment:** Vercel Production (`movetocanada.vercel.app`)
*   **Target Geography:** Alberta (Calgary, Edmonton), Ontario (Toronto, Ottawa, Mississauga, Brampton, Hamilton, Kitchener-Waterloo), British Columbia (Vancouver, Burnaby, Surrey, Richmond, Coquitlam, Victoria).

---

## 2. Environment Configuration Inventory (No Secrets Stored)
The production system runs with the following declared configuration variables:
*   `NEXT_PUBLIC_SUPABASE_URL`: Production Supabase Project URL (`https://movetocanada.supabase.co` or equivalent)
*   `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Client-safe anonymous JWT public key
*   `SUPABASE_SERVICE_ROLE_KEY`: Server-side only administrative key (Restricted to edge functions)
*   `NEXT_PUBLIC_APP_URL`: Canonical site URL (`https://movetocanada.vercel.app`)
*   `STRIPE_PUBLISHABLE_KEY`: Pending test-mode configuration for Phase 3
*   `STRIPE_SECRET_KEY`: Pending test-mode configuration for Phase 3 (Server only)
*   `STRIPE_WEBHOOK_SECRET`: Pending test-mode configuration for Phase 3 (Server only)

---

## 3. Database Migration State
*   `001_initial_schema.sql`: Core users, profiles, households, settlement_tasks, relocation_scenarios, and job_applications.
*   `002_rls_policies.sql`: Row-Level Security (RLS) enforcing strict tenant isolation (`auth.uid() = user_id`).
*   `003_storage_buckets.sql`: Private user resume storage isolation (`user-resumes/${user_id}/`).

---

## 4. Current 33-Route Inventory
1. `/` (Home / Master Dashboard with Phase 2 Destination Selector & Compare My Life)
2. `/_not-found`
3. `/account` (User settings and profile management)
4. `/activities` (Family weekend and recreational guide)
5. `/banking` (Newcomer banking comparison and credit guide)
6. `/benefits` (Federal CCB, CGEB, and Alberta ACFB intelligence)
7. `/calgary` (Dedicated Calgary hub)
8. `/career` (Career accelerator and ATS resume intelligence)
9. `/cars` (Family vehicle and winter tire planning)
10. `/city-compare` (12-city relocation value index and side-by-side life comparison)
11. `/connectivity` (Telecom, internet, and mobile carriers)
12. `/cost-of-living` (Family budget calculator)
13. `/driving` (Driver licensing and Saudi Moroor guide)
14. `/forgot-password` (Password recovery request)
15. `/fuel` (StatsCan fuel prices and commute cost model)
16. `/groceries` (Canada Food Price Report 2026 and Costco planner)
17. `/healthcare` (AHCIP, OHIP, MSP healthcare intelligence)
18. `/housing` (Rental market benchmarks and neighbourhood listings)
19. `/login` (Email/password authentication)
20. `/muslim-life` (Mosques, halal dining, and Islamic lifestyle)
21. `/neighbourhoods` (Calgary quadrant breakdown)
22. `/onboarding` (9-step newcomer onboarding wizard)
23. `/plan` (Relocation milestone roadmap)
24. `/register` (Public user sign-up)
25. `/reset-password` (Password update with auth tokens)
26. `/schools` (CBE, PDSB, TDSB, SD36, and Islamic schools)
27. `/settlement` (First 72 hours arrival guide)
28. `/sources` (Provenance citations and methodology)
29. `/videos` (Curated relocation video briefs)
30. `/apple-icon.png`
31. `/favicon.ico`
32. `/icon.png`
33. Dynamic API & auth callback routes

---

## 5. Current Test Verification (19/19 Passing)
*   `calculations.test.mjs` (8 tests):
    *   Federal & Alberta 2026 graduated tax calculation: PASS
    *   CCB 3-child statutory base gross: PASS
    *   CCB second reduction threshold: PASS
    *   RC66SCH Year 1 world income CCB linkage: PASS
    *   Target Canadian employment salary CCB linkage: PASS
    *   CGEB and ACFB phaseout ceilings: PASS
    *   Grocery age-based model: PASS
    *   Costco Executive membership break-even math: PASS
*   `crossProvinceTax.test.mjs` (6 tests):
    *   Ontario 2026 graduated tax engine ($60k–$300k): PASS
    *   Alberta 2026 graduated tax engine ($60k–$300k): PASS
    *   BC 2026 graduated tax engine ($60k–$300k): PASS
    *   Cross-province comparison at $100k: PASS
    *   Cross-province comparison at $150k: PASS
    *   Cross-province comparison at $250k: PASS
*   `rlsIsolation.test.mjs` (5 tests):
    *   Cross-tenant SELECT isolation: PASS
    *   Identity spoofing INSERT block: PASS
    *   Cross-tenant UPDATE block: PASS
    *   Cross-tenant DELETE block: PASS
    *   Anonymous JWT rejection: PASS

---

## 6. Rollback Protocol & Independence Guarantee
If Phase 3 commercial features need to be rolled back at any point:
1. Revert to tag `NEXORA_MOVE_PHASE_2_PRODUCTION_BASELINE`.
2. Existing Phase 2 user accounts, household data, and saved scenarios will remain 100% operational without data loss.
3. Commercial tables (`commercial_plans`, `purchases`, `subscriptions`, `user_entitlements`) are strictly additive and will not modify the schema of core Phase 1.5/2 tables (`profiles`, `households`, `settlement_tasks`, `relocation_scenarios`).
