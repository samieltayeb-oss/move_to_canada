/**
 * BRITISH COLUMBIA 2026 PERSONAL INCOME TAX ENGINE
 * 
 * Statutory graduated tax brackets for British Columbia (2026 Tax Year).
 * 
 * Sources:
 * - BC Ministry of Finance (gov.bc.ca/taxes)
 * - Canada Revenue Agency (cra-arc.gc.ca)
 */

export interface BcTaxBreakdown {
  grossIncomeCAD: number;
  taxableIncomeCAD: number;
  provincialBaseTaxCAD: number;
  basicPersonalCreditCAD: number;
  bcTaxReductionCreditCAD: number;
  netProvincialTaxCAD: number;
  effectiveProvincialRate: number;
  marginalProvincialRate: number;
}

export const BC_2026_BRACKETS = [
  { limit: 47937, rate: 0.0506 },
  { limit: 95875, rate: 0.0770 },
  { limit: 110076, rate: 0.1050 },
  { limit: 133664, rate: 0.1229 },
  { limit: 181232, rate: 0.1470 },
  { limit: 252752, rate: 0.1680 },
  { limit: Infinity, rate: 0.2050 }
];

export const BC_2026_BPA = 12880;

/**
 * Calculates BC Tax Reduction for low/middle income earners:
 * Max $570, phased out at 3.56% of net income over $25,124.
 */
export function calculateBcTaxReduction(taxableIncome: number): number {
  if (taxableIncome <= 25124) return 570;
  const reduction = 570 - (taxableIncome - 25124) * 0.0356;
  return Math.max(0, Math.round(reduction));
}

/**
 * Full 2026 BC Personal Income Tax Engine
 */
export function calculateBc2026Tax(grossIncome: number): BcTaxBreakdown {
  let grossTax = 0;
  let remaining = grossIncome;
  let prevLimit = 0;
  let marginalRate = 0.0506;

  for (const b of BC_2026_BRACKETS) {
    const chunk = Math.min(remaining, b.limit - prevLimit);
    if (chunk > 0) {
      grossTax += chunk * b.rate;
      remaining -= chunk;
      marginalRate = b.rate;
      prevLimit = b.limit;
    }
  }

  // Non-refundable Basic Personal Amount Tax Credit ($12,880 * 5.06%)
  const bpaCredit = BC_2026_BPA * 0.0506;
  const basicBcTax = Math.max(0, grossTax - bpaCredit);

  // BC Tax Reduction credit
  const taxReduction = calculateBcTaxReduction(grossIncome);
  const netProvincialTax = Math.max(0, Math.round(basicBcTax - taxReduction));
  const effectiveRate = grossIncome > 0 ? netProvincialTax / grossIncome : 0;

  return {
    grossIncomeCAD: grossIncome,
    taxableIncomeCAD: grossIncome,
    provincialBaseTaxCAD: Math.round(grossTax),
    basicPersonalCreditCAD: Math.round(bpaCredit),
    bcTaxReductionCreditCAD: taxReduction,
    netProvincialTaxCAD: netProvincialTax,
    effectiveProvincialRate: effectiveRate,
    marginalProvincialRate: marginalRate
  };
}
