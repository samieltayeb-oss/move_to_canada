export interface TaxCalculationResult {
  grossAnnualIncomeCAD: number;
  federalTaxCAD: number;
  albertaTaxCAD: number;
  cppContributionCAD: number; // Canada Pension Plan
  eiPremiumCAD: number; // Employment Insurance
  totalDeductionsCAD: number;
  netAnnualTakeHomeCAD: number;
  netMonthlyTakeHomeCAD: number;
  averageTaxRatePercent: number;
  marginalTaxRatePercent: number;
  canadaChildBenefitEstimatedAnnualCAD: number;
  isCcbEligible: boolean;
}

export function calculateCanadianTax(
  grossIncome: number,
  childrenAges: number[] = [11, 8, 4],
  isPermanentResident: boolean = true
): TaxCalculationResult {
  // 2026 Federal Brackets
  const fedBrackets = [
    { limit: 58523, rate: 0.14 },
    { limit: 117045, rate: 0.205 },
    { limit: 181440, rate: 0.26 },
    { limit: 258482, rate: 0.29 },
    { limit: Infinity, rate: 0.33 }
  ];

  // 2026 Alberta Brackets
  const abBrackets = [
    { limit: 61200, rate: 0.08 },
    { limit: 154259, rate: 0.10 },
    { limit: 185111, rate: 0.12 },
    { limit: 246813, rate: 0.13 },
    { limit: 370220, rate: 0.14 },
    { limit: Infinity, rate: 0.15 }
  ];

  // Federal Tax calculation
  let fedTax = 0;
  let remainingFed = grossIncome;
  let prevFedLimit = 0;
  for (const b of fedBrackets) {
    const chunk = Math.min(remainingFed, b.limit - prevFedLimit);
    if (chunk > 0) {
      fedTax += chunk * b.rate;
      remainingFed -= chunk;
      prevFedLimit = b.limit;
    }
  }
  // Federal basic personal amount credit ($16,452 * 14%)
  const fedBpaCredit = 16452 * 0.14;
  fedTax = Math.max(0, fedTax - fedBpaCredit);

  // Alberta Tax calculation
  let abTax = 0;
  let remainingAb = grossIncome;
  let prevAbLimit = 0;
  for (const b of abBrackets) {
    const chunk = Math.min(remainingAb, b.limit - prevAbLimit);
    if (chunk > 0) {
      abTax += chunk * b.rate;
      remainingAb -= chunk;
      prevAbLimit = b.limit;
    }
  }
  // Alberta basic personal amount credit ($22,769 * 8%)
  const abBpaCredit = 22769 * 0.08;
  abTax = Math.max(0, abTax - abBpaCredit);

  // 2026 Statutory Payroll Deductions (CPP & EI)
  // CPP 2026 Max: approx $4,055 (Base + CPP2 enhancement)
  const cppMax = 4055;
  const cppContribution = Math.min(cppMax, Math.max(0, (grossIncome - 3500) * 0.0595));

  // EI 2026 Max: approx $1,075
  const eiMax = 1075;
  const eiPremium = Math.min(eiMax, grossIncome * 0.0166);

  const totalDeductions = fedTax + abTax + cppContribution + eiPremium;
  const netAnnual = grossIncome - totalDeductions;
  const netMonthly = netAnnual / 12;

  // Canada Child Benefit (CCB) Estimation for 2026-2027
  let annualCcb = 0;
  if (isPermanentResident) {
    // Max CCB: $8,157 (<6), $6,883 (6-17)
    let baseMaxCcb = 0;
    for (const age of childrenAges) {
      baseMaxCcb += age < 6 ? 8157 : 6883;
    }

    // Phaseout threshold ~$38,237; reductions apply above threshold
    if (grossIncome <= 38237) {
      annualCcb = baseMaxCcb;
    } else {
      const excess = grossIncome - 38237;
      // Multi-child phaseout rate ~13% - 19%
      const reduction = excess * 0.16;
      annualCcb = Math.max(0, baseMaxCcb - reduction);
    }
  }

  // Marginal rate calculation
  let marginalRate = 0.22; // default 14% + 8%
  if (grossIncome > 258482) marginalRate = 0.48; // 33% + 15%
  else if (grossIncome > 181440) marginalRate = 0.42; // 29% + 13%
  else if (grossIncome > 154259) marginalRate = 0.38; // 26% + 12%
  else if (grossIncome > 117045) marginalRate = 0.36; // 26% + 10%
  else if (grossIncome > 61200) marginalRate = 0.305; // 20.5% + 10%
  else if (grossIncome > 58523) marginalRate = 0.285; // 20.5% + 8%

  return {
    grossAnnualIncomeCAD: grossIncome,
    federalTaxCAD: Math.round(fedTax),
    albertaTaxCAD: Math.round(abTax),
    cppContributionCAD: Math.round(cppContribution),
    eiPremiumCAD: Math.round(eiPremium),
    totalDeductionsCAD: Math.round(totalDeductions),
    netAnnualTakeHomeCAD: Math.round(netAnnual),
    netMonthlyTakeHomeCAD: Math.round(netMonthly),
    averageTaxRatePercent: Math.round((totalDeductions / grossIncome) * 1000) / 10,
    marginalTaxRatePercent: Math.round(marginalRate * 1000) / 10,
    canadaChildBenefitEstimatedAnnualCAD: Math.round(annualCcb),
    isCcbEligible: isPermanentResident
  };
}
