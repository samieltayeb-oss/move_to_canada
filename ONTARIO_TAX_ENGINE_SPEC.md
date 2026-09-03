# ONTARIO TAX ENGINE SPECIFICATION (2026)

## 1. Statutory Brackets & Rates
- **Lowest Rate:** 5.05% up to $53,891
- **Second Bracket:** 9.15% from $53,891.01 to $107,785
- **Third Bracket:** 11.16% from $107,785.01 to $150,000
- **Fourth Bracket:** 12.16% from $150,000.01 to $220,000
- **Top Bracket:** 13.16% over $220,000

## 2. Basic Personal Amount Credit
- BPA: $12,989 CAD
- Credit = $12,989 * 5.05% = $655.94 CAD

## 3. Ontario Surtax
- Applied to Basic Ontario Tax:
  - 20% on Basic Ontario Tax over $5,818
  - 36% on Basic Ontario Tax over $7,446

## 4. Ontario Health Premium (OHP)
- Up to $20k: $0
- $20k to $25k: 6% over $20k (max $300)
- $25k to $36k: $300
- $36k to $38.5k: $300 + 6% over $36k (max $450)
- $38.5k to $48k: $450
- $48k to $48.6k: $450 + 25% over $48k (max $600)
- $48.6k to $72k: $600
- $72k to $72.6k: $600 + 25% over $72k (max $750)
- $72.6k to $200k: $750
- $200k to $200.6k: $750 + 25% over $200k (max $900)
- Over $200,600: $900

## 5. Verified Benchmark Outputs (Single Filer)
- **$60,000:** Gross Base Tax $3,280.47, BPA Credit $655.94, Basic Tax $2,624.52, Surtax $0, OHP $600 $\rightarrow$ **Net ON Tax: $3,225 CAD**
- **$90,000:** Gross Base Tax $6,025.47, BPA Credit $655.94, Basic Tax $5,369.52, Surtax $0, OHP $750 $\rightarrow$ **Net ON Tax: $6,120 CAD**
- **$100,000:** Basic Tax $6,284.52, Surtax $93.30, OHP $750 $\rightarrow$ **Net ON Tax: $7,128 CAD**
- **$120,000:** Basic Tax $8,360.04, Surtax $837.46, OHP $750 $\rightarrow$ **Net ON Tax: $9,948 CAD**
- **$150,000:** Basic Tax $11,708.04, Surtax $2,712.34, OHP $750 $\rightarrow$ **Net ON Tax: $15,170 CAD**
- **$200,000:** Basic Tax $17,788.04, Surtax $6,117.14, OHP $750 $\rightarrow$ **Net ON Tax: $24,655 CAD**
- **$250,000:** Basic Tax $24,168.04, Surtax $9,689.94, OHP $900 $\rightarrow$ **Net ON Tax: $34,758 CAD**
- **$300,000:** Basic Tax $30,748.04, Surtax $13,374.74, OHP $900 $\rightarrow$ **Net ON Tax: $45,023 CAD**
