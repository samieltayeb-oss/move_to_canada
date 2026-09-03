/**
 * STATUTORY FEDERAL BENEFITS BENCHMARKS — BENEFIT YEAR 2026–2027
 * 
 * Effective Period: July 1, 2026 – June 30, 2027
 * Authority: Canada Revenue Agency (CRA)
 * Source Reference: CRA T4114 Canada Child Benefit Booklet & Finance Canada Budget Releases
 * Last Verified: September 3, 2026
 */

export interface VersionedFederalBenefitConfig {
  benefitYear: string;
  effectiveFrom: string;
  effectiveTo: string;
  source: string;
  lastVerifiedAt: string;
  ccb: {
    maxUnder6CAD: number;
    maxAge6to17CAD: number;
    firstThresholdCAD: number;
    secondThresholdCAD: number;
    reductionRates: {
      oneChild: { tier1: number; tier2: number };
      twoChildren: { tier1: number; tier2: number };
      threeChildren: { tier1: number; tier2: number };
      fourOrMoreChildren: { tier1: number; tier2: number };
    };
  };
  cgeb: {
    name: string;
    formerName: string;
    singleBaseCAD: number;
    coupleBaseCAD: number;
    perChildCAD: number;
    clawbackThresholdCAD: number;
    clawbackRate: number;
  };
}

export const FEDERAL_BENEFITS_2026_2027: VersionedFederalBenefitConfig = {
  benefitYear: '2026-2027',
  effectiveFrom: '2026-07-01',
  effectiveTo: '2027-06-30',
  source: 'CRA T4114 Guidelines & Department of Finance Canada 2026 Indexation',
  lastVerifiedAt: '2026-09-03',
  ccb: {
    maxUnder6CAD: 8157,       // Child under age 6: $679.75/month
    maxAge6to17CAD: 6883,     // Child age 6 to 17: $573.58/month
    firstThresholdCAD: 38237, // Maximum threshold before reduction begins
    secondThresholdCAD: 82847,// Statutory indexed second threshold (from $81,222 base)
    reductionRates: {
      oneChild: { tier1: 0.07, tier2: 0.032 },
      twoChildren: { tier1: 0.135, tier2: 0.057 },
      threeChildren: { tier1: 0.19, tier2: 0.08 },
      fourOrMoreChildren: { tier1: 0.23, tier2: 0.095 }
    }
  },
  cgeb: {
    name: 'Canada Groceries and Essentials Benefit (CGEB)',
    formerName: 'GST/HST Credit (Replaced and expanded July 2026)',
    singleBaseCAD: 445,
    coupleBaseCAD: 890,
    perChildCAD: 234,
    clawbackThresholdCAD: 44324,
    clawbackRate: 0.05
  }
};
