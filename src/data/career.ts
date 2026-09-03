export interface EmployerCategory {
  category: string;
  arabicCategory: string;
  employers: string[];
  calgaryMarketFocus: string;
  arabicMarketFocus: string;
  relevanceToFinanceExpat: string;
}

export const calgaryEmployerLandscape: EmployerCategory[] = [
  {
    category: 'Crown & Regional Banking',
    arabicCategory: 'البنوك الإقليمية والحكومية في ألبرتا',
    employers: ['ATB Financial', 'ATB Capital Markets', 'ATB Wealth'],
    calgaryMarketFocus: 'Alberta’s largest regional financial institution ($60B+ assets). Corporate credit, commercial lending, energy transition financing, and private wealth management.',
    arabicMarketFocus: 'أكبر مؤسسة مالية إقليمية في ألبرتا (أكثر من 60 مليار دولار أصول). تمويل تجاري، إدارة ثروات، وتمويل قطاع الطاقة.',
    relevanceToFinanceExpat: 'High demand for experienced corporate credit underwriters, portfolio managers, and commercial loan originators.'
  },
  {
    category: 'Big 5 Canadian Banks (Corporate / Commercial)',
    arabicCategory: 'البنوك الكندية الخمسة الكبرى (الائتمان التجاري)',
    employers: ['RBC Capital Markets', 'TD Securities / Commercial Banking', 'BMO Global Energy', 'CIBC Commercial Banking', 'Scotiabank Global Banking'],
    calgaryMarketFocus: 'Major corporate finance, syndicated lending, and mid-market commercial banking hubs centered in Downtown Calgary corporate towers.',
    arabicMarketFocus: 'مقرات كبرى للتمويل الاستثماري والقروض المشتركة والخدمات المصرفية التجارية للشركات الكبرى.',
    relevanceToFinanceExpat: 'Excellent opportunities for relationship managers, credit risk analysts, and structured finance specialists.'
  },
  {
    category: 'Institutional Buy-Side Asset Management',
    arabicCategory: 'إدارة الأصول والصناديق الاستثمارية الكبرى',
    employers: ['AIMCo (Alberta Investment Management Corp - Calgary Office)', 'Mawer Investment Management'],
    calgaryMarketFocus: 'AIMCo manages ~$160B+ CAD in public pensions and Heritage Fund (Calgary office at Fifth Avenue Place). Mawer manages ~$80B+ in disciplined global equity/fixed income.',
    arabicMarketFocus: 'إدارة أصول مؤسسية وصناديق تقاعد تفوق 160 مليار دولار (AIMCo) وشركات إدارة صناديق استثمارية عالمية (Mawer).',
    relevanceToFinanceExpat: 'Top-tier portfolio management, risk analytics, and global equity research positions.'
  },
  {
    category: 'Energy Commodity Risk & Treasury Floors',
    arabicCategory: 'إدارة المخاطر المالية وتداول السلع لشركات الطاقة',
    employers: ['Enbridge', 'TC Energy', 'Cenovus Energy', 'Suncor Energy', 'Imperial Oil'],
    calgaryMarketFocus: 'Massive proprietary corporate treasuries, commodity price derivatives, foreign exchange risk hedging, and financial counterparty risk desks.',
    arabicMarketFocus: 'غرف تداول مالية ضخمة وإدارة مخاطر أسعار النفط والغاز وعقود المشتقات المالية وإدارة السيولة النقدية.',
    relevanceToFinanceExpat: 'Prime destination for quantitative risk officers, treasury managers, and financial analysts transitioning from Middle East energy/banking sectors.'
  },
  {
    category: 'High-Growth Fintechs',
    arabicCategory: 'شركات التكنولوجيا المالية (Fintech)',
    employers: ['Neo Financial (Calgary HQ)', 'Benevity (Enterprise Purpose)', 'Symend', 'Helcim'],
    calgaryMarketFocus: 'Neo Financial operates Calgary’s largest challenger bank and digital credit platform. Benevity is a global enterprise software unicorn.',
    arabicMarketFocus: 'نيو فاينانشال هي بنك رقمي كندي ناشئ يتخذ كالغاري مقراً رئيسياً، إلى جانب شركات برمجيات مالية عالمية.',
    relevanceToFinanceExpat: 'Dynamic environment for product managers, financial compliance officers, and risk operations specialists.'
  }
];

export interface SalaryBenchmark {
  roleTitle: string;
  arabicRoleTitle: string;
  jobBankNocCode: string;
  lowEndCAD: number;
  medianCAD: number;
  highEndCAD: number;
  bonusExpectation: string;
  sourceNotes: string;
}

export const calgarySalaryBenchmarks: SalaryBenchmark[] = [
  {
    roleTitle: 'Financial Analyst / Investment Analyst',
    arabicRoleTitle: 'محلل مالي / محلل استثمار',
    jobBankNocCode: 'NOC 11101',
    lowEndCAD: 68000,
    medianCAD: 85000,
    highEndCAD: 105000,
    bonusExpectation: '5% – 15% Annual Incentive',
    sourceNotes: 'Job Bank Calgary median hourly rate $45.70 (~$95k annualized) & Robert Half 2026 Guide.'
  },
  {
    roleTitle: 'Senior Financial Analyst (SFA) / Risk Specialist',
    arabicRoleTitle: 'محلل مالي أول / أخصائي مخاطر',
    jobBankNocCode: 'NOC 11101 / 10010',
    lowEndCAD: 92000,
    medianCAD: 108000,
    highEndCAD: 125000,
    bonusExpectation: '10% – 20% Annual Bonus',
    sourceNotes: 'Robert Half 2026 Calgary benchmark: $92k to $121k base.'
  },
  {
    roleTitle: 'Finance Manager / Commercial Credit Manager',
    arabicRoleTitle: 'مدير مالي / مدير ائتمان تجاري',
    jobBankNocCode: 'NOC 10010',
    lowEndCAD: 110000,
    medianCAD: 135000,
    highEndCAD: 165000,
    bonusExpectation: '15% – 30% Annual Performance Incentive',
    sourceNotes: 'Job Bank Calgary Financial Managers median $61.23/hr ($127k base).'
  },
  {
    roleTitle: 'Director of Finance / Corporate Treasury / Risk',
    arabicRoleTitle: 'مدير تنفيذي للمالية / الخزينة والمخاطر',
    jobBankNocCode: 'NOC 10010 / Executive',
    lowEndCAD: 145000,
    medianCAD: 180000,
    highEndCAD: 230000,
    bonusExpectation: '25% – 40%+ Total Cash Bonus / LTIP',
    sourceNotes: 'Robert Half & Mercer Calgary Corporate Finance Executive Survey 2026.'
  }
];

export const verifiedProfileAudit = {
  candidateName: 'Yassir A. E. Abdulrhman',
  publiclyVerifiedAffiliation: 'Albilad Capital (Riyadh, Saudi Arabia)',
  publiclyVerifiedIndustry: 'Islamic Investment Banking, Asset Management & Capital Markets (Bank Albilad)',
  unverifiedAssumptionsWarning: 'In accordance with strict verification protocol, specific internal corporate titles, exact compensation, educational degrees, and immigration file numbers are NOT inferred without certified disclosure. Pathways are designed to leverage verified institutional capital markets and financial experience.',
  arabicUnverifiedAssumptionsWarning: 'وفقاً لمعايير الدقة المهنية الصارمة، لم يتم تخمين المسمى الوظيفي الداخلي الدقيق أو الراتب أو الشهادات الجامعية دون وثيقة رسمية معتمدة. تركز الخطط على خبرته المؤسسية المؤكدة في أسواق المال وإدارة الأصول لدى شركة البلاد المالية.'
};
