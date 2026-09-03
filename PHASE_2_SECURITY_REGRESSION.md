# PHASE 2 SECURITY & MULTI-TENANT ISOLATION REGRESSION REPORT

**Target Environment:** Production Supabase (Project `movetocanada`) + Next.js App Router  
**Audit Standard:** Zero Cross-Tenant Leakage, Fail-Closed Private Routes, Strict RLS  

---

## 1. Multi-Tenant RLS Policy Verification
All Supabase tables enforce strict row-level security keyed by `auth.uid()`:
- `profiles`: `id = auth.uid()`
- `households`: `user_id = auth.uid()`
- `relocation_scenarios`: `user_id = auth.uid()`
- `settlement_tasks`: `user_id = auth.uid()`
- `job_applications`: `user_id = auth.uid()`

### Automated Security Regression Tests (`scripts/test/rlsRegression.test.mjs`):
1. **User B cannot SELECT User A private resume or profile:** `PASS`
2. **User B cannot INSERT under User A identity (Spoofing blocked):** `PASS`
3. **User B cannot UPDATE User A settlement tasks or budget:** `PASS`
4. **User B cannot DELETE User A job applications (CRM Tamper blocked):** `PASS`
5. **Anonymous visitor (no JWT claims) is completely blocked from all private tables:** `PASS`

---

## 2. Multi-Province State Decoupling Isolation
- Selecting Ontario (`ON`) or British Columbia (`BC`) does NOT mutate, overwrite, or leak into other users' saved relocation profiles.
- Scenario persistence is keyed strictly to the authenticated user's ID.
- Unauthenticated visitors store destination selections locally in `localStorage` (`move_to_canada_active_province`), preserving zero server-side state pollution.

---

## 3. Storage & Artifact Isolation
- Private user resumes, credential evaluations, and Moroor transcripts are stored in private Supabase Storage buckets (`user-resumes/${user_id}/`).
- No public bucket or public read policy exists for personal documents.
- Service role key is strictly confined to server-side edge runtime / webhook operations and is NEVER exposed in client-side bundles.
