# NEXORA MOVE — ENTITLEMENT ARCHITECTURE
**Version:** 3.0.0  
**Implementation Source:** `src/lib/entitlements.ts`  

---

## 1. Core Principles
1. **Server Authority:** Entitlements are evaluated from server-side database records and validated subscription tokens. Frontend state is purely a presentation layer.
2. **Zero Data Destruction on Downgrade:** If a user cancels Pro, all historical data (resumes, applications, scenarios, budgets) is **preserved permanently**. Access to premium editing/creation is simply gated to their remaining active tier.
3. **Graceful Fallbacks:** Anonymous visitors and non-paying users fall back safely to `FREE`. Demo mode runs with Move Pass evaluation privileges without writing to production billing tables.

---

## 2. Feature Key Mapping Matrix

| Feature Key | Explore (Free) | Move Pass ($49) | Pro Monthly ($19.99/mo) | Concierge ($249) |
| :--- | :---: | :---: | :---: | :---: |
| `advanced_city_comparison` | Preview | **UNLOCKED** | **UNLOCKED** | **UNLOCKED** |
| `unlimited_scenarios` | 1 scenario | 4 scenarios | **UNLIMITED** | **UNLIMITED** |
| `benefits_personalization` | Basic | **UNLOCKED** | **UNLOCKED** | **UNLOCKED** |
| `pdf_blueprint` | Locked | **UNLOCKED** | **UNLOCKED** | **UNLOCKED** |
| `ats_resume` | Locked | **1 Resume** | **UNLIMITED** | **UNLIMITED** |
| `resume_tailoring` | Locked | Locked | **UNLOCKED** | **UNLOCKED** |
| `cover_letters` | Locked | Locked | **UNLOCKED** | **UNLOCKED** |
| `application_tracker` | Locked | Locked | **UNLOCKED** | **UNLOCKED** |
| `interview_prep` | Locked | Locked | **UNLOCKED** | **UNLOCKED** |
| `advanced_job_match` | Locked | Locked | **UNLOCKED** | **UNLOCKED** |
| `concierge_session` | Locked | Locked | Locked | **UNLOCKED** |

---

## 3. Entitlement State Machine

```
[ New Visitor ] ───────► [ FREE Tier ]
                              │
             ┌────────────────┴────────────────┐
             ▼                                 ▼
      [ Buy Move Pass ]                 [ Subscribe to Pro ]
             │                                 │
             ▼                                 ▼
    [ MOVE_PASS Tier ]                 [ PRO_MONTHLY Tier ]
    (Lifetime Relocation)               (Active Billing)
             │                                 │
             │                         (User Cancels)
             │                                 │
             │                                 ▼
             │                      [ Pro Period Expires ]
             │                                 │
             └────────────────► [ Downgrade to MOVE_PASS ]
                                (Data 100% Preserved)
```
