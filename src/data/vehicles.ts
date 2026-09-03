export interface FamilyVehicle {
  id: string;
  brand: 'Toyota' | 'Honda' | 'Kia' | 'Hyundai' | 'Nissan';
  name: string;
  arabicName: string;
  type: '3-Row Midsize SUV' | 'Minivan (AWD / Family)' | '2-Row Crossover SUV' | 'Full-Size 4WD SUV';
  modelYears: string;
  seatingCapacity: number;
  powertrain: string;
  fuelEconomyL100km: string;
  winterAwdRating: string;
  facebookMarketplaceCalgaryCAD: string;
  facebookOlderGenCAD: string;
  facebookNewerGenCAD: string;
  facebookMarketplaceSearchUrl: string;
  albertaTaxSavingsVsOntarioCAD: number; // 8% PST difference
  familyFitNotes: string;
  arabicFamilyFitNotes: string;
}

export const recommendedFamilyVehicles: FamilyVehicle[] = [
  // TOYOTA
  {
    id: 'toyota-highlander',
    brand: 'Toyota',
    name: 'Toyota Highlander / Grand Highlander AWD',
    arabicName: 'تويوتا هايلاندر / جراند هايلاندر (دفع رباعي)',
    type: '3-Row Midsize SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 8,
    powertrain: '2.5L Hybrid AWD or 3.5L V6 / 2.4L Turbo AWD',
    fuelEconomyL100km: '6.7 L/100km (Hybrid) – 9.8 L/100km (V6/Turbo)',
    winterAwdRating: 'Excellent (Electronic On-Demand AWD / Multi-Terrain Snow Mode)',
    facebookMarketplaceCalgaryCAD: '$16,500 – $44,000 (2015–2024)',
    facebookOlderGenCAD: '$16,500 – $24,500 (2015–2018 Gen 3)',
    facebookNewerGenCAD: '$27,000 – $44,000 (2019–2024 Gen 4)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Toyota%20Highlander%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2800,
    familyFitNotes: 'The gold standard for Alberta resale value and cold-weather reliability. Spacious seating for Yassir, his wife, and 3 children (16, 11, 5) with generous third-row legroom.',
    arabicFamilyFitNotes: 'المعيار الذهبي لقيمة إعادة البيع والاعتمادية في شتاء ألبرتا القارس. مساحة مريحة لياسر وزوجته والأبناء الثلاثة (16، 11، 5 سنوات).'
  },
  {
    id: 'toyota-sienna-awd',
    brand: 'Toyota',
    name: 'Toyota Sienna AWD (V6 / Hybrid)',
    arabicName: 'تويوتا سيينا دفع رباعي (ميني فان عائلي)',
    type: 'Minivan (AWD / Family)',
    modelYears: '2015 – 2024',
    seatingCapacity: 8,
    powertrain: '3.5L V6 AWD (2015-2020) or 2.5L Hybrid AWD (2021-2024)',
    fuelEconomyL100km: '6.5 L/100km (Hybrid) – 11.5 L/100km (V6)',
    winterAwdRating: 'Outstanding (Low Center of Gravity + Dedicated AWD)',
    facebookMarketplaceCalgaryCAD: '$15,500 – $48,000 (2015–2024)',
    facebookOlderGenCAD: '$15,500 – $24,000 (2015–2020 V6 AWD)',
    facebookNewerGenCAD: '$36,000 – $48,000 (2021–2024 Hybrid AWD)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Toyota%20Sienna%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 3200,
    familyFitNotes: 'Ultimate road-trip vehicle for Calgary to Banff. Power sliding doors protect the 5-year-old in freezing winds and prevent parking dings. Huge cargo trunk behind 3rd row.',
    arabicFamilyFitNotes: 'السيارة العائلية المثالية لرحلات بانف والجبال. الأبواب المنزلقة الكهربائية تحمي طفل الـ 5 سنوات من الرياح الباردة، مع صندوق أمتعة عملاق.'
  },
  {
    id: 'toyota-rav4-awd',
    brand: 'Toyota',
    name: 'Toyota RAV4 AWD / Hybrid',
    arabicName: 'تويوتا راف 4 (دفع رباعي اقتصادي)',
    type: '2-Row Crossover SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 5,
    powertrain: '2.5L 4-Cyl or 2.5L Hybrid AWD',
    fuelEconomyL100km: '6.0 L/100km (Hybrid) – 8.2 L/100km (Gas)',
    winterAwdRating: 'Great (Dynamic Torque Vectoring AWD with Snow Mode)',
    facebookMarketplaceCalgaryCAD: '$13,500 – $34,000 (2015–2024)',
    facebookOlderGenCAD: '$13,500 – $19,500 (2015–2018 Gen 4)',
    facebookNewerGenCAD: '$22,000 – $34,000 (2019–2024 Gen 5)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Toyota%20RAV4%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2000,
    familyFitNotes: 'Canada’s best-selling SUV. Fits 5 passengers comfortably for school drop-offs and city commuting with minimal gas consumption.',
    arabicFamilyFitNotes: 'السيارة الرياضية الأكثر مبيعاً في كندا. تتسع لـ 5 ركاب برحابة لمشاوير المدارس اليومية مع استهلاك بنزين اقتصادي للغاية.'
  },

  // HONDA
  {
    id: 'honda-pilot',
    brand: 'Honda',
    name: 'Honda Pilot AWD',
    arabicName: 'هوندا بايلوت (دفع رباعي ذكي)',
    type: '3-Row Midsize SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 8,
    powertrain: '3.5L i-VTEC V6 (280–285 hp) with i-VTM4 AWD',
    fuelEconomyL100km: '10.8 – 11.5 L/100km Combined',
    winterAwdRating: 'Best-in-Class Mechanical AWD (Torque-Vectoring i-VTM4)',
    facebookMarketplaceCalgaryCAD: '$14,500 – $43,000 (2015–2024)',
    facebookOlderGenCAD: '$14,500 – $22,500 (2015–2018 Gen 3)',
    facebookNewerGenCAD: '$25,000 – $43,000 (2019–2024 Gen 3/4)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Honda%20Pilot%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2700,
    familyFitNotes: 'Renowned for true torque-vectoring rear differential that claws through Calgary black ice. Second row easily accommodates a 16-year-old teen and 11-year-old.',
    arabicFamilyFitNotes: 'نظام دفع كلي ميكانيكي متفوق يثبت السيارة على الجليد الأسود. الصف الثاني واسع ومريح جداً للأبناء المراهقين.'
  },
  {
    id: 'honda-crv-awd',
    brand: 'Honda',
    name: 'Honda CR-V AWD / Hybrid',
    arabicName: 'هوندا سي آر في (دفع رباعي عملي)',
    type: '2-Row Crossover SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 5,
    powertrain: '1.5L Turbo (190 hp) or 2.0L Hybrid AWD',
    fuelEconomyL100km: '6.4 L/100km (Hybrid) – 8.1 L/100km (Turbo)',
    winterAwdRating: 'Very Good (Real Time AWD with Intelligent Control)',
    facebookMarketplaceCalgaryCAD: '$12,500 – $33,000 (2015–2024)',
    facebookOlderGenCAD: '$12,500 – $18,000 (2015–2018 Gen 4/5)',
    facebookNewerGenCAD: '$21,000 – $33,000 (2019–2024 Gen 5/6)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Honda%20CR-V%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 1950,
    familyFitNotes: 'Class-leading rear seat legroom and 90-degree opening rear doors. High resale liquidity on Calgary Facebook Marketplace.',
    arabicFamilyFitNotes: 'مساحة أرجل خلفية هي الأوسع في فئتها وأبواب تفتح بزاوية 90 درجة لسهولة الركوب مع سهولة إعادة البيع في كالغاري.'
  },
  {
    id: 'honda-odyssey',
    brand: 'Honda',
    name: 'Honda Odyssey V6',
    arabicName: 'هوندا أوديسي (ميني فان رحب)',
    type: 'Minivan (AWD / Family)',
    modelYears: '2015 – 2024',
    seatingCapacity: 8,
    powertrain: '3.5L V6 (280 hp) 10-Speed Automatic (FWD + Snow Mode)',
    fuelEconomyL100km: '10.6 L/100km Combined',
    winterAwdRating: 'Good with Dedicated Winter Tires (Snow Traction Control)',
    facebookMarketplaceCalgaryCAD: '$13,500 – $38,000 (2015–2024)',
    facebookOlderGenCAD: '$13,500 – $21,000 (2015–2019)',
    facebookNewerGenCAD: '$24,000 – $38,000 (2020–2024)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Honda%20Odyssey&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2400,
    familyFitNotes: 'Magic Slide seats allow separating the 16 and 11-year-old siblings or sliding the 5-year-old closer to the front. Built-in CabinWatch camera.',
    arabicFamilyFitNotes: 'مقاعد ماجيك سلايد تتيح الفصل بين الأبناء وتقريب مقعد طفل الـ 5 سنوات إلى الأمام مع كاميرا داخلية لمراقبة المقاعد الخلفية.'
  },

  // KIA
  {
    id: 'kia-telluride',
    brand: 'Kia',
    name: 'Kia Telluride AWD',
    arabicName: 'كيا تيلورايد (دفع رباعي فخم 8 ركاب)',
    type: '3-Row Midsize SUV',
    modelYears: '2020 – 2024',
    seatingCapacity: 8,
    powertrain: '3.8L Lambda II V6 (291 hp) Active AWD with Lock & Snow Mode',
    fuelEconomyL100km: '11.4 L/100km Combined',
    winterAwdRating: 'Excellent (AWD Lock + Dedicated Snow Mode + Heated Steering Standard)',
    facebookMarketplaceCalgaryCAD: '$28,000 – $48,000 (2020–2024)',
    facebookOlderGenCAD: '$28,000 – $35,500 (2020–2022 EX/SX)',
    facebookNewerGenCAD: '$37,000 – $48,000 (2023–2024 X-Line/SX)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Kia%20Telluride%20AWD&minYear=2020&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 3100,
    familyFitNotes: 'Multiple "North American Utility Vehicle of the Year" winner. Premium executive feel with USB ports in every seatback for the kids’ tablets and phones.',
    arabicFamilyFitNotes: 'الحائزة على جوائز أفضل سيارة عائلية في أمريكا الشمالية. مقصورة فخمة مع منافذ شحن USB في جميع المقاعد لأجهزة الأبناء.'
  },
  {
    id: 'kia-sorento',
    brand: 'Kia',
    name: 'Kia Sorento AWD (3-Row)',
    arabicName: 'كيا سورينتو (دفع رباعي 3 صفوف)',
    type: '3-Row Midsize SUV',
    modelYears: '2016 – 2024',
    seatingCapacity: 7,
    powertrain: '3.3L V6 or 2.5L Turbo (281 hp) / 1.6L Turbo Hybrid AWD',
    fuelEconomyL100km: '6.8 L/100km (Hybrid) – 10.5 L/100km (Turbo)',
    winterAwdRating: 'Great (Torque Vectoring AWD with Center Locking Differential)',
    facebookMarketplaceCalgaryCAD: '$11,500 – $34,000 (2016–2024)',
    facebookOlderGenCAD: '$11,500 – $17,500 (2016–2019 V6 7-seat)',
    facebookNewerGenCAD: '$21,000 – $34,000 (2020–2024 Redesign)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Kia%20Sorento%20AWD&minYear=2016&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 1900,
    familyFitNotes: 'Compact exterior dimensions make it easy to maneuver in Calgary winter parking lots, yet provides 3 rows for all 3 kids when required.',
    arabicFamilyFitNotes: 'حجم خارجي رشيق يسهل ركنها في مواقف كالغاري الشتوية، مع توفير 3 صفوف مقاعد تتسع للأبناء الثلاثة بكل راحة.'
  },
  {
    id: 'kia-carnival',
    brand: 'Kia',
    name: 'Kia Carnival Multi-Purpose Vehicle',
    arabicName: 'كيا كارنيفال (سيارة عائلية متعددة الاستخدامات)',
    type: 'Minivan (AWD / Family)',
    modelYears: '2022 – 2024',
    seatingCapacity: 8,
    powertrain: '3.5L V6 (290 hp) 8-Speed Automatic',
    fuelEconomyL100km: '10.6 L/100km Combined',
    winterAwdRating: 'Good with Winter Tires (Drive Mode Select with Snow Logic)',
    facebookMarketplaceCalgaryCAD: '$26,000 – $40,000 (2022–2024)',
    facebookOlderGenCAD: '$26,000 – $32,000 (2022 LX/EX)',
    facebookNewerGenCAD: '$33,000 – $40,000 (2023–2024 SX)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Kia%20Carnival&minYear=2022&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2600,
    familyFitNotes: 'SUV styling combined with minivan utility. Slide-Flex seating allows the 5-year-old child car seat to slide forward within arm\'s reach of parents.',
    arabicFamilyFitNotes: 'تصميم SUV خارجي أنيق مع مرونة الميني فان ومقعد وسطي منزلق يتيح الوصول لمقعد طفل الـ 5 سنوات بسهولة.'
  },

  // HYUNDAI
  {
    id: 'hyundai-palisade',
    brand: 'Hyundai',
    name: 'Hyundai Palisade AWD',
    arabicName: 'هيونداي باليسيد (دفع كلي ذكي HTRAC)',
    type: '3-Row Midsize SUV',
    modelYears: '2020 – 2024',
    seatingCapacity: 8,
    powertrain: '3.8L V6 (291 hp) HTRAC All-Wheel Drive',
    fuelEconomyL100km: '11.2 L/100km Combined',
    winterAwdRating: 'Excellent (HTRAC AWD Multi-Terrain Snow/Mud/Sand)',
    facebookMarketplaceCalgaryCAD: '$28,500 – $47,000 (2020–2024)',
    facebookOlderGenCAD: '$28,500 – $36,000 (2020–2022 Preferred/Luxury)',
    facebookNewerGenCAD: '$37,000 – $47,000 (2023–2024 Calligraphy)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Hyundai%20Palisade%20AWD&minYear=2020&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 3050,
    familyFitNotes: 'Sister model to Telluride with HTRAC multi-mode AWD. Heated 1st and 2nd row seats ensure the 16-year-old and 11-year-old stay warm in Calgary sub-zero mornings.',
    arabicFamilyFitNotes: 'نظام HTRAC ذكي لتوزيع العزم مع مقاعد مدفأة في الصفين الأول والثاني لتدفئة الأبناء (16 و11 سنة) في صباحات كالغاري الباردة.'
  },
  {
    id: 'hyundai-santa-fe',
    brand: 'Hyundai',
    name: 'Hyundai Santa Fe / Santa Fe XL AWD',
    arabicName: 'هيونداي سانتا في / سانتا في XL (دفع كلي)',
    type: '3-Row Midsize SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 7,
    powertrain: '3.3L V6 (XL 7-seat) or 2.5L Turbo / 1.6L Hybrid HTRAC',
    fuelEconomyL100km: '7.4 L/100km (Hybrid) – 10.6 L/100km (V6)',
    winterAwdRating: 'Great (HTRAC AWD with Electronic Center Differential Lock)',
    facebookMarketplaceCalgaryCAD: '$11,000 – $36,000 (2015–2024)',
    facebookOlderGenCAD: '$11,000 – $16,500 (2015–2018 XL 7-seater)',
    facebookNewerGenCAD: '$21,000 – $36,000 (2019–2024 5/7-seater)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Hyundai%20Santa%20Fe%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 1850,
    familyFitNotes: 'Exceptional budget entry point on Facebook Marketplace Calgary. 2015–2018 Santa Fe XL models offer 7 seats under $17k CAD.',
    arabicFamilyFitNotes: 'خيار اقتصادي ممتاز على فيسبوك ماركت بليس كالغاري؛ موديلات سانتا في XL توفر 7 مقاعد بأسعار أقل من 17 ألف دولار.'
  },
  {
    id: 'hyundai-tucson',
    brand: 'Hyundai',
    name: 'Hyundai Tucson AWD',
    arabicName: 'هيونداي توسان (دفع كلي عائلي مدمج)',
    type: '2-Row Crossover SUV',
    modelYears: '2016 – 2024',
    seatingCapacity: 5,
    powertrain: '2.0L / 2.4L or 1.6L Turbo Hybrid HTRAC AWD',
    fuelEconomyL100km: '6.4 L/100km (Hybrid) – 8.5 L/100km (Gas)',
    winterAwdRating: 'Great (HTRAC Active All-Wheel Drive)',
    facebookMarketplaceCalgaryCAD: '$11,000 – $31,000 (2016–2024)',
    facebookOlderGenCAD: '$11,000 – $16,500 (2016–2020 Gen 3)',
    facebookNewerGenCAD: '$20,000 – $31,000 (2021–2024 Gen 4)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Hyundai%20Tucson%20AWD&minYear=2016&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 1750,
    familyFitNotes: 'Standard heated front seats and windshield wiper de-icer on Canadian trims. Highly economical daily runner for errands and short commutes.',
    arabicFamilyFitNotes: 'تدفئة مقاعد وسخانات لمساحات الزجاج الأمامي قياسية في النسخ الكندية، اقتصادية للغاية في المشاوير اليومية.'
  },

  // NISSAN
  {
    id: 'nissan-pathfinder',
    brand: 'Nissan',
    name: 'Nissan Pathfinder 4WD / Rock Creek',
    arabicName: 'نيسان باثفايندر (دفع رباعي ذكي 7-8 ركاب)',
    type: '3-Row Midsize SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 8,
    powertrain: '3.5L V6 (260–284 hp) with Intelligent 4x4 (9-Speed Auto on 2022+)',
    fuelEconomyL100km: '10.5 – 11.6 L/100km Combined',
    winterAwdRating: 'Excellent (7-Position Drive and Terrain Mode Selector)',
    facebookMarketplaceCalgaryCAD: '$10,500 – $39,000 (2015–2024)',
    facebookOlderGenCAD: '$10,500 – $16,500 (2015–2019 V6 7-seater)',
    facebookNewerGenCAD: '$28,000 – $39,000 (2022–2024 9-Speed Auto)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Nissan%20Pathfinder%204WD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 2500,
    familyFitNotes: 'The 2022+ redesign replaced the CVT with a heavy-duty 9-speed automatic transmission. EZ-FLEX seating allows tilting the second row even with a child safety seat installed.',
    arabicFamilyFitNotes: 'الموديلات من 2022 فما فوق تم تزويدها بقير أوتوماتيك 9 سرعات قوي بدلاً من CVT مع نظام مقاعد مرن يتيح الوصول للصف الثالث بسهولة.'
  },
  {
    id: 'nissan-rogue',
    brand: 'Nissan',
    name: 'Nissan Rogue AWD',
    arabicName: 'نيسان روج (دفع كلي عائلي مريح)',
    type: '2-Row Crossover SUV',
    modelYears: '2015 – 2024',
    seatingCapacity: 5,
    powertrain: '2.5L 4-Cyl or 1.5L VC-Turbo (201 hp) Intelligent AWD',
    fuelEconomyL100km: '7.6 – 8.4 L/100km Combined',
    winterAwdRating: 'Very Good (Intelligent AWD with Snow and Off-Road Modes)',
    facebookMarketplaceCalgaryCAD: '$9,500 – $28,500 (2015–2024)',
    facebookOlderGenCAD: '$9,500 – $15,000 (2015–2019 Gen 2)',
    facebookNewerGenCAD: '$18,000 – $28,500 (2020–2024 Gen 3)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Nissan%20Rogue%20AWD&minYear=2015&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 1650,
    familyFitNotes: 'NASA-inspired Zero Gravity front and rear outboard seats reduce fatigue during long winter highway drives. Divide-N-Hide cargo floor organizes groceries and strollers.',
    arabicFamilyFitNotes: 'مقاعد انعدام الجاذبية المريحة جداً تمنع التعب في المسافات الطويلة مع منظم أمتعة ذكي في الصندوق الخلفي لحفظ أغراض العائلة.'
  },
  {
    id: 'nissan-armada',
    brand: 'Nissan',
    name: 'Nissan Armada 4WD (Full-Size V8)',
    arabicName: 'نيسان أرمادا (دفع رباعي كامل الحجم 8 ركاب V8)',
    type: 'Full-Size 4WD SUV',
    modelYears: '2017 – 2024',
    seatingCapacity: 8,
    powertrain: '5.6L Endurance V8 (390–400 hp) All-Mode 4WD with Low Range',
    fuelEconomyL100km: '15.4 L/100km Combined',
    winterAwdRating: 'Heavy-Duty 4WD (Low Range Transfer Case + Extreme Snow Clearance)',
    facebookMarketplaceCalgaryCAD: '$22,500 – $52,000 (2017–2024)',
    facebookOlderGenCAD: '$22,500 – $32,000 (2017–2020 SL/Platinum)',
    facebookNewerGenCAD: '$36,000 – $52,000 (2021–2024 Redesign)',
    facebookMarketplaceSearchUrl: 'https://www.facebook.com/marketplace/calgary/vehicles?query=Nissan%20Armada%204WD&minYear=2017&maxYear=2024',
    albertaTaxSavingsVsOntarioCAD: 3400,
    familyFitNotes: 'Full-size body-on-frame platform closely related to the Nissan Patrol common in Saudi Arabia. Unstoppable in severe prairie blizzards with cavernous space for 5 + heavy luggage.',
    arabicFamilyFitNotes: 'مبنية على شاسيه باترول الشهير في السعودية؛ محرك V8 جبار ونظام دفع رباعي حقيقي ثقيل لا يتعطل في العواصف الثلجية مع مساحة هائلة لخمسة ركاب.'
  }
];

export const saudiVehicleImportWarning = {
  ruleName: 'Transport Canada & RIV 15-Year Non-US Importation Rule',
  arabicRuleName: 'قانون وزارة النقل الكندية: منع استيراد سيارات الخليج الأقل من 15 عاماً',
  isAllowedToShip: false,
  reason: 'Vehicles manufactured for the Saudi Arabian (GCC) market do not comply with Canadian Motor Vehicle Safety Standards (CMVSS) or US FMVSS. Under the federal Motor Vehicle Safety Act, non-US vehicles under 15 years old are legally INADMISSIBLE for permanent registration in Canada.',
  arabicReason: 'السيارات المصنوعة بمواصفات الخليج والسعودية لا تطابق معايير السلامة الكندية (CMVSS). بموجب القانون الفدرالي الكندي، يُمنع منعاً باتاً استيراد وتسجيل أي سيارة غير أمريكية يقل عمرها عن 15 عاماً.',
  consequences: [
    'CBSA border officers will deny entry at Canadian ports of arrival.',
    'Importer must pay for mandatory re-exportation or destruction of the vehicle under government supervision.',
    'Total loss of $4,000–$6,000 USD international container shipping costs plus port storage fees.',
    'GCC cooling systems and lack of underbody anti-corrosion wax are unsuitable for Alberta -30°C winter salt brine.'
  ],
  arabicConsequences: [
    'جمارك كندا ستمنع دخول السيارة في ميناء الوصول.',
    'يُلزم المالك بإعادة تصدير السيارة خارج كندا أو إتلافها على نفقته الخاصة.',
    'خسارة كامل تكاليف الشحن البحري الدولي (4000 - 6000 دولار) ورسوم الموانئ.',
    'مواصفات التبريد الخليجية وعدم عزل الهيكل ضد صدأ الأملاح لا تناسب شتاء كندا القارس.'
  ],
  verdict: 'SELL YOUR CAR IN SAUDI ARABIA BEFORE MOVING. Purchase an AWD vehicle in Alberta with 0% PST.',
  arabicVerdict: 'قم ببيع سيارتك في السعودية قبل السفر، واشترِ سيارة دفع رباعي في ألبرتا واستفد من ميزة 0% ضريبة مبيعات.'
};

export const saudiLicenceConversionGuide = {
  country: 'Saudi Arabia',
  reciprocityStatus: 'Non-Reciprocal (No direct swap)',
  arabicReciprocityStatus: 'غير مشمولة بالتبديل المباشر',
  summary: 'Saudi Arabia does not have a bilateral licence exchange agreement with Alberta. However, you can bypass the standard 2-3 year graduated licence waiting periods via Alberta\'s Driving Experience Credit program by presenting an official authenticated driving history from Moroor / Absher.',
  arabicSummary: 'المملكة العربية السعودية لا ترتبط باتفاقية استبدال رخص مباشر مع ألبرتا، لكن يمكن للقادمين الجدد تخطي فترة التدريب الطويلة (GDL) والحصول على رخصة كاملة من خلال تقديم برنت المرور المترجم من أبشر.',
  steps: [
    {
      stepNumber: 1,
      title: 'Obtain Saudi Driving Record (Moroor)',
      arabicTitle: 'استخراج برنت المرور من أبشر',
      description: 'Before departing Riyadh, print your official driving history record from Absher portal (or Moroor traffic police) showing at least 2+ years of continuous licensed experience. Obtain an official stamp and certified English translation.',
      arabicDescription: 'قبل مغادرة الرياض، استخرج تقرير سجل القيادة الرسمي من بوابة أبشر أو إدارة المرور يثبت خبرة سنتين فأكثر، مع تصديقه وترجمته للإنجليزية.'
    },
    {
      stepNumber: 2,
      title: 'Class 7 Knowledge Test (Learner)',
      arabicTitle: 'اختبار المعرفة النظري (الفئة 7)',
      description: 'Visit any Calgary Alberta Registry Agent. Pass the 30-question computerized knowledge test ($17–$20 fee) on Alberta road signs and rules. A vision screening test is conducted simultaneously.',
      arabicDescription: 'زيارة أي مكتب سجلات (Registry) في كالغاري واجتياز الاختبار النظري المحوسب المكون من 30 سؤالاً مع فحص النظر.'
    },
    {
      stepNumber: 3,
      title: 'Surrender Foreign Licence for Credit Verification',
      arabicTitle: 'تسليم الرخصة السعودية لاحتساب سنوات الخبرة',
      description: 'Surrender your valid plastic Saudi driving licence along with the Moroor authenticated report to the registry agent. The Alberta government verifies foreign documentation through the Foreign Licence Exemption Program.',
      arabicDescription: 'تسليم الرخصة السعودية الأصلية مع برنت المرور للمكتب الحكومي للتحقق وتخطي فترة التدريب السنتين.'
    },
    {
      stepNumber: 4,
      title: 'Book and Pass Class 5 Road Test',
      arabicTitle: 'حجز واجتياز الفحص العملي (الفئة 5)',
      description: 'With verified foreign experience credited, book your Class 5 Road Test directly (approx $150–$160 fee). We strongly recommend 2-4 hours of winter in-car lessons with a licensed Calgary driving instructor beforehand.',
      arabicDescription: 'بعد اعتماد الخبرة، احجز الفحص العملي للقيادة مباشرة، ويُنصح بأخذ ساعتين إلى 4 ساعات تدريبية للتعود على قوانين كندا وحارات الانعطاف.'
    },
    {
      stepNumber: 5,
      title: 'Full Alberta Class 5 Driver’s Licence Issued',
      arabicTitle: 'استلام الرخصة الكندية الكاملة (الفئة 5)',
      description: 'Upon passing the road examination, a temporary paper permit is issued immediately. The permanent photographic Alberta Class 5 plastic card arrives by secure mail within 7–14 business days.',
      arabicDescription: 'فور اجتياز الفحص العملي، يُمنح تصريح ورقي مؤقت، وتصل البطاقة البلاستيكية الرسمية بالبريد إلى منزلك خلال 7 إلى 14 يوماً.'
    }
  ]
};
