export interface HousingBenchmark {
  propertyType: 'Apartment / Condo' | 'Townhouse' | 'Duplex / Semi-Detached' | 'Detached House (Whole)';
  bedrooms: 3 | 4;
  cmhcOccupiedAverageCAD: number;
  rentalsCaCurrentAskingCAD: number;
  typicalDepositCAD: number;
  typicalSquareFootage: string;
  utilitiesIncluded: boolean;
  typicalMonthlyUtilitiesCAD: number;
  typicalTenantInsuranceCAD: number;
  parkingType: string;
  sourceId: string;
  notes: string;
}

export const housingBenchmarks: HousingBenchmark[] = [
  {
    propertyType: 'Apartment / Condo',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 1950,
    rentalsCaCurrentAskingCAD: 2150,
    typicalDepositCAD: 2150,
    typicalSquareFootage: '1,050 – 1,250 sq ft',
    utilitiesIncluded: false, // Heat and water often included in condo fees, electricity separate
    typicalMonthlyUtilitiesCAD: 180, // Electricity + internet
    typicalTenantInsuranceCAD: 25,
    parkingType: '1-2 Underground Titled / Assigned Stalls',
    sourceId: 'SRC-HOU-002',
    notes: 'Condo apartments typically include heat and water in condo fees paid by landlord; tenant pays electricity ($70-$110) and internet.'
  },
  {
    propertyType: 'Townhouse',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2120,
    rentalsCaCurrentAskingCAD: 2350,
    typicalDepositCAD: 2350,
    typicalSquareFootage: '1,250 – 1,550 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 340,
    typicalTenantInsuranceCAD: 30,
    parkingType: 'Attached Single Garage or Surface Stall',
    sourceId: 'SRC-HOU-002',
    notes: 'Multi-level living with basement; utilities generally 100% tenant responsibility unless managed condominium.'
  },
  {
    propertyType: 'Duplex / Semi-Detached',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2200,
    rentalsCaCurrentAskingCAD: 2480,
    typicalDepositCAD: 2480,
    typicalSquareFootage: '1,400 – 1,750 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 380,
    typicalTenantInsuranceCAD: 32,
    parkingType: 'Front Attached Single/Double or Laned Pad',
    sourceId: 'SRC-HOU-002',
    notes: 'Shares single common wall with neighbor; includes private fenced backyard suitable for children.'
  },
  {
    propertyType: 'Detached House (Whole)',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2350,
    rentalsCaCurrentAskingCAD: 2650,
    typicalDepositCAD: 2650,
    typicalSquareFootage: '1,600 – 2,100 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 460,
    typicalTenantInsuranceCAD: 38,
    parkingType: 'Attached Double Garage or Laned Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Complete detached privacy, full private yard, double garage, finished or unfinished basement storage.'
  },
  {
    propertyType: 'Townhouse',
    bedrooms: 4,
    cmhcOccupiedAverageCAD: 2380,
    rentalsCaCurrentAskingCAD: 2600,
    typicalDepositCAD: 2600,
    typicalSquareFootage: '1,500 – 1,900 sq ft (Finished basement bedroom)',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 390,
    typicalTenantInsuranceCAD: 32,
    parkingType: 'Attached Single/Double Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Typically 3 bedrooms on upper level + 4th bedroom in builder-finished basement with full bathroom.'
  },
  {
    propertyType: 'Detached House (Whole)',
    bedrooms: 4,
    cmhcOccupiedAverageCAD: 2550,
    rentalsCaCurrentAskingCAD: 2950,
    typicalDepositCAD: 2950,
    typicalSquareFootage: '1,900 – 2,600 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 510,
    typicalTenantInsuranceCAD: 42,
    parkingType: 'Front Attached Double Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Prime choice for family of 5: 3 upper bedrooms + guest/office room or finished basement suite, double car garage essential for winter, private fenced yard.'
  }
];

export interface VerifiedListingSnapshot {
  id: string;
  title: string;
  neighbourhood: string;
  quadrant: string;
  bedrooms: number;
  bathrooms: number;
  propertyType: string;
  monthlyRentCAD: number;
  squareFeet: number;
  garageType: string;
  availableDate: string;
  lastVerifiedAt: string;
  sourceUrl: string;
  highlights: string[];
}

export const sampleVerifiedListings: VerifiedListingSnapshot[] = [
  {
    id: 'LIST-NE-001',
    title: 'Modern 4-Bed Detached Home with Double Garage',
    neighbourhood: 'Savanna / Saddleridge',
    quadrant: 'NE',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 2750,
    squareFeet: 2150,
    garageType: 'Double Attached Front Garage',
    availableDate: 'Immediate / Upcoming Month',
    lastVerifiedAt: '2026-09-02',
    sourceUrl: 'https://rentals.ca/calgary',
    highlights: ['5 mins to Akram Jomaa', 'Walk to Saddletowne CTrain', 'Fenced yard', 'Stone counters', 'Finished basement bedroom']
  },
  {
    id: 'LIST-NW-001',
    title: 'Spacious 4-Bed Family Home near Country Hills',
    neighbourhood: 'Evanston',
    quadrant: 'NW',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 3050,
    squareFeet: 2320,
    garageType: 'Double Attached Front Garage',
    availableDate: 'Upcoming Month',
    lastVerifiedAt: '2026-09-02',
    sourceUrl: 'https://rentals.ca/calgary',
    highlights: ['Top public schools', '10 mins to Al-Amal Academy', 'Country Hills Superstore halal corridor', 'Gas fireplace']
  },
  {
    id: 'LIST-SW-001',
    title: 'Executive 4-Bedroom Estate Villa',
    neighbourhood: 'West Springs',
    quadrant: 'SW',
    bedrooms: 4,
    bathrooms: 4,
    propertyType: 'Detached House',
    monthlyRentCAD: 3950,
    squareFeet: 2750,
    garageType: 'Triple Heated Attached Garage',
    availableDate: 'Upcoming Month',
    lastVerifiedAt: '2026-09-02',
    sourceUrl: 'https://rentals.ca/calgary',
    highlights: ['Weber Academy & CFIS zone', '20 mins to Downtown via CTrain', 'Chef kitchen', 'Backing onto green ravine']
  },
  {
    id: 'LIST-SE-001',
    title: 'Lake Access 4-Bed Home near South Health Campus',
    neighbourhood: 'Mahogany',
    quadrant: 'SE',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 3150,
    squareFeet: 2280,
    garageType: 'Double Attached Front Garage',
    availableDate: 'Upcoming Month',
    lastVerifiedAt: '2026-09-02',
    sourceUrl: 'https://rentals.ca/calgary',
    highlights: ['Private beach & lake privileges', 'Next to Seton YMCA', 'Modern open-concept', 'Air conditioning installed']
  }
];
