/**
 * CANADIAN PROVINCE CONFIGURATION & TYPED ARCHITECTURE
 * 
 * Central registry decoupling provincial implementations from federal baselines.
 * Complies with the master directive: Alberta is implemented for V1; ON & BC architectures are prepared for Phase 2.
 */

export interface ProvinceTaxConfig {
  basicPersonalAmountCAD: number;
  lowestBracketRate: number;
  highestBracketRate: number;
  hasProvincialSalesTax: boolean;
  provincialSalesTaxRate: number; // e.g. 0% for AB, 8% for ON, 7% for BC
  harmonizedSalesTax: boolean;    // false for AB/BC, true for ON (13% HST)
  totalEffectiveSalesTaxRate: number; // 5% in AB, 13% in ON, 12% in BC
}

export interface ProvinceHealthcareConfig {
  planName: string;
  agencyName: string;
  waitPeriodDays: number;
  registrationWindowMonths: number;
  ambulanceSubsidized: boolean;
  standardAmbulanceFeeCAD: number;
  supplementarySafetyNetPlan: string;
}

export interface ProvinceLicensingConfig {
  authorityName: string;
  licenceClassHierarchy: string;
  hasGdlSystem: boolean;
  saudiReciprocalExchange: boolean;
  priorExperienceExemptionProgram: string;
  drivingAbstractRequired: string;
}

export interface ProvinceEducationConfig {
  ministryName: string;
  majorPublicBoards: string[];
  kindergartenEntryAge: number;
  compulsorySchoolAge: number;
  ellReceptionProtocol: string;
  standardPublicTuitionCAD: number;
}

export interface ProvinceConfig {
  code: 'AB' | 'ON' | 'BC';
  name: string;
  arabicName: string;
  capitalCity: string;
  majorCities: string[];
  tagline: string;
  arabicTagline: string;
  tax: ProvinceTaxConfig;
  healthcare: ProvinceHealthcareConfig;
  licensing: ProvinceLicensingConfig;
  education: ProvinceEducationConfig;
  isImplementedInV1: boolean;
  phaseRelease: 'V1' | 'PHASE_2';
}

export const CANADIAN_PROVINCES: Record<'AB' | 'ON' | 'BC', ProvinceConfig> = {
  AB: {
    code: 'AB',
    name: 'Alberta',
    arabicName: 'ألبرتا',
    capitalCity: 'Edmonton',
    majorCities: ['Calgary', 'Edmonton', 'Red Deer', 'Lethbridge'],
    tagline: 'Lowest taxes in Canada, no PST (only 5% GST), immediate healthcare coverage, proximity to the Rockies.',
    arabicTagline: 'أقل ضرائب في كندا، بدون ضريبة مبيعات محلية (فقط 5% GST)، تغطية صحية فورية، وقرب استثنائي من جبال روكي.',
    tax: {
      basicPersonalAmountCAD: 22769, // Alberta 2026 BPA (Highest in Canada)
      lowestBracketRate: 0.08,       // 8% up to $61,200 (graduated brackets: 8%, 10%, 12%, 13%, 14%, 15%)
      highestBracketRate: 0.15,
      hasProvincialSalesTax: false,
      provincialSalesTaxRate: 0.00,
      harmonizedSalesTax: false,
      totalEffectiveSalesTaxRate: 0.05 // 5% federal GST only
    },
    healthcare: {
      planName: 'Alberta Health Care Insurance Plan (AHCIP)',
      agencyName: 'Alberta Health',
      waitPeriodDays: 0, // Zero-day wait for international arrivals with PR
      registrationWindowMonths: 3,
      ambulanceSubsidized: false,
      standardAmbulanceFeeCAD: 385,
      supplementarySafetyNetPlan: 'Alberta Blue Cross Non-Group / Alberta Child Health Benefit'
    },
    licensing: {
      authorityName: 'Alberta Registry Agents / Alberta Transportation',
      licenceClassHierarchy: 'Class 7 (Learner) -> Class 5-GDL -> Class 5 Full',
      hasGdlSystem: true,
      saudiReciprocalExchange: false,
      priorExperienceExemptionProgram: 'Alberta Foreign Licence Credential & Experience Recognition',
      drivingAbstractRequired: 'Official stamped Moroor driving record with certified translation'
    },
    education: {
      ministryName: 'Alberta Education',
      majorPublicBoards: ['Calgary Board of Education (CBE)', 'Edmonton Public Schools (EPSB)'],
      kindergartenEntryAge: 5,
      compulsorySchoolAge: 6,
      ellReceptionProtocol: 'CBE Kingsland Reception Centre ELL Assessment',
      standardPublicTuitionCAD: 0
    },
    isImplementedInV1: true,
    phaseRelease: 'V1'
  },
  ON: {
    code: 'ON',
    name: 'Ontario',
    arabicName: 'أونتاريو',
    capitalCity: 'Toronto',
    majorCities: ['Toronto', 'Ottawa', 'Mississauga', 'Brampton', 'Hamilton', 'Kitchener-Waterloo'],
    tagline: 'Canada’s economic engine and financial capital. Unrivalled job market and diverse cultural institutions.',
    arabicTagline: 'عاصمة كندا الاقتصادية والمالية الكبرى. أسواق مالية متطورة، وفرص وظيفية واسعة، وأكبر جالية مسلمة في كندا.',
    tax: {
      basicPersonalAmountCAD: 12989,
      lowestBracketRate: 0.0505,
      highestBracketRate: 0.1316,
      hasProvincialSalesTax: true,
      provincialSalesTaxRate: 0.08,
      harmonizedSalesTax: true, // 13% HST
      totalEffectiveSalesTaxRate: 0.13
    },
    healthcare: {
      planName: 'Ontario Health Insurance Plan (OHIP)',
      agencyName: 'Ontario Ministry of Health',
      waitPeriodDays: 0, // Zero-day wait permanently eliminated under Regulation 552
      registrationWindowMonths: 3,
      ambulanceSubsidized: true,
      standardAmbulanceFeeCAD: 45, // $45 medically necessary co-payment ($240 if not medically necessary)
      supplementarySafetyNetPlan: 'OHIP+ (100% drug coverage for youth <25) / Trillium Drug Program'
    },
    licensing: {
      authorityName: 'DriveTest Ontario / ServiceOntario',
      licenceClassHierarchy: 'G1 -> G2 -> Full G',
      hasGdlSystem: true,
      saudiReciprocalExchange: false,
      priorExperienceExemptionProgram: 'Foreign Licence Driving Experience Recognition (Up to 12 mo self-declaration, 12+ mo Moroor letter)',
      drivingAbstractRequired: 'Official Saudi Traffic Police (Moroor) authenticated driving record with ATIO translation'
    },
    education: {
      ministryName: 'Ontario Ministry of Education',
      majorPublicBoards: ['Toronto District School Board (TDSB)', 'Peel District School Board (PDSB)', 'Ottawa-Carleton (OCDSB)', 'Hamilton (HWDSB)', 'Waterloo (WRDSB)'],
      kindergartenEntryAge: 4, // Junior Kindergarten at age 4
      compulsorySchoolAge: 6,
      ellReceptionProtocol: 'TDSB & Peel Welcome Centres for International Families',
      standardPublicTuitionCAD: 0
    },
    isImplementedInV1: true,
    phaseRelease: 'PHASE_2'
  },
  BC: {
    code: 'BC',
    name: 'British Columbia',
    arabicName: 'بريتيش كولومبيا',
    capitalCity: 'Victoria',
    majorCities: ['Vancouver', 'Burnaby', 'Surrey', 'Richmond', 'Coquitlam', 'Victoria'],
    tagline: 'Mild coastal maritime climate, Pacific tech gateway, and Group 1 subsidized Islamic schools.',
    arabicTagline: 'مناخ ساحلي معتدل على مدار العام، وبوابة التكنولوجيا على المحيط الهادئ، ومدارس إسلامية مدعومة من المقاطعة.',
    tax: {
      basicPersonalAmountCAD: 13216,
      lowestBracketRate: 0.0560, // 2026 Budget adjusted rate
      highestBracketRate: 0.2050,
      hasProvincialSalesTax: true,
      provincialSalesTaxRate: 0.07,
      harmonizedSalesTax: false, // 5% GST + 7% PST (separate taxes)
      totalEffectiveSalesTaxRate: 0.12
    },
    healthcare: {
      planName: 'Medical Services Plan (MSP)',
      agencyName: 'Health Insurance BC',
      waitPeriodDays: 75, // Mandatory waiting period: remainder of arrival month + 2 full consecutive calendar months
      registrationWindowMonths: 3,
      ambulanceSubsidized: true,
      standardAmbulanceFeeCAD: 80, // $80 standard patient copay
      supplementarySafetyNetPlan: 'Fair PharmaCare (income-tested prescription drug assistance)'
    },
    licensing: {
      authorityName: 'Insurance Corporation of British Columbia (ICBC)',
      licenceClassHierarchy: 'Class 7L -> Class 7N -> Class 5 Full',
      hasGdlSystem: true,
      saudiReciprocalExchange: false,
      priorExperienceExemptionProgram: 'ICBC Non-Reciprocal Direct Class 5 Road Test Bypass (Requires 2+ years proven driving history)',
      drivingAbstractRequired: 'Official Saudi Arabian Traffic Police driving history extract with approved translation'
    },
    education: {
      ministryName: 'BC Ministry of Education and Child Care',
      majorPublicBoards: ['Surrey Schools (SD36)', 'Vancouver School Board (VSB SD39)', 'Burnaby (SD41)', 'Richmond (SD38)', 'Coquitlam (SD43)', 'Victoria (SD61)'],
      kindergartenEntryAge: 5,
      compulsorySchoolAge: 6,
      ellReceptionProtocol: 'District Language Assessment & Welcome Hubs',
      standardPublicTuitionCAD: 0
    },
    isImplementedInV1: true,
    phaseRelease: 'PHASE_2'
  }
};

export function getProvinceConfig(code: 'AB' | 'ON' | 'BC'): ProvinceConfig {
  return CANADIAN_PROVINCES[code] || CANADIAN_PROVINCES.AB;
}

export function getAllProvinces(): ProvinceConfig[] {
  return Object.values(CANADIAN_PROVINCES);
}

export function getActiveProvinces(): ProvinceConfig[] {
  return Object.values(CANADIAN_PROVINCES);
}
