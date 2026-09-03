export type FreshnessStatus = 'CURRENT' | 'RECENT' | 'AGING' | 'STALE';
export type SourceTier = 'TIER 1' | 'TIER 2' | 'TIER 3' | 'TIER 4';
export type CurrencyCode = 'CAD' | 'SAR' | 'PERCENT' | 'RATIO' | 'POINTS';

export interface VerifiedSource {
  id: string;
  name: string;
  url: string;
  tier: SourceTier;
  sourceType: string;
  datePublished?: string;
  lastVerifiedAt: string;
  dataPeriod: string;
  expiryDate?: string;
  refreshCadence: string;
  confidence: number;
  notes: string;
}

export interface VerifiedRecord<T = number | string> {
  id: string;
  name: string;
  value: T;
  unit?: string;
  currency: CurrencyCode;
  geography: string;
  effectiveDate: string;
  lastVerifiedAt: string;
  expiresAt?: string;
  sourceId: string;
  sourceUrl: string;
  confidence: number;
  freshnessStatus: FreshnessStatus;
  notes?: string;
}

export type ImmigrationStatus = 
  | 'Permanent Resident'
  | 'Work Permit'
  | 'Study Permit'
  | 'Citizen Returning'
  | 'Still Planning'
  | 'Other';

export interface FamilyProfile {
  headOfHousehold: string;
  originCity: string;
  originCountry: string;
  targetCity: string;
  targetProvince: string;
  numAdults: number;
  numChildren: number;
  childrenAges: number[];
  immigrationStatus: ImmigrationStatus;
  expectedAnnualHouseholdIncomeCAD: number;
  initialSavingsCAD: number;
  housingPreference: '3-Bed' | '4-Bed';
  propertyTypePreference: 'Detached House' | 'Townhouse' | 'Apartment';
  vehicleCount: number;
  preferredCommuteMins: number;
  islamicSchoolPreference: boolean;
  publicSchoolPreference: boolean;
  communityPriorities: string[];
}
