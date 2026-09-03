// Newcomer Bank Optimizer Intelligence Engine (2026 Verification)
// Covers Big 5 (RBC, TD, CIBC, Scotiabank, BMO) + ATB Financial (Alberta's Crown-Chartered Financial Institution)

export interface BankPackageDetailed {
  id: string;
  bankName: string;
  arabicBankName: string;
  programName: string;
  eligibilityWindowMonths: number;
  monthlyFeeCAD: number;
  feeFreePeriodMonths: number;
  accountFeeSavingsFirstYearCAD: number;
  realCashBonusCAD: number;
  cashBonusConditions: string;
  pointsValueCAD: number;
  creditCardAnnualFeeWaiverCAD: number;
  advertisedTotalPackageValueCAD: number;
  realisticFirstYearValueForYassirCAD: number;
  maxAdvertisedCreditLimitCAD: number;
  creditCardRequiresCreditHistory: boolean;
  creditCardDetails: string;
  internationalTransferPerk: string;
  saudiArabiaTransferSupport: string;
  freeUsdAccountIncluded: boolean;
  mortgageNewcomerProgram: string;
  carLoanNewcomerProgram: string;
  familyAndYouthBanking: string;
  calgaryBranchCount: number;
  multilingualArabicSupport: string;
  bestCategoryBadge: string;
  arabicBestCategoryBadge: string;
  scores: {
    creditBuilding: number; // 0-100
    monthlyFees: number;
    cashBonus: number;
    saudiTransfers: number;
    familyBanking: number;
    calgaryBranches: number;
    creditCardQuality: number;
    mortgageFuture: number;
    carFinancing: number;
  };
  pros: string[];
  cons: string[];
  sourceUrl: string;
  lastVerified: string;
}

export const newcomerBankPackages: BankPackageDetailed[] = [
  {
    id: 'atb',
    bankName: 'ATB Financial',
    arabicBankName: 'بنك ألبرتا المالي (ATB Financial)',
    programName: 'ATB New to Canada Advantage',
    eligibilityWindowMonths: 60, // 5 years
    monthlyFeeCAD: 11.95,
    feeFreePeriodMonths: 12,
    accountFeeSavingsFirstYearCAD: 143.40,
    realCashBonusCAD: 350,
    cashBonusConditions: 'Open an ATB Advantage Account + set up recurring payroll direct deposit within 90 days.',
    pointsValueCAD: 0,
    creditCardAnnualFeeWaiverCAD: 120, // Free ATB World Elite Mastercard 1st yr
    advertisedTotalPackageValueCAD: 613.40,
    realisticFirstYearValueForYassirCAD: 613.40, // 100% tangible cash + fee waivers
    maxAdvertisedCreditLimitCAD: 5000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'ATB Mastercard approved up to $5,000 without Canadian credit history. Full Alberta reporting to Equifax and TransUnion.',
    internationalTransferPerk: 'ATB Global Transfers to 100+ countries with competitive FX margins.',
    saudiArabiaTransferSupport: 'Direct SWIFT wire support and foreign currency drafts with Saudi Riyal (SAR) conversion.',
    freeUsdAccountIncluded: true,
    mortgageNewcomerProgram: 'Alberta specialized newcomer mortgage: 5% down payment available with verified foreign income & 12 months Saudi bank statements.',
    carLoanNewcomerProgram: 'Direct financing partnerships with 120+ Alberta franchised auto dealerships across Calgary.',
    familyAndYouthBanking: 'ATB Generation Account: $0 monthly fee, free Interac transfers, and free debit card for kids of all ages (ideal for ages 16, 11, 5).',
    calgaryBranchCount: 36,
    multilingualArabicSupport: 'In-branch Arabic speaking financial advisors available at Saddletowne and Westwinds branches in NE Calgary.',
    bestCategoryBadge: 'BEST ALBERTA LOCAL ADVANTAGE & MORTGAGES',
    arabicBestCategoryBadge: 'أفضل خيار محلي في ألبرتا للتمويل العقاري والأسري',
    scores: {
      creditBuilding: 86,
      monthlyFees: 95,
      cashBonus: 90,
      saudiTransfers: 88,
      familyBanking: 96,
      calgaryBranches: 92,
      creditCardQuality: 85,
      mortgageFuture: 98, // Superior local Alberta appraisal flexibility
      carFinancing: 90
    },
    pros: [
      'Provincial Alberta Crown corporation: 100% of all deposits guaranteed by the Government of Alberta without CDIC $100k cap',
      'Dedicated newcomer mortgage program accepts Saudi Arabian banking statements and employment verification',
      'Branches located directly inside NE Calgary Muslim family communities (Saddleridge, Westwinds, McKnight)'
    ],
    cons: [
      'Credit card starting limit ($5,000) is lower than RBC/TD ($15,000)',
      'Branches exist strictly within the province of Alberta (no retail branches in BC or Ontario)'
    ],
    sourceUrl: 'https://www.atb.com/personal/good-advice-for-life/new-to-canada/',
    lastVerified: '2026-09-03'
  },
  {
    id: 'rbc',
    bankName: 'RBC Royal Bank',
    arabicBankName: 'بنك رويال الكندي (RBC)',
    programName: 'RBC Newcomer Advantage',
    eligibilityWindowMonths: 60,
    monthlyFeeCAD: 11.95,
    feeFreePeriodMonths: 12,
    accountFeeSavingsFirstYearCAD: 143.40,
    realCashBonusCAD: 350,
    cashBonusConditions: 'Set up recurring eligible direct deposit (payroll) + 2 pre-authorized bill payments within 60 days.',
    pointsValueCAD: 150, // Avion Points signup booster
    creditCardAnnualFeeWaiverCAD: 120,
    advertisedTotalPackageValueCAD: 763.40,
    realisticFirstYearValueForYassirCAD: 613.40, // Cash + fee savings
    maxAdvertisedCreditLimitCAD: 15000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'RBC Cash Back Mastercard or RBC Avion Visa approved up to $15,000 with NO Canadian credit history based on PR status.',
    internationalTransferPerk: 'RBC International Money Transfer (IMT): $0 transfer fee to Saudi Arabia (FX spread applies).',
    saudiArabiaTransferSupport: 'Seamless SWIFT wire routing to major Saudi banks (Al Rajhi, SNB, Bank Albilad, SABB).',
    freeUsdAccountIncluded: true,
    mortgageNewcomerProgram: 'RBC Newcomer Mortgage: Up to $1.5M with 20% down payment and 2 years verified foreign income history.',
    carLoanNewcomerProgram: 'RBC Automotive Finance available at 90% of Calgary car dealerships with newcomer credit waivers.',
    familyAndYouthBanking: 'RBC Leo’s Young Savers & Advantage Banking for students: $0 monthly fee, mobile banking, and debit card for teens.',
    calgaryBranchCount: 48,
    multilingualArabicSupport: 'Arabic telephone banking support and multilingual advisors at 36th St NE & Saddletowne branches.',
    bestCategoryBadge: 'BEST FOR HIGHEST CREDIT LIMIT ($15,000)',
    arabicBestCategoryBadge: 'الأفضل في الحد الائتماني المبدئي لبطاقة الائتمان (15,000 دولار)',
    scores: {
      creditBuilding: 98,
      monthlyFees: 88,
      cashBonus: 90,
      saudiTransfers: 92,
      familyBanking: 90,
      calgaryBranches: 98,
      creditCardQuality: 96,
      mortgageFuture: 92,
      carFinancing: 94
    },
    pros: [
      'Highest starting newcomer credit limit in Canada (up to $15k limit without Canadian credit history)',
      'Canada’s largest banking asset network with extensive Calgary branch and ATM coverage',
      'Proven track record with Gulf Arab and Saudi expat capital transfers'
    ],
    cons: [
      'Account fee waiver limited to first 12 months only ($11.95/mo thereafter unless minimum balance kept)',
      'Cash bonus requires strict payroll direct deposit verification'
    ],
    sourceUrl: 'https://www.rbcroyalbank.com/new-to-canada/',
    lastVerified: '2026-09-03'
  },
  {
    id: 'td',
    bankName: 'TD Bank',
    arabicBankName: 'بنك تورونتو دومينيون (TD)',
    programName: 'TD New to Canada Banking Package',
    eligibilityWindowMonths: 60,
    monthlyFeeCAD: 17.95,
    feeFreePeriodMonths: 12,
    accountFeeSavingsFirstYearCAD: 215.40,
    realCashBonusCAD: 500,
    cashBonusConditions: 'Open TD Unlimited Chequing Account + complete 2 of 3: recurring direct deposit, $50+ pre-authorized debit, or $50 online bill payment.',
    pointsValueCAD: 200,
    creditCardAnnualFeeWaiverCAD: 139,
    advertisedTotalPackageValueCAD: 1790.00, // Heavily advertised "value", not real cash
    realisticFirstYearValueForYassirCAD: 854.40, // $500 cash + $215 fee waiver + $139 card waiver
    maxAdvertisedCreditLimitCAD: 15000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'TD Cash Back Visa Infinite or TD Rewards Visa approved up to $15,000 with proof of PR status.',
    internationalTransferPerk: 'TD Global Transfer: Up to 12 free international transfers with transfer fee rebates.',
    saudiArabiaTransferSupport: 'Direct SWIFT network wire service and Western Union cash payout partnerships.',
    freeUsdAccountIncluded: true,
    mortgageNewcomerProgram: 'TD Newcomer Mortgage: Streamlined underwriting using overseas credit bureau and Saudi assets.',
    carLoanNewcomerProgram: 'TD Auto Finance accessible at Calgary automotive dealerships.',
    familyAndYouthBanking: 'TD Youth Account: $0 monthly fee for children under 19, unlimited transactions, and mobile deposit.',
    calgaryBranchCount: 44,
    multilingualArabicSupport: 'Multilingual branch staff with phone interpretation in 80+ languages including Arabic.',
    bestCategoryBadge: 'BEST REAL CASH WELCOME BONUS ($500 CAD)',
    arabicBestCategoryBadge: 'الأفضل في المكافأة النقدية الترحيبية المباشرة (500 دولار كاش)',
    scores: {
      creditBuilding: 96,
      monthlyFees: 85,
      cashBonus: 98,
      saudiTransfers: 90,
      familyBanking: 92,
      calgaryBranches: 95,
      creditCardQuality: 94,
      mortgageFuture: 90,
      carFinancing: 92
    },
    pros: [
      'Highest immediate cash bonus in Canada ($500 CAD pure cash deposited directly into account)',
      'Longest branch opening hours in Calgary (open late on Thursdays/Fridays and open Sundays at major malls)',
      'Up to $15,000 newcomer credit card limit without Canadian credit history'
    ],
    cons: [
      'Account fee after 12 months is higher than average ($17.95/month unless $4,000 minimum balance maintained)',
      'Advertised "$1,790 value" includes merchant discounts and rewards that most newcomers do not use'
    ],
    sourceUrl: 'https://www.td.com/ca/en/personal-banking/special-offers/new-to-canada',
    lastVerified: '2026-09-03'
  },
  {
    id: 'cibc',
    bankName: 'CIBC',
    arabicBankName: 'البنك الإمبراطوري الكندي للتجارة (CIBC)',
    programName: 'CIBC Smart for Newcomers',
    eligibilityWindowMonths: 60,
    monthlyFeeCAD: 16.95,
    feeFreePeriodMonths: 24, // 2 full years!
    accountFeeSavingsFirstYearCAD: 203.40,
    realCashBonusCAD: 400,
    cashBonusConditions: 'Open CIBC Smart Account + set up recurring payroll direct deposit within 60 days.',
    pointsValueCAD: 100,
    creditCardAnnualFeeWaiverCAD: 139,
    advertisedTotalPackageValueCAD: 1600.00,
    realisticFirstYearValueForYassirCAD: 742.40, // Cash + fee savings
    maxAdvertisedCreditLimitCAD: 15000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'CIBC Dividend Visa Infinite or Aventura Visa: Up to $15,000 limit with $0 annual fee first year.',
    internationalTransferPerk: 'CIBC Global Money Transfer (GMT): $0 transfer fee to over 120 countries with fast delivery.',
    saudiArabiaTransferSupport: 'Direct remittance to Saudi Riyal (SAR) bank accounts with zero intermediary fees.',
    freeUsdAccountIncluded: true,
    mortgageNewcomerProgram: 'CIBC Newcomer Mortgage: Up to 35-year amortizations with overseas asset recognition.',
    carLoanNewcomerProgram: 'CIBC Auto Finance available across franchise dealerships in Alberta.',
    familyAndYouthBanking: 'CIBC Smart Start Account: Free banking for youth and teens under 25 with no monthly fee.',
    calgaryBranchCount: 38,
    multilingualArabicSupport: 'Arabic support available across Northeast Calgary banking centers.',
    bestCategoryBadge: 'BEST FOR 2-YEAR FEE WAIVER & ZERO TRANSFER FEES',
    arabicBestCategoryBadge: 'الأفضل في الإعفاء من الرسوم لمدة سنتين والتحويل الدولي المجاني',
    scores: {
      creditBuilding: 95,
      monthlyFees: 96, // 2-year fee waiver is exceptional
      cashBonus: 92,
      saudiTransfers: 96, // Industry-leading zero-fee Global Money Transfer
      familyBanking: 92,
      calgaryBranches: 90,
      creditCardQuality: 92,
      mortgageFuture: 90,
      carFinancing: 90
    },
    pros: [
      'Two (2) full years of zero monthly account fees (saves over $400 CAD in fees alone)',
      'CIBC Global Money Transfer allows sending remittances back to Saudi Arabia with $0 transfer fee',
      'Exclusive Costco partner cash-back integration and gas rewards'
    ],
    cons: [
      'Fewer branches in Calgary suburbs compared to RBC and TD',
      'Cash bonus takes up to 7 months to be fully credited'
    ],
    sourceUrl: 'https://www.cibc.com/en/special-offers/new-to-canada-banking-package.html',
    lastVerified: '2026-09-03'
  },
  {
    id: 'scotiabank',
    bankName: 'Scotiabank',
    arabicBankName: 'بنك نوفا سكوشا (Scotiabank)',
    programName: 'Scotiabank StartRight Program',
    eligibilityWindowMonths: 36,
    monthlyFeeCAD: 16.95,
    feeFreePeriodMonths: 12,
    accountFeeSavingsFirstYearCAD: 203.40,
    realCashBonusCAD: 350,
    cashBonusConditions: 'Open Preferred Package + recurring payroll direct deposit or 2 pre-authorized bills.',
    pointsValueCAD: 150, // Scene+ Points
    creditCardAnnualFeeWaiverCAD: 150,
    advertisedTotalPackageValueCAD: 2300.00, // High advertised value due to Scene+ movie points
    realisticFirstYearValueForYassirCAD: 703.40,
    maxAdvertisedCreditLimitCAD: 10000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'Scotiabank Scene+ Visa or Momentum Mastercard approved up to $10,000 without Canadian credit history.',
    internationalTransferPerk: 'Scotia International Money Transfer with reduced transfer fees.',
    saudiArabiaTransferSupport: 'Wire transfer routing via global Scotiabank correspondent banking network.',
    freeUsdAccountIncluded: false,
    mortgageNewcomerProgram: 'Scotiabank StartRight Mortgage Program with flexible overseas credit verification.',
    carLoanNewcomerProgram: 'Scotiabank StartRight Auto Finance: Available at 4,000+ car dealerships across Canada.',
    familyAndYouthBanking: 'Getting There Savings Program for Youth: $0 monthly fee and earns Scene+ rewards for kids.',
    calgaryBranchCount: 35,
    multilingualArabicSupport: 'Arabic branch staff and telephone banking services.',
    bestCategoryBadge: 'BEST FOR NEWCOMER CAR LOANS & SCENE+ ENTERTAINMENT',
    arabicBestCategoryBadge: 'الأفضل في تمويل شراء السيارات العائلية ونقاط الترفيه',
    scores: {
      creditBuilding: 90,
      monthlyFees: 86,
      cashBonus: 88,
      saudiTransfers: 85,
      familyBanking: 88,
      calgaryBranches: 88,
      creditCardQuality: 88,
      mortgageFuture: 92,
      carFinancing: 98 // Scotiabank is Canada's premier auto dealership lender
    },
    pros: [
      'Dominant auto finance relationships at Calgary car dealerships (easiest approval for family SUV loans)',
      'Scene+ points can be redeemed at Sobeys, Safeway, and Cineplex movie theatres for family outings',
      'Strong international retail presence'
    ],
    cons: [
      'Credit card newcomer limit ($10,000) is lower than RBC/TD/CIBC ($15,000)',
      'Advertised "$2,300 value" is inflated with points that expire if not redeemed'
    ],
    sourceUrl: 'https://www.scotiabank.com/ca/en/personal-banking/startright.html',
    lastVerified: '2026-09-03'
  },
  {
    id: 'bmo',
    bankName: 'BMO Bank of Montreal',
    arabicBankName: 'بنك مونتريال (BMO)',
    programName: 'BMO NewStart Program',
    eligibilityWindowMonths: 60,
    monthlyFeeCAD: 16.95,
    feeFreePeriodMonths: 12,
    accountFeeSavingsFirstYearCAD: 203.40,
    realCashBonusCAD: 350,
    cashBonusConditions: 'Open Performance Plan + complete recurring direct deposit + 1 online bill payment.',
    pointsValueCAD: 100,
    creditCardAnnualFeeWaiverCAD: 120,
    advertisedTotalPackageValueCAD: 1400.00,
    realisticFirstYearValueForYassirCAD: 673.40,
    maxAdvertisedCreditLimitCAD: 10000,
    creditCardRequiresCreditHistory: false,
    creditCardDetails: 'BMO CashBack Mastercard or BMO eclipse Visa: Approved up to $10,000 with proof of PR status.',
    internationalTransferPerk: 'BMO Global Money Transfer: $0 transfer fee for first 12 months.',
    saudiArabiaTransferSupport: 'Global wire transfer support via SWIFT and BMO Capital Markets correspondents.',
    freeUsdAccountIncluded: false,
    mortgageNewcomerProgram: 'BMO Smart Fixed Newcomer Mortgage program.',
    carLoanNewcomerProgram: 'BMO Dealer Finance available at Calgary automotive dealerships.',
    familyAndYouthBanking: 'BMO Kids Account: Free banking for children under 13 and BMO Plus for teens under 18.',
    calgaryBranchCount: 32,
    multilingualArabicSupport: 'Multilingual telephone banking and local Calgary branch support.',
    bestCategoryBadge: 'BEST FOR BALANCED EVERYDAY BANKING',
    arabicBestCategoryBadge: 'خيار متوازن ومستقر للخدمات البنكية اليومية',
    scores: {
      creditBuilding: 88,
      monthlyFees: 86,
      cashBonus: 88,
      saudiTransfers: 86,
      familyBanking: 88,
      calgaryBranches: 85,
      creditCardQuality: 88,
      mortgageFuture: 88,
      carFinancing: 90
    },
    pros: [
      'BMO Family Bundle allows linking accounts so family members save on monthly fees',
      'Solid mobile app with integrated credit score tracking via TransUnion',
      'Straightforward cash bonus requirements'
    ],
    cons: [
      'Fewer branches in Northeast Calgary compared to RBC and ATB',
      'Free USD account is not included in the baseline newcomer package'
    ],
    sourceUrl: 'https://www.bmo.com/main/personal/newcomers-to-canada/',
    lastVerified: '2026-09-03'
  }
];

// YOUTH & CHILDREN BANKING COMPARISON (FOR AGES 16, 11, AND 5)
export interface YouthAccountComparison {
  bankName: string;
  accountName: string;
  monthlyFee: string;
  debitCardProvided: string;
  ageEligibility: string;
  interestRate: string;
  parentalSupervision: string;
  recommendationForYassirKids: string;
}

export const youthBankingComparison: YouthAccountComparison[] = [
  {
    bankName: 'ATB Financial',
    accountName: 'ATB Generation Account',
    monthlyFee: '$0 / month (100% Free)',
    debitCardProvided: 'Yes (Interac Flash & Apple Pay)',
    ageEligibility: 'Ages 0 to 18 (Perfect for all 3 kids: 16, 11, and 5)',
    interestRate: 'High-interest tier on first $5,000 to teach savings habits',
    parentalSupervision: 'Parent has dual online banking oversight; notifications for debit spending',
    recommendationForYassirKids: 'Top choice in Alberta. Seamlessly links to parents’ ATB accounts with zero maintenance fees.'
  },
  {
    bankName: 'RBC Royal Bank',
    accountName: 'RBC Leo’s Young Savers (Ages 0–12) / Advantage Banking for Teens',
    monthlyFee: '$0 / month',
    debitCardProvided: 'Yes (RBC Client Card for ages 11 and 16)',
    ageEligibility: '0–12 for Leo account; 13–18 for Teen Advantage',
    interestRate: 'Standard youth interest rate',
    parentalSupervision: 'Parental co-signature required for kids under 13; daily spending limits customizable',
    recommendationForYassirKids: 'Excellent for the 16-year-old teen to learn budgeting and mobile Interac transfers.'
  },
  {
    bankName: 'TD Bank',
    accountName: 'TD Youth Account',
    monthlyFee: '$0 / month',
    debitCardProvided: 'Yes (TD Access Card with Visa Debit)',
    ageEligibility: 'Ages 0 to 18',
    interestRate: 'Tiered interest rate on balances',
    parentalSupervision: 'Parental controls available via TD Mobile App',
    recommendationForYassirKids: 'Strong option if parents choose TD for the $500 cash welcome bonus.'
  },
  {
    bankName: 'CIBC',
    accountName: 'CIBC Smart Start',
    monthlyFee: '$0 / month',
    debitCardProvided: 'Yes (CIBC Advantage Debit)',
    ageEligibility: 'Under 25 years old',
    interestRate: 'Standard youth savings rate',
    parentalSupervision: 'Family banking link with parental balance view',
    recommendationForYassirKids: 'Great for longevity since fee waiver continues until age 25.'
  },
  {
    bankName: 'Scotiabank',
    accountName: 'Getting There Savings Program for Youth',
    monthlyFee: '$0 / month',
    debitCardProvided: 'Yes (ScotiaCard with Scene+ rewards)',
    ageEligibility: 'Under 19 years old',
    interestRate: 'Tiered interest rates',
    parentalSupervision: 'Parent co-sign required for minors under 12',
    recommendationForYassirKids: 'Teaches teens to earn Scene+ points on small purchases for movies and treats.'
  },
  {
    bankName: 'BMO Bank of Montreal',
    accountName: 'BMO Kids Account / Plus Plan for Youth',
    monthlyFee: '$0 / month',
    debitCardProvided: 'Yes (BMO Debit Card)',
    ageEligibility: 'Under 18 years old',
    interestRate: 'Standard savings rate',
    parentalSupervision: 'Parental viewing and spend caps',
    recommendationForYassirKids: 'Part of BMO Family Bundle so parents can manage multiple youth accounts under one login.'
  }
];

// BANK FIT SCORING ENGINE (WITH DEFAULT WEIGHTS)
export interface BankScoringWeights {
  creditBuilding: number; // default 0.25 (25%)
  monthlyFees: number;    // default 0.15 (15%)
  cashBonus: number;      // default 0.15 (15%)
  saudiTransfers: number; // default 0.10 (10%)
  familyBanking: number;  // default 0.10 (10%)
  calgaryBranches: number;// default 0.10 (10%)
  creditCardQuality: number;// default 0.05 (5%)
  mortgageFuture: number; // default 0.05 (5%)
  carFinancing: number;   // default 0.05 (5%)
}

export const defaultBankWeights: BankScoringWeights = {
  creditBuilding: 0.25,
  monthlyFees: 0.15,
  cashBonus: 0.15,
  saudiTransfers: 0.10,
  familyBanking: 0.10,
  calgaryBranches: 0.10,
  creditCardQuality: 0.05,
  mortgageFuture: 0.05,
  carFinancing: 0.05
};

export function calculateBankFitScore(pkg: BankPackageDetailed, weights: BankScoringWeights = defaultBankWeights): number {
  const score = (
    pkg.scores.creditBuilding * weights.creditBuilding +
    pkg.scores.monthlyFees * weights.monthlyFees +
    pkg.scores.cashBonus * weights.cashBonus +
    pkg.scores.saudiTransfers * weights.saudiTransfers +
    pkg.scores.familyBanking * weights.familyBanking +
    pkg.scores.calgaryBranches * weights.calgaryBranches +
    pkg.scores.creditCardQuality * weights.creditCardQuality +
    pkg.scores.mortgageFuture * weights.mortgageFuture +
    pkg.scores.carFinancing * weights.carFinancing
  );
  return Math.round(score * 10) / 10;
}

// NEWCOMER BANKING ACTION PLAN TIMELINE
export const newcomerBankingRoadmap = {
  beforeArrival: {
    stage: 'Before Leaving Riyadh, Saudi Arabia (30 Days Prior)',
    steps: [
      'Order official Saudi Arabian bank statements for the past 12 months in English (Signed & Stamped) for Canadian mortgage credit proof.',
      'Request an official Credit Clearance / Liability Letter from your Saudi bank (Albilad, SNB, or Alawwal) stating accounts are in good standing.',
      'Check if your Canadian target bank (RBC, TD, or CIBC) allows opening a newcomer account online prior to landing to wire settlement funds.'
    ]
  },
  first48Hours: {
    stage: 'First 48 Hours in Calgary',
    steps: [
      'Obtain Social Insurance Numbers (SIN) at Service Canada (Downtown or Harry Hays Building).',
      'Activate a Canadian local phone number with Alberta area code (403, 587, or 825).',
      'Visit your chosen bank branch with original passports, Confirmation of PR (COPR), and proof of Calgary address to complete in-person verification.',
      'Apply immediately for the primary newcomer credit card (aim for $5,000 to $15,000 limit with no credit history) to initiate your Canadian credit score.'
    ]
  },
  first90Days: {
    stage: 'First 90 Days in Calgary',
    steps: [
      'Maintain credit card utilization strictly under 25%–30% of your credit limit (e.g. if limit is $15,000, keep monthly balance below $3,750 and pay in full on statement date).',
      'Set up automatic bill payments for home internet, utilities (Enmax), and mobile phone from your chequing account.',
      'Enroll in CRA Direct Deposit using your bank’s Void Cheque / Direct Deposit form to receive Canada Child Benefit (CCB) payments automatically.',
      'Open children’s Family RESP account with your bank to start earning the 20% federal CESG matching grant.'
    ]
  },
  month12to24: {
    stage: 'Months 12 to 24: Financial Optimization',
    steps: [
      'Review fee-free chequing waiver expiration (Month 12 for RBC/TD/ATB; Month 24 for CIBC) and either maintain required minimum balance or switch plans.',
      'Check your generated Equifax and TransUnion credit scores (target 720+ prime rating).',
      'Negotiate pre-approval for an Alberta residential home mortgage or prime automotive financing.'
    ]
  }
};
