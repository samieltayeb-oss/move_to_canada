export interface Neighbourhood {
  id: string;
  name: string;
  arabicName: string;
  quadrant: 'Northeast (NE)' | 'Northwest (NW)' | 'Southwest (SW)' | 'Southeast (SE)' | 'Inner NE / Centre St';
  vintage: 'Newer Suburb (2015+)' | 'Established Modern (2000-2015)' | 'Mature Enclave';
  threeBedRentCAD: number;
  fourBedDetachedRentCAD: number;
  commuteDowntownMinutes: number;
  commuteTransitMinutes: number;
  nearestCTrainStation: string;
  distanceToAirportMins: number;
  safetyRating: 'Very High' | 'High' | 'Above Average';
  muslimFamilyScore: number; // 0-100
  nearestMosqueName: string;
  distanceToMosqueMins: number;
  nearestIslamicSchool: string;
  distanceToIslamicSchoolMins: number;
  halalGroceryAccess: 'Immediate (<5 mins)' | 'Close (5-10 mins)' | 'Moderate (10-15 mins)';
  keyTags: string[];
  pros: string[];
  cons: string[];
  arabicPros: string[];
  arabicCons: string[];
  designatedPublicElementary: string;
  schoolCatchmentWarning: string;
}

export const calgaryNeighbourhoods: Neighbourhood[] = [
  {
    id: 'cornerstone',
    name: 'Cornerstone (NE Calgary)',
    arabicName: 'حي كورنرستون (شمال شرق كالغاري)',
    quadrant: 'Northeast (NE)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2150,
    fourBedDetachedRentCAD: 2490,
    commuteDowntownMinutes: 26,
    commuteTransitMinutes: 42,
    nearestCTrainStation: 'Saddletowne Station (via feeder bus / future LRT route)',
    distanceToAirportMins: 9,
    safetyRating: 'Very High',
    muslimFamilyScore: 97,
    nearestMosqueName: 'Akram Jomaa & Savanna Musalla / Cornerstone Musalla',
    distanceToMosqueMins: 6,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa)',
    distanceToIslamicSchoolMins: 8,
    halalGroceryAccess: 'Immediate (<5 mins)',
    keyTags: ['Top Pick for Muslim Families', 'Modern Master-Planned', 'Spice Kitchens', 'Recent Price Drop', 'Parks & Wetlands'],
    pros: [
      'Calgary’s premier modern master-planned NE community with brand-new 2020+ houses',
      'Recent rental price drop: 4-bed detached homes now rent for $2,450–$2,550 (down from $2,850+)',
      'Most homes feature double garages, high 9ft ceilings, and builder-installed spice/prep kitchens',
      'Large protected wetland park system, walking paths, and new commercial plazas (Chalo FreshCo)',
      'Strong, growing Muslim and South Asian family community with exceptional neighbor support'
    ],
    cons: [
      'Ongoing construction in newer sectors as community completes',
      'Public schools currently require student busing to neighbouring established schools while community schools are built',
      'Requires vehicle for fastest commuting until planned LRT extension operates'
    ],
    arabicPros: [
      'أحدث وأرقى المخططات العائلية الحديثة في الشمال الشرقي (بني بعد 2018)',
      'انخفاض ملحوظ في الإيجار: البيوت المستقلة 4 غرف أصبحت تؤجر بـ 2,450 إلى 2,550 دولار',
      'معظم المنازل مجهزة بكراج مزدوج ومطبخ توابل (Spice Kitchen) إضافي معزول',
      'شبكة حدائق ومحميات طبيعية وملاعب أطفال حديثة وسوبرماركت شالو فريشكو',
      'بيئة عائلية محافظة ومريحة جداً للجالية المسلمة'
    ],
    arabicCons: [
      'ما زالت بعض المراحل قيد البناء والتطوير',
      'المدارس الابتدائية داخل الحي قيد الإنشاء ويتم نقل الطلاب مؤقتاً بالحافلات لأحياء مجاورة',
      'الاعتماد على السيارة حالياً أفضل من الحافلات'
    ],
    designatedPublicElementary: 'Designated CBE Area School (Busing provided by CBE)',
    schoolCatchmentWarning: 'New master-planned community. Verify with CBE Welcome Centre for current year catchment designated school and busing route.'
  },
  {
    id: 'saddleridge',
    name: 'Saddleridge & Savanna',
    arabicName: 'سادلريدج وسافانا',
    quadrant: 'Northeast (NE)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 2050,
    fourBedDetachedRentCAD: 2450,
    commuteDowntownMinutes: 28,
    commuteTransitMinutes: 38,
    nearestCTrainStation: 'Saddletowne Station (Blue Line)',
    distanceToAirportMins: 12,
    safetyRating: 'High',
    muslimFamilyScore: 98,
    nearestMosqueName: 'Akram Jomaa Islamic Centre & Saddletowne Musalla',
    distanceToMosqueMins: 5,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa Campus)',
    distanceToIslamicSchoolMins: 7,
    halalGroceryAccess: 'Immediate (<5 mins)',
    keyTags: ['Heart of Muslim Amenities', 'Saddletowne CTrain', 'Genesis Centre', 'Affordable 4-Bed'],
    pros: [
      'Unmatched Islamic community infrastructure and visible normalization of Muslim family life',
      'Walking distance to Saddletowne CTrain station and Genesis Centre YMCA recreation complex',
      'Softened 2026 rent: 4-bedroom detached homes with double garages available from $2,450/mo',
      'Dozens of halal meat shops, bakeries, and international grocery markets within 5 minutes'
    ],
    cons: [
      'High suburban density and street parking volume',
      'Overcrowding in local elementary schools with lottery/overflow potential in high-peak years',
      'Airplane flight path overflight noise during south-facing runway approaches'
    ],
    arabicPros: [
      'بيئة إسلامية متكاملة ومراكز ونشاطات تناسب العائلات المسلمة تماماً',
      'قريب جداً من محطة قطار سادلتاون ومجمع جينيسيس الرياضي والمكتبة العامة',
      'انخفاض أسعار الإيجار للمنازل المستقلة من 4 غرف لتبدأ من 2,450 دولار مع كراج مزدوج',
      'عشرات الملاحم والمخابز والمطاعم الحلال على بعد دقائق'
    ],
    arabicCons: [
      'كثافة سكانية مرتفعة نسبياً وازدحام في مواقف الشوارع',
      'ضغط على المدارس الابتدائية المحلية مع احتمالية قرعة التحويل',
      'صوت تحليق بعض الطائرات لقرب المطار'
    ],
    designatedPublicElementary: 'Saddle Ridge School (Grades K-4) / Peter Lougheed (Grades 5-9)',
    schoolCatchmentWarning: 'High demand area. Always verify with CBE Welcome Centre whether your exact address is subject to lottery or assigned overflow.'
  },
  {
    id: 'thorncliffe',
    name: 'Thorncliffe & Greenview (Inner NE)',
    arabicName: 'ثورنكليف وغرين فيو (شمال شرق داخلي / شارع سنتر)',
    quadrant: 'Inner NE / Centre St',
    vintage: 'Mature Enclave',
    threeBedRentCAD: 2100,
    fourBedDetachedRentCAD: 2390,
    commuteDowntownMinutes: 14,
    commuteTransitMinutes: 22,
    nearestCTrainStation: 'Centre Street Express BRT (Future Green Line)',
    distanceToAirportMins: 14,
    safetyRating: 'Very High',
    muslimFamilyScore: 82,
    nearestMosqueName: 'Downtown Mosque / Calgary Islamic Centre SW',
    distanceToMosqueMins: 10,
    nearestIslamicSchool: 'Calgary Islamic School (Omar Bin Al-Khattab / AKJ)',
    distanceToIslamicSchoolMins: 14,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Fast Downtown Commute', 'Mature Trees', 'Great Public Schools', 'Large Lots', 'Budget Value'],
    pros: [
      'Rapid 12–15 minute commute to Downtown Calgary corporate offices via Centre Street or Deerfoot Trail',
      'Excellent established CBE public schools (Thorncliffe School, Colonel Macleod, Diefenbaker High)',
      'Large private lots with mature spruce trees and quiet residential cul-de-sacs',
      'Very affordable detached home rents ($2,390–$2,500/mo) with massive private yards for children',
      'Immediate access to Nose Hill Park natural reserve and Thornhill Aquatic & Recreation Centre'
    ],
    cons: [
      'Older 1960s–1980s bungalow architecture with retro basement layouts',
      'Further away from Northeast halal supercentres (requires 10-12 min drive to Castleridge/Savanna)',
      'Fewer visible Muslim newcomer families compared to Saddleridge/Cornerstone'
    ],
    arabicPros: [
      'مشوار دوام سريع جداً (12-15 دقيقة فقط) إلى داون تاون كالغاري',
      'مدارس حكومية عامة ممتازة ومستقرة وغير مزدحمة (مدرسة ثورنكليف CBE)',
      'أراضي واسعة بحدائق خاصة وأشجار صنوبر كبيرة وشوارع هادئة جداً',
      'إيجارات اقتصادية ممتازة للبيوت المستقلة من 4 غرف (حوالي 2,390 دولار)',
      'قريب جداً من منتزه نوز هيل بارك الطبيعي الضخم ومسبح ثورنهيل'
    ],
    arabicCons: [
      'طراز المنازل أقدم (بناء السبعينات والثمانينات) مقارنة بالأحياء الجديدة',
      'أبعد قليلاً عن تجمعات الملاحم والمساجد الكبرى (تحتاج 10 دقائق بالسيارة)',
      'نسبة العائلات المسلمة أقل كثافة من سادلريدج وكورنرستون'
    ],
    designatedPublicElementary: 'Thorncliffe School (CBE Public K-6) / Colonel Macleod School (7-9)',
    schoolCatchmentWarning: 'Established schools with stable enrollment; high placement certainty for newcomer children.'
  },
  {
    id: 'taradale_martindale',
    name: 'Taradale & Martindale',
    arabicName: 'تاراديل ومارتينديل',
    quadrant: 'Northeast (NE)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 1950,
    fourBedDetachedRentCAD: 2350,
    commuteDowntownMinutes: 26,
    commuteTransitMinutes: 35,
    nearestCTrainStation: 'Saddletowne & Martindale Stations (Blue Line)',
    distanceToAirportMins: 14,
    safetyRating: 'High',
    muslimFamilyScore: 96,
    nearestMosqueName: 'Akram Jomaa & Jamia Abu Bakr',
    distanceToMosqueMins: 6,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa)',
    distanceToIslamicSchoolMins: 8,
    halalGroceryAccess: 'Immediate (<5 mins)',
    keyTags: ['Best Budget Value', 'CTrain Walkable', 'Halal Shopping Plazas', 'Affordable Family Rent'],
    pros: [
      'Lowest family rental rates in Calgary: 3-bed for $1,950 and 4-bed detached for $2,350/mo',
      'Direct walking access to Martindale or Saddletowne CTrain stations',
      'Established parks, mature playgrounds, and family recreation centres',
      'Adjacent to Castleridge and Falconridge halal ethnic retail plazas'
    ],
    cons: [
      'Older 1990s housing finishes compared to Cornerstone or Savanna',
      'High vehicle street parking volume',
      'Narrower residential street profiles'
    ],
    arabicPros: [
      'أفضل ميزانية إيجار في كالغاري: 3 غرف بـ 1,950 و4 غرف بـ 2,350 دولار',
      'إمكانية المشي مباشرة إلى محطات قطار سادلتاون ومارتينديل',
      'حدائق عائلية وملاعب أطفال قائمة ومكتملة',
      'قريب جداً من أسواق ومطاعم فالكونريدج وكاسلريدج الحلال'
    ],
    arabicCons: [
      'تشطيبات المنازل أقدم مقارنة بالأحياء الجديدة المنشأة حديثاً',
      'مواقف السيارات في الشوارع مزدحمة',
      'شوارع داخلية أضيق'
    ],
    designatedPublicElementary: 'Taradale School / Manmeet Singh Bhullar School',
    schoolCatchmentWarning: 'School designations are strictly address-dependent. Confirm catchment with CBE before signing.'
  },
  {
    id: 'skyview_cityscape',
    name: 'Skyview Ranch, Redstone & Cityscape',
    arabicName: 'سكاي فيو رانش وريدستون وسيتي سكيب',
    quadrant: 'Northeast (NE)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2150,
    fourBedDetachedRentCAD: 2500,
    commuteDowntownMinutes: 28,
    commuteTransitMinutes: 45,
    nearestCTrainStation: 'Saddletowne Station (via feeder bus 159/160)',
    distanceToAirportMins: 10,
    safetyRating: 'Very High',
    muslimFamilyScore: 94,
    nearestMosqueName: 'Akram Jomaa & Savanna Musalla',
    distanceToMosqueMins: 8,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa)',
    distanceToIslamicSchoolMins: 10,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Newer Community', 'Modern Houses', 'Airport Access', 'Price Dropped'],
    pros: [
      'Modern open-concept floor plans, stone countertops, and high ceilings (built post-2015)',
      'Price dropped to $2,500/mo for 4-bed detached homes on Facebook Marketplace',
      'Quick 10-minute drive to Calgary International Airport (YYC)',
      'Direct highway access to Stoney Trail ring road and Metis Trail',
      'Safe, modern planned streets with newly constructed children playgrounds'
    ],
    cons: [
      'No direct walking access to CTrain; requires feeder bus to Saddletowne',
      'Limited mature tree shade in newly developed sectors',
      'Proximity to airport flight paths'
    ],
    arabicPros: [
      'منازل حديثة بتصاميم عصرية وتشطيبات فاخرة (بنيت بعد 2015)',
      'انخفضت الأسعار إلى 2,500 دولار للبيوت المستقلة على فيسبوك ماركت بليس',
      '10 دقائق فقط بالسيارة إلى مطار كالغاري الدولي',
      'وصول سريع لطريق ستوني ترايل الدائري وطريق ميتيس',
      'شوارع وملاعب أطفال حديثة وآمنة جداً'
    ],
    arabicCons: [
      'تحتاج حافلة للوصول إلى محطة القطار',
      'الأشجار في الحي ما زالت في طور النمو',
      'قريب من مسارات الطيران للمطار'
    ],
    designatedPublicElementary: 'Prairie Sky School / Apostles of Jesus Catholic School',
    schoolCatchmentWarning: 'Newer community schools experience high demand. Verify busing zones with CBE Welcome Centre.'
  },
  {
    id: 'evanston',
    name: 'Evanston & Sage Hill',
    arabicName: 'إيفانستون وسيج هيل',
    quadrant: 'Northwest (NW)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2250,
    fourBedDetachedRentCAD: 2750,
    commuteDowntownMinutes: 30,
    commuteTransitMinutes: 52,
    nearestCTrainStation: 'Crowfoot or Dalhousie Stations (via Express bus)',
    distanceToAirportMins: 16,
    safetyRating: 'Very High',
    muslimFamilyScore: 84,
    nearestMosqueName: 'MAC Islamic Centre (Al-Salam Centre NW)',
    distanceToMosqueMins: 14,
    nearestIslamicSchool: 'CIS Omar Bin Al-Khattab Campus (NW)',
    distanceToIslamicSchoolMins: 18,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Family Suburb', 'High Safety', 'Top Schools', 'Beacon Hill Shopping'],
    pros: [
      'Consistently ranked among Calgary\'s safest and cleanest master-planned family suburban areas',
      'Proximity to Beacon Hill shopping complex (Costco Wholesale, Home Depot, Canadian Tire)',
      'Strong public schools with modern STEM facilities and expansive soccer fields',
      'Quiet, pristine residential streets populated heavily by professional young families'
    ],
    cons: [
      'Longer transit commute to Downtown Calgary (often requires bus + Red Line CTrain)',
      'Higher rental rates than Northeast Calgary',
      'Further away from major halal butchery hubs'
    ],
    arabicPros: [
      'من أكثر أحياء كالغاري أماناً ونظافة ومثالي جداً للأطفال',
      'قريب جداً من مجمع بيكون هيل التجاري (كوستكو وهوم ديبوت)',
      'مدارس حكومية ممتازة وملاعب كرة قدم واسعة',
      'شوارع هادئة وراقية تسكنها عائلات مهندسين وأطباء'
    ],
    arabicCons: [
      'المواصلات العامة إلى وسط المدينة تستغرق وقتاً أطول',
      'الإيجارات أعلى بحوالي 250-300 دولار من أحياء الشمال الشرقي',
      'أبعد قليلاً عن الملاحم والمراكز الإسلامية الرئيسية'
    ],
    designatedPublicElementary: 'Kenneth D. Taylor School (K-4) / Simons Valley School',
    schoolCatchmentWarning: 'Evanston public schools have historically capped enrolment. Confirm whether your child will attend the in-community school or overflow bus.'
  },
  {
    id: 'west_springs_aspen',
    name: 'West Springs & Aspen Woods',
    arabicName: 'ويست سبرينغز وأسبن وودز',
    quadrant: 'Southwest (SW)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2850,
    fourBedDetachedRentCAD: 3600,
    commuteDowntownMinutes: 20,
    commuteTransitMinutes: 32,
    nearestCTrainStation: '69th Street Station (Blue Line West)',
    distanceToAirportMins: 32,
    safetyRating: 'Very High',
    muslimFamilyScore: 78,
    nearestMosqueName: 'Southwest Masjid & MAC Islamic Centre SW',
    distanceToMosqueMins: 12,
    nearestIslamicSchool: 'Calgary Islamic School (SW Bus Route)',
    distanceToIslamicSchoolMins: 22,
    halalGroceryAccess: 'Moderate (10-15 mins)',
    keyTags: ['Executive Luxury', 'Top Rated Schools', '69th St CTrain', 'Rockies Gateway'],
    pros: [
      'Calgary\'s most prestigious family neighborhood with highest median household incomes ($180k+)',
      'Direct gateway to Highway 1 West for fastest 45-minute weekend trips to Banff and Canmore',
      'Top-tier public and private school catchments (Webber Academy, Calgary Academy, Ernest Manning High)',
      '69th Street CTrain terminal provides direct 18-minute train connection into Downtown Calgary core'
    ],
    cons: [
      'Significantly higher rental threshold ($3,600+ for executive 4-bed detached homes)',
      'Limited local ethnic retail; halal groceries require travel to Northeast hubs or specialty co-ops',
      'Substantially higher initial security deposit requirements'
    ],
    arabicPros: [
      'أرقى أحياء كالغاري السكنية بمستوى دخل عائلي مرتفع وبيئة هادئة جداً',
      'أقرب نقطة للانطلاق إلى جبال الروكي وبانف في عطلة نهاية الأسبوع (45 دقيقة)',
      'أقوى مدارس حكومية وخاصة ذات تصنيف أكاديمي مرتفع',
      'محطة قطار 69th Street توفر وصولاً سريعاً خلال 18 دقيقة إلى داون تاون'
    ],
    arabicCons: [
      'الإيجارات مرتفعة بشكل ملحوظ (أكثر من 3,600 دولار للمنازل الفاخرة)',
      'المحلات والملاحم الحلال محدودة محلياً وتتطلب القيادة لمسافة 15-20 دقيقة',
      'مبلغ التأمين الأولي يكون مرتفعاً'
    ],
    designatedPublicElementary: 'West Springs School (CBE Public K-4) / West Ridge School (5-9)',
    schoolCatchmentWarning: 'Stable schools with established boundaries; high ranking on Fraser Institute academic index.'
  },
  {
    id: 'mahogany_auburn',
    name: 'Mahogany & Auburn Bay',
    arabicName: 'ماهوغاني وأوبرن باي',
    quadrant: 'Southeast (SE)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2350,
    fourBedDetachedRentCAD: 2850,
    commuteDowntownMinutes: 32,
    commuteTransitMinutes: 55,
    nearestCTrainStation: 'Somerset-Bridlewood (via bus) / Max Teal BRT',
    distanceToAirportMins: 28,
    safetyRating: 'Very High',
    muslimFamilyScore: 68,
    nearestMosqueName: 'South Calgary Islamic Centre (Southland)',
    distanceToMosqueMins: 18,
    nearestIslamicSchool: 'Calgary Islamic School (Busing available)',
    distanceToIslamicSchoolMins: 26,
    halalGroceryAccess: 'Moderate (10-15 mins)',
    keyTags: ['Lake Community', 'Resort Lifestyle', 'South Health Campus', 'Family Amenities'],
    pros: [
      'Access to Calgary\'s largest freshwater resort lake, sandy beaches, kayak rentals, and tennis club',
      'Immediate proximity to South Health Campus (Calgary’s newest full-scale hospital facility)',
      'Modern suburban estate architecture and vibrant Mahogany Village shopping centre',
      'High sense of neighborhood safety and organized community family events'
    ],
    cons: [
      'Furthest quadrant from major mosques and Northeast Calgary halal grocery epicenters',
      'Longer highway commute to downtown Calgary along Deerfoot Trail during morning peaks',
      'LRT Green Line extension to Mahogany is in future development phase'
    ],
    arabicPros: [
      'حي البحيرات الشهير: شواطئ رملية وقوارب تجديف وأنشطة صيفية وشتوية للعائلة',
      'ملاصق لمستشفى ساوث هيلث كامبس الحديث والمتكامل',
      'تصاميم حديثة ومراكز تجارية ومطاعم عصرية',
      'أعلى معدلات الأمان ونظافة الشوارع والحدائق'
    ],
    arabicCons: [
      'الأبعد عن المساجد الرئيسية والملاحم والأسواق العربية (يحتاج 20-25 دقيقة)',
      'مشوار الداون تاون أطول في ساعات الذروة الصباحية',
      'خط قطار المترو لم يصل بعد إلى الحي ويعتمد على الحافلات السريعة'
    ],
    designatedPublicElementary: 'Mahogany School (CBE K-5) / Lakeshore School (6-9)',
    schoolCatchmentWarning: 'Lake community schools experience fast population growth. Verify address eligibility with CBE.'
  }
];
