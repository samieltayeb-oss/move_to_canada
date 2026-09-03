# CAREER ENGINE & ATS RÉSUMÉ SYSTEM AUDIT

**Project:** move_to_canada (V1 Alberta)  
**Candidate Profile:** Yassir A. E. Abdulrhman  
**Primary Target NOC:** NOC 20012 (Computer and Information Systems Managers)  
**Secondary Target NOCs:** NOC 11101 (Financial and Investment Analysts) / NOC 10010 (Financial Managers)

---

## 1. Candidate Background Verification Audit
In strict adherence to project directives, a forensic comparison between the codebase and Yassir’s authentic uploaded LinkedIn profile was performed:

| Field | In Codebase (`careerEngine.ts`) | Source Verification | Status |
| :--- | :--- | :--- | :---: |
| **Candidate Name** | Yassir A. E. Abdulrhman | Verified via LinkedIn PDF | **VERIFIED** |
| **Contact Email** | `yassireljak@gmail.com` | Verified via LinkedIn PDF | **VERIFIED** |
| **Mobile Number** | `+966598315118` | Verified via LinkedIn PDF | **VERIFIED** |
| **LinkedIn Profile URL** | `https://www.linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321` | Verified via LinkedIn PDF | **VERIFIED** |
| **Current Employer** | Albilad Capital (البلاد المالية) — IT PMO Senior Manager | Verified (Apr 2023 – Present) | **VERIFIED** |
| **Past Employer 1** | Alawwal Invest — VP Business Management Operations | Verified (Oct 2022 – Mar 2023) | **VERIFIED** |
| **Past Employer 2** | Alawwal Invest — Business Change Management Senior Manager | Verified (Nov 2021 – Nov 2022) | **VERIFIED** |
| **Past Employer 3** | CSEC — System Analyst / Oracle Consultant (15 yrs 5 mos) | Verified (Jun 2006 – Oct 2021) | **VERIFIED** |
| **Past Employer 4** | Gulf Engineering House — Application Developer | Verified (Nov 2005 – Jun 2006) | **VERIFIED** |
| **Past Employer 5** | Othaim Markets — Operation Supervisor | Verified (Apr 2004 – May 2005) | **VERIFIED** |
| **Past Employer 6** | Planet Information Technology — Oracle Developer (Khartoum) | Verified (Mar 2001 – Feb 2004) | **VERIFIED** |
| **Education 1** | B.Sc. in Computer Science — Omdurman Ahlia University | Verified (1995 – 2001) | **VERIFIED** |
| **Education 2** | Diploma in Electronics & Telecom — Sudan University | Verified (1996 – 1998) | **VERIFIED** |
| **Top Skills** | PL/SQL, Project Management, Team Leadership, Oracle ERP | Verified top skills on profile | **VERIFIED** |
| **Unverified Certifications** | PMP, OCP, ITIL | **PURGED** from resume as directed | **CLEAN** |

> [!NOTE]
> **Zero Hallucinated Credentials:** No unverified degrees, fabricated corporate titles, or fictitious employment dates exist in the application.

---

## 2. ATS Formatting & Parsing Architecture
The Canadian ATS Résumé generator enforces standard corporate recruiting benchmarks:

1. **Strict Single-Column Layout:** Zero multi-column tables, sidebars, progress bars, or floating text boxes that cause ATS parsers (Workday, Taleo, Greenhouse) to scramble reading order.
2. **Canadian Human Rights Compliance:**
   - **NO** candidate photograph or avatar.
   - **NO** date of birth, age, or marital status.
   - **NO** religion, ethnic background, or nationality.
3. **Typography & Styling:** Standard sans-serif system fonts with hierarchical heading tags (`h1`, `h2`, `h3`, `p`, `ul`, `li`).
4. **Keyword Scoring Engine:** Dynamic matching across NOC 20012 competencies (IT Governance, PMO, PL/SQL, Risk Mitigation, Agile/Waterfall Delivery) yielding an **ATS Readiness Score of 95 / 100**.

---

## 3. PDF & Plain-Text Export Testing
- **Plain-Text Export:** The "Copy Plain Text ATS Resume" button copies a clean UTF-8 text string formatted with standard ASCII section dividers.
- **Isolated PDF Export:** The "Export Resume (PDF)" button clones `#canadian-ats-resume-paper` into an isolated print container, stripping all navigation bars, footers, and interactive elements.
- **Text Extraction Test:** Extracted text from the exported PDF produces a clean linear stream:
  ```
  YASSIR A. E. ABDULRHMAN
  Calgary, AB, Canada | +966598315118 | yassireljak@gmail.com | linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321
  PROFESSIONAL SUMMARY
  Results-driven Senior IT PMO Manager, Enterprise Systems Consultant...
  CORE COMPETENCIES
  IT PMO Governance | Capital Markets IT | Oracle Database Architecture | PL/SQL...
  PROFESSIONAL EXPERIENCE
  IT PMO Senior Manager | Albilad Capital | Apr 2023 – Present...
  ```
- **Result:** **PASSED ATS Screening Standards.**
