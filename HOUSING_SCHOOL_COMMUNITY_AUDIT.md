# HOUSING, SCHOOLS & ISLAMIC COMMUNITY AUDIT

**Project:** move_to_canada (V1 Alberta)  
**Geographic Scope:** City of Calgary, Alberta (NE, NW, SW, SE Quadrants)  
**Audit Standard:** Separation of CMHC Occupied Data vs. Rentals.ca Asking Rates vs. Specific Listing Units

---

## 1. Housing & Rental Market Data Delineation

### 1.1 Data Source Segregation

| Housing Type | CMHC Occupied Average (Sitting Leases) | Rentals.ca / Urbanation (Current Asking) | Representative Active Listings Range |
| :--- | :---: | :---: | :---: |
| **3-Bedroom Townhouse / Duplex** | $1,940 – $2,050 CAD / mo | $2,250 – $2,450 CAD / mo | $2,050 – $2,200 CAD / mo (e.g. Taradale, Sage Hill) |
| **4-Bedroom Detached House** | $2,350 – $2,500 CAD / mo | $2,750 – $3,100 CAD / mo | $2,390 – $2,680 CAD / mo (e.g. Thorncliffe, Cornerstone) |

- **Methodology Note:** The system distinguishes between CMHC data (which surveys all occupied primary rental units regardless of lease inception date) and Rentals.ca reports (which track active open-market vacant unit asking prices).
- **8 Active Listings Verification:** All 8 listings in `housing.ts` reflect real Calgary property types with verified photo bindings and direct Facebook share links.

---

## 2. Neighbourhood Explorer & Recommendation Engine

### 2.1 Quadrant Coverage
1. **Northeast (NE Calgary - Cornerstone, Saddleridge, Taradale, Savanna, Cityscape, Redstone):**
   - Highest concentration of Halal supermarkets, ethnic dining, and proximity to Akram Jomaa Islamic Centre.
   - Master-planned modern construction with double front-drive garages and secondary suites.
2. **Northwest (NW Calgary - Evanston, Sage Hill):**
   - Quiet master-planned family suburbs, modern parks, strong public CBE schools, close to Beacon Hill Costco.
3. **Southwest (SW Calgary - West Springs, Aspen Woods):**
   - Executive residential area, higher rental bracket ($3,500+ CAD/mo), close to MAC SW Masjid.

### 2.2 Filter Audit & Bug Fix
- **Filter Tag Alignment:** Fixed a filter check bug in `NeighbourhoodExplorer.tsx` where `'Top Rated Schools'` was checked while Evanston’s tag was `'Top Schools'`. Evanston now displays under the School filter.
- **`muslimFamilyScore` Heuristic Disclosure:** Flagged as an internal index (Cornerstone 97, Saddleridge 98, Evanston 84) based on travel distance to mosques, halal food availability, and community demographics.

---

## 3. Schools & Educational Pathways

### 3.1 Public CBE ($0 Tuition) vs. Islamic Schools

| Educational Pathway | Provider / System | Annual Tuition Cost | Enrollment Process & Address Rules |
| :--- | :--- | :---: | :--- |
| **Primary Default (Public)** | Calgary Board of Education (CBE) | **$0.00 CAD** | Catchment area strictly determined by home address. Intake through Kingsland Reception Centre. |
| **Public Catholic (Alternative)** | Calgary Catholic School District (CCSD) | **$0.00 CAD** | Publicly funded; accepts non-Catholic students where classroom capacity allows. |
| **Islamic Alternative (Accredited)**| Calgary Islamic School (Akram Jomaa / OBK) | **$2,450 – $2,690 CAD** | Alternative program under Palliser School Division. Arabic & Islamic studies; charter busing extra. |
| **Islamic Private (Accredited)** | Al-Amal Academy (NW Calgary) | **$2,200 CAD** | Private accredited Islamic curriculum; sibling discounts apply. |

### 3.2 Age-to-Grade Progression (Yassir's 3 Children)
- **Child 1 (Age 16):** Grade 11 (Senior High School) — 100-credit graduation track.
- **Child 2 (Age 11):** Grade 6 (Elementary School) — Provincial Achievement Tests (PATs).
- **Child 3 (Age 5):** Kindergarten / ECS — Full-time or half-day early childhood development.

---

## 4. Islamic Community & Mosque Infrastructure

### 4.1 Verified Mosques & Community Centres
1. **Akram Jomaa Islamic Centre (MCC):** `2624 – 39 Avenue NE`. 3,000+ capacity, 3 Friday Jumu'ah prayer shifts, funeral services, full-time Tahfeez.
2. **Downtown Calgary Mosque (IISC):** `Unit 200, 1009 – 7th Avenue SW`. Located directly on the 7th Ave CTrain Free Fare Zone; Friday Jumu'ah services (12:30 & 1:30 PM).
3. **Al-Salam Centre (MAC):** `6415 Ranchview Drive NW`. Ranchlands community mosque, youth sports leagues, and Quran academy.
4. **Calgary Islamic Centre (SW Masjid / CICSW):** `5615 – 14 Avenue SW`. Serving South/SW Calgary; family arbitration and educational programs.

### 4.2 Zero Mosque Ranking Compliance
- **Compliance Status:** **100% PASS**.
- In strict adherence to Islamic community standards, **no mosque or Islamic centre is assigned a numerical rank, comparative score, or competitive grade**. Mosques are presented with equal standing and filtered solely by practical services.
