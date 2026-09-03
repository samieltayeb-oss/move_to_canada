export interface MosqueFacility {
  id: string;
  name: string;
  arabicName: string;
  quadrant: 'Northeast (NE)' | 'Northwest (NW)' | 'Southwest (SW)' | 'Southeast (SE)' | 'Downtown';
  address: string;
  website: string;
  capacityEstimate: string;
  jumuahShifts: string[];
  programs: string[];
  childrenProgramsAvailable: boolean;
  arabicClassesAvailable: boolean;
  quranTahfeezAvailable: boolean;
  youthClubAvailable: boolean;
  funeralMortuaryService: boolean;
  familyRelevance: string;
  arabicFamilyRelevance: string;
  verifiedDate: string;
  sourceId: string;
}

export const calgaryMosques: MosqueFacility[] = [
  {
    id: 'akram-jomaa',
    name: 'Akram Jomaa Islamic Centre (MCC)',
    arabicName: 'مركز أكرم جمعة الإسلامي (مجلس مسلمي كالغاري)',
    quadrant: 'Northeast (NE)',
    address: '2624 – 39 Avenue NE, Calgary, AB T1Y 5V7',
    website: 'https://akramjomaa.com/',
    capacityEstimate: '3,000+ worshippers (Main hall + sisters mezzanine + gym)',
    jumuahShifts: ['1st Shift: 12:30 PM', '2nd Shift: 1:30 PM', '3rd Shift: 2:30 PM (Seasonal DST adjusted)'],
    programs: [
      'Full-time Tahfeez al-Quran Academy',
      'Evening Hifz & Nazira classes',
      'Weekend Islamic & Arabic Madrasah',
      'MCC Youth Council sports & leadership',
      'Centralized Calgary Islamic Funeral Services',
      'Daily Ramadan community Iftars (1,000+ meals)',
      'Major Eid prayer congregations'
    ],
    childrenProgramsAvailable: true,
    arabicClassesAvailable: true,
    quranTahfeezAvailable: true,
    youthClubAvailable: true,
    funeralMortuaryService: true,
    familyRelevance: 'The flagship spiritual, cultural, and educational anchor of Calgary. Adjacent to Calgary Islamic School campus.',
    arabicFamilyRelevance: 'المركز الإسلامي الأكبر في كالغاري، يوفر بيئة شاملة للصلوات وتحفيظ القرآن والأنشطة الشبابية ومجاور لمدرسة كالغاري الإسلامية.',
    verifiedDate: '2026-09-03',
    sourceId: 'SRC-ISL-001'
  },
  {
    id: 'downtown-iisc',
    name: 'Downtown Calgary Mosque (IISC)',
    arabicName: 'مسجد وسط كالغاري (الجمعية الإسلامية للإعلام)',
    quadrant: 'Downtown',
    address: 'Unit 200, 1009 – 7th Avenue SW, Calgary, AB T2P 1A8',
    website: 'https://iisc.ca/',
    capacityEstimate: '600 worshippers (located on CTrain 7th Ave Free Fare Zone)',
    jumuahShifts: ['1st Shift: 12:30 PM', '2nd Shift: 1:30 PM'],
    programs: [
      'Five daily congregational prayers',
      'Lunchtime corporate halaqas for downtown professionals',
      'New Muslim mentorship & outreach',
      'Affiliated Al-Kahf Youth Centre (4128 6 St NE)'
    ],
    childrenProgramsAvailable: false,
    arabicClassesAvailable: true,
    quranTahfeezAvailable: false,
    youthClubAvailable: true,
    funeralMortuaryService: false,
    familyRelevance: 'Essential prayer facility for corporate professionals working in Downtown Calgary corporate towers.',
    arabicFamilyRelevance: 'مثالي للموظفين والمهنيين في أبراج وسط مدينة كالغاري لأداء الصلوات وصلاة الجمعة بسهولة.',
    verifiedDate: '2026-09-03',
    sourceId: 'SRC-ISL-002'
  },
  {
    id: 'al-salam-mac',
    name: 'Al-Salam Centre (Muslim Association of Canada)',
    arabicName: 'مركز السلام الإسلامي (الرابطة الإسلامية الكندية)',
    quadrant: 'Northwest (NW)',
    address: '6415 Ranchview Drive NW, Calgary, AB T3G 1B5',
    website: 'https://alsalamcentre.ca/',
    capacityEstimate: '1,000+ worshippers',
    jumuahShifts: ['1st Shift: 1:00 PM', '2nd Shift: 2:00 PM'],
    programs: [
      'MAC Islamic Preschool & Kindergarten',
      'Al-Salam Weekend Arabic & Quran School',
      'MAC Youth intramural sports leagues & camps',
      'Annual Ramadan Taraweeh with guest Qaris',
      'Sisters circles and community family events'
    ],
    childrenProgramsAvailable: true,
    arabicClassesAvailable: true,
    quranTahfeezAvailable: true,
    youthClubAvailable: true,
    funeralMortuaryService: false,
    familyRelevance: 'The primary Northwest Islamic community hub, offering exceptional youth mentorship and structured weekend schooling.',
    arabicFamilyRelevance: 'المركز الرئيسي للجالية في الشمال الغربي، يتميز ببرامج الشباب والأنشطة الرياضية وروضة أطفال إسلامية.',
    verifiedDate: '2026-09-03',
    sourceId: 'SRC-ISL-003'
  },
  {
    id: 'cicsw-westgate',
    name: 'Calgary Islamic Centre (SW Masjid / CICSW)',
    arabicName: 'مركز كالغاري الإسلامي (مسجد الجنوب الغربي)',
    quadrant: 'Southwest (SW)',
    address: '5615 – 14 Avenue SW, Calgary, AB T3H 2E8',
    website: 'https://cicsw.ca/',
    capacityEstimate: '1,200 worshippers',
    jumuahShifts: ['1st Shift: 2:00 PM', '2nd Shift: 3:30 PM'],
    programs: [
      'Nibras Quran and Tajweed Academy for children',
      'Adult Arabic immersion and Tafseer halaqas',
      'Certified Islamic Marriage (Nikah) officiation',
      'Family arbitration and counselling'
    ],
    childrenProgramsAvailable: true,
    arabicClassesAvailable: true,
    quranTahfeezAvailable: true,
    youthClubAvailable: true,
    funeralMortuaryService: false,
    familyRelevance: 'Serves the Southwest communities (West Springs, Aspen Woods, Westhills) with classical Islamic learning and family support.',
    arabicFamilyRelevance: 'يخدم أحياء الجنوب الغربي الراقية، ويقدم مدرسة نبراس للقرآن الكريم ودروس التفسير والاستشارات العائلية.',
    verifiedDate: '2026-09-03',
    sourceId: 'SRC-ISL-004'
  }
];

export interface HalalMarketResource {
  id: string;
  name: string;
  arabicName: string;
  type: 'Halal International Supermarket' | 'Dedicated Zabiha Butcher' | 'Mainstream Grocery Chain' | 'Wholesale Club';
  address: string;
  quadrant: string;
  specialty: string;
  arabicSpecialty: string;
  verifiedAt: string;
}

export const halalGroceryHubs: HalalMarketResource[] = [
  {
    id: 'basha-foods',
    name: 'Basha Foods International',
    arabicName: 'باشا فودز إنترناشونال',
    type: 'Halal International Supermarket',
    address: '2717 Sunridge Way NE, Calgary, AB T1Y 7K7',
    quadrant: 'NE',
    specialty: '30,000+ sq ft market. Full-service fresh halal butcher counter (beef, lamb, goat, poultry), Middle Eastern bakery (fresh pita/baklava), olive/cheese deli, imported Gulf & Arab dry goods.',
    arabicSpecialty: 'سوبرماركت عربي وإسلامي ضخم (30 ألف قدم). ملحمة طازجة كاملة، مخبز عربي للخبز الساخن والحلويات، وجبن وزيتون، ومنتجات مستوردة من السعودية والخليج.',
    verifiedAt: '2026-09-03'
  },
  {
    id: 'asian-halal-meat',
    name: 'Asian Halal Meat & Food Inc.',
    arabicName: 'ملحمة الأغذية الحلال الآسيوية',
    type: 'Dedicated Zabiha Butcher',
    address: '55 Westwinds Crescent NE, Calgary, AB T3J 5H2',
    quadrant: 'NE',
    specialty: 'Certified hand-slaughtered (Zabiha) custom butcher. Specializes in whole-animal fresh lamb, goat cubes, AAA Alberta halal beef, and fresh organic poultry.',
    arabicSpecialty: 'ملحمة متخصصة في الذبح اليدوي الحلال (ذبيحة). توفر لحوم الضأن والخروف الكامل وقطع لحم البقر الألبرتي الفاخر والدجاج الطازج.',
    verifiedAt: '2026-09-03'
  },
  {
    id: 'costco-business-centre',
    name: 'Costco Business Centre (Halal Wholesale)',
    arabicName: 'كوستكو بيزنس سنتر (جملة الحلال)',
    type: 'Wholesale Club',
    address: '2853 – 32 Street NE, Calgary, AB T1Y 6T7',
    quadrant: 'NE',
    specialty: 'Open to all Costco members. Uniquely stocks bulk whole frozen halal lamb & goat carcasses, wholesale halal beef cuts, and bulk cases of certified halal chicken.',
    arabicSpecialty: 'متاح لجميع أعضاء كوستكو. يوفر ذبائح كاملة مجمدة من الخروف والماعز الحلال، وكراتين الدجاج المعتمد بكميات عائلية اقتصادية.',
    verifiedAt: '2026-09-03'
  },
  {
    id: 'superstore-country-hills',
    name: 'Real Canadian Superstore (Halal Department)',
    arabicName: 'ريال كانيديان سوبرستور (قسم الحلال)',
    type: 'Mainstream Grocery Chain',
    address: '100 Country Village Road NE, Calgary, AB T3K 5X5',
    quadrant: 'NW / Country Hills',
    specialty: 'Massive dedicated halal meat counters carrying Sufra and Mina brands (certified HMA/HMCA), halal frozen burgers, deli slices, and international ingredients.',
    arabicSpecialty: 'هايبرماركت كندي رئيسي يضم قسماً كبيراً مخصصاً للحوم الحلال المعتمدة (ماركات صفا ومينا)، ويوفر تسوقاً شاملاً للعائلة.',
    verifiedAt: '2026-09-03'
  }
];
