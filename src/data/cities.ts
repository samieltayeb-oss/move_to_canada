export interface CityMetrics {
  id: string;
  name: string;
  arabicName: string;
  province: string;
  threeBedRentCAD: number;
  fourBedHouseRentCAD: number;
  medianFamilyIncomeCAD: number;
  provincialSalesTaxRate: number; // e.g. 0, 8, 7, 9.975, 10
  combinedSalesTaxRate: number; // e.g. 5, 13, 12, 14.975, 15
  topProvincialIncomeTaxRate: number;
  basicPersonalAmountCAD: number;
  muslimPopulation: number;
  muslimPopulationPercent: number;
  avgCommuteMinutes: number;
  annualSunshineHours: number;
  crimeSeverityIndex: number;
  distanceToMajorMountainsKm: number;
  hasChinooks: boolean;
  transitCostMonthlyAdultCAD: number;
  transitChildrenFreeUnder12: boolean;
  whyCalgaryRanksHere: string;
  arabicWhyCalgaryRanksHere: string;
  whyThisCityMayBeBetter: string;
  arabicWhyThisCityMayBeBetter: string;
  strengths: string[];
  drawbacks: string[];
}

export const canadianCities: CityMetrics[] = [
  {
    id: 'calgary',
    name: 'Calgary',
    arabicName: 'كالغاري',
    province: 'Alberta',
    threeBedRentCAD: 2345,
    fourBedHouseRentCAD: 2950,
    medianFamilyIncomeCAD: 116530,
    provincialSalesTaxRate: 0,
    combinedSalesTaxRate: 5,
    topProvincialIncomeTaxRate: 15,
    basicPersonalAmountCAD: 22769,
    muslimPopulation: 105000,
    muslimPopulationPercent: 6.9,
    avgCommuteMinutes: 26.5,
    annualSunshineHours: 2405,
    crimeSeverityIndex: 78.5,
    distanceToMajorMountainsKm: 85,
    hasChinooks: true,
    transitCostMonthlyAdultCAD: 126,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Calgary achieves the highest composite family balance: high household incomes ($116k), zero provincial sales tax, modern detached 4-bed homes at half the cost of Toronto, over 105k Muslims with active institutions, Canada’s sunniest skies, and immediate Rockies access.',
    arabicWhyCalgaryRanksHere: 'تحقق كالغاري أفضل توازن عائلي متكامل: دخل مرتفع (116 ألف دولار)، بدون ضريبة مبيعات إقليمية، منازل مستقلة بنصف تكلفة تورونتو، جالية مسلمة تزيد عن 105 آلاف مع مؤسسات متكاملة، وقرب استثنائي من جبال روكي.',
    whyThisCityMayBeBetter: 'Best overall choice for a finance professional who values spacious family housing, outdoor mountain recreation, lower taxes, and established Islamic community infrastructure.',
    arabicWhyThisCityMayBeBetter: 'الخيار الأفضل لمحترف مالي يبحث عن سكن عائلي واسع، واستجمام جبلي، وضرائب منخفضة، وبيئة إسلامية متكاملة.',
    strengths: ['0% Provincial Sales Tax', 'Large 4-bed detached homes', 'Rocky Mountains 50 mins away', 'Sunniest major city (2,400+ hrs)', 'Children 12 & under ride free'],
    drawbacks: ['Cold winter snaps (-25°C)', 'Suburban car dependence', 'Newcomer car insurance costs']
  },
  {
    id: 'edmonton',
    name: 'Edmonton',
    arabicName: 'إدمونتون',
    province: 'Alberta',
    threeBedRentCAD: 1995,
    fourBedHouseRentCAD: 2400,
    medianFamilyIncomeCAD: 106750,
    provincialSalesTaxRate: 0,
    combinedSalesTaxRate: 5,
    topProvincialIncomeTaxRate: 15,
    basicPersonalAmountCAD: 22769,
    muslimPopulation: 85000,
    muslimPopulationPercent: 5.8,
    avgCommuteMinutes: 25.4,
    annualSunshineHours: 2299,
    crimeSeverityIndex: 112.3,
    distanceToMajorMountainsKm: 340,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 100,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Edmonton is approximately $350–$550/month cheaper for rent than Calgary and shares the same 0% PST, but lacks the warming Chinooks, is 3.5 hours from mountains, has a higher crime index, and its job market is anchored in government rather than private capital markets.',
    arabicWhyCalgaryRanksHere: 'إدمونتون أرخص بحوالي 350-550 دولار شهرياً في الإيجار وتتمتع بنفس ميزة 0% ضريبة، لكنها تفتقر لرياح الشينوك وتستمر برودتها أطول، وتبعد 3.5 ساعات عن الجبال، وسوق عملها حكومي وليس مالياً.',
    whyThisCityMayBeBetter: 'Edmonton may be better if your priority is lowest possible rental costs in Alberta ($1,995 3-bed) and you plan to work in the public sector or health/university administration.',
    arabicWhyThisCityMayBeBetter: 'قد تكون إدمونتون أفضل إذا كان الهدف خفض تكاليف الإيجار للحد الأدنى في ألبرتا والعمل في القطاع الحكومي أو الأكاديمي.',
    strengths: ['Lower rent than Calgary (~$400/mo savings)', '0% Provincial Sales Tax', 'Historic Al-Rashid Mosque community', 'Strong civil service employment'],
    drawbacks: ['Prolonged unbroken winter freeze', '3.5+ hrs to Rocky Mountains', 'Higher Crime Severity Index (112.3)', 'Smaller finance/investment market']
  },
  {
    id: 'ottawa',
    name: 'Ottawa',
    arabicName: 'أوتاوا',
    province: 'Ontario',
    threeBedRentCAD: 2735,
    fourBedHouseRentCAD: 3200,
    medianFamilyIncomeCAD: 118590,
    provincialSalesTaxRate: 8,
    combinedSalesTaxRate: 13,
    topProvincialIncomeTaxRate: 13.16,
    basicPersonalAmountCAD: 12399,
    muslimPopulation: 120000,
    muslimPopulationPercent: 7.8,
    avgCommuteMinutes: 27.5,
    annualSunshineHours: 2084,
    crimeSeverityIndex: 56.2,
    distanceToMajorMountainsKm: 180,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 128.75,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Ottawa has very high median incomes ($118k) and very low crime, but Ontario’s 13% HST and higher rent add over $600/month in baseline expenses compared to Calgary, and its corporate private finance market is overshadowed by the federal civil service.',
    arabicWhyCalgaryRanksHere: 'تتميز أوتاوا بدخل عائلي مرتفع وأمان عالٍ، لكن ضريبة المبيعات 13% والإيجار الأعلى يرفعان المصاريف بأكثر من 600 دولار شهرياً مقارنة بكالغاري، وسوق عملها يتركز في الوظائف الحكومية.',
    whyThisCityMayBeBetter: 'Ottawa may be better for families seeking an exceptionally safe, bilingual, government-oriented capital city with outstanding public museums and green space.',
    arabicWhyThisCityMayBeBetter: 'قد تكون أوتاوا أفضل للعائلات الباحثة عن عاصمة حكومية آمنة جداً وثنائية اللغة مع متاحف ومساحات خضراء رائعة.',
    strengths: ['Exceptionally low Crime Severity Index', 'High median family income', 'Vibrant Muslim population (120k)', 'Bilingual educational opportunities'],
    drawbacks: ['13% HST on all purchases', 'Higher rental costs', 'Humid, heavy snowfall winters (220cm)', 'Federal government dominates jobs']
  },
  {
    id: 'toronto',
    name: 'Toronto',
    arabicName: 'تورونتو',
    province: 'Ontario',
    threeBedRentCAD: 3415,
    fourBedHouseRentCAD: 4500,
    medianFamilyIncomeCAD: 108010,
    provincialSalesTaxRate: 8,
    combinedSalesTaxRate: 13,
    topProvincialIncomeTaxRate: 13.16,
    basicPersonalAmountCAD: 12399,
    muslimPopulation: 640000,
    muslimPopulationPercent: 10.2,
    avgCommuteMinutes: 35.6,
    annualSunshineHours: 2066,
    crimeSeverityIndex: 58.5,
    distanceToMajorMountainsKm: 700,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 156,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'While Toronto is Canada’s premier financial hub with over 640,000 Muslims, its crushing housing costs ($3,415+ for 3 beds, $4,500 for detached), severe traffic gridlock (35.6 min avg commute), and double municipal land transfer tax drastically reduce family disposable income.',
    arabicWhyCalgaryRanksHere: 'رغم أن تورونتو هي العاصمة المالية لكندا وبها أكبر جالية مسلمة (640 ألفاً)، إلا أن تكلفة السكن الباهظة (3415 دولار لـ 3 غرف)، والازدحام المروري الخانق، والضرائب الإضافية تلتهم دخل العائلة.',
    whyThisCityMayBeBetter: 'Toronto may be better if your career exclusively requires Bay Street global investment banking, deep capital markets liquidity, or direct non-stop flights to the Middle East.',
    arabicWhyThisCityMayBeBetter: 'تورونتو قد تكون أفضل فقط إذا كان مسارك المهني يتطلب التواجد في أسواق المال العالمية أو رحلات طيران مباشرة للشرق الأوسط.',
    strengths: ['Canada’s largest financial capital market', 'Massive Muslim community (640,000+)', 'YYZ direct non-stop flights globally', 'Extensive transit rail grid'],
    drawbacks: ['Highest housing cost crisis in Eastern Canada', 'Double land transfer tax on buying', 'Worst traffic congestion in Canada', '13% HST']
  },
  {
    id: 'vancouver',
    name: 'Vancouver',
    arabicName: 'فانكوفر',
    province: 'British Columbia',
    threeBedRentCAD: 3995,
    fourBedHouseRentCAD: 5200,
    medianFamilyIncomeCAD: 103460,
    provincialSalesTaxRate: 7,
    combinedSalesTaxRate: 12,
    topProvincialIncomeTaxRate: 20.5,
    basicPersonalAmountCAD: 12580,
    muslimPopulation: 115000,
    muslimPopulationPercent: 4.2,
    avgCommuteMinutes: 31.8,
    annualSunshineHours: 1938,
    crimeSeverityIndex: 82.3,
    distanceToMajorMountainsKm: 25,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 189,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Vancouver has Canada’s mildest winter temperatures, but is completely unaffordable for a family of 5: asking rents near $4,000/mo for 3 beds and over $5,200 for detached homes with lower median family incomes ($103k) and 12% sales tax.',
    arabicWhyCalgaryRanksHere: 'تتميز فانكوفر بشتاء معتدل، لكنها باهظة التكلفة لعائلة من 5 أفراد (إيجارات تقارب 4000 دولار شهرياً) مع دخل عائلي أقل وضرائب مبيعات 12% وأمطار مستمرة.',
    whyThisCityMayBeBetter: 'Vancouver may be better if you cannot tolerate freezing winter temperatures, love mild coastal ocean climates, and your budget supports $5,000+/mo for housing.',
    arabicWhyThisCityMayBeBetter: 'فانكوفر قد تكون أفضل فقط إذا كنت لا تتحمل الشتاء البارد إطلاقاً، وتفضل المناخ البحري المعتدل، ولديك ميزانية سكن تفوق 5000 دولار شهرياً.',
    strengths: ['Mildest winters in Canada (rarely freezes)', 'Spectacular ocean and coastal mountain backdrop', 'High quality of life index', 'Asian trade hub'],
    drawbacks: ['Most unaffordable housing in North America', 'Lowest median income to housing cost ratio', 'High provincial taxes (up to 20.5%)', 'Frequent gray rain (160+ rainy days/yr)']
  },
  {
    id: 'montreal',
    name: 'Montreal',
    arabicName: 'مونتريال',
    province: 'Quebec',
    threeBedRentCAD: 2295,
    fourBedHouseRentCAD: 3100,
    medianFamilyIncomeCAD: 92300,
    provincialSalesTaxRate: 9.975,
    combinedSalesTaxRate: 14.975,
    topProvincialIncomeTaxRate: 25.75,
    basicPersonalAmountCAD: 18056,
    muslimPopulation: 350000,
    muslimPopulationPercent: 8.7,
    avgCommuteMinutes: 32.2,
    annualSunshineHours: 2051,
    crimeSeverityIndex: 61.4,
    distanceToMajorMountainsKm: 120,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 100,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Montreal offers historic European culture and affordable rent ($2,295), but imposes Canada’s highest combined income tax (top rate 25.75% + 14.975% sales tax) and strict French language laws (Bill 96 / Law 101) restricting English public education for immigrant children.',
    arabicWhyCalgaryRanksHere: 'تقدم مونتريال ثقافة أوروبية وإيجارات مقبولة، لكنها تفرض أعلى ضرائب في كندا (ضريبة مبيعات 15% وضرائب دخل باهظة) مع قوانين اللغة الفرنسية الصارمة (القانون 96) التي تلزم أبناء المهاجرين بالمدارس الفرنسية.',
    whyThisCityMayBeBetter: 'Montreal is ideal if the family is fully fluent in French, values European urban architecture, and seeks a culturally rich bilingual environment.',
    arabicWhyThisCityMayBeBetter: 'مونتريال مثالية إذا كانت العائلة تتقن الفرنسية بطلاقة، وتعشق الطراز الأوروبي، وترغب في بيئة ثقافية حيوية.',
    strengths: ['European cosmopolitan lifestyle & architecture', 'Large Arab & Francophone Muslim community (350k)', 'Affordable initial rent', 'Extensive metro transit network'],
    drawbacks: ['Bill 96: mandatory French schooling for children', 'Highest provincial income tax in Canada', 'Highest combined sales tax (14.975%)', 'Lower average salaries']
  },
  {
    id: 'winnipeg',
    name: 'Winnipeg',
    arabicName: 'وينيبيغ',
    province: 'Manitoba',
    threeBedRentCAD: 1975,
    fourBedHouseRentCAD: 2350,
    medianFamilyIncomeCAD: 97500,
    provincialSalesTaxRate: 7,
    combinedSalesTaxRate: 12,
    topProvincialIncomeTaxRate: 17.4,
    basicPersonalAmountCAD: 15780,
    muslimPopulation: 26000,
    muslimPopulationPercent: 3.0,
    avgCommuteMinutes: 22.8,
    annualSunshineHours: 2353,
    crimeSeverityIndex: 129.2,
    distanceToMajorMountainsKm: 1200,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 112.50,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Winnipeg is affordable, but experiences severe prolonged continental sub-zero winter temperatures without Chinooks ("Winterpeg"), has Canada’s highest Crime Severity Index among major CMAs (129.2), and a much smaller Muslim demographic (3%).',
    arabicWhyCalgaryRanksHere: 'وينيبيغ رخيصة السكن، لكن شتاءها قارس جداً دون رياح شينوك، ومؤشر الجريمة فيها هو الأعلى بين المدن الكبرى (129.2)، وجاليتها المسلمة أصغر بكثير (3%).',
    whyThisCityMayBeBetter: 'Winnipeg may be better if extreme low-cost detached home purchase is the single overriding criteria and you have existing family ties in Manitoba.',
    arabicWhyThisCityMayBeBetter: 'قد تكون وينيبيغ خياراً لمن يضع شراء منزل رخيص كأولوية وحيدة ولديه معارف أو أقارب في مانيتوبا.',
    strengths: ['Low housing purchase prices', 'Short average commute times (22.8 mins)', 'High annual sunshine'],
    drawbacks: ['Extreme cold winter (-30°C to -40°C)', 'High Crime Severity Index (129.2)', 'Smaller Muslim community (26k)', 'Flat prairie terrain with no mountains']
  },
  {
    id: 'saskatoon',
    name: 'Saskatoon',
    arabicName: 'ساسكاتون',
    province: 'Saskatchewan',
    threeBedRentCAD: 1700,
    fourBedHouseRentCAD: 2100,
    medianFamilyIncomeCAD: 104000,
    provincialSalesTaxRate: 6,
    combinedSalesTaxRate: 11,
    topProvincialIncomeTaxRate: 14.5,
    basicPersonalAmountCAD: 18451,
    muslimPopulation: 14000,
    muslimPopulationPercent: 4.2,
    avgCommuteMinutes: 18.5,
    annualSunshineHours: 2381,
    crimeSeverityIndex: 119.8,
    distanceToMajorMountainsKm: 750,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 83,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Saskatoon has very affordable rent ($1,700 3-bed) and virtually no traffic (18.5 min commute), but has a small economic market, harsh prairie winters, high crime index, and limited corporate finance career paths compared to Calgary.',
    arabicWhyCalgaryRanksHere: 'ساسكاتون رخيصة الإيجار ولا تعاني من زحام، لكن حجم اقتصادها صغير، وشتاءها شديد البرودة، ومؤشر الجريمة مرتفع، وفرص قطاع الاستثمار والمال محدودة.',
    whyThisCityMayBeBetter: 'Saskatoon is excellent for low-stress small-city family living with minimal commute times and very affordable starter housing.',
    arabicWhyThisCityMayBeBetter: 'ممتازة لمن يفضل هدوء المدن الصغيرة غير المزدحمة مع تنقلات سريعة وسكن رخيص جداً.',
    strengths: ['Lowest rent in comparison group ($1,700)', 'Fastest commute (18.5 mins)', 'Sunny climate', 'Strong agriculture/mining economy'],
    drawbacks: ['Harsh prairie winter winds', 'High crime severity index (119.8)', 'Small financial services market', 'Far from major international airport hubs']
  },
  {
    id: 'halifax',
    name: 'Halifax',
    arabicName: 'هاليفاكس',
    province: 'Nova Scotia',
    threeBedRentCAD: 2750,
    fourBedHouseRentCAD: 3300,
    medianFamilyIncomeCAD: 104000,
    provincialSalesTaxRate: 10,
    combinedSalesTaxRate: 15,
    topProvincialIncomeTaxRate: 21,
    basicPersonalAmountCAD: 11481,
    muslimPopulation: 14000,
    muslimPopulationPercent: 2.9,
    avgCommuteMinutes: 24.8,
    annualSunshineHours: 1960,
    crimeSeverityIndex: 71.4,
    distanceToMajorMountainsKm: 1500,
    hasChinooks: false,
    transitCostMonthlyAdultCAD: 92.50,
    transitChildrenFreeUnder12: true,
    whyCalgaryRanksHere: 'Halifax has charming Atlantic coastal culture, but recent migration has driven 3-bed rent to $2,750+, paired with Canada’s highest sales tax (15% HST), high provincial income taxes (up to 21%), and a very small Muslim community (2.9%).',
    arabicWhyCalgaryRanksHere: 'هاليفاكس ساحلية جميلة، لكن تدفق السكان رفع الإيجارات إلى 2750 دولاراً، مصحوبة بأعلى ضريبة مبيعات في كندا (15%) وضرائب دخل مرتفعة وجالية مسلمة صغيرة (2.9%).',
    whyThisCityMayBeBetter: 'Halifax is ideal for families who love Maritime coastal ocean living, seafood culture, and historic university-town vibes.',
    arabicWhyThisCityMayBeBetter: 'رائعة لمحبي العيش على المحيط الأطلسي والبيئة البحرية الهادئة وطابع المدن الجامعية العريقة.',
    strengths: ['Scenic Atlantic ocean lifestyle', 'Historic, friendly Maritime culture', 'Relatively compact city', 'High post-secondary density'],
    drawbacks: ['Highest combined sales tax in Canada (15% HST)', 'High provincial income tax', 'Significant housing shortage', 'Small Muslim demographic']
  }
];

export function computeCityIndex(city: CityMetrics, customWeights?: Record<string, number>) {
  // Linear normalization against min/max across the 9 cities
  const minRent = 1700; const maxRent = 3995;
  const minInc = 92300; const maxInc = 118590;
  const minTax = 5;     const maxTax = 15;
  const minSun = 1938;  const maxSun = 2405;
  const minMus = 14000; const maxMus = 640000;
  const minCsi = 56.2;  const maxCsi = 129.2;
  const minCom = 18.5;  const maxCom = 35.6;

  // Normalized scores (0 to 100)
  const housingScore = Math.max(0, Math.min(100, ((maxRent - city.threeBedRentCAD) / (maxRent - minRent)) * 100));
  const incomeScore = Math.max(0, Math.min(100, ((city.medianFamilyIncomeCAD - minInc) / (maxInc - minInc)) * 100));
  const taxScore = Math.max(0, Math.min(100, ((maxTax - city.combinedSalesTaxRate) / (maxTax - minTax)) * 100));
  const sunScore = Math.max(0, Math.min(100, ((city.annualSunshineHours - minSun) / (maxSun - minSun)) * 100));
  const muslimScore = Math.max(0, Math.min(100, ((Math.log(city.muslimPopulation) - Math.log(minMus)) / (Math.log(maxMus) - Math.log(minMus))) * 100));
  const safetyScore = Math.max(0, Math.min(100, ((maxCsi - city.crimeSeverityIndex) / (maxCsi - minCsi)) * 100));
  const commuteScore = Math.max(0, Math.min(100, ((maxCom - city.avgCommuteMinutes) / (maxCom - minCom)) * 100));
  const mountainScore = Math.max(0, Math.min(100, Math.max(0, (500 - city.distanceToMajorMountainsKm) / 500) * 100));

  // Default weights matching Section 34
  const wHousing = customWeights?.housing ?? 20;
  const wIncome = customWeights?.income ?? 15;
  const wCol = customWeights?.costOfLiving ?? 10;
  const wTax = customWeights?.taxes ?? 8;
  const wFamily = customWeights?.familyEnvironment ?? 10;
  const wSafety = customWeights?.safety ?? 8;
  const wSchools = customWeights?.schools ?? 7;
  const wHealth = customWeights?.healthcare ?? 5;
  const wMuslim = customWeights?.muslimCommunity ?? 7;
  const wTransit = customWeights?.transportation ?? 4;
  const wAirport = customWeights?.airport ?? 3;
  const wWeather = customWeights?.weather ?? 3;

  const totalWeight = wHousing + wIncome + wCol + wTax + wFamily + wSafety + wSchools + wHealth + wMuslim + wTransit + wAirport + wWeather;

  // Composite calculation
  const weightedSum = 
    (housingScore * wHousing) +
    (incomeScore * wIncome) +
    (housingScore * 0.7 + taxScore * 0.3) * wCol +
    (taxScore * wTax) +
    (safetyScore * 0.4 + sunScore * 0.3 + mountainScore * 0.3) * wFamily +
    (safetyScore * wSafety) +
    (incomeScore * 0.5 + safetyScore * 0.5) * wSchools +
    (75 * wHealth) + // Health wait times normalized
    (muslimScore * wMuslim) +
    (commuteScore * wTransit) +
    ((city.id === 'toronto' ? 100 : city.id === 'vancouver' ? 90 : city.id === 'calgary' ? 82 : city.id === 'montreal' ? 80 : 60) * wAirport) +
    ((sunScore * 0.6 + (city.hasChinooks ? 40 : 0)) * wWeather);

  const overallScore = totalWeight > 0 ? Math.round((weightedSum / totalWeight) * 10) / 10 : 75;

  return {
    overallScore,
    housingScore: Math.round(housingScore),
    incomeScore: Math.round(incomeScore),
    taxScore: Math.round(taxScore),
    muslimScore: Math.round(muslimScore),
    safetyScore: Math.round(safetyScore),
    familyValue: Math.round((housingScore * 0.35 + safetyScore * 0.35 + sunScore * 0.3)),
    careerValue: Math.round((incomeScore * 0.6 + taxScore * 0.4)),
    muslimFit: Math.round(muslimScore)
  };
}

export const calgaryVsEdmontonPoints = [
  {
    dimension: 'Rocky Mountains & Outdoor Recreation',
    calgaryFact: 'Canmore is 50 mins, Banff is 70 mins west. Immediate access to world-class alpine recreation.',
    edmontonFact: 'Jasper National Park is ~4 hours west. Edmonton is situated in parkland prairie with river valley trails.'
  },
  {
    dimension: 'Economic Drivers & Corporate Finance Hub',
    calgaryFact: 'Corporate HQ concentration, AIMCo Calgary office, energy commodity trading, and private wealth desks.',
    edmontonFact: 'Provincial government capital, public sector administration, University of Alberta research, industrial fabrication.'
  },
  {
    dimension: 'Winter Climate & Chinook Winds',
    calgaryFact: 'Experiences frequent warm Chinook winds raising winter temps 15°C within hours; 2,400+ sunshine hours.',
    edmontonFact: 'Consistently colder winter without Chinooks; snow remains undisturbed on the ground from November to April.'
  },
  {
    dimension: 'Housing & Rental Costs',
    calgaryFact: 'Average 3-bed asking rent is ~$2,345/mo; detached 4-bed is ~$2,950/mo.',
    edmontonFact: 'Average 3-bed asking rent is ~$1,780/mo; detached 4-bed is ~$2,250/mo (roughly 20-25% more affordable).'
  },
  {
    dimension: 'International Airport Hub (YYC vs YEG)',
    calgaryFact: 'YYC is Canada’s 4th busiest hub with direct European and US transborder flights.',
    edmontonFact: 'YEG has fewer international connections; often requires connecting flights through Calgary, Vancouver, or Toronto.'
  },
  {
    dimension: 'Public Education & Islamic Schools',
    calgaryFact: 'CBE Welcome Centre handles newcomer intake; Calgary Islamic School (Akram Jomaa & OBK) fees ~$2,450/yr.',
    edmontonFact: 'Edmonton Public Schools (EPSB) operates alternative Islamic academy programs with comparable fee schedules.'
  }
];

export const calgaryVsRiyadhPoints = [
  {
    aspect: 'Climate & Daylight Extremes',
    riyadhReality: 'Intense summer heat (45°C–50°C) with indoor air-conditioned lifestyle. Winter is mild and pleasant.',
    calgaryAdaptation: 'Vibrant outdoor summers (24°C–28°C with 16.5 hrs of sun). Cold winter (-15°C to -30°C) requiring layering and car block heaters.'
  },
  {
    aspect: 'Household Support & Self-Reliance',
    riyadhReality: 'Widespread access to domestic maids, private drivers, and affordable delivery services.',
    calgaryAdaptation: 'Self-reliant household model. Modern appliances (dishwashers, snow blowers, robotic vacuums) and shared family chores.'
  },
  {
    aspect: 'Child Independence & Neighborhood Safety',
    riyadhReality: 'Children depend heavily on adult drivers or compound shuttles for mobility.',
    calgaryAdaptation: 'Exceptional neighborhood walkability, bike paths, suburban parks, and children walking safely to elementary schools.'
  },
  {
    aspect: 'Mosques, Halal Living & Community',
    riyadhReality: 'Adhan resonates across all neighborhoods; 100% of all food and meat is intrinsically halal.',
    calgaryAdaptation: 'Active, vibrant Muslim community of 105,000+; dedicated mosques and halal butcher hubs; prayer times vary widely between summer and winter.'
  },
  {
    aspect: 'Income Tax & Sales Tax',
    riyadhReality: '0% personal income tax; 15% VAT on consumer purchases.',
    calgaryAdaptation: 'Progressive Canadian tax (~24%–32% effective for professional incomes); but 0% provincial sales tax (only 5% GST).'
  }
];

