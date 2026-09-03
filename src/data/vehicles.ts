export interface FamilyVehicle {
  id: string;
  name: string;
  arabicName: string;
  type: '3-Row Midsize SUV' | 'Minivan (AWD Hybrid)' | 'Crossover SUV';
  seatingCapacity: number;
  powertrain: string;
  fuelEconomyL100km: string;
  winterAwdRating: string;
  usedPriceRangeCAD: string;
  newPriceRangeCAD: string;
  albertaTaxSavingsVsOntarioCAD: number; // 8% PST difference
  familyFitNotes: string;
  arabicFamilyFitNotes: string;
}

export const recommendedFamilyVehicles: FamilyVehicle[] = [
  {
    id: 'toyota-highlander',
    name: 'Toyota Highlander / Grand Highlander AWD',
    arabicName: 'تويوتا هايلاندر / جراند هايلاندر (دفع رباعي)',
    type: '3-Row Midsize SUV',
    seatingCapacity: 7,
    powertrain: '2.5L Hybrid AWD or 2.4L Turbo AWD',
    fuelEconomyL100km: '6.7 L/100km (Hybrid) to 9.8 L/100km (Gas)',
    winterAwdRating: 'Excellent (Electronic On-Demand AWD / Multi-Terrain Select)',
    usedPriceRangeCAD: '$34,000 – $42,000 (2021–2023)',
    newPriceRangeCAD: '$54,000 – $65,000 (2025/2026)',
    albertaTaxSavingsVsOntarioCAD: 4320, // 8% of $54k
    familyFitNotes: 'Benchmark resale value in Alberta, reliable extreme cold-weather starting, adult-friendly 3rd row in Grand Highlander, and outstanding hybrid fuel economy.',
    arabicFamilyFitNotes: 'أعلى قيمة إعادة بيع في ألبرتا، اعتمادية مشهودة في أشد درجات البرودة، صف ثالث مريح وموفر للوقود بنظام الهايبرد.'
  },
  {
    id: 'toyota-sienna-awd',
    name: 'Toyota Sienna AWD Hybrid',
    arabicName: 'تويوتا سيينا دفع رباعي هايبرد (ميني فان)',
    type: 'Minivan (AWD Hybrid)',
    seatingCapacity: 8,
    powertrain: '2.5L 4-Cylinder Hybrid + Electronic AWD (Standard in Canada)',
    fuelEconomyL100km: '6.5 – 6.7 L/100km Combined',
    winterAwdRating: 'Outstanding (Electronic AWD + Low Center of Gravity)',
    usedPriceRangeCAD: '$35,000 – $44,000 (2021–2023)',
    newPriceRangeCAD: '$52,000 – $64,000 (2025/2026)',
    albertaTaxSavingsVsOntarioCAD: 4160,
    familyFitNotes: 'The ultimate family transporter for 5. Power sliding doors protect children from freezing prairie winds and eliminate parking lot door dings. Cavernous cargo area for strollers and luggage.',
    arabicFamilyFitNotes: 'الخيار العائلي الأفضل بلا منازع لخمسة أفراد. الأبواب الجانبية الكهربائية تحمي الأطفال من الرياح الباردة، مع مساحة أمتعة هائلة تتسع لجميع الأغراض.'
  },
  {
    id: 'honda-pilot',
    name: 'Honda Pilot AWD',
    arabicName: 'هوندا بايلوت (دفع رباعي ذكي)',
    type: '3-Row Midsize SUV',
    seatingCapacity: 8,
    powertrain: '3.5L V6 (285 hp) with 10-Speed Automatic & i-VTM4 AWD',
    fuelEconomyL100km: '11.0 – 11.5 L/100km Combined',
    winterAwdRating: 'Best-in-Class Mechanical AWD (Torque-Vectoring i-VTM4)',
    usedPriceRangeCAD: '$32,000 – $40,000 (2021–2023)',
    newPriceRangeCAD: '$55,000 – $66,000 (2025/2026)',
    albertaTaxSavingsVsOntarioCAD: 4400,
    familyFitNotes: 'Exceptional mechanical winter grip on Calgary black ice with dedicated Snow mode. Innovative removable second-row center seat switches between bench and captain chairs.',
    arabicFamilyFitNotes: 'نظام دفع كلي ميكانيكي ذكي هو الأفضل في فئته على الجليد، مع مقعد وسطي قابل للإزالة في الصف الثاني للتبديل بين المقاعد المنفصلة والمتصلة.'
  },
  {
    id: 'subaru-outback-ascent',
    name: 'Subaru Outback / Ascent AWD',
    arabicName: 'سوبارو آوت باك / أسينت (دفع كلي مستمر)',
    type: 'Crossover SUV',
    seatingCapacity: 7,
    powertrain: '2.4L Turbo Boxer + Symmetrical Full-Time AWD',
    fuelEconomyL100km: '9.0 – 10.5 L/100km',
    winterAwdRating: 'Legendary (8.7 inches ground clearance + X-MODE snow/dirt)',
    usedPriceRangeCAD: '$28,000 – $36,000 (2021–2023)',
    newPriceRangeCAD: '$46,000 – $56,000 (2025/2026)',
    albertaTaxSavingsVsOntarioCAD: 3680,
    familyFitNotes: 'Legendary full-time symmetrical AWD traction. High 8.7-inch ground clearance clears unplowed Calgary suburban snowdrifts with ease.',
    arabicFamilyFitNotes: 'دفع رباعي متماثل مستمر شهير بقوته على الجليد مع ارتفاع 220 ملم عن الأرض لتجاوز تراكمات الثلوج بسهولة.'
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
  reciprocalStatus: 'NON-RECIPROCAL',
  arabicReciprocalStatus: 'غير مشمولة باتفاقية التبديل المباشر',
  gracePeriodDays: 90,
  steps: [
    {
      stepNumber: 1,
      title: 'Obtain Saudi Driving Abstract from Moroor (Absher/Mojaz)',
      arabicTitle: 'استخراج برنت سجل القيادة من المرور السعودي (أبشر / موجز)',
      description: 'Before leaving Riyadh, download your official bilingual driving record certificate from the Absher or Mojaz portal with digital QR validation, or visit the Traffic Police (Moroor) for a stamped English translation.',
      arabicDescription: 'قبل مغادرة الرياض، استخرج شهادة بيان سجل القيادة الرسمية من منصة أبشر أو موجز متضمنة رمز الاستجابة السريع (QR) ومترجمة ومعتمدة باللغة الإنجليزية.'
    },
    {
      stepNumber: 2,
      title: 'Obtain Insurance Claims-Free History Letter',
      arabicTitle: 'استخراج شهادة خلو سوابق الحوادث من شركة التأمين (نجم)',
      description: 'Get an official letter from Najm or your Saudi motor insurance company stating your continuous years of claims-free driving. This saves $1,000–$2,000/year on Alberta auto insurance.',
      arabicDescription: 'احصل على شهادة رسمية من شركة التأمين أو منصة نجم تثبت سنوات القيادة دون حوادث؛ هذه الوثيقة توفر 1000 إلى 2000 دولار سنوياً في تأمين كندا.'
    },
    {
      stepNumber: 3,
      title: 'Class 7 Knowledge & Vision Test in Alberta',
      arabicTitle: 'اختبار المعرفة النظري (الفئة 7) وفحص النظر في ألبرتا',
      description: 'Visit an Alberta Registry Agent with your passport, COPR/permit, and proof of address. Pass the 30-question computer test (80% to pass) and basic eye exam.',
      arabicDescription: 'زيارة مكتب خدمات السجل المدني في ألبرتا وتقديم الجواز والإقامة وإثبات العنوان، واجتياز اختبار إشارات وقواعد المرور على الكمبيوتر (30 سؤالاً).'
    },
    {
      stepNumber: 4,
      title: 'Surrender Saudi Licence for SIU Experience Verification',
      arabicTitle: 'تسليم الرخصة السعودية لفحص وحدة التحقيقات الخاصة (SIU)',
      description: 'Surrender your physical Saudi licence and submit the translated Moroor abstract. Service Alberta SIU validates authenticity (takes 2–4 weeks) to credit your foreign driving experience.',
      arabicDescription: 'تسليم الرخصة السعودية الأصلية وتقرير المرور المترجم ليتم اعتمادها من وحدة فحص الوثائق (تستغرق أسبوعين إلى 4 أسابيع) لاحتساب خبرة القيادة السابقة.'
    },
    {
      stepNumber: 5,
      title: 'Single Class 5 Road Test (Direct Exit to Full Licence)',
      arabicTitle: 'اختبار القيادة العملي للفئة 5 (الحصول المباشر على الرخصة الكاملة)',
      description: 'Under Alberta’s April 2023 GDL reform, once 2+ years of foreign experience are approved, passing the single Class 5 road test awards a Full Class 5 (Non-GDL) Licence immediately.',
      arabicDescription: 'بفضل تعديلات نظام القيادة في ألبرتا لعام 2023، بمجرد اعتماد سنتين خبرة قيادة سابقة، يمنحك النجاح في اختبار القيادة العملي رخصة القيادة الكاملة مباشرة دون مراحل تدريبية.'
    }
  ]
};
