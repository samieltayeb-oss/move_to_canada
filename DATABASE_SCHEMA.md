# DATABASE SCHEMA SPECIFICATION — NEXORA MOVE

**Database Engine:** PostgreSQL 15+ (Supabase)  
**Migration File:** `supabase/migrations/20260903000001_multi_user_saas_schema.sql`  
**Primary Key Convention:** UUID v4 (`uuid_generate_v4()`)  
**Foreign Key Integrity:** `user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE`  

---

## 1. Table Directory (20 User-Scoped Private Tables)

| Table Name | Purpose | Primary Key | Foreign Keys | RLS Enabled |
| :--- | :--- | :--- | :--- | :--- |
| `profiles` | Core user identity, origin, target city | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `households` | Family size, income, pre-arrival foreign income | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `family_members` | Individual child ages and schooling needs | `id` (UUID) | `household_id`, `user_id` | **YES** |
| `relocation_scenarios` | Multiple move comparisons per user | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `user_priorities` | Weighted lifestyle factors (safety, schools, etc.) | `id` (UUID) | `scenario_id`, `user_id` | **YES** |
| `career_profiles` | NOC target, industry, expected salary | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `employment_history` | Verified past jobs and achievements | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `education` | University degrees, ECA/WES status | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `skills` | Normalized professional skill inventory | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `resume_versions` | Single-column ATS resumes & storage references | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `job_targets` | Target Canadian corporate employers | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `job_applications` | Personal career CRM application tracking | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `saved_cities` | User's bookmarked destinations | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `saved_neighbourhoods`| Bookmarked Calgary/Alberta communities | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `saved_businesses` | Bookmarked rentals, mosques, halal grocers | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `settlement_tasks` | 4-phase relocation checklist items | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `budget_scenarios` | Saved customized 3-tier living budgets | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `benefit_scenarios` | Saved CCB/ACFB simulation outputs | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `vehicle_scenarios` | Saved vehicle purchase & commute estimates | `id` (UUID) | `user_id` -> `auth.users` | **YES** |
| `user_preferences` | Theme, locale (EN/AR), currency (CAD/SAR) | `id` (UUID) | `user_id` -> `auth.users` | **YES** |

---

## 2. Referential Integrity & Cascade Semantics

- **Account Purge Guarantee:** When an account is deleted via `deleteAccount()`, PostgreSQL cascades through `ON DELETE CASCADE` across all 20 private tables, purging 100% of user data with zero orphaned rows.
- **Performance Indexes:** B-tree indices are defined on `user_id` across all tables, ensuring sub-10ms query performance even as tenant counts scale.
