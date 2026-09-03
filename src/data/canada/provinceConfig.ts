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
      basicPersonalAmountCAD: 21885, // Highest in Canada
      lowestBracketRate: 0.10,       // 10% flat up to ~$148k
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
    majorCities: ['Toronto', 'Ottawa', 'Mississauga', 'Hamilton'],
    tagline: 'Canada’s economic engine and financial capital (Scheduled for Phase 2 expansion).',
    arabicTagline: 'عاصمة كندا الاقتصادية والمالية الكبرى (مجدولة للتوسعة في المرحلة الثانية).',
    tax: {
      basicPersonalAmountCAD: 12399,
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
      waitPeriodDays: 0, // Wait period historically waived since 2020 emergency order
      registrationWindowMonths: 3,
      ambulanceSubsidized: true,
      standardAmbulanceFeeCAD: 240,
      supplementarySafetyNetPlan: 'Trillium Drug Program / Healthy Smiles Ontario'
    },
    licensing: {
      authorityName: 'DriveTest Ontario / ServiceOntario',
      licenceClassHierarchy: 'G1 -> G2 -> Full G',
      hasGdlSystem: true,
      saudiReciprocalExchange: false,
      priorExperienceExemptionProgram: 'Foreign Licence Driving Experience Letter (1+ years)',
      drivingAbstractRequired: 'Saudi Traffic Police (Moroor) authenticated driving record'
    },
    education: {
      ministryName: 'Ontario Ministry of Education',
      majorPublicBoards: ['Toronto District School Board (TDSB)', 'Peel District School Board (PDSB)'],
      kindergartenEntryAge: 4, // Junior Kindergarten at age 4
      compulsorySchoolAge: 6,
      ellReceptionProtocol: 'TDSB Welcome Centres for International Families',
      standardPublicTuitionCAD: 0
    },
    isImplementedInV1: false,
    phaseRelease: 'PHASE_2'
  },
  BC: {
    code: 'BC',
    name: 'British Columbia',
    arabicName: 'كولومبيا البريطانية',
    capitalCity: 'Victoria',
    majorCities: ['Vancouver', 'Surrey', 'Burnaby', 'Victoria'],
    tagline: 'Mild coastal climate, tech hub, and Pacific gateway (Scheduled for Phase 2 expansion).',
    arabicTagline: 'المناخ الساحلي المعتدل، قطاع التكنولوجيا المتقدم، وبوابة المحيط الهادئ (مجدولة للتوسعة في المرحلة الثانية).',
    tax: {
      basicPersonalAmountCAD: 12580,
      lowestBracketRate: 0.0506,
      highestBracketRate: 0.2050,
      hasProvincialSalesTax: true,
      provincialSalesTaxRate: 0.07,
      harmonizedSalesTax: false, // 5% GST + 7% PST
      totalEffectiveSalesTaxRate: 0.12
    },
    healthcare: {
      planName: 'Medical Services Plan (MSP)',
      agencyName: 'Health Insurance BC',
      waitPeriodDays: 60, // Traditional wait period applies to BC (remainder of month + 2 months)
      registrationWindowMonths: 3,
      ambulanceSubsidized: true,
      standardAmbulanceFeeCAD: 80,
      supplementarySafetyNetPlan: 'Fair PharmaCare / BC Healthy Kids Program'
    },
    licensing: {
      authorityName: 'Insurance Corporation of British Columbia (ICBC)',
      licenceClassHierarchy: 'Class 7L -> Class 7N -> Class 5 Full',
      hasGdlSystem: true,
      saudiReciprocalExchange: false,
      priorExperienceExemptionProgram: 'ICBC Driving Experience Credit for Non-Reciprocal Licences',
      drivingAbstractRequired: 'Official Saudi Arabian Ministry of Interior driving history extract'
    },
    education: {
      ministryName: 'BC Ministry of Education and Child Care',
      majorPublicBoards: ['Vancouver School Board (VSB)', 'Surrey Schools (SD36)'],
      kindergartenEntryAge: 5,
      compulsorySchoolAge: 6,
      ellReceptionProtocol: 'District Welcome and Reception Centres',
      standardPublicTuitionCAD: 0
    },
    isImplementedInV1: false,
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
  return Object.values(CANADIAN_PROVINCES).filter(p => p.isImplementedInV1);
}
