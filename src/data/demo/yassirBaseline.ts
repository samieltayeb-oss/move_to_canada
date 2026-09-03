/**
 * IMMUTABLE BASELINE DEMO DATA — YASSIR A. E. ABDULRHMAN
 * 
 * This file serves as the canonical reference data for Demo Mode.
 * It is preserved 100% identically to the approved Alberta V1 baseline.
 * New users will receive pristine, blank profiles and will NEVER inherit this data.
 */

import { FamilyProfile } from '../types';
import { VerifiedProfessionalProfile, UserCareerExperience } from '../careerEngine';

export const YASSIR_BASELINE_FAMILY_PROFILE: FamilyProfile = {
  headOfHousehold: 'Yassir A. E. Abdulrhman',
  originCity: 'Riyadh',
  originCountry: 'Saudi Arabia',
  targetCity: 'Calgary',
  targetProvince: 'Alberta',
  numAdults: 2,
  numChildren: 3,
  childrenAges: [16, 11, 5], // Canonical ages: 16 (Senior High), 11 (Grade 6), 5 (Kindergarten)
  immigrationStatus: 'Permanent Resident',
  expectedAnnualHouseholdIncomeCAD: 125000,
  initialSavingsCAD: 85000,
  housingPreference: '4-Bed',
  propertyTypePreference: 'Detached House',
  vehicleCount: 1,
  preferredCommuteMins: 30,
  islamicSchoolPreference: false,
  publicSchoolPreference: true,
  communityPriorities: ['Public CBE Schools', 'Islamic Community', 'Large House', 'Safety', 'Parks']
};

export const YASSIR_PRE_ARRIVAL_INCOME = {
  currency: 'SAR',
  amountSAR: 250000,
  convertedCAD: 91900,
  exchangeRate: 0.3676, // 2.7204 SAR/CAD
  taxYear: 2025,
  formRequirement: 'Form RC66SCH (Status in Canada & Statement of World Income)'
};

export const YASSIR_BASELINE_CAREER_PROFILE: VerifiedProfessionalProfile = {
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

export const YASSIR_BASELINE_WORK_EXPERIENCE: UserCareerExperience[] = [
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
    id: 'exp-alawwal-vp',
    jobTitle: 'Vice President of Business Management Operations',
    arabicJobTitle: 'نائب الرئيس لعمليات إدارة الأعمال (VP Business Management Operations)',
    employer: 'Alawwal Invest (الاستثمار الأول)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Oct 2022',
    endDate: 'Mar 2023',
    duration: '6 mos',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Spearheaded operational integration and executive alignment across capital market investment operations following major institutional restructuring.',
    normalizedAchievements: [
      'Spearheaded executive operational alignment across institutional investment banking and asset management divisions following major corporate restructuring.',
      'Streamlined operational cost structures and standardized back-office reporting workflows to enhance regulatory governance.'
    ]
  },
  {
    id: 'exp-alawwal-bcm',
    jobTitle: 'Business Change Management Senior Manager',
    arabicJobTitle: 'مدير تنفيذي أول لإدارة التغيير في الأعمال (Business Change Management)',
    employer: 'Alawwal Invest (الاستثمار الأول)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Nov 2021',
    endDate: 'Nov 2022',
    duration: '1 yr 1 mo',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Directed business transformation initiatives, core systems migration, and stakeholder change roadmaps across investment banking units.',
    normalizedAchievements: [
      'Directed enterprise change management strategies for mission-critical investment banking systems migration.',
      'Architected transition readiness roadmaps, stakeholder alignment frameworks, and business continuity protocols during systems integration.'
    ]
  },
  {
    id: 'exp-csec-oracle',
    jobTitle: 'System Analyst - Oracle Consultant',
    arabicJobTitle: 'محلل نظم واستشاري حلول أوراكل (Oracle Consultant & Systems Analyst)',
    employer: 'Computer & Systems Engineering Co. (CSEC - الشركة الهندسية للحاسبات والنظم)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Jun 2006',
    endDate: 'Oct 2021',
    duration: '15 yrs 5 mos',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: '15+ years delivering enterprise systems analysis, Oracle database engineering, PL/SQL development, and corporate client technology implementations.',
    normalizedAchievements: [
      'Delivered 15+ years of continuous enterprise systems architecture, client consulting, and full life-cycle Oracle database and ERP implementations across major Saudi enterprises.',
      'Designed and optimized mission-critical relational database models, high-volume PL/SQL packages, stored procedures, and complex data migration pipelines.',
      'Authored comprehensive technical architecture documentation, system specifications, and integration test plans for corporate clients.'
    ],
    metricsPromptAnswers: {
      portfolioSize: '30+ enterprise Oracle implementation projects',
      transactionVolume: 'High-concurrency mission-critical financial systems'
    }
  },
  {
    id: 'exp-gulf-eng',
    jobTitle: 'Application Developer',
    arabicJobTitle: 'مطور تطبيقات ونظم قواعد بيانات',
    employer: 'Gulf Engineering House',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Nov 2005',
    endDate: 'Jun 2006',
    duration: '8 mos',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Engineered database applications, form interfaces, and custom reporting tools for architectural and engineering project management.',
    normalizedAchievements: [
      'Developed database modules, user interface forms, and automated reporting systems for enterprise engineering operations.'
    ]
  },
  {
    id: 'exp-othaim',
    jobTitle: 'Operation Supervisor',
    arabicJobTitle: 'مشرف عمليات ونظم التجزئة',
    employer: 'Othaim Markets (أسواق عبد الله العثيم)',
    location: 'Riyadh, Saudi Arabia',
    startDate: 'Apr 2004',
    endDate: 'May 2005',
    duration: '1 yr 2 mos',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Supervised point-of-sale systems, inventory database reconciliation, and store operations for leading Saudi retail supermarket chain.',
    normalizedAchievements: [
      'Supervised inventory data accuracy, retail POS terminal uptime, and supply chain logistics operations across major retail branches.'
    ]
  },
  {
    id: 'exp-planet-it',
    jobTitle: 'Oracle Developer',
    arabicJobTitle: 'مطور نظم قواعد بيانات أوراكل',
    employer: 'Planet Information Technology',
    location: 'Khartoum, Sudan',
    startDate: 'Mar 2001',
    endDate: 'Feb 2004',
    duration: '3 yrs',
    isCurrent: false,
    status: 'VERIFIED',
    rawDescription: 'Built database applications using Oracle Developer 2000, Forms, Reports, and SQL/PL-SQL for corporate clients.',
    normalizedAchievements: [
      'Programmed enterprise database client-server software using Oracle Developer 2000, Forms 6i, and Reports 6i.',
      'Engineered relational database schemas and automated accounting reconciliation modules for commercial clients.'
    ]
  }
];
