# Canada Child Benefit (CCB) Calculation Specification

## 1. Benefit Year Parameters (July 2026 – June 2027)
The Canada Child Benefit (CCB) is a non-taxable monthly payment administered by the Canada Revenue Agency (CRA) to assist eligible families with the cost of raising children under 18 years of age.

### 2026–2027 Statutory Maximum Amounts
* **Child Under 6 Years (0–5 years):**  
  **$8,157.00 CAD / year** ($\$679.75$ CAD / month)
* **Child Aged 6 to 17 Years:**  
  **$6,883.00 CAD / year** ($\$573.58$ CAD / month)

---

## 2. Independent 3-Child Model for Yassir's Family
Yassir’s family includes three children aged **16, 11, and 5 years**:

| Child | Age | Age Category | Maximum Annual CAD | Maximum Monthly CAD |
| :--- | :--- | :--- | :--- | :--- |
| **Child 1** | 16 | Age 6–17 | $\$6,883.00$ | $\$573.58$ |
| **Child 2** | 11 | Age 6–17 | $\$6,883.00$ | $\$573.58$ |
| **Child 3** | 5 | Under 6 | $\$8,157.00$ | $\$679.75$ |
| **Total Gross Potential** | — | — | **$\$21,923.00$ CAD** | **$\$1,826.92$ CAD** |

---

## 3. CRA Income Phaseout & Clawback Formula
When Adjusted Family Net Income (AFNI) exceeds the base threshold of **$38,237 CAD**, the gross CCB entitlement is reduced according to the statutory phaseout tiers.

### For Families with Three (3) Children:
1. **Tier 1 ($38,237 to $79,349 AFNI):**  
   Reduction equals **19.0%** of the income in excess of $\$38,237$.
2. **Tier 2 (Above $79,349 AFNI):**  
   Reduction equals $\$7,811.28$ (the maximum reduction of Tier 1) plus **8.0%** of the income in excess of $\$79,349$.

$$\text{Reduction} = 
\begin{cases} 
0 & \text{if } \text{AFNI} \le \$38,237 \\
0.190 \times (\text{AFNI} - \$38,237) & \text{if } \$38,237 < \text{AFNI} \le \$79,349 \\
\$7,811.28 + 0.080 \times (\text{AFNI} - \$79,349) & \text{if } \text{AFNI} > \$79,349 
\end{cases}$$

$$\text{Net Annual CCB} = \max\left(0, \$21,923 - \text{Reduction}\right)$$

### Sample Calculation Scenarios for Yassir
* **Scenario A: $\$70,000$ CAD AFNI**
  * Tier 1 Excess: $\$70,000 - \$38,237 = \$31,763$
  * Reduction: $\$31,763 \times 19\% = \$6,034.97$
  * Net CCB: $\$21,923 - \$6,034.97 = \mathbf{\$15,888.03\text{ CAD / yr}}$ ($\$1,324.00$ / mo)
* **Scenario B: $\$125,000$ CAD AFNI (Expected IT PMO Salary)**
  * Tier 1 Reduction: $\$7,811.28$
  * Tier 2 Excess: $\$125,000 - \$79,349 = \$45,651$
  * Tier 2 Reduction: $\$45,651 \times 8\% = \$3,652.08$
  * Total Reduction: $\$7,811.28 + \$3,652.08 = \$11,463.36$
  * Net CCB: $\$21,923 - \$11,463.36 = \mathbf{\$10,459.64\text{ CAD / yr}}$ ($\$871.64$ / mo)

---

## 4. Newcomer Application Protocols & Documentation Checklist
Newcomers arriving from outside Canada cannot apply via CRA My Account until their initial tax profile is established. They must file a paper package to the appropriate CRA Tax Centre:

### Documentation Package
1. **Form RC66:** *Canada Child Benefits Application* (Primary application signed by mother or primary caregiver).
2. **Form RC66SCH:** *Status in Canada and Income Information* (Detailing entry date, immigration category, and pre-arrival worldwide income in SAR/CAD for current year and 2 prior calendar years).
3. **Proof of Children's Birth:** Official birth certificates translated into English/French.
4. **Proof of Legal Status:** Stamped Confirmation of Permanent Residence (COPR) or PR cards.
5. **Direct Deposit Form:** Void cheque or pre-authorized direct deposit form from a Canadian chartered bank.

### Processing Timeline
* Expected adjudication: **8 to 11 weeks** from receipt at CRA Tax Centre.
* Retroactive payments are credited back to the effective landing month.
