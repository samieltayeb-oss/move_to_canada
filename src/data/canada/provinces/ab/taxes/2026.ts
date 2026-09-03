/**
 * ALBERTA 2026 PERSONAL INCOME TAX ENGINE
 * 
 * Statutory graduated tax brackets for Alberta:
 * - 8.00% on taxable income up to $61,200
 * - 10.00% on taxable income from $61,200.01 to $154,259
 * - 12.00% on taxable income from $154,259.01 to $185,111
 * - 13.00% on taxable income from $185,111.01 to $246,813
 * - 14.00% on taxable income from $246,813.01 to $370,220
 * - 15.00% on taxable income over $370,220
 * 
 * Basic Personal Amount (BPA): $22,769 (highest in Canada)
 * Tax Credit at lowest bracket rate (8%): $1,821.52
 * 
 * Provincial Sales Tax: 0% PST (5% GST only)
 */

export interface AlbertaTaxBreakdown {
  grossIncomeCAD: number;
  taxableIncomeCAD: number;
  provincialBaseTaxCAD: number;
  basicPersonalCreditCAD: number;
  netProvincialTaxCAD: number;
  effectiveProvincialRate: number;
  marginalProvincialRate: number;
}

export const ALBERTA_2026_BRACKETS = [
  { limit: 61200, rate: 0.08 },
  { limit: 154259, rate: 0.10 },
  { limit: 185111, rate: 0.12 },
  { limit: 246813, rate: 0.13 },
  { limit: 370220, rate: 0.14 },
  { limit: Infinity, rate: 0.15 }
];

export const ALBERTA_2026_BPA = 22769;

export function calculateAlberta2026Tax(grossIncome: number): AlbertaTaxBreakdown {
  let grossTax = 0;
  let remaining = grossIncome;
  let prevLimit = 0;
  let marginalRate = 0.08;

  for (const b of ALBERTA_2026_BRACKETS) {
    const chunk = Math.min(remaining, b.limit - prevLimit);
    if (chunk > 0) {
      grossTax += chunk * b.rate;
      remaining -= chunk;
      marginalRate = b.rate;
      prevLimit = b.limit;
    }
  }

  const bpaCredit = ALBERTA_2026_BPA * 0.08;
  const netTax = Math.max(0, Math.round(grossTax - bpaCredit));
  const effectiveRate = grossIncome > 0 ? netTax / grossIncome : 0;

  return {
    grossIncomeCAD: grossIncome,
    taxableIncomeCAD: grossIncome,
    provincialBaseTaxCAD: Math.round(grossTax),
    basicPersonalCreditCAD: Math.round(bpaCredit),
    netProvincialTaxCAD: netTax,
    effectiveProvincialRate: effectiveRate,
    marginalProvincialRate: marginalRate
  };
}
