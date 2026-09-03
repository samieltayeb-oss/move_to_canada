export interface WeekendActivity {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'ROCKIES_NATURE' | 'INDOOR_RECREATION' | 'SCIENCE_CULTURE' | 'WINTER_SNOW' | 'SUMMER_PARKS';
  quadrantOrArea: string;
  address: string;
  drivingTimeFromNE: string;
  ageFitNotes: {
    teen16: string;
    child11: string;
    kid5: string;
  };
  arabicAgeFitNotes: {
    teen16: string;
    child11: string;
    kid5: string;
  };
  admissionCost: {
    regularCAD: string;
    fairEntryDiscountCAD?: string;
  };
  seasonality: 'All Year' | 'Winter (Nov–Apr)' | 'Summer (May–Sep)';
  highlights: string[];
  halalFoodNearby: string;
  websiteUrl: string;
  googleMapsUrl: string;
  imageUrl?: string;
}

export interface FairEntryBenefit {
  benefitTitle: string;
  arabicBenefitTitle: string;
  standardCost: string;
  fairEntryCost: string;
  savingsDescription: string;
  arabicSavingsDescription: string;
  iconName: string;
}

export const calgaryFairEntryGuide = {
  programName: 'City of Calgary Fair Entry Program',
  arabicProgramName: 'برنامج الدخول العادل لبلدية كالغاري (Fair Entry)',
  tagline: 'Municipal subsidy covering transit, recreation, swimming lessons, and library services for eligible newcomer families.',
  arabicTagline: 'برنامج الدعم البلدي الشامل الذي يغطي اشتراكات المواصلات، المراكز الترفيهية، دروس السباحة للأطفال، والخدمات المكتبية للقادمين الجدد.',
  officialWebsite: 'https://www.calgary.ca/social-services/fair-entry.html',
  onlineApplyUrl: 'https://fairentry.calgary.ca/',
  inquiryPhone: '311 (or 403-268-2489 outside Calgary)',
  
  newcomerEligibilityRule: {
    rule: 'Permanent Residents in their first 12 months in Canada qualify directly without prior Canadian tax returns (CRA Notice of Assessment).',
    arabicRule: 'المقيمون الدائمون الجدد في أول 12 شهراً في كندا مؤهلون مباشرة دون الحاجة لتقديم إقرار ضريبي كندي سابق.',
    acceptedProofOfIncome: [
      'Confirmation of Permanent Residence (COPR) document (IMM 5292 or IMM 5688)',
      'Permanent Resident Card (PR Card)',
      'Proof of Calgary residential address (Signed lease agreement, tenancy letter, or Enmax utility bill)'
    ],
    incomeThreshold2026: 'Family of 5 (2 Adults, 3 Children): Gross annual household income up to ~$72,000 CAD qualifies for Band 1, 2, or 3 subsidies.'
  },

  benefits: [
    {
      benefitTitle: 'Calgary Transit Low-Income Monthly Pass',
      arabicBenefitTitle: 'بطاقة باصات وقطار كالغاري الشهرية المدعومة',
      standardCost: '$126.00 / month (Adult)',
      fairEntryCost: '$6.30 / mo (Band 1) or $44.00 / mo (Band 2)',
      savingsDescription: 'Save $119.70/mo per adult ($1,436/yr). Youth pass for 16yo is also discounted. (Note: Kids 11 & 5 ride 100% FREE on all Calgary transit).',
      arabicSavingsDescription: 'توفير 119.70 دولار شهرياً للبالغ (وفر سنوي 1,436 دولار). تذكرة الابن (16 سنة) مخفضة، والأبناء (11 و 5 سنوات) مجاناً بالكامل.',
      iconName: 'Bus'
    },
    {
      benefitTitle: 'Recreation Fee Subsidy (75% Off Admissions)',
      arabicBenefitTitle: 'خصم 75% على دخول المراكز الترفيهية والمسابح',
      standardCost: '$14.50 – $17.00 per visit',
      fairEntryCost: '$3.60 – $4.25 per visit',
      savingsDescription: '75% discount on general admission to all City of Calgary pools, arenas, and fitness centres (e.g. Village Square Leisure Centre in NE).',
      arabicSavingsDescription: 'خصم 75% على تذاكر الدخول لجميع مسابح وصالات بلدية كالغاري ومراكز الترفيه العائلية.',
      iconName: 'Waves'
    },
    {
      benefitTitle: 'Registered Child Programs Credit ($200/yr per child)',
      arabicBenefitTitle: 'رصيد 200 دولار سنوياً لكل طفل للأنشطة والسباحة',
      standardCost: '$180 – $220 per swim course',
      fairEntryCost: '$0 (Deducted from $200 annual credit)',
      savingsDescription: '$200 annual subsidy credit per child for registered swimming lessons, day camps, and sports leagues. Total $600/yr for 3 children.',
      arabicSavingsDescription: 'رصيد سنوي 200 دولار لكل طفل لتسجيلهم في دورات تعليم السباحة الرسمية والمخيمات الصيفية (إجمالي 600 دولار سنوياً لـ 3 أبناء).',
      iconName: 'Award'
    },
    {
      benefitTitle: 'Calgary Public Library Enhanced Access',
      arabicBenefitTitle: 'خدمات مكتبة كالغاري العامة المعززة',
      standardCost: 'Free general card',
      fairEntryCost: '$0 Free + Free computer/printer credits',
      savingsDescription: 'Free library cards, free Chromebook loans, free Wi-Fi hotspots, free meeting rooms, and free online tutoring & courses.',
      arabicSavingsDescription: 'بطاقات مجانية، استعارة حواسيب محمولة، إنترنت مجاني، ودورات تقوية وتعليم لغات مجاناً.',
      iconName: 'BookOpen'
    },
    {
      benefitTitle: 'Property Tax Assistance & No-Cost Pet Spay/Neuter',
      arabicBenefitTitle: 'إعانات ضريبة الأملاك وخدمات الحيوانات الأليفة',
      standardCost: 'Varies',
      fairEntryCost: 'Direct credit / $0 fee',
      savingsDescription: 'Assistance credits on residential property taxes and subsidized spay/neuter services for family pets.',
      arabicSavingsDescription: 'إعفاءات وتخفيضات على رسوم الأملاك البلدية والخدمات البيطرية.',
      iconName: 'Home'
    }
  ] as FairEntryBenefit[],

  applicationSteps: [
    {
      stepNumber: 1,
      title: 'Gather Newcomer Identification & Documents',
      arabicTitle: 'تجهيز وثائق الهبوط والإقامة الكندية',
      instructions: 'Prepare your stamped COPR (Confirmation of Permanent Residence) or PR cards for all 5 family members, photo ID (passports), and your Calgary residential lease agreement or Enmax utility bill.',
      arabicInstructions: 'جهّز وثيقة الهبوط الرسمية (COPR) لجميع أفراد الأسرة الخمسة، وجوازات السفر، وعقد إيجار المنزل في كالغاري أو فاتورة كهرباء إنماكس.'
    },
    {
      stepNumber: 2,
      title: 'Apply Online or Visit In-Person Counter',
      arabicTitle: 'التقديم إلكترونياً أو زيارة المراكز المعتمدة',
      instructions: 'Apply online at calgary.ca/fairentry in 15 minutes by uploading document photos. Alternatively, apply in-person at Genesis Centre (7555 Falconridge Blvd NE) or Calgary Municipal Building (800 Macleod Trail SE, 3rd Floor).',
      arabicInstructions: 'قدّم عبر الإنترنت من موقع calgary.ca/fairentry خلال 15 دقيقة برفع صور الوثائق، أو زر مكتب الخدمة في مركز جينيسيس (7555 Falconridge Blvd NE) أو مبنى البلدية وسط المدينة.'
    },
    {
      stepNumber: 3,
      title: 'Receive Approval Card & Activate Subsidies',
      arabicTitle: 'استلام بطاقة الاعتماد وتفعيل الخصومات',
      instructions: 'City of Calgary processes newcomer applications within 2 to 3 weeks. You will receive an approval letter and Fair Entry ID card. Take this ID to any City recreation centre or CTrain customer service counter to purchase subsidized passes and register children in swimming programs.',
      arabicInstructions: 'تصدر الموافقة خلال أسبوعين إلى 3 أسابيع بخطاب وبطاقة Fair Entry. يمكنك استخدامها فوراً في مراكز السباحة ومحطات القطار لشراء الاشتراكات المخفضة والتسجيل في الدورات.'
    }
  ],

  inPersonOffices: [
    {
      name: 'Genesis Centre Community Services Desk (NE Calgary)',
      address: '7555 Falconridge Blvd NE, Calgary, AB T3J 0C9',
      hours: 'Mon–Fri 8:00 AM – 5:00 PM',
      transit: 'Near Saddletowne CTrain station; bus route 60 / 61',
      googleMapsUrl: 'https://maps.google.com/?q=7555+Falconridge+Blvd+NE+Calgary'
    },
    {
      name: 'Calgary Municipal Building — Fair Entry Counter (Downtown)',
      address: '800 Macleod Trail SE, 3rd Floor, Calgary, AB T2P 2M5',
      hours: 'Mon–Fri 8:00 AM – 4:30 PM',
      transit: 'Directly at City Hall CTrain station (Free Fare Zone)',
      googleMapsUrl: 'https://maps.google.com/?q=800+Macleod+Trail+SE+Calgary'
    },
    {
      name: 'Village Square Leisure Centre Service Desk (NE Calgary)',
      address: '2623 56 St NE, Calgary, AB T1Y 6E7',
      hours: 'Mon–Sun 6:00 AM – 9:00 PM',
      transit: 'Bus route 38 / 48 from Marlborough or Rundle CTrain',
      googleMapsUrl: 'https://maps.google.com/?q=2623+56+St+NE+Calgary'
    }
  ]
};

export const calgaryWeekendActivities: WeekendActivity[] = [
  // 1. ROCKIES & NATURE
  {
    id: 'act-banff-gondola',
    title: 'Banff National Park & Sulphur Mountain Gondola',
    arabicTitle: 'رحلة جبال الروكي: حديقة بانف الوطنية وتلفريك جبل سولفور',
    category: 'ROCKIES_NATURE',
    quadrantOrArea: 'Rocky Mountains (West of Calgary)',
    address: '100 Mountain Ave, Banff, AB T1L 1B2',
    drivingTimeFromNE: '1 hr 25 mins via Trans-Canada Hwy 1 West',
    ageFitNotes: {
      teen16: 'Panoramic mountain boardwalk, photography, mountain hiking trails to Sanson’s Peak.',
      child11: 'Interactive Above Banff interpretive science centre, multi-sensory theatre experience.',
      kid5: 'Exciting enclosed 8-minute cable car ride, spotting mountain bighorn sheep and wildlife.'
    },
    arabicAgeFitNotes: {
      teen16: 'التصوير البانورامي ومسارات المشي الجبلي لقمة سانسون وإطلالات الروكي الشاهقة.',
      child11: 'المعرض التفاعلي للأحياء الجبلية والسينما الجيولوجية ثلاثية الأبعاد.',
      kid5: 'ركوب التلفريك المغلق الممتع ومشاهدة الخراف الجبلية في بيئتها الطبيعية.'
    },
    admissionCost: {
      regularCAD: 'Adult $65–$78, Youth $40, Under 5 FREE',
      fairEntryDiscountCAD: 'Parks Canada Cultural Access pass offers free national park discovery entry for first-year PRs!'
    },
    seasonality: 'All Year',
    highlights: [
      'Breath-taking 360° summit views of six Canadian Rocky Mountain ranges',
      'Free admission to Banff National Park using Canoe / Cultural Access Pass for 1st-year Canadian PRs',
      'Strolling along Banff Avenue with halal dining options and souvenir shops',
      'Quick side trip to Bow Falls and the historic Fairmont Banff Springs Hotel'
    ],
    halalFoodNearby: 'Zyka Banff Indian & Pakistani Cuisine (100% Halal certified, Caribou St) & Magpie & Stump (Halal chicken options)',
    websiteUrl: 'https://www.banffjaspercollection.com/attractions/banff-gondola/',
    googleMapsUrl: 'https://maps.google.com/?q=Banff+Gondola+Alberta',
    imageUrl: '/images/generated/banff_mountain_family_trip.jpg'
  },
  {
    id: 'act-johnston-canyon',
    title: 'Johnston Canyon Waterfalls & Ice Walk',
    arabicTitle: 'شلالات كانيون جونستون والممشى الجليدي',
    category: 'ROCKIES_NATURE',
    quadrantOrArea: 'Banff National Park',
    address: 'Bow Valley Pkwy, Improvement District No. 9, AB T0L 0K0',
    drivingTimeFromNE: '1 hr 35 mins via Hwy 1',
    ageFitNotes: {
      teen16: 'Stunning frozen waterfall photography and hiking up to Upper Falls (5.4 km return).',
      child11: 'Walking through steel catwalks suspended along towering limestone canyon walls.',
      kid5: 'Gentle, accessible paved walk to Lower Falls (1.1 km) with scenic wooden bridges.'
    },
    arabicAgeFitNotes: {
      teen16: 'تصوير الشلالات المتجمدة العملاقة والمشي إلى الشلالات العليا.',
      child11: 'المشي على الجسور المعلقة المثبتة على جدران الوادي الصخري.',
      kid5: 'مسار سهل وممهد ومحمي للشلال السفلي وسط الأشجار الكثيفة.'
    },
    admissionCost: {
      regularCAD: '$0 Free admission (Included in National Park pass)',
      fairEntryDiscountCAD: '$0 Free'
    },
    seasonality: 'All Year',
    highlights: [
      'Calgary family favorite: free paved canyon hike suitable for all ages',
      'Catwalks bolted to sheer canyon cliffs over roaring turquoise waters',
      'Spectacular ice falls and frozen blue ice pillars in winter',
      'Free parking and picnic facilities at trailhead'
    ],
    halalFoodNearby: 'Pack family picnic or dine in Banff Townsite (25 mins away)',
    websiteUrl: 'https://www.pc.gc.ca/en/pn-np/ab/banff/activ/randonnee-hiking/johnston',
    googleMapsUrl: 'https://maps.google.com/?q=Johnston+Canyon+Banff'
  },

  // 2. INDOOR RECREATION & COMMUNITY
  {
    id: 'act-genesis-centre',
    title: 'Genesis Centre & Saddletowne YMCA (Heart of NE Calgary)',
    arabicTitle: 'مركز جينيسيس الرياضي والترفيهي (سادلريدج / شمال شرق كالغاري)',
    category: 'INDOOR_RECREATION',
    quadrantOrArea: 'Northeast (NE) — Saddleridge',
    address: '7555 Falconridge Blvd NE, Calgary, AB T3J 0C9',
    drivingTimeFromNE: '4–8 mins from Cornerstone, Savanna, or Saddleridge',
    ageFitNotes: {
      teen16: 'Full gym, basketball courts, youth drop-in indoor soccer league, computer lab.',
      child11: 'Indoor sports courts, youth swimming classes, indoor climbing wall.',
      kid5: 'Zero-depth leisure splash pool, indoor community play gym, Calgary Public Library branch on site.'
    },
    arabicAgeFitNotes: {
      teen16: 'صالات حديد، ملاعب كرة سلة، دوريات كرة قدم داخلية، وغرف دراسة حاسوبية.',
      child11: 'ملاعب رياضية متنوعة، مسابح، وجدار تسلق داخلي آمن.',
      kid5: 'مسبح ألعاب مائية للأطفال، صالة ألعاب لينة، وفرع مكتبة كالغاري العامة.'
    },
    admissionCost: {
      regularCAD: 'Drop-in: Adult $16, Youth $10, Child $6, Family Day Pass $38',
      fairEntryDiscountCAD: '75% OFF with Fair Entry: Family entry ~$9.50 CAD; $200/child credit applies to swim classes'
    },
    seasonality: 'All Year',
    highlights: [
      'Premier 250,000 sq ft multi-sport community complex right in the Muslim community hub',
      'Connected to Saddletowne CTrain station and Saddletowne Library branch',
      'Adjacent to Akram Jomaa Islamic Centre and Halal food markets',
      'Houses municipal City of Calgary Fair Entry application support desk'
    ],
    halalFoodNearby: 'Dozens of Halal restaurants within 500 meters: Al-Madina Shawarma, Taza Donair, Crispy Crust Pizza, Saned Halal Deli',
    websiteUrl: 'https://genesis-centre.ca/',
    googleMapsUrl: 'https://maps.google.com/?q=Genesis+Centre+Calgary'
  },
  {
    id: 'act-village-square',
    title: 'Village Square Leisure Centre (Wave Pool & Water Slides)',
    arabicTitle: 'مركز فيلج سكوير للألعاب المائية والتزلج (مسبح الأمواج والزلاقات)',
    category: 'INDOOR_RECREATION',
    quadrantOrArea: 'Northeast (NE) — Pineridge',
    address: '2623 56 St NE, Calgary, AB T1Y 6E7',
    drivingTimeFromNE: '10–12 mins from Cornerstone or Saddleridge',
    ageFitNotes: {
      teen16: 'Thunder Run indoor waterslides, weight room, drop-in ice hockey and public skating.',
      child11: 'Wave pool with continuous rolling surf waves, dive tank, water basketball.',
      kid5: 'Warm shallow water tot pool, interactive splash toys, zero-entry gently sloped beach pool.'
    },
    arabicAgeFitNotes: {
      teen16: 'زلاقات مائية مغلقة ضخمة، صالة لياقة، وحلبات تزلج على الجليد.',
      child11: 'مسبح أمواج اصطناعية مستمرة، حوض غطس، وكرة سلة مائية.',
      kid5: 'مسبح دافئ ضحل جداً كشاطئ رملي بألعاب مائية آمنة للأطفال الصغار.'
    },
    admissionCost: {
      regularCAD: 'Adult $14.15, Youth $9.95, Child $7.10, Family $33.60',
      fairEntryDiscountCAD: '75% OFF with Fair Entry: Adult ~$3.50, Child ~$1.75 CAD; $200/child annual credit applies'
    },
    seasonality: 'All Year',
    highlights: [
      'Huge indoor water park owned and operated directly by the City of Calgary',
      'Wave pool operating at tropical 30°C temperature all winter long',
      'Twin ice rinks with public skating sessions and skate rentals',
      'Full Fair Entry partner facility with maximum municipal fee discounts'
    ],
    halalFoodNearby: 'Castleridge Halal Plaza (5 mins drive north along 52nd St NE): Basha Foods, Barbeque Tonite, Damascus Sweets',
    websiteUrl: 'https://www.calgary.ca/rec-locations/pools/village-square.html',
    googleMapsUrl: 'https://maps.google.com/?q=Village+Square+Leisure+Centre+Calgary'
  },
  {
    id: 'act-big-box',
    title: 'The Big Box Family Entertainment Hub (NE Calgary)',
    arabicTitle: 'مركز ذا بيج بوكس الترفيهي العائلي (أكبر مجمع ترفيهي داخلي في كندا)',
    category: 'INDOOR_RECREATION',
    quadrantOrArea: 'Northeast (NE) — Deerfoot / Airport',
    address: '930 64 Ave NE, Calgary, AB T2E 8S8',
    drivingTimeFromNE: '12 mins from Saddleridge / Cornerstone',
    ageFitNotes: {
      teen16: 'Virtual reality arena, high ropes aerial adventure course, laser tag arena.',
      child11: 'Massive multi-level indoor inflatable park, arcade redemption games, obstacle course.',
      kid5: 'Dedicated fenced toddler soft play playhouse with mini ball pits and gentle slides.'
    },
    arabicAgeFitNotes: {
      teen16: 'ساحة الواقع الافتراضي، مسار الحبال الهوائي المرتفع، وألعاب الليزر.',
      child11: 'مدينة ملاهي هوائية عملاقة (Inflatable Park) وألعاب فيديو تفاعلية.',
      kid5: 'منطقة ألعاب لينة مخصصة بالكامل للأطفال دون 6 سنوات مع مسبح كرات ومجسمات إسفنجية.'
    },
    admissionCost: {
      regularCAD: '$15 – $28 depending on zones chosen; Family combo packages available',
      fairEntryDiscountCAD: 'Private facility; seasonal community discount days available'
    },
    seasonality: 'All Year',
    highlights: [
      'Western Canada’s largest indoor family entertainment centre (55,000 sq ft)',
      'Ideal weekend destination during cold sub-zero Calgary winter chinook or blizzard days',
      'All 3 kids (16, 11, and 5) have age-dedicated dedicated entertainment zones under one roof',
      'Clean dining café and family party lounges'
    ],
    halalFoodNearby: '36th St NE corridor (7 mins drive): Shawarma Barlow, Osmow’s Shawarma, Al-Madina Halal Meats',
    websiteUrl: 'https://thebigbox.ca/',
    googleMapsUrl: 'https://maps.google.com/?q=The+Big+Box+Calgary'
  },

  // 3. SCIENCE, ANIMALS & CULTURE
  {
    id: 'act-calgary-zoo',
    title: 'Wilder Institute / Calgary Zoo & Prehistoric Park',
    arabicTitle: 'حديقة حيوان كالغاري ومعهد وايلدر ومحمية الديناصورات',
    category: 'SCIENCE_CULTURE',
    quadrantOrArea: 'Central / East (Bridges / St. Patrick’s Island)',
    address: '210 St. George’s Drive NE, Calgary, AB T2E 7V6',
    drivingTimeFromNE: '14 mins via Memorial Drive or direct Blue Line CTrain (Zoo Station)',
    ageFitNotes: {
      teen16: 'Canadian Wilds ecosystem tour (grizzly bears, cougars, bison, wolves) and rainforest habitat.',
      child11: 'Prehistoric Dinosaur Park with life-size animatronic dinosaurs, Land of Lemurs.',
      kid5: 'Penguin Plunge walk, African savannah giraffes & hippos, carousel ride.'
    },
    arabicAgeFitNotes: {
      teen16: 'جولة الحياة البرية الكندية (الدببة الرمادية، الذئاب، ثيران البيسون) والغابات الاستوائية.',
      child11: 'حديقة الديناصورات المتحركة بأحجام حقيقية وأرض حيوانات الليمور.',
      kid5: 'مسيرة البطاريق اليومية اللطيفة، زرافات السافانا، وركوب الخيول الدوارة.'
    },
    admissionCost: {
      regularCAD: 'Adult $34.95, Youth (16+) $34.95, Child (3–15) $24.95, Under 3 FREE',
      fairEntryDiscountCAD: 'Calgary Zoo offers special Fee Assistance Admission for low-income & Fair Entry registered families ($10–$12 CAD)'
    },
    seasonality: 'All Year',
    highlights: [
      'Direct CTrain transit connection: Blue Line train drops right inside the zoo entrance',
      'Daily winter Penguin Walk where King Penguins stroll outside right past visitors',
      'ZOOLIGHTS award-winning festival of lights every winter (Nov–Jan)',
      'Ranked among the top zoological research and conservation institutes in North America'
    ],
    halalFoodNearby: 'Inglewood & Downtown East Village (5 mins drive): Halal beef burgers, gourmet falafel, and Turkish döner',
    websiteUrl: 'https://www.calgaryzoo.com/',
    googleMapsUrl: 'https://maps.google.com/?q=Calgary+Zoo'
  },
  {
    id: 'act-telus-spark',
    title: 'TELUS Spark Science Centre & Digital Immersion Dome',
    arabicTitle: 'مركز تيلوس سبارك للعلوم والقبة الفلكية الرقمية',
    category: 'SCIENCE_CULTURE',
    quadrantOrArea: 'Inner NE — St. George’s Heights',
    address: '220 St. George’s Drive NE, Calgary, AB T2E 5T2',
    drivingTimeFromNE: '12 mins from Saddleridge / Cornerstone',
    ageFitNotes: {
      teen16: 'Robotics lab, 360° Infinity Dome digital space cinema, coding and physics exhibits.',
      child11: 'Being Human biology interactive lab, Earth & Energy science challenges, maker spaces.',
      kid5: 'Creative Kids Museum (toddler water table play, soft climbing foam blocks, hands-on building).'
    },
    arabicAgeFitNotes: {
      teen16: 'مختبر الروبوتات، سينما القبة الرقمية 360 درجة، وتجارب البرمجة والفيزياء.',
      child11: 'تجارب جسم الإنسان التفاعلية، معامل الطاقة، ومساحات الابتكار اليدوي.',
      kid5: 'متحف الأطفال الإبداعي: طاولات الألعاب المائية، مكعبات البناء اللينة، والتجارب الحسية.'
    },
    admissionCost: {
      regularCAD: 'Adult $32, Youth $26, Child $22, Under 3 FREE',
      fairEntryDiscountCAD: 'Community Access Pass / Fair Entry eligible for 50% discount admission'
    },
    seasonality: 'All Year',
    highlights: [
      'Calgary’s premier interactive science, technology, engineering, and arts museum',
      'Brainasium outdoor adventure playground with 36-foot tower slide',
      'Largest 360-degree digital dome theatre in Western Canada',
      'Rotating world-class travelling exhibitions (NASA, Dinosaurs, Marvel science)'
    ],
    halalFoodNearby: 'Marlborough Mall food corridor (8 mins east along 16th Ave N / Trans-Canada): dozens of Halal eateries',
    websiteUrl: 'https://www.sparkscience.ca/',
    googleMapsUrl: 'https://maps.google.com/?q=TELUS+Spark+Science+Centre+Calgary'
  },
  {
    id: 'act-heritage-park',
    title: 'Heritage Park Historical Village & Gasoline Alley Museum',
    arabicTitle: 'قرية هيريتيج التاريخية ومتحف السيارات الكلاسيكية',
    category: 'SCIENCE_CULTURE',
    quadrantOrArea: 'Southwest (SW) — Glenmore Reservoir',
    address: '1900 Heritage Dr SW, Calgary, AB T2V 2X3',
    drivingTimeFromNE: '22 mins via Deerfoot Trail South',
    ageFitNotes: {
      teen16: 'Exploring 19th-century frontier history, vintage automotive restoration in Gasoline Alley.',
      child11: 'Riding the authentic 1905 steam locomotive train and the SS Moyie sternwheeler paddleboat.',
      kid5: 'Antique amusement park midway with carousel, Ferris wheel, and freshly baked old-fashioned cinnamon buns.'
    },
    arabicAgeFitNotes: {
      teen16: 'استكشاف تاريخ كندا القديم ومتحف السيارات الكلاسيكية ومحطات الوقود التاريخية.',
      child11: 'ركوب قطار البخار الحقيقي لعام 1905 والسفينة البخارية ذات الدولاب في بحيرة جلينمور.',
      kid5: 'مدينة الملاهي الكلاسيكية القديمة وركوب المهد الدوار ومخبز المعجنات الطازجة.'
    },
    admissionCost: {
      regularCAD: 'Adult $34.95, Child $22.95 (Summer); Gasoline Alley winter: Adult $14.95, Child $8.95',
      fairEntryDiscountCAD: 'Participates in Cultural Access Pass and Calgary fee assistance'
    },
    seasonality: 'All Year',
    highlights: [
      'Canada’s largest living history museum covering 127 acres on Glenmore Reservoir',
      'Steam locomotive loops around the park carrying families all day at no extra cost',
      'Gasoline Alley Museum open year-round with immaculate vintage cars and retro gas pumps',
      'Famous Alberta Heritage Bakery serving fresh artisan bread and cookies'
    ],
    halalFoodNearby: 'Southland Drive / Macleod Trail (5 mins east): Paramount Middle Eastern Kitchen, Halal shawarma & grill',
    websiteUrl: 'https://www.heritagepark.ca/',
    googleMapsUrl: 'https://maps.google.com/?q=Heritage+Park+Calgary'
  },

  // 4. WINTER FAMILY THRILLS
  {
    id: 'act-winsport-cop',
    title: 'WinSport Canada Olympic Park (Skiing, Snowboarding & Tube Park)',
    arabicTitle: 'منتزه كندا الأولمبي وين سبورت (التزلج والسنوبورد ومنحدر التيوبينج)',
    category: 'WINTER_SNOW',
    quadrantOrArea: 'West Calgary — Trans-Canada Hwy & Stoney Trail',
    address: '88 Canada Olympic Rd SW, Calgary, AB T3B 5R5',
    drivingTimeFromNE: '20 mins via Stoney Trail North Ring Road',
    ageFitNotes: {
      teen16: 'Learning to snowboard or downhill ski on groomed beginner hills with high-speed chairlifts.',
      child11: 'Servus Tube Park: racing down 8 massive snow-tubing lanes with conveyor lift.',
      kid5: 'Magic Carpet beginner snow slope, snowman building, and cozy hot chocolate chalet.'
    },
    arabicAgeFitNotes: {
      teen16: 'تعلم التزلج على المنحدرات باللوح (Snowboard) وركوب التلفريك السريع.',
      child11: 'منحدر التزحلق بالدواليب الهوائية (Tube Park) الممتع والسريع بـ 8 مسارات.',
      kid5: 'مسار السجاد السحري للتزلج الخفيف للأطفال الصغار وتناول الشوكولاتة الساخنة.'
    },
    admissionCost: {
      regularCAD: 'Tube Park: $25–$34/person (2-hour ticket); Ski lift & rental packages available',
      fairEntryDiscountCAD: 'WinSport Community Access program provides subsidized beginner ski lesson packages'
    },
    seasonality: 'Winter (Nov–Apr)',
    highlights: [
      'Historic site of the 1988 Calgary Olympic Winter Games right inside city limits',
      'The largest snow tube park in Western Canada — no skill or equipment required!',
      'Top-tier ski school with bilingual and beginner-friendly instructors',
      'Spacious heated Frank King Day Lodge overlooking Calgary skyline'
    ],
    halalFoodNearby: 'Trinity Hills Shopping Centre (3 mins away): Popeyes Halal Chicken, Opa! Souvlaki, Five Guys',
    websiteUrl: 'https://www.winsport.ca/',
    googleMapsUrl: 'https://maps.google.com/?q=WinSport+Calgary'
  },
  {
    id: 'act-bowness-park',
    title: 'Bowness Park & Lagoon (Ice Skating Trail & Summer Paddleboats)',
    arabicTitle: 'حديقة وبحيرة بونيس بارك (مسار التزلج الجليدي والزوارق الصيفية)',
    category: 'WINTER_SNOW',
    quadrantOrArea: 'Northwest (NW) — Bow River',
    address: '8900 48 Ave NW, Calgary, AB T3B 2B2',
    drivingTimeFromNE: '18 mins via Stoney Trail NW',
    ageFitNotes: {
      teen16: 'Ice skating along the 1.6 km frozen canal ice trail; ice bikes available for rent.',
      child11: 'Public skating on the scenic frozen lagoon; summer miniature ride-on train and playground.',
      kid5: 'Ice sleds for parents to push little kids on the ice; warm outdoor fire pits and duck ponds.'
    },
    arabicAgeFitNotes: {
      teen16: 'التزلج على مسار القناة الجليدية الممتد بطول 1.6 كم أو تجربة الدراجات الجليدية.',
      child11: 'التزلج الحر على بحيرة اللاجون الطبيعية وركوب القطار المصغر والحديقة الصيفية.',
      kid5: 'الجلوس في زلاجة يدفعها الأهل على الجليد والتدفئة أمام مواقد النار الخارجية.'
    },
    admissionCost: {
      regularCAD: '$0 Free park entry and free ice skating! (Skate rentals ~$10–$14 at University of Calgary skate shop on site)',
      fairEntryDiscountCAD: '$0 Free public amenity'
    },
    seasonality: 'All Year',
    highlights: [
      'Calgary’s most iconic municipal winter park: free ice skating on a natural lagoon',
      'Maintained 1.6 km refrigerated canal ice trail through forest trees',
      'Free outdoor communal fire pits with complimentary firewood provided by the City',
      'Summer paddleboat rentals and wading pool for toddlers'
    ],
    halalFoodNearby: 'Bowness Road & Montgomery (6 mins drive): Dairy Lane Cafe, Halal shawarma & burger spots',
    websiteUrl: 'https://www.calgary.ca/parks/bowness-park.html',
    googleMapsUrl: 'https://maps.google.com/?q=Bowness+Park+Calgary'
  },

  // 5. SUMMER PARKS & LAKES
  {
    id: 'act-sikome-lake',
    title: 'Sikome Aquatic Lake Beach & Fish Creek Provincial Park',
    arabicTitle: 'شاطئ بحيرة سيكوم المائية وحديقة فيش كريك الإقليمية',
    category: 'SUMMER_PARKS',
    quadrantOrArea: 'Southeast (SE) — Fish Creek Valley',
    address: 'Sikome Rd SE, Calgary, AB T2J 2V9',
    drivingTimeFromNE: '22 mins via Deerfoot Trail South',
    ageFitNotes: {
      teen16: 'Beach volleyball courts, sunbathing, 100+ km of paved cycling trails in Fish Creek Park.',
      child11: 'Swimming in the filtered chlorinated sandy lake, sandcastle building, water sports.',
      kid5: 'Gentle, zero-depth shallow sandy shoreline with certified lifeguards on duty.'
    },
    arabicAgeFitNotes: {
      teen16: 'ملاعب كرة طائرة شاطئية ومسارات دراجات هوائية ممتدة لأكثر من 100 كم.',
      child11: 'السباحة في بحيرة مصفاة ومعقمة بالرمال الطبيعية وبناء القلاع الرملية.',
      kid5: 'شاطئ رملي ضحل جداً ومناسب للعب الآمن للأطفال الصغار بوجود منقذين معتمدين.'
    },
    admissionCost: {
      regularCAD: 'Family Day Pass $10 CAD, Adult $5, Child $3, Under 5 FREE',
      fairEntryDiscountCAD: 'Low-income family passes available at entry gate'
    },
    seasonality: 'Summer (May–Sep)',
    highlights: [
      'Calgary’s only public swimming beach: 100% chlorinated and filtered for clean family swimming',
      'Surrounded by Fish Creek Provincial Park — the 2nd largest urban park in Canada',
      'Plentiful shaded picnic tables, clean changerooms, and outdoor showers',
      'Certified Alberta Parks lifeguards stationed throughout the beach'
    ],
    halalFoodNearby: 'Shawnessy Plaza (7 mins west): Halal burgers, Middle Eastern shawarma, and fresh fruit juice bars',
    websiteUrl: 'https://www.albertaparks.ca/parks/south/fish-creek-pp/information-facilities/special-facilities/sikome-aquatic-facility/',
    googleMapsUrl: 'https://maps.google.com/?q=Sikome+Lake+Calgary'
  }
];
