export interface BankNewcomerPackage {
  id: string;
  bankName: string;
  arabicBankName: string;
  packageName: string;
  chequingFeeWaiverMonths: number;
  monthlyFeeSavedCAD: number;
  totalFeeSavingsCAD: number;
  pureCashBonusCAD: number;
  cashBonusRequirements: string;
  pointsOrRewardsValueCAD: number;
  maxAdvertisedCreditLimitCAD: number;
  creditCardRequiresCreditHistory: boolean;
  creditCardOffer: string;
  internationalTransferPerk: string;
  novaCreditIntegration: boolean;
  branchCountCalgaryApprox: number;
  bestForBadge: string;
  arabicBestForBadge: string;
  pros: string[];
  cons: string[];
  sourceId: string;
  sourceUrl: string;
  lastVerified: string;
}

export const newcomerBankPackages: BankNewcomerPackage[] = [
  {
    id: 'rbc',
    bankName: 'RBC Royal Bank',
    arabicBankName: 'بنك آر بي سي رويال (RBC)',
    packageName: 'RBC Newcomer Advantage',
    chequingFeeWaiverMonths: 12,
    monthlyFeeSavedCAD: 11.95,
    totalFeeSavingsCAD: 143.40,
    pureCashBonusCAD: 350,
    cashBonusRequirements: 'Set up eligible recurring payroll direct deposit + 2 pre-authorized bill payments within 60 days.',
    pointsOrRewardsValueCAD: 0,
    maxAdvertisedCreditLimitCAD: 15000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'RBC Cash Back Mastercard (up to 12% cash back first 3 months) or Avion Visa. Approved up to $15,000 without Canadian credit history.',
    internationalTransferPerk: 'RBC International Money Transfer (IMT) with $0 transfer fees worldwide (FX spread applies).',
    novaCreditIntegration: false,
    branchCountCalgaryApprox: 48,
    bestForBadge: 'BEST FOR CREDIT CARD LIMIT ($15,000)',
    arabicBestForBadge: 'الأفضل في الحد الائتماني المبدئي (15,000 دولار)',
    pros: [
      'Highest starting newcomer credit limit in Canada (up to $15k based on assets/income)',
      'Canada’s largest banking asset network with extensive Calgary branch presence',
      'Straightforward $0 transfer fee international remittance service'
    ],
    cons: [
      'Cash bonus requires strict payroll direct deposit within 60 days',
      'Chequing fee waiver limited to 12 months (reverts to $11.95/mo unless balance kept)'
    ],
    sourceId: 'SRC-BNK-001',
    sourceUrl: 'https://www.rbcroyalbank.com/new-to-canada/',
    lastVerified: '2026-09-03'
  },
  {
    id: 'td',
    bankName: 'TD Canada Trust',
    arabicBankName: 'بنك تي دي كندا ترست (TD)',
    packageName: 'TD New to Canada Banking Package',
    chequingFeeWaiverMonths: 12,
    monthlyFeeSavedCAD: 17.95,
    totalFeeSavingsCAD: 215.40,
    pureCashBonusCAD: 500,
    cashBonusRequirements: 'Open TD Unlimited Chequing and complete 2 of 3: recurring payroll direct deposit, $50+ recurring PAD, or $50+ online bill pay within 60 days.',
    pointsOrRewardsValueCAD: 150,
    maxAdvertisedCreditLimitCAD: 5000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'TD Cash Back Visa (up to $150 cash back welcome bonus) or first-year fee rebate on premium Aeroplan/Cash Back Infinite cards. No credit history required.',
    internationalTransferPerk: 'TD Global Transfer with transaction fee rebates for initial transfers to 200+ countries.',
    novaCreditIntegration: false,
    branchCountCalgaryApprox: 45,
    bestForBadge: 'BEST PURE CASH BONUS ($500 CASH)',
    arabicBestForBadge: 'أعلى مكافأة نقدية كاش مباشرة (500 دولار)',
    pros: [
      'Highest immediate liquid cash bonus ($500 deposited straight into chequing)',
      'TD branches have longest operating hours in Calgary (including Saturdays and evenings)',
      'High monthly fee waiver value ($215.40 on Unlimited account)'
    ],
    cons: [
      'Strictly requires an in-person branch appointment to finalize identity verification',
      'Newcomer credit card initial limit typically capped at $1,000–$5,000 initially'
    ],
    sourceId: 'SRC-BNK-002',
    sourceUrl: 'https://www.td.com/ca/en/personal-banking/solutions/new-to-canada',
    lastVerified: '2026-09-03'
  },
  {
    id: 'cibc',
    bankName: 'CIBC',
    arabicBankName: 'بنك سي آي بي سي (CIBC)',
    packageName: 'CIBC Smart for Newcomers',
    chequingFeeWaiverMonths: 24, // 2 FULL YEARS
    monthlyFeeSavedCAD: 16.95,
    totalFeeSavingsCAD: 406.80,
    pureCashBonusCAD: 400,
    cashBonusRequirements: 'Open CIBC Smart Account and set up ongoing direct payroll deposit + 2 eligible bill payments of $50+.',
    pointsOrRewardsValueCAD: 278, // 2-year fee rebate on premium card
    maxAdvertisedCreditLimitCAD: 10000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'CIBC Dividend Visa or Aventura; includes full 2-year annual fee rebate ($139/yr = $278 saved). No credit history required.',
    internationalTransferPerk: 'CIBC Global Money Transfer (GMT) with $0 transfer fees, PLUS tiered cash rewards up to $700 using promo code REWARD.',
    novaCreditIntegration: false,
    branchCountCalgaryApprox: 38,
    bestForBadge: 'BEST 2-YEAR FEE WAIVER & REMITTANCE',
    arabicBestForBadge: 'الأفضل في الإعفاء لسنتين كاملتين والتحويلات المالية',
    pros: [
      'Industry-leading 24 months (2 full years) completely free banking ($406.80 saved)',
      'CIBC Global Money Transfer gives real cash back rewards when sending funds overseas',
      '2-year credit card annual fee waiver on primary and authorized supplementary cards'
    ],
    cons: [
      'Cash bonus requires payroll direct deposit within early qualification period'
    ],
    sourceId: 'SRC-BNK-004',
    sourceUrl: 'https://www.cibc.com/en/personal-banking/new-to-canada.html',
    lastVerified: '2026-09-03'
  },
  {
    id: 'scotiabank',
    bankName: 'Scotiabank',
    arabicBankName: 'بنك نوفا سكوشيا (Scotiabank)',
    packageName: 'StartRight® Program',
    chequingFeeWaiverMonths: 12,
    monthlyFeeSavedCAD: 16.95,
    totalFeeSavingsCAD: 203.40,
    pureCashBonusCAD: 350,
    cashBonusRequirements: 'Set up recurring direct deposit + 2 pre-authorized transactions.',
    pointsOrRewardsValueCAD: 400, // Scene+ points (up to 40,000 pts)
    maxAdvertisedCreditLimitCAD: 10000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'Scotia Momentum Visa or Scene+ Visa. Seamless foreign credit check via Nova Credit integration.',
    internationalTransferPerk: 'Scotia International Money Transfer with $0 transfer fees to select global corridors.',
    novaCreditIntegration: true,
    branchCountCalgaryApprox: 36,
    bestForBadge: 'BEST FOR IMPORTING FOREIGN CREDIT (NOVA CREDIT)',
    arabicBestForBadge: 'الأفضل في استيراد السجل الائتماني الدولي (Nova Credit)',
    pros: [
      'Exclusive Big 6 partner with Nova Credit to pull foreign credit history for higher limits',
      'Generous Scene+ points easily redeemable for Sobeys/Safeway groceries and travel',
      'Comprehensive newcomer mortgage and auto finance program pathways'
    ],
    cons: [
      'Heavy emphasis on reward points rather than pure liquid cash',
      'Foreign credit integration dependent on eligible originating country database'
    ],
    sourceId: 'SRC-BNK-003',
    sourceUrl: 'https://startright.scotiabank.com/',
    lastVerified: '2026-09-03'
  },
  {
    id: 'bmo',
    bankName: 'Bank of Montreal (BMO)',
    arabicBankName: 'بنك مونتريال (BMO)',
    packageName: 'BMO NewStart® Program',
    chequingFeeWaiverMonths: 24,
    monthlyFeeSavedCAD: 17.95,
    totalFeeSavingsCAD: 430.80,
    pureCashBonusCAD: 400,
    cashBonusRequirements: 'Open Performance Chequing and set up recurring payroll direct deposit. Tiered bonuses up to $900 require $10k savings deposit.',
    pointsOrRewardsValueCAD: 100,
    maxAdvertisedCreditLimitCAD: 5000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'BMO CashBack Mastercard (5% cash back introductory rate, no annual fee). No credit history required.',
    internationalTransferPerk: 'BMO Global Pay wire transfer capabilities.',
    novaCreditIntegration: false,
    branchCountCalgaryApprox: 32,
    bestForBadge: 'BEST 2-YEAR SAVINGS BUNDLE',
    arabicBestForBadge: 'أفضل باقة توفير مصرفية لمدة سنتين',
    pros: [
      '24 months fee waiver on Performance Chequing ($430.80 in total savings)',
      'Advertised cash pool up to $900 for clients holding significant liquid reserves',
      'No annual fee on flagship BMO CashBack Mastercard'
    ],
    cons: [
      'Full $900 promo requires locking $10,000 into a savings account for 90 days',
      'Smaller branch footprint in Calgary suburban quadrants compared to RBC and TD'
    ],
    sourceId: 'SRC-BNK-005',
    sourceUrl: 'https://bmo.com/main/personal/newcomers-to-canada/',
    lastVerified: '2026-09-03'
  },
  {
    id: 'atb',
    bankName: 'ATB Financial',
    arabicBankName: 'مؤسسة إي تي بي المالية (ATB Financial)',
    packageName: 'ATB New to Canada / Advantage',
    chequingFeeWaiverMonths: 12,
    monthlyFeeSavedCAD: 14.95,
    totalFeeSavingsCAD: 179.40,
    pureCashBonusCAD: 350,
    cashBonusRequirements: 'Open account with recurring direct deposit of $350+ for 2 consecutive months + 2 bill payments within 60 days.',
    pointsOrRewardsValueCAD: 0,
    maxAdvertisedCreditLimitCAD: 5000,
    creditCardRequiresCreditHistory: false,
    creditCardOffer: 'ATB Gold Cash Rewards Mastercard. No Canadian credit history required with valid Alberta address & status documents.',
    internationalTransferPerk: 'Discounted global wire transfers through ATB digital banking.',
    novaCreditIntegration: false,
    branchCountCalgaryApprox: 26,
    bestForBadge: 'BEST ALBERTA PROVINCIAL INSTITUTION',
    arabicBestForBadge: 'أفضل مؤسسة مالية محلية تابعة لحكومة ألبرتا',
    pros: [
      'Owned by the Province of Alberta with over 300 branch and agency locations across 240+ Alberta towns and cities',
      'Deep expertise in Alberta commercial lending, energy sector, and local mortgage underwriting',
      'Highly responsive regional customer service without Toronto call-centre routing'
    ],
    cons: [
      'No branch or ATM presence outside of Alberta (restricted to Alberta boundaries)',
      'Digital banking tools slightly less feature-rich for international global transfers'
    ],
    sourceId: 'SRC-BNK-006',
    sourceUrl: 'https://www.atb.com/personal/everyday-banking/new-to-canada/',
    lastVerified: '2026-09-03'
  }
];
