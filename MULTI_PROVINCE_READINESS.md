# MULTI-PROVINCE ARCHITECTURAL READINESS AUDIT

**Target Future Horizons:** Ontario (ON) & British Columbia (BC)  
**Strict Directive:** DO NOT IMPLEMENT ONTARIO OR BC YET. AUDIT ARCHITECTURE ONLY.  
**Core Assessment Question:** Can Ontario and British Columbia safely be added to the current codebase?  
**Verdict:** **YES, WITH PLANNED REFACTOR.** (The codebase is currently tightly coupled to Alberta/Calgary datasets).

---

## 1. Component Hardcoding & Province-Awareness Audit Table

| Domain / Component | Alberta-Hardcoded? | Province-Aware? | Changes Required for Ontario (Toronto/Ottawa) & BC (Vancouver) Expansion |
| :--- | :---: | :---: | :--- |
| **Tax Engine (`taxes.ts`)** | **YES** | Partial (Calculates AB flat 10%) | Add Ontario provincial brackets (5.05% to 13.16% + Ontario Surtax) and BC brackets (5.06% to 20.5%). Abstract `calculateProvincialTax(province, income)`. |
| **Provincial Benefits (`benefitsEngine.ts`)** | **YES** | No (Only ACFB built) | Add Ontario Child Benefit (OCB, up to $1,680/child) and BC Family Benefit (BCFB, up to $1,750/child). Abstract `calculateProvincialChildBenefit(province, income, numKids)`. |
| **Healthcare & Insurance (`healthcare.ts`)** | **YES** | No (Only AHCIP & Blue Cross) | Add Ontario OHIP (3-month wait waived, OHIP+ for youth under 25) and BC MSP (Health fee structure, zero premium). Separate out-of-province rules. |
| **Public Schools (`schools.ts`)** | **YES** | No (Only CBE & CCSD) | Create province-level school board abstraction: Toronto District School Board (TDSB), Peel District School Board (PDSB), and Vancouver School Board (VSB). |
| **Housing & Rentals (`housing.ts`)** | **YES** | No (Only Calgary units) | Decouple listing datasets by `province` and `cityId`. Add Toronto ($3,150 3-bed / $3,800 4-bed) and Vancouver ($3,450 3-bed / $4,200 4-bed) benchmarks. |
| **Neighbourhoods (`neighbourhoods.ts`)** | **YES** | No (Only Calgary quadrants) | Introduce `cityId` partitioning: Mississauga, Oakville, North York for ON; Burnaby, Surrey, Richmond for BC. |
| **Islamic Community (`islamicLife.ts`)** | **YES** | No (Only Calgary masjids) | Add GTA Islamic infrastructure (ISNA Canada Mississauga, TARIC, Anatolia) and Greater Vancouver (BCMA Richmond Jamea, Surrey Jamia). |
| **Groceries & Sales Tax (`groceries.ts`)** | **YES** | Partial (AB 0% PST) | Account for 13% HST in Ontario and 12% PST+GST in BC on general merchandise, cleaning supplies, and taxable groceries. |
| **Driver's Licensing (`driving.ts`)** | **YES** | No (Alberta GDL only) | Model Ontario DriveTest rules (G1/G2/G system, foreign experience recognition) and ICBC rules (Graduated Licensing Program, driving records). |
| **Newcomer Banking (`banking.ts`)** | **NO** | **YES** (Big 5 are national) | National Big 5 packages are identical across provinces. Replace ATB Financial with province-specific regional leaders (e.g., Meridian Credit Union / Desjardins in ON; Vancity in BC). |
| **Fuel & Commute (`fuel.ts`)** | **YES** | Partial (AB 144.9¢ benchmark) | Model Ontario gas prices (~158.9¢/L) and BC carbon tax elevated gas prices (~178.9¢/L). Adjust commute distances. |
| **Auto Insurance (`lifestyleWinter.ts`)** | **YES** | No (AB private grid) | Model Ontario private insurance (~$320–$450/mo for newcomers) and BC public monopoly insurance (ICBC rating system). |
| **City Index Engine (`cities.ts`)** | **NO** | **YES** (Already models 8 cities)| Already models Calgary, Edmonton, Ottawa, Toronto, Vancouver, Montreal, Winnipeg, and Saskatoon. Ready for multi-province comparison. |

---

## 2. Structural Refactoring Requirements Prior to Expansion
1. **Context State Lift:** Update `FamilyProfile` in `AppContext.tsx` so that `targetProvince: 'Alberta' | 'Ontario' | 'British Columbia'` acts as a global reactive filter controlling all downstream modules.
2. **Data Directory Modularization:**
   - Migrate flat data files into province namespaces:
     - `src/data/provinces/alberta/` (AHCIP, ACFB, CBE, Calgary)
     - `src/data/provinces/ontario/` (OHIP, OCB, TDSB, Toronto/Ottawa)
     - `src/data/provinces/british-columbia/` (BC MSP, BCFB, VSB, Vancouver)
     - `src/data/federal/` (CCB, CGEB, CRA, Banking, Transport Canada)
3. **Avoid Premature Coding:** Follow the user directive strictly: do NOT write Ontario or BC components until Alberta V1 acceptance is fully approved and locked.
