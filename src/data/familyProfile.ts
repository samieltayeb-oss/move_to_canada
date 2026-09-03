import { FamilyProfile } from './types';

export const defaultFamilyProfile: FamilyProfile = {
  headOfHousehold: 'Yassir',
  originCity: 'Riyadh',
  originCountry: 'Saudi Arabia',
  targetCity: 'Calgary',
  targetProvince: 'Alberta',
  numAdults: 2,
  numChildren: 3,
  childrenAges: [16, 11, 5], // 3 children: 16 (Senior High), 11 (Grade 6), 5 (Kindergarten)
  immigrationStatus: 'Permanent Resident',
  expectedAnnualHouseholdIncomeCAD: 135000,
  initialSavingsCAD: 85000,
  housingPreference: '4-Bed',
  propertyTypePreference: 'Detached House',
  vehicleCount: 1,
  preferredCommuteMins: 30,
  islamicSchoolPreference: false,
  publicSchoolPreference: true,
  communityPriorities: ['Public CBE Schools', 'Islamic Community', 'Large House', 'Safety', 'Parks']
};

export const IMMIGRATION_STATUS_OPTIONS = [
  'Permanent Resident',
  'Work Permit',
  'Study Permit',
  'Citizen Returning',
  'Still Planning',
  'Other'
] as const;
