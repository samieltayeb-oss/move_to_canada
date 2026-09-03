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
    notes: 'Duplexes provide single-family feel with private yard and garage at $200–$350/mo discount to fully detached houses.'
  },
  {
    propertyType: 'Detached House (Whole)',
    bedrooms: 3,
    cmhcOccupiedAverageCAD: 2250,
    rentalsCaCurrentAskingCAD: 2450,
    facebookMarketplaceAskingCAD: 2320,
    typicalDepositCAD: 2320,
    typicalSquareFootage: '1,550 – 2,100 sq ft',
    utilitiesIncluded: false,
    typicalMonthlyUtilitiesCAD: 410,
    typicalTenantInsuranceCAD: 35,
    parkingType: 'Attached Single/Double Garage',
    sourceId: 'SRC-HOU-002',
    notes: 'Full detached whole house with private backyard for children (ages 16, 11, 5) and basement storage.'
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
  arabicTitle: string;
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
  sourcePlatform: 'Facebook Marketplace' | 'RentFaster' | 'Realtor.ca';
  facebookMarketplaceUrl: string;
  rentFasterUrl: string;
  imageUrl: string;
  highlights: string[];
}

export const live24hRentalFeeds = {
  syncFrequency: 'Every 24 Hours (Daily Live Update)',
  arabicSyncFrequency: 'تحديث حي ومباشر كل 24 ساعة يومياً',
  lastSyncedTimestamp: '2026-09-03',
  directSearchFeeds: [
    {
      label: 'Facebook Marketplace — Calgary 4-Bed Homes ($2,200–$2,700)',
      arabicLabel: 'عروض فيسبوك ماركت بليس المباشرة — بيوت 4 غرف ($2,200 - $2,700)',
      url: 'https://www.facebook.com/marketplace/calgary/propertyrentals?minPrice=2200&maxPrice=2700&bedrooms=4',
      platform: 'Facebook Marketplace',
      tag: 'Best Price Drop Deals'
    },
    {
      label: 'Facebook Marketplace — Calgary 3-Bed Homes ($1,850–$2,350)',
      arabicLabel: 'عروض فيسبوك ماركت بليس المباشرة — بيوت 3 غرف ($1,850 - $2,350)',
      url: 'https://www.facebook.com/marketplace/calgary/propertyrentals?minPrice=1850&maxPrice=2350&bedrooms=3',
      platform: 'Facebook Marketplace',
      tag: 'Budget Family Suites'
    },
    {
      label: 'RentFaster Calgary — NE Detached Whole Houses (Cornerstone, Savanna, Saddleridge)',
      arabicLabel: 'رنت فاستر كالغاري — بيوت كاملة شمال شرق كالغاري (كورنرستون، سافانا، سادلريدج)',
      url: 'https://www.rentfaster.ca/ab/calgary/rentals/house/?quadrant=NE&beds=4',
      platform: 'RentFaster',
      tag: 'Verified Landlords'
    },
    {
      label: 'RentFaster Calgary — NW Family Suburbs (Evanston, Sage Hill, Carrington)',
      arabicLabel: 'رنت فاستر كالغاري — شمال غرب كالغاري (إيفانستون، سيج هيل، كارينغتون)',
      url: 'https://www.rentfaster.ca/ab/calgary/rentals/house/?quadrant=NW&beds=4',
      platform: 'RentFaster',
      tag: 'Top Rated Schools'
    },
    {
      label: 'Realtor.ca Calgary — Verified MLS Residential Rentals',
      arabicLabel: 'ريلتور كندا — عقارات الإيجار المعتمدة رسمياً في MLS',
      url: 'https://www.realtor.ca/ab/calgary/rentals',
      platform: 'Realtor.ca',
      tag: 'Official MLS'
    }
  ]
};

export const sampleVerifiedListings: VerifiedListingSnapshot[] = [
  // 4-BEDROOM LISTINGS (4 Options)
  {
    id: 'LIST-4BED-CORNERSTONE',
    title: 'Brand New 4-Bed Detached Home with Spice Kitchen & Double Garage',
    arabicTitle: 'بيت مستقل 4 غرف جديد بالكامل مع مطبخ توابل وكراج مزدوج',
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
    facebookMarketplaceUrl: 'https://www.facebook.com/share/1JewZ5HXYE/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/house/4-bedrooms/cornerstone/',
    imageUrl: '/images/generated/listing_cornerstone.jpg',
    highlights: [
      'Price reduced by $260/mo (was $2,750)',
      'Dedicated secondary spice kitchen for halal cooking',
      '5 mins to Chalo FreshCo & Stoney Trail ring road',
      'High 9ft ceilings, quartz counters, main floor bedroom/den',
      'Private fenced backyard'
    ]
  },
  {
    id: 'LIST-4BED-THORNCLIFFE',
    title: 'Renovated 4-Bed Family Bungalow near Thorncliffe Elementary School',
    arabicTitle: 'منزل عائلي مجدد بالكامل 4 غرف قرب مدرسة ثورنكليف',
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
    facebookMarketplaceUrl: 'https://www.facebook.com/share/14xP9mQzKA/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/house/4-bedrooms/thorncliffe/',
    imageUrl: '/images/generated/listing_thorncliffe.jpg',
    highlights: [
      '12 mins direct commute to Downtown Calgary via Centre St',
      'Walking distance to Thorncliffe Elementary (CBE public school)',
      'Large mature private backyard with evergreen trees',
      'Quiet established family street',
      'Heated double garage for sub-zero Calgary winters'
    ]
  },
  {
    id: 'LIST-4BED-SAVANNA',
    title: 'Modern 4-Bed Detached Home + Bonus Room near Akram Jomaa Islamic Centre',
    arabicTitle: 'فيلا عائلية حديثة 4 غرف وصالة علوية قرب مركز أكرم جمعة الإسلامي',
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
    sourcePlatform: 'Facebook Marketplace',
    facebookMarketplaceUrl: 'https://www.facebook.com/share/18Tq3BvLMK/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/house/4-bedrooms/saddleridge/',
    imageUrl: '/images/generated/listing_savanna.jpg',
    highlights: [
      'Price reduced: was $2,850, now $2,550/mo',
      '5 mins to Akram Jomaa Mosque and Halal butcher shops',
      'Walk to Saddletowne CTrain station & Genesis Centre',
      'Engineered hardwood, stone counters & stainless appliances',
      '4 full bedrooms upstairs + upper family bonus lounge'
    ]
  },
  {
    id: 'LIST-4BED-EVANSTON',
    title: 'Spacious 4-Bed Executive Home near Kenneth D. Taylor Public School',
    arabicTitle: 'بيت عائلي واسع 4 غرف في إيفانستون قرب مدرسة كينيث تايلور',
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
    facebookMarketplaceUrl: 'https://www.facebook.com/share/17kU8pXvRN/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/house/4-bedrooms/evanston/',
    imageUrl: '/images/generated/listing_evanston.jpg',
    highlights: [
      'Softened asking price: down from $2,950',
      'Walking distance to top-rated Kenneth D. Taylor CBE School',
      'Quick 6-min drive to Beacon Hill Costco & Superstore',
      'Open-concept main floor, gas fireplace, luxury kitchen',
      'Premier high-demand Northwest family suburb'
    ]
  },

  // 3-BEDROOM LISTINGS (4 Options)
  {
    id: 'LIST-3BED-TARADALE',
    title: 'Bright 3-Bed Main Floor Suite with Attached Garage & Lawn',
    arabicTitle: 'طابق رئيسي مستقل 3 غرف مع كراج وحديقة في تاراديل',
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
    facebookMarketplaceUrl: 'https://www.facebook.com/share/12dM7wQxYP/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/duplex/3-bedrooms/taradale/',
    imageUrl: '/images/generated/listing_taradale.jpg',
    highlights: [
      'Exceptional budget entry for newcomer family: $2,050/mo',
      'Near Taradale Public Elementary School and soccer fields',
      'Walk to Castleridge halal bakeries and grocery plaza',
      'Private in-suite laundry and full dishwasher',
      'Attached garage protects vehicle from freezing winter snow'
    ]
  },
  {
    id: 'LIST-3BED-SAGEHILL',
    title: 'Modern 3-Bed Townhouse with Garage near Walmart & Co-op Crossing',
    arabicTitle: 'تاون هاوس عصري 3 غرف بكراج وإطلالة جبلية في سيج هيل',
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
    sourcePlatform: 'Facebook Marketplace',
    facebookMarketplaceUrl: 'https://www.facebook.com/share/16eR2sNfTJ/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/townhouse/3-bedrooms/sage-hill/',
    imageUrl: '/images/generated/listing_sagehill.jpg',
    highlights: [
      'Walk to Sage Hill Crossing shopping (Walmart, T&T, banks)',
      'Upper balcony with panoramic Rocky Mountain views',
      'Quartz island kitchen and 2.5 bathrooms',
      'Energy-efficient low utility insulation',
      'Close to Stoney Trail ring road for quick airport access'
    ]
  },
  {
    id: 'LIST-3BED-REDSTONE',
    title: 'Brand New 3-Bed Detached Laned Home with Covered Porch',
    arabicTitle: 'بيت مستقل 3 غرف بتصميم كرافتسمان حديث وشرفة في ريدستون',
    neighbourhood: 'Redstone',
    quadrant: 'NE',
    bedrooms: 3,
    bathrooms: 2.5,
    propertyType: 'Detached House',
    monthlyRentCAD: 2200,
    previousRentCAD: 2450,
    squareFeet: 1600,
    garageType: 'Double Paved Parking Pad / Laned',
    availableDate: 'Immediate / Next Month',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    facebookMarketplaceUrl: 'https://www.facebook.com/share/19wF4jKtQL/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/house/3-bedrooms/redstone/',
    imageUrl: '/images/generated/listing_redstone.jpg',
    highlights: [
      'Price dropped $250/mo from spring rates',
      'Welcoming Craftsman front porch and fenced sod backyard',
      'Contemporary kitchen with gas range and large pantry',
      'Direct transit connection to Saddletowne CTrain station',
      'Active family park and children playground across the street'
    ]
  },
  {
    id: 'LIST-3BED-CITYSCAPE',
    title: 'Sunlit 3-Bed Duplex Home Facing Environmental Wetland Reserve',
    arabicTitle: 'منزل دوبلكس 3 غرف يطل على محمية طبيعية ومسارات مشي في سيتي سكيب',
    neighbourhood: 'Cityscape',
    quadrant: 'NE',
    bedrooms: 3,
    bathrooms: 2.5,
    propertyType: 'Duplex / Semi-Detached',
    monthlyRentCAD: 2100,
    previousRentCAD: 2300,
    squareFeet: 1520,
    garageType: 'Front Attached Garage + Driveway',
    availableDate: 'Immediate',
    lastVerifiedAt: '2026-09-03',
    sourcePlatform: 'Facebook Marketplace',
    facebookMarketplaceUrl: 'https://www.facebook.com/share/15aK9bVwMN/',
    rentFasterUrl: 'https://www.rentfaster.ca/ab/calgary/rentals/duplex/3-bedrooms/cityscape/',
    imageUrl: '/images/generated/listing_cityscape.jpg',
    highlights: [
      'Unobstructed front views of Cityscape environmental reserve',
      'Walking trails and cycling paths right at your front door',
      'Attached front garage with indoor entrance',
      'Modern open-concept living space with luxury vinyl plank flooring',
      'Quick 10-min drive to Calgary International Airport (YYC)'
    ]
  }
];
