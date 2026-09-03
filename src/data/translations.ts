export interface TranslationDictionary {
  appTitle: string;
  appSubtitle: string;
  secondaryCopy: string;
  nav: {
    dashboard: string;
    realityCheck: string;
    housing: string;
    neighbourhoods: string;
    schools: string;
    islamicLife: string;
    bankingCredit: string;
    telecomUtilities: string;
    calculators: string;
    drivingCars: string;
    transit: string;
    healthcare: string;
    taxes: string;
    career: string;
    videos: string;
    winterLifestyle: string;
    cityIndex: string;
    movePlan: string;
    sources: string;
  };
  common: {
    lastVerified: string;
    source: string;
    openSource: string;
    reportOutdated: string;
    verified: string;
    confidence: string;
    monthly: string;
    annually: string;
    cad: string;
    sar: string;
    currencyToggle: string;
    saveItem: string;
    saved: string;
    printExport: string;
    switchLang: string;
    current: string;
    recent: string;
    aging: string;
    stale: string;
    disclaimerText: string;
  };
  hero: {
    badge: string;
    headline: string;
    question: string;
    familySummary: string;
    editProfile: string;
    saveProfile: string;
    headOfHousehold: string;
    targetCity: string;
    familyMembers: string;
    childAges: string;
    numAdults: string;
    numKids: string;
    immigrationStatus: string;
    expectedIncome: string;
    initialSavings: string;
    housingPref: string;
  };
  decisionDashboard: {
    title: string;
    subtitle: string;
    overallScore: string;
    methodologyNote: string;
    adjustWeights: string;
    resetWeights: string;
    strength: string;
    tradeoff: string;
  };
  realityCheck: {
    title: string;
    subtitle: string;
    whyCalgary: string;
    whyCalgaryDesc: string;
    whatMayBeDifficult: string;
    whatMayBeDifficultDesc: string;
  };
  housing: {
    title: string;
    subtitle: string;
    toggle3Bed: string;
    toggle4Bed: string;
    cmhcAverage: string;
    rentalsCaAsking: string;
    methodologyDiffTitle: string;
    methodologyDiffText: string;
    sampleListings: string;
    sqft: string;
    deposit: string;
    estUtilities: string;
  };
  neighbourhoods: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterMuslim: string;
    filterBudget: string;
    filterSchools: string;
    filterTransit: string;
    filterExecutive: string;
    catchmentWarning: string;
    commuteDowntown: string;
    nearestMosque: string;
    nearestSchool: string;
    halalGroceries: string;
  };
  schools: {
    title: string;
    subtitle: string;
    childAgesTitle: string;
    albertaSystemTitle: string;
    islamicSchoolsTitle: string;
    checklistTitle: string;
    welcomeCentreNotice: string;
    lotteryNotice: string;
  };
  islamicLife: {
    title: string;
    subtitle: string;
    filterAll: string;
    filterNearHome: string;
    filterYouth: string;
    filterQuran: string;
    filterArabic: string;
    mosquesTitle: string;
    groceriesTitle: string;
    prayerTimeDisclaimer: string;
  };
  bankingCredit: {
    bankingTitle: string;
    creditTitle: string;
    pureCashNotice: string;
    creditFactorsTitle: string;
    twelveMonthPlanTitle: string;
    statementDateHack: string;
  };
  telecomUtilities: {
    internetTitle: string;
    mobileTitle: string;
    utilitiesTitle: string;
    fibreVsCable: string;
    saudiCallingTitle: string;
    municipalBillingTitle: string;
    seasonalComparison: string;
  };
  calculators: {
    colTitle: string;
    reserveTitle: string;
    lifestyleBasic: string;
    lifestyleComfortable: string;
    lifestylePremium: string;
    landingReserveTitle: string;
    reserveMinimum: string;
    reserveRecommended: string;
    reserveComfortable: string;
  };
  drivingCars: {
    drivingTitle: string;
    carBuyingTitle: string;
    saudiShippingTitle: string;
    nonReciprocalNotice: string;
    importWarningNotice: string;
    taxSavingNotice: string;
    winterTireNotice: string;
  };
  cityIndex: {
    title: string;
    subtitle: string;
    calgaryVsEdmonton: string;
    calgaryVsRiyadh: string;
    weightsNotice: string;
    familyValue: string;
    housingValue: string;
    careerValue: string;
    muslimFit: string;
  };
  career: {
    title: string;
    subtitle: string;
    profileVerifiedNotice: string;
    employersTitle: string;
    salaryTitle: string;
    calgaryVsTorontoFinance: string;
  };
  videos: {
    title: string;
    subtitle: string;
    watchModalTitle: string;
    closeModal: string;
  };
  winter: {
    title: string;
    subtitle: string;
    mustHave: string;
    niceToHave: string;
    chinookTitle: string;
    sunshineTitle: string;
  };
  plan: {
    title: string;
    subtitle: string;
    progress: string;
    printableTitle: string;
  };
}

export const translations: Record<'en' | 'ar', TranslationDictionary> = {
  en: {
    appTitle: "YASSIR'S CALGARY RELOCATION COMMAND CENTER",
    appSubtitle: "From Riyadh to Alberta — A Family Relocation Intelligence System",
    secondaryCopy: "Know the costs. Choose the community. Prepare the children. Understand the system. Move with confidence.",
    nav: {
      dashboard: "Executive Fit",
      realityCheck: "Calgary Reality Check",
      housing: "Housing",
      neighbourhoods: "Neighbourhoods",
      schools: "Schools & Children",
      islamicLife: "Muslim Life",
      bankingCredit: "Banking & Credit",
      telecomUtilities: "Telecom & Utilities",
      calculators: "Cost Calculators",
      drivingCars: "Driving & Cars",
      transit: "Transit",
      healthcare: "Healthcare",
      taxes: "Taxes & Income",
      career: "Career & Finance",
      videos: "Relocation Videos",
      winterLifestyle: "Winter & Lifestyle",
      cityIndex: "Canada City Index",
      movePlan: "My Move Plan",
      sources: "Source Registry"
    },
    common: {
      lastVerified: "Last verified:",
      source: "SOURCE",
      openSource: "OPEN OFFICIAL SOURCE",
      reportOutdated: "Report outdated data",
      verified: "VERIFIED",
      confidence: "Confidence:",
      monthly: "/month",
      annually: "/year",
      cad: "CAD ($)",
      sar: "SAR (ر.س)",
      currencyToggle: "Currency:",
      saveItem: "Bookmark",
      saved: "Saved",
      printExport: "Print Move Dossier (PDF)",
      switchLang: "العربية",
      current: "CURRENT",
      recent: "RECENT",
      aging: "AGING",
      stale: "STALE",
      disclaimerText: "Information is provided for relocation planning and educational purposes. Government, banking, housing, telecom, immigration, tax and other rules can change. Always verify important decisions with the linked official source."
    },
    hero: {
      badge: "FAMILY RELOCATION INTELLIGENCE • RIYADH → CALGARY",
      headline: "Could Calgary be the right Canadian home for your family?",
      question: "Empowering Yassir & his household with verified, sourced facts to make an intelligent relocation decision.",
      familySummary: "Household Profile: 2 Adults • 3 Children Under 15 • Saudi Arabia → Canada",
      editProfile: "Customize Parameters",
      saveProfile: "Save Profile",
      headOfHousehold: "Head of Household",
      targetCity: "Target Destination",
      familyMembers: "Family Members",
      childAges: "Children Ages",
      numAdults: "Adults",
      numKids: "Children (<15)",
      immigrationStatus: "Immigration Status",
      expectedIncome: "Expected CAD Income",
      initialSavings: "Initial Liquid Savings (CAD)",
      housingPref: "Housing Preference"
    },
    decisionDashboard: {
      title: "Executive Decision Dashboard",
      subtitle: "Personalized Calgary Family Fit Score based on 13 sourced metrics",
      overallScore: "CALGARY FAMILY FIT SCORE",
      methodologyNote: "Score is mathematically computed from verified underlying statistics without artificial bias. You can adjust the category weights below to reflect what matters most to your family.",
      adjustWeights: "Customize Weightings",
      resetWeights: "Reset to Default",
      strength: "Distinct Calgary Strength",
      tradeoff: "Factor to Prepare For"
    },
    realityCheck: {
      title: "Calgary Reality Check",
      subtitle: "A balanced, unvarnished assessment of strengths and challenges for a family arriving from Riyadh",
      whyCalgary: "Why Choose Calgary (Strengths)",
      whyCalgaryDesc: "Empirical reasons families thrive in Calgary",
      whatMayBeDifficult: "What May Be Difficult (Challenges)",
      whatMayBeDifficultDesc: "Critical frictions to anticipate and prepare for"
    },
    housing: {
      title: "Housing Command Center",
      subtitle: "Verified Calgary rental statistics, deposit requirements, and live asking benchmarks",
      toggle3Bed: "3-Bedroom Rentals",
      toggle4Bed: "4-Bedroom Rentals",
      cmhcAverage: "Official CMHC In-Place Average",
      rentalsCaAsking: "Current Open-Market Asking Rent",
      methodologyDiffTitle: "Critical Methodology Distinction: CMHC vs. Rentals.ca",
      methodologyDiffText: "CMHC tracks all occupied units (including legacy leases signed years ago). Rentals.ca tracks vacant units actively available on the open market right now. For arriving newcomers, Rentals.ca represents the real cost of entry.",
      sampleListings: "Recent Open-Market Benchmark Snapshots",
      sqft: "Living Area",
      deposit: "Security Deposit (Max 1 Mo)",
      estUtilities: "Expected Utilities"
    },
    neighbourhoods: {
      title: "Family Neighbourhood Explorer",
      subtitle: "Comprehensive evaluation of Calgary quadrants for a Muslim family of 5",
      filterAll: "All Communities",
      filterMuslim: "Best for Muslim Family",
      filterBudget: "Best Budget Value",
      filterSchools: "Best for Public Schools",
      filterTransit: "Best for Transit",
      filterExecutive: "Executive Enclaves",
      catchmentWarning: "Important Catchment Law: CBE school attendance is strictly address-dependent. Always verify the exact designated school before signing a lease.",
      commuteDowntown: "Commute to Downtown:",
      nearestMosque: "Nearest Mosque:",
      nearestSchool: "Nearest Islamic / Key School:",
      halalGroceries: "Halal Grocery Access:"
    },
    schools: {
      title: "Schools & Children Command Center",
      subtitle: "Alberta grade structure, newcomer ELL assessment, and Islamic schooling in Calgary",
      childAgesTitle: "Child Grade Progression Cards",
      albertaSystemTitle: "Alberta K-12 Structure & Public System",
      islamicSchoolsTitle: "Accredited Islamic Alternative Schools",
      checklistTitle: "Mandatory School Document Checklist",
      welcomeCentreNotice: "Centralized CBE Welcome Centre (1221 8th St SW) handles newcomer intake and English as an Additional Language (ELL) benchmark assessments.",
      lotteryNotice: "Suburban school lotteries: Rapidly growing suburbs (Evanston, Saddleridge) experience lotteries. Register early to avoid reassignment to overflow schools."
    },
    islamicLife: {
      title: "Muslim Life in Calgary",
      subtitle: "Mosques, Islamic education, youth programs, and verified halal grocery networks",
      filterAll: "All Facilities",
      filterNearHome: "Near Potential Homes",
      filterYouth: "Youth Programs",
      filterQuran: "Tahfeez al-Quran",
      filterArabic: "Arabic Language Classes",
      mosquesTitle: "Major Mosques & Islamic Centres",
      groceriesTitle: "Specialty Halal Grocers & Meat Supply Chains",
      prayerTimeDisclaimer: "Prayer Times Note: Calgary prayer times vary significantly by season (Fajr ~3:45 AM in June vs 6:45 AM in Dec; Isha ~11:15 PM in June vs 6:00 PM in Dec). Follow your local mosque for exact Iqamah times."
    },
    bankingCredit: {
      bankingTitle: "Newcomer Banking Comparison",
      creditTitle: "Canadian Credit Architecture & 12-Month Blueprint",
      pureCashNotice: "Promotional 'value up to $X' often mixes fee savings and reward points. We separate pure cash bonuses from fee waivers below.",
      creditFactorsTitle: "The 5 Pillars of Canadian Credit (Equifax & TransUnion)",
      twelveMonthPlanTitle: "12-Month Newcomer Credit Building Blueprint",
      statementDateHack: "The Statement Date Hack: Pay your credit balance 2 days BEFORE the monthly statement closing date so the credit bureaus only ever see <15% utilization."
    },
    telecomUtilities: {
      internetTitle: "Home Broadband: TELUS PureFibre vs. Rogers Xfinity",
      mobileTitle: "Mobile 5G Plans & Family Cost",
      utilitiesTitle: "Alberta Utilities Architecture (ENMAX Municipal Consolidated Bill)",
      fibreVsCable: "TELUS PureFibre offers symmetrical upload/download speeds. Rogers Xfinity provides cable broadband with asymmetrical upload.",
      saudiCallingTitle: "Calling to Saudi Arabia (+966)",
      municipalBillingTitle: "City of Calgary Municipal Services ($139.72 baseline for water, sewer, carts)",
      seasonalComparison: "Seasonal Utility Burden: Summer (~$340–$455/mo) vs Deep Winter (~$520–$700/mo)"
    },
    calculators: {
      colTitle: "Family Cost of Living Calculator",
      reserveTitle: "Arrival Cash Reserve Calculator",
      lifestyleBasic: "Basic (Budget Conscious)",
      lifestyleComfortable: "Comfortable (Recommended)",
      lifestylePremium: "Premium (Executive Standard)",
      landingReserveTitle: "How Much Cash Should We Land With?",
      reserveMinimum: "Minimum Landing Reserve",
      reserveRecommended: "Recommended Landing Reserve",
      reserveComfortable: "Comfortable Reserve"
    },
    drivingCars: {
      drivingTitle: "Driving in Alberta with a Saudi Licence",
      carBuyingTitle: "Family Car Buying Command Center",
      saudiShippingTitle: "Should You Ship Your Car from Saudi Arabia?",
      nonReciprocalNotice: "Saudi Arabia is NON-RECIPROCAL in Alberta. You must pass Class 7 knowledge test, submit translated Moroor driving records to SIU for experience credit, and pass the single Class 5 road test.",
      importWarningNotice: "DO NOT SHIP MODERN GCC VEHICLES: Non-US vehicles under 15 years old are legally inadmissible under Transport Canada MVSA regulations. Sell your car in Saudi Arabia.",
      taxSavingNotice: "Alberta 0% PST Advantage: Buying a $50,000 vehicle in Alberta saves $4,000 in cash compared to Ontario's 13% HST.",
      winterTireNotice: "Winter tires (Michelin X-Ice or Bridgestone Blizzak) on dedicated rims ($1,000–$1,500) are essential for family safety on black ice."
    },
    cityIndex: {
      title: "Canada Family Relocation Value Index",
      subtitle: "Empirical multi-city evaluation of 9 Canadian metropolitan areas",
      calgaryVsEdmonton: "Calgary vs. Edmonton Deep Dive",
      calgaryVsRiyadh: "Calgary vs. Riyadh Lifestyle Transition",
      weightsNotice: "Adjustable mathematical model with normalized underlying data.",
      familyValue: "Family Value",
      housingValue: "Housing Value",
      careerValue: "Career Value",
      muslimFit: "Muslim Fit"
    },
    career: {
      title: "Career & Financial Sector Command Center",
      subtitle: "Tailored to Yassir's verified investment background at Albilad Capital",
      profileVerifiedNotice: "Publicly verified affiliation: Albilad Capital (Riyadh, Saudi Arabia). Specific titles or salaries are not inferred without primary documents.",
      employersTitle: "Calgary Financial & Capital Markets Landscape",
      salaryTitle: "2025/2026 Salary Benchmarks (Job Bank & Robert Half)",
      calgaryVsTorontoFinance: "Calgary vs. Toronto Finance Career Trade-Offs"
    },
    videos: {
      title: "Watch Before You Move: Calgary Video Intelligence",
      subtitle: "Curated documentaries and real-life vlogs on winter living, neighbourhood costs, and the Gulf transition",
      watchModalTitle: "Video Walkthrough & Key Takeaways",
      closeModal: "Close Video Player"
    },
    winter: {
      title: "First Winter Survival Guide & Family Lifestyle",
      subtitle: "Practical winter preparation, layering techniques, and outdoor family recreation",
      mustHave: "Must-Have Winter Essentials",
      niceToHave: "Nice-to-Have Comfort Items",
      chinookTitle: "The Chinook Phenomenon",
      sunshineTitle: "Canada's Sunniest Major City"
    },
    plan: {
      title: "My Move Plan & Action Timeline",
      subtitle: "Interactive personalized settlement checklist saved locally in your browser",
      progress: "Settlement Tasks Completed:",
      printableTitle: "Export Printable Move Plan"
    }
  },
  ar: {
    appTitle: "مركز قيادة انتقال ياسر إلى كالغاري",
    appSubtitle: "من الرياض إلى ألبرتا — نظام ذكاء اتخاذ قرار الانتقال العائلي",
    secondaryCopy: "اعرف التكاليف بدقة. اختر الحي المناسب. جهز أطفالك. افهم الأنظمة الكندية. اتخذ قرارك بثقة واطمئنان.",
    nav: {
      dashboard: "الملاءمة التنفيذية",
      realityCheck: "واقع كالغاري الصريح",
      housing: "السكن والإيجارات",
      neighbourhoods: "دليل الأحياء",
      schools: "المدارس والأطفال",
      islamicLife: "الحياة الإسلامية",
      bankingCredit: "المصارف والائتمان",
      telecomUtilities: "الاتصالات وفواتير المنزل",
      calculators: "حاسبات المعيشة",
      drivingCars: "القيادة والسيارات",
      transit: "المواصلات العامة",
      healthcare: "الرعاية الصحية",
      taxes: "الضرائب وصافي الدخل",
      career: "المهنة والقطاع المالي",
      videos: "فيديوهات المعيشة",
      winterLifestyle: "الشتاء وأسلوب الحياة",
      cityIndex: "مؤشر المدن الكندية",
      movePlan: "خطة انتقالي",
      sources: "سجل المصادر"
    },
    common: {
      lastVerified: "آخر تحقق رسمي:",
      source: "المصدر الرسمي",
      openSource: "فتح المصدر الحكومي",
      reportOutdated: "إبلاغ عن بيانات قديمة",
      verified: "مُتحقق منه",
      confidence: "نسبة الموثوقية:",
      monthly: "/شهرياً",
      annually: "/سنوياً",
      cad: "دولار كندي ($)",
      sar: "ريال سعودي (ر.س)",
      currencyToggle: "العملة:",
      saveItem: "حفظ في المفضلة",
      saved: "تم الحفظ",
      printExport: "طباعة تقرير الانتقال (PDF)",
      switchLang: "English",
      current: "سارٍ وحديث",
      recent: "حديث",
      aging: "قيد المراجعة",
      stale: "منتهي / يتطلب تحديث",
      disclaimerText: "المعلومات مقدمة لأغراض التخطيط للانتقال والتوعية. قد تتغير القوانين الحكومية والمصرفية والضريبية. يُرجى دائماً مراجعة المصادر الرسمية المرفقة قبل اتخاذ القرارات الملزمة."
    },
    hero: {
      badge: "نظام ذكاء الانتقال العائلي • الرياض ← كالغاري",
      headline: "هل كالغاري هي الوجهة الكندية الأنسب لعائلتك؟",
      question: "تزويد ياسر وعائلته بمعلومات موثقة ومبنية على مصادر رسمية لاتخاذ قرار انتقال ذكي ومدروس.",
      familySummary: "ملف العائلة: بالغان • 3 أطفال دون 15 سنة • السعودية ← كندا",
      editProfile: "تعديل بيانات العائلة",
      saveProfile: "حفظ التعديلات",
      headOfHousehold: "رب الأسرة",
      targetCity: "المدينة المستهدفة",
      familyMembers: "أفراد العائلة",
      childAges: "أعمار الأبناء",
      numAdults: "البالغين",
      numKids: "الأطفال (<15)",
      immigrationStatus: "الوضع القانوني للهجرة",
      expectedIncome: "الدخل العائلي المتوقع (كندي)",
      initialSavings: "السيولة النقدية المتاحة (كندي)",
      housingPref: "تفضيل السكن"
    },
    decisionDashboard: {
      title: "لوحة القرار التنفيذية",
      subtitle: "مؤشر ملاءمة كالغاري للعائلة محسوب بدقة من 13 معياراً موثقاً",
      overallScore: "مؤشر ملاءمة كالغاري للعائلة",
      methodologyNote: "تُحسب النتيجة رياضياً بناءً على إحصاءات رسمية معلنة دون تحيز مسبق. يمكنك تعديل أوزان المعايير لتناسب أولويات عائلتك الخاصة.",
      adjustWeights: "تخصيص أوزان المعايير",
      resetWeights: "إعادة تعيين للأصل",
      strength: "نقطة قوة بارزة في كالغاري",
      tradeoff: "تحدٍ يتطلب الاستعداد"
    },
    realityCheck: {
      title: "واقع كالغاري بكل شفافية",
      subtitle: "تقييم عادل ومتوازن لميزات كالغاري الحقيقية وأبرز التحديات التي ستواجه عائلة قادمة من الرياض",
      whyCalgary: "لماذا كالغاري؟ (نقاط القوة)",
      whyCalgaryDesc: "أسباب تجعل العائلات تستقر وتنجح في كالغاري",
      whatMayBeDifficult: "ما قد يكون صعباً (التحديات الحقيقية)",
      whatMayBeDifficultDesc: "نقاط احتكاك واقعية يجب التخطيط لها مبكراً"
    },
    housing: {
      title: "مركز قيادة السكن والإيجارات",
      subtitle: "إحصاءات الإيجار الموثقة، التأمين، وعينات واقعية لأسعار المنازل المناسبة لعائلة من 5 أفراد",
      toggle3Bed: "إيجارات 3 غرف نوم",
      toggle4Bed: "إيجارات 4 غرف نوم",
      cmhcAverage: "متوسط عقود الإيجار القائمة (CMHC)",
      rentalsCaAsking: "سعر الإيجار المعروض حالياً في السوق",
      methodologyDiffTitle: "فارق منهجي جوهري: بيانات CMHC مقابل أسعار السوق الحالية",
      methodologyDiffText: "تقيس مؤسسة الإسكان الكندية (CMHC) جميع العقود السارية (بما فيها عقود قديمة موقعة قبل سنوات). بينما يقيس موقع Rentals.ca الوحدات الشاغرة المعروضة اليوم. بالنسبة للقادم الجديد، سعر السوق المعروض هو التكلفة الحقيقية للدخول.",
      sampleListings: "عينات واقعية لبيوت معروضة في السوق",
      sqft: "مساحة السكن",
      deposit: "مبلغ التأمين (حد أقصى إيجار شهر)",
      estUtilities: "الفواتير المتوقعة"
    },
    neighbourhoods: {
      title: "مستكشف أحياء كالغاري العائلية",
      subtitle: "تحليل شامل لقطاعات كالغاري السكنية لعائلة مسلمة مكونة من خمسة أفراد",
      filterAll: "جميع الأحياء",
      filterMuslim: "الأفضل للمجتمع المسلم",
      filterBudget: "الأفضل اقتصادياً",
      filterSchools: "الأفضل للمدارس الحكومية",
      filterTransit: "الأفضل في المواصلات والقطار",
      filterExecutive: "الأحياء التنفيذية الفاخرة",
      catchmentWarning: "تنبيه نظام المدارس: تسجيل المدارس الحكومية مقيد بدقة بعنوان السكن؛ تحقق دائماً من المدرسة المخصصة لعنوانك قبل توقيع عقد الإيجار.",
      commuteDowntown: "المسافة لوسط المدينة:",
      nearestMosque: "أقرب مسجد:",
      nearestSchool: "أقرب مدرسة إسلامية / كبرى:",
      halalGroceries: "توفر الأغذية والملاحم الحلال:"
    },
    schools: {
      title: "مركز قيادة المدارس والتعليم للأطفال",
      subtitle: "النظام التعليمي في ألبرتا، تقييم اللغة الإنجليزية للطلاب الجدد، والمدارس الإسلامية المعتمدة",
      childAgesTitle: "بطاقات التوزيع العمري والصفوف للأطفال الثلاثة",
      albertaSystemTitle: "هيكلية التعليم في ألبرتا والنظام الحكومي",
      islamicSchoolsTitle: "المدارس الإسلامية البديلة المعتمدة والممولة",
      checklistTitle: "قائمة الوثائق الإلزامية لتسجيل المدارس",
      welcomeCentreNotice: "مركز الترحيب بالطلاب الجدد (1221 شارع 8 جنوب غرب) يتولى تسجيل الطلاب الجدد واختبار تحديد مستوى اللغة الإنجليزية (ELL).",
      lotteryNotice: "نظام القرعة في المدارس المزدحمة: بعض الضواحي سريعة النمو تواجه ضغطاً؛ التسجيل المبكر يضمن عدم التحويل لمدارس بعيدة."
    },
    islamicLife: {
      title: "الحياة الإسلامية في كالغاري",
      subtitle: "المساجد الكبرى، التعليم الشرعي، برامج الشباب، وشبكات توفر اللحوم والأغذية الحلال",
      filterAll: "جميع المرافق",
      filterNearHome: "الأقرب للأحياء المقترحة",
      filterYouth: "برامج وأنشطة الشباب",
      filterQuran: "حلقات تحفيظ القرآن",
      filterArabic: "تعليم اللغة العربية",
      mosquesTitle: "المساجد والمراكز الإسلامية الرئيسية",
      groceriesTitle: "المتاجر الكبرى وملاحم الذبح الحلال",
      prayerTimeDisclaimer: "تنبيه مواقيت الصلاة: تتفاوت أوقات الصلاة في كالغاري بشكل كبير بين الصيف والشتاء (الفجر ~3:45 ص صيفاً مقابل 6:45 ص شتاءً؛ والعشاء ~11:15 م صيفاً مقابل 6:00 م شتاءً). اتبع مسجد حيك لأوقات الإقامة."
    },
    bankingCredit: {
      bankingTitle: "مقارنة باقات القادمين الجدد في البنوك الكندية",
      creditTitle: "النظام الائتماني الكندي وخطة بناء التقييم لـ 12 شهراً",
      pureCashNotice: "العروض الترويجية غالباً ما تدمج بين توفير الرسوم ونقاط المكافآت. نحن نفصل الكاش المالي المباشر عن الإعفاء من الرسوم بوضوح.",
      creditFactorsTitle: "الركائز الخمس للتقييم الائتماني (Equifax و TransUnion)",
      twelveMonthPlanTitle: "خطة الأشهر الاثني عشر لبناء الائتمان للقادم الجديد",
      statementDateHack: "حيلة تاريخ صدور الفاتورة: سدد معظم رصيد بطاقتك قبل يومين من تاريخ صدور كشف الحساب لتسجيل نسبة استغلال أقل من 15% دائماً."
    },
    telecomUtilities: {
      internetTitle: "الإنترنت المنزلي: ألياف تيلوس البصرية مقابل كيبل روجرز",
      mobileTitle: "باقات الهاتف المحمول 5G وتكلفة الخطوط العائلية",
      utilitiesTitle: "فواتير خدمات المنزل في ألبرتا (فاتورة إنماكس الموحدة للبلدية)",
      fibreVsCable: "توفر ألياف تيلوس البصرية سرعات متماثلة للرفع والتحميل، بينما يوفر كيبل روجرز سرعات رفع محدودة.",
      saudiCallingTitle: "الاتصال بالمملكة العربية السعودية (+966)",
      municipalBillingTitle: "رسوم بلدية كالغاري الموحدة (139.72 دولار أساسي للمياه والصرف وحاويات القمامة)",
      seasonalComparison: "الفارق الموسمي للفواتير: الصيف (340-455 دولار/شهر) مقابل ذروة الشتاء (520-700 دولار/شهر)"
    },
    calculators: {
      colTitle: "حاسبة تكاليف المعيشة العائلية الشهرية",
      reserveTitle: "حاسبة السيولة النقدية المطلوبة عند الوصول",
      lifestyleBasic: "المستوى الأساسي (اقتصادي)",
      lifestyleComfortable: "المستوى المريح (الموصى به)",
      lifestylePremium: "المستوى الفاخر (تنفيذي)",
      landingReserveTitle: "كم من المال يجب أن نصطحب معنا عند السفر؟",
      reserveMinimum: "الحد الأدنى للسيولة النقدية",
      reserveRecommended: "السيولة الموصى بها للاستقرار المريح",
      reserveComfortable: "الاحتياطي المالي الموسع"
    },
    drivingCars: {
      drivingTitle: "القيادة في ألبرتا برخصة القيادة السعودية",
      carBuyingTitle: "مركز قيادة شراء سيارة عائلية في كندا",
      saudiShippingTitle: "هل تشحن سيارتك من السعودية إلى كندا؟",
      nonReciprocalNotice: "الرخصة السعودية غير مشمولة بالتبديل المباشر. يتطلب الأمر اجتياز الاختبار النظري، وتقديم برنت المرور المترجم لوحدة SIU لاعتماد الخبرة، واجتياز اختبار القيادة العملي.",
      importWarningNotice: "تحذير: لا تشحن سيارتك الخليجية! يُمنع استيراد سيارات الخليج الأقل من 15 سنة قانونياً؛ بيع سيارتك في الرياض واشترِ سيارة دفع رباعي في ألبرتا.",
      taxSavingNotice: "ميزة 0% ضريبة مبيعات: شراء سيارة بـ 50 ألف دولار في ألبرتا يوفر 4000 دولار كاش مقارنة بضريبة أونتاريو (13%).",
      winterTireNotice: "طقم الإطارات الشتوية المخصصة على جنوط مستقلة (1000 - 1500 دولار) ضرورة قصوى لسلامة العائلة على الجليد."
    },
    cityIndex: {
      title: "مؤشر قيمة انتقال العائلات في كندا",
      subtitle: "مقارنة إحصائية دقيقة وموثقة بين 9 مدن كندية كبرى",
      calgaryVsEdmonton: "مقارنة تفصيلية: كالغاري مقابل إدمونتون",
      calgaryVsRiyadh: "الفروقات الحياتية: كالغاري مقابل الرياض",
      weightsNotice: "نموذج رياضي قابل للتعديل بالكامل مبني على بيانات رسمية موثقة.",
      familyValue: "قيمة العائلة",
      housingValue: "قيمة السكن",
      careerValue: "الفرص المهنية",
      muslimFit: "البيئة الإسلامية"
    },
    career: {
      title: "مركز قيادة المسار المهني والقطاع المالي",
      subtitle: "مخصص لخلفية ياسر المهنية المؤكدة في شركة البلاد المالية بالرياض",
      profileVerifiedNotice: "الارتباط المؤسسي المؤكد رسمياً: شركة البلاد المالية (الرياض، السعودية). لا يتم افتراض مسميات أو رواتب دون وثائق رسمية.",
      employersTitle: "أبرز جهات التوظيف المالي وأسواق المال في كالغاري",
      salaryTitle: "متوسطات الرواتب لعام 2025/2026 (بنك الوظائف الكندي وروبرت هالف)",
      calgaryVsTorontoFinance: "المقارنة المهنية بين العمل المالي في كالغاري وتورونتو"
    },
    videos: {
      title: "شاهد قبل أن تنتقل: تجارب واقعية في كالغاري",
      subtitle: "فيديوهات وثائقية منتقاة بعناية حول معيشة العائلات، مصاريف الشتاء، وتجربة الانتقال من الخليج لكندا",
      watchModalTitle: "مشاهدة الفيديو وأهم النقاط المستخلصة",
      closeModal: "إغلاق المشغل"
    },
    winter: {
      title: "دليل النجاة من الشتاء الكندي الأول وأسلوب الحياة",
      subtitle: "الاستعداد العملي للبرد، طبقات الملابس العازلة، والأنشطة العائلية في الطبيعة",
      mustHave: "تجهيزات الشتاء الإلزامية (Must-Have)",
      niceToHave: "تجهيزات لراحة إضافية (Nice-to-Have)",
      chinookTitle: "ظاهرة رياح الشينوك الدافئة",
      sunshineTitle: "أكثر مدن كندا إشراقاً وسماءً زرقاء"
    },
    plan: {
      title: "خطة انتقالي وجدول المهام التنفيذي",
      subtitle: "قائمة مهام استقرار تفاعلية مخصصة تحفظ تقدمك تلقائياً في متصفحك",
      progress: "المهام المنجزة بنجاح:",
      printableTitle: "تصدير وطباعة ملف الانتقال الشامل"
    }
  }
};
