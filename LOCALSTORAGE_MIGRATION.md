# LOCALSTORAGE TO SUPABASE MIGRATION SPECIFICATION

**Platform:** NEXORA MOVE  
**Phase:** 1.5 Architecture Transition  
**Objective:** Decouple authoritative persistent state from client browser localStorage while preserving lightweight UI cache.

---

## 1. System of Record Demarcation

| State Domain | Former V1 Mechanism | Phase 1.5 Target Engine | Rationale |
| :--- | :--- | :--- | :--- |
| **Family Profile** | `localStorage['move_to_canada_profile']` | Supabase `profiles` & `households` | Must persist across devices and browser sessions. |
| **Career & Resume** | Client JS in-memory | Supabase `career_profiles` & `resume_versions` | Highly sensitive professional and educational PII. |
| **Relocation Scenarios** | Single in-memory profile | Supabase `relocation_scenarios` | Enables multiple comparative scenarios per user. |
| **Settlement Checklist** | `localStorage['move_to_canada_checklist']` | Supabase `settlement_tasks` | Progress tracking must not be lost upon clearing cookies. |
| **Job Applications (CRM)**| `localStorage['career_crm_v1']` | Supabase `job_applications` | Critical job hunting workflow data. |
| **UI Language** | `localStorage['move_to_canada_locale']` | `localStorage` (Preserved) | Instant, zero-latency locale rendering on initial paint. |
| **Display Currency** | `localStorage['move_to_canada_currency']`| `localStorage` (Preserved) | Instant UI preference before session handshake. |
| **Temporary Bookmarks** | `localStorage['move_to_canada_bookmarks']`| Hybrid (`localStorage` + `saved_businesses`) | Seamless unauthenticated browsing with cloud sync upon login. |

---

## 2. Backward Compatibility & Graceful Transition

1. **Auto-Purge of Stale V1 Cache:**
   - In `AppContext.tsx`, older cached keys with obsolete [11, 8, 4] age arrays (`move_to_canada_profile`) are purged automatically to prevent calculation drift.
2. **Session Persistence:**
   - Active user session state is coordinated via `AuthContext.tsx` with offline/demo fallback, ensuring the app works smoothly both with and without network connectivity.
