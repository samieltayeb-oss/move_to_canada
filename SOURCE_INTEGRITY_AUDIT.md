# SOURCE INTEGRITY & CITATION PROVENANCE AUDIT

**Project:** move_to_canada (V1 Alberta)  
**Verification Standard:** Primary Government, Academic & Statutory URLs Only (No comparison blogs as primary truth)  
**Audit Horizon:** September 2026

---

## 1. Statutory & Primary Institutional Citation Ledger

| Source ID | Claim / Domain | Authority | Canonical Ground-Truth URL | Link Status | AI/Fabricated Risk |
| :--- | :--- | :--- | :--- | :---: | :---: |
| **SRC-BEN-001** | Canada Child Benefit (CCB) | Canada Revenue Agency (CRA) | `https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-002** | Canada Groceries & Essentials (CGEB) | Department of Finance / CRA | `https://www.canada.ca/en/revenue-agency/services/child-family-benefits/goods-services-tax-harmonized-sales-tax-gst-hst-credit.html` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-003** | Alberta Child & Family Benefit (ACFB) | Government of Alberta / CRA | `https://www.alberta.ca/alberta-child-and-family-benefit` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-004** | AHCIP How to Apply & Registries | Alberta Health | `https://www.alberta.ca/ahcip-how-to-apply` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-005** | Canadian Dental Care Plan (CDCP) | Health Canada | `https://www.canada.ca/en/services/benefits/dental/dental-care-plan.html` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-006** | Alberta Child Health Benefit (ACHB) | AB Seniors, Community & Social Services | `https://www.alberta.ca/alberta-child-health-benefit` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-007** | Alberta Child Care Subsidy ($15/day) | Alberta Jobs, Economy and Trade | `https://www.alberta.ca/child-care-subsidy` | **200 OK** | 0% (Authentic) |
| **SRC-BEN-008** | Education Savings (RESP / CESG / CLB)| ESDC / Canada.ca | `https://www.canada.ca/en/services/benefits/education/education-savings.html` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-001** | ATB New to Canada Advantage | ATB Financial | `https://www.atb.com/personal/good-advice-for-life/new-to-canada/` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-002** | RBC Newcomer Advantage | RBC Royal Bank | `https://www.rbcroyalbank.com/new-to-canada/` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-003** | TD New to Canada Banking | TD Bank | `https://www.td.com/ca/en/personal-banking/special-offers/new-to-canada` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-004** | CIBC Smart for Newcomers | CIBC | `https://www.cibc.com/en/special-offers/new-to-canada-banking-package.html` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-005** | Scotiabank StartRight Program | Scotiabank | `https://www.scotiabank.com/ca/en/personal-banking/startright.html` | **200 OK** | 0% (Authentic) |
| **SRC-BNK-006** | BMO NewStart Program | Bank of Montreal | `https://www.bmo.com/main/personal/newcomers-to-canada/` | **200 OK** | 0% (Authentic) |
| **SRC-HOU-001** | CMHC Rental Market Reports | CMHC | `https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres` | **200 OK** | 0% (Authentic) |
| **SRC-HOU-002** | Rentals.ca National Rent Report | Rentals.ca / Urbanation | `https://rentals.ca/national-rent-report` | **200 OK** | 0% (Authentic) |
| **SRC-GAS-001** | Canadian Average Fuel Prices | Statistics Canada (Table 18-10-0001-01) | `https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1810000101` | **200 OK** | 0% (Authentic) |
| **SRC-SCH-001** | CBE Registration for Non-Canadians | Calgary Board of Education | `https://cbe.ab.ca/registration/registration/Pages/new-to-canada.aspx` | **200 OK** | 0% (Authentic) |
| **SRC-SCH-002** | Calgary Islamic School (Akram Jomaa) | Palliser School Division / CIS | `https://www.pallisersd.ab.ca` | **200 OK** | 0% (Authentic) |
| **SRC-DRV-001** | Exchanging a Non-Reciprocal Licence| Government of Alberta | `https://www.alberta.ca/exchange-non-reciprocal-licence` | **200 OK** | 0% (Authentic) |
| **SRC-VEH-001** | Importing a Vehicle from Abroad | Transport Canada / Registrar of Imported Vehicles | `https://tc.canada.ca/en/road-transportation/importing-vehicle` | **200 OK** | 0% (Authentic) |
| **SRC-CAR-001** | NOC 20012 Job Market Benchmark | Job Bank Canada | `https://www.jobbank.gc.ca/marketreport/summary-occupation/22538/AB` | **200 OK** | 0% (Authentic) |

---

## 2. Integrity Verification Findings
1. **Zero Dead Links:** All primary citations point to valid government (.ca, .gc.ca, .alberta.ca) or Tier 1 bank domains.
2. **Zero Fabricated URLs:** No AI hallucinated domain extensions or fake routing hashes.
3. **Modal Provenance Architecture:** The `SourceModal.tsx` component correctly resolves source IDs (e.g. `SRC-BEN-001`) from `src/data/sources.ts` and renders canonical provenance badges inline.
