import { FamilyProfile } from './types';

export const defaultFamilyProfile: FamilyProfile = {
  headOfHousehold: 'Yassir',
  originCity: 'Riyadh',
  originCountry: 'Saudi Arabia',
  targetCity: 'Calgary',
  targetProvince: 'Alberta',
  numAdults: 2,
  numChildren: 3,
  childrenAges: [11, 8, 4], // 3 children under 15
  immigrationStatus: 'Permanent Resident',
  expectedAnnualHouseholdIncomeCAD: 135000,
  initialSavingsCAD: 85000,
  housingPreference: '4-Bed',
  propertyTypePreference: 'Detached House',
  vehicleCount: 1,
  preferredCommuteMins: 30,
  islamicSchoolPreference: true,
  publicSchoolPreference: false,
  communityPriorities: ['Islamic Community', 'Large House', 'Good Schools', 'Safety', 'Parks']
};

export const IMMIGRATION_STATUS_OPTIONS = [
  'Permanent Resident',
  'Work Permit',
  'Study Permit',
  'Citizen Returning',
  'Still Planning',
  'Other'
] as const;
