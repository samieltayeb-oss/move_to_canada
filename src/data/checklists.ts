export interface ChecklistTask {
  id: string;
  phaseId: 'pre-arrival' | 'landing-day' | '72-hours' | '7-days' | '30-days' | '90-days' | 'first-year';
  title: string;
  arabicTitle: string;
  category: 'Legal / Identity' | 'Banking / Credit' | 'Health' | 'Housing / Utilities' | 'Schools' | 'Driving / Transport' | 'Taxes / Benefits';
  arabicCategory: string;
  description: string;
  arabicDescription: string;
  requiredDocuments: string[];
  officialUrl?: string;
  eligibilityCondition?: string;
  arabicEligibilityCondition?: string;
  isCompleted?: boolean;
}

export interface ChecklistPhase {
  id: string;
  title: string;
  arabicTitle: string;
  timeframe: string;
  arabicTimeframe: string;
  tasks: ChecklistTask[];
}

export const settlementPhases: ChecklistPhase[] = [
  {
    id: 'pre-arrival',
    title: 'Pre-Arrival Preparation',
    arabicTitle: 'التحضير قبل السفر (من الرياض)',
    timeframe: '30 to 90 Days Before Landing',
    arabicTimeframe: 'قبل 30 إلى 90 يوماً من السفر',
    tasks: [
      {
        id: 'task-pre-01',
        phaseId: 'pre-arrival',
        title: 'Saudi Driving Abstract from Moroor (Absher/Mojaz)',
        arabicTitle: 'استخراج برنت سجل القيادة من المرور السعودي (أبشر / موجز)',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Download your official bilingual driving record with QR verification or get stamped English translation from Traffic Police (Moroor). Necessary to bypass the 1-year Alberta learner wait.',
        arabicDescription: 'استخراج شهادة بيان سجل القيادة الرسمية من أبشر أو موجز متضمنة رمز QR ومترجمة للإنجليزية لتخطي فترة التدريب الإلزامية في ألبرتا.',
        requiredDocuments: ['Absher digital driving record', 'Certified English translation if Arabic only'],
        officialUrl: 'https://www.alberta.ca/exchange-non-reciprocal-licence.aspx'
      },
      {
        id: 'task-pre-02',
        phaseId: 'pre-arrival',
        title: 'Auto Insurance Claims-Free Experience Letter (Najm)',
        arabicTitle: 'شهادة خلو الحوادث التأمينية من شركة التأمين / نجم',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Obtain a signed letter on official insurance letterhead confirming your continuous insured years and zero at-fault claims in Saudi Arabia. Saves $1,000–$2,000/yr on Alberta auto insurance.',
        arabicDescription: 'الحصول على خطاب رسمي من شركة التأمين أو نجم يثبت سنوات خلو سجلك من الحوادث لتخفيض تكلفة تأمين السيارة في ألبرتا بنسبة كبيرة.',
        requiredDocuments: ['Official claims-free experience letter from Saudi insurer', 'Certified English translation']
      },
      {
        id: 'task-pre-03',
        phaseId: 'pre-arrival',
        title: "Children's School Transcripts & Immunization Records",
        arabicTitle: 'كشوف الدرجات المدرسية ودفتر التطعيمات للأطفال',
        category: 'Schools',
        arabicCategory: 'المدارس والتعليم',
        description: 'Collect official report cards from previous 2 academic years for all 3 children, plus translated immunization records.',
        arabicDescription: 'تجهيز الشهادات المدرسية لآخر سنتين دراسيتين للأطفال الثلاثة وسجل التطعيمات مترجماً للإنجليزية.',
        requiredDocuments: ['2 years report cards', 'Official immunization records', 'Certified birth certificates']
      },
      {
        id: 'task-pre-04',
        phaseId: 'pre-arrival',
        title: 'Remote Canadian Bank Account Opening',
        arabicTitle: 'فتح حساب بنكي كندي للقادمين الجدد عن بُعد',
        category: 'Banking / Credit',
        arabicCategory: 'المصارف والائتمان',
        description: 'Initiate remote newcomer account application with RBC, TD, Scotiabank, CIBC, or BMO to enable wire transfers prior to flight.',
        arabicDescription: 'بدء إجراءات فتح الحساب البنكي عن بُعد في أحد البنوك الكندية الكبرى لتحويل أموال الاستقرار قبل السفر.',
        requiredDocuments: ['Confirmation of Permanent Residence (COPR) or Work Permit letter', 'Passports'],
        officialUrl: 'https://www.cibc.com/en/personal-banking/new-to-canada.html'
      },
      {
        id: 'task-pre-05',
        phaseId: 'pre-arrival',
        title: 'Confirm Vehicle Disposition in Saudi Arabia',
        arabicTitle: 'بيع السيارة في السعودية وتجنب الشحن لكندا',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Do NOT ship GCC-spec vehicles under 15 years old. Sell vehicle in Saudi Arabia to avoid border seizure and financial loss under Transport Canada rules.',
        arabicDescription: 'تأكيد بيع السيارة في السعودية وعدم شحنها؛ لأن جمارك كندا تمنع دخول سيارات الخليج الأقل من 15 عاماً وفقاً لمعايير السلامة الكندية.',
        requiredDocuments: ['Vehicle sale contract in KSA']
      }
    ]
  },
  {
    id: 'landing-day',
    title: 'Landing Day at Port of Entry',
    arabicTitle: 'يوم الوصول ومنفذ الدخول الجمركي',
    timeframe: 'Day of Arrival (Airport POE)',
    arabicTimeframe: 'يوم الوصول في المطار',
    tasks: [
      {
        id: 'task-land-01',
        phaseId: 'landing-day',
        title: 'CBSA Border Formalities & PR Card Delivery Address',
        arabicTitle: 'إجراءات الجوازات والجمارك الكندية وتسجيل عنوان بطاقة الإقامة',
        category: 'Legal / Identity',
        arabicCategory: 'الهوية والشؤون القانونية',
        description: 'Present passports, immigrant visas, and COPR documents to CBSA officers. Provide Canadian forwarding address for PR cards.',
        arabicDescription: 'تقديم الجوازات وتأشيرات الإقامة لوثائق COPR لضباط الجمارك، وتقديم العنوان الكندي لإرسال بطاقات الإقامة الدائمة.',
        requiredDocuments: ['Passports', 'COPR documents', 'Temporary accommodation address in Calgary']
      },
      {
        id: 'task-land-02',
        phaseId: 'landing-day',
        title: 'CBSA Goods Accounting Declaration (BSF186 / BSF186A)',
        arabicTitle: 'الإقرار الجمركي للأمتعة الشخصية والبضائع اللاحقة',
        category: 'Legal / Identity',
        arabicCategory: 'الهوية والشؤون القانونية',
        description: 'Submit CBSA Form BSF186 listing accompanying luggage and "goods to follow" (unaccompanied sea/air cargo) to secure 100% exemption from Canadian customs duty and GST.',
        arabicDescription: 'تقديم نموذج BSF186 للأمتعة المصاحبة والشحنات اللاحقة للحصول على إعفاء جمركي وضريبي كامل كقادم جديد.',
        requiredDocuments: ['Itemized inventory list with serial numbers and values', 'CBSA Form BSF186']
      },
      {
        id: 'task-land-03',
        phaseId: 'landing-day',
        title: 'Currency Reporting Declaration (if ≥ $10,000 CAD)',
        arabicTitle: 'الإفصاح المالي عن المبالغ النقدية (10 آلاف دولار فما فوق)',
        category: 'Banking / Credit',
        arabicCategory: 'المصارف والائتمان',
        description: 'If carrying $10,000 CAD or more in cash, bank drafts, or traveler cheques, complete Form E677. There is NO tax or limit, but failure to declare is an offense.',
        arabicDescription: 'إذا كانت المبالغ النقدية المصاحبة تعادل 10 آلاف دولار كندي أو أكثر، يجب الإفصاح عنها بنموذج E677 رسمياً (لا توجد ضرائب على أموالك ولكن الإفصاح إلزامي).',
        requiredDocuments: ['CBSA Form E677']
      }
    ]
  },
  {
    id: '72-hours',
    title: 'First 72 Hours (Identity & Connectivity)',
    arabicTitle: 'أول 72 ساعة (الهوية والاتصالات)',
    timeframe: 'Days 1 to 3 in Calgary',
    arabicTimeframe: 'الأيام 1 إلى 3 في كالغاري',
    tasks: [
      {
        id: 'task-72-01',
        phaseId: '72-hours',
        title: 'Obtain Social Insurance Number (SIN) at Service Canada',
        arabicTitle: 'استخراج رقم التأمين الاجتماعي (SIN) من سيرفس كندا',
        category: 'Legal / Identity',
        arabicCategory: 'الهوية والشؤون القانونية',
        description: 'Visit a Service Canada Centre in person (e.g. Harry Hays Building Downtown, 220 4th Ave SE). Paper confirmation is printed on the spot.',
        arabicDescription: 'زيارة أحد مراكز سيرفس كندا شخصياً مصطحباً الجواز ووثيقة الإقامة؛ يتم تسليمك الورقة الرسمية برقم SIN المكون من 9 أرقام فوراً.',
        requiredDocuments: ['Original Passports', 'COPR confirmation document or valid Work Permit'],
        officialUrl: 'https://www.canada.ca/en/employment-social-development/services/sin.html'
      },
      {
        id: 'task-72-02',
        phaseId: '72-hours',
        title: 'Activate Canadian Mobile Lines & Local Phone Numbers',
        arabicTitle: 'تفعيل خطوط الهاتف الكندية برقم محلي',
        category: 'Housing / Utilities',
        arabicCategory: 'السكن والخدمات',
        description: 'Purchase 2 postpaid mobile plans (TELUS, Rogers, Koodo, Fido, Freedom, Public Mobile). Essential for 2FA on banks, CRA, and registry appointments.',
        arabicDescription: 'شراء خطي هاتف محمول بفاتورة شهرية؛ الرقم الكندي إلزامي لرموز التحقق الثنائي للبنوك ومواعيد الدوائر الحكومية.',
        requiredDocuments: ['Passport', 'Canadian credit/debit card or ID']
      },
      {
        id: 'task-72-03',
        phaseId: '72-hours',
        title: 'In-Branch Bank Account Verification & Debit/Credit Cards',
        arabicTitle: 'زيارة الفرع البنكي لتفعيل الحساب واستلام بطاقات السحب والائتمان',
        category: 'Banking / Credit',
        arabicCategory: 'المصارف والائتمان',
        description: 'Complete in-person KYC verification at your bank, collect Interac debit cards, and finalize your first newcomer credit card application.',
        arabicDescription: 'زيارة الفرع البنكي لتأكيد الهوية وتفعيل الحسابات واستلام بطاقات الصراف (Interac Debit) والتقديم على البطاقة الائتمانية الأولى.',
        requiredDocuments: ['Passports', 'COPR / PR confirmation', 'SIN paper confirmation', 'Temporary proof of Calgary address']
      }
    ]
  },
  {
    id: '7-days',
    title: 'First 7 Days (Health & Mobility)',
    arabicTitle: 'أول 7 أيام (الصحة والرخصة والمواصلات)',
    timeframe: 'Days 4 to 7 in Calgary',
    arabicTimeframe: 'الأيام 4 إلى 7 في كالغاري',
    tasks: [
      {
        id: 'task-7d-01',
        phaseId: '7-days',
        title: 'Register for Alberta Health Care Insurance Plan (AHCIP)',
        arabicTitle: 'التسجيل في التأمين الصحي الحكومي لألبرتا (AHCIP)',
        category: 'Health',
        arabicCategory: 'الرعاية الصحية',
        description: 'Apply in person at an Alberta Registry Agent office. For international arrivals moving directly to Alberta, coverage starts retroactive to the day you establish residence with ZERO waiting period.',
        arabicDescription: 'التقديم في مكاتب السجل المدني (Registry)؛ يبدأ التأمين الصحي بأثر رجعي من تاريخ وصولك وإقامتك في ألبرتا دون أي فترة انتظار للمهاجرين المباشرين.',
        requiredDocuments: ['Passports', 'COPR / PR card or valid Work Permit', 'Proof of Alberta address (lease, utility bill, bank letter)'],
        officialUrl: 'https://www.alberta.ca/ahcip-apply.aspx'
      },
      {
        id: 'task-7d-02',
        phaseId: '7-days',
        title: "Pass Class 7 Driver's Knowledge & Vision Test",
        arabicTitle: 'اجتياز اختبار قيادة الفئة 7 النظري وفحص النظر',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Take the 30-question computer test at a registry office. Surrender Saudi licence and submit translated Moroor record for SIU experience verification.',
        arabicDescription: 'تقديم اختبار قواعد وإشارات المرور النظري (30 سؤالاً على الكمبيوتر)، وتسليم الرخصة السعودية مع تقرير المرور المترجم لاعتماد سنوات الخبرة السابقة.',
        requiredDocuments: ['Saudi physical driver licence', 'Translated Moroor record', 'Passport', 'Proof of address'],
        officialUrl: 'https://www.alberta.ca/exchange-non-reciprocal-licence.aspx'
      },
      {
        id: 'task-7d-03',
        phaseId: '7-days',
        title: 'Purchase Monthly Calgary Transit Passes',
        arabicTitle: 'شراء اشتراكات مواصلات كالغاري الشهرية',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Purchase monthly passes ($126/adult). Remember: All children 12 and under ride 100% free with no pass required.',
        arabicDescription: 'شراء كارت المواصلات الشهري للبالغين (126 دولاراً). تذكّر: جميع الأطفال حتى سن 12 عاماً يركبون مجاناً بالكامل دون تذاكر.',
        requiredDocuments: ['Payment card']
      }
    ]
  },
  {
    id: '30-days',
    title: 'First 30 Days (Home & Schooling)',
    arabicTitle: 'أول 30 يوماً (استقرار السكن والمدارس)',
    timeframe: 'Days 8 to 30 in Calgary',
    arabicTimeframe: 'الأيام 8 إلى 30 في كالغاري',
    tasks: [
      {
        id: 'task-30d-01',
        phaseId: '30-days',
        title: 'Sign Long-Term Residential Lease (3 or 4-Bed Home)',
        arabicTitle: 'توقيع عقد إيجار المنزل الدائم (3 أو 4 غرف نوم)',
        category: 'Housing / Utilities',
        arabicCategory: 'السكن والخدمات',
        description: 'Execute standard Alberta tenancy agreement and pay security deposit (maximum one month rent by law in Alberta).',
        arabicDescription: 'توقيع عقد الإيجار السكني وسداد التأمين (الحد الأقصى للتأمين القانوني في ألبرتا هو قيمة إيجار شهر واحد فقط).',
        requiredDocuments: ['Bank balance letter / proof of funds', 'Identification', 'References']
      },
      {
        id: 'task-30d-02',
        phaseId: '30-days',
        title: 'Purchase Mandatory Tenant Insurance',
        arabicTitle: 'شراء تأمين المستأجر الإلزامي للمنزل',
        category: 'Housing / Utilities',
        arabicCategory: 'السكن والخدمات',
        description: 'Secure comprehensive tenant policy ($1M–$2M liability + contents coverage; ~$25–$40/mo). Almost all landlords require proof before key handover.',
        arabicDescription: 'شراء بوليصة تأمين المستأجر لمسؤولية 1 إلى 2 مليون دولار وتغطية الأثاث (حوالي 25-40 دولار شهرياً)؛ يطلبها الملاك قبل تسليم المفاتيح.',
        requiredDocuments: ['Lease address and possession date']
      },
      {
        id: 'task-30d-03',
        phaseId: '30-days',
        title: 'Set up Utilities (ENMAX Electricity, Gas & Municipal Services)',
        arabicTitle: 'تأسيس خدمات إنماكس (الكهرباء والغاز ومياه البلدية)',
        category: 'Housing / Utilities',
        arabicCategory: 'السكن والخدمات',
        description: 'Contact ENMAX Energy to set up electricity and natural gas. In Calgary, City services (water, sewer, stormwater, waste carts) are automatically consolidated onto the ENMAX bill.',
        arabicDescription: 'الاتصال بشركة إنماكس لربط عدادات الكهرباء والغاز؛ يتم ربط خدمات بلدية كالغاري (الماء والصرف والحاويات) تلقائياً بنفس الفاتورة.',
        requiredDocuments: ['Lease agreement', 'Government photo ID']
      },
      {
        id: 'task-30d-04',
        phaseId: '30-days',
        title: 'School Registration for 3 Children (CBE Welcome Centre / CIS)',
        arabicTitle: 'تسجيل الأطفال الثلاثة في المدارس (مركز الترحيب CBE أو المدارس الإسلامية)',
        category: 'Schools',
        arabicCategory: 'المدارس والتعليم',
        description: 'Complete online registration via SchoolEngage and attend centralized ELL assessment at the CBE Welcome Centre (1221 8 St SW), or finalize enrollment with Calgary Islamic School.',
        arabicDescription: 'استكمال التسجيل الإلكتروني وحضور جلسة تقييم اللغة الإنجليزية في مركز الترحيب بالطلاب الجدد (1221 شارع 8 جنوب غرب)، أو تأكيد القبول بالمدرسة الإسلامية.',
        requiredDocuments: ['Passports', 'COPR / PR documents', 'Birth certificates with translation', 'Proof of Calgary lease address', 'Immunization history']
      },
      {
        id: 'task-30d-05',
        phaseId: '30-days',
        title: 'Apply for Canada Child Benefit (CCB) via CRA',
        arabicTitle: 'التقديم على إعانة الطفل الكندية (CCB) من مصلحة الضرائب',
        category: 'Taxes / Benefits',
        arabicCategory: 'الضرائب والمزايا',
        description: 'Submit CRA Form RC66 (Canada Child Benefits Application) and RC66SCH. Permanent residents are eligible immediately upon landing. Provides up to $679/mo per child under 6 and $573/mo for ages 6–17.',
        arabicDescription: 'إرسال نموذج RC66 لمصلحة الضرائب الكندية؛ يستحق المقيم الدائم الدعم فور وصوله (يصل إلى 679 دولاراً شهرياً للطفل دون 6 سنوات و 573 دولاراً للأعمار 6-17).',
        requiredDocuments: ['CRA Form RC66', 'RC66SCH Status in Canada', 'Proof of birth of children', 'Statement of worldwide income prior to landing'],
        eligibilityCondition: 'Permanent Residents eligible immediately upon landing. Temporary foreign workers on Work Permits are NOT eligible until completing 18 consecutive months of Canadian residency.',
        arabicEligibilityCondition: 'المقيمون الدائمون يستحقون الدعم فوراً. أما حاملو تصاريح العمل المؤقتة فيجب عليهم إكمال 18 شهراً متواصلاً من الإقامة قبل استحقاق الدعم.'
      }
    ]
  },
  {
    id: '90-days',
    title: 'First 90 Days (Full Mobility & Vehicle)',
    arabicTitle: 'أول 90 يوماً (الرخصة الكاملة وشراء السيارة)',
    timeframe: 'Days 31 to 90 in Calgary',
    arabicTimeframe: 'الأيام 31 إلى 90 في كالغاري',
    tasks: [
      {
        id: 'task-90d-01',
        phaseId: '90-days',
        title: 'Book and Pass Single Class 5 Road Test',
        arabicTitle: 'حجز واجتياز اختبار القيادة العملي للفئة 5',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Once SIU approves driving experience credit, book and pass the single Class 5 road test to exit GDL directly to a Full Class 5 licence before the 90-day foreign permit window closes.',
        arabicDescription: 'بعد موافقة وحدة التحقيقات على خبرتك السابقة، احجز واجتز اختبار القيادة العملي للحصول على الرخصة الكاملة قبل انتهاء مهلة الـ 90 يوماً للقيادة بالرخصة الأجنبية.',
        requiredDocuments: ['Class 7 learner licence', 'Registry road test permit booking']
      },
      {
        id: 'task-90d-02',
        phaseId: '90-days',
        title: 'Purchase Family Vehicle & Mount Winter Tires',
        arabicTitle: 'شراء سيارة العائلة وتركيب الإطارات الشتوية',
        category: 'Driving / Transport',
        arabicCategory: 'القيادة والمواصلات',
        description: 'Purchase AWD family vehicle (Highlander, Pilot, Sienna AWD). Enjoy 0% Alberta sales tax advantage. Purchase dedicated set of 4 winter tires on rims ($1,000–$1,500).',
        arabicDescription: 'شراء سيارة عائلية دفع رباعي مع الاستفادة من ميزة 0% ضريبة مبيعات في ألبرتا، وتركيب طقم إطارات شتوية مخصصة على جنوط منفصلة.',
        requiredDocuments: ['Alberta Class 5 driver licence', 'Auto insurance pink card', 'Vehicle bill of sale']
      },
      {
        id: 'task-90d-03',
        phaseId: '90-days',
        title: 'Establish Primary Care Family Physician Intake',
        arabicTitle: 'تسجيل العائلة لدى عيادة طبيب أسرة معتمد',
        category: 'Health',
        arabicCategory: 'الرعاية الصحية',
        description: 'Use albertafindadoctor.ca to connect with clinics affiliated with Primary Care Networks (PCNs) accepting new patients in your neighborhood.',
        arabicDescription: 'استخدام بوابة albertafindadoctor.ca للتسجيل لدى عيادة تقبل مرضى جدد في حيك السكني لمتابعة الفحوصات الدورية للعائلة.',
        requiredDocuments: ['Alberta Personal Health Numbers for all 5 family members']
      }
    ]
  },
  {
    id: 'first-year',
    title: 'First Year Milestones',
    arabicTitle: 'نهاية العام الأول (الضرائب ونضج الائتمان)',
    timeframe: 'Months 4 to 12 in Calgary',
    arabicTimeframe: 'الأشهر 4 إلى 12 في كالغاري',
    tasks: [
      {
        id: 'task-yr-01',
        phaseId: 'first-year',
        title: 'File First Canadian Personal Tax Return by April 30',
        arabicTitle: 'تقديم أول إقرار ضريبي كندي قبل 30 أبريل',
        category: 'Taxes / Benefits',
        arabicCategory: 'الضرائب والمزايا',
        description: 'File federal and Alberta income tax returns. Declares Canadian income and worldwide income from your arrival date onward to recalculate ongoing CCB and GST/HST credits.',
        arabicDescription: 'تقديم الإقرار الضريبي الفدرالي وإقرار ألبرتا عن دخلك منذ تاريخ الوصول، وهو شرط أساسي لاستمرار صرف إعانة الأطفال وإعفاءات الضرائب.',
        requiredDocuments: ['T4 employment slips', 'T5 investment slips', 'Official arrival date records']
      },
      {
        id: 'task-yr-02',
        phaseId: 'first-year',
        title: 'Credit Score Review & Prime Financing Benchmark',
        arabicTitle: 'مراجعة السجل الائتماني والوصول لمرحلة التمويل المتميز (730+)',
        category: 'Banking / Credit',
        arabicCategory: 'المصارف والائتمان',
        description: 'Review credit reports at Equifax and TransUnion. Score should mature into 730–760+ prime range, unlocking prime mortgage and auto financing rates.',
        arabicDescription: 'التحقق من تقييمك الائتماني بعد 12 شهراً من السداد المنضبط؛ يجب أن يصل إلى الفئة الممتازة (730 - 760+) للتأهل لأفضل شروط الرهن العقاري.',
        requiredDocuments: ['Borrowell / Credit Karma accounts']
      }
    ]
  }
];
