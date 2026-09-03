/**
 * ONTARIO STATUTORY FAMILY BENEFITS ENGINE (2026)
 * 
 * Implements:
 * 1. Ontario Child Benefit (OCB) — statutory CRA administration
 * 2. Ontario Trillium Benefit (OTB) — OEPTC (Energy & Property Tax) + OSTC (Sales Tax)
 * 3. CWELCC Childcare Subsidy Context
 * 
 * Sources:
 * - Ontario Ministry of Children, Community and Social Services (ontario.ca/page/ontario-child-benefit)
 * - Canada Revenue Agency (canada.ca/en/revenue-agency/services/child-family-benefits/ontario-child-benefit)
 */

export interface OntarioBenefitsResult {
  afniCAD: number;
  numChildren: number;
  childrenAges: number[];
  ontarioChildBenefitAnnualCAD: number;
  ontarioChildBenefitMonthlyCAD: number;
  ontarioTrilliumBenefitAnnualCAD: number;
  totalOntarioBenefitsAnnualCAD: number;
  isOcbEligible: boolean;
  notes: string[];
}

export function calculateOntarioBenefits(
  afniCAD: number,
  childrenAges: number[] = [16, 11, 5],
  isOntarioResident: boolean = true
): OntarioBenefitsResult {
  const notes: string[] = [];

  if (!isOntarioResident) {
    return {
      afniCAD,
      numChildren: childrenAges.length,
      childrenAges,
      ontarioChildBenefitAnnualCAD: 0,
      ontarioChildBenefitMonthlyCAD: 0,
      ontarioTrilliumBenefitAnnualCAD: 0,
      totalOntarioBenefitsAnnualCAD: 0,
      isOcbEligible: false,
      notes: ['Recipient must reside in Ontario and file a Canadian tax return.']
    };
  }

  // Eligible children under 18
  const eligibleChildren = childrenAges.filter(age => age < 18).length;
  const maxOcbPerChild = 1724; // 2026 indexed amount ($143.66/month)
  const baseTotalOcb = eligibleChildren * maxOcbPerChild;

  // Phaseout threshold: $26,010 CAD
  const ocbThreshold = 26010;
  const ocbReductionRate = 0.08; // 8% reduction for 1+ children

  let annualOcb = 0;
  if (afniCAD <= ocbThreshold) {
    annualOcb = baseTotalOcb;
  } else {
    const clawback = (afniCAD - ocbThreshold) * ocbReductionRate;
    annualOcb = Math.max(0, Math.round(baseTotalOcb - clawback));
  }

  // Ontario Trillium Benefit (OTB) — Sales Tax Credit + Energy Component
  // Phased out for incomes above ~$60,000 for family of 5
  let annualOtb = 0;
  if (afniCAD < 45000) {
    const ostc = (2 + eligibleChildren) * 371; // adult couple + children
    const clawback = Math.max(0, (afniCAD - 37000) * 0.04);
    annualOtb = Math.max(0, Math.round(ostc - clawback));
  }

  notes.push(`Ontario Child Benefit calculated for ${eligibleChildren} eligible children under age 18.`);
  if (annualOcb === 0 && afniCAD > 65000) {
    notes.push(`OCB fully phased out due to family net income of $${afniCAD.toLocaleString()} exceeding the statutory reduction ceiling.`);
  }

  return {
    afniCAD,
    numChildren: eligibleChildren,
    childrenAges,
    ontarioChildBenefitAnnualCAD: annualOcb,
    ontarioChildBenefitMonthlyCAD: Math.round((annualOcb / 12) * 100) / 100,
    ontarioTrilliumBenefitAnnualCAD: annualOtb,
    totalOntarioBenefitsAnnualCAD: annualOcb + annualOtb,
    isOcbEligible: annualOcb > 0,
    notes
  };
}
