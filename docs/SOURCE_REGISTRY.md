# CENTRAL SOURCE REGISTRY
**Project:** MOVE_TO_CANADA — Yassir's Calgary Move Command Center  
**Last Verified:** September 2026  
**Standards:** Federal & Provincial Statutory Data, Open Data, Official Institutional Disclosures  

---

## 1. Hierarchy & Source Quality Tiers

| Tier | Category | Authoritative Scope |
| :--- | :--- | :--- |
| **Tier 1** | Primary Government & Public Data | Canada.ca (IRCC, CRA, CBSA, Transport Canada, StatCan, Bank of Canada, Job Bank), Alberta.ca (AHCIP, Alberta Transportation, Alberta Treasury), City of Calgary, Calgary Board of Education (CBE), Calgary Transit. |
| **Tier 2** | Institutional & Accredited Service Providers | Big 6 Banks (RBC, TD, Scotiabank, CIBC, BMO) & ATB Financial, Major Carriers (TELUS, Rogers, Bell), Muslim Council of Calgary (MCC), Islamic Schools (Calgary Islamic School / PRPS, Al-Amal Academy), Settlement Agencies (Centre for Newcomers, ISC). |
| **Tier 3** | Industry Market Research & Rental Databases | CMHC Housing Market Information, Rentals.ca / Urbanation National Rent Reports, REALTOR.ca / CREB, AutoTrader Canada, Robert Half Canada 2026. |
| **Tier 4** | Lived Experience & Media (Non-Overriding) | Curated YouTube relocation documentaries (Ryan Gillard, Living in Calgary, Frank Huynh, Hamara Canada), verified newcomer community case studies. Used strictly for experiential nuance, never to override statutory facts. |

---

## 2. Master Source Catalog

| Source ID | Institution / Name | URL | Tier | Data Period / Release | Last Verified | Refresh Cadence | Confidence | Scope / Subject Matter |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `SRC-GOV-001` | Government of Alberta — AHCIP Eligibility | https://www.alberta.ca/ahcip-eligibility.aspx | Tier 1 | 2026 Current | 2026-09-03 | 90 days | 100% | Zero-day waiting period for international arrivals, eligibility rules, documentation. |
| `SRC-GOV-002` | Government of Alberta — Non-Reciprocal Driver's Licences | https://www.alberta.ca/exchange-non-reciprocal-licence.aspx | Tier 1 | 2026 Current | 2026-09-03 | 90 days | 100% | Non-reciprocal exchange rules for Saudi Arabia, Class 7 test, SIU foreign driving credit. |
| `SRC-GOV-003` | Government of Alberta — GDL Modernization | https://www.alberta.ca/get-a-drivers-licence.aspx | Tier 1 | Effective Apr 2023 | 2026-09-03 | 180 days | 100% | Elimination of advanced road test; direct exit to full Class 5 with 2+ years verified foreign experience. |
| `SRC-GOV-004` | Transport Canada & RIV — Vehicle Importation | https://tc.canada.ca/en/road-transportation/importing-vehicle | Tier 1 | 2026 Current | 2026-09-03 | 90 days | 100% | Strict 15-year rule for non-US/GCC market vehicles; inadmissibility under Canadian Motor Vehicle Safety Act. |
| `SRC-GOV-005` | Canada Revenue Agency (CRA) — Federal Income Tax Brackets | https://www.canada.ca/en/revenue-agency/services/tax/individuals/frequently-asked-questions-individuals/canadian-income-tax-rates-individuals-current-previous-years.html | Tier 1 | 2026 Tax Year | 2026-09-03 | Annual (Jan) | 100% | 14.0% bottom rate, 20.5%, 26%, 29%, 33%; BPA $16,452. |
| `SRC-GOV-006` | Government of Alberta — Provincial Personal Income Tax & 0% PST | https://www.alberta.ca/personal-income-tax.aspx | Tier 1 | 2026 Tax Year | 2026-09-03 | Annual | 100% | 8% bottom bracket ($0–$61.2k), 10% to $154k; BPA $22,769; 0% Provincial Sales Tax. |
| `SRC-GOV-007` | Canada Revenue Agency (CRA) — Canada Child Benefit (CCB) | https://www.canada.ca/en/revenue-agency/services/child-family-benefits/canada-child-benefit-overview.html | Tier 1 | 2026–2027 Benefit Year | 2026-09-03 | Annual (July) | 100% | Max $8,157/yr (<6) and $6,883/yr (6–17); PR immediate vs Work Permit 18-month requirement. |
| `SRC-GOV-008` | Bank of Canada — Valet FX API (SAR/CAD & USD/CAD) | https://www.bankofcanada.ca/valet/series/FXSARCAD | Tier 1 | Daily 2026 | 2026-09-03 | Daily / Real-time | 100% | Official Bank of Canada exchange rates (1 SAR = ~0.3633–0.3697 CAD). |
| `SRC-GOV-009` | Statistics Canada — Census 2021 Diversity & Demographics | https://www12.statcan.gc.ca/census-recensement/2021/dp-pd/prof/index.cfm | Tier 1 | Census 2021 | 2026-09-03 | 5-year Census | 100% | Muslim population in Calgary (105k / 6.9%), Edmonton (85k), Toronto (640k), Ottawa (120k). |
| `SRC-GOV-010` | Statistics Canada — T1FF Census Families Income Table 11-10-0017-01 | https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110001701 | Tier 1 | Latest Census File | 2026-09-03 | Annual | 100% | Median family total income by CMA: Calgary $116,530; Edmonton $106,750; Ottawa $118,590. |
| `SRC-GOV-011` | Canada Job Bank — Wages for NOC 11101 (Financial Analyst) & 10010 | https://www.jobbank.gc.ca/marketreport/wages-occupation/175/geo25592 | Tier 1 | 2025/2026 Data | 2026-09-03 | 180 days | 100% | Calgary median financial analyst wage $45.70/hr ($95k/yr); financial managers $61.23/hr ($127k/yr). |
| `SRC-MUN-001` | Calgary Transit — 2026 Official Fares & Schedules | https://www.calgarytransit.com/fares---passes.html | Tier 1 | 2026 Approved Fares | 2026-09-03 | Annual | 100% | Adult Single $4.00, Adult Monthly $126, Youth Monthly $92, Children 12 and under 100% FREE. |
| `SRC-MUN-002` | City of Calgary — Residential Water, Sewer & Waste Rates | https://www.calgary.ca/water/water-utility/residential-water-rates-and-billing.html | Tier 1 | 2026 Approved Rates | 2026-09-03 | Annual | 100% | Water $13.83 + $1.74/m³, Wastewater $23.45 + $1.905/m³, Stormwater $17.00, Carts $20.51 ($139.72 baseline). |
| `SRC-EDU-001` | Calgary Board of Education (CBE) — Welcome Centre & Admissions | https://cbe.ab.ca/registration/registration/Pages/new-to-canada.aspx | Tier 1 | 2026–2027 School Year | 2026-09-03 | 90 days | 100% | Centralized newcomer intake at 1221 8 St SW; required documents, ELL assessment, lottery/overflow. |
| `SRC-EDU-002` | Prairie Rose Public Schools — Calgary Islamic School (CIS) Society | https://aj.myprps.com/ | Tier 2 | 2026–2027 Schedule | 2026-09-03 | Annual | 100% | CIS Akram Jomaa & OBK alternative program fees: K–9 $2,450/yr, Gr 10–12 $2,690/yr, busing, waitlists. |
| `SRC-EDU-003` | Al-Amal Academy — Prairie Land Public Schools | https://al-amalacademy.com/ | Tier 2 | 2026–2027 Schedule | 2026-09-03 | Annual | 95% | NW Calgary Islamic alternative school (9 Royal Vista Dr NW), Singapore math, Project REACH. |
| `SRC-ISL-001` | Muslim Council of Calgary (MCC) — Akram Jomaa Islamic Centre | https://akramjomaa.com/ | Tier 2 | Active 2026 | 2026-09-03 | 90 days | 100% | 2624 39 Ave NE; 3 Jumu'ah shifts, Tahfeez school, funeral services, gymnasium, community iftars. |
| `SRC-ISL-002` | Islamic Information Society of Calgary (IISC) | https://iisc.ca/ | Tier 2 | Active 2026 | 2026-09-03 | 90 days | 100% | Downtown Mosque (1009 7 Ave SW) & Al-Kahf Youth Centre (4128 6 St NE). |
| `SRC-ISL-003` | Muslim Association of Canada (MAC) — Al-Salam Centre | https://alsalamcentre.ca/ | Tier 2 | Active 2026 | 2026-09-03 | 90 days | 100% | NW Ranchlands facility (6415 Ranchview Dr NW); youth programs, weekend school, sports. |
| `SRC-ISL-004` | Calgary Islamic Centre (SW Masjid / CICSW) | https://cicsw.ca/ | Tier 2 | Active 2026 | 2026-09-03 | 90 days | 100% | 5615 14 Ave SW; SW community anchor, Nibras Quran school, Nikah officiation. |
| `SRC-BNK-001` | Royal Bank of Canada (RBC) — Newcomer Advantage | https://www.rbcroyalbank.com/new-to-canada/ | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | 12-mo fee waiver ($143 savings), up to $15,000 credit limit without credit history, $350–$400 cash promo. |
| `SRC-BNK-002` | TD Canada Trust — New to Canada Banking | https://www.td.com/ca/en/personal-banking/solutions/new-to-canada | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | 12-mo Unlimited Chequing fee waiver ($215 savings), $500 direct cash deposit, TD Cash Back Visa. |
| `SRC-BNK-003` | Scotiabank — StartRight Program | https://startright.scotiabank.com/ | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | 12-mo fee waiver ($203 savings), Nova Credit cross-border credit history check, Scene+ points. |
| `SRC-BNK-004` | Canadian Imperial Bank of Commerce (CIBC) — Smart for Newcomers | https://www.cibc.com/en/personal-banking/new-to-canada.html | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | 24-mo fee waiver ($400+ savings), $400 cash bonus, Global Money Transfer cash back up to $700. |
| `SRC-BNK-005` | Bank of Montreal (BMO) — NewStart Program | https://www.bmo.com/main/personal/newcomers-to-canada/ | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | 24-mo Performance Plan fee waiver ($430 savings), tiered cash pool up to $900 with $10k savings deposit. |
| `SRC-BNK-006` | ATB Financial — New to Canada Banking | https://www.atb.com/personal/everyday-banking/new-to-canada/ | Tier 2 | 2026 Current Campaign | 2026-09-03 | 30 days | 95% | Alberta Crown institution, 300+ branch/agency points, $250–$900 campaign, no credit history card. |
| `SRC-TEL-001` | TELUS PureFibre Alberta | https://www.telus.com/en/internet/fibre | Tier 2 | 2026 Current Pricing | 2026-09-03 | 30 days | 95% | Pure FTTH symmetrical download/upload (250M, 500M, 1G, 3G), $65–$110/mo promo ranges. |
| `SRC-TEL-002` | Rogers Xfinity Calgary | https://www.rogers.com/internet | Tier 2 | 2026 Current Pricing | 2026-09-03 | 30 days | 95% | Hybrid Fibre-Coax (asymmetrical upload), $65–$115/mo promo ranges. |
| `SRC-TEL-003` | Public Mobile & Freedom Mobile 5G | https://www.publicmobile.ca/ | Tier 2 | 2026 Current Pricing | 2026-09-03 | 30 days | 95% | $34–$45/mo 50GB–100GB 5G plans; CRTC banned telecom activation fees in June 2026. |
| `SRC-UTL-001` | Utilities Consumer Advocate (UCAhelps) & AUC | https://ucahelps.alberta.ca/ | Tier 1 | 2026 Regulated Tariffs | 2026-09-03 | 30 days | 100% | Alberta Energy Deregulation; RoLR electricity ~12.06¢/kWh, Direct Energy gas $1.124/GJ, fixed options. |
| `SRC-HOU-001` | CMHC — Rental Market Report (Calgary CMA) | https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/market-reports/rental-market-reports-major-centres | Tier 3 | 2025/2026 Cycles | 2026-09-03 | Annual | 100% | Purpose-built vacancy 5.0%–5.1%; occupied 2-bed rent $1,908; 3-bed occupied $2,118–$2,175. |
| `SRC-HOU-002` | Rentals.ca / Urbanation National Rent Report | https://rentals.ca/national-rent-report | Tier 3 | Mid-2026 Data | 2026-09-03 | Monthly (30 days)| 95% | Asking rents for vacant units: 3-bed $2,326–$2,371; 4-bed detached $2,600–$3,300 (avg $2,950). |
| `SRC-SAL-001` | Robert Half Canada — 2026 Salary Guide (Calgary) | https://www.roberthalf.com/ca/en/insights/salary-guide | Tier 3 | 2026 Edition | 2026-09-03 | Annual | 95% | Calgary finance salaries: Financial Analyst $75k–$95k, Senior Analyst $92k–$121k, Risk Mgr $110k–$160k. |
| `SRC-MED-001` | Curated YouTube Relocation Intelligence | https://www.youtube.com/@ryangillardrealtor | Tier 4 | 2025/2026 Video Releases | 2026-09-03 | 90 days | 90% | Ryan Gillard, Living in Calgary, Frank Huynh, Hamara Canada — experiential winter and housing reviews. |
