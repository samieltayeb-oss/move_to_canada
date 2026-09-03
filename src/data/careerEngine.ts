export type ProfileFieldStatus = 'VERIFIED' | 'USER_PROVIDED' | 'INFERRED' | 'MISSING';

export interface VerifiedProfessionalProfile {
  candidateName: string;
  locationStatus: {
    value: string;
    status: ProfileFieldStatus;
    notes: string;
  };
  employerStatus: {
    value: string;
    status: ProfileFieldStatus;
    notes: string;
  };
  industryStatus: {
    value: string;
    status: ProfileFieldStatus;
    notes: string;
  };
  unverifiedWarning: string;
  arabicUnverifiedWarning: string;
}

export const yassirVerifiedProfile: VerifiedProfessionalProfile = {
  candidateName: 'Yassir A. E. Abdulrhman',
  locationStatus: {
    value: 'Riyadh, Saudi Arabia',
    status: 'VERIFIED',
    notes: 'Confirmed via public indexing and professional registry.'
  },
  employerStatus: {
    value: 'Albilad Capital (Bank Albilad subsidiary)',
    status: 'VERIFIED',
    notes: 'Public indexing associates profile with Albilad Capital in Riyadh.'
  },
  industryStatus: {
    value: 'Islamic Investment Banking, Capital Markets & Asset Management',
    status: 'VERIFIED',
    notes: 'Albilad Capital is Saudi Arabia’s leading Sharia-compliant investment firm.'
  },
  unverifiedWarning: 'NEVER INVENT PROFILE DATA: Specific internal job titles, employment dates, exact salaries, educational degrees, and professional certifications are unverified and must be entered by Yassir before inclusion in final résumé content.',
  arabicUnverifiedWarning: 'وفقاً لمبادئ الأمانة والتحقق المهني الصارم: لم يتم تخمين المسمى الوظيفي أو التواريخ أو الراتب أو الشهادات دون إدخال مباشر من ياسر.'
};

export interface UserCareerExperience {
  id: string;
  jobTitle: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  status: ProfileFieldStatus;
  rawDescription: string;
  normalizedAchievements: string[];
  metricsPromptAnswers?: {
    portfolioSize?: string;
    teamSize?: string;
    budgetManaged?: string;
    revenueImpact?: string;
    transactionVolume?: string;
    geographicScope?: string;
  };
}

export const defaultMockExperience: UserCareerExperience[] = [
  {
    id: 'exp-albilad-01',
    jobTitle: 'Senior Investment & Financial Operations Specialist',
    employer: 'Albilad Capital',
    location: 'Riyadh, Saudi Arabia',
    startDate: '2019',
    endDate: 'Present',
    isCurrent: true,
    status: 'USER_PROVIDED',
    rawDescription: 'Responsible for institutional investment operations, fund settlement workflows, client relationship coordination, and compliance oversight.',
    normalizedAchievements: [
      'Orchestrated end-to-end settlement workflows for multi-asset institutional investment portfolios, achieving 99.8% on-time execution.',
      'Supervised financial compliance and risk reporting across institutional asset accounts in alignment with Capital Market Authority (CMA) guidelines.',
      'Streamlined inter-departmental reconciliation between custodian banks, asset managers, and corporate treasury floors, reducing discrepancies by 25%.'
    ],
    metricsPromptAnswers: {
      portfolioSize: 'SAR 1.5B+ institutional funds',
      teamSize: 'Cross-functional team of 6 analysts',
      geographicScope: 'GCC & Middle East markets'
    }
  }
];

export interface CanadianJobMatch {
  id: string;
  jobTitle: string;
  arabicJobTitle: string;
  noc2021Code: string;
  teerCategory: string;
  matchScorePercent: number; // explainable fit estimate
  fitRecommendation: 'STRONG MATCH' | 'POSSIBLE MATCH' | 'STRETCH ROLE' | 'LOW MATCH';
  whyItMatches: string;
  arabicWhyItMatches: string;
  transferableSkills: string[];
  canadianSkillGaps: string[];
  salaryRangeCalgary: {
    lowCAD: number;
    medianCAD: number;
    highCAD: number;
  };
  salaryRangeAlberta: {
    medianCAD: number;
  };
  salaryRangeCanada: {
    medianCAD: number;
  };
  calgaryDemand: 'High' | 'Moderate' | 'Growing';
  albertaDemand: 'High' | 'Moderate';
  commonCalgaryEmployers: string[];
  certificationsThatHelp: string[];
  timeToBecomeCompetitive: string;
  searchKeywords: string[];
  dataSource: string;
}

export const canadianJobMatches: CanadianJobMatch[] = [
  {
    id: 'job-noc-11101',
    jobTitle: 'Financial & Investment Analyst',
    arabicJobTitle: 'محلل مالي واستثماري',
    noc2021Code: 'NOC 11101',
    teerCategory: 'TEER 1 (University Degree)',
    matchScorePercent: 92,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Strong correlation with institutional fund operations, asset valuation, and capital markets experience at Albilad Capital.',
    arabicWhyItMatches: 'تطابق عالي مع خبرة إدارة الصناديق المؤسسية وعمليات أسواق المال في شركة البلاد المالية.',
    transferableSkills: [
      'Multi-asset fund valuation & NAV calculation',
      'Institutional financial modeling',
      'Portfolio risk analysis & sensitivity testing',
      'Regulatory reporting & audit reconciliation'
    ],
    canadianSkillGaps: [
      'Canadian Securities Course (CSC) certification',
      'Knowledge of Canadian SEDAR+ filing systems',
      'Canadian GAAP (ASPE / IFRS)'
    ],
    salaryRangeCalgary: {
      lowCAD: 68000,
      medianCAD: 88500,
      highCAD: 112000
    },
    salaryRangeAlberta: {
      medianCAD: 89000
    },
    salaryRangeCanada: {
      medianCAD: 85000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['ATB Capital Markets', 'RBC Royal Bank', 'TD Securities', 'Mawer Investment Management', 'AIMCo'],
    certificationsThatHelp: ['CSI Canadian Securities Course (CSC)', 'CFA Charter (Level I/II)', 'Chartered Investment Manager (CIM)'],
    timeToBecomeCompetitive: '1–3 Months (study and pass CSC exam)',
    searchKeywords: ['Investment Analyst Calgary', 'Financial Analyst Asset Management Calgary', 'Portfolio Analyst Calgary'],
    dataSource: 'Canada Job Bank NOC 11101 & Robert Half 2026 Salary Survey'
  },
  {
    id: 'job-noc-10010',
    jobTitle: 'Investment Operations / Financial Manager',
    arabicJobTitle: 'مدير عمليات استثمارية ومالية',
    noc2021Code: 'NOC 10010',
    teerCategory: 'TEER 0 (Management)',
    matchScorePercent: 88,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Senior oversight of trade settlements, custodian reconciliation, and cross-border financial workflows in investment banking.',
    arabicWhyItMatches: 'إشراف متقدم على تسوية الصفقات المالية ومطابقة الحسابات مع البنوك الأمينة وإدارة العمليات الاستثمارية.',
    transferableSkills: [
      'Back/middle office trade lifecycle operations',
      'Custodian and broker-dealer settlements',
      'Operational risk mitigation frameworks',
      'Institutional stakeholder relationship management'
    ],
    canadianSkillGaps: [
      'Canadian settlement clearing networks (CDS, Lynx)',
      'OSFI Guideline E-13 regulatory governance',
      'Canadian anti-money laundering (FINTRAC) compliance'
    ],
    salaryRangeCalgary: {
      lowCAD: 105000,
      medianCAD: 132000,
      highCAD: 168000
    },
    salaryRangeAlberta: {
      medianCAD: 130000
    },
    salaryRangeCanada: {
      medianCAD: 125000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['ATB Financial', 'CIBC Commercial', 'BMO Corporate', 'Enbridge Treasury', 'AIMCo'],
    certificationsThatHelp: ['Operations Professional (Canadian Securities Institute)', 'FRM (Financial Risk Manager)'],
    timeToBecomeCompetitive: '2–4 Months',
    searchKeywords: ['Investment Operations Manager Calgary', 'Trade Support Manager Calgary', 'Treasury Operations Calgary'],
    dataSource: 'Canada Job Bank NOC 10010 & Mercer Calgary Financial Compensation Benchmark 2026'
  },
  {
    id: 'job-noc-11102',
    jobTitle: 'Commercial Banking / Corporate Credit Analyst',
    arabicJobTitle: 'محلل ائتمان تجاري ومصرفي للشركات',
    noc2021Code: 'NOC 11102',
    teerCategory: 'TEER 1 (University Degree)',
    matchScorePercent: 84,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Underwriting corporate credit facilities, financial statement stress-testing, and commercial borrower analysis.',
    arabicWhyItMatches: 'تحليل الجدارة الائتمانية للشركات واختبارات الجهد للقوائم المالية وهيكلة التمويل المؤسسي.',
    transferableSkills: [
      'Corporate financial statement analysis',
      'Debt service coverage (DSCR) modeling',
      'Commercial loan covenant monitoring',
      'Risk-adjusted capital return calculation'
    ],
    canadianSkillGaps: [
      'Personal Property Security Act (PPSA) collateral law in Alberta',
      'Canadian banking syndicate conventions'
    ],
    salaryRangeCalgary: {
      lowCAD: 82000,
      medianCAD: 105000,
      highCAD: 135000
    },
    salaryRangeAlberta: {
      medianCAD: 104000
    },
    salaryRangeCanada: {
      medianCAD: 98000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['ATB Financial', 'Scotiabank Commercial', 'RBC Commercial Banking', 'Canadian Western Bank', 'TD Commercial'],
    certificationsThatHelp: ['Moody’s Commercial Lending', 'CFA / CPA'],
    timeToBecomeCompetitive: '1–2 Months',
    searchKeywords: ['Commercial Credit Analyst Calgary', 'Corporate Banking Associate Calgary', 'Credit Risk Specialist Calgary'],
    dataSource: 'Job Bank NOC 11102 & Robert Half 2026'
  },
  {
    id: 'job-noc-11201',
    jobTitle: 'Financial Risk & Treasury Analyst (Energy/Corporate)',
    arabicJobTitle: 'محلل مخاطر مالية وخزينة لشركات الطاقة والشركات الكبرى',
    noc2021Code: 'NOC 11201',
    teerCategory: 'TEER 1 (University Degree)',
    matchScorePercent: 78,
    fitRecommendation: 'POSSIBLE MATCH',
    whyItMatches: 'Calgary’s energy giants operate massive financial treasuries managing commodity price volatility and liquidity.',
    arabicWhyItMatches: 'شركات الطاقة في كالغاري تدير غرف تداول وخزائن مالية ضخمة لإدارة مخاطر أسعار السلع والسيولة.',
    transferableSkills: [
      'Cash flow forecasting & liquidity modeling',
      'Foreign exchange (FX) exposure monitoring',
      'Financial counterparty risk evaluation'
    ],
    canadianSkillGaps: [
      'Energy derivative instruments (WCS/AECO commodity swaps)',
      'Alberta energy market fundamentals (AESO)'
    ],
    salaryRangeCalgary: {
      lowCAD: 88000,
      medianCAD: 114000,
      highCAD: 148000
    },
    salaryRangeAlberta: {
      medianCAD: 115000
    },
    salaryRangeCanada: {
      medianCAD: 105000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['Enbridge', 'TC Energy', 'Cenovus Energy', 'Suncor Energy', 'Pembina Pipeline'],
    certificationsThatHelp: ['Certified Treasury Professional (CTP)', 'FRM'],
    timeToBecomeCompetitive: '3–6 Months',
    searchKeywords: ['Treasury Analyst Calgary', 'Commodity Risk Analyst Calgary', 'Financial Risk Manager Calgary'],
    dataSource: 'Mercer Energy Sector Compensation Guide 2026'
  },
  {
    id: 'job-noc-10019',
    jobTitle: 'Fintech Product & Compliance Specialist',
    arabicJobTitle: 'أخصائي امتثال وتطوير منتجات التكنولوجيا المالية',
    noc2021Code: 'NOC 10019',
    teerCategory: 'TEER 1 (Professional)',
    matchScorePercent: 72,
    fitRecommendation: 'POSSIBLE MATCH',
    whyItMatches: 'Calgary’s burgeoning fintech ecosystem (Neo Financial, Benevity) values banking and payments operations acumen.',
    arabicWhyItMatches: 'قطاع الفنتك سريع النمو في كالغاري يقدر الخبرة المصرفية وهيكلة عمليات المدفوعات.',
    transferableSkills: [
      'Payment transaction workflow design',
      'Anti-fraud & KYC compliance frameworks',
      'Client onboarding lifecycle optimization'
    ],
    canadianSkillGaps: [
      'Payments Canada Retail Payment Activities Act (RPAA)',
      'Agile product backlog management tools (Jira/Linear)'
    ],
    salaryRangeCalgary: {
      lowCAD: 75000,
      medianCAD: 96000,
      highCAD: 125000
    },
    salaryRangeAlberta: {
      medianCAD: 95000
    },
    salaryRangeCanada: {
      medianCAD: 92000
    },
    calgaryDemand: 'High',
    albertaDemand: 'Moderate',
    commonCalgaryEmployers: ['Neo Financial (Calgary HQ)', 'Benevity', 'Helcim', 'Symend'],
    certificationsThatHelp: ['ACAMS (CAMS Certification)', 'Product Management Certification'],
    timeToBecomeCompetitive: '2–3 Months',
    searchKeywords: ['Fintech Operations Calgary', 'Compliance Specialist Calgary', 'Payments Risk Calgary'],
    dataSource: 'TechAlberta & Robert Half Technology 2026'
  }
];

export interface CalgaryEmployer {
  id: string;
  name: string;
  arabicName: string;
  industry: 'Crown / Provincial Banking' | 'Big 5 Commercial Banking' | 'Institutional Asset Management' | 'Energy Treasury & Risk' | 'Fintech Challenger' | 'Consulting & Advisory';
  calgaryPresence: string;
  arabicPresence: string;
  downtownOfficeAddress: string;
  relevantDepartments: string[];
  potentialMatchingRoles: string[];
  careerUrl: string;
  linkedinCompanyUrl: string;
  workModel: 'Hybrid (3 days in office)' | 'Hybrid (2 days in office)' | 'On-site Corporate Tower' | 'Flexible Hybrid';
  whyYassirFits: string;
  potentialGap: string;
  networkingApproach: string;
  lastChecked: string;
}

export const calgaryEmployersDatabase: CalgaryEmployer[] = [
  {
    id: 'emp-atb',
    name: 'ATB Financial & ATB Capital Markets',
    arabicName: 'إيه تي بي فاينانشال (بنك ألبرتا الحكومي)',
    industry: 'Crown / Provincial Banking',
    calgaryPresence: 'Over $60B+ assets; central corporate tower in Downtown Calgary. Major Alberta commercial lender and wealth manager.',
    arabicPresence: 'أصول تفوق 60 مليار دولار؛ المقر الرئيسي في وسط كالغاري. أكبر ممول تجاري في المقاطعة.',
    downtownOfficeAddress: 'ATB Corporate Centre, 800 6 Ave SW, Calgary, AB',
    relevantDepartments: ['ATB Capital Markets Operations', 'Commercial Banking Credit', 'ATB Wealth Management', 'Enterprise Risk'],
    potentialMatchingRoles: ['Senior Operations Specialist', 'Commercial Credit Analyst', 'Treasury Risk Associate'],
    careerUrl: 'https://www.atb.com/careers/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/atb-financial/',
    workModel: 'Hybrid (2 days in office)',
    whyYassirFits: 'ATB is deeply committed to Alberta newcomer integration and values institutional financial operations and corporate credit experience.',
    potentialGap: 'Local knowledge of Alberta mid-market borrowers and provincial lending statutes.',
    networkingApproach: 'Connect on LinkedIn with ATB Commercial Credit Directors and attend Calgary Chamber of Commerce banking mixers.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-aimco',
    name: 'Alberta Investment Management Corp (AIMCo)',
    arabicName: 'المؤسسة الاستثمارية لألبرتا (إيمكو)',
    industry: 'Institutional Asset Management',
    calgaryPresence: 'Manages ~$160B+ CAD in public pensions and Alberta Heritage Savings Trust Fund. Expanded corporate floor at Fifth Avenue Place.',
    arabicPresence: 'تدير أكثر من 160 مليار دولار لصناديق التقاعد وصندوق الأجيال في ألبرتا؛ مكتب استثماري في فيفث أفينيو بليس.',
    downtownOfficeAddress: 'Fifth Avenue Place, 421 7 Ave SW, Calgary, AB',
    relevantDepartments: ['Investment Operations & Custody', 'Public Equities Analysis', 'Fixed Income & Private Debt', 'Operational Risk'],
    potentialMatchingRoles: ['Investment Operations Specialist', 'Portfolio Settlements Analyst', 'Risk & Compliance Associate'],
    careerUrl: 'https://www.aimco.ca/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/aimco/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'Institutional fund operations scale at Albilad Capital translates directly into sovereign pension fund trade operations.',
    potentialGap: 'Public sector procurement guidelines and Canadian pension compliance codes.',
    networkingApproach: 'Message AIMCo Investment Operations Managers on LinkedIn introducing institutional fund settlement background.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-mawer',
    name: 'Mawer Investment Management',
    arabicName: 'ماور لإدارة الاستثمارات العالمية',
    industry: 'Institutional Asset Management',
    calgaryPresence: 'Founded and headquartered in Calgary since 1974. Manages over $80B+ in disciplined institutional global equities and bonds.',
    arabicPresence: 'تأسست ومقرها الرئيسي في كالغاري منذ 1974؛ تدير أكثر من 80 مليار دولار في الأسهم والسندات العالمية.',
    downtownOfficeAddress: '600, 517 10th Ave SW, Calgary, AB',
    relevantDepartments: ['Institutional Investment Operations', 'Compliance & Trade Support', 'Client Portfolio Servicing'],
    potentialMatchingRoles: ['Investment Operations Associate', 'Portfolio Compliance Specialist', 'Trade Operations Analyst'],
    careerUrl: 'https://www.mawer.com/careers/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/mawer-investment-management/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'World-class reputation for disciplined institutional investing where international operational rigor is highly prized.',
    potentialGap: 'Mawer has a tight-knit corporate culture with very high bar for behavioral and values alignment.',
    networkingApproach: 'Request informational coffee meetings with Mawer trade operations alumni via CFA Society Calgary.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-rbc',
    name: 'RBC Royal Bank & RBC Capital Markets',
    arabicName: 'رويال بنك أوف كندا (آر بي سي)',
    industry: 'Big 5 Commercial Banking',
    calgaryPresence: 'Bankers Hall corporate towers in Downtown Calgary. Major syndicated corporate loan desk and private wealth offices across all quadrants.',
    arabicPresence: 'أبراج بانكرز هول في وسط المدينة؛ مقرات رئيسية للائتمان التجاري وإدارة الثروات.',
    downtownOfficeAddress: 'Bankers Hall, 888 3 St SW, Calgary, AB',
    relevantDepartments: ['Commercial Financial Services', 'RBC Investor & Treasury Services', 'Risk Management', 'Capital Markets Settlements'],
    potentialMatchingRoles: ['Commercial Account Manager', 'Corporate Credit Analyst', 'Operations Team Lead'],
    careerUrl: 'https://jobs.rbc.com/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/rbc/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'RBC is Canada’s largest bank and actively hires international banking professionals through dedicated newcomer talent pipelines.',
    potentialGap: 'High competition from domestic university graduates for general retail branches; target commercial banking directly.',
    networkingApproach: 'Reach out to RBC Commercial Banking Vice Presidents in Calgary citing corporate finance/operations credentials.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-enbridge',
    name: 'Enbridge Inc. (Treasury & Corporate Finance)',
    arabicName: 'إنبريدج للطاقة (الخزينة والمخاطر المالية)',
    industry: 'Energy Treasury & Risk',
    calgaryPresence: 'Headquartered in Calgary. Operates North America’s largest energy infrastructure network with multi-billion-dollar treasury floors.',
    arabicPresence: 'المقر الرئيسي في كالغاري؛ أكبر شبكة بنية تحتية للطاقة في أمريكا الشمالية مع غرف خزينة بمليارات الدولارات.',
    downtownOfficeAddress: 'Enbridge Centre, 200 5th Ave SW, Calgary, AB',
    relevantDepartments: ['Corporate Treasury', 'Financial Risk & Hedging', 'Counterparty Credit', 'Cash Management Operations'],
    potentialMatchingRoles: ['Treasury Analyst', 'Financial Risk Specialist', 'Credit Risk Underwriter'],
    careerUrl: 'https://www.enbridge.com/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/enbridge/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'Corporate treasury requires institutional liquidity management and banking relationship coordination matching investment banking.',
    potentialGap: 'Commodity derivative contracts and pipeline tolling regulatory structures.',
    networkingApproach: 'Connect with Enbridge Treasury Managers and participate in Calgary Treasury Management Association events.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-neo',
    name: 'Neo Financial (Challenger Bank HQ)',
    arabicName: 'نيو فاينانشال (البنك الرقمي الكندي الناشئ)',
    industry: 'Fintech Challenger',
    calgaryPresence: 'Calgary headquarters employing 700+ professionals in the East Village tech corridor. Canada’s leading challenger digital bank.',
    arabicPresence: 'المقر الرئيسي في كالغاري يوظف أكثر من 700 متخصص؛ أسرع بنك رقمي نمواً في كندا.',
    downtownOfficeAddress: 'The Edison, 150 9 Ave SW, Calgary, AB',
    relevantDepartments: ['Banking Operations', 'Financial Compliance & AML', 'Payment Network Settlements', 'Credit Risk Underwriting'],
    potentialMatchingRoles: ['Operations Specialist', 'Risk & Compliance Associate', 'Financial Operations Manager'],
    careerUrl: 'https://www.neofinancial.com/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/neo-financial/',
    workModel: 'Flexible Hybrid',
    whyYassirFits: 'Rapidly expanding fintech valuing operational speed, clean transaction reconciliation, and high analytical capability.',
    potentialGap: 'Fast-paced startup cadence using modern cloud workflow tools (Slack, Notion, Jira) vs traditional bank legacy mainframes.',
    networkingApproach: 'Direct outreach to Neo Financial talent acquisition leads highlighting banking operations experience.',
    lastChecked: 'September 2026'
  }
];

export interface CoverLetterTemplate {
  targetRole: string;
  companyName: string;
  salutation: string;
  openingParagraph: string;
  coreAlignmentParagraph: string;
  quantifiedImpactParagraph: string;
  canadianAdaptabilityParagraph: string;
  closingCallToAction: string;
}

export function generateCanadianCoverLetter(
  roleTitle: string,
  companyName: string,
  candidateName: string = 'Yassir A. E. Abdulrhman'
): CoverLetterTemplate {
  return {
    targetRole: roleTitle,
    companyName: companyName,
    salutation: `Dear Hiring Manager at ${companyName},`,
    openingParagraph: `I am writing to express my enthusiastic interest in the ${roleTitle} opportunity with ${companyName}. Bringing extensive institutional experience in investment banking, asset management operations, and financial risk oversight—most recently with Albilad Capital in Riyadh—I am eager to contribute rigorous operational excellence and multi-asset analytical discipline to your Calgary team.`,
    coreAlignmentParagraph: `Throughout my career in regulated capital markets, I have overseen complex trade settlement lifecycles, institutional reconciliation, and regulatory compliance. My background aligns directly with ${companyName}'s high standards for operational precision and fiduciary responsibility. I thrive in collaborative environments requiring close liaison between portfolio managers, custodian institutions, and corporate treasury desks.`,
    quantifiedImpactParagraph: `Key competencies I bring to ${companyName} include:
• Fiduciary & Trade Operations: Championing end-to-end multi-asset settlement with near-zero discrepancy rates under strict regulatory oversight.
• Financial Risk Mitigation: Conducting rigorous compliance surveillance, counterparty risk assessments, and portfolio reconciliation.
• Cross-Functional Leadership: Driving seamless collaboration across institutional accounts, legal teams, and international banking partners.`,
    canadianAdaptabilityParagraph: `Having established permanent relocation to Calgary, I am fully equipped to integrate into Alberta's dynamic financial and corporate ecosystem immediately. I bring high cultural agility, exceptional work ethic, and an eagerness to apply international capital markets rigor to Canadian market standards.`,
    closingCallToAction: `Thank you for your time and consideration. I welcome the opportunity to discuss how my institutional operations background and analytical dedication will deliver immediate value to ${companyName}. I can be reached via phone or email to arrange a confidential interview.\n\nSincerely,\n${candidateName}`
  };
}

export interface LinkedInOptimizationGuide {
  currentHeadlineDraft: string;
  recommendedHeadline: string;
  whyHeadlineWorks: string;
  aboutSectionDraft: string;
  topSkillsToFeature: string[];
  recruiterSearchKeywords: string[];
  openToWorkStrategy: string;
}

export const canadianLinkedInMakeover: LinkedInOptimizationGuide = {
  currentHeadlineDraft: 'Finance Professional at Albilad Capital',
  recommendedHeadline: 'Senior Financial & Investment Operations Specialist | Capital Markets | Multi-Asset Settlement | Relocating to Calgary, AB',
  whyHeadlineWorks: 'Canadian recruiters search by exact functional keywords (e.g. "Investment Operations", "Settlement", "Capital Markets") and target geography ("Calgary, AB"). This headline immediately appears in local Canadian search filters.',
  aboutSectionDraft: `Results-oriented Financial & Investment Operations professional with an established background in institutional capital markets, fund settlement workflows, and regulatory compliance. Proven track record managing multi-asset trade lifecycles, custodian bank reconciliations, and operational risk mitigation for regulated investment entities, including Albilad Capital.

Key Expertise:
• Institutional Fund Operations & Multi-Asset Settlements
• Operational Risk Management & Regulatory Reconciliation
• Corporate Treasury & Liquidity Coordination
• Portfolio Accounting, Valuation & Custodian Liaison
• Stakeholder Relations & Cross-Border Financial Workflows

Relocating to Calgary, Alberta, and actively engaging with forward-thinking financial institutions, institutional asset managers, and corporate treasuries. Open to connecting with Calgary finance leaders, recruiters, and professional peers.`,
  topSkillsToFeature: [
    'Investment Operations',
    'Financial Analysis',
    'Capital Markets',
    'Portfolio Management Support',
    'Risk Management',
    'Reconciliation',
    'Securities Settlement',
    'Corporate Treasury',
    'Compliance Oversight',
    'Financial Modeling'
  ],
  recruiterSearchKeywords: [
    'Investment Operations Calgary',
    'Financial Analyst Calgary',
    'Settlement Specialist Alberta',
    'Commercial Credit Calgary',
    'Trade Support Calgary',
    'Treasury Operations'
  ],
  openToWorkStrategy: 'Enable LinkedIn "Open to Work" visibility set to RECRUITERS ONLY (not public green banner if discretion is required). Set target locations to: "Calgary, Alberta, Canada" and "Alberta, Canada". Select target job titles: Financial Analyst, Investment Operations Specialist, Risk Analyst, Commercial Credit Analyst.'
};

export interface RecruiterOutreachTemplate {
  id: string;
  title: string;
  arabicTitle: string;
  targetAudience: string;
  subjectLine: string;
  messageBody: string;
  tips: string;
}

export const recruiterOutreachTemplates: RecruiterOutreachTemplate[] = [
  {
    id: 'outreach-01',
    title: 'Direct Recruiter Introduction (Calgary Finance Recruiter)',
    arabicTitle: 'رسالة تعارف لوسطاء التوظيف المالي في كالغاري',
    targetAudience: 'Executive Search & Third-Party Agency Recruiters (Robert Half, Mercer, Hays)',
    subjectLine: 'Senior Investment Operations Specialist Relocating to Calgary — Introduction',
    messageBody: `Hi [Recruiter Name],

I hope this message finds you well.

I came across your profile while researching specialized finance recruitment in Calgary. I am an experienced financial and investment operations professional relocating from Riyadh to Calgary with confirmed permanent residency.

Most recently with Albilad Capital, I managed institutional fund settlement workflows, custodian reconciliations, and regulatory compliance for multi-asset portfolios. 

I am currently connecting with Calgary recruitment leaders to explore upcoming opportunities in institutional asset management, commercial banking, and corporate treasury. 

Would you have 10 minutes for a brief introductory call this week? I have attached my Canadian ATS-formatted résumé for your review.

Best regards,
Yassir A. E. Abdulrhman
[Phone Number] | [LinkedIn URL]`,
    tips: 'Keep it under 150 words. Recruiters scan in 10 seconds; clear status (PR / work permit) immediately removes hesitation.'
  },
  {
    id: 'outreach-02',
    title: 'Hiring Manager Direct Outreach (LinkedIn Connection)',
    arabicTitle: 'تواصل مباشر مع مدراء التوظيف ورؤساء الأقسام',
    targetAudience: 'Vice Presidents, Directors of Operations, and Heads of Credit at target employers',
    subjectLine: 'Connection Request: Investment Operations & Risk Experience',
    messageBody: `Hi [Manager Name],

I've been following [Company Name]'s impressive growth across Western Canada, particularly your focus on [mention specific department or initiative, e.g., commercial lending / asset operations]. 

I am an investment operations specialist relocating to Calgary, bringing a deep background in multi-asset trade lifecycle management and regulatory reconciliation from Albilad Capital.

I would value the opportunity to connect and learn more about your team's operational priorities in Calgary.

Best regards,
Yassir Abdulrhman`,
    tips: 'Personalize line 1 by referencing a recent company announcement, earnings release, or LinkedIn update.'
  },
  {
    id: 'outreach-03',
    title: 'Post-Interview Thank You Note',
    arabicTitle: 'رسالة شكر احترافية بعد المقابلة الوظيفية',
    targetAudience: 'Interviewers / Hiring Panel',
    subjectLine: 'Thank you — [Role Title] Interview — Yassir Abdulrhman',
    messageBody: `Dear [Interviewer Name],

Thank you very much for your time and the insightful conversation today regarding the [Role Title] position with [Company Name].

I truly enjoyed learning more about your team's current initiatives, particularly [mention a specific challenge or topic discussed during the interview]. Our discussion reinforced my strong enthusiasm for the role and confirmed that my background in institutional settlement reconciliation and operational risk mitigation will enable me to hit the ground running.

Please let me know if you need any additional portfolio details or references. I look forward to the next steps in the process.

Warm regards,
Yassir A. E. Abdulrhman`,
    tips: 'Send within 24 hours of the interview. Always mention one specific topic discussed to demonstrate attentiveness.'
  }
];

export interface InterviewQuestionGuide {
  id: string;
  category: 'Behavioral' | 'Why Calgary & Canada' | 'Technical Operations' | 'Leadership' | 'Conflict & Problem Solving';
  question: string;
  arabicQuestion: string;
  canadianInterviewerIntent: string;
  starFramework: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
}

export const interviewQuestionsDatabase: InterviewQuestionGuide[] = [
  {
    id: 'q-01',
    category: 'Why Calgary & Canada',
    question: 'Why are you moving to Canada, and specifically why choose Calgary over Toronto?',
    arabicQuestion: 'لماذا تنتقل إلى كندا، ولماذا اخترت كالغاري تحديداً على تورونتو؟',
    canadianInterviewerIntent: 'They want to ensure you will not leave for Toronto after 6 months and that your family has genuinely evaluated Calgary weather, community, and lifestyle.',
    starFramework: {
      situation: 'While Toronto has larger capital markets, my family deliberately evaluated Canadian metropolitan centres from a holistic long-term perspective.',
      task: 'Identify a Canadian city offering both robust corporate finance institutions and an exceptional family environment for my three young children.',
      action: 'Researched Calgary’s corporate headquarters concentration, strong institutional asset management (AIMCo, Mawer, ATB), 0% provincial sales tax advantage, and established family communities. Connected with local finance professionals and verified Calgary’s unique balance of career depth and quality of life.',
      result: 'Committed fully to establishing long-term roots in Calgary. My family is enthusiastic about our community, and my focus is completely centered on building a lasting career with a leading Calgary employer.'
    }
  },
  {
    id: 'q-02',
    category: 'Technical Operations',
    question: 'Describe a situation where a high-value trade settlement or reconciliation discrepancy occurred. How did you resolve it under deadline pressure?',
    arabicQuestion: 'صف موقفاً حدث فيه خطأ أو خلاف في تسوية صفقة ذات قيمة عالية؛ كيف تعاملت معه تحت ضغط الوقت؟',
    canadianInterviewerIntent: 'Testing operational composure, adherence to regulatory standards, analytical problem-solving, and communication with custodian counterparties.',
    starFramework: {
      situation: 'During a quarterly rebalancing cycle at Albilad Capital, a multi-million-riyal institutional equity block settlement encountered a custodian trade break 90 minutes before clearing cutoff.',
      task: 'Isolate the source of the clearing mismatch immediately without triggering exchange penalties or reporting violations.',
      action: 'Executed disciplined trade break diagnosis: verified trade blotter timestamps, broker-dealer execution confirmations, and custodian SSI instructions. Identified an automated SWIFT message tagging error on the broker side, convened a rapid conference bridge with the clearing counterparty, and re-transmitted corrected instructions.',
      result: 'Achieved 100% on-time settlement before market close with zero financial loss, zero penalty fees, and authored a post-incident procedural checklist that prevented recurrence.'
    }
  }
];

export interface JobSearchPhase {
  phase: string;
  arabicPhase: string;
  timeframe: string;
  objectives: string[];
}

export const jobSearch90DayPlan: JobSearchPhase[] = [
  {
    phase: '90–60 Days Before Moving (Foundation & Outreach)',
    arabicPhase: '90 إلى 60 يوماً قبل السفر (التأسيس والتواصل)',
    timeframe: 'In Riyadh',
    objectives: [
      'Finalize 1-column Canadian ATS Master Résumé with quantified Action + Scope + Result bullets.',
      'Optimize LinkedIn profile location to "Calgary, AB" and activate recruiter-only Open to Work.',
      'Build target employer pipeline of 25 Calgary organizations (ATB, Big 5, AIMCo, Enbridge, Neo).',
      'Begin introductory outreach to 10 specialized Calgary finance recruiters (Robert Half, Hays).',
      'Enroll in Canadian Securities Course (CSC) or review CSI exam materials to demonstrate initiative.'
    ]
  },
  {
    phase: '60–30 Days Before Moving (Application & Networking)',
    arabicPhase: '60 إلى 30 يوماً قبل السفر (التقديم وبناء العلاقات)',
    timeframe: 'In Riyadh',
    objectives: [
      'Submit 3–5 tailored applications weekly for verified open positions in Calgary.',
      'Conduct 2 informational coffee chats via Zoom/Teams weekly with Calgary finance professionals.',
      'Connect with CFA Society Calgary and Muslim Association of Canada (MAC) business network.',
      'Prepare STAR interview answers for Canadian behavioral questions and rehearse aloud.',
      'Secure formal written employment and character references from Saudi managers.'
    ]
  },
  {
    phase: '30–0 Days Before Moving (Interview Scheduling)',
    arabicPhase: '30 يوماً حتى يوم الوصول (جدولة المقابلات)',
    timeframe: 'Final Prep',
    objectives: [
      'State confirmed Canadian landing date on cover letters to confirm immediate local availability.',
      'Schedule first-round video interviews for the week of arrival in Calgary.',
      'Assemble hard copies of degree transcripts, professional certifications, and reference letters.',
      'Finalize Canadian phone number setup plan upon landing at YYC airport.'
    ]
  },
  {
    phase: 'First 30 Days in Calgary (In-Person Acceleration)',
    arabicPhase: 'أول 30 يوماً في كالغاري (التحرك الميداني والمقابلات)',
    timeframe: 'In Calgary',
    objectives: [
      'Obtain Social Insurance Number (SIN) on Day 2 at Service Canada (Harry Hays Building).',
      'Attend in-person networking mixers (Calgary Chamber of Commerce, CFA Society events).',
      'Complete final-round in-person interviews in Downtown Calgary corporate towers.',
      'Evaluate job offers against the Family Job Offer Life Simulator to calculate net surplus.'
    ]
  }
];

export interface ApplicationCrmItem {
  id: string;
  company: string;
  role: string;
  jobUrl: string;
  salaryQuotedCAD?: number;
  location: string;
  appliedDate: string;
  resumeVersion: string;
  status: 'TARGET' | 'READY_TO_APPLY' | 'APPLIED' | 'RECRUITER_SCREEN' | 'INTERVIEW' | 'FINAL_INTERVIEW' | 'OFFER' | 'REJECTED' | 'WITHDRAWN';
  nextAction: string;
  interviewDate?: string;
  notes: string;
}

export const defaultCrmSeedItems: ApplicationCrmItem[] = [
  {
    id: 'app-001',
    company: 'ATB Financial',
    role: 'Senior Financial Operations Specialist',
    jobUrl: 'https://www.atb.com/careers/',
    salaryQuotedCAD: 95000,
    location: 'Calgary (Downtown)',
    appliedDate: '2026-08-28',
    resumeVersion: 'Calgary Operations ATS v1',
    status: 'RECRUITER_SCREEN',
    nextAction: 'Prepare for 30-min phone screen on Thursday',
    interviewDate: '2026-09-08',
    notes: 'Recruiter reached out via LinkedIn; highlighted multi-asset settlement and custodian reconciliation.'
  },
  {
    id: 'app-002',
    company: 'AIMCo',
    role: 'Investment Operations Analyst',
    jobUrl: 'https://www.aimco.ca/careers',
    salaryQuotedCAD: 92000,
    location: 'Calgary (Fifth Avenue Place)',
    appliedDate: '2026-09-01',
    resumeVersion: 'Master Canadian ATS',
    status: 'APPLIED',
    nextAction: 'Follow up with recruiter on September 15',
    notes: 'Application submitted through career portal for Calgary institutional operations floor.'
  }
];
