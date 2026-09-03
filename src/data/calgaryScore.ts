export interface ScoreDimension {
  id: string;
  name: string;
  arabicName: string;
  category: 'Finance' | 'Community' | 'Living' | 'Infrastructure';
  defaultWeight: number; // percentage (sums to 100)
  score: number; // 0 to 100 normalized
  sourceId: string;
  benchmarkValue: string;
  rationale: string;
  arabicRationale: string;
  isStrength: boolean;
}

export const calgaryFitDimensions: ScoreDimension[] = [
  {
    id: 'housing_value',
    name: 'Housing Value & Space',
    arabicName: 'قيمة ومساحة السكن',
    category: 'Finance',
    defaultWeight: 15,
    score: 86,
    sourceId: 'SRC-HOU-002',
    benchmarkValue: '$2,326 3-bed / $2,950 4-bed detached',
    rationale: 'Calgary delivers 3- to 4-bedroom detached family homes with private yards at roughly half the cost of Toronto ($3,415) and Vancouver ($3,995).',
    arabicRationale: 'توفر كالغاري منازل عائلية مستقلة من 3 إلى 4 غرف نوم بحدائق خاصة بنصف تكلفة تورونتو وفانكوفر تقريباً.',
    isStrength: true
  },
  {
    id: 'employment_opportunity',
    name: 'Employment & Finance Opportunity',
    arabicName: 'فرص العمل والقطاع المالي',
    category: 'Finance',
    defaultWeight: 12,
    score: 82,
    sourceId: 'SRC-GOV-010',
    benchmarkValue: '$116,530 Median Family Income',
    rationale: 'Highest concentration of corporate head offices per capita in Canada, strong buy-side asset managers (AIMCo, Mawer), and high median family earning power.',
    arabicRationale: 'أعلى تركيز للمقرات الرئيسية للشركات في كندا، وشركات إدارة الأصول الكبرى، وقوة دخل عائلية مرتفعة.',
    isStrength: true
  },
  {
    id: 'tax_advantage',
    name: 'Alberta Tax Advantage (0% PST)',
    arabicName: 'الميزة الضريبية (0% ضريبة مبيعات إقليمية)',
    category: 'Finance',
    defaultWeight: 10,
    score: 95,
    sourceId: 'SRC-GOV-006',
    benchmarkValue: '0% PST (Only 5% Federal GST)',
    rationale: 'Alberta is Canada’s only province with 0% PST, saving 5% to 10% on every purchase, vehicle, and service, combined with Canada’s highest basic personal tax exemption ($22,769).',
    arabicRationale: 'ألبرتا هي المقاطعة الوحيدة بدون ضريبة مبيعات إقليمية (فقط 5% ضريبة فدرالية)، مع أعلى إعفاء ضريبي شخصي في كندا (22,769 دولار).',
    isStrength: true
  },
  {
    id: 'family_environment',
    name: 'Family Environment & Parks',
    arabicName: 'البيئة العائلية والحدائق',
    category: 'Living',
    defaultWeight: 9,
    score: 92,
    sourceId: 'SRC-MED-001',
    benchmarkValue: '1,000+ km pathways, massive YMCAs',
    rationale: 'World-renowned suburban family master-planned communities, North America’s largest pathway network, and premier recreation facilities like the 330,000 sq ft Seton YMCA and Genesis Centre.',
    arabicRationale: 'أحياء سكنية مصممة خصيصاً للعائلات، وأكبر شبكة مسارات مشي وحدائق في أمريكا الشمالية ومراكز ترفيه ضخمة كمركز جينيسيس وواي إم سي إيه.',
    isStrength: true
  },
  {
    id: 'schools',
    name: 'Schools & Education System',
    arabicName: 'المدارس والتعليم',
    category: 'Living',
    defaultWeight: 9,
    score: 84,
    sourceId: 'SRC-EDU-001',
    benchmarkValue: 'CBE Welcome Centre + K-12 Islamic Alternative',
    rationale: 'Centralized newcomer ELL support via the CBE Welcome Centre, top-tier STEM and academic standards, and public Islamic alternative campuses (CIS Akram Jomaa & OBK).',
    arabicRationale: 'دعم مركزي للطلاب الجدد، ومستويات أكاديمية متقدمة، ومدارس إسلامية بديلة معتمدة ممولة حكومياً.',
    isStrength: true
  },
  {
    id: 'safety',
    name: 'Safety & Low Violent Crime',
    arabicName: 'الأمان وانخفاض الجريمة',
    category: 'Living',
    defaultWeight: 8,
    score: 85,
    sourceId: 'SRC-GOV-009',
    benchmarkValue: 'StatCan Crime Severity Index ~78.5',
    rationale: 'High level of safety across suburban family quadrants (NW, SW, SE). Low violent crime rates make neighborhoods exceptionally secure for children walking and playing outdoors.',
    arabicRationale: 'مستوى أمان مرتفع جداً في الأحياء العائلية، مما يمنح الأطفال حرية التنقل واللعب بأمان.',
    isStrength: true
  },
  {
    id: 'muslim_community',
    name: 'Muslim Community & Halal Infrastructure',
    arabicName: 'المجتمع المسلم وتوفر الحلال',
    category: 'Community',
    defaultWeight: 10,
    score: 88,
    sourceId: 'SRC-ISL-001',
    benchmarkValue: '105,000+ Muslims (6.9%), 15+ Mosques',
    rationale: 'Over 105,000 Muslims, anchor institutions like Akram Jomaa Islamic Centre, full-time Islamic schools, 100+ halal dining spots, and Costco/Superstore halal supply lines.',
    arabicRationale: 'أكثر من 105,000 مسلم، ومراكز كبرى كمركز أكرم جمعة، ومدارس إسلامية، ومئات المطاعم والملاحم الحلال المعتمدة.',
    isStrength: true
  },
  {
    id: 'newcomer_support',
    name: 'Newcomer Settlement Support',
    arabicName: 'دعم القادمين الجدد والاندماج',
    category: 'Community',
    defaultWeight: 6,
    score: 88,
    sourceId: 'SRC-GOV-001',
    benchmarkValue: '0-day AHCIP wait + Immigrant Services Calgary',
    rationale: 'Immediate healthcare coverage upon arrival without waiting periods, and comprehensive free settlement support from Centre for Newcomers and ISC.',
    arabicRationale: 'تغطية صحية فورية من اليوم الأول لوصول المقيمين الدائمين دون فترة انتظار، ومؤسسات استقرار متخصصة مجانية.',
    isStrength: true
  },
  {
    id: 'transportation',
    name: 'Transportation & Commute Times',
    arabicName: 'المواصلات وسهولة التنقل',
    category: 'Infrastructure',
    defaultWeight: 5,
    score: 74,
    sourceId: 'SRC-MUN-001',
    benchmarkValue: '26.5 min avg commute, Free Transit <12',
    rationale: 'All children 12 and under ride 100% free permanently; CTrain connects suburbs to Downtown. However, outer suburbs strongly require a family vehicle in winter.',
    arabicRationale: 'الأطفال تحت 12 سنة يركبون المواصلات مجاناً بالكامل؛ قطار كالغاري يربط الضواحي بوسط المدينة، لكن السيارة ضرورية شتاءً في الضواحي الخارجية.',
    isStrength: false
  },
  {
    id: 'healthcare_access',
    name: 'Healthcare Access & Doctors',
    arabicName: 'الرعاية الصحية وتوفر الأطباء',
    category: 'Infrastructure',
    defaultWeight: 5,
    score: 68,
    sourceId: 'SRC-GOV-001',
    benchmarkValue: 'AHCIP universal coverage; waitlists for family GPs',
    rationale: 'Comprehensive emergency and hospital coverage, but like most of Canada, securing an accepting family doctor requires persistence via Primary Care Networks.',
    arabicRationale: 'تغطية طوارئ ومستشفيات ممتازة، ولكن البحث عن طبيب عائلة يقبل مرضى جدد يتطلب وقتاً ومتابعة عبر شبكات الرعاية الأولية.',
    isStrength: false
  },
  {
    id: 'outdoor_lifestyle',
    name: 'Outdoor Lifestyle & Rockies Access',
    arabicName: 'الأنشطة الخارجية وقرب جبال روكي',
    category: 'Living',
    defaultWeight: 4,
    score: 96,
    sourceId: 'SRC-MED-001',
    benchmarkValue: '50 mins to Canmore / Banff National Park',
    rationale: 'Unrivaled gateway to the Canadian Rocky Mountains. Weekend family hiking, alpine lakes, skiing, and camping within 50 to 75 minutes of your front door.',
    arabicRationale: 'بوابة جبال روكي الشهيرة، حيث تبعد كانمور وبانف 50 إلى 70 دقيقة فقط لرحلات عائلية استثنائية.',
    isStrength: true
  },
  {
    id: 'airport_connectivity',
    name: 'Airport Connectivity to Saudi Arabia / GCC',
    arabicName: 'المطار والرحلات إلى الخليج والسعودية',
    category: 'Infrastructure',
    defaultWeight: 3,
    score: 72,
    sourceId: 'SRC-GOV-008',
    benchmarkValue: 'YYC 2nd busiest hub in Western Canada',
    rationale: 'Calgary International Airport (YYC) connects via single 1-stop European/US gateways (London Heathrow, Frankfurt, Paris, Amsterdam) to Riyadh (RUH).',
    arabicRationale: 'مطار كالغاري الدولي يوفر رحلات ترانزيت محطة واحدة إلى الرياض عبر لندن وفرانكفورت وباريس وأمستردام.',
    isStrength: false
  },
  {
    id: 'weather_adaptation',
    name: 'Weather Adaptation from Riyadh',
    arabicName: 'التأقلم المناخي (مقارنة بالرياض)',
    category: 'Living',
    defaultWeight: 4,
    score: 64,
    sourceId: 'SRC-MED-001',
    benchmarkValue: '2,400+ hrs sunshine + Chinooks vs. -25°C cold snaps',
    rationale: 'Canada’s sunniest city with warm Chinooks that melt winter snow; however, adjusting from Riyadh’s desert heat to occasional -25°C cold snaps requires winter gear discipline.',
    arabicRationale: 'أكثر مدن كندا إشراقاً وتدفئها رياح الشينوك، لكن الانتقال من حرارة الرياض إلى برودة الشتاء القارس يتطلب التزاماً بطبقات الملابس وإطارات الشتاء.',
    isStrength: false
  }
];

export function calculateCalgaryFitScore(customWeights?: Record<string, number>): number {
  let totalScore = 0;
  let totalWeight = 0;

  for (const dim of calgaryFitDimensions) {
    const weight = customWeights && customWeights[dim.id] !== undefined 
      ? customWeights[dim.id] 
      : dim.defaultWeight;
    totalScore += (dim.score * weight);
    totalWeight += weight;
  }

  return totalWeight > 0 ? Math.round((totalScore / totalWeight) * 10) / 10 : 83.5;
}
