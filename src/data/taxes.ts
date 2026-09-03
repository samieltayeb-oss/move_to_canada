/**
 * MULTI-PROVINCE CANADIAN TAX & PAYROLL ENGINE (2026)
 * 
 * Statutory federal tax, graduated provincial income taxes (AB, ON, BC),
 * CPP enhancement, EI premiums, and integrated benefits modeling.
 * 
 * Complies with Phase 2 Master Directive:
 * - Alberta: 8% - 15% graduated brackets, $22,769 BPA, 0% PST
 * - Ontario: 5.05% - 13.16% graduated brackets, $12,776 BPA, Surtax (20%/36%), Health Premium (OHP)
 * - British Columbia: 5.06% - 20.5% graduated brackets, $12,880 BPA, BC Tax Reduction
 */

import { calculateAlberta2026Tax } from '@/data/canada/provinces/ab/taxes/2026';
import { calculateOntario2026Tax } from '@/data/canada/provinces/on/taxes/2026';
import { calculateBc2026Tax } from '@/data/canada/provinces/bc/taxes/2026';
import { calculateOntarioBenefits } from '@/data/canada/provinces/on/benefits/engine';
import { calculateBcBenefits } from '@/data/canada/provinces/bc/benefits/engine';
import { calculateACFBForFamily } from '@/data/benefitsEngine';

export interface TaxCalculationResult {
  grossAnnualIncomeCAD: number;
  province: 'AB' | 'ON' | 'BC';
  federalTaxCAD: number;
  provincialTaxCAD: number;
  albertaTaxCAD: number; // Backwards-compatible alias for Alberta
  cppContributionCAD: number; // Canada Pension Plan
  eiPremiumCAD: number; // Employment Insurance
  totalDeductionsCAD: number;
  netAnnualTakeHomeCAD: number;
  netMonthlyTakeHomeCAD: number;
  averageTaxRatePercent: number;
  marginalTaxRatePercent: number;
  canadaChildBenefitEstimatedAnnualCAD: number;
  provincialBenefitEstimatedAnnualCAD: number;
  totalEstimatedBenefitsAnnualCAD: number;
  isCcbEligible: boolean;
  provincialTaxBreakdownNotes?: string[];
}

export function calculateCanadianTax(
  grossIncome: number,
  childrenAges: number[] = [16, 11, 5],
  isPermanentResident: boolean = true,
  province: 'AB' | 'ON' | 'BC' = 'AB'
): TaxCalculationResult {
  // 1. 2026 Federal Brackets
  const fedBrackets = [
    { limit: 58523, rate: 0.14 },
    { limit: 117045, rate: 0.205 },
    { limit: 181440, rate: 0.26 },
    { limit: 258482, rate: 0.29 },
    { limit: Infinity, rate: 0.33 }
  ];

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

  // 2. Provincial Tax Calculation based on selected province
  let provincialTax = 0;
  const provincialNotes: string[] = [];

  if (province === 'AB') {
    const abResult = calculateAlberta2026Tax(grossIncome);
    provincialTax = abResult.netProvincialTaxCAD;
    provincialNotes.push(`Alberta 8%-15% graduated tax with $22,769 Basic Personal Amount.`);
  } else if (province === 'ON') {
    const onResult = calculateOntario2026Tax(grossIncome);
    provincialTax = onResult.netProvincialTaxCAD;
    provincialNotes.push(`Ontario graduated tax (${onResult.basicOntarioTaxCAD.toLocaleString()}) + Surtax (${onResult.ontarioSurtaxCAD.toLocaleString()}) + Health Premium (${onResult.ontarioHealthPremiumCAD.toLocaleString()}).`);
  } else if (province === 'BC') {
    const bcResult = calculateBc2026Tax(grossIncome);
    provincialTax = bcResult.netProvincialTaxCAD;
    provincialNotes.push(`BC graduated tax (5.06%-20.5%) with $12,880 Basic Personal Amount.`);
  }

  // 3. Statutory Payroll Deductions (CPP & EI)
  const cppMax = 4055;
  const cppContribution = Math.min(cppMax, Math.max(0, (grossIncome - 3500) * 0.0595));
  const eiMax = 1075;
  const eiPremium = Math.min(eiMax, grossIncome * 0.0166);

  const totalDeductions = fedTax + provincialTax + cppContribution + eiPremium;
  const netAnnual = grossIncome - totalDeductions;
  const netMonthly = netAnnual / 12;

  // 4. Federal CCB (Shared across all provinces)
  let annualCcb = 0;
  if (isPermanentResident) {
    let baseMaxCcb = 0;
    for (const age of childrenAges) {
      baseMaxCcb += age < 6 ? 8157 : 6883;
    }

    if (grossIncome <= 38237) {
      annualCcb = baseMaxCcb;
    } else {
      const excess = grossIncome - 38237;
      const reduction = excess * 0.16;
      annualCcb = Math.max(0, baseMaxCcb - reduction);
    }
  }

  // 5. Provincial Benefits (Isolated per province — zero cross-contamination!)
  let provincialBenefitAnnual = 0;
  if (isPermanentResident) {
    if (province === 'AB') {
      const acfb = calculateACFBForFamily(grossIncome, grossIncome);
      provincialBenefitAnnual = acfb.totalAnnualCAD;
    } else if (province === 'ON') {
      const onBen = calculateOntarioBenefits(grossIncome, childrenAges, true);
      provincialBenefitAnnual = onBen.totalOntarioBenefitsAnnualCAD;
    } else if (province === 'BC') {
      const bcBen = calculateBcBenefits(grossIncome, childrenAges, true);
      provincialBenefitAnnual = bcBen.totalBcBenefitsAnnualCAD;
    }
  }

  // 6. Marginal Rate Calculation
  let marginalRate = 0.22;
  if (grossIncome > 258482) marginalRate = province === 'BC' ? 0.535 : province === 'ON' ? 0.5353 : 0.48;
  else if (grossIncome > 181440) marginalRate = province === 'BC' ? 0.437 : province === 'ON' ? 0.434 : 0.42;
  else if (grossIncome > 154259) marginalRate = 0.38;
  else if (grossIncome > 117045) marginalRate = 0.36;
  else if (grossIncome > 61200) marginalRate = 0.305;
  else if (grossIncome > 58523) marginalRate = 0.285;

  return {
    grossAnnualIncomeCAD: grossIncome,
    province,
    federalTaxCAD: Math.round(fedTax),
    provincialTaxCAD: Math.round(provincialTax),
    albertaTaxCAD: province === 'AB' ? Math.round(provincialTax) : 0, // preserved for backwards compatibility
    cppContributionCAD: Math.round(cppContribution),
    eiPremiumCAD: Math.round(eiPremium),
    totalDeductionsCAD: Math.round(totalDeductions),
    netAnnualTakeHomeCAD: Math.round(netAnnual),
    netMonthlyTakeHomeCAD: Math.round(netMonthly),
    averageTaxRatePercent: Math.round((totalDeductions / grossIncome) * 1000) / 10,
    marginalTaxRatePercent: Math.round(marginalRate * 1000) / 10,
    canadaChildBenefitEstimatedAnnualCAD: Math.round(annualCcb),
    provincialBenefitEstimatedAnnualCAD: Math.round(provincialBenefitAnnual),
    totalEstimatedBenefitsAnnualCAD: Math.round(annualCcb + provincialBenefitAnnual),
    isCcbEligible: isPermanentResident,
    provincialTaxBreakdownNotes: provincialNotes
  };
}
