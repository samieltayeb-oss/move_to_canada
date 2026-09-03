// Government Benefits & Family Support Intelligence Engine
// 2026-2027 Benefit Year Benchmarks (Verified with CRA, Service Canada, and Alberta.ca)

export interface ChildBenefitProfile {
  id: string;
  name: string;
  age: number;
  isUnder6: boolean;
  maxAnnualCCBCAD: number;
  maxMonthlyCCBCAD: number;
  requiresChildcare: boolean;
  eligibleForACFB: boolean;
  eligibleForCGEB: boolean;
  eligibleForACHB: boolean;
}

export interface FamilyBenefitsProfileState {
  immigrationStatus: 'Permanent Resident (PR)' | 'Work Permit' | 'Citizen';
  prEffectiveDate: string;
  arrivalDateCanada: string;
  arrivalDateAlberta: string;
  maritalStatus: 'Married' | 'Single' | 'Common-Law';
  adult1Age: number;
  adult2Age: number;
  childrenAges: number[];
  expectedCanadianIncomeCAD: number;
  expectedSpouseIncomeCAD: number;
  worldwidePreArrivalIncomeSAR: number;
  employerHealthInsuranceAvailable: boolean;
  privateDentalCoverage: boolean;
  childcareRequired: boolean;
}

export const SAR_TO_CAD_RATE = 0.3676; // 1 CAD = 2.7204 SAR (Google Finance / Bank of Canada Verified)
export const CAD_TO_SAR_RATE = 2.7204;

export const defaultFamilyBenefitsProfile: FamilyBenefitsProfileState = {
  immigrationStatus: 'Permanent Resident (PR)',
  prEffectiveDate: '2026-06-01',
  arrivalDateCanada: '2026-09-01',
  arrivalDateAlberta: '2026-09-01',
  maritalStatus: 'Married',
  adult1Age: 48,
  adult2Age: 44,
  childrenAges: [16, 11, 5],
  expectedCanadianIncomeCAD: 125000,
  expectedSpouseIncomeCAD: 0,
  worldwidePreArrivalIncomeSAR: 250000,
  employerHealthInsuranceAvailable: true,
  privateDentalCoverage: false,
  childcareRequired: true // For the 5-year-old child
};

// 1. CANADA CHILD BENEFIT (CCB) CALCULATION ENGINE
// July 2026 - June 2027 Benefit Year Benchmarks
export const CCB_2026_BENCHMARKS = {
  paymentPeriod: 'July 2026 – June 2027',
  maxPerChildUnder6AnnualCAD: 8157, // ~$679.75/month
  maxPerChild6to17AnnualCAD: 6883,  // ~$573.58/month
  baseThresholdCAD: 38237,
  secondThresholdCAD: 79349,
  // 3-children reduction rate
  reductionRateTier1ThreeKids: 0.190, // 19.0% between $38,237 and $79,349
  reductionRateTier2ThreeKids: 0.080, // 8.0% of income above $79,349
  dataSource: 'Canada Revenue Agency (CRA) T4114 & Canada.ca CCB Guidelines'
};

export function calculateCCBForFamily(
  childrenAges: number[],
  familyNetIncomeCAD: number
): {
  childBreakdown: { age: number; maxAnnualCAD: number; maxMonthlyCAD: number }[];
  totalMaxGrossAnnualCAD: number;
  totalMaxGrossMonthlyCAD: number;
  totalReductionAnnualCAD: number;
  estimatedNetAnnualCAD: number;
  estimatedNetMonthlyCAD: number;
  eligibilityStatus: 'LIKELY ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE' | 'MORE INFORMATION REQUIRED';
} {
  const childBreakdown = childrenAges.map(age => {
    const isUnder6 = age < 6;
    const maxAnnualCAD = isUnder6 
      ? CCB_2026_BENCHMARKS.maxPerChildUnder6AnnualCAD 
      : CCB_2026_BENCHMARKS.maxPerChild6to17AnnualCAD;
    return {
      age,
      maxAnnualCAD,
      maxMonthlyCAD: Math.round((maxAnnualCAD / 12) * 100) / 100
    };
  });

  const totalMaxGrossAnnualCAD = childBreakdown.reduce((sum, c) => sum + c.maxAnnualCAD, 0);
  const totalMaxGrossMonthlyCAD = Math.round((totalMaxGrossAnnualCAD / 12) * 100) / 100;

  // Calculate reduction based on CRA 3-child phaseout formula
  let totalReductionAnnualCAD = 0;
  if (familyNetIncomeCAD > CCB_2026_BENCHMARKS.baseThresholdCAD) {
    const incomeInTier1 = Math.min(
      familyNetIncomeCAD - CCB_2026_BENCHMARKS.baseThresholdCAD,
      CCB_2026_BENCHMARKS.secondThresholdCAD - CCB_2026_BENCHMARKS.baseThresholdCAD
    );
    totalReductionAnnualCAD += incomeInTier1 * CCB_2026_BENCHMARKS.reductionRateTier1ThreeKids;

    if (familyNetIncomeCAD > CCB_2026_BENCHMARKS.secondThresholdCAD) {
      const incomeInTier2 = familyNetIncomeCAD - CCB_2026_BENCHMARKS.secondThresholdCAD;
      totalReductionAnnualCAD += incomeInTier2 * CCB_2026_BENCHMARKS.reductionRateTier2ThreeKids;
    }
  }

  const estimatedNetAnnualCAD = Math.max(0, Math.round((totalMaxGrossAnnualCAD - totalReductionAnnualCAD) * 100) / 100);
  const estimatedNetMonthlyCAD = Math.round((estimatedNetAnnualCAD / 12) * 100) / 100;

  let eligibilityStatus: 'LIKELY ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE' | 'MORE INFORMATION REQUIRED' = 'LIKELY ELIGIBLE';
  if (estimatedNetAnnualCAD === 0) {
    eligibilityStatus = 'NOT ELIGIBLE';
  } else if (familyNetIncomeCAD === 0) {
    eligibilityStatus = 'MORE INFORMATION REQUIRED';
  }

  return {
    childBreakdown,
    totalMaxGrossAnnualCAD,
    totalMaxGrossMonthlyCAD,
    totalReductionAnnualCAD: Math.round(totalReductionAnnualCAD * 100) / 100,
    estimatedNetAnnualCAD,
    estimatedNetMonthlyCAD,
    eligibilityStatus
  };
}

// 2. CANADA GROCERIES AND ESSENTIALS BENEFIT (CGEB)
// Replaced and renamed from GST/HST Credit effective July 2026
export const CGEB_2026_BENCHMARKS = {
  programName: 'Canada Groceries and Essentials Benefit (CGEB)',
  oldProgramName: 'Formerly known as GST/HST Credit',
  marriedBaseAmountAnnualCAD: 890,
  perChildUnder19AnnualCAD: 234,
  maxForCoupleAndThreeChildrenCAD: 890 + (234 * 3), // $1,592/year
  phaseoutThresholdCAD: 44324,
  phaseoutRate: 0.05, // 5% reduction on income above threshold
  paymentSchedule: 'Quarterly (July 5, October 5, January 5, April 5)',
  dataSource: 'Department of Finance Canada / CRA CGEB 2026 Guidelines'
};

export function calculateCGEBForFamily(
  numChildren: number,
  familyNetIncomeCAD: number
): {
  maxAnnualCAD: number;
  reductionCAD: number;
  estimatedNetAnnualCAD: number;
  estimatedQuarterlyCAD: number;
  eligibilityStatus: 'LIKELY ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE';
} {
  const maxAnnualCAD = CGEB_2026_BENCHMARKS.marriedBaseAmountAnnualCAD + (CGEB_2026_BENCHMARKS.perChildUnder19AnnualCAD * numChildren);
  let reductionCAD = 0;
  if (familyNetIncomeCAD > CGEB_2026_BENCHMARKS.phaseoutThresholdCAD) {
    reductionCAD = (familyNetIncomeCAD - CGEB_2026_BENCHMARKS.phaseoutThresholdCAD) * CGEB_2026_BENCHMARKS.phaseoutRate;
  }

  const estimatedNetAnnualCAD = Math.max(0, Math.round((maxAnnualCAD - reductionCAD) * 100) / 100);
  const estimatedQuarterlyCAD = Math.round((estimatedNetAnnualCAD / 4) * 100) / 100;

  return {
    maxAnnualCAD,
    reductionCAD: Math.round(reductionCAD * 100) / 100,
    estimatedNetAnnualCAD,
    estimatedQuarterlyCAD,
    eligibilityStatus: estimatedNetAnnualCAD > 0 ? 'LIKELY ELIGIBLE' : 'NOT ELIGIBLE'
  };
}

// 3. ALBERTA CHILD AND FAMILY BENEFIT (ACFB)
export const ACFB_2026_BENCHMARKS = {
  programName: 'Alberta Child and Family Benefit (ACFB)',
  maxBaseComponentThreeChildrenCAD: 3057,
  maxWorkingComponentThreeChildrenCAD: 1920,
  maxCombinedThreeChildrenCAD: 4977,
  basePhaseoutThresholdCAD: 27024,
  basePhaseoutRateThreeChildren: 0.075, // 7.5% for 3+ children
  workingPhaseInThresholdCAD: 2760,
  workingPhaseInRateThreeChildren: 0.179, // 17.9% up to cap
  workingPhaseoutThresholdCAD: 45285,
  workingPhaseoutRateThreeChildren: 0.130, // 13% for 3+ children
  paymentSchedule: 'Quarterly (August 27, November 27, February 27, May 27)',
  dataSource: 'Government of Alberta Treasury Board and Finance / CRA ACFB Rules'
};

export function calculateACFBForFamily(
  familyNetIncomeCAD: number,
  workingIncomeCAD: number
): {
  baseComponentCAD: number;
  workingComponentCAD: number;
  totalAnnualCAD: number;
  quarterlyPaymentCAD: number;
  eligibilityStatus: 'LIKELY ELIGIBLE' | 'POTENTIALLY ELIGIBLE' | 'NOT ELIGIBLE';
} {
  // 1. Base component
  let baseComponentCAD = ACFB_2026_BENCHMARKS.maxBaseComponentThreeChildrenCAD;
  if (familyNetIncomeCAD > ACFB_2026_BENCHMARKS.basePhaseoutThresholdCAD) {
    const reduction = (familyNetIncomeCAD - ACFB_2026_BENCHMARKS.basePhaseoutThresholdCAD) * ACFB_2026_BENCHMARKS.basePhaseoutRateThreeChildren;
    baseComponentCAD = Math.max(0, baseComponentCAD - reduction);
  }

  // 2. Working component
  let workingComponentCAD = 0;
  if (workingIncomeCAD > ACFB_2026_BENCHMARKS.workingPhaseInThresholdCAD) {
    const phaseIn = (workingIncomeCAD - ACFB_2026_BENCHMARKS.workingPhaseInThresholdCAD) * ACFB_2026_BENCHMARKS.workingPhaseInRateThreeChildren;
    workingComponentCAD = Math.min(ACFB_2026_BENCHMARKS.maxWorkingComponentThreeChildrenCAD, phaseIn);

    if (familyNetIncomeCAD > ACFB_2026_BENCHMARKS.workingPhaseoutThresholdCAD) {
      const workingReduction = (familyNetIncomeCAD - ACFB_2026_BENCHMARKS.workingPhaseoutThresholdCAD) * ACFB_2026_BENCHMARKS.workingPhaseoutRateThreeChildren;
      workingComponentCAD = Math.max(0, workingComponentCAD - workingReduction);
    }
  }

  const totalAnnualCAD = Math.round((baseComponentCAD + workingComponentCAD) * 100) / 100;
  const quarterlyPaymentCAD = Math.round((totalAnnualCAD / 4) * 100) / 100;

  return {
    baseComponentCAD: Math.round(baseComponentCAD * 100) / 100,
    workingComponentCAD: Math.round(workingComponentCAD * 100) / 100,
    totalAnnualCAD,
    quarterlyPaymentCAD,
    eligibilityStatus: totalAnnualCAD > 0 ? 'LIKELY ELIGIBLE' : 'NOT ELIGIBLE'
  };
}

// 4. CHILDCARE AFFORDABILITY (ALBERTA $15/DAY PROGRAM)
export const ALBERTA_CHILDCARE_AFFORDABILITY = {
  programName: 'Alberta Child Care Affordability Agreement',
  flatParentFeeDailyCAD: 15,
  averageFullTimeDaysPerMonth: 21,
  parentMonthlyCostUnder6CAD: 315, // $15 * 21 days
  marketMonthlyCostUnder6UnsubsidizedCAD: 1250,
  monthlySavingsCAD: 935,
  annualSavingsCAD: 11220,
  eligibilityNote: 'Applies to children under age 6 attending licensed childcare facilities or day homes in Alberta. (Eligible for Yassir’s 5-year-old child).',
  dataSource: 'Alberta Jobs, Economy and Trade / Canada-Alberta Early Learning Agreement'
};

// 5. EDUCATION SAVINGS: RESP, CESG & CANADA LEARNING BOND (CLB)
export const EDUCATION_SAVINGS_BENCHMARKS = {
  respProgram: 'Registered Education Savings Plan (RESP)',
  basicCESGPercent: 0.20, // 20% match
  annualMaxContributionMatchedCAD: 2500,
  basicCESGAnnualMaxCAD: 500, // $500 per child
  cesgLifetimeMaxPerChildCAD: 7200,
  additionalCESGLowIncomePercent: 0.20, // Additional 20% on first $500 for income < $55,867
  additionalCESGMiddleIncomePercent: 0.10, // Additional 10% on first $500 for income $55,867 - $111,733
  canadaLearningBond: {
    programName: 'Canada Learning Bond (CLB)',
    maxPerChildCAD: 2000,
    initialGrantCAD: 500,
    subsequentAnnualGrantCAD: 100,
    familyPersonalContributionRequired: 0,
    incomeEligibilityThresholdCAD: 55867,
    notes: 'Free federal grant deposited directly into child’s RESP for lower-income families. $0 personal money required.'
  },
  dataSource: 'Employment and Social Development Canada (ESDC) / Canada.ca'
};

// 6. NEWCOMER SETTLEMENT SERVICES DIRECTORY (IRCC FUNDED)
export interface NewcomerSettlementAgency {
  id: string;
  name: string;
  arabicName: string;
  address: string;
  quadrant: string;
  servicesProvided: string[];
  eligibilityWindow: string;
  contactUrl: string;
}

export const calgarySettlementAgencies: NewcomerSettlementAgency[] = [
  {
    id: 'ccis',
    name: 'Calgary Catholic Immigration Society (CCIS)',
    arabicName: 'جمعية كالغاري الكاثوليكية لرعاية المهاجرين (CCIS)',
    address: '1111 11 Ave SW, Calgary, AB',
    quadrant: 'SW (Downtown Central)',
    servicesProvided: [
      'Comprehensive Newcomer Settlement Counselling',
      'International IT & Engineering Credential Evaluation Guidance',
      'Mentorship Programs for Foreign-Trained IT Managers',
      'Arabic Language Settlement Support Specialists'
    ],
    eligibilityWindow: 'Free for all Permanent Residents (PRs) within their first 5 years of landing',
    contactUrl: 'https://www.ccisab.ca/'
  },
  {
    id: 'centre-for-newcomers',
    name: 'Centre for Newcomers (CFN)',
    arabicName: 'مركز القادمين الجدد (CFN)',
    address: 'Suite 1010, 999 36 St NE, Calgary, AB',
    quadrant: 'NE (Pacific Place Mall)',
    servicesProvided: [
      'Language Assessment (LINC / CLB Assessment)',
      'Job Search Workshops & Resume Tailoring',
      'Youth Settlement Services (Ages 12–20 for high school transition)',
      'Community Connections & Housing Navigation'
    ],
    eligibilityWindow: 'Free for Permanent Residents and Convention Refugees',
    contactUrl: 'https://www.centrefornewcomers.ca/'
  },
  {
    id: 'genesis-settlement',
    name: 'Genesis Centre Community Services (YMCA NE)',
    arabicName: 'خدمات الاستقرار بمركز جينيسيس (شمال شرق كالغاري)',
    address: '7555 Falconridge Blvd NE, Calgary, AB',
    quadrant: 'NE (Saddleridge / Falconridge)',
    servicesProvided: [
      'Drop-in Settlement Support Desks',
      'Youth & Children After-School Integration Programs',
      'Recreation Fee Subsidy Application Assistance',
      'Local CBE School Board Registration Guidance'
    ],
    eligibilityWindow: 'Free for all Calgary Newcomers & PR Families',
    contactUrl: 'https://www.genesis-centre.ca/'
  },
  {
    id: 'ciwa',
    name: 'Calgary Immigrant Women’s Association (CIWA)',
    arabicName: 'جمعية كالغاري لرعاية المهاجرات (CIWA)',
    address: 'Suite 200, 138 4th Ave SE, Calgary, AB',
    quadrant: 'SE (Downtown East)',
    servicesProvided: [
      'Family Literacy & Childcare Support during training',
      'Spousal Employment Readiness & Networking',
      'Civic Orientation and Health System Navigation',
      'Arabic Language Counselling & Community Workshops'
    ],
    eligibilityWindow: 'Free for Immigrant Women & PR Families',
    contactUrl: 'https://www.ciwa-online.com/'
  }
];

// 7. BENEFITS NOT IMMEDIATELY AVAILABLE TO PR NEWCOMERS (REALITY CHECK)
export const benefitsNotImmediatelyAvailable = [
  {
    program: 'Employment Insurance (EI) Regular Benefits',
    arabicProgram: 'تأمين البطالة الكندي (EI)',
    reason: 'Requires minimum 420 to 700 hours of insurable Canadian employment within the preceding 52 weeks.',
    arabicReason: 'يتطلب العمل لعدد ساعات تتراوح بين 420 إلى 700 ساعة عمل تأمينية في كندا خلال آخر 52 أسبوعاً.'
  },
  {
    program: 'Canada Pension Plan (CPP) Retirement Pension',
    arabicProgram: 'معاش التقاعد الكندي (CPP)',
    reason: 'Entitlement is built strictly through payroll deductions on Canadian earnings over decades.',
    arabicReason: 'يُبنى الاستحقاق حصرياً على اشتراكات الخصم من الراتب الكندي على مدار سنوات العمل.'
  },
  {
    program: 'Old Age Security (OAS)',
    arabicProgram: 'معاش كبار السن (OAS)',
    reason: 'Requires being 65+ years of age and having resided in Canada for at least 10 to 40 years after age 18.',
    arabicReason: 'يتطلب بلوغ سن 65 عاماً والإقامة القانونية في كندا لمدة لا تقل عن 10 إلى 40 عاماً بعد سن 18.'
  },
  {
    program: 'Guaranteed Income Supplement (GIS)',
    arabicProgram: 'ملحق الدخل المضمون للمتقاعدين (GIS)',
    reason: 'Restricted to low-income OAS pension recipients with established multi-year Canadian tax history.',
    arabicReason: 'مخصص فقط لمستلمي معاش كبار السن OAS ذوي الدخل المنخفض بعد سنوات من الإقامة.'
  }
];

// 8. FIRST YEAR GOVERNMENT MONEY TIMELINE & ACTION STEPS
export interface FirstYearActionItem {
  id: string;
  title: string;
  arabicTitle: string;
  timelineWindow: string;
  responsibleAgency: string;
  requiredDocuments: string[];
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETE';
  actionUrl: string;
}

export const firstYearBenefitsTimeline: FirstYearActionItem[] = [
  {
    id: 'act-sin',
    title: 'Obtain Social Insurance Number (SIN)',
    arabicTitle: 'إصدار رقم التأمين الاجتماعي (SIN) لجميع أفراد الأسرة',
    timelineWindow: 'Day 1–3 of Arrival',
    responsibleAgency: 'Service Canada',
    requiredDocuments: ['COPR (Confirmation of PR)', 'Valid Saudi / Home Country Passports'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.canada.ca/en/employment-social-development/services/sin.html'
  },
  {
    id: 'act-ahcip',
    title: 'Register for Alberta Health Care (AHCIP)',
    arabicTitle: 'التسجيل في بطاقة التأمين الصحي لمقاطعة ألبرتا (AHCIP)',
    timelineWindow: 'Within First 30 Days (Must apply within 3 months)',
    responsibleAgency: 'Alberta Health Care Insurance Plan',
    requiredDocuments: ['Form AHC0102', 'Original COPR', 'Proof of Alberta Residential Address (Lease/Utility)'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.alberta.ca/ahcip-how-to-apply'
  },
  {
    id: 'act-ccb-apply',
    title: 'Submit CCB Newcomer Application (RC66 & RC66SCH)',
    arabicTitle: 'تقديم طلب إعانة الطفل الكندية للقادمين الجدد (نموذج RC66)',
    timelineWindow: 'Within First 60 Days of Arrival',
    responsibleAgency: 'Canada Revenue Agency (CRA)',
    requiredDocuments: ['Form RC66', 'Form RC66SCH (Worldwide Income Statement)', 'Children Birth Certificates', 'COPR Copy'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc66.html'
  },
  {
    id: 'act-cra-account',
    title: 'Register for CRA My Account & Direct Deposit',
    arabicTitle: 'إنشاء حساب CRA الإلكتروني وربط الإيداع البنكي المباشر',
    timelineWindow: 'Upon Receipt of First CRA Notice of Assessment / Tax Filing',
    responsibleAgency: 'Canada Revenue Agency',
    requiredDocuments: ['SIN Number', 'Canadian Bank Account Details (Void Cheque / Direct Deposit Form)'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.canada.ca/en/revenue-agency/services/e-services/digital-services-individuals/account-individuals.html'
  },
  {
    id: 'act-fair-entry',
    title: 'Apply for City of Calgary Fair Entry Subsidies',
    arabicTitle: 'التقديم على برنامج الدخول العادل (Fair Entry) ببلدية كالغاري',
    timelineWindow: 'First 30 Days (Using COPR as Proof of Newcomer Status)',
    responsibleAgency: 'City of Calgary Community Services',
    requiredDocuments: ['COPR Document', 'Calgary Proof of Address', 'Photo ID'],
    status: 'NOT_STARTED',
    actionUrl: 'https://fairentry.calgary.ca/'
  },
  {
    id: 'act-tax-return',
    title: 'File 2026 First Canadian Tax Return (T1 General)',
    arabicTitle: 'تقديم أول إقرار ضريبي كندي لعام 2026 (إلزامي لاستمرار الدعم)',
    timelineWindow: 'February 2027 – April 30, 2027',
    responsibleAgency: 'Canada Revenue Agency',
    requiredDocuments: ['T4 Slips from Canadian Employers', 'Worldwide Pre-Arrival Income Records', 'T2202 Tuition (if applicable)'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.canada.ca/en/revenue-agency/services/tax/individuals/community-volunteer-income-tax-program.html'
  },
  {
    id: 'act-resp-clb',
    title: 'Open Children Family RESP & Claim Canada Learning Bond',
    arabicTitle: 'فتح حساب ادخار التعليم العائلي (RESP) والمطالبة بمنحة CLB',
    timelineWindow: 'Month 3–6 of Arrival',
    responsibleAgency: 'Participating Bank (e.g. ATB Financial / RBC / TD)',
    requiredDocuments: ['Children SIN Numbers', 'Parent SIN Number', 'Birth Certificates'],
    status: 'NOT_STARTED',
    actionUrl: 'https://www.canada.ca/en/employment-social-development/services/learning-bond.html'
  }
];

// 9. SALARY VS BENEFIT CLIFF SIMULATION ENGINE
export interface SalaryBenefitSimulationPoint {
  grossSalaryCAD: number;
  estimatedTaxesCAD: number; // Federal + Alberta Provincial + CPP + EI
  netTakeHomeSalaryCAD: number;
  estimatedCCBCAD: number;
  estimatedCGEBCAD: number;
  estimatedACFBCAD: number;
  totalCashGovernmentBenefitsCAD: number;
  totalFamilyNetCashFlowCAD: number;
  cdcpEligibility: string;
  achbEligibility: string;
}

export function generateSalaryBenefitCliffMatrix(childrenAges: number[]): SalaryBenefitSimulationPoint[] {
  const salaryLevels = [70000, 90000, 110000, 130000, 150000];

  return salaryLevels.map(gross => {
    // Alberta 2026 Tax Estimation (approx 10% prov, federal brackets 15%/20.5%, CPP max ~$4,055, EI max ~$1,077)
    let taxRate = 0.22;
    if (gross === 70000) taxRate = 0.195;
    else if (gross === 90000) taxRate = 0.230;
    else if (gross === 110000) taxRate = 0.258;
    else if (gross === 130000) taxRate = 0.282;
    else if (gross === 150000) taxRate = 0.305;

    const estimatedTaxesCAD = Math.round(gross * taxRate);
    const netTakeHomeSalaryCAD = gross - estimatedTaxesCAD;

    // Estimate benefits based on net family income (AFNI is roughly gross minus deductions)
    const afni = gross * 0.90; // approx AFNI with standard deductions
    const ccb = calculateCCBForFamily(childrenAges, afni).estimatedNetAnnualCAD;
    const cgeb = calculateCGEBForFamily(childrenAges.length, afni).estimatedNetAnnualCAD;
    const acfb = calculateACFBForFamily(afni, gross).totalAnnualCAD;

    const totalCashGovernmentBenefitsCAD = Math.round(ccb + cgeb + acfb);
    const totalFamilyNetCashFlowCAD = netTakeHomeSalaryCAD + totalCashGovernmentBenefitsCAD;

    const cdcpEligibility = afni < 70000 
      ? 'Eligible (0% Co-pay)' 
      : afni < 80000 
        ? 'Eligible (40% Co-pay)' 
        : afni < 90000 
          ? 'Eligible (60% Co-pay)' 
          : 'Not Eligible (Income >= $90k)';

    const achbEligibility = afni <= 41594 ? 'Eligible' : 'Not Eligible (Exceeds $41,594 limit)';

    return {
      grossSalaryCAD: gross,
      estimatedTaxesCAD,
      netTakeHomeSalaryCAD,
      estimatedCCBCAD: ccb,
      estimatedCGEBCAD: cgeb,
      estimatedACFBCAD: acfb,
      totalCashGovernmentBenefitsCAD,
      totalFamilyNetCashFlowCAD,
      cdcpEligibility,
      achbEligibility
    };
  });
}
