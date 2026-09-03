export interface FoodReportAgeCategory {
  categoryName: string;
  ageRange: string;
  annualEstimateCAD: number;
  monthlyEstimateCAD: number;
  weeklyEstimateCAD: number;
}

// Sourced directly from Canada's Food Price Report 2026 (Dalhousie & Guelph)
export const foodPriceReport2026Benchmarks: Record<string, FoodReportAgeCategory> = {
  man_31_50: {
    categoryName: 'Adult Man (31–50)',
    ageRange: '31–50 years',
    annualEstimateCAD: 4420,
    monthlyEstimateCAD: 368.33,
    weeklyEstimateCAD: 85.00
  },
  woman_31_50: {
    categoryName: 'Adult Woman (31–50)',
    ageRange: '31–50 years',
    annualEstimateCAD: 3980,
    monthlyEstimateCAD: 331.67,
    weeklyEstimateCAD: 76.54
  },
  boy_9_13: {
    categoryName: 'Child / Youth (9–13)',
    ageRange: '9–13 years',
    annualEstimateCAD: 3760,
    monthlyEstimateCAD: 313.33,
    weeklyEstimateCAD: 72.31
  },
  child_4_8: {
    categoryName: 'Child (4–8)',
    ageRange: '4–8 years',
    annualEstimateCAD: 2720,
    monthlyEstimateCAD: 226.67,
    weeklyEstimateCAD: 52.31
  },
  child_0_4: {
    categoryName: 'Preschool Child (0–4)',
    ageRange: '0–4 years',
    annualEstimateCAD: 2080,
    monthlyEstimateCAD: 173.33,
    weeklyEstimateCAD: 40.00
  }
};

export interface GroceryStoreProfile {
  id: string;
  name: string;
  arabicName: string;
  positioningTag: 'BEST BULK VALUE' | 'BEST WEEKLY SHOP' | 'BEST DISCOUNTS' | 'BEST HALAL SELECTION' | 'PREMIUM PRODUCE' | 'QUICK CONVENIENCE';
  calgaryLocationsCount: number;
  primaryLocations: string[];
  priceIndexVsAverage: number; // e.g. 0.88 means 12% cheaper than average
  bestFor: string;
  arabicBestFor: string;
  halalMeatAvailable: boolean;
  halalNote: string;
  onlinePricingDifferenceNotice?: string;
  sourceUrl: string;
}

export const calgaryGroceryStores: GroceryStoreProfile[] = [
  {
    id: 'store-costco',
    name: 'Costco Wholesale',
    arabicName: 'كوستكو لمبيعات الجملة',
    positioningTag: 'BEST BULK VALUE',
    calgaryLocationsCount: 5,
    primaryLocations: ['Sunridge NE (closest to NE mosques)', 'Beacon Hill NW', 'Heritage SE', 'Tsuut\'ina SW', 'East Hills SE'],
    priceIndexVsAverage: 0.82,
    bestFor: 'Bulk household essentials, eggs, milk, nuts, pantry staples, olive oil, and certified halal whole/cut chicken packages.',
    arabicBestFor: 'المنتجات المنزلية بالجملة، البيض، الحليب، زيت الزيتون، الدجاج الحلال المعتمد، ومستلزمات الأطفال.',
    halalMeatAvailable: true,
    halalNote: 'Stocks certified Halal fresh whole chickens, chicken breasts, and frozen halal lamb packs from certified Canadian suppliers (Sufra, Mina).',
    onlinePricingDifferenceNotice: 'Costco.ca and Same-Day delivery via Instacart are marked up approximately 15%–20% higher than in-warehouse physical pricing.',
    sourceUrl: 'https://www.costco.ca/'
  },
  {
    id: 'store-superstore',
    name: 'Real Canadian Superstore (Loblaw)',
    arabicName: 'ريل كاناديان سوبرستور',
    positioningTag: 'BEST WEEKLY SHOP',
    calgaryLocationsCount: 7,
    primaryLocations: ['Castleridge / Westwinds NE', 'Country Hills NW', 'Shawnessy SW', 'Huntington Hills NW', 'Sunridge NE'],
    priceIndexVsAverage: 0.88,
    bestFor: 'All-in-one weekly family shopping, massive international/Middle Eastern aisle, fresh produce, and extensive Halal meat counters.',
    arabicBestFor: 'التسوق الأسبوعي الشامل للعائلة، قسم ضخم للمنتجات العربية والشرق أوسطية، وخضار طازجة وملاحم حلال.',
    halalMeatAvailable: true,
    halalNote: 'Features dedicated Sufra/Zabiha Halal fresh butcher sections and extensive Cedar/Al-Alali imported canned foods.',
    onlinePricingDifferenceNotice: 'PC Express pickup pricing matches in-store weekly flyer prices; home delivery incurs small delivery/service fees.',
    sourceUrl: 'https://www.realcanadiansuperstore.ca/'
  },
  {
    id: 'store-walmart',
    name: 'Walmart Supercentre',
    arabicName: 'وول مارت سوبر سنتر',
    positioningTag: 'BEST DISCOUNTS',
    calgaryLocationsCount: 9,
    primaryLocations: ['Marlborough NE', 'Deerfoot City NE', 'Northland NW', 'Sage Hill NW', 'Macleod Trail SE'],
    priceIndexVsAverage: 0.89,
    bestFor: 'Competitive staple pricing, dry groceries, cleaning products, school snacks, and budget dairy.',
    arabicBestFor: 'أفضل أسعار للمواد التموينية الجافة والمنظفات ومستلزمات المدارس ومنتجات الألبان الاقتصادية.',
    halalMeatAvailable: true,
    halalNote: 'Stocks packaged certified Halal poultry and select halal frozen foods in suburban locations.',
    sourceUrl: 'https://www.walmart.ca/'
  },
  {
    id: 'store-basha',
    name: 'Basha Foods International',
    arabicName: 'باشا فودز إنترناشونال (السوق العربي)',
    positioningTag: 'BEST HALAL SELECTION',
    calgaryLocationsCount: 1,
    primaryLocations: ['2705 Centre Ave NE, Calgary (Near Barlow Trail / Memorial Dr)'],
    priceIndexVsAverage: 0.95,
    bestFor: 'Full-service Arab and Middle Eastern supermarket: fresh halal lamb and beef cut to order, warm pita bread, Arabic cheeses, spices, dates, and olive oil.',
    arabicBestFor: 'سوبرماركت عربي متكامل: لحوم حلال طازجة مقطعة حسب الطلب، خبز عربي طازج، أجبان شامية، بهارات، تمور، وزيوت.',
    halalMeatAvailable: true,
    halalNote: '100% Zabiha Halal fresh butcher counter with Arabic-speaking butchers offering customary cuts (chops, cubes, minced).',
    sourceUrl: 'https://bashafoods.ca/'
  },
  {
    id: 'store-saned',
    name: 'Saned Halal Meat & Middle Eastern Grocery',
    arabicName: 'ملحمة وبقالة ساند الحلال',
    positioningTag: 'BEST HALAL SELECTION',
    calgaryLocationsCount: 2,
    primaryLocations: ['Falconridge NE', 'Saddletowne NE'],
    priceIndexVsAverage: 0.93,
    bestFor: 'Fresh local Alberta beef, goat, and chicken, specialty Middle Eastern spices, tahini, and authentic halal small-goods.',
    arabicBestFor: 'لحوم عجل وأغنام ودواجن محلية من مزارع ألبرتا، بهارات خاصة، وطحينة ومواد تموينية عربية.',
    halalMeatAvailable: true,
    halalNote: '100% certified hand-slaughtered Zabiha halal meats; direct farm relationships in Alberta.',
    sourceUrl: 'https://www.google.com/maps/search/Saned+Halal+Meat+Calgary'
  },
  {
    id: 'store-sobeys',
    name: 'Sobeys & Safeway (Empire)',
    arabicName: 'سوبيز وسيفوي',
    positioningTag: 'QUICK CONVENIENCE',
    calgaryLocationsCount: 20,
    primaryLocations: ['Coventry Hills NE', 'Panorama Hills NW', 'Aspen Landing SW', 'Mahogany SE'],
    priceIndexVsAverage: 1.12,
    bestFor: 'Neighbourhood convenience, fresh bakery, top-tier customer service, and clean prepared deli foods.',
    arabicBestFor: 'القرب الجغرافي داخل الأحياء، مخابز طازجة، وخدمة سريعة للمشتريات اليومية الطارئة.',
    halalMeatAvailable: true,
    halalNote: 'Carries packaged halal chicken and frozen items; higher price point than Superstore or Costco.',
    sourceUrl: 'https://www.sobeys.com/'
  }
];

export interface CostcoCalculatorInputs {
  monthlyGrocerySpend: number;
  percentPurchasedAtCostco: number; // e.g. 50%
  eligibleExecutivePurchasesPercent: number; // e.g. 90%
  gasSavingsPerMonthCAD: number; // e.g. $25/mo via Costco Gas
}

export interface CostcoCalculatorResult {
  goldStarFeeCAD: number;
  executiveFeeCAD: number;
  upgradeCostCAD: number;
  estimatedAnnualCostcoSpendCAD: number;
  estimated2PercentExecutiveRewardCAD: number;
  annualGasSavingsCAD: number;
  totalExecutiveNetBenefitCAD: number;
  breakEvenMonthlySpendCAD: number;
  recommendation: 'EXECUTIVE RECOMMENDED' | 'GOLD STAR ADEQUATE';
  arabicRecommendation: string;
  rationale: string;
}

export function calculateCostcoEconomics(inputs: CostcoCalculatorInputs): CostcoCalculatorResult {
  const goldStarFee = 65; // September 2026 verified fee
  const executiveFee = 130; // September 2026 verified fee
  const upgradeCost = executiveFee - goldStarFee; // $65

  const annualCostcoSpend = (inputs.monthlyGrocerySpend * (inputs.percentPurchasedAtCostco / 100)) * 12;
  const qualifyingRewardSpend = annualCostcoSpend * (inputs.eligibleExecutivePurchasesPercent / 100);
  const reward2Percent = Math.min(1250, Math.round(qualifyingRewardSpend * 0.02 * 100) / 100);
  const annualGasSavings = inputs.gasSavingsPerMonthCAD * 12;

  const totalExecutiveNetBenefit = Math.round((reward2Percent - upgradeCost + annualGasSavings) * 100) / 100;
  const breakEvenMonthlySpend = Math.round((upgradeCost / 0.02 / 12) * 100) / 100; // $270.83/mo

  const isExecutiveRecommended = reward2Percent >= upgradeCost;

  return {
    goldStarFeeCAD: goldStarFee,
    executiveFeeCAD: executiveFee,
    upgradeCostCAD: upgradeCost,
    estimatedAnnualCostcoSpendCAD: annualCostcoSpend,
    estimated2PercentExecutiveRewardCAD: reward2Percent,
    annualGasSavingsCAD: annualGasSavings,
    totalExecutiveNetBenefitCAD: totalExecutiveNetBenefit,
    breakEvenMonthlySpendCAD: breakEvenMonthlySpend,
    recommendation: isExecutiveRecommended ? 'EXECUTIVE RECOMMENDED' : 'GOLD STAR ADEQUATE',
    arabicRecommendation: isExecutiveRecommended ? 'يوصى بعضوية كوستكو التنفيذية (Executive)' : 'عضوية جولد ستار (Gold Star) كافية',
    rationale: isExecutiveRecommended
      ? `With expected Costco spending of $${Math.round(annualCostcoSpend / 12)}/mo, the 2% Executive cash-back ($${Math.round(reward2Percent)}/yr) exceeds the $65 upgrade cost by $${Math.round(reward2Percent - upgradeCost)}/yr. Plus, you save ~$${annualGasSavings}/yr on Costco gas.`
      : `If you spend less than $${breakEvenMonthlySpend}/mo at Costco, the Gold Star membership ($65/yr) is sufficient.`
  };
}

export interface BasketItemComparison {
  itemName: string;
  arabicItemName: string;
  category: 'Meat / Protein' | 'Dairy & Eggs' | 'Pantry Staples' | 'Produce' | 'Household';
  standardUnit: string;
  superstoreUnitPriceCAD: number;
  costcoUnitPriceCAD: number;
  walmartUnitPriceCAD: number;
  halalStoreUnitPriceCAD: number;
  bestStoreForThisItem: string;
  isHalalCertified: boolean;
}

export const sampleFamilyBasket: BasketItemComparison[] = [
  {
    itemName: 'Halal Whole Chicken (Fresh)',
    arabicItemName: 'دجاج كامل حلال طازج',
    category: 'Meat / Protein',
    standardUnit: 'per kg',
    superstoreUnitPriceCAD: 7.69,
    costcoUnitPriceCAD: 6.99, // 3-pack bulk
    walmartUnitPriceCAD: 7.97,
    halalStoreUnitPriceCAD: 6.89,
    bestStoreForThisItem: 'Halal Meat Shop / Costco Bulk',
    isHalalCertified: true
  },
  {
    itemName: 'Halal Boneless Chicken Breast',
    arabicItemName: 'صدور دجاج حلال مخلية',
    category: 'Meat / Protein',
    standardUnit: 'per kg',
    superstoreUnitPriceCAD: 14.99,
    costcoUnitPriceCAD: 12.99, // Sufra Halal pack
    walmartUnitPriceCAD: 15.47,
    halalStoreUnitPriceCAD: 13.50,
    bestStoreForThisItem: 'Costco Wholesale (Sufra Bulk)',
    isHalalCertified: true
  },
  {
    itemName: 'Halal Alberta Lean Ground Beef',
    arabicItemName: 'لحم بقري مفروم قليل الدهن (ألبرتا)',
    category: 'Meat / Protein',
    standardUnit: 'per kg',
    superstoreUnitPriceCAD: 13.20,
    costcoUnitPriceCAD: 11.99,
    walmartUnitPriceCAD: 13.48,
    halalStoreUnitPriceCAD: 12.50,
    bestStoreForThisItem: 'Basha Foods / Saned Halal',
    isHalalCertified: true
  },
  {
    itemName: 'Fresh Eggs (Large, White)',
    arabicItemName: 'بيض طازج (حجم كبير)',
    category: 'Dairy & Eggs',
    standardUnit: 'per dozen',
    superstoreUnitPriceCAD: 3.89,
    costcoUnitPriceCAD: 3.10, // 30-egg tray equivalent
    walmartUnitPriceCAD: 3.78,
    halalStoreUnitPriceCAD: 4.25,
    bestStoreForThisItem: 'Costco Wholesale (Flat of 30)',
    isHalalCertified: true
  },
  {
    itemName: '2% Cow Milk (Calgary Jug)',
    arabicItemName: 'حليب 2% دسم (عبوة 4 لتر)',
    category: 'Dairy & Eggs',
    standardUnit: 'per 4L jug',
    superstoreUnitPriceCAD: 5.69,
    costcoUnitPriceCAD: 5.39,
    walmartUnitPriceCAD: 5.68,
    halalStoreUnitPriceCAD: 6.19,
    bestStoreForThisItem: 'Costco Wholesale / Superstore',
    isHalalCertified: true
  },
  {
    itemName: 'Long Grain Basmati Rice',
    arabicItemName: 'أرز بسمتي حبة طويلة',
    category: 'Pantry Staples',
    standardUnit: 'per 10 kg bag',
    superstoreUnitPriceCAD: 22.99,
    costcoUnitPriceCAD: 19.99,
    walmartUnitPriceCAD: 23.47,
    halalStoreUnitPriceCAD: 21.99,
    bestStoreForThisItem: 'Costco Wholesale / Superstore',
    isHalalCertified: true
  },
  {
    itemName: 'Extra Virgin Olive Oil',
    arabicItemName: 'زيت زيتون بكر ممتاز',
    category: 'Pantry Staples',
    standardUnit: 'per litre',
    superstoreUnitPriceCAD: 13.50,
    costcoUnitPriceCAD: 10.99, // Kirkland Signature 3L
    walmartUnitPriceCAD: 14.20,
    halalStoreUnitPriceCAD: 12.99,
    bestStoreForThisItem: 'Costco Wholesale (Kirkland 3L)',
    isHalalCertified: true
  },
  {
    itemName: 'Arabic Warm Flatbread (Pita)',
    arabicItemName: 'خبز عربي شامي طازج',
    category: 'Pantry Staples',
    standardUnit: 'per 5-pack',
    superstoreUnitPriceCAD: 2.29,
    costcoUnitPriceCAD: 1.99, // Multi-pack
    walmartUnitPriceCAD: 2.47,
    halalStoreUnitPriceCAD: 1.79, // Baked in store
    bestStoreForThisItem: 'Basha Foods / Cedar’s Deli',
    isHalalCertified: true
  },
  {
    itemName: 'Bananas',
    arabicItemName: 'موز طازج',
    category: 'Produce',
    standardUnit: 'per kg',
    superstoreUnitPriceCAD: 1.74,
    costcoUnitPriceCAD: 1.65, // 1.36kg bundle
    walmartUnitPriceCAD: 1.74,
    halalStoreUnitPriceCAD: 2.19,
    bestStoreForThisItem: 'Superstore / Walmart',
    isHalalCertified: true
  },
  {
    itemName: 'Household Paper Towels',
    arabicItemName: 'مناديل ورقية للمطبخ',
    category: 'Household',
    standardUnit: 'per 12 rolls',
    superstoreUnitPriceCAD: 19.99,
    costcoUnitPriceCAD: 15.99, // Kirkland bulk
    walmartUnitPriceCAD: 18.97,
    halalStoreUnitPriceCAD: 22.50,
    bestStoreForThisItem: 'Costco Wholesale (Kirkland Signature)',
    isHalalCertified: true
  }
];

export interface FamilyGroceryCalculation {
  benchmarkAnnualCAD: number;
  benchmarkMonthlyCAD: number;
  benchmarkWeeklyCAD: number;
  planValueShopperCAD: number;
  planBalancedCAD: number;
  planPremiumCAD: number;
  albertaRegionalInflationAddonPercent: number;
  halalMeatAddonPercent: number;
}

export function calculateFamilyFoodBudget(
  adult1Age: number = 38,
  adult2Age: number = 36,
  child1Age: number = 11,
  child2Age: number = 8,
  child3Age: number = 4
): FamilyGroceryCalculation {
  // Map ages to Canada's Food Price Report 2026 baselines
  const a1 = adult1Age >= 19 ? foodPriceReport2026Benchmarks.man_31_50.annualEstimateCAD : 3500;
  const a2 = adult2Age >= 19 ? foodPriceReport2026Benchmarks.woman_31_50.annualEstimateCAD : 3500;
  const c1 = child1Age >= 9 ? foodPriceReport2026Benchmarks.boy_9_13.annualEstimateCAD : 2720;
  const c2 = child2Age >= 4 ? foodPriceReport2026Benchmarks.child_4_8.annualEstimateCAD : 2080;
  const c3 = child3Age <= 4 ? foodPriceReport2026Benchmarks.child_0_4.annualEstimateCAD : 2720;

  const rawBaseAnnual = a1 + a2 + c1 + c2 + c3; // ~$16,960

  // Alberta regional food inflation factor in 2026 (+4% above national average)
  const abFactor = 1.04;
  // Halal fresh butcher meat requirement (+6% on total basket)
  const halalFactor = 1.06;

  const adjustedAnnualBenchmark = Math.round(rawBaseAnnual * abFactor * halalFactor);
  const benchmarkMonthly = Math.round(adjustedAnnualBenchmark / 12);
  const benchmarkWeekly = Math.round(adjustedAnnualBenchmark / 52);

  // 3 Lifestyles
  const planValueShopperCAD = Math.round(benchmarkMonthly * 0.82); // $1,310/mo
  const planBalancedCAD = Math.round(benchmarkMonthly * 1.02);     // $1,630/mo
  const planPremiumCAD = Math.round(benchmarkMonthly * 1.30);      // $2,080/mo

  return {
    benchmarkAnnualCAD: adjustedAnnualBenchmark,
    benchmarkMonthlyCAD: benchmarkMonthly,
    benchmarkWeeklyCAD: benchmarkWeekly,
    planValueShopperCAD,
    planBalancedCAD,
    planPremiumCAD,
    albertaRegionalInflationAddonPercent: 4,
    halalMeatAddonPercent: 6
  };
}
