/**
 * BRITISH COLUMBIA STATUTORY FAMILY BENEFITS ENGINE (2026)
 * 
 * Implements:
 * 1. BC Family Benefit (BCFB) — statutory CRA administration
 * 2. BC Climate Action Tax Credit (BCCATC)
 * 3. ChildCareBC Fee Reduction Initiative Context
 * 
 * Sources:
 * - BC Ministry of Finance (gov.bc.ca/bcfamilybenefit)
 * - Canada Revenue Agency (canada.ca/en/revenue-agency/services/child-family-benefits/provincial-territorial-programs-british-columbia)
 */

export interface BcBenefitsResult {
  afniCAD: number;
  numChildren: number;
  childrenAges: number[];
  bcFamilyBenefitAnnualCAD: number;
  bcFamilyBenefitMonthlyCAD: number;
  bcClimateActionCreditAnnualCAD: number;
  totalBcBenefitsAnnualCAD: number;
  isBcfbEligible: boolean;
  notes: string[];
}

export function calculateBcBenefits(
  afniCAD: number,
  childrenAges: number[] = [16, 11, 5],
  isBcResident: boolean = true
): BcBenefitsResult {
  const notes: string[] = [];

  if (!isBcResident) {
    return {
      afniCAD,
      numChildren: childrenAges.length,
      childrenAges,
      bcFamilyBenefitAnnualCAD: 0,
      bcFamilyBenefitMonthlyCAD: 0,
      bcClimateActionCreditAnnualCAD: 0,
      totalBcBenefitsAnnualCAD: 0,
      isBcfbEligible: false,
      notes: ['Recipient must reside in British Columbia and file a Canadian tax return.']
    };
  }

  // Eligible children under 18
  const eligibleChildren = childrenAges.filter(age => age < 18).length;

  // Tiered Maximum BC Family Benefit amounts:
  // 1st child: $1,750
  // 2nd child: $1,100
  // 3rd+ child: $900 each
  let maxBcfb = 0;
  let floorBcfb = 0;

  if (eligibleChildren >= 1) {
    maxBcfb += 1750;
    floorBcfb += 775;
  }
  if (eligibleChildren >= 2) {
    maxBcfb += 1100;
    floorBcfb += 750;
  }
  if (eligibleChildren >= 3) {
    maxBcfb += (eligibleChildren - 2) * 900;
    floorBcfb += (eligibleChildren - 2) * 725;
  }

  // Two-Tier Statutory Thresholds:
  // Threshold 1: $30,176 CAD (base reduction down to guaranteed floor)
  // Threshold 2: $96,562 CAD (second reduction of guaranteed floor down to $0)
  const bcfbThreshold1 = 30176;
  const bcfbThreshold2 = 96562;
  const bcfbReductionRate = 0.04; // 4% reduction rate

  let annualBcfb = 0;
  if (afniCAD <= bcfbThreshold1) {
    annualBcfb = maxBcfb;
  } else if (afniCAD <= bcfbThreshold2) {
    const clawback = (afniCAD - bcfbThreshold1) * bcfbReductionRate;
    // Protected by the statutory guaranteed minimum floor
    annualBcfb = Math.max(floorBcfb, Math.round(maxBcfb - clawback));
  } else {
    const tier2Clawback = (afniCAD - bcfbThreshold2) * bcfbReductionRate;
    annualBcfb = Math.max(0, Math.round(floorBcfb - tier2Clawback));
  }

  // BC Climate Action Tax Credit (BCCATC)
  let annualBccatc = 0;
  if (afniCAD < 60000) {
    const maxCredit = 504 + 504 + (eligibleChildren * 126); // 2 adults + children
    const clawback = Math.max(0, (afniCAD - 48000) * 0.04);
    annualBccatc = Math.max(0, Math.round(maxCredit - clawback));
  }

  notes.push(`BC Family Benefit calculated for ${eligibleChildren} eligible children under age 18.`);
  if (annualBcfb > 0) {
    notes.push(`Estimated monthly BCFB: $${(annualBcfb / 12).toFixed(2)} CAD deposited alongside the federal CCB on the 20th.`);
  } else {
    notes.push(`BCFB fully phased out due to family income exceeding $${Math.round(bcfbThreshold2 + (floorBcfb / bcfbReductionRate)).toLocaleString()} CAD.`);
  }

  return {
    afniCAD,
    numChildren: eligibleChildren,
    childrenAges,
    bcFamilyBenefitAnnualCAD: annualBcfb,
    bcFamilyBenefitMonthlyCAD: Math.round((annualBcfb / 12) * 100) / 100,
    bcClimateActionCreditAnnualCAD: annualBccatc,
    totalBcBenefitsAnnualCAD: annualBcfb + annualBccatc,
    isBcfbEligible: annualBcfb > 0,
    notes
  };
}
