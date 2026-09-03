import { calculateCanadianTax } from '@/data/taxes';
import { calculateFamilyFoodBudget } from '@/data/groceries';

export interface BudgetItemDetail {
  category: string;
  arabicCategory: string;
  monthlyCAD: number;
  annualCAD: number;
  weeklyCAD: number;
  fixedOrVariable: 'Fixed' | 'Variable';
  notes: string;
}

export interface FamilyBudgetScenario {
  id: 'STARTING_CAREFULLY' | 'COMFORTABLE' | 'PREMIUM';
  name: string;
  arabicName: string;
  description: string;
  housingType: string;
  vehicleType: string;
  groceryStrategy: string;
  schoolType: string;
  totalMonthlyCAD: number;
  totalAnnualCAD: number;
  items: BudgetItemDetail[];
}

export function getDynamicFamilyBudgetScenarios(
  childrenAges: number[] = [16, 11, 5],
  numAdults: number = 2
): Record<'STARTING_CAREFULLY' | 'COMFORTABLE' | 'PREMIUM', FamilyBudgetScenario> {
  const foodBudget = calculateFamilyFoodBudget(childrenAges, numAdults);
  const balancedMonthly = foodBudget.adjustedFamilyMonthlyCAD; // $1,833 for [16, 11, 5]
  const valueMonthly = Math.round(balancedMonthly * 0.804);    // $1,474 for [16, 11, 5]
  const premiumMonthly = Math.round(balancedMonthly * 1.274);  // $2,336 for [16, 11, 5]

  return {
    STARTING_CAREFULLY: {
      id: 'STARTING_CAREFULLY',
      name: 'Starting Carefully (Prudent Landing)',
      arabicName: 'المستوى الحذر (تأسيس اقتصادي ذكي)',
      description: 'Disciplined family launch: 3-bedroom townhouse, Value Shopper bulk grocery strategy, reliable used family SUV, public CBE school catchment.',
      housingType: '3-Bedroom Townhouse / Duplex ($2,345/mo)',
      vehicleType: 'Used 2018 Toyota Highlander AWD (Paid Cash / Minimal Financing)',
      groceryStrategy: `Costco Bulk + Superstore / Walmart Specials ($${valueMonthly.toLocaleString()}/mo)`,
      schoolType: 'CBE Public School Catchment (Free tuition)',
      totalMonthlyCAD: 2345 + 280 + 140 + 80 + 85 + valueMonthly + 250 + 160 + 80 + 60 + 90 + 150 + 120 + 160 + 100, // $5,474 for [16, 11, 5]
      totalAnnualCAD: (2345 + 280 + 140 + 80 + 85 + valueMonthly + 250 + 160 + 80 + 60 + 90 + 150 + 120 + 160 + 100) * 12,
      items: [
        { category: 'Housing (Rent)', arabicCategory: 'إيجار السكن', monthlyCAD: 2345, annualCAD: 28140, weeklyCAD: 541, fixedOrVariable: 'Fixed', notes: '3-Bed suburban townhouse' },
        { category: 'Utilities: Electricity & Natural Gas', arabicCategory: 'الكهرباء والغاز الطبيعي', monthlyCAD: 280, annualCAD: 3360, weeklyCAD: 65, fixedOrVariable: 'Variable', notes: 'Average seasonal blend' },
        { category: 'Utilities: City Municipal (Water/Waste)', arabicCategory: 'فواتير بلدية كالغاري (الماء والنفايات)', monthlyCAD: 140, annualCAD: 1680, weeklyCAD: 32, fixedOrVariable: 'Fixed', notes: 'City of Calgary baseline billed via ENMAX' },
        { category: 'Home Broadband Internet', arabicCategory: 'إنترنت منزلي فايبر', monthlyCAD: 80, annualCAD: 960, weeklyCAD: 18, fixedOrVariable: 'Fixed', notes: 'TELUS PureFibre 500M' },
        { category: 'Mobile Phone Plans (2 Adults)', arabicCategory: 'خطوط جوال (شريحتين 5G)', monthlyCAD: 85, annualCAD: 1020, weeklyCAD: 20, fixedOrVariable: 'Fixed', notes: 'Koodo/Fido 50GB lines' },
        { category: 'Groceries & Household (Halal)', arabicCategory: 'المواد الغذائية والتموينية (حلال)', monthlyCAD: valueMonthly, annualCAD: valueMonthly * 12, weeklyCAD: Math.round(valueMonthly / 4.33), fixedOrVariable: 'Variable', notes: 'Costco + Superstore Value Plan (Ages 16, 11, 5 model)' },
        { category: 'Auto Insurance (Newcomer Rate)', arabicCategory: 'تأمين السيارة (تسعيرة القادم الجديد)', monthlyCAD: 250, annualCAD: 3000, weeklyCAD: 58, fixedOrVariable: 'Fixed', notes: 'First-year foreign licence rate' },
        { category: 'Gasoline / Fuel', arabicCategory: 'وقود السيارة (البنزين)', monthlyCAD: 160, annualCAD: 1920, weeklyCAD: 37, fixedOrVariable: 'Variable', notes: '~1,200 km/mo suburban driving' },
        { category: 'Vehicle Maintenance Reserve', arabicCategory: 'صيانة السيارة وتغيير الإطارات', monthlyCAD: 80, annualCAD: 960, weeklyCAD: 18, fixedOrVariable: 'Variable', notes: 'Seasonal tire swap & oil changes' },
        { category: 'Calgary Transit (Auxiliary)', arabicCategory: 'المواصلات العامة (تذاكر إضافية)', monthlyCAD: 60, annualCAD: 720, weeklyCAD: 14, fixedOrVariable: 'Variable', notes: 'Adult passes/tickets as needed (Kids free)' },
        { category: 'Public School Supplies & Activities', arabicCategory: 'مستلزمات المدارس الحكومية والأنشطة', monthlyCAD: 90, annualCAD: 1080, weeklyCAD: 21, fixedOrVariable: 'Variable', notes: 'Field trips and stationery' },
        { category: 'Clothing & Winter Amortization', arabicCategory: 'الملابس والكسوة الشتوية السنوية', monthlyCAD: 150, annualCAD: 1800, weeklyCAD: 35, fixedOrVariable: 'Variable', notes: 'Winter parkas & boots amortized' },
        { category: 'Family Recreation & Outings', arabicCategory: 'الأنشطة الترفيهية والحدائق العائلية', monthlyCAD: 120, annualCAD: 1440, weeklyCAD: 28, fixedOrVariable: 'Variable', notes: 'Calgary Zoo, parks, library' },
        { category: 'Halal Dining & Coffee', arabicCategory: 'المطاعم الحلال والمقاهي', monthlyCAD: 160, annualCAD: 1920, weeklyCAD: 37, fixedOrVariable: 'Variable', notes: '1–2 casual family meals per month' },
        { category: 'Emergency Health/Dental Buffer', arabicCategory: 'طوارئ صحية وأدوية غير مشمولة بـ AHCIP', monthlyCAD: 100, annualCAD: 1200, weeklyCAD: 23, fixedOrVariable: 'Variable', notes: 'Prescriptions & pediatric dental' }
      ]
    },
    COMFORTABLE: {
      id: 'COMFORTABLE',
      name: 'Comfortable Family Baseline (Recommended)',
      arabicName: 'المستوى المريح المتوازن (الموصى به)',
      description: 'Standard executive lifestyle: 4-bedroom detached home with double garage (adjusted for Calgary price drop), Balanced Family halal grocery model, AWD family SUV, Public schooling (CBE) default.',
      housingType: '4-Bedroom Detached Single-Family Home ($2,600/mo - Price Dropped)',
      vehicleType: 'Late-model Toyota Highlander AWD / Sienna Hybrid ($450/mo lease/finance)',
      groceryStrategy: `Balanced Family: Costco + Halal Butcher + Fresh Produce ($${balancedMonthly.toLocaleString()}/mo)`,
      schoolType: 'Public School (CBE) $0 Tuition + $90 Supplies (Islamic School CIS optional)',
      totalMonthlyCAD: 2600 + 360 + 155 + 95 + 110 + balancedMonthly + 450 + 280 + 210 + 100 + 90 + 220 + 220 + 300 + 150 + 400, // $7,073 for [16, 11, 5]
      totalAnnualCAD: (2600 + 360 + 155 + 95 + 110 + balancedMonthly + 450 + 280 + 210 + 100 + 90 + 220 + 220 + 300 + 150 + 400) * 12,
      items: [
        { category: 'Housing (Rent)', arabicCategory: 'إيجار السكن (منزل مستقل 4 غرف)', monthlyCAD: 2600, annualCAD: 31200, weeklyCAD: 600, fixedOrVariable: 'Fixed', notes: 'Softened Calgary market: 4-bed detached with garage' },
        { category: 'Utilities: Electricity & Natural Gas', arabicCategory: 'الكهرباء والغاز الطبيعي', monthlyCAD: 360, annualCAD: 4320, weeklyCAD: 83, fixedOrVariable: 'Variable', notes: 'Detached home winter heating' },
        { category: 'Utilities: City Municipal (Water/Waste)', arabicCategory: 'فواتير بلدية كالغاري (الماء والنفايات)', monthlyCAD: 155, annualCAD: 1860, weeklyCAD: 36, fixedOrVariable: 'Fixed', notes: 'Standard 4-bedroom municipal carts' },
        { category: 'Home Broadband Internet', arabicCategory: 'إنترنت منزلي فايبر', monthlyCAD: 95, annualCAD: 1140, weeklyCAD: 22, fixedOrVariable: 'Fixed', notes: 'TELUS PureFibre 1 Gbps' },
        { category: 'Mobile Phone Plans (2 Adults)', arabicCategory: 'خطوط جوال (شريحتين 5G)', monthlyCAD: 110, annualCAD: 1320, weeklyCAD: 25, fixedOrVariable: 'Fixed', notes: 'Tier 1 unlimited 5G plans' },
        { category: 'Groceries & Household (Halal)', arabicCategory: 'المواد الغذائية والتموينية (حلال)', monthlyCAD: balancedMonthly, annualCAD: balancedMonthly * 12, weeklyCAD: Math.round(balancedMonthly / 4.33), fixedOrVariable: 'Variable', notes: 'Balanced family plan (Ages 16, 11, 5 model)' },
        { category: 'Auto Financing / Lease Payment', arabicCategory: 'قسط تمويل أو استئجار السيارة العائلية', monthlyCAD: 450, annualCAD: 5400, weeklyCAD: 104, fixedOrVariable: 'Fixed', notes: 'Mid-size AWD family SUV' },
        { category: 'Auto Insurance', arabicCategory: 'تأمين السيارة الشامل', monthlyCAD: 280, annualCAD: 3360, weeklyCAD: 65, fixedOrVariable: 'Fixed', notes: 'Comprehensive collision coverage' },
        { category: 'Gasoline / Fuel', arabicCategory: 'وقود السيارة (البنزين)', monthlyCAD: 210, annualCAD: 2520, weeklyCAD: 48, fixedOrVariable: 'Variable', notes: '~1,600 km/mo commute + activities' },
        { category: 'Vehicle Maintenance Reserve', arabicCategory: 'صيانة السيارة وتغيير الإطارات', monthlyCAD: 100, annualCAD: 1200, weeklyCAD: 23, fixedOrVariable: 'Variable', notes: 'Maintenance and winter gear' },
        { category: 'Public School (CBE) Supplies & Activities', arabicCategory: 'مستلزمات المدارس الحكومية العامة', monthlyCAD: 90, annualCAD: 1080, weeklyCAD: 21, fixedOrVariable: 'Variable', notes: 'Public school tuition is $0 CAD (Optional CIS: ~$410/mo)' },
        { category: 'Clothing & Winter Amortization', arabicCategory: 'الملابس والكسوة الشتوية السنوية', monthlyCAD: 220, annualCAD: 2640, weeklyCAD: 51, fixedOrVariable: 'Variable', notes: 'High-quality winter outerwear' },
        { category: 'Family Recreation & Sports', arabicCategory: 'الأنشطة الرياضية والترفيهية للأطفال', monthlyCAD: 220, annualCAD: 2640, weeklyCAD: 51, fixedOrVariable: 'Variable', notes: 'Swimming, soccer, recreation centres' },
        { category: 'Halal Dining Out & Gatherings', arabicCategory: 'المطاعم الحلال والمناسبات', monthlyCAD: 300, annualCAD: 3600, weeklyCAD: 69, fixedOrVariable: 'Variable', notes: 'Weekly family halal dinners' },
        { category: 'Emergency Health/Dental Buffer', arabicCategory: 'طوارئ صحية وأدوية غير مشمولة بـ AHCIP', monthlyCAD: 150, annualCAD: 1800, weeklyCAD: 35, fixedOrVariable: 'Variable', notes: 'Private extended health supplement' },
        { category: 'Family Savings / Contingency', arabicCategory: 'ادخار عائلي واحتياطي طوارئ شهري', monthlyCAD: 400, annualCAD: 4800, weeklyCAD: 92, fixedOrVariable: 'Variable', notes: 'Liquid reserve accumulation' }
      ]
    },
    PREMIUM: {
      id: 'PREMIUM',
      name: 'Executive Premium Lifestyle',
      arabicName: 'المستوى التنفيذي الراقي (SW / Aspen Woods)',
      description: 'Executive standard: Luxury Southwest home (West Springs / Aspen Woods), Premium grocery and organic basket, two modern vehicles, full private/alternative schooling and travel.',
      housingType: 'Executive 4-5 Bed Estate Home in SW Calgary ($3,950/mo)',
      vehicleType: 'New Luxury AWD SUV + Second Family Crossover ($950/mo)',
      groceryStrategy: `Premium Organic + Fresh Halal Butcher ($${premiumMonthly.toLocaleString()}/mo)`,
      schoolType: 'Islamic Alternative or Private Academy ($650/mo)',
      totalMonthlyCAD: 3950 + 440 + 180 + 140 + 150 + premiumMonthly + 950 + 450 + 320 + 160 + 650 + 350 + 500 + 600 + 250 + 1220, // $11,696 for [16, 11, 5]
      totalAnnualCAD: (3950 + 440 + 180 + 140 + 150 + premiumMonthly + 950 + 450 + 320 + 160 + 650 + 350 + 500 + 600 + 250 + 1220) * 12,
      items: [
        { category: 'Housing (Rent)', arabicCategory: 'إيجار السكن', monthlyCAD: 3950, annualCAD: 47400, weeklyCAD: 912, fixedOrVariable: 'Fixed', notes: 'Luxury estate home in Aspen Woods' },
        { category: 'Utilities: Electricity & Natural Gas', arabicCategory: 'الكهرباء والغاز الطبيعي', monthlyCAD: 440, annualCAD: 5280, weeklyCAD: 102, fixedOrVariable: 'Variable', notes: 'Large estate heating & power' },
        { category: 'Utilities: City Municipal (Water/Waste)', arabicCategory: 'فواتير بلدية كالغاري (الماء والنفايات)', monthlyCAD: 180, annualCAD: 2160, weeklyCAD: 42, fixedOrVariable: 'Fixed', notes: 'Large residential lot rates' },
        { category: 'Home Broadband & Streaming', arabicCategory: 'إنترنت فايبر عالي السرعة وباقات ترفيه', monthlyCAD: 140, annualCAD: 1680, weeklyCAD: 32, fixedOrVariable: 'Fixed', notes: 'Gigabit PureFibre + Sports packages' },
        { category: 'Mobile Phone Plans (Family)', arabicCategory: 'خطوط جوال عائلية', monthlyCAD: 150, annualCAD: 1800, weeklyCAD: 35, fixedOrVariable: 'Fixed', notes: 'Premium unlimited 5G' },
        { category: 'Groceries & Household (Halal)', arabicCategory: 'المواد الغذائية والتموينية (حلال)', monthlyCAD: premiumMonthly, annualCAD: premiumMonthly * 12, weeklyCAD: Math.round(premiumMonthly / 4.33), fixedOrVariable: 'Variable', notes: 'Premium organic & halal meats (Ages 16, 11, 5 model)' },
        { category: 'Auto Financing (2 Vehicles)', arabicCategory: 'أقساط سيارتين عائليتين', monthlyCAD: 950, annualCAD: 11400, weeklyCAD: 219, fixedOrVariable: 'Fixed', notes: 'Primary SUV + secondary commuter' },
        { category: 'Auto Insurance (2 Vehicles)', arabicCategory: 'تأمين سيارتين شامل', monthlyCAD: 450, annualCAD: 5400, weeklyCAD: 104, fixedOrVariable: 'Fixed', notes: 'Comprehensive multi-car policy' },
        { category: 'Gasoline / Fuel', arabicCategory: 'وقود السيارتين', monthlyCAD: 320, annualCAD: 3840, weeklyCAD: 74, fixedOrVariable: 'Variable', notes: 'Combined family commute' },
        { category: 'Vehicle Maintenance Reserve', arabicCategory: 'صيانة وتجهيزات المركبات', monthlyCAD: 160, annualCAD: 1920, weeklyCAD: 37, fixedOrVariable: 'Variable', notes: 'Premium synthetic & seasonal sets' },
        { category: 'Islamic / Private School Tuition', arabicCategory: 'أقساط المدارس الإسلامية أو الخاصة', monthlyCAD: 650, annualCAD: 7800, weeklyCAD: 150, fixedOrVariable: 'Fixed', notes: 'Full alternative/private schooling' },
        { category: 'Clothing & Lifestyle', arabicCategory: 'الملابس والمشتريات الشخصية', monthlyCAD: 350, annualCAD: 4200, weeklyCAD: 81, fixedOrVariable: 'Variable', notes: 'Designer winter & formal wear' },
        { category: 'Family Travel & Rockies Vacations', arabicCategory: 'السفر والرحلات الجبلية والمنتجعات', monthlyCAD: 500, annualCAD: 6000, weeklyCAD: 115, fixedOrVariable: 'Variable', notes: 'Banff/Canmore weekends & holidays' },
        { category: 'Dining Out & Entertainment', arabicCategory: 'المطاعم الفاخرة والأنشطة الترفيهية', monthlyCAD: 600, annualCAD: 7200, weeklyCAD: 138, fixedOrVariable: 'Variable', notes: 'Upscale dining & entertainment' },
        { category: 'Health & Extended Wellness', arabicCategory: 'التأمين الطبي الخاص والعلاج الطبيعي', monthlyCAD: 250, annualCAD: 3000, weeklyCAD: 58, fixedOrVariable: 'Variable', notes: 'Full supplemental health & dental' },
        { category: 'Savings & Investments', arabicCategory: 'الادخار والاستثمار التراكمي', monthlyCAD: 1220, annualCAD: 14640, weeklyCAD: 282, fixedOrVariable: 'Variable', notes: 'TFSA / RRSP / RESP savings' }
      ]
    }
  };
}

export const familyBudgetScenarios = getDynamicFamilyBudgetScenarios([16, 11, 5], 2);

export interface ArrivalSalaryThreshold {
  lifestyleTier: string;
  arabicLifestyleTier: string;
  recommendedGrossSalaryCAD: number;
  estimatedNetMonthlyCAD: number;
  canadaChildBenefitMonthlyCAD: number;
  monthlyExpensesCAD: number;
  monthlySurplusCAD: number;
  housingCostPercentage: number;
  financialFeasibility: 'TIGHT / SURVIVAL' | 'STABLE & SOLVENT' | 'COMFORTABLE' | 'EXCELLENT SURPLUS';
  rationale: string;
}

export const arrivalSalaryThresholds: ArrivalSalaryThreshold[] = [
  {
    lifestyleTier: 'Transition / Starting Baseline',
    arabicLifestyleTier: 'مرحلة البداية والانتقال',
    recommendedGrossSalaryCAD: 85000,
    estimatedNetMonthlyCAD: 5260,
    canadaChildBenefitMonthlyCAD: 1180, // higher CCB at lower income
    monthlyExpensesCAD: 5310,
    monthlySurplusCAD: 1130,
    housingCostPercentage: 33, // $2,345 rent on $7,083 gross
    financialFeasibility: 'STABLE & SOLVENT',
    rationale: 'Even with a starting salary of $85,000, Canada Child Benefit (~$1,180/mo) provides significant liquidity, yielding ~$1,130/mo net cash surplus under prudent spending.'
  },
  {
    lifestyleTier: 'Comfortable Household (Recommended)',
    arabicLifestyleTier: 'المستوى المعيشي المريح المتوازن',
    recommendedGrossSalaryCAD: 125000,
    estimatedNetMonthlyCAD: 7380,
    canadaChildBenefitMonthlyCAD: 840,
    monthlyExpensesCAD: 7540,
    monthlySurplusCAD: 680,
    housingCostPercentage: 28, // $2,950 rent on $10,416 gross (< 30% healthy benchmark)
    financialFeasibility: 'COMFORTABLE',
    rationale: 'At $125,000, housing consumes only 28% of gross earnings. Supports a 4-bedroom detached home, CIS schooling, an AWD SUV, and modest monthly savings.'
  },
  {
    lifestyleTier: 'Executive Target Profile',
    arabicLifestyleTier: 'المستوى الوظيفي التنفيذي المستهدف',
    recommendedGrossSalaryCAD: 155000,
    estimatedNetMonthlyCAD: 8960,
    canadaChildBenefitMonthlyCAD: 580,
    monthlyExpensesCAD: 7540,
    monthlySurplusCAD: 2000,
    housingCostPercentage: 23,
    financialFeasibility: 'EXCELLENT SURPLUS',
    rationale: 'At $155,000 (typical for Senior Operations/Finance Managers in Calgary), the family runs a strong $2,000/mo net surplus for retirement, RESP children education funds, and annual Saudi Arabia family visits.'
  }
];

export interface JobOfferSimulationInput {
  baseSalaryCAD: number;
  bonusAnnualCAD: number;
  daysInOfficePerWeek: number;
  housingMonthlyRentCAD: number;
  islamicSchoolMonthlyCAD: number;
  vehicleMonthlyFinancingCAD: number;
}

export interface JobOfferSimulationResult {
  grossAnnualIncomeCAD: number;
  grossMonthlyIncomeCAD: number;
  federalTaxAnnualCAD: number;
  provincialTaxAnnualCAD: number;
  totalTaxAnnualCAD: number;
  netAnnualTakeHomeCAD: number;
  netMonthlyTakeHomeCAD: number;
  ccbMonthlyEstimatedCAD: number;
  totalMonthlyLiquidCashFlowCAD: number;
  estimatedMonthlyLivingExpensesCAD: number;
  monthlyNetSurplusCAD: number;
  housingToGrossRatioPercent: number;
  isHousingAffordable: boolean; // < 32% standard CMHC threshold
}

export function simulateJobOfferCashFlow(inputs: JobOfferSimulationInput): JobOfferSimulationResult {
  const totalGrossAnnual = inputs.baseSalaryCAD + inputs.bonusAnnualCAD;
  const grossMonthly = totalGrossAnnual / 12;

  // Run 2026 progressive tax calculation for family of 5 (ages 16, 11, 5)
  const taxResult = calculateCanadianTax(totalGrossAnnual, [16, 11, 5], true);

  const netMonthly = taxResult.netMonthlyTakeHomeCAD;
  const ccbMonthly = taxResult.canadaChildBenefitEstimatedAnnualCAD / 12;
  const totalMonthlyLiquid = netMonthly + ccbMonthly;

  // Commute fuel scaling with days in office
  const commuteFuelMonthly = Math.round(80 + (inputs.daysInOfficePerWeek * 28));

  // Dynamic baseline living expenses
  const utilitiesMonthly = 495; // power, gas, municipal
  const foodMonthly = 1630; // balanced halal
  const telecomMonthly = 205; // internet + 2 mobile lines
  const insuranceMonthly = 280;
  const vehiclePayment = inputs.vehicleMonthlyFinancingCAD;
  const schooling = inputs.islamicSchoolMonthlyCAD;
  const miscLiving = 850; // clothing, recreation, dining, pharmacy

  const totalMonthlyExpenses = 
    inputs.housingMonthlyRentCAD + 
    utilitiesMonthly + 
    foodMonthly + 
    telecomMonthly + 
    insuranceMonthly + 
    commuteFuelMonthly + 
    vehiclePayment + 
    schooling + 
    miscLiving;

  const monthlyNetSurplus = Math.round((totalMonthlyLiquid - totalMonthlyExpenses) * 100) / 100;
  const housingRatio = Math.round((inputs.housingMonthlyRentCAD / grossMonthly) * 1000) / 10;

  return {
    grossAnnualIncomeCAD: totalGrossAnnual,
    grossMonthlyIncomeCAD: Math.round(grossMonthly),
    federalTaxAnnualCAD: Math.round(taxResult.federalTaxCAD),
    provincialTaxAnnualCAD: Math.round(taxResult.albertaTaxCAD),
    totalTaxAnnualCAD: Math.round(taxResult.totalDeductionsCAD),
    netAnnualTakeHomeCAD: Math.round(taxResult.netAnnualTakeHomeCAD),
    netMonthlyTakeHomeCAD: Math.round(netMonthly),
    ccbMonthlyEstimatedCAD: Math.round(ccbMonthly),
    totalMonthlyLiquidCashFlowCAD: Math.round(totalMonthlyLiquid),
    estimatedMonthlyLivingExpensesCAD: Math.round(totalMonthlyExpenses),
    monthlyNetSurplusCAD: monthlyNetSurplus,
    housingToGrossRatioPercent: housingRatio,
    isHousingAffordable: housingRatio <= 32
  };
}
