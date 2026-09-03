# CROSS-PROVINCE SCORING & NORMALIZATION METHODOLOGY (2.0)

## 1. Core Principles
1. **No Destination Hardcoded to Win:** Rankings are strictly mathematically derived from normalized metric vectors and user-configurable category weights.
2. **Directionality Standard:**
   - **Cost metrics (Rent, Taxes, Utilities, Groceries):** Normalized inversely ($\text{Score} = \frac{\text{Min}}{\text{Value}} \times 100$). Lower cost yields higher score.
   - **Benefit metrics (Net Income, Benefits, Halal density, Transit index, Childcare affordability):** Normalized directly ($\text{Score} = \frac{\text{Value}}{\text{Max}} \times 100$). Higher value yields higher score.

## 2. 12-Dimensional Family Fit Score Matrix
1. **Housing Affordability (Default Weight: 25%)**
   - Derived from 3-bed / 4-bed benchmark asking rents and rent-to-net-income ratio.
2. **Career Opportunity & Financial Hub Depth (Default Weight: 15%)**
   - Sector volume in finance, technology, professional services, corporate head offices.
3. **Net Take-Home Income & Tax Efficiency (Default Weight: 15%)**
   - After-tax net income based on provincial tax brackets and sales tax regime (0% PST in AB vs 13% HST in ON vs 12% GST+PST in BC).
4. **Statutory Family Benefits (Default Weight: 10%)**
   - Federal CCB + Provincial child & family benefits (ACFB in AB, OCB/OTB in ON, BCFB in BC).
5. **Muslim Life & Halal Infrastructure (Default Weight: 10%)**
   - Proximity to major Islamic centres, accredited full-time Islamic schools, halal supermarkets.
6. **Public Education & School Board Quality (Default Weight: 5%)**
   - Public board size, newcomer reception centres, ELL support programs.
7. **Healthcare Accessibility (Default Weight: 5%)**
   - Waiting period (0 days in AB/ON vs ~75-90 days in BC), youth drug plan (OHIP+), telehealth (811).
8. **Public Transit & Regional Mobility (Default Weight: 5%)**
   - Network connectivity, monthly pass affordability, free transit for kids 12 and under.
9. **Childcare Affordability (Default Weight: 5%)**
   - Provincial fee reductions ($10/day agreements, CWELCC in ON, CCFRI/ACCB in BC).
10. **Climate & Weather Reality (Default Weight: 2.5%)**
    - Milder wet coastal winters (BC) vs sunny dry cold chinooks (AB) vs snowy humid seasons (ON).
11. **Airport & Global Connectivity (Default Weight: 2.5%)**
    - Direct international flight connectivity to the Middle East / Gulf hubs.
