# SAAS ARCHITECTURE SPECIFICATION — NEXORA MOVE

**Platform:** NEXORA MOVE (Canada Relocation Intelligence)  
**Version:** Phase 1.5 Architecture  
**Release Horizon:** September 2026  
**Security Classification:** Strict Multi-Tenant Isolation with Zero Cross-User Leakage

---

## 1. Architectural Evolution

The platform has transitioned from a single-user Calgary relocation tool into **NEXORA MOVE**, an enterprise multi-tenant software-as-a-service (SaaS) platform for international newcomers relocating to Canada.

```
+-----------------------------------------------------------------------------------+
|                                NEXORA MOVE FRONTEND                               |
|        (Next.js 16 App Router + Turbopack + React 19 + Tailwind CSS + RTL)        |
+-----------------------------------------+-----------------------------------------+
                                          |
        +---------------------------------+---------------------------------+
        |                                                                   |
        v                                                                   v
+-----------------------+                                         +-----------------------+
|  PUBLIC DATA ENGINES  |                                         |  PRIVATE USER ENGINES |
|  (Stateless & Global) |                                         | (Tenant-Scoped & RLS) |
+-----------------------+                                         +-----------------------+
| • Federal Tax Engine  |                                         | • User Profiles       |
| • 2026 CRA CCB Engine |                                         | • Household & Ages    |
| • StatsCan Gas 144.9¢ |                                         | • Custom Scenarios    |
| • CMHC Rent Benchmarks|                                         | • Career & Resumes    |
| • CBE / CIS Schools   |                                         | • Saved Jobs (CRM)    |
| • Mosque Geodata      |                                         | • Settlement Checklist|
| • Source Registry     |                                         | • Benefit Simulations |
+-----------------------+                                         +-----------------------+
        |                                                                   |
        |                                                                   v
        |                                                         +-----------------------+
        |                                                         |  SUPABASE POSTGRESQL  |
        |                                                         |  (Row Level Security) |
        +-------------------------------------------------------->|  auth.uid() = user_id |
                                                                  +-----------------------+
```

---

## 2. Public Data vs. Private Data Boundary

| Domain | Boundary | Persistence Engine | Access Control |
| :--- | :--- | :--- | :--- |
| **Federal Statutory Rules** | Public | Versioned Code (`canada/federal/`) | Open (Static Prerendered) |
| **Provincial Configurations** | Public | Province Registry (`provinceConfig.ts`) | Open (Static Prerendered) |
| **Market Data (CMHC / Gas)** | Public | Static JSON Data Engines | Open (Static Prerendered) |
| **Institutional Offers** | Public | Verified Bank / Telecom Arrays | Open (Static Prerendered) |
| **User Identity & Contact** | **Private** | `profiles` Table | **RLS Policy:** `auth.uid() = user_id` |
| **Family Demographics** | **Private** | `households`, `family_members` | **RLS Policy:** `auth.uid() = user_id` |
| **Relocation Scenarios** | **Private** | `relocation_scenarios` | **RLS Policy:** `auth.uid() = user_id` |
| **Career Resumes & NOC** | **Private** | `resume_versions`, `career_profiles` | **RLS Policy:** `auth.uid() = user_id` |
| **Settlement Tasks** | **Private** | `settlement_tasks` | **RLS Policy:** `auth.uid() = user_id` |

---

## 3. Demo Mode vs. Authenticated User Flow

1. **Demo Mode (Yassir A. E. Abdulrhman Baseline):**
   - Serves as the golden reference demonstration.
   - Loads immutable verified data from `src/data/demo/yassirBaseline.ts` and `snapshots/YASSIR_V1_BASELINE.json`.
   - Clear visual banner: `[ DEMO PROFILE: Yassir A. E. Abdulrhman ]`.
   - Modifying data in demo mode is restricted or strictly local to avoid contaminating baseline values.
2. **Authenticated User Mode:**
   - Any newcomer creates an account via email and password.
   - Enters the 9-Step Onboarding Wizard.
   - Generates private relocation scenarios (e.g. Calgary, Edmonton, or future destinations).
   - Receives blank slate data: **never inherits Yassir's personal information, resume, or family configuration.**
