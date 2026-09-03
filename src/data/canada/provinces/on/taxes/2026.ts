/**
 * ONTARIO 2026 PERSONAL INCOME TAX ENGINE
 * 
 * Statutory graduated tax brackets, surtaxes, and Ontario Health Premium (OHP).
 * Official Ontario Personal Income Tax Structure (2026 Tax Year).
 * 
 * Sources:
 * - Ontario Ministry of Finance (ontario.ca/taxes)
 * - Canada Revenue Agency (cra-arc.gc.ca)
 */

export interface OntarioTaxBreakdown {
  grossIncomeCAD: number;
  taxableIncomeCAD: number;
  provincialBaseTaxCAD: number;
  basicPersonalCreditCAD: number;
  basicOntarioTaxCAD: number;
  ontarioSurtaxCAD: number;
  ontarioHealthPremiumCAD: number;
  netProvincialTaxCAD: number; // Basic Ontario Tax + Surtax + OHP
  effectiveProvincialRate: number;
  marginalProvincialRate: number;
}

export const ONTARIO_2026_BRACKETS = [
  { limit: 51446, rate: 0.0505 },
  { limit: 102894, rate: 0.0915 },
  { limit: 150000, rate: 0.1116 },
  { limit: 220000, rate: 0.1216 },
  { limit: Infinity, rate: 0.1316 }
];

export const ONTARIO_2026_BPA = 12776;

/**
 * Calculates the statutory Ontario Health Premium (OHP) based on taxable income.
 */
export function calculateOntarioHealthPremium(taxableIncome: number): number {
  if (taxableIncome <= 20000) return 0;
  if (taxableIncome <= 25000) return Math.min(300, Math.round((taxableIncome - 20000) * 0.06));
  if (taxableIncome <= 36000) return 300;
  if (taxableIncome <= 38500) return Math.min(450, 300 + Math.round((taxableIncome - 36000) * 0.06));
  if (taxableIncome <= 48000) return 450;
  if (taxableIncome <= 48600) return Math.min(600, 450 + Math.round((taxableIncome - 48000) * 0.25));
  if (taxableIncome <= 72000) return 600;
  if (taxableIncome <= 72600) return Math.min(750, 600 + Math.round((taxableIncome - 72000) * 0.25));
  if (taxableIncome <= 200000) return 750;
  if (taxableIncome <= 200600) return Math.min(900, 750 + Math.round((taxableIncome - 200000) * 0.25));
  return 900;
}

/**
 * Calculates Ontario Surtax:
 * - 20% on basic Ontario tax exceeding $5,554
 * - 36% on basic Ontario tax exceeding $7,108
 */
export function calculateOntarioSurtax(basicOntarioTax: number): number {
  let surtax = 0;
  if (basicOntarioTax > 5554) {
    surtax += (basicOntarioTax - 5554) * 0.20;
  }
  if (basicOntarioTax > 7108) {
    surtax += (basicOntarioTax - 7108) * 0.36;
  }
  return Math.round(surtax);
}

/**
 * Full 2026 Ontario Personal Income Tax Engine
 */
export function calculateOntario2026Tax(grossIncome: number): OntarioTaxBreakdown {
  let grossTax = 0;
  let remaining = grossIncome;
  let prevLimit = 0;
  let marginalRate = 0.0505;

  for (const b of ONTARIO_2026_BRACKETS) {
    const chunk = Math.min(remaining, b.limit - prevLimit);
    if (chunk > 0) {
      grossTax += chunk * b.rate;
      remaining -= chunk;
      marginalRate = b.rate;
      prevLimit = b.limit;
    }
  }

  // Non-refundable Basic Personal Amount Tax Credit
  const bpaCredit = ONTARIO_2026_BPA * 0.0505;
  const basicOntarioTax = Math.max(0, Math.round(grossTax - bpaCredit));

  // Surtax
  const surtax = calculateOntarioSurtax(basicOntarioTax);

  // Health Premium
  const healthPremium = calculateOntarioHealthPremium(grossIncome);

  // Total Ontario Tax
  const netProvincialTax = basicOntarioTax + surtax + healthPremium;
  const effectiveRate = grossIncome > 0 ? netProvincialTax / grossIncome : 0;

  return {
    grossIncomeCAD: grossIncome,
    taxableIncomeCAD: grossIncome,
    provincialBaseTaxCAD: Math.round(grossTax),
    basicPersonalCreditCAD: Math.round(bpaCredit),
    basicOntarioTaxCAD: basicOntarioTax,
    ontarioSurtaxCAD: surtax,
    ontarioHealthPremiumCAD: healthPremium,
    netProvincialTaxCAD: netProvincialTax,
    effectiveProvincialRate: effectiveRate,
    marginalProvincialRate: marginalRate
  };
}
