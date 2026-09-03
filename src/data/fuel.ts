export interface FuelPriceBenchmark {
  fuelType: 'Regular Unleaded (87)' | 'Premium Unleaded (91/93)' | 'Diesel';
  currentPricePerLitreCAD: number;
  statCanTableId: string;
  geography: string;
  referenceMonth: string;
  oneMonthTrendCents: number;
  threeMonthTrendCents: number;
  twelveMonthTrendCents: number;
  costcoPumpPricePerLitreCAD: number; // typically 6-10 cents cheaper
}

export const calgaryFuelBenchmarks: FuelPriceBenchmark[] = [
  {
    fuelType: 'Regular Unleaded (87)',
    currentPricePerLitreCAD: 1.449,
    statCanTableId: 'Statistics Canada Table 18-10-0001-01',
    geography: 'Calgary, Alberta',
    referenceMonth: 'September 2026',
    oneMonthTrendCents: -2.1,
    threeMonthTrendCents: +4.5,
    twelveMonthTrendCents: +6.2,
    costcoPumpPricePerLitreCAD: 1.369 // ~8¢ discount at Calgary Costco gas bars
  },
  {
    fuelType: 'Premium Unleaded (91/93)',
    currentPricePerLitreCAD: 1.699,
    statCanTableId: 'Statistics Canada Table 18-10-0001-01',
    geography: 'Calgary, Alberta',
    referenceMonth: 'September 2026',
    oneMonthTrendCents: -1.5,
    threeMonthTrendCents: +5.0,
    twelveMonthTrendCents: +7.8,
    costcoPumpPricePerLitreCAD: 1.589
  },
  {
    fuelType: 'Diesel',
    currentPricePerLitreCAD: 1.549,
    statCanTableId: 'Statistics Canada Table 18-10-0001-01',
    geography: 'Calgary, Alberta',
    referenceMonth: 'September 2026',
    oneMonthTrendCents: -3.0,
    threeMonthTrendCents: +3.2,
    twelveMonthTrendCents: +4.0,
    costcoPumpPricePerLitreCAD: 1.479
  }
];

export interface FamilyVehicleFuelModel {
  id: string;
  vehicleName: string;
  powertrain: 'V6 Gas Engine' | 'Hybrid Electric (HEV)' | 'Boxer Gas Engine' | 'Hybrid AWD Minivan';
  fuelEconomyLPer100Km: number; // combined city/highway rating Natural Resources Canada (NRCan)
  recommendedFuelType: 'Regular Unleaded (87)' | 'Premium Unleaded (91/93)';
  annualLitresAt20kKm: number;
  annualFuelCostAt145CentsCAD: number;
  notes: string;
}

export const familyVehicleFuelProfiles: FamilyVehicleFuelModel[] = [
  {
    id: 'veh-highlander-gas',
    vehicleName: 'Toyota Highlander Gas AWD (2.4L Turbo / V6)',
    powertrain: 'V6 Gas Engine',
    fuelEconomyLPer100Km: 10.5,
    recommendedFuelType: 'Regular Unleaded (87)',
    annualLitresAt20kKm: 2100,
    annualFuelCostAt145CentsCAD: 3042.90,
    notes: 'Standard 3-row family SUV. Reliable mechanical AWD; higher fuel consumption in winter cold snaps.'
  },
  {
    id: 'veh-highlander-hybrid',
    vehicleName: 'Toyota Highlander Hybrid AWD',
    powertrain: 'Hybrid Electric (HEV)',
    fuelEconomyLPer100Km: 6.7,
    recommendedFuelType: 'Regular Unleaded (87)',
    annualLitresAt20kKm: 1340,
    annualFuelCostAt145CentsCAD: 1941.66,
    notes: 'Electric motor assist achieves ~36% fuel reduction. Exceptional suburban efficiency; higher purchase price.'
  },
  {
    id: 'veh-sienna-hybrid',
    vehicleName: 'Toyota Sienna AWD Hybrid',
    powertrain: 'Hybrid AWD Minivan',
    fuelEconomyLPer100Km: 6.6,
    recommendedFuelType: 'Regular Unleaded (87)',
    annualLitresAt20kKm: 1320,
    annualFuelCostAt145CentsCAD: 1912.68,
    notes: 'Highest interior utility for 3 children. Outstanding fuel efficiency for its interior capacity.'
  },
  {
    id: 'veh-subaru-outback',
    vehicleName: 'Subaru Outback AWD (2.5L)',
    powertrain: 'Boxer Gas Engine',
    fuelEconomyLPer100Km: 8.5,
    recommendedFuelType: 'Regular Unleaded (87)',
    annualLitresAt20kKm: 1700,
    annualFuelCostAt145CentsCAD: 2463.30,
    notes: 'Legendary symmetrical AWD in Calgary snow; mid-tier fuel consumption.'
  }
];

export interface CommuteQuadrantDetails {
  quadrantName: string;
  neighbourhoodExample: string;
  oneWayKmToDowntown: number;
  roundTripKmToDowntown: number;
  avgDriveMinutesOneWay: number;
  monthlyKmCommute20Days: number;
  monthlyFuelCostGasSUV: number;
  monthlyFuelCostHybridSUV: number;
  transitAlternativeCtrainTimeMinutes: number;
  monthlyCtrainAdultPassCAD: number;
}

export const commuteQuadrantMatrix: CommuteQuadrantDetails[] = [
  {
    quadrantName: 'Northeast (NE)',
    neighbourhoodExample: 'Saddleridge / Savanna',
    oneWayKmToDowntown: 22,
    roundTripKmToDowntown: 44,
    avgDriveMinutesOneWay: 28,
    monthlyKmCommute20Days: 880,
    monthlyFuelCostGasSUV: 133.89,
    monthlyFuelCostHybridSUV: 85.43,
    transitAlternativeCtrainTimeMinutes: 38, // Saddletowne to 8th St SW
    monthlyCtrainAdultPassCAD: 126
  },
  {
    quadrantName: 'Northwest (NW)',
    neighbourhoodExample: 'Evanston / Carrington',
    oneWayKmToDowntown: 20,
    roundTripKmToDowntown: 40,
    avgDriveMinutesOneWay: 26,
    monthlyKmCommute20Days: 800,
    monthlyFuelCostGasSUV: 121.72,
    monthlyFuelCostHybridSUV: 77.67,
    transitAlternativeCtrainTimeMinutes: 44, // Bus to Tuscany/Crowfoot CTrain
    monthlyCtrainAdultPassCAD: 126
  },
  {
    quadrantName: 'Southwest (SW)',
    neighbourhoodExample: 'West Springs / Aspen Woods',
    oneWayKmToDowntown: 14,
    roundTripKmToDowntown: 28,
    avgDriveMinutesOneWay: 22,
    monthlyKmCommute20Days: 560,
    monthlyFuelCostGasSUV: 85.20,
    monthlyFuelCostHybridSUV: 54.37,
    transitAlternativeCtrainTimeMinutes: 30, // 69th St Station CTrain
    monthlyCtrainAdultPassCAD: 126
  },
  {
    quadrantName: 'Southeast (SE)',
    neighbourhoodExample: 'Mahogany / Auburn Bay',
    oneWayKmToDowntown: 28,
    roundTripKmToDowntown: 56,
    avgDriveMinutesOneWay: 35,
    monthlyKmCommute20Days: 1120,
    monthlyFuelCostGasSUV: 170.40,
    monthlyFuelCostHybridSUV: 108.73,
    transitAlternativeCtrainTimeMinutes: 52, // Max Teal bus / Somerset CTrain
    monthlyCtrainAdultPassCAD: 126
  }
];

export interface VehicleFuelCalculatorInputs {
  fuelEconomyLPer100Km: number;
  commuteKmPerDay: number;
  daysCommutedPerMonth: number;
  familyErrandsKmPerDay: number; // school dropoff, groceries, mosque
  weekendTripsKmPerMonth: number; // Rockies, visits, recreation
  fuelPricePerLitreCAD: number;
}

export interface VehicleFuelCalculatorOutput {
  monthlyTotalKm: number;
  monthlyLitresUsed: number;
  dailyFuelCostCAD: number;
  weeklyFuelCostCAD: number;
  monthlyFuelCostCAD: number;
  annualFuelCostCAD: number;
}

export function calculateVehicleFuelExpenditure(inputs: VehicleFuelCalculatorInputs): VehicleFuelCalculatorOutput {
  const commuteMonthlyKm = inputs.commuteKmPerDay * inputs.daysCommutedPerMonth;
  const errandsMonthlyKm = inputs.familyErrandsKmPerDay * 30;
  const totalMonthlyKm = commuteMonthlyKm + errandsMonthlyKm + inputs.weekendTripsKmPerMonth;

  const litresUsed = (totalMonthlyKm * inputs.fuelEconomyLPer100Km) / 100;
  const monthlyCost = litresUsed * inputs.fuelPricePerLitreCAD;

  return {
    monthlyTotalKm: Math.round(totalMonthlyKm),
    monthlyLitresUsed: Math.round(litresUsed * 10) / 10,
    dailyFuelCostCAD: Math.round((monthlyCost / 30) * 100) / 100,
    weeklyFuelCostCAD: Math.round((monthlyCost / 4.33) * 100) / 100,
    monthlyFuelCostCAD: Math.round(monthlyCost * 100) / 100,
    annualFuelCostCAD: Math.round(monthlyCost * 12)
  };
}
