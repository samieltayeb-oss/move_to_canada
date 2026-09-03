export interface TransitFareCategory {
  category: string;
  arabicCategory: string;
  singleTicketCAD: number;
  monthlyPassCAD: number;
  conditions: string;
  arabicConditions: string;
}

export const calgaryTransitFares2026: TransitFareCategory[] = [
  {
    category: 'Adult (18–64)',
    arabicCategory: 'البالغين (18 - 64 سنة)',
    singleTicketCAD: 4.00,
    monthlyPassCAD: 126.00,
    conditions: 'Valid across CTrain and connecting feeder buses for 90 minutes. 10-ticket booklet: $40.00.',
    arabicConditions: 'صالحة لجميع قطارات وباصات كالغاري لمدة 90 دقيقة. دفتر 10 تذاكر بـ 40 دولاراً.'
  },
  {
    category: 'Youth (13–17)',
    arabicCategory: 'الشباب واليافعين (13 - 17 سنة)',
    singleTicketCAD: 2.60,
    monthlyPassCAD: 92.00,
    conditions: 'Youth 10-ticket booklet: $26.00. Day pass: $8.75.',
    arabicConditions: 'دفتر 10 تذاكر للشباب بـ 26 دولاراً. تذكرة يوم كامل بـ 8.75 دولار.'
  },
  {
    category: 'Children (12 and under)',
    arabicCategory: 'الأطفال (12 سنة وما دون)',
    singleTicketCAD: 0.00,
    monthlyPassCAD: 0.00,
    conditions: '100% FREE on all Calgary Transit services permanently since July 1, 2023. No companion ticket or pass needed.',
    arabicConditions: 'مجاناً 100% في جميع حافلات وقطارات كالغاري بشكل دائم منذ 2023، دون الحاجة لشراء أي تذكرة.'
  },
  {
    category: 'Fair Entry Low-Income Band A',
    arabicCategory: 'دعم ذوي الدخل المحدود (الفئة أ)',
    singleTicketCAD: 0.00,
    monthlyPassCAD: 6.30,
    conditions: 'Subsidized monthly pass for households earning under 50% of the Low Income Cut-Off (LICO).',
    arabicConditions: 'اشتراك شهري مخفض بقيمة 6.30 دولار للعائلات التي يقل دخلها عن 50% من خط الفقر.'
  }
];

export const ctrainNetworkDetails = {
  freeFareZone: 'Downtown 7th Avenue Free Fare Zone: Riding between 3rd Street East and 11th Street SW is completely free with no ticket required.',
  arabicFreeFareZone: 'منطقة الركوب المجاني في وسط المدينة: التنقل على طول شارع 7 بين شارع 3 شرق وشارع 11 غرب مجاني بالكامل بدون تذكرة.',
  redLine: 'Route 201: Connects Northwest (Tuscany / Crowfoot) through Downtown to South Calgary (Somerset-Bridlewood).',
  blueLine: 'Route 202: Connects Northeast (Saddletowne / Airport link) through Downtown to Southwest (69th Street).',
  greenLineStatus: 'Green Line LRT (September 2026): Southeast 16km surface segment under active construction toward 2031 completion. Council evaluating revised downtown elevated alignment options.'
};

export function calculateFamilyMonthlyTransitCost(numAdults: number, childrenAges: number[]): {
  monthlyTotalCAD: number;
  arabicBreakdown: string;
  englishBreakdown: string;
} {
  const adultTotal = numAdults * 126;
  let youthTotal = 0;
  let freeKidsCount = 0;

  for (const age of childrenAges) {
    if (age <= 12) {
      freeKidsCount++;
    } else if (age <= 17) {
      youthTotal += 92;
    }
  }

  const total = adultTotal + youthTotal;

  return {
    monthlyTotalCAD: total,
    englishBreakdown: `${numAdults} Adults ($${adultTotal}) + ${freeKidsCount} Children under 12 ($0 FREE) + ${childrenAges.filter(a => a > 12 && a <= 17).length} Youth ($${youthTotal}) = $${total}/month`,
    arabicBreakdown: `${numAdults} بالغين (${adultTotal} دولار) + ${freeKidsCount} أطفال دون 12 سنة (مجاناً 0$) = ${total} دولار/شهرياً`
  };
}
