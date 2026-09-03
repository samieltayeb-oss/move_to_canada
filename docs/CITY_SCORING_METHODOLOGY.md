# CANADA FAMILY RELOCATION VALUE INDEX: SCORING METHODOLOGY
**Product:** Yassir's Calgary Move Command Center  
**Model Version:** 2026.1  
**Scope:** 9 Major Canadian Census Metropolitan Areas (CMAs)  

---

## 1. Objective & Ethical Foundation
The Canada Family Relocation Value Index is an evidence-based multi-criteria decision model designed specifically for a family of five (2 adults, 3 children under 15) relocating from Saudi Arabia to Canada.
It **does not** employ subjective editorial bias or artificially elevate Calgary. Every dimension uses verified primary statistics from Statistics Canada, CMHC, Canada Job Bank, provincial tax codes, municipal transit agencies, and climate data.

---

## 2. Factor Weights (Default 100% Allocation)

| Dimension | Default Weight | Objective Rationale | Key Primary Metric | Source |
| :--- | :--- | :--- | :--- | :--- |
| **Housing Affordability** | **20%** | Single largest recurring family expenditure for 3–4 bedrooms. | Benchmark 3-Bed Asking Rent (2026) | Rentals.ca / CMHC |
| **Income & Career Opportunity** | **15%** | Household earning power and professional ceiling in finance/management. | Median Census Family Total Income & Professional Wages | StatCan T1FF / Job Bank |
| **Cost of Living** | **10%** | Everyday goods, utilities, childcare, and general consumables. | Comparative Basket & Utility Burden | StatCan CPI / Enmax / AUC |
| **Tax Advantage** | **8%** | Net take-home pay and sales tax leakage. | Provincial Sales Tax (PST) + Top Prov. Income Tax Bracket | Provincial Treasuries |
| **Family Environment** | **10%** | Community livability, parklands, children recreation infrastructure. | Parkland per capita, major family YMCA/recreation complexes | Municipal Open Data |
| **Safety & Crime Severity** | **8%** | Neighborhood security for young children. | Crime Severity Index (CSI) by CMA | Statistics Canada CCJS |
| **Schools & Education** | **7%** | Quality of public, alternative, and high school options. | Provincial educational expenditure & standardized assessments | CBE, CCSD, Fraser Institute / Prov. Depts |
| **Healthcare Access** | **5%** | Wait times, family physician access, and emergency triage. | Primary care physician attachment rate & wait times | CIHI / Prov. Health Ministries |
| **Muslim Community Infrastructure** | **7%** | Mosques, full-time Islamic schools, halal food supply, Eid gatherings. | Muslim population share & density of Islamic institutions | StatCan 2021 Census / MCC |
| **Transportation & Commute** | **4%** | Ease of movement and daily time lost in transit. | Average one-way commute time in minutes | Statistics Canada LFS |
| **Airport & Global Connectivity** | **3%** | Ease of international travel back to Saudi Arabia/GCC. | YYC/YYZ/YVR passenger volume & direct international route pairs | Transport Canada / Airport Authorities |
| **Weather & Climate Adaptation** | **3%** | Ease of winter adaptation from Riyadh's desert climate. | Annual sunshine hours & presence of warming Chinooks | Environment Canada Climate Normals |
| **TOTAL** | **100%** | Fully normalized linear multi-attribute utility model. | — | — |

---

## 3. Mathematical Normalization Formula
Each metric is normalized onto a standard continuous scale of **0 to 100**:

### For "Higher is Better" Metrics (e.g. Income, Sunshine, Muslim Demographics):
$$\text{Score}_i = \frac{X_i - X_{\min}}{X_{\max} - X_{\min}} \times 100$$

### For "Lower is Better" Metrics (e.g. Rent, Commute Time, Crime Severity, Sales Tax):
$$\text{Score}_i = \frac{X_{\max} - X_i}{X_{\max} - X_{\min}} \times 100$$

### Final Weighted Composite Score:
$$\text{Composite Score} = \sum_{k=1}^{12} \left( \text{Normalized Score}_k \times \frac{\text{Weight}_k}{100} \right)$$

---

## 4. City Profiles & Baseline Raw Data (2026 Snapshot)

```
+----------------+----------------+----------------+----------------+----------------+----------------+
| City (CMA)     | 3-Bed Rent/mo  | Median Income  | PST / Sales    | Commute Time   | Muslim Pop.    |
+----------------+----------------+----------------+----------------+----------------+----------------+
| Calgary (AB)   | $2,345         | $116,530       | 0% PST (5% GST)| 26.5 mins      | 105,000 (6.9%) |
| Edmonton (AB)  | $1,995         | $106,750       | 0% PST (5% GST)| 25.4 mins      | 85,000 (5.8%)  |
| Ottawa (ON)    | $2,735         | $118,590       | 13% HST        | 27.5 mins      | 120,000 (7.8%) |
| Toronto (ON)   | $3,415         | $108,010       | 13% HST        | 35.6 mins      | 640,000 (10.2%)|
| Vancouver (BC) | $3,995         | $103,460       | 12% PST+GST    | 31.8 mins      | 115,000 (4.2%) |
| Montreal (QC)  | $2,295         | $92,300        | 14.975% QST    | 32.2 mins      | 350,000 (8.7%) |
| Winnipeg (MB)  | $1,975         | $97,500        | 12% PST+GST    | 22.8 mins      | 26,000 (3.0%)  |
| Saskatoon (SK) | $1,700         | $104,000       | 11% PST+GST    | 18.5 mins      | 14,000 (4.2%)  |
| Halifax (NS)   | $2,750         | $104,000       | 15% HST        | 24.8 mins      | 14,000 (2.9%)  |
+----------------+----------------+----------------+----------------+----------------+----------------+
```

---

## 5. Output Sub-Indices
To provide clear executive perspective, the model renders four specialized sub-scores:
1. **Overall Relocation Value:** The complete 12-metric weighted composite.
2. **Family Value Index:** Housing + Cost of Living + Family Environment + Schools + Safety.
3. **Housing Value Index:** Rent Affordability + Property Purchasing Power + 0% Land Transfer Tax.
4. **Career & Financial Value Index:** Income + Career Ceiling + Tax Retention.
5. **Muslim Family Fit:** Muslim Community Infrastructure + Islamic School Access + Mosques + Halal Groceries.
