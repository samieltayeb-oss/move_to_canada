export type ProfileFieldStatus = 'VERIFIED' | 'USER_PROVIDED' | 'INFERRED' | 'MISSING';

export interface VerifiedProfessionalProfile {
  candidateName: string;
  email: string;
  mobile: string;
  linkedinUrl: string;
  currentTitle: string;
  currentEmployer: string;
  location: string;
  verifiedEducation: {
    degree: string;
    institution: string;
    years: string;
  }[];
  topSkills: string[];
  careerOverview: string;
  arabicCareerOverview: string;
}

export const yassirVerifiedProfile: VerifiedProfessionalProfile = {
  candidateName: 'Yassir A. E. Abdulrhman',
  email: 'yassireljak@gmail.com',
  mobile: '+966598315118',
  linkedinUrl: 'https://www.linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321',
  currentTitle: 'IT PMO Senior Manager',
  currentEmployer: 'Albilad Capital (البلاد المالية)',
  location: 'Riyadh, Saudi Arabia (Relocating to Calgary, AB, Canada)',
  verifiedEducation: [
    {
      degree: 'B.Sc. in Computer Science',
      institution: 'Omdurman Ahlia University (Faculty of Applied Science and Computer)',
      years: '1995 – 2001'
    },
    {
      degree: 'Diploma in Electronics and Communications Engineering',
      institution: 'Sudan University (Faculty of Human Resource and Technology)',
      years: '1996 – 1998'
    }
  ],
  topSkills: [
    'PL/SQL',
    'Project Management',
    'Team Leadership',
    'IT PMO Governance',
    'Oracle Database & ERP Architecture',
    'Business Change Management',
    'Capital Markets IT Systems',
    'Enterprise Operations Management'
  ],
  careerOverview: 'Results-driven Senior IT PMO Manager, Enterprise Systems Consultant, and former Vice President of Business Management Operations with over 20 years of verifiable enterprise technology delivery in Saudi Arabian capital markets, investment banking, and systems integration. Deep expertise combining hands-on technical architecture (Oracle, PL/SQL, Systems Analysis) with executive governance, PMO frameworks, and large-scale digital transformation.',
  arabicCareerOverview: 'مدير تنفيذي أول لمكاتب إدارة المشاريع التقنية (IT PMO) ومستشار أول لأنظمة أوراكل (Oracle) وقائد سابق لعمليات إدارة الأعمال (VP Business Management OPS) بخبرة تتجاوز 20 عاماً في أسواق المال والخدمات الاستثمارية والمصرفية بالرياض، يجمع بين البعد التقني العميق (PL/SQL، هندسة الأنظمة) والقيادة التنفيذية وحوكمة المشاريع الكبرى.'
};

export interface UserCareerExperience {
  id: string;
  jobTitle: string;
  arabicJobTitle: string;
  employer: string;
  location: string;
  startDate: string;
  endDate: string;
  duration: string;
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
    id: 'exp-albilad-pmo',
    jobTitle: 'IT PMO Senior Manager',
    arabicJobTitle: 'مدير تنفيذي أول لمكتب إدارة المشاريع التقنية (IT PMO)',
    employer: 'Albilad Capital (البلاد المالية)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Apr 2023',
    endDate: 'Present',
    duration: '3+ years',
    isCurrent: true,
    status: 'VERIFIED',
    rawDescription: 'Directing the enterprise IT Project Management Office (PMO) for Albilad Capital, overseeing core financial systems, regulatory tech compliance, trading platforms, and technical team execution.',
    normalizedAchievements: [
      'Established and institutionalized the Enterprise IT PMO framework across Albilad Capital, standardizing delivery methodologies across digital trading, asset management, and corporate reporting systems.',
      'Governed multi-million-dollar technology project portfolios in strict compliance with Capital Market Authority (CMA) cyber, risk, and operational mandates.',
      'Led cross-functional teams of software architects, database administrators, and business analysts to deliver digital transformation initiatives with a 98% on-time milestone record.'
    ],
    metricsPromptAnswers: {
      portfolioSize: '15+ concurrent enterprise IT programs',
      teamSize: 'Direct & matrix leadership of 20+ IT professionals',
      budgetManaged: 'Enterprise multi-million SAR annual technology envelope',
      geographicScope: 'Saudi Arabia & GCC institutional capital markets'
    }
  },
  {
    id: 'exp-alawwal-vp-ops',
    jobTitle: 'Vice President Business Management OPS',
    arabicJobTitle: 'نائب الرئيس لإدارة العمليات التشغيلية والأعمال',
    employer: 'Alawwal Invest',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Oct 2022',
    endDate: 'Mar 2023',
    duration: '6 months',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Executive operational leadership overseeing business management, institutional settlement infrastructure, operating model redesign, and cross-departmental integration.',
    normalizedAchievements: [
      'Served as Vice President directing business management operations, aligning institutional investment workflows with enterprise business goals.',
      'Engineered operational efficiencies across middle-and-back-office pipelines, eliminating manual operational touchpoints and mitigating transactional risk.',
      'Coordinated executive steering committees between technology, compliance, finance, and trading floor heads.'
    ]
  },
  {
    id: 'exp-alawwal-change-mgr',
    jobTitle: 'Business Change Management Senior Manager',
    arabicJobTitle: 'مدير تنفيذي أول لإدارة التغيير المؤسسي والتحول',
    employer: 'Alawwal Invest',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Nov 2021',
    endDate: 'Nov 2022',
    duration: '1 year 1 month',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Spearheaded corporate change management strategies, system migrations, post-merger technology transitions, and process adoption across all business divisions.',
    normalizedAchievements: [
      'Architected comprehensive business change and technical readiness roadmaps for core investment banking platforms.',
      'Facilitated stakeholder change impacts across trading, risk, compliance, and retail investment branches with zero disruption to daily market operations.'
    ]
  },
  {
    id: 'exp-csec-oracle',
    jobTitle: 'System Analyst - Oracle Consultant',
    arabicJobTitle: 'محلل نظم أول - مستشار أوراكل وقواعد البيانات',
    employer: 'Computer and Systems Engineering Company (CSEC)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Jun 2006',
    endDate: 'Oct 2021',
    duration: '15 years 5 months',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: '15+ years of extensive enterprise systems consulting, Oracle database architecture, PL/SQL stored procedures, ERP implementations, and technical systems analysis for tier-1 Saudi clients.',
    normalizedAchievements: [
      'Engineered complex Oracle PL/SQL database packages, stored procedures, triggers, and ETL pipelines processing millions of daily financial and enterprise records.',
      'Served as lead systems analyst and client-facing Oracle consultant across 15+ multi-year enterprise ERP and bespoke database deployments.',
      'Tuned high-volume database queries and data schemas, achieving up to 60% improvements in batch processing and transaction latency.',
      'Mentored and guided dozens of junior software developers and systems analysts throughout a distinguished 15-year tenure.'
    ]
  },
  {
    id: 'exp-gulf-eng',
    jobTitle: 'Application Developer',
    arabicJobTitle: 'مطور تطبيقات ونظم',
    employer: 'Gulf Engineering House',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Nov 2005',
    endDate: 'Jun 2006',
    duration: '8 months',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Software application development, database design, and procedural code implementation.',
    normalizedAchievements: [
      'Developed custom database applications and procedural modules for engineering management.',
      'Constructed normalized database tables and optimized SQL queries.'
    ]
  },
  {
    id: 'exp-othaim-ops',
    jobTitle: 'Operation Supervisor',
    arabicJobTitle: 'مشرف عمليات تشغيلية',
    employer: 'Othaim Markets Company',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Apr 2004',
    endDate: 'May 2005',
    duration: '1 year 2 months',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Operational logistics supervision, retail inventory workflow monitoring, and team scheduling.',
    normalizedAchievements: [
      'Supervised frontline retail operations, inventory replenishment cycles, and staff scheduling.',
      'Audited point-of-sale operational logs and inventory accuracy.'
    ]
  },
  {
    id: 'exp-planet-oracle',
    jobTitle: 'Oracle Developer',
    arabicJobTitle: 'مطور برمجيات أوراكل',
    employer: 'Planet Information Technology',
    location: 'Khartoum, Sudan',
    startDate: 'Mar 2001',
    endDate: 'Feb 2004',
    duration: '3 years',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Core database development, Oracle Forms & Reports, PL/SQL code creation, and database schema implementation.',
    normalizedAchievements: [
      'Authored robust PL/SQL packages, stored procedures, and triggers for client accounting software.',
      'Designed and deployed Oracle Forms & Reports interfaces for enterprise business users.',
      'Maintained database schema integrity and performed scheduled database backups.'
    ]
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
  albertaDemand: 'High' | 'Moderate' | 'Growing';
  commonCalgaryEmployers: string[];
  certificationsThatHelp: string[];
  timeToBecomeCompetitive: string;
  searchKeywords: string[];
  dataSource: string;
}

export const canadianJobMatches: CanadianJobMatch[] = [
  {
    id: 'job-noc-20012',
    jobTitle: 'Computer & Information Systems Manager (IT PMO / Applications Director)',
    arabicJobTitle: 'مدير نظم ومعلومات وتقنية (مدير مكتب مشاريع IT PMO / مدير تطبيقات)',
    noc2021Code: 'NOC 20012',
    teerCategory: 'TEER 0 (Management)',
    matchScorePercent: 96,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Direct 1-to-1 match with Yassir’s role as IT PMO Senior Manager at Albilad Capital and former VP Business Operations at Alawwal Invest. Over 20 years directing enterprise software roadmaps, governance frameworks, and technical development teams.',
    arabicWhyItMatches: 'تطابق استثنائي بنسبة 96% مع منصبه كمدير تنفيذي أول لمكتب المشاريع التقنية (IT PMO) بالبلاد المالية ونائب رئيس سابق للعمليات بالأول للاستثمار، مع خبرة 20 عاماً في قيادة النظم البرمجية.',
    transferableSkills: [
      'Enterprise IT PMO governance & portfolio management',
      'Banking & capital markets software integration',
      'Team leadership & vendor contract management',
      'Agile / Hybrid software delivery lifecycle'
    ],
    canadianSkillGaps: [
      'Familiarity with Canadian corporate IT audit standards (SOC 2, OSFI B-10 third-party risk)',
      'Local Agile/Scrum team dynamics in Calgary corporate headquarters'
    ],
    salaryRangeCalgary: {
      lowCAD: 120000,
      medianCAD: 148000,
      highCAD: 185000
    },
    salaryRangeAlberta: {
      medianCAD: 145000
    },
    salaryRangeCanada: {
      medianCAD: 140000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['ATB Financial', 'TC Energy', 'Enbridge', 'Benevity', 'Alberta Health Services (AHS)', 'Mawer Investment Management', 'Suncor IT'],
    certificationsThatHelp: ['PMP (Project Management Professional)', 'PMI-ACP', 'ITIL 4 Managing Professional'],
    timeToBecomeCompetitive: 'Immediate (Profile is already fully aligned)',
    searchKeywords: ['IT PMO Manager Calgary', 'Director Enterprise Applications Calgary', 'IT Delivery Manager Calgary', 'Technology PMO Lead Calgary'],
    dataSource: 'Canada Job Bank NOC 20012 & Robert Half 2026 Technology Salary Guide'
  },
  {
    id: 'job-noc-21222',
    jobTitle: 'Senior Oracle Solutions Consultant / Systems Architect',
    arabicJobTitle: 'مستشار حلول أوراكل أول / مهندس نظم وقواعد بيانات',
    noc2021Code: 'NOC 21222',
    teerCategory: 'TEER 1 (University Degree in Computer Science)',
    matchScorePercent: 95,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Perfect alignment with his 15 years and 5 months as System Analyst - Oracle Consultant at CSEC and his primary LinkedIn skill PL/SQL. Calgary’s enterprise utilities, energy headquarters, and Big 4 consultancies rely heavily on Oracle architectures.',
    arabicWhyItMatches: 'تطابق بنسبة 95% مع خبرته الممتدة لـ 15 سنة ونصف كمستشار أوراكل ومحلل نظم أول في CSEC ومهارته الأساسية في PL/SQL، وهو تخصص مطلوب بشدة في كبرى شركات كالغاري.',
    transferableSkills: [
      'Advanced PL/SQL package development & SQL performance tuning',
      'Oracle Database 11g/12c/19c enterprise architecture',
      'ERP and transactional systems analysis & data modeling',
      'Complex business logic automation & ETL pipelines'
    ],
    canadianSkillGaps: [
      'Oracle Cloud Infrastructure (OCI) and Azure/AWS hybrid integrations',
      'Modern automated CI/CD database deployment tools (Liquibase, Flyway)'
    ],
    salaryRangeCalgary: {
      lowCAD: 102000,
      medianCAD: 130000,
      highCAD: 158000
    },
    salaryRangeAlberta: {
      medianCAD: 128000
    },
    salaryRangeCanada: {
      medianCAD: 122000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['Deloitte Calgary (Oracle Practice)', 'PwC Canada', 'CGI Group Calgary', 'Enmax (Oracle CC&B / ERP)', 'City of Calgary IT', 'Nutrien'],
    certificationsThatHelp: ['Oracle Certified Professional (OCP)', 'AWS Certified Solutions Architect', 'Azure Database Administrator'],
    timeToBecomeCompetitive: '1–2 Months',
    searchKeywords: ['Oracle Consultant Calgary', 'Senior PL/SQL Developer Calgary', 'Oracle Database Architect Calgary', 'Systems Analyst Oracle Calgary'],
    dataSource: 'Canada Job Bank NOC 21222 & Randstad Canada 2026 Tech Benchmarks'
  },
  {
    id: 'job-noc-10019',
    jobTitle: 'Director of Business Operations & IT Change Management',
    arabicJobTitle: 'مدير تنفيذي للعمليات التشغيلية وإدارة التحول المؤسسي',
    noc2021Code: 'NOC 10019',
    teerCategory: 'TEER 0 (Management)',
    matchScorePercent: 92,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Matches his executive roles as VP Business Management Operations and Business Change Management Senior Manager at Alawwal Invest. Specializes in restructuring operational workflows, systems adoption, and stakeholder readiness.',
    arabicWhyItMatches: 'تطابق بنسبة 92% مع مناصبه كنائب رئيس لإدارة العمليات التشغيلية ومدير تنفيذي لإدارة التغيير بالأول للاستثمار، لإعادة هندسة العمليات وقيادة التحول المؤسسي.',
    transferableSkills: [
      'Operating model redesign & process re-engineering',
      'Cross-departmental change management strategies',
      'Executive governance & operating budget management',
      'Bridging technical IT development with commercial business needs'
    ],
    canadianSkillGaps: [
      'Prosci ADKAR change management framework certification (standard in Canada)',
      'Canadian corporate employment and operating governance'
    ],
    salaryRangeCalgary: {
      lowCAD: 115000,
      medianCAD: 142000,
      highCAD: 175000
    },
    salaryRangeAlberta: {
      medianCAD: 140000
    },
    salaryRangeCanada: {
      medianCAD: 135000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['Canadian Pacific Kansas City (CPKC)', 'ATB Financial Transformation Office', 'WestJet Operations', 'Enbridge', 'EY / KPMG Advisory'],
    certificationsThatHelp: ['Prosci Certified Change Practitioner (CCMP)', 'Lean Six Sigma Black Belt'],
    timeToBecomeCompetitive: '1–3 Months',
    searchKeywords: ['Director Business Operations Calgary', 'Change Management Lead Calgary', 'Business Transformation Director Calgary'],
    dataSource: 'Canada Job Bank NOC 10019 & Mercer 2026 Executive Compensation'
  },
  {
    id: 'job-noc-21221',
    jobTitle: 'Lead Business Systems Analyst (Fintech & Capital Markets)',
    arabicJobTitle: 'قائد تحليل نظم الأعمال (للتقنيات المالية وأسواق المال)',
    noc2021Code: 'NOC 21221',
    teerCategory: 'TEER 1 (University Degree)',
    matchScorePercent: 90,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Translating complex financial, investment, and operational requirements into technical specifications for development teams, backed by his B.Sc. in Computer Science.',
    arabicWhyItMatches: 'ترجمة المتطلبات المالية والاستثمارية المعقدة إلى مواصفات فنية وبرمجية بالاستناد لخلفيته الأكاديمية في علوم الحاسب وخبرته العملية.',
    transferableSkills: [
      'Business requirements document (BRD) & functional specifications',
      'Financial transaction workflow analysis & user stories',
      'Data modeling and SQL verification',
      'UAT (User Acceptance Testing) leadership'
    ],
    canadianSkillGaps: [
      'Familiarity with Jira, Confluence, and Azure DevOps in agile environments',
      'Canadian Open Banking and Payments Modernization standards'
    ],
    salaryRangeCalgary: {
      lowCAD: 90000,
      medianCAD: 115000,
      highCAD: 138000
    },
    salaryRangeAlberta: {
      medianCAD: 114000
    },
    salaryRangeCanada: {
      medianCAD: 110000
    },
    calgaryDemand: 'High',
    albertaDemand: 'High',
    commonCalgaryEmployers: ['Neo Financial', 'ATB Financial', 'Symend', 'AltaLink IT', 'RBC Technology Calgary'],
    certificationsThatHelp: ['CBAP (Certified Business Analysis Professional)', 'PMI-PBA'],
    timeToBecomeCompetitive: '1 Month',
    searchKeywords: ['Lead Business Systems Analyst Calgary', 'Fintech Systems Analyst Calgary', 'Senior BSA Calgary'],
    dataSource: 'Job Bank NOC 21221 & Robert Half 2026'
  },
  {
    id: 'job-noc-21232',
    jobTitle: 'Senior Database Developer & PL/SQL Specialist',
    arabicJobTitle: 'مطور قواعد بيانات ومبرمج PL/SQL أول',
    noc2021Code: 'NOC 21232',
    teerCategory: 'TEER 1 (University Degree)',
    matchScorePercent: 88,
    fitRecommendation: 'STRONG MATCH',
    whyItMatches: 'Leverages his foundational 20+ years of programming and database engineering dating from Planet Information Tech and CSEC, with PL/SQL explicitly featured as his top skill on LinkedIn.',
    arabicWhyItMatches: 'الاستفادة المباشرة من 20 عاماً في تطوير قواعد البيانات وبرمجة PL/SQL والتي تمثل مهارته الأولى المعتمدة في لينكد إن.',
    transferableSkills: [
      'PL/SQL architecture, stored packages, and complex SQL scripts',
      'High-throughput database engine optimization',
      'Data warehousing, schema design & ETL integration',
      'Data integrity & financial transaction consistency'
    ],
    canadianSkillGaps: [
      'Cloud database services (Amazon RDS, Azure SQL, Snowflake)',
      'NoSQL and modern data pipeline tools (Kafka, Python for data)'
    ],
    salaryRangeCalgary: {
      lowCAD: 92000,
      medianCAD: 118000,
      highCAD: 142000
    },
    salaryRangeAlberta: {
      medianCAD: 116000
    },
    salaryRangeCanada: {
      medianCAD: 112000
    },
    calgaryDemand: 'Growing',
    albertaDemand: 'Growing',
    commonCalgaryEmployers: ['Shaw / Rogers Technology', 'AESO (Alberta Electric System Operator)', 'WestJet Digital Systems', 'Calgary Co-op IT', 'Fintechs'],
    certificationsThatHelp: ['Oracle Database SQL Certified Associate', 'Snowflake SnowPro Core'],
    timeToBecomeCompetitive: '1–2 Months',
    searchKeywords: ['Senior PL/SQL Developer Calgary', 'Oracle Database Developer Calgary', 'Senior SQL Specialist Calgary'],
    dataSource: 'Canada Job Bank NOC 21232 & Hays Canada 2026'
  }
];

export interface CalgaryEmployerTarget {
  id: string;
  name: string;
  arabicName: string;
  industry: string;
  calgaryPresence: string;
  arabicPresence: string;
  downtownOfficeAddress: string;
  relevantDepartments: string[];
  potentialMatchingRoles: string[];
  careerUrl: string;
  linkedinCompanyUrl: string;
  workModel: string;
  whyYassirFits: string;
  potentialGap: string;
  networkingApproach: string;
  lastChecked: string;
}

export const topCalgaryEmployers: CalgaryEmployerTarget[] = [
  {
    id: 'emp-atb',
    name: 'ATB Financial (Technology & Transformation)',
    arabicName: 'بنك ألبرتا المالي (قطاع التقنية والتحول الرقمي)',
    industry: 'Banking & Technology',
    calgaryPresence: 'Alberta’s crown financial corporation with major corporate technology operations downtown on 8th Ave SW. Employs thousands in enterprise IT and PMO delivery.',
    arabicPresence: 'أكبر مؤسسة مالية حكومية في مقاطعة ألبرتا، مركزها التقني بوسط كالغاري يدير مئات المشاريع التقنية والتحول الرقمي.',
    downtownOfficeAddress: 'ATB Corporate, 585 8 Ave SW, Calgary, AB',
    relevantDepartments: ['Enterprise PMO', 'Core Banking Technology', 'Data & Analytics', 'Business Architecture & Change'],
    potentialMatchingRoles: ['IT PMO Senior Manager', 'Lead Business Systems Analyst', 'Oracle Solutions Consultant', 'Director Technology Delivery'],
    careerUrl: 'https://www.atb.com/careers/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/atb-financial/',
    workModel: 'Hybrid (2–3 days in office)',
    whyYassirFits: 'Yassir brings 20+ years combining investment banking/capital markets IT experience (Albilad Capital & Alawwal Invest) with deep Oracle and enterprise PMO leadership.',
    potentialGap: 'Domestic Canadian banking systems familiarity; mitigated by his deep universal Oracle/PL-SQL and PMO governance credentials.',
    networkingApproach: 'Connect on LinkedIn with ATB Managing Directors of Technology, PMO Directors, and Technology Talent Acquisition leads in Calgary.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-tcenergy',
    name: 'TC Energy (Information Technology & Digital)',
    arabicName: 'تي سي إنرجي (تقنية المعلومات والتحول الرقمي)',
    industry: 'Energy Infrastructure IT',
    calgaryPresence: 'Global energy headquarters in Downtown Calgary. Operates massive enterprise IT systems, Oracle ERP databases, and major technology PMO departments.',
    arabicPresence: 'مقر عالمي ضخم بوسط كالغاري يدير أنظمة أوراكل ومشاريع تقنية كبرى بمليارات الدولارات.',
    downtownOfficeAddress: 'TC Energy Tower, 450 1 St SW, Calgary, AB',
    relevantDepartments: ['Information Systems PMO', 'Enterprise Application Services (Oracle/SAP)', 'Digital Delivery', 'Data Engineering'],
    potentialMatchingRoles: ['Manager IT Project Management', 'Senior Oracle Solutions Architect', 'Enterprise Systems Analyst Lead'],
    careerUrl: 'https://jobs.tcenergy.com/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/tcenergy/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'TC Energy requires seasoned IT leaders with proven Oracle PL/SQL, systems analysis, and enterprise PMO track records.',
    potentialGap: 'Energy pipeline SCADA operational technology knowledge; target enterprise corporate applications and PMO.',
    networkingApproach: 'Attend Calgary IT leaders mixers and engage with TC Energy Directors of IT Delivery.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-enbridge',
    name: 'Enbridge Inc. (Technology & Enterprise Systems)',
    arabicName: 'إنبريدج (تقنية المعلومات والأنظمة المؤسسية)',
    industry: 'Energy & Enterprise Tech',
    calgaryPresence: 'Headquartered in Calgary. Operates North America’s largest corporate energy systems network with heavy Oracle, database, and PMO infrastructure.',
    arabicPresence: 'المقر الرئيسي في كالغاري؛ يدير أكبر شبكة بنية تحتية للطاقة في أمريكا الشمالية مع إدارات تقنية وضبط مشاريع رائدة.',
    downtownOfficeAddress: 'Enbridge Centre, 200 5th Ave SW, Calgary, AB',
    relevantDepartments: ['Enterprise PMO', 'Technology Solutions Delivery', 'Database Architecture', 'Corporate Applications'],
    potentialMatchingRoles: ['Senior Manager IT PMO', 'Oracle Systems Specialist', 'Business Transformation Lead'],
    careerUrl: 'https://www.enbridge.com/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/enbridge/',
    workModel: 'Hybrid (3 days in office)',
    whyYassirFits: 'His 15+ years as Oracle Consultant at CSEC combined with senior PMO leadership fits Enbridge’s continuous enterprise modernization programs.',
    potentialGap: 'None on core competencies; adapt CV to highlight Canadian PMO governance methodologies.',
    networkingApproach: 'Connect with Enbridge Technology Hiring Managers and participate in PMI Southern Alberta Chapter (PMI-SAC) events in Calgary.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-deloitte',
    name: 'Deloitte Canada (Calgary Oracle & Technology Consulting)',
    arabicName: 'ديلويت كندا (استشارات أوراكل والتحول التقني بكالغاري)',
    industry: 'Technology Advisory & Systems Integration',
    calgaryPresence: 'Massive technology consulting practice in Bankers Court Calgary, serving Western Canadian enterprise clients in Oracle, cloud migrations, and digital PMO.',
    arabicPresence: 'أحد أكبر مكاتب الاستشارات التقنية في وسط كالغاري المتخصصة في حلول أوراكل ومكاتب المشاريع.',
    downtownOfficeAddress: 'Bankers Court, 850 2 St SW, Suite 700, Calgary, AB',
    relevantDepartments: ['Oracle Enterprise Solutions', 'Technology Strategy & Transformation', 'Program Delivery & PMO Advisory'],
    potentialMatchingRoles: ['Senior Manager - Oracle Consulting', 'PMO Advisory Practice Lead', 'Enterprise Solutions Architect'],
    careerUrl: 'https://careers.deloitte.ca/',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/deloitte/',
    workModel: 'Hybrid / Client-Facing',
    whyYassirFits: '15 years of consulting experience at Computer & Systems Engineering Co. combined with senior client-side leadership at Albilad Capital.',
    potentialGap: 'Canadian consulting proposal and pitch cycles; his technical Oracle PL/SQL depth is an immediate asset.',
    networkingApproach: 'Reach out to Deloitte Calgary Technology Consulting Partners and Senior Managers.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-benevity',
    name: 'Benevity (Enterprise SaaS Headquarters)',
    arabicName: 'بينيفيتي (المقر الرئيسي للبرمجيات السحابية بكالغاري)',
    industry: 'Enterprise Software & Fintech',
    calgaryPresence: 'Calgary tech unicorn headquartered in the modern East Village. Powers corporate social responsibility software for Fortune 500 companies globally.',
    arabicPresence: 'شركة تقنية سحابية رائدة مقرها كالغاري توظف المئات في تطوير البرمجيات السحابية وإدارة مشاريع التقنية.',
    downtownOfficeAddress: '611 Meredith Rd NE, Calgary, AB',
    relevantDepartments: ['Technical Program Management (TPM)', 'Database & Platform Engineering', 'Enterprise Release Operations'],
    potentialMatchingRoles: ['Senior Technical Program Manager (TPM)', 'Database Reliability Specialist', 'Engineering Operations Lead'],
    careerUrl: 'https://benevity.com/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/benevity/',
    workModel: 'Flexible Hybrid',
    whyYassirFits: 'Valued blend of structured PMO discipline with deep database foundation, bridging enterprise scaling needs.',
    potentialGap: 'Modern cloud SaaS cadence (AWS/Postgres/Snowflake) vs traditional Oracle; easy transition for a veteran computer scientist.',
    networkingApproach: 'Connect with Benevity VP of Engineering and Technical Program Management Leads on LinkedIn.',
    lastChecked: 'September 2026'
  },
  {
    id: 'emp-neo',
    name: 'Neo Financial (Digital Challenger Bank HQ)',
    arabicName: 'نيو فاينانشال (البنك الرقمي الكندي الناشئ)',
    industry: 'Fintech Challenger',
    calgaryPresence: 'Calgary headquarters employing 700+ professionals downtown. Leading digital banking and payment technology in Canada.',
    arabicPresence: 'المقر الرئيسي في كالغاري يوظف أكثر من 700 متخصص في البرمجيات والأنظمة المصرفية الرقمية.',
    downtownOfficeAddress: 'The Edison, 150 9 Ave SW, Calgary, AB',
    relevantDepartments: ['Banking Systems Architecture', 'Technical Project Management', 'Data & Platform Engineering'],
    potentialMatchingRoles: ['Technical Project Manager', 'Senior Systems Analyst', 'Engineering Operations Manager'],
    careerUrl: 'https://www.neofinancial.com/careers',
    linkedinCompanyUrl: 'https://www.linkedin.com/company/neo-financial/',
    workModel: 'Flexible Hybrid',
    whyYassirFits: 'Direct financial systems background from Albilad Capital & Alawwal Invest paired with 20+ years of technical computer science rigor.',
    potentialGap: 'High-speed startup environment using contemporary agile tooling (Jira, GitHub, Slack).',
    networkingApproach: 'Direct outreach to Neo Financial talent acquisition leads and VP of Engineering.',
    lastChecked: 'September 2026'
  }
];

export const calgaryEmployersDatabase = topCalgaryEmployers;

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
    salutation: `Dear Hiring Team at ${companyName},`,
    openingParagraph: `I am writing to express my enthusiastic interest in the ${roleTitle} opportunity with ${companyName}. Bringing over 20 years of verifiable enterprise technology delivery—currently serving as IT PMO Senior Manager at Albilad Capital and formerly Vice President of Business Management Operations at Alawwal Invest in Riyadh—I am eager to contribute robust IT governance, Oracle systems excellence, and large-scale program delivery to your Calgary team.`,
    coreAlignmentParagraph: `Throughout my career bridging deep hands-on software engineering (B.Sc. in Computer Science, 15+ years as an Oracle Consultant with deep PL/SQL expertise) and executive technology governance (leading IT PMOs and business change initiatives), I have consistently driven complex financial platforms and enterprise applications from concept to operational maturity. My experience aligns directly with ${companyName}'s commitment to scalable technology architectures and operational excellence.`,
    quantifiedImpactParagraph: `Key capabilities I bring to ${companyName} include:
• IT PMO Governance & Program Delivery: Institutionalizing portfolio frameworks across 15+ concurrent digital banking and enterprise initiatives with a 98% on-time milestone delivery record.
• Enterprise Database & Systems Architecture: 15+ years designing, tuning, and maintaining high-throughput Oracle PL/SQL databases, transactional ERP systems, and complex ETL pipelines.
• Executive Change Management: Directing operational redesign and technical change readiness as VP Business Management Operations and Business Change Management Senior Manager.`,
    canadianAdaptabilityParagraph: `Having established our permanent family relocation to Calgary, Alberta, I am immediately available for local employment. I bring strong cross-cultural leadership, deep technical problem-solving capabilities, and a commitment to establishing long-term professional roots in Calgary's corporate and technology ecosystem.`,
    closingCallToAction: `Thank you for your time and consideration. I would welcome the opportunity to discuss how my technology management background, Oracle systems depth, and PMO leadership will deliver immediate impact at ${companyName}. I can be reached at +966 59 831 5118 or yassireljak@gmail.com to arrange an interview.\n\nSincerely,\n${candidateName}\nCalgary, Alberta (Relocating)`
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
  currentHeadlineDraft: 'IT PMO Senior Manager at Albilad Capital',
  recommendedHeadline: 'IT PMO Senior Manager | Enterprise Systems & Oracle Solutions Leader | Former VP Business Operations | Relocating to Calgary, AB',
  whyHeadlineWorks: 'Canadian recruiters and hiring managers in Calgary search by specific functional keywords ("IT PMO", "Enterprise Systems", "Oracle", "Solutions Architect", "Change Management") and target city ("Calgary, AB"). This headline immediately captures senior tech and leadership opportunities.',
  aboutSectionDraft: `Results-driven Senior IT PMO Manager, Enterprise Systems Consultant, and former Vice President of Business Management Operations with over 20 years of verifiable technology delivery across capital markets, investment banking, and enterprise consulting.

Proven track record bridging deep computer science and database architecture (B.Sc. Computer Science, 15+ years as Oracle Systems Consultant / PL-SQL Architect) with senior executive governance (IT PMO leadership, business change management, and technology portfolio oversight).

Core Competencies:
• IT PMO Leadership & Governance: Framework institutionalization, resource planning, risk mitigation, and software delivery lifecycles.
• Enterprise Systems & Databases: 15+ years Oracle Database architecture, PL/SQL package development, performance tuning, and systems analysis.
• Business Change Management & Operations: Executive leadership as VP Business Operations, operating model redesign, and systems transition.
• Cross-Functional Leadership: Direct and matrix leadership of multi-disciplinary teams (developers, architects, BAs, project managers).

Currently relocating with my family to Calgary, Alberta, Canada, and actively connecting with forward-thinking enterprise leaders, technology executives, and PMO practices across Western Canada.`,
  topSkillsToFeature: [
    'IT PMO Governance',
    'PL/SQL',
    'Project Management',
    'Team Leadership',
    'Oracle Database 11g/12c/19c',
    'Business Change Management',
    'Systems Analysis',
    'Enterprise Architecture',
    'Agile & Waterfall Methodologies',
    'Vendor & Contract Management'
  ],
  recruiterSearchKeywords: [
    'IT PMO Manager Calgary',
    'Director Technology Delivery Calgary',
    'Oracle Consultant Calgary',
    'PL/SQL Architect Calgary',
    'Technical Project Manager Calgary',
    'Enterprise Systems Manager Alberta'
  ],
  openToWorkStrategy: 'Enable LinkedIn "Open to Work" set to RECRUITERS ONLY. Set target job titles to: IT PMO Manager, Director of Enterprise Applications, Oracle Solutions Architect, Technical Program Manager, Systems Analysis Lead. Set target location to "Calgary, Alberta, Canada" and "Alberta, Canada".'
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
    title: 'Direct Introduction to Calgary Tech & PMO Recruiters',
    arabicTitle: 'رسالة تعارف لوسطاء توظيف التقنية وإدارة المشاريع بكالغاري',
    targetAudience: 'Senior Technology Recruiters (Robert Half Tech, Hays IT, Randstad, TEKsystems Calgary)',
    subjectLine: 'Senior IT PMO Manager & Enterprise Systems Leader Relocating to Calgary — Introduction',
    messageBody: `Hi [Recruiter Name],

I hope this message finds you well.

I came across your profile while researching specialized technology leadership recruitment in Calgary. I am a Senior IT PMO Manager and enterprise systems leader relocating with my family to Calgary with permanent residence status.

Most recently, I serve as IT PMO Senior Manager at Albilad Capital, and previously as Vice President of Business Management Operations at Alawwal Invest. My career combines 15+ years of hands-on Oracle systems analysis and PL/SQL architecture with executive-level IT PMO governance.

I am connecting with technology recruiters in Calgary to explore upcoming senior opportunities in enterprise PMO leadership, systems architecture, and technology delivery.

Would you have 10 minutes for a brief introductory conversation this week? I have attached my Canadian ATS résumé for your reference.

Best regards,
Yassir A. E. Abdulrhman
+966 59 831 5118 | yassireljak@gmail.com
linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321`,
    tips: 'Mentioning your B.Sc. Computer Science and specific roles (Albilad Capital & Alawwal Invest) immediately establishes senior credibility.'
  },
  {
    id: 'outreach-02',
    title: 'Hiring Manager Direct Outreach (IT Directors & VPs in Calgary)',
    arabicTitle: 'تواصل مباشر مع مدراء التقنية والتحول الرقمي بالشركات',
    targetAudience: 'VPs of Technology, Directors of Enterprise Delivery, and Heads of PMO at target employers',
    subjectLine: 'Connection: Enterprise IT PMO & Oracle Systems Leadership',
    messageBody: `Hi [Manager Name],

I have been following [Company Name]'s technology initiatives across Alberta, particularly your focus on [mention specific technology transformation, e.g., enterprise systems modernization / digital delivery].

I am an IT PMO Senior Manager and enterprise systems leader relocating to Calgary, bringing 20+ years of technology delivery experience spanning Albilad Capital, Alawwal Invest, and 15 years in Oracle systems consulting.

I would value the opportunity to connect and learn more about your team's technology priorities in Calgary.

Best regards,
Yassir Abdulrhman`,
    tips: 'Keep it concise and focused on how your experience aligns with their ongoing enterprise projects.'
  },
  {
    id: 'outreach-03',
    title: 'Post-Interview Thank You Note',
    arabicTitle: 'رسالة شكر احترافية بعد المقابلة التقنية',
    targetAudience: 'Technical Interviewers & Hiring Panel',
    subjectLine: 'Thank you — [Role Title] Interview — Yassir Abdulrhman',
    messageBody: `Dear [Interviewer Name],

Thank you very much for your time and the insightful discussion today regarding the [Role Title] position with [Company Name].

I truly enjoyed learning more about your technology roadmap, particularly [mention specific project, e.g., enterprise system integration or PMO scaling discussed]. Our conversation reinforced my strong enthusiasm for the role and confirmed that my background directing IT PMO governance and complex Oracle database architectures will allow me to deliver immediate impact for your team.

Please let me know if you need any additional project portfolio documentation or references. I look forward to the next steps in the process.

Warm regards,
Yassir A. E. Abdulrhman`,
    tips: 'Send within 24 hours of the interview; mention a specific technical architecture or delivery challenge discussed.'
  }
];

export interface InterviewQuestionGuide {
  id: string;
  category: 'Behavioral' | 'Why Calgary & Canada' | 'Technical PMO' | 'Leadership' | 'Conflict & Problem Solving';
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
    question: 'Why are you relocating to Canada, and why have you chosen Calgary specifically over Toronto or Vancouver?',
    arabicQuestion: 'لماذا تنتقل إلى كندا، ولماذا اخترت كالغاري تحديداً على تورونتو وفانكوفر؟',
    canadianInterviewerIntent: 'Employers want assurance that you intend to stay in Calgary long-term and that your family has evaluated the city holistically.',
    starFramework: {
      situation: 'While Toronto and Vancouver have significant tech sectors, my family deliberately evaluated Canadian cities from a 360-degree career and family perspective.',
      task: 'Select a major Canadian economic hub offering both major corporate headquarters (energy, utilities, banking, tech) and an exceptional, safe environment for my three children (ages 16, 11, and 5).',
      action: 'Researched Calgary’s high concentration of corporate headquarters, growing tech innovation ecosystem (ATB, Benevity, Neo, TC Energy), 0% provincial sales tax advantage, and established family communities. Connected with local IT leaders and confirmed Calgary’s unique balance of high-impact enterprise careers and family quality of life.',
      result: 'Committed fully to Calgary as our permanent family home. My focus is 100% dedicated to building a lasting career contributing to Calgary’s technology and enterprise leadership.'
    }
  },
  {
    id: 'q-02',
    category: 'Technical PMO',
    question: 'Describe a complex, multi-stakeholder enterprise IT project that was at risk of deadline slippage. How did you realign the team and deliver successfully?',
    arabicQuestion: 'صف مشروعاً تقنياً معقداً ومتعدد الأطراف كان معرضاً لتأخر التسليم؛ كيف أعدت توجيه الفريق وتحقيق الإنجاز بنجاح؟',
    canadianInterviewerIntent: 'Testing IT PMO governance, stakeholder management, technical problem-solving, and decisive leadership under pressure.',
    starFramework: {
      situation: 'At Albilad Capital, a core regulatory reporting system integration was falling behind schedule due to shifting compliance specifications from external regulators and database synchronization delays.',
      task: 'Realign cross-functional teams (developers, database architects, compliance officers) and recover the 4-week critical path deficit without compromising data integrity or regulatory compliance.',
      action: 'Conducted a rapid root-cause analysis: identified bottlenecks in the PL/SQL batch data transformation layer and established a daily 15-minute cross-functional standup. Restructured the project into two-week agile sprints, prioritized mission-critical CMA reporting modules, and personally guided database query optimization to speed up automated batch reconciliations by 45%.',
      result: 'Successfully delivered the platform 3 days ahead of the regulatory statutory deadline with 100% compliance audit sign-off and zero defect rollbacks.'
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
    phase: '90–60 Days Before Moving (Profile & Network Foundation)',
    arabicPhase: '90 إلى 60 يوماً قبل السفر (بناء الملف والتواصل المبدئي)',
    timeframe: 'In Riyadh',
    objectives: [
      'Finalize 1-column Canadian ATS Master Résumé highlighting IT PMO, Oracle PL/SQL, and VP Operations experience.',
      'Set LinkedIn location to "Calgary, Alberta, Canada" and activate recruiter-only Open to Work.',
      'Build target list of 25 Calgary enterprise employers (ATB, TC Energy, Enbridge, Benevity, Neo, Deloitte, CGI).',
      'Begin introductory outreach to specialized Calgary tech and PMO recruiters (Robert Half Technology, Hays, TEKsystems).',
      'Connect with PMI Southern Alberta Chapter (PMI-SAC) members on LinkedIn.'
    ]
  },
  {
    phase: '60–30 Days Before Moving (Application & Video Interviews)',
    arabicPhase: '60 إلى 30 يوماً قبل السفر (التقديم والمقابلات الافتراضية)',
    timeframe: 'In Riyadh',
    objectives: [
      'Submit 3–5 tailored applications weekly for verified IT PMO Manager and Senior Oracle Solutions roles in Calgary.',
      'Conduct 2 informational coffee chats via Zoom/Teams weekly with Calgary IT directors and enterprise architects.',
      'Prepare STAR interview answers for Canadian behavioral questions emphasizing team leadership and technical problem-solving.',
      'Secure formal written employment and credential verification letters from Saudi employers.'
    ]
  },
  {
    phase: '30–0 Days Before Moving (Landing Readiness)',
    arabicPhase: '30 يوماً حتى يوم الوصول (الاستعداد النهائي للمقابلات)',
    timeframe: 'Final Prep',
    objectives: [
      'State confirmed Calgary arrival date on cover letters to establish immediate local availability.',
      'Schedule first-round video interviews for the week of arrival in Calgary.',
      'Assemble hard copies of degree transcripts (B.Sc. Computer Science & Diploma Electronics), certifications, and reference letters.'
    ]
  },
  {
    phase: 'First 30 Days in Calgary (In-Person Acceleration)',
    arabicPhase: 'أول 30 يوماً في كالغاري (التحرك الميداني والمقابلات الحضورية)',
    timeframe: 'In Calgary',
    objectives: [
      'Obtain Social Insurance Number (SIN) on Day 2 at Service Canada (Marlborough Mall NE / Harry Hays Building).',
      'Attend in-person PMI-SAC and Calgary Tech networking mixers in Downtown Calgary.',
      'Complete final-round in-person interviews in corporate towers across 8th Ave and 2nd St SW.',
      'Evaluate job offers against the Family Living Budget simulator to verify net take-home surplus.'
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
    role: 'Senior Manager, IT PMO & Delivery',
    jobUrl: 'https://www.atb.com/careers/',
    salaryQuotedCAD: 145000,
    location: 'Calgary (Downtown / 8th Ave SW)',
    appliedDate: '2026-08-28',
    resumeVersion: 'Calgary IT PMO Master v1',
    status: 'RECRUITER_SCREEN',
    nextAction: 'Prepare for 30-min phone screen with Technology Talent Acquisition',
    interviewDate: '2026-09-08',
    notes: 'Recruiter reached out on LinkedIn; strongly interested in Albilad Capital IT PMO and Oracle enterprise background.'
  },
  {
    id: 'exp-002',
    company: 'Deloitte Canada',
    role: 'Senior Manager - Oracle Solutions Consulting',
    jobUrl: 'https://careers.deloitte.ca/',
    salaryQuotedCAD: 140000,
    location: 'Calgary (Bankers Court)',
    appliedDate: '2026-09-01',
    resumeVersion: 'Oracle Solutions Architect v1',
    status: 'APPLIED',
    nextAction: 'Follow up with Consulting Partner via LinkedIn on September 12',
    notes: 'Application submitted for Calgary Oracle practice; 15 years CSEC experience matches client ERP engagement requirements.'
  }
];
