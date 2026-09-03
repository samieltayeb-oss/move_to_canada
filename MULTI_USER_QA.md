# MULTI-USER QUALITY ASSURANCE (QA) PROTOCOL

**Platform:** NEXORA MOVE (Phase 1.5)  
**QA Horizon:** Multi-Tenant Isolation, Dynamic Recalculations & Onboarding Verification  

---

## 1. Verified User Scenarios

### Test Scenario A: Canonical Baseline Demo User (Yassir)
- **Identity:** Yassir A. E. Abdulrhman (`00000000-0000-0000-0000-000000000001`)
- **Household:** 2 Adults, 3 Children (Ages 16, 11, 5)
- **Financial Baseline:** $125,000 CAD Canadian income / 250,000 SAR ($91,900 CAD) world income
- **Calculations Verified:**
  - Year 1 CCB (Form RC66SCH): **$12,722.86 CAD / yr** ($1,060.24/mo)
  - Future CCB (Target Salary): **$10,074.86 CAD / yr** ($839.57/mo)
  - Balanced Groceries: **$1,833 CAD / mo**
  - Net Annual Take-Home: **$93,762 CAD** ($7,813/mo)
- **Status:** **PASS (100% Data Preservation)**

### Test Scenario B: Newly Registered User (Independent Newcomer)
- **Identity:** Sarah Miller (`user_registered_sarah_miller@gmail.com`)
- **Household:** 2 Adults, 1 Child (Age 4)
- **Financial Baseline:** $95,000 CAD Canadian income
- **Verification Criteria:**
  - Zero presence of Yassir’s name, education, or past employers.
  - CCB recalculates dynamically using 1-child rates (7% tier 1, 3.2% tier 2).
  - Food budget recalculates for 3 household members rather than 5.
  - Relocation scenario created independently.
- **Status:** **PASS (Strict Isolation)**

---

## 2. Dynamic Recalculation Test Results

| Parameter Change | Expected System Reaction | Verified Result |
| :--- | :--- | :--- |
| **Household Size Changes (5 -> 3)** | Food budget drops from $1,833/mo to ~$1,100/mo | **PASS** |
| **Child Ages Change (e.g. 16 -> 4)** | CCB shifts from $6,883 (under 18) to $8,157 (under 6) | **PASS** |
| **Salary Increases ($85k -> $125k)** | CCB clawback scales; provincial tax adjusts | **PASS** |
| **Income Basis Toggle** | Instantly switches between Year 1 World Income and Future Salary | **PASS** |
