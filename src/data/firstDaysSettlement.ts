export interface ArrivalStep {
  stepNumber: number;
  priorityLabel: 'IMMEDIATE (DAY 1–2)' | 'URGENT (DAY 2–3)' | 'FIRST WEEK (DAY 4–7)' | 'SECOND WEEK (DAY 8–14)';
  title: string;
  arabicTitle: string;
  category: 'Legal Identity (SIN)' | 'Healthcare (AHCIP)' | 'Children Education' | 'Banking & Credit' | 'Driving & Licences';
  arabicCategory: string;
  whyFirst: string;
  arabicWhyFirst: string;
  costCAD: number;
  whereToGo: {
    primaryName: string;
    arabicPrimaryName: string;
    address: string;
    quadrant: string;
    nearestTransit: string;
    openingHours: string;
    googleMapsUrl: string;
    alternativeLocations: {
      name: string;
      address: string;
      quadrant: string;
    }[];
  };
  requiredDocuments: {
    name: string;
    arabicName: string;
    notes: string;
  }[];
  immediateOutput: string;
  arabicImmediateOutput: string;
  proTips: string[];
  arabicProTips: string[];
}

export const calgaryFirstDaysGuide: ArrivalStep[] = [
  {
    stepNumber: 1,
    priorityLabel: 'IMMEDIATE (DAY 1–2)',
    title: 'Obtain Social Insurance Numbers (SIN) for the Entire Family',
    arabicTitle: 'استخراج رقم التأمين الاجتماعي (SIN) لجميع أفراد العائلة',
    category: 'Legal Identity (SIN)',
    arabicCategory: 'الهوية القانونية والعمل (SIN)',
    whyFirst: 'You cannot be placed on Canadian payroll, open full banking facilities, or receive the Canada Child Benefit (CCB) for your 3 children without your 9-digit SIN.',
    arabicWhyFirst: 'رقم التأمين الاجتماعي (SIN) إلزامي للبدء في أي وظيفة، وفتح الحسابات البنكية، واستلام دعم الأطفال الكندي (CCB) لأبنائك الثلاثة.',
    costCAD: 0,
    whereToGo: {
      primaryName: 'Calgary East Service Canada Centre (Marlborough Mall)',
      arabicPrimaryName: 'مركز سيرفيس كندا — شرق كالغاري (مارلبورو مول)',
      address: 'Marlborough Mall, 433 Marlborough Way NE, Suite 140, Calgary, AB T2A 5H5',
      quadrant: 'NE',
      nearestTransit: 'CTrain Blue Line (Marlborough Station) — 3-minute indoor walk',
      openingHours: 'Monday to Friday: 8:30 AM – 4:00 PM (Closed Weekends)',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Service+Canada+Centre+Marlborough+Mall+Calgary',
      alternativeLocations: [
        {
          name: 'Harry Hays Building (Downtown Calgary)',
          address: '220 4th Avenue SE, Suite 150, Calgary, AB T2G 4X3',
          quadrant: 'Downtown / SE'
        },
        {
          name: 'Calgary North Service Canada Centre (Royal Vista)',
          address: '11688 Sarcee Trail NW, Calgary, AB T3R 0A1',
          quadrant: 'NW'
        }
      ]
    },
    requiredDocuments: [
      {
        name: 'Original Passports (All 5 Family Members)',
        arabicName: 'جوازات السفر الأصلية لجميع أفراد الأسرة الخمسة',
        notes: 'Must be physically presented in original form (no photocopies).'
      },
      {
        name: 'Confirmation of Permanent Residence (COPR) or Work Permit',
        arabicName: 'وثيقة تأكيد الإقامة الدائمة (COPR) أو تصريح العمل الأصلي',
        notes: 'Signed and dated by Canadian Border Services Agency (CBSA) at airport landing.'
      },
      {
        name: 'Calgary Residential Address Details',
        arabicName: 'عنوان الإقامة المبدئي في كالغاري',
        notes: 'Temporary Airbnb, hotel, or rental lease address is accepted for in-person issuance.'
      }
    ],
    immediateOutput: 'Official printed Confirmation of SIN letter issued on the spot in 15 minutes with your active 9-digit numbers.',
    arabicImmediateOutput: 'طباعة فورية لكتاب تأكيد رقم التأمين الاجتماعي (SIN) المكون من 9 أرقام وتسليمه لك خلال 15 دقيقة مجاناً.',
    proTips: [
      'Arrive at Service Canada 20 minutes before 8:30 AM opening to avoid long morning lineups.',
      'Apply for Yassir, his spouse, and all 3 children (16, 11, and 5) in a single family counter session.',
      'Never laminate or carry the SIN paper in your daily wallet; store it in a secure fireproof folder at home.',
      'Service Canada no longer issues plastic SIN cards; the printed paper certificate is the permanent official legal proof.'
    ],
    arabicProTips: [
      'احرص على الحضور قبل موعد فتح المركز بـ 20 دقيقة لتفادي طوابير الانتظار.',
      'يمكنك إصدار أرقام التأمين لياسر والزوجة والأبناء الثلاثة (16، 11، 5 سنوات) في نفس الزيارة لدى نفس الموظف.',
      'لا تقم بتغليف الورقة بالبلاستيك الحراري ولا تحملها في محفظتك اليومية، بل احفظها في مكان آمن في المنزل.',
      'كندا أوقفت البطاقات البلاستيكية لـ SIN منذ سنوات، والورقة المطبوعة هي الإثبات القانوني الرسمي المعتمد.'
    ]
  },
  {
    stepNumber: 2,
    priorityLabel: 'IMMEDIATE (DAY 1–2)',
    title: 'Register for Alberta Health Care Insurance Plan (AHCIP Health Cards)',
    arabicTitle: 'التسجيل في التأمين الصحي الحكومي لألبرتا (كرت الصحة AHCIP)',
    category: 'Healthcare (AHCIP)',
    arabicCategory: 'التأمين الصحي الحكومي (AHCIP)',
    whyFirst: 'Alberta is one of the only Canadian provinces with ZERO waiting period. Your coverage begins the exact calendar day you land in Alberta.',
    arabicWhyFirst: 'تتميز مقاطعة ألبرتا بعدم وجود أي فترة انتظار (Zero Waiting Period)؛ يبدأ التأمين الصحي المجاني من يوم وصولك لكالغاري مباشرة.',
    costCAD: 0,
    whereToGo: {
      primaryName: 'Castleridge Registry Agency (Authorized Alberta Registry Agent)',
      arabicPrimaryName: 'مكتب سجلات كاسلريدج الحكومي (شمال شرق كالغاري)',
      address: '55 Castleridge Blvd NE #30, Calgary, AB T3J 3J8 (Next to Superstore)',
      quadrant: 'NE',
      nearestTransit: 'Bus Route 23 / 55 or Saddletowne CTrain connection',
      openingHours: 'Monday to Friday: 9:00 AM – 6:00 PM | Saturday: 9:00 AM – 5:00 PM',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Castleridge+Registry+Calgary',
      alternativeLocations: [
        {
          name: 'Taradale / Saddletowne Registry (Beside Saddletowne CTrain)',
          address: '80 Saddletowne Circle NE, Calgary, AB T3J 0H4',
          quadrant: 'NE'
        },
        {
          name: 'Sunridge Registry Services',
          address: '2525 36 St NE #124, Calgary, AB T1Y 5T4',
          quadrant: 'NE'
        },
        {
          name: 'Downtown Bow Valley Registry',
          address: '250 6 Ave SW, Calgary, AB T2P 3H7',
          quadrant: 'Downtown / SW'
        }
      ]
    },
    requiredDocuments: [
      {
        name: 'Government Form AHC0102',
        arabicName: 'استمارة التسجيل الحكومية AHC0102',
        notes: 'Available free at the registry counter; fill out applicant details for 2 adults + 3 children.'
      },
      {
        name: 'Proof of Canadian Legal Status',
        arabicName: 'إثبات الوضع القانوني في كندا',
        notes: 'Valid Passports + COPR (Confirmation of PR) or valid Work Permit.'
      },
      {
        name: 'Proof of Alberta Physical Residency',
        arabicName: 'إثبات الإقامة الفعلية في مقاطعة ألبرتا',
        notes: 'Signed residential lease agreement in Calgary, utility hookup confirmation (Enmax), or official Canadian bank statement with your Calgary address.'
      }
    ],
    immediateOutput: 'Your official Alberta Personal Health Number (PHN) is generated immediately; plastic cards arrive by mail in 5–10 business days.',
    arabicImmediateOutput: 'يتم إصدار رقم الرعاية الصحية (PHN) فوراً في النظام وتستلم بطاقات التأمين البلاستيكية بالبريد خلال 5 إلى 10 أيام عمل.',
    proTips: [
      'Unlike Ontario or BC, Alberta does NOT charge monthly premiums and has NO 3-month waiting period.',
      'Going to an in-person Registry Agent takes only 10–15 minutes, whereas mailing the form to Edmonton takes 6+ weeks.',
      'Once you receive your 9-digit Personal Health Number (PHN), you can immediately see a doctor at any Calgary walk-in clinic or hospital for $0.',
      'Register for Alberta.ca Account (MyAlberta Digital Identity) to view your family medical records and vaccine entries online.'
    ],
    arabicProTips: [
      'على عكس أونتاريو وبريتش كولومبيا، لا توجد في ألبرتا أي رسوم شهرية ولا فترة انتظار لـ 3 أشهر.',
      'التقديم الشخصي في مكاتب الـ Registry يستغرق 15 دقيقة فقط، بينما التقديم بالبريد يستغرق أكثر من شهر ونصف.',
      'بمجرد استلام رقم التأمين (PHN) المكون من 9 أرقام، يحق لك ولعائلتك مراجعة أي عيادة أو مستشفى طوارئ مجاناً.',
      'قم بإنشاء حساب على بوابة MyAlberta الرقمية لمتابعة سجلاتك الصحية وتطعيمات الأبناء إلكترونياً.'
    ]
  },
  {
    stepNumber: 3,
    priorityLabel: 'URGENT (DAY 2–3)',
    title: 'Register Children for Schooling at CBE Welcome Centre',
    arabicTitle: 'تسجيل الأبناء الثلاثة في المدارس عبر مركز استقبال القادمين (CBE)',
    category: 'Children Education',
    arabicCategory: 'تعليم وتسجيل الأبناء',
    whyFirst: 'School catchment registration in Calgary requires an initial English language assessment and school intake file before children can be admitted to classrooms.',
    arabicWhyFirst: 'تسجيل الأبناء في كالغاري يتطلب فتح ملف وتقييم لغوي (ELL) للوافدين الجدد لدى مجلس التعليم قبل إلحاقهم بالمدارس.',
    costCAD: 0,
    whereToGo: {
      primaryName: 'Calgary Board of Education (CBE) Welcome Centre for Newcomers',
      arabicPrimaryName: 'مركز استقبال القادمين الجدد — مجلس كالغاري للتعليم العام (CBE)',
      address: '7430 5 St SW, Calgary, AB T2H 2G3 (Kingsland Centre)',
      quadrant: 'SW / Central',
      nearestTransit: 'Chinook CTrain Station + Connecting Bus Route 81 / 36',
      openingHours: 'Monday to Friday: 8:00 AM – 4:00 PM (By Appointment / Walk-In Intake)',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=CBE+Kingsland+Welcome+Centre+Calgary',
      alternativeLocations: [
        {
          name: 'Calgary Islamic School — Akram Jomaa Campus (Alternative Program)',
          address: '2612 – 37 Avenue NE, Calgary, AB T1Y 5L2',
          quadrant: 'NE'
        }
      ]
    },
    requiredDocuments: [
      {
        name: "Children's Passports & COPR Documents",
        arabicName: 'جوازات سفر الأطفال وتأشيرات الإقامة الأصلية',
        notes: 'Required for all 3 kids: 16 (High School), 11 (Grade 6), and 5 (Kindergarten).'
      },
      {
        name: 'Certified Translated Birth Certificates',
        arabicName: 'شهادات الميلاد الأصلية المترجمة والمعتمدة',
        notes: 'Must clearly state parents\' legal names.'
      },
      {
        name: 'Saudi School Report Cards / Transcripts (High School)',
        arabicName: 'كشوف الدرجات والشهادات المدرسية من السعودية',
        notes: 'Crucial for the 16-year-old child to transfer Alberta high school credits toward the 100-credit diploma.'
      },
      {
        name: 'Immunization & Vaccination Records',
        arabicName: 'كرت التطعيمات وسجل التحصين (تطبيق صحتي)',
        notes: 'Translated record of childhood immunizations (MMR, Polio, DTaP).'
      },
      {
        name: 'Proof of Calgary Address (Lease Agreement)',
        arabicName: 'عقد إيجار السكن في كالغاري',
        notes: 'Determines the exact catchment area public schools for your neighborhood.'
      }
    ],
    immediateOutput: 'Children are evaluated for English Language Learning (ELL) benchmarks and assigned to their designated community public schools ($0 tuition).',
    arabicImmediateOutput: 'إجراء تقييم اللغة الإنجليزية وتحديد المستوى وتوجيه الأبناء لمدارس حيهم السكني مباشرة بمصروفات 0 دولار.',
    proTips: [
      'Child 1 (Age 16) will enter Senior High School (Grade 11). High school in Alberta is credit-based; bringing certified grade 9 and 10 transcripts from Riyadh saves a full semester.',
      'Child 2 (Age 11) will enter Grade 6 Elementary with provincial achievement preparation.',
      'Child 3 (Age 5) enters Kindergarten (ECS) with $0 tuition in CBE public schools.',
      'If you prefer the Calgary Islamic School (CIS Akram Jomaa), contact their admissions office simultaneously to inquire about waitlist space.'
    ],
    arabicProTips: [
      'الابن الأكبر (16 سنة) سيلتحق بالصف 11 (ثانوي)؛ إحضار كشوف درجات الصف التاسع والعاشر من السعودية يعادل له ساعات دراسية هامة.',
      'الابن الثاني (11 سنة) سيلتحق بالصف السادس الابتدائي.',
      'الابن الأصغر (5 سنوات) سيلتحق بالروضة (Kindergarten) مجاناً 100% في مدارس CBE الحكومية.',
      'إذا رغبت في المدرسة الإسلامية (CIS فرع أكرم جمعة)، تواصل مع إدارة القبول بالتوازي للتحقق من قوائم الانتظار.'
    ]
  },
  {
    stepNumber: 4,
    priorityLabel: 'URGENT (DAY 2–3)',
    title: 'Open Canadian Bank Accounts & Secure Newcomer Credit Cards',
    arabicTitle: 'فتح الحسابات البنكية الكندية واستخراج بطاقات الائتمان للقادمين الجدد',
    category: 'Banking & Credit',
    arabicCategory: 'البنوك والبطاقات الائتمانية',
    whyFirst: 'You need an active Canadian chequing account with void cheque/direct deposit details for employer payroll and paying monthly rent via Interac e-Transfer.',
    arabicWhyFirst: 'الحساب البنكي إلزامي لتحويل الراتب ودفع إيجار المنزل الكترونياً عبر Interac وبدء بناء سجلك الائتماني الكندي.',
    costCAD: 0,
    whereToGo: {
      primaryName: 'Major Canadian Bank Branch (RBC, TD, CIBC, or ATB Financial in NE Calgary)',
      arabicPrimaryName: 'أحد فروع البنوك الكبرى (RBC أو TD أو CIBC أو بنك ألبرتا ATB)',
      address: 'Saddletowne Circle NE or Sunridge Mall Branches (Multiple locations across NE Calgary)',
      quadrant: 'NE',
      nearestTransit: 'Saddletowne CTrain or Sunridge CTrain Stations',
      openingHours: 'Monday to Friday: 9:30 AM – 5:00 PM | Saturday: 9:30 AM – 4:00 PM',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=TD+Bank+Saddletowne+Calgary',
      alternativeLocations: [
        {
          name: 'RBC Royal Bank (Saddletowne NE)',
          address: '80 Saddletowne Circle NE, Calgary, AB T3J 0H4',
          quadrant: 'NE'
        },
        {
          name: 'CIBC Saddletowne Branch',
          address: '110 Saddletowne Circle NE, Calgary, AB T3J 0H4',
          quadrant: 'NE'
        },
        {
          name: 'ATB Financial (Alberta Provincial Bank — Westwinds)',
          address: '3633 Westwinds Dr NE #100, Calgary, AB T3J 5K3',
          quadrant: 'NE'
        }
      ]
    },
    requiredDocuments: [
      {
        name: 'Passports & COPR Documents (Both Adults)',
        arabicName: 'جوازات السفر وتأشيرات الإقامة للبالغين',
        notes: 'Primary identification documents.'
      },
      {
        name: 'Social Insurance Number (SIN) Confirmation',
        arabicName: 'ورقة تأكيد رقم التأمين الاجتماعي (SIN)',
        notes: 'Required for tax reporting on interest and credit bureau profile setup.'
      },
      {
        name: 'Proof of Address (Lease Agreement or Hotel Receipt)',
        arabicName: 'إثبات العنوان السكني في كالغاري',
        notes: 'Used to register your billing profile.'
      }
    ],
    immediateOutput: 'Instant debit card issued with online banking active, direct deposit paperwork printed, and an unsecured newcomer credit card (up to $5,000–$15,000 limit) approved without Canadian credit history.',
    arabicImmediateOutput: 'استلام بطاقة الصراف الآلي وتفعيل الحساب فوراً، مع الموافقة على بطاقة ائتمانية (فيزا/ماستركارد) برصيد 5000 إلى 15000 دولار دون الحاجة لتاريخ ائتماني سابق.',
    proTips: [
      'Take advantage of the 12-month free banking newcomer fee waiver (saves ~$200/yr).',
      'Request an unsecured credit card on Day 1. Start using it immediately for groceries and gas, and pay the balance in full every month to build a 720+ credit score within 6 months.',
      'Ask the advisor to print a "Direct Deposit / Void Cheque Form" which Yassir will need to hand to his Canadian employer for salary direct deposit.'
    ],
    arabicProTips: [
      'استفد من باقة القادمين الجدد المعفية من الرسوم المصرفية لمدة 12 شهراً.',
      'اطلب بطاقة ائتمانية غير مضمونة (Unsecured) من اليوم الأول واستخدمها في المشتريات اليومية وسدد كامل المبلغ شهرياً لرفع تصنيفك الائتماني فوق 720 نقطة.',
      'اطلب من الموظف طباعة نموذج "الإيداع المباشر للراتب" (Direct Deposit Form) لتقديمه لجهة عملك الكندية.'
    ]
  },
  {
    stepNumber: 5,
    priorityLabel: 'FIRST WEEK (DAY 4–7)',
    title: "Exchange Saudi Driver's Licence & Begin Alberta Road Safety",
    arabicTitle: 'معادلة رخصة القيادة السعودية وبدء إجراءات رخصة ألبرتا (الفئة 5)',
    category: 'Driving & Licences',
    arabicCategory: 'رخص القيادة والسيارات',
    whyFirst: 'You can drive on your Saudi licence for up to 90 days as a newcomer, but obtaining your Alberta licence is vital for local ID, auto insurance discounts, and registering an AWD family vehicle.',
    arabicWhyFirst: 'يُسمح لك بالقيادة برخصتك السعودية لمدة 90 يوماً كقادم جديد، لكن استخراج رخصة ألبرتا ضروري لخفض أسعار التأمين وشراء وتسجيل سيارة العائلة.',
    costCAD: 175,
    whereToGo: {
      primaryName: 'Castleridge Registry Agency or Taradale Registry',
      arabicPrimaryName: 'مكتب سجلات كاسلريدج أو تاراديل (نفس مكتب كرت الصحة)',
      address: '55 Castleridge Blvd NE #30, Calgary, AB T3J 3J8',
      quadrant: 'NE',
      nearestTransit: 'Bus 23 / 55 or Saddletowne CTrain',
      openingHours: 'Monday to Friday: 9:00 AM – 6:00 PM | Saturday: 9:00 AM – 5:00 PM',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Castleridge+Registry+Calgary',
      alternativeLocations: [
        {
          name: 'Taradale Registry (Saddletowne Circle NE)',
          address: '80 Saddletowne Circle NE, Calgary, AB T3J 0H4',
          quadrant: 'NE'
        }
      ]
    },
    requiredDocuments: [
      {
        name: "Plastic Saudi Driver's Licence",
        arabicName: 'رخصة القيادة السعودية البلاستيكية الأصلية',
        notes: 'Must be currently valid.'
      },
      {
        name: 'Authenticated Moroor / Absher Driving Record Letter',
        arabicName: 'برنت المرور الرسمي من أبشر أو إدارة المرور',
        notes: 'Must be stamped and translated into English, proving 2+ years of clean driving experience.'
      },
      {
        name: 'Passports & Proof of Alberta Address',
        arabicName: 'جواز السفر وعقد الإيجار في كالغاري',
        notes: 'Mandatory proof of Alberta residency.'
      }
    ],
    immediateOutput: 'Upon passing the computerized 30-question Class 7 knowledge test, your foreign experience is credited, enabling you to book the practical Class 5 road test directly.',
    arabicImmediateOutput: 'بعد اجتياز الاختبار النظري المحوسب (30 سؤالاً)، يتم اعتماد سنوات خبرتك السعودية لتخطي فترة التدريب وحجز الفحص العملي مباشرة.',
    proTips: [
      'Study the official Alberta Driver\'s Guide (free online PDF) before attempting the 30-question computer test ($17 fee). You need 25/30 to pass.',
      'Book 2 hours of winter in-car training with a certified Calgary driving school before taking your road test to master shoulder checks, school zones (30 km/h), and icy stopping distances.',
      'Once you pass the Class 5 road test, your Alberta photo licence acts as your primary Canadian domestic government photo ID.'
    ],
    arabicProTips: [
      'راجع دليل القيادة الرسمي في ألبرتا (PDF مجاني) قبل دخول الامتحان النظري؛ تحتاج للإجابة على 25 سؤالاً من 30 للنجاح.',
      'احجز درساً عملياً لمدة ساعتين مع مدرب معتمد للتعود على فحص النقاط العمياء (Shoulder Check) وحدود سرعة المدارس (30 كم/س) ومسافات التوقف على الجليد.',
      'تعتبر رخصة قيادة ألبرتا هي بطاقة الهوية الرسمية الأساسية المعترف بها في كافة أرجاء كندا والمطارات.'
    ]
  }
];
