export interface CreditFactor {
  name: string;
  arabicName: string;
  weightPercent: number;
  impactLevel: 'Critical' | 'High' | 'Medium' | 'Low';
  description: string;
  arabicDescription: string;
  actionRule: string;
  arabicActionRule: string;
}

export const creditFactors: CreditFactor[] = [
  {
    name: 'Payment History',
    arabicName: 'سجل سداد المدفوعات',
    weightPercent: 35,
    impactLevel: 'Critical',
    description: 'Measures whether you pay all minimum credit card bills, mobile bills, and loan installments on time. A single 30-day late mark damages your score by 50–100 points and persists on your report for 6 years.',
    arabicDescription: 'يقيس مدى التزامك بسداد فواتير البطاقات الائتمانية والهاتف والأقساط في موعدها. التأخر لمدة 30 يوماً يخفض التقييم 50-100 نقطة ويظل مسجلاً لمدة 6 سنوات.',
    actionRule: 'Always pay at least the minimum statement balance 3 business days before the due date. Set up automatic bill payment.',
    arabicActionRule: 'احرص دائماً على سداد الحد الأدنى على الأقل قبل تاريخ الاستحقاق بثلاثة أيام عمل، وفعل الدفع التلقائي.'
  },
  {
    name: 'Credit Utilization Ratio',
    arabicName: 'نسبة استغلال الائتمان',
    weightPercent: 30,
    impactLevel: 'Critical',
    description: 'The percentage of your total available credit currently in use (Balance ÷ Limit). Algorithms evaluate both individual cards and cumulative revolving credit.',
    arabicDescription: 'النسبة المئوية المستخدمة من إجمالي الحد الائتماني المتاح (الرصيد المستحق مقسوماً على الحد الائتماني).',
    actionRule: 'Keep utilization under 30% at all times, and ideally under 10%–20% on your monthly Statement Closing Date.',
    arabicActionRule: 'حافظ على استخدام أقل من 30% من حد بطاقتك دائماً، والمثالي أقل من 10% إلى 20% في تاريخ صدور كشف الحساب.'
  },
  {
    name: 'Length of Credit History',
    arabicName: 'عمر السجل الائتماني',
    weightPercent: 15,
    impactLevel: 'Medium',
    description: 'The average age of all your active credit trade lines and the age of your oldest active account in Canada.',
    arabicDescription: 'متوسط عمر الحسابات الائتمانية النشطة وعمر أقدم بطاقة أو حساب ائتماني مسجل باسمك في كندا.',
    actionRule: 'Never close the first credit card you open in Canada. Keep it active with an occasional small recurring bill (e.g. streaming subscription).',
    arabicActionRule: 'إياك أن تلغي أول بطاقة ائتمانية تفتحها في كندا؛ احتفظ بها دائماً لترسيخ تاريخ ائتماني طويل.'
  },
  {
    name: 'Credit Mix & Account Diversity',
    arabicName: 'تنوع أنواع الائتمان',
    weightPercent: 10,
    impactLevel: 'Low',
    description: 'Demonstrating successful management of different credit forms: revolving debt (credit cards, lines of credit) and installment loans (auto loan, personal loan, mortgage).',
    arabicDescription: 'إثبات القدرة على إدارة أنواع مختلفة من التمويل: الائتمان المتجدد (بطاقات الائتمان) والقروض المقسطة (تمويل السيارات والرهن العقاري).',
    actionRule: 'Do not take loans just to build credit, but maintain healthy diversification over 12–24 months.',
    arabicActionRule: 'لا تأخذ قروضاً فقط لبناء الائتمان، بل احرص على تنوع طبيعي لحساباتك عبر 12 إلى 24 شهراً.'
  },
  {
    name: 'New Credit Inquiries & Hard Pulls',
    arabicName: 'الاستعلامات الائتمانية الجديدة',
    weightPercent: 10,
    impactLevel: 'Low',
    description: 'Occurs when a financial lender checks your credit bureau report to decide on a new lending application. Multiple hard pulls within a short window signal financial risk.',
    arabicDescription: 'تحدث عند تقديم طلب للحصول على تمويل جديد ويقوم البنك بفحص تقريرك الائتماني. تعدد الاستفسارات يقلل النقاط مؤقتاً.',
    actionRule: 'Do not apply for multiple credit cards at different banks upon landing. Space applications out by at least 4–6 months.',
    arabicActionRule: 'لا تقدم على عدة بطاقات ائتمانية في بنوك متعددة عند وصولك. اجعل هناك فاصلاً لا يقل عن 4-6 أشهر بين كل طلب.'
  }
];

export interface CreditTimelineStep {
  month: string;
  arabicMonth: string;
  title: string;
  arabicTitle: string;
  targetScore: string;
  actions: string[];
  arabicActions: string[];
  operationalSecret: string;
  arabicOperationalSecret: string;
}

export const newcomerCreditPlan: CreditTimelineStep[] = [
  {
    month: 'Month 1',
    arabicMonth: 'الشهر الأول',
    title: 'Foundation Setup & Anchoring Trade Lines',
    arabicTitle: 'تأسيس الحسابات وربط السجل المالي',
    targetScore: 'Unscorable (Thin File)',
    actions: [
      'Open your Newcomer Banking Package at chosen bank (RBC, TD, CIBC, Scotiabank, or BMO).',
      'Obtain your 1st Unsecured Newcomer Credit Card ($1,000–$5,000 limit) without Canadian credit history.',
      'Register a Canadian postpaid mobile phone plan (Rogers, Telus, Bell, Koodo, Fido) in your legal name.',
      'Optional: Set up rent reporting to credit bureaus via services like FrontLobby.'
    ],
    arabicActions: [
      'فتح باقة القادمين الجدد المصرفية لدى البنك المختار (RBC، TD، CIBC، Scotiabank، أو BMO).',
      'الحصول على أول بطاقة ائتمانية بدون سجل ائتماني مسبق بحد 1000 إلى 5000 دولار.',
      'استخراج خط هاتف محمول كندي بفاتورة شهرية باسمك الرسمي لربطه بمكاتب الائتمان.',
      'اختياري: ربط سداد إيجار السكن بالسجل الائتماني عبر منصات موثوقة.'
    ],
    operationalSecret: 'Newcomers arrive as an "unscorable thin file"—you do not start at zero or 300. Scores generate only after 3 to 6 months of continuous account reporting.',
    arabicOperationalSecret: 'القادم الجديد لا يبدأ من الصفر، بل كملف فارغ (Thin File). تبدأ النقاط بالظهور بعد 3 إلى 6 أشهر من السداد المنتظم.'
  },
  {
    month: 'Month 3',
    arabicMonth: 'الشهر الثالث',
    title: 'Statement Date Discipline & The Utilization Hack',
    arabicTitle: 'الانضباط المالي وحيلة تاريخ صدور الفاتورة',
    targetScore: 'Pre-Scoring Maturation',
    actions: [
      'Learn the difference: Statement Closing Date vs. Payment Due Date.',
      'Pay down credit card balances 2 days BEFORE the statement date to report <15% utilization.',
      'Pay off the remaining small balance before the payment due date.',
      'Ensure the postpaid cell phone bill is paid automatically each month.'
    ],
    arabicActions: [
      'فهم الفرق بين: تاريخ صدور كشف الحساب (Statement Date) وتاريخ الاستحقاق (Due Date).',
      'سداد أغلب رصيد البطاقة قبل يومين من صدور كشف الحساب لتسجيل نسبة استغلال أقل من 15%.',
      'سداد الرصيد المتبقي بالكامل قبل موعد الاستحقاق النهائي لتجنب أي فوائد إطلاقاً.',
      'التأكد من سداد فاتورة الهاتف المحمول تلقائياً كل شهر دون تأخير يوم واحد.'
    ],
    operationalSecret: 'Banks report your balance on the STATEMENT DATE, not when you pay your bill. If you max your card and pay it on the due date, the bureau still reports high utilization!',
    arabicOperationalSecret: 'البنوك ترسل رصيدك لمكاتب الائتمان في تاريخ صدور الفاتورة وليس تاريخ السداد. سداد البطاقة مبكراً يضمن تسجيل استخدام منخفض ومثالي.'
  },
  {
    month: 'Month 6',
    arabicMonth: 'الشهر السادس',
    title: 'First Credit Score Generation & Second Trade Line',
    arabicTitle: 'ظهور أول تقييم ائتماني وإضافة خط ائتمان ثانٍ',
    targetScore: '670 – 710 (Good)',
    actions: [
      'Check your official free credit scores via Borrowell (Equifax) and Credit Karma (TransUnion).',
      'Verify there are no reporting errors, incorrect addresses, or missing accounts.',
      'Apply for a 2nd Credit Product (e.g. card from a different payment network: Visa vs Mastercard).',
      'This doubles your total available credit limit, instantly lowering your overall credit utilization ratio.'
    ],
    arabicActions: [
      'التحقق من تقييمك الائتماني المجاني الرسمي عبر Borrowell (Equifax) و Credit Karma (TransUnion).',
      'التأكد من خلو التقرير من أي أخطاء في العناوين أو العمليات.',
      'التقديم على بطاقة ائتمانية ثانية من شبكة دفع مختلفة (فيزا إن كانت الأولى ماستركارد).',
      'البطاقة الثانية تضاعف حدك الائتماني الكلي، مما يخفض نسبة الاستغلال تلقائياً.'
    ],
    operationalSecret: 'A second trade line gives your file depth. Two cards maintained with 10% utilization build a prime score 40% faster than a single card.',
    arabicOperationalSecret: 'وجود خطين ائتمانيين يمنح ملفك عمقاً إحصائياً، ويبني التقييم الممتاز أسرع بنسبة 40% من الاعتماد على بطاقة واحدة.'
  },
  {
    month: 'Month 12',
    arabicMonth: 'الشهر الثاني عشر',
    title: 'Prime Tier Maturity & Full Financing Power',
    arabicTitle: 'النضج الائتماني الكامل والجاهزية للتمويل المتميز',
    targetScore: '730 – 770+ (Excellent / Prime)',
    actions: [
      'Request an unsolicited credit limit increase on Card #1 without a hard credit inquiry.',
      'Qualify for Tier-1 automaker promotional APR financing (0%–3.99% promo loans).',
      'Achieve the 680+ credit score benchmark required for prime A-Lender conventional and insured mortgages under OSFI B-20 rules.',
      'Enjoy executive borrowing privileges without requiring newcomer deposits or co-signers.'
    ],
    arabicActions: [
      'طلب زيادة الحد الائتماني للبطاقة الأولى دون استفسار ائتماني قاسي (Soft pull).',
      'التأهل لعروض تمويل السيارات الترويجية من الدرجة الأولى بنسب فائدة منخفضة.',
      'تحقيق التقييم المطلوب (680+) للرهن العقاري لشراء منزل بأسعار الفائدة الممتازة لدى البنوك الكبرى.',
      'الاستفادة من التسهيلات الائتمانية والتمويلية دون الحاجة لضامن أو ودائع نقدية مجمدة.'
    ],
    operationalSecret: 'At 12 months with flawless on-time reporting and <20% utilization, you are statistically indistinguishable from a Canadian who has lived in the country for decades.',
    arabicOperationalSecret: 'بعد 12 شهراً من الالتزام التام ونسبة استغلال منخفضة، يصبح سجلك الائتماني ممتازاً ومساوياً للمواطنين المقيمين منذ عقود.'
  }
];
