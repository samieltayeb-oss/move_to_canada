export interface Neighbourhood {
  id: string;
  name: string;
  arabicName: string;
  quadrant: 'Northeast (NE)' | 'Northwest (NW)' | 'Southwest (SW)' | 'Southeast (SE)';
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
    id: 'saddleridge',
    name: 'Saddleridge & Savanna',
    arabicName: 'سادلريدج وسافانا',
    quadrant: 'Northeast (NE)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 2250,
    fourBedDetachedRentCAD: 2650,
    commuteDowntownMinutes: 28,
    commuteTransitMinutes: 38,
    nearestCTrainStation: 'Saddletowne Station (Blue Line)',
    distanceToAirportMins: 12,
    safetyRating: 'High',
    muslimFamilyScore: 98,
    nearestMosqueName: 'Akram Jomaa Islamic Centre & Saddletowne Musalla',
    distanceToMosqueMins: 6,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa Campus)',
    distanceToIslamicSchoolMins: 8,
    halalGroceryAccess: 'Immediate (<5 mins)',
    keyTags: ['Best for Muslim Family', 'Budget Value', 'Transit Access', 'Halal Food Hub'],
    pros: [
      'Unmatched Islamic community infrastructure and visible normalization of Muslim family life',
      'Walking distance to Saddletowne CTrain and Genesis Centre YMCA/Library complex',
      'Most affordable 4-bedroom detached family homes with attached double garages',
      'Dozens of halal meat shops, bakeries, and grocery markets within 5 minutes'
    ],
    cons: [
      'High suburban density and street parking congestion',
      'Overcrowding in local elementary schools with lottery/overflow potential',
      'Airplane flight path overflight noise during southern approaches'
    ],
    arabicPros: [
      'بيئة إسلامية متكاملة ومراكز ونشاطات تناسب العائلات المسلمة تماماً',
      'قريب جداً من محطة قطار سادلتاون ومجمع جينيسيس الرياضي والمكتبة العامة',
      'أفضل أسعار إيجار للمنازل المستقلة من 4 غرف مع كراج مزدوج',
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
    id: 'taradale_martindale',
    name: 'Taradale & Martindale',
    arabicName: 'تاراديل ومارتينديل',
    quadrant: 'Northeast (NE)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 2150,
    fourBedDetachedRentCAD: 2550,
    commuteDowntownMinutes: 26,
    commuteTransitMinutes: 35,
    nearestCTrainStation: 'Saddletowne & Martindale Stations (Blue Line)',
    distanceToAirportMins: 14,
    safetyRating: 'High',
    muslimFamilyScore: 96,
    nearestMosqueName: 'Akram Jomaa & Jamia Abu Bakr',
    distanceToMosqueMins: 7,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa)',
    distanceToIslamicSchoolMins: 8,
    halalGroceryAccess: 'Immediate (<5 mins)',
    keyTags: ['Best Value', 'Budget', 'Transit Walkable', 'Muslim Family'],
    pros: [
      'Direct walking access to Martindale or Saddletowne CTrain stations',
      'Established parks, mature playgrounds, and family recreation',
      'Very competitive rental pricing for spacious split-level and 2-storey houses',
      'Adjacent to Castleridge and Falconridge halal ethnic retail plazas'
    ],
    cons: [
      'Older 1990s housing finishes compared to newer western or northern subdivisions',
      'High vehicle street parking volume',
      'Narrower residential street profiles'
    ],
    arabicPros: [
      'إمكانية المشي مباشرة إلى محطات قطار سادلتاون ومارتينديل',
      'حدائق عائلية وملاعب أطفال قائمة ومكتملة',
      'إيجارات اقتصادية جداً لمنازل عائلية فسيحة',
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
    threeBedRentCAD: 2350,
    fourBedDetachedRentCAD: 2800,
    commuteDowntownMinutes: 28,
    commuteTransitMinutes: 45,
    nearestCTrainStation: 'Saddletowne Station (via feeder bus 159/160)',
    distanceToAirportMins: 10,
    safetyRating: 'Very High',
    muslimFamilyScore: 94,
    nearestMosqueName: 'Akram Jomaa & Savanna Musalla',
    distanceToMosqueMins: 9,
    nearestIslamicSchool: 'Calgary Islamic School (Akram Jomaa)',
    distanceToIslamicSchoolMins: 10,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Newer Community', 'Modern Houses', 'Airport Access', 'Muslim Family'],
    pros: [
      'Modern open-concept floor plans, stone countertops, and high ceilings (built post-2015)',
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
      '10 دقائق فقط بالسيارة إلى مطار كالغاري الدولي',
      'وصول سريع لطريق ستوني ترايل الدائري وطريق ميتيس',
      'شوارع وملاعب أطفال حديثة وآمنة جداً'
    ],
    arabicCons: [
      'تحتاج حافلة للوصول إلى محطة القطار',
      'الأشجار في الحي ما زالت في طور النمو',
      'قريب من مسارات الطيران للمطار'
    ],
    designatedPublicElementary: 'Apostle of Jesus / Prairie Sky School (CBE)',
    schoolCatchmentWarning: 'Prairie Sky School regularly faces space pressures. Check current capacity with CBE Welcome Centre.'
  },
  {
    id: 'evanston_nolan',
    name: 'Evanston & Nolan Hill',
    arabicName: 'إيفانستون ونولان هيل',
    quadrant: 'Northwest (NW)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2550,
    fourBedDetachedRentCAD: 3050,
    commuteDowntownMinutes: 28,
    commuteTransitMinutes: 48,
    nearestCTrainStation: 'Tuscany Station or Route 301 BRT Express',
    distanceToAirportMins: 16,
    safetyRating: 'Very High',
    muslimFamilyScore: 84,
    nearestMosqueName: 'ICNC Ranchlands Mosque & MAC Al-Salam',
    distanceToMosqueMins: 14,
    nearestIslamicSchool: 'Al-Amal Academy (Royal Vista NW)',
    distanceToIslamicSchoolMins: 12,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Best for Public Schools', 'Safe Modern Family', 'Rockies Gateway', 'Al-Amal School'],
    pros: [
      'Outstanding modern suburban family atmosphere with extensive ravines and bike trails',
      'Proximity to Al-Amal Academy Islamic school in NW (12 mins) and Country Hills Superstore halal counter (8 mins)',
      'Direct access to Stoney Trail, enabling 15-min drive to Akram Jomaa in NE and 55-min drive to Banff',
      'Top-rated public and Catholic elementary schools and very low crime rate'
    ],
    cons: [
      'No CTrain station in community; requires Route 301 BRT bus or driving to Tuscany/Brentwood',
      'Slightly higher rent than Northeast (+~$350/month)',
      'Hilly roads require disciplined winter tire use during freezing snowstorms'
    ],
    arabicPros: [
      'بيئة عائلية راقية جداً ومساحات خضراء ومسارات دراجات ووديان طبيعية',
      'قريب من مدرسة الأمل الإسلامية في الشمال الغربي (12 دقيقة) وسوبرستور كانتري هيلز',
      'اتصال مباشر بالطريق الدائري للوصول إلى مسجد أكرم جمعة (15 دقيقة) وإلى بانف (55 دقيقة)',
      'مدارس متميزة ومعدلات أمان مرتفعة للغاية'
    ],
    arabicCons: [
      'لا يوجد محطة قطار داخل الحي؛ الاعتماد على الحافلات السريعة أو السيارة',
      'الإيجار أعلى قليلاً من الشمال الشرقي (بفارق 350 دولار تقريباً)',
      'الشوارع المائلة تتطلب إطارات شتوية ممتازة أثناء تساقط الثلوج'
    ],
    designatedPublicElementary: 'Kenneth D. Taylor School (CBE)',
    schoolCatchmentWarning: 'Kenneth D. Taylor has historically used lottery protocols. Verify admission status with CBE.'
  },
  {
    id: 'panorama_hills',
    name: 'Panorama Hills & Carrington',
    arabicName: 'بانوراما هيلز وكارينغتون',
    quadrant: 'Northwest (NW)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 2450,
    fourBedDetachedRentCAD: 2950,
    commuteDowntownMinutes: 25,
    commuteTransitMinutes: 40,
    nearestCTrainStation: 'North Pointe Transit Terminal (Route 301 BRT Express)',
    distanceToAirportMins: 14,
    safetyRating: 'Very High',
    muslimFamilyScore: 86,
    nearestMosqueName: 'ICNC Ranchlands & Akram Jomaa via Stoney Trail',
    distanceToMosqueMins: 12,
    nearestIslamicSchool: 'Calgary Islamic School (busing available) / Al-Amal',
    distanceToIslamicSchoolMins: 14,
    halalGroceryAccess: 'Close (5-10 mins)',
    keyTags: ['Public Schools', 'Superstore Halal', 'Express Bus', 'Family Amenities'],
    pros: [
      'Country Hills Town Centre offers Real Canadian Superstore with massive certified halal counter',
      'North Pointe Transit Terminal offers direct Route 301 BRT express into Downtown core',
      'Private Panorama Hills Community Centre with splash park, tennis, and skating rinks',
      'Excellent balance between housing cost, public school ratings, and commercial convenience'
    ],
    cons: [
      'Deerfoot Trail traffic during morning rush hour if commuting downtown by car',
      'Rapidly growing student population across northern catchment zones'
    ],
    arabicPros: [
      'مركز كانتري هيلز يضم سوبرستور مع قسم ضخم للحوم والأغذية الحلال المعتمدة',
      'محطة حافلات نورث بوينت السريعة توفر نقلاً مباشراً إلى قلب وسط المدينة',
      'مركز مجتمعي خاص بسكان الحي يضم ملاعب مائية وتنس ومساحات تزلج',
      'توازن رائع بين تكلفة السكن وجودة المدارس والخدمات التجارية'
    ],
    arabicCons: [
      'ازدحام طريق ديرفوت أثناء ساعات الذروة الصباحية عند القيادة لوسط المدينة',
      'نمو سريع في أعداد الطلاب في المدارس المحيطة'
    ],
    designatedPublicElementary: 'Panorama Hills School / Buffalo Rubbing Stone School',
    schoolCatchmentWarning: 'Check boundary lines carefully between Panorama Hills and Carrington.'
  },
  {
    id: 'west_springs_aspen',
    name: 'West Springs & Aspen Woods',
    arabicName: 'وست سبرينغز وآسبن وودز',
    quadrant: 'Southwest (SW)',
    vintage: 'Established Modern (2000-2015)',
    threeBedRentCAD: 3100,
    fourBedDetachedRentCAD: 3950,
    commuteDowntownMinutes: 18,
    commuteTransitMinutes: 22,
    nearestCTrainStation: '69th Street Station (Blue Line)',
    distanceToAirportMins: 32,
    safetyRating: 'Very High',
    muslimFamilyScore: 78,
    nearestMosqueName: 'Calgary Islamic Centre (SW Masjid - 5615 14 Ave SW)',
    distanceToMosqueMins: 9,
    nearestIslamicSchool: 'Calgary Islamic School (busing available)',
    distanceToIslamicSchoolMins: 24,
    halalGroceryAccess: 'Moderate (10-15 mins)',
    keyTags: ['Executive Luxury', 'Fastest Downtown Commute', 'Top Academies', 'Mountain Gateway'],
    pros: [
      'Executive lifestyle, stunning architectural prestige, and quiet upscale cul-de-sacs',
      'Fastest downtown commute: 18 mins by car via Bow Trail or 22 mins direct via 69th St CTrain',
      'Home to top-ranked academic institutions: Weber Academy, Rundle College, and Ernest Manning High',
      'Closest community to the Rocky Mountains (45 mins to Canmore & Kananaskis)'
    ],
    cons: [
      'Highest rental rates in Calgary ($3,500–$4,500/mo for 4-bed detached homes)',
      'Further away from main Northeast Islamic school campuses and ethnic grocery hubs',
      'Lower Muslim population concentration compared to NE/NW'
    ],
    arabicPros: [
      'حي راقٍ جداً بتشطيبات تنفيذية فاخرة وشوارع هادئة ومميزة',
      'أسرع وصول إلى وسط المدينة: 18 دقيقة بالسيارة أو 22 دقيقة بقطار محطة شارع 69',
      'أعلى المدارس تصنيفاً في المقاطعة (أكاديمية ويبر، كلية راندل، مدرسة إرنست مانينغ)',
      'الأقرب إلى جبال روكي (45 دقيقة فقط إلى كانمور وكاناناسكيس)'
    ],
    arabicCons: [
      'أعلى تكلفة إيجار في كالغاري (3500 - 4500 دولار شهرياً لمنازل 4 غرف)',
      'أبعد عن مدارس الجالية الإسلامية الرئيسية ومتاجر الأغذية الشرقية في الشمال الشرقي',
      'نسبة عائلات الجالية المسلمة أقل مقارنة بالشمال'
    ],
    designatedPublicElementary: 'West Springs School / West Ridge School',
    schoolCatchmentWarning: 'Very popular schools. Verify space availability with CBE.'
  },
  {
    id: 'mahogany_auburn',
    name: 'Mahogany & Auburn Bay',
    arabicName: 'ماهوغاني وأوبرن باي',
    quadrant: 'Southeast (SE)',
    vintage: 'Newer Suburb (2015+)',
    threeBedRentCAD: 2650,
    fourBedDetachedRentCAD: 3200,
    commuteDowntownMinutes: 35,
    commuteTransitMinutes: 65,
    nearestCTrainStation: 'Somerset-Bridlewood Station (via feeder) or MAX 302 BRT',
    distanceToAirportMins: 30,
    safetyRating: 'Very High',
    muslimFamilyScore: 70,
    nearestMosqueName: 'South Calgary Musalla (Legacy & Queensland) / Future SE Masjid',
    distanceToMosqueMins: 12,
    nearestIslamicSchool: 'Calgary Islamic School OBK Campus (SE Mayland Heights)',
    distanceToIslamicSchoolMins: 26,
    halalGroceryAccess: 'Moderate (10-15 mins)',
    keyTags: ['Private Lake Community', 'World-Class YMCA', 'Hospital Access', 'Family Recreation'],
    pros: [
      'Private 63-acre freshwater lake access: private sandy beaches, paddleboarding, swimming, winter skating',
      'Directly adjacent to Seton Urban District: South Health Campus hospital and world’s largest YMCA (330,000 sq ft)',
      'Modern, safe, pedestrian-friendly master-planned streets filled with young children and parks'
    ],
    cons: [
      'Longest commute to Downtown Calgary and Calgary International Airport',
      'Significant distance from Akram Jomaa and Northeast Islamic infrastructure (30+ mins drive)',
      'Lake association dues are sometimes passed through to tenants by landlords'
    ],
    arabicPros: [
      'دخول حصري لبحيرة ماهوغاني الخاصة (63 فداناً): شواطئ رملية وقوارب وتزلج شتوي',
      'ملاصق لمنطقة سيتون الحيوية: مستشفى ساوث هيلث كامبوس وأكبر فرع واي إم سي إيه في العالم',
      'شوارع حديثة وآمنة تماماً ومصممة للمشاة ومليئة بالأطفال والحدائق'
    ],
    arabicCons: [
      'أطول مسافة تنقل إلى وسط المدينة ومطار كالغاري الدولي',
      'بعيد نسبياً عن مجمع أكرم جمعة والمدارس الإسلامية الرئيسية في الشمال (30+ دقيقة)',
      'بعض الملاك يضيفون رسوم جمعية البحيرة السنوية على المستأجر'
    ],
    designatedPublicElementary: 'Mahogany School / Auburn Bay School',
    schoolCatchmentWarning: 'South suburban elementary schools face heavy enrollment. Confirm designated school before signing lease.'
  }
];
