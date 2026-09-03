# NEXORA MOVE — FEATURE GATE MATRIX & CONVERSION UX
**Version:** 3.0.0  
**Gating Component:** `src/components/FeatureGate.tsx`  

---

## 1. Feature Gate Directory

| Feature Key | Gated Component / Route | Free Experience | Move Pass Unlocks | Pro Monthly Unlocks |
| :--- | :--- | :--- | :--- | :--- |
| `advanced_city_comparison` | `/city-compare` & Compare My Life | Basic 3-metric comparison | Full 12-dimensional comparison | Full 12-dimensional comparison |
| `unlimited_scenarios` | Master Scenario Manager | 1 active scenario | 4 scenarios | Unlimited scenarios |
| `benefits_personalization` | `/benefits` Calculator | Statutory preview | Custom RC66SCH world income | Custom RC66SCH world income |
| `pdf_blueprint` | `/plan` Executive Export | On-screen view only | Exportable 90-day PDF dossier | Exportable 90-day PDF dossier |
| `ats_resume` | `/career` ATS Builder | Generic format preview | 1 tailored ATS resume | Unlimited tailored ATS resumes |
| `resume_tailoring` | `/career` NOC Alignment | Locked preview | Locked | Unlimited tailored resumes |
| `cover_letters` | `/career` Cover Letter Generator | Locked preview | Locked | Unlimited Canadian cover letters |
| `application_tracker` | `/career` Job Kanban Tracker | Locked preview | Locked | Full Kanban tracking & reminders |
| `interview_prep` | `/career` Interview Simulator | Locked preview | Locked | Full Canadian interview prep |
| `concierge_session` | `/support` Concierge Booker | Gated | Gated | Gated (Concierge tier only) |

---

## 2. Non-Hostile Conversion UX Guidelines
*   **Always show useful preview:** Users can see the interface and inspect the structure with a subtle blur/overlay.
*   **Explain exact pricing:** Always state the clear price ($49 one-time or $19.99/mo) and whether payment is recurring.
*   **No fake urgency:** Never show false "Only 2 spots left" countdowns.
*   **Bilingual parity:** Upgrade prompts display in fluent Arabic when RTL is active.
