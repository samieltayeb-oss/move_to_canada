export interface MunicipalUtilityRate {
  service: string;
  arabicService: string;
  fixedMonthlyCAD: number;
  volumetricRate: string;
  typicalMonthlyCAD: number;
  notes: string;
  arabicNotes: string;
}

export const calgaryMunicipalUtilityRates: MunicipalUtilityRate[] = [
  {
    service: 'Treated Drinking Water',
    arabicService: 'مياه الشرب المعالجة',
    fixedMonthlyCAD: 13.83,
    volumetricRate: '$1.7409 per m³',
    typicalMonthlyCAD: 46.91,
    notes: 'Calculated on standard family of 5 consumption (~19 m³ per month).',
    arabicNotes: 'محسوبة على استهلاك عائلة من 5 أفراد (حوالي 19 متراً مكعباً شهرياً).'
  },
  {
    service: 'Wastewater & Sewerage',
    arabicService: 'الصرف الصحي ومعالجة المياه',
    fixedMonthlyCAD: 23.45,
    volumetricRate: '$1.9050 per m³ (billed on 88% of water)',
    typicalMonthlyCAD: 55.30,
    notes: 'Billed on 88% of water consumed returning to municipal wastewater plants.',
    arabicNotes: 'تُحسب على أساس 88% من كمية المياه المستخدمة العائدة لشبكة الصرف.'
  },
  {
    service: 'Stormwater Drainage',
    arabicService: 'تصريف مياه الأمطار والسيول',
    fixedMonthlyCAD: 17.00,
    volumetricRate: 'Flat rate per residential parcel',
    typicalMonthlyCAD: 17.00,
    notes: 'Maintains citywide stormwater sewers, retention ponds, and snowmelt drainage.',
    arabicNotes: 'رسوم ثابتة لصيانة شبكات تصريف مياه الأمطار وذوبان الثلوج.'
  },
  {
    service: 'Waste & Recycling Carts',
    arabicService: 'حاويات النفايات وإعادة التدوير',
    fixedMonthlyCAD: 20.51,
    volumetricRate: 'Flat rate for 3 municipal carts',
    typicalMonthlyCAD: 20.51,
    notes: 'Green cart (compost/food scraps $10.63) + Black cart (landfill garbage) + Blue cart (recycling).',
    arabicNotes: 'تشمل 3 حاويات: الخضراء للمخلفات العضوية، والسوداء للنفايات العامة، والزرقاء لإعادة التدوير.'
  }
];

export const MUNICIPAL_BASELINE_TOTAL_CAD = 139.72; // Fixed municipal base

export interface SeasonalUtilityProfile {
  season: 'Summer / Shoulder (May – Sept)' | 'Deep Winter (Nov – March)';
  arabicSeason: string;
  electricityCAD: string;
  naturalGasCAD: string;
  municipalServicesCAD: string;
  adminAndRidersCAD: string;
  totalMonthlyRangeCAD: string;
  driverExplanation: string;
  arabicDriverExplanation: string;
}

export const seasonalUtilityProfiles: SeasonalUtilityProfile[] = [
  {
    season: 'Summer / Shoulder (May – Sept)',
    arabicSeason: 'الصيف ومواسم الاعتدال (مايو – سبتمبر)',
    electricityCAD: '$130 – $180',
    naturalGasCAD: '$65 – $95 (Hot water only)',
    municipalServicesCAD: '$130 – $155 (Lawn watering impact)',
    adminAndRidersCAD: '$15 – $25',
    totalMonthlyRangeCAD: '$340 – $455 / month',
    driverExplanation: 'Heating furnaces are largely turned off; gas consumption is minimal (3-5 GJ/mo for hot water). Electricity covers lighting, refrigerators, and cooling.',
    arabicDriverExplanation: 'أجهزة التدفئة متوقفة؛ استهلاك الغاز محدود جداً (3-5 جيجاجول فقط لتسخين المياه)، والكهرباء للاستخدام المنزلي والتكييف.'
  },
  {
    season: 'Deep Winter (Nov – March)',
    arabicSeason: 'ذروة الشتاء والبرد القارس (نوفمبر – مارس)',
    electricityCAD: '$160 – $220',
    naturalGasCAD: '$220 – $310 (High furnace heating)',
    municipalServicesCAD: '$125 – $145',
    adminAndRidersCAD: '$15 – $25',
    totalMonthlyRangeCAD: '$520 – $700 / month',
    driverExplanation: 'Central gas furnaces run continuously during sub-zero snaps (-15°C to -30°C), consuming 22-35 GJ/mo. Furnace fans raise electricity baseload.',
    arabicDriverExplanation: 'تعمل أفران الغاز المركزية باستمرار في درجات الحرارة المتدنية (-15 إلى -30 مئوية)، مما يرفع استهلاك الغاز إلى 22-35 جيجاجول شهرياً.'
  }
];
