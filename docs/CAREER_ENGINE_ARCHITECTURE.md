# CAREER ENGINE ARCHITECTURE
**System:** Calgary Relocation Command Center — Career Accelerator  
**Target Candidate:** Yassir A. E. Abdulrhman  
**Verified Origin:** Albilad Capital, Riyadh, Saudi Arabia  
**Destination:** Calgary, Alberta, Canada  
**Version:** September 2026  

---

## 1. Executive Mission
Relocation success depends decisively on rapid economic integration. The Career Accelerator bridges Yassir's verified institutional background in capital markets, Islamic investment banking, and fund operations (Albilad Capital) directly into Calgary's corporate, banking, asset management, and energy treasury ecosystems.

---

## 2. Core Architectural Pillars

```
┌────────────────────────────────────────────────────────────────────────┐
│                        CAREER ACCELERATOR ENGINE                       │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
[Profile Ingestion]        [Normalization Engine]         [Job Match Engine]
- VERIFIED (Albilad)       - Action + Scope + Result      - NOC 11101, 10010
- USER PROVIDED            - Metric prompts               - Fit scores (0-100)
- INFERRED (Excluded)      - Canadian vocabulary          - Transferable skills
    │                               │                               │
    └───────────────────────────────┼───────────────────────────────┘
                                    │
    ┌───────────────────────────────┼───────────────────────────────┐
    ▼                               ▼                               ▼
[Canadian ATS Studio]      [Outreach & Interview]         [Application CRM]
- 1-Column format          - Recruiter templates          - LocalStorage CRM
- No photo / DOB / age     - STAR answer builder          - Pipeline tracking
- ATS score & keywords     - 90-Day action timeline       - Weekly targets
```

---

## 3. Data Integrity & Verification Protocol
1. **Zero Fabrication:** The system never invents job titles, employment dates, or performance percentages. If a quantitative metric is missing, the system prompts: *"Add measurable result"*.
2. **Four-Tier Field Status:**
   - `VERIFIED`: Confirmed via public professional indexing (**Albilad Capital, Riyadh**).
   - `USER PROVIDED`: Input explicitly by Yassir via browser session.
   - `INFERRED — DO NOT USE IN RESUME`: Algorithmic extrapolations strictly barred from output documents.
   - `MISSING`: Required Canadian market parameters awaiting candidate input.
3. **Privacy Compliance:** Personal identification data (SIN, passport numbers, banking records) are strictly prohibited from being requested or committed to source control. All state persists in client-side `localStorage`.
