# DESTINATION-AWARE CITY COST & SALARY TARGET MODEL

## 1. 20-Category Monthly Outlay Model
For each city and family scenario, monthly living costs are composed of:
1. **Housing (Rent):** 3-bed / 4-bed benchmark asking rent
2. **Utilities:** Electricity (Hydro), Natural Gas (Heating), Municipal Water & Waste
3. **Telecom & Home Broadband:** PureFibre / Gigabit internet + family mobile lines (50GB-100GB 5G)
4. **Groceries & Halal Food:** Canada Food Price Report 2026 age model (Adult 48, Adult 44, Kids 16, 11, 5) with regional adjustments
5. **Transportation (Vehicle vs Transit):**
   - Option A: 1 Family AWD SUV (Financing/Depreciation, Auto Insurance by city, StatsCan Fuel)
   - Option B: Public Transit Passes (TTC, MiWay, Brampton, OC Transpo, TransLink, HSR, GRT, BC Transit)
   - Option C: Hybrid Commute (1 vehicle + 1 monthly transit pass)
6. **Education & School Fees:** Public CBE/TDSB/VSB ($0 tuition) vs Islamic School tuition
7. **Childcare:** Regulated daycare / before-and-after school care for eligible age groups
8. **Healthcare & Dental:** Uninsured medical, ambulance, dental copays, prescriptions
9. **Seasonal Clothing:** Winter gear, parkas, boots, thermal layers
10. **Emergency Reserve & Savings:** Target discretionary surplus

## 2. Dynamic Salary Target Thresholds
Instead of an arbitrary single number, the model computes four realistic salary bands:
1. **Transition Minimum:** Covers bare essential rent, groceries, transit, basic utilities (Rent-to-income $\le 45\%$).
2. **Stable Family:** Covers 3-bed home, 1 car, full groceries, youth activities (Rent-to-income $\le 35\%$).
3. **Comfortable Middle Class:** Covers 3/4-bed detached home, car + transit, Islamic school or extracurriculars, annual travel, family savings (Rent-to-income $\le 28\%$).
4. **Strong Wealth Building:** Significant surplus for investments, down payment accumulation, and maximum RESP/RRSP contributions (Rent-to-income $\le 22\%$).
