# DATA FRESHNESS & AUDIT HORIZON REPORT

**Project:** move_to_canada (V1 Alberta)  
**Current Audit Timestamp:** September 3, 2026  
**Statuses:** CURRENT (Within refresh cadence), RECENT (Within 60 days), AGING (Near expiry), STALE (Exceeded interval), UNKNOWN (Missing verification metadata)

---

## 1. Dataset Freshness Audit Matrix

| Dataset | Primary Source Authority | Last Verified Date | Expected Refresh Cadence | Current Age | Status | Audit Observations |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Active Rental Listings** | Facebook Marketplace / RentFaster | September 2026 | 30 Days | < 5 Days | **CURRENT** | 8 real listings with active reduction tags |
| **CMHC Benchmark Rents** | CMHC Rental Market Survey | September 2026 | Annual | ~60 Days | **CURRENT** | Reflects 2025/2026 occupied baseline |
| **Rentals.ca Asking Rents** | Rentals.ca / Urbanation National Report | September 2026 | Monthly | ~15 Days | **CURRENT** | Calgary asking rent benchmarks |
| **Gas & Fuel Prices** | Statistics Canada Table 18-10-0001-01 | September 2026 | Monthly | ~3 Days | **CURRENT** | 144.9¢/L verified benchmark |
| **Canada Child Benefit (CCB)** | Canada Revenue Agency (CRA T4114) | September 2026 | Annual (July 1) | ~65 Days | **CURRENT** | 2026–2027 benefit year rates ($8,157 / $6,883) |
| **CGEB (Formerly GST/HST)** | Department of Finance / CRA | September 2026 | Annual (July 1) | ~65 Days | **CURRENT** | 2026 expansion formula ($890 + $234/kid) |
| **Alberta ACFB Rates** | Government of Alberta / CRA | September 2026 | Annual (July 1) | ~65 Days | **CURRENT** | $3,057 base / $1,920 working |
| **AHCIP Policy & Ambulance** | Alberta Health Services / AB Health | September 2026 | 90 Days | ~10 Days | **CURRENT** | $250/$385 ground ambulance fees verified |
| **CDCP Dental Tiers** | Health Canada / Sun Life | September 2026 | 90 Days | ~10 Days | **CURRENT** | $70k/$80k/$90k copay tiers |
| **ACHB Low-Income Threshold** | AB Seniors, Community & Social Services | September 2026 | 90 Days | ~10 Days | **CURRENT** | $41,594 family threshold for 3 kids |
| **Alberta Blue Cross (Plan 118)** | Alberta Blue Cross Non-Group | September 2026 | 90 Days | ~10 Days | **CURRENT** | $118/mo premium & $35/rx copay cap |
| **Newcomer Bank Offers (Big 6+ATB)**| RBC, TD, CIBC, Scotiabank, BMO, ATB | September 2026 | 30 Days | ~5 Days | **CURRENT** | $500 TD cash, $400 CIBC, $15k credit limits |
| **Youth Banking Accounts** | Big 6 + ATB Financial Disclosures | September 2026 | 90 Days | ~10 Days | **CURRENT** | $0 youth fee structures verified |
| **Food Basket (CFPR 2026)** | Canada's Food Price Report 2026 | September 2026 | Annual | ~120 Days | **RECENT** | Code model updated; doc text had old ages |
| **Federal & Alberta Taxes** | CRA / Alberta Treasury Board | September 2026 | Annual | ~180 Days | **CURRENT** | 2026 federal brackets & AB 10% rate |
| **Calgary Transit Fares** | Calgary Transit Fare Schedule 2026 | September 2026 | Annual | ~60 Days | **CURRENT** | $126 adult / $92 youth / free under 12 |
| **CBE Public School Fees** | Calgary Board of Education (CBE) | September 2026 | Annual | ~30 Days | **CURRENT** | $0 tuition, noon supervision & supply rates |
| **Islamic School Fees (CIS)** | Palliser School Division / CIS | September 2026 | Annual | ~30 Days | **CURRENT** | $2,450 (K-9), $2,690 (10-12) |
| **Telecom & Internet (Telus/Rogers)**| Telus PureFibre / Rogers Xfinity | September 2026 | 60 Days | ~15 Days | **CURRENT** | $75–$95/mo gigabit promotions |
| **SAR / CAD Exchange Rate** | Live Foreign Exchange / Bank of Canada | September 2026 | Daily | Today | **CURRENT** | 2.7204 SAR/CAD (0.3676 CAD/SAR) |

---

## 2. Summary
- **Total Datasets Monitored:** 20
- **Status CURRENT:** 19 (95.0%)
- **Status RECENT:** 1 (5.0% — Food Price Report annual cycle)
- **Status AGING:** 0 (0%)
- **Status STALE:** 0 (0%)
- **Status UNKNOWN:** 0 (0%)
