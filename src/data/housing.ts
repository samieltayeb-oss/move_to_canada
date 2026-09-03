export interface HousingBenchmark {
  propertyType: 'Apartment / Condo' | 'Townhouse' | 'Duplex / Semi-Detached' | 'Detached House (Whole)';
  bedrooms: 3 | 4;
  cmhcOccupiedAverageCAD: number;
  rentalsCaCurrentAskingCAD: number;
  facebookMarketplaceAskingCAD: number;
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
    cmhcOccupiedAverageCAD: 1850,
    rentalsCaCurrentAskingCAD: 1980,
    facebookMarketplaceAskingCAD: 1850,
    typicalDepositCAD: 1850,
    typicalSquareFootage: '1,050 – 1,250 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 170,
    typicalTenantInsuranceCAD: 25,
    parkingType: '1-2 Underground Titled / Assigned Stalls',
    sourceId: 'SRC-HOU-002',
    notes: 'Prices dropped ~10% from peak. Heat and water usually included in condo fees; tenant pays electricity ($70-$100) and internet.'
  },
  {
    propertyType: 'Townhouse',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 1980,
    rentalsCaCurrentAskingCAD: 2150,
    facebookMarketplaceAskingCAD: 2050,
    typicalDepositCAD: 2050,
    typicalSquareFootage: '1,250 – 1,550 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 320,
    typicalTenantInsuranceCAD: 28,
    parkingType: 'Attached Single Garage or Surface Stall',
    sourceId: 'SRC-HOU-002',
    notes: 'Calgary townhouse rental rates have softened; multi-level layout with basement, private entry, and small yard.'
  },
  {
    propertyType: 'Duplex / Semi-Detached',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2080,
    rentalsCaCurrentAskingCAD: 2280,
    facebookMarketplaceAskingCAD: 2180,
    typicalDepositCAD: 2180,
    typicalSquareFootage: '1,400 – 1,750 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 360,
    typicalTenantInsuranceCAD: 30,
    parkingType: 'Front Attached Single/Double or Laned Pad',
    sourceId: 'SRC-HOU-002',
    notes: 'Softened asking prices; shares single wall with neighbor; includes private fenced backyard suitable for children.'
  },
  {
    propertyType: 'Detached House (Whole)',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2180,
    rentalsCaCurrentAskingCAD: 2380,
    facebookMarketplaceAskingCAD: 2250,
    typicalDepositCAD: 2250,
    typicalSquareFootage: '1,600 – 2,000 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 420,
    typicalTenantInsuranceCAD: 35,
    parkingType: 'Attached Double Garage or Laned Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Complete detached privacy, full private yard, double garage, finished or unfinished basement storage.'
  },
  {
    propertyType: 'Townhouse',
    bedrooms: 4,
    cmhcOccupiedAverageCAD: 2200,
    rentalsCaCurrentAskingCAD: 2380,
    facebookMarketplaceAskingCAD: 2280,
    typicalDepositCAD: 2280,
    typicalSquareFootage: '1,500 – 1,900 sq ft (Finished basement bedroom)',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 370,
    typicalTenantInsuranceCAD: 30,
    parkingType: 'Attached Single/Double Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Typically 3 bedrooms on upper level + 4th bedroom in builder-finished basement with full bathroom.'
  },
  {
    propertyType: 'Detached House (Whole)',
    bedrooms: 4,
    cmhcOccupiedAverageCAD: 2380,
    rentalsCaCurrentAskingCAD: 2650,
    facebookMarketplaceAskingCAD: 2490,
    typicalDepositCAD: 2490,
    typicalSquareFootage: '1,900 – 2,600 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 470,
    typicalTenantInsuranceCAD: 38,
    parkingType: 'Front Attached Double Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Price drop evident in NE/NW: detached 4-bed homes with double garage now regularly list on Facebook Marketplace at $2,450–$2,600/mo (down from $2,950+).'
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
  previousRentCAD?: number;
  squareFeet: number;
  garageType: string;
  availableDate: string;
  lastVerifiedAt: string;
  sourcePlatform: 'Facebook Marketplace' | 'RentFaster' | 'Rentals.ca';
  sourceUrl: string;
  highlights: string[];
}

export const sampleVerifiedListings: VerifiedListingSnapshot[] = [
  {
    id: 'LIST-NE-CORNERSTONE',
    title: 'Brand New 4-Bed Detached Home with Spice Kitchen & Double Garage',
    neighbourhood: 'Cornerstone',
    quadrant: 'NE',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 2490,
    previousRentCAD: 2750,
    squareFeet: 2200,
    garageType: 'Double Attached Front Garage',
    availableDate: 'Immediate / Upcoming Month',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    sourceUrl: 'https://www.facebook.com/marketplace/calgary/propertyrentals',
    highlights: [
      'Price reduced by $260/mo',
      'Dedicated spice kitchen / secondary prep kitchen',
      '5 mins to Chalo FreshCo & Stoney Trail',
      'High 9ft ceilings, quartz counters, main floor bedroom/den',
      'Private fenced yard'
    ]
  },
  {
    id: 'LIST-NE-THORNCLIFFE',
    title: 'Renovated 4-Bed Family Bungalow near Thorncliffe School',
    neighbourhood: 'Thorncliffe / Greenview',
    quadrant: 'Inner NE / Centre St',
    bedrooms: 4,
    bathrooms: 2,
    propertyType: 'Detached Bungalow',
    monthlyRentCAD: 2390,
    previousRentCAD: 2600,
    squareFeet: 1950,
    garageType: 'Detached Double Heated Garage',
    availableDate: 'Immediate',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    sourceUrl: 'https://www.facebook.com/marketplace/calgary/propertyrentals',
    highlights: [
      '12 mins direct drive to Downtown Calgary',
      'Walking distance to Thorncliffe Elementary (CBE public school)',
      'Large mature private backyard with mature trees',
      'Express transit along Centre Street North',
      'Quiet established family street'
    ]
  },
  {
    id: 'LIST-NE-SAVANNA',
    title: 'Modern 4-Bed Detached Home with Finished Basement Suite',
    neighbourhood: 'Savanna / Saddleridge',
    quadrant: 'NE',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 2550,
    previousRentCAD: 2850,
    squareFeet: 2150,
    garageType: 'Double Attached Front Garage',
    availableDate: 'Immediate / Next Month',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'RentFaster',
    sourceUrl: 'https://www.rentfaster.ca/ab/calgary/',
    highlights: [
      'Price reduced: was $2,850, now $2,550/mo',
      '5 mins to Akram Jomaa Islamic Centre',
      'Walk to Saddletowne CTrain station & Genesis Centre',
      'Stone counters & stainless appliances',
      '4 full bedrooms + bonus room on upper level'
    ]
  },
  {
    id: 'LIST-NW-EVANSTON',
    title: 'Spacious 4-Bed Family Home near Symons Valley & Stoney',
    neighbourhood: 'Evanston',
    quadrant: 'NW',
    bedrooms: 4,
    bathrooms: 3.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 2680,
    previousRentCAD: 2950,
    squareFeet: 2280,
    garageType: 'Double Attached Garage',
    availableDate: 'Next Month',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    sourceUrl: 'https://www.facebook.com/marketplace/calgary/propertyrentals',
    highlights: [
      'Softened asking price: down from $2,950',
      'Walking distance to Kenneth D. Taylor Public School',
      'Quick access to Costco Beacon Hill & Superstore',
      'Open-concept main floor, gas fireplace, modern kitchen',
      'High-demand Northwest family community'
    ]
  },
  {
    id: 'LIST-NE-3BED-TARADALE',
    title: 'Bright 3-Bed Main Floor Suite with Attached Garage',
    neighbourhood: 'Taradale',
    quadrant: 'NE',
    bedrooms: 3,
    bathrooms: 2,
    propertyType: 'Duplex / Semi-Detached',
    monthlyRentCAD: 2050,
    previousRentCAD: 2250,
    squareFeet: 1450,
    garageType: 'Attached Single Garage + Driveway',
    availableDate: 'Immediate',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    sourceUrl: 'https://www.facebook.com/marketplace/calgary/propertyrentals',
    highlights: [
      'Great budget entry for newcomer family: $2,050/mo',
      'Near Taradale Public School and park',
      'Walk to Castleridge halal shops and bakery',
      'Includes laundry and dishwasher'
    ]
  },
  {
    id: 'LIST-NW-3BED-SAGEHILL',
    title: 'Modern 3-Bed Townhouse with Garage near Walmart & Co-op',
    neighbourhood: 'Sage Hill',
    quadrant: 'NW',
    bedrooms: 3,
    bathrooms: 2.5,
    propertyType: 'Townhouse',
    monthlyRentCAD: 2150,
    previousRentCAD: 2350,
    squareFeet: 1400,
    garageType: 'Tandem Double Garage',
    availableDate: 'Immediate',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'RentFaster',
    sourceUrl: 'https://www.rentfaster.ca/ab/calgary/',
    highlights: [
      'Walk to Sage Hill Crossing retail (Walmart, T&T, banks)',
      'Balcony with mountain view',
      'Quartz island kitchen and 2.5 bathrooms',
      'Efficient low-utility modern insulation'
    ]
  }
];
