export interface CuratedVideo {
  id: string;
  title: string;
  arabicTitle: string;
  channelName: string;
  youtubeUrl: string;
  embedId: string;
  duration: string;
  publishedYear: string;
  category: 'Overview & Guide' | 'Cost of Living' | 'Winter & Reality' | 'Neighbourhoods & Housing' | 'Arabic & Family Tour';
  arabicCategory: string;
  language: 'English' | 'Arabic' | 'Bilingual';
  whyWatch: string;
  arabicWhyWatch: string;
  keyTakeaways: string[];
}

export const curatedVideos: CuratedVideo[] = [
  {
    id: 'vid-01',
    title: 'Moving to Calgary in 2026? WATCH THIS FIRST | Mapping, Prices, Best Areas, Schools',
    arabicTitle: 'الانتقال إلى كالغاري في 2026؟ شاهد هذا أولاً | الخريطة، الأسعار، أفضل الأحياء والمدارس',
    channelName: 'Ton Nguyen — Living in Calgary',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZjfFvYr2Grs',
    embedId: 'ZjfFvYr2Grs',
    duration: '24:10',
    publishedYear: '2026',
    category: 'Overview & Guide',
    arabicCategory: 'الدليل الشامل لكالغاري',
    language: 'English',
    whyWatch: 'Comprehensive 2026 master orientation mapping out Calgary quadrants, realistic rental prices, school catchment dynamics, and essential newcomer strategies.',
    arabicWhyWatch: 'شرح مفصل ومحدث لعام 2026 لخريطة كالغاري، وأسعار الإيجارات الحقيقية، والمدارس، وكيفية اختيار الحي الأنسب لعائلتك.',
    keyTakeaways: [
      'Northeast and Northwest Calgary offer the most modern, family-friendly suburban communities.',
      'Calgary rental market is softening with more inventory available for 3 and 4-bedroom homes.',
      'School boundaries are strictly enforced by CBE; plan housing location around desired schools.'
    ]
  },
  {
    id: 'vid-02',
    title: 'معلومات ستصدمك عن كندا ، مدينة كالغاري | CALGARY ALBERTA',
    arabicTitle: 'معلومات مهمة وصادمة عن كندا ومدينة كالغاري بالتفصيل',
    channelName: 'Ali Imad — علي عماد',
    youtubeUrl: 'https://www.youtube.com/watch?v=U4UeZD3w0ls',
    embedId: 'U4UeZD3w0ls',
    duration: '14:25',
    publishedYear: '2025/2026',
    category: 'Arabic & Family Tour',
    arabicCategory: 'جولة وتجربة عربية',
    language: 'Arabic',
    whyWatch: 'An honest, transparent Arabic walkthrough answering key concerns for Arab and Muslim newcomers evaluating Calgary.',
    arabicWhyWatch: 'فيديو باللغة العربية يشرح بوضوح وصراحة واقع المعيشة في كالغاري ومميزات مقاطعة ألبرتا من انعدام ضريبة المبيعات وتوفر الجالية.',
    keyTakeaways: [
      'Alberta has 0% Provincial Sales Tax (PST), saving thousands compared to Ontario (13% HST) and BC (12%).',
      'The Muslim community in Calgary is large, active, and well-supported by mosques and halal amenities.',
      'Winter temperatures require proper preparation, but the sunny climate and Chinooks make it easier.'
    ]
  },
  {
    id: 'vid-03',
    title: 'Moving to Calgary in 2026? What You NEED to Know Before You Relocate or Buy',
    arabicTitle: 'الانتقال إلى كالغاري في 2026؟ ما يجب أن تعرفه قبل الانتقال أو الاستئجار',
    channelName: 'Living in YYC',
    youtubeUrl: 'https://www.youtube.com/watch?v=EzTM6Fuk02M',
    embedId: 'EzTM6Fuk02M',
    duration: '19:45',
    publishedYear: '2026',
    category: 'Cost of Living',
    arabicCategory: 'تكاليف المعيشة والواقع',
    language: 'English',
    whyWatch: 'Clear financial breakdown covering utility billing mechanics, winter tire necessities, and suburban commuting realities.',
    arabicWhyWatch: 'تحليل مالي دقيق يوضح فواتير الكهرباء والغاز في الشتاء، ومصاريف السيارة والتأمين، والمشاوير اليومية.',
    keyTakeaways: [
      'Winter utility bills include fixed municipal delivery fees that remain steady year-round.',
      'All-Wheel Drive (AWD) vehicles and dedicated winter tires provide peace of mind for family travel.',
      'Calgary offers unmatched proximity to Banff National Park and the Canadian Rockies.'
    ]
  },
  {
    id: 'vid-04',
    title: 'أول مرة نزور كندا جولة فمدينة كالغاري | Walking in Calgary City, Alberta',
    arabicTitle: 'جولة ميدانية لأول مرة في مدينة كالغاري ألبرتا',
    channelName: 'Tarek Marary',
    youtubeUrl: 'https://www.youtube.com/watch?v=t3IySVQgDYo',
    embedId: 't3IySVQgDYo',
    duration: '16:18',
    publishedYear: '2025/2026',
    category: 'Arabic & Family Tour',
    arabicCategory: 'جولة ميدانية للمدينة',
    language: 'Arabic',
    whyWatch: 'Street-level visual tour of Calgary downtown, residential streets, infrastructure, cleanliness, and public spaces.',
    arabicWhyWatch: 'جولة بصرية في شوارع كالغاري ووسط المدينة والحدائق توضح نظافة المدينة ومستوى التنظيم والهدوء.',
    keyTakeaways: [
      'Calgary is consistently ranked among the world’s cleanest and most livable cities.',
      'Downtown +15 skywalk network allows walking between 80+ buildings indoors during winter.',
      'Safe pedestrian walkways and high respect for family pedestrian traffic.'
    ]
  },
  {
    id: 'vid-05',
    title: 'Moving to Calgary? Here\'s What You NEED to Know!',
    arabicTitle: 'الهجرة إلى كالغاري؟ كل ما تحتاج لمعرفته من الصفر',
    channelName: 'This is Living in Calgary Alberta',
    youtubeUrl: 'https://www.youtube.com/watch?v=aGBefIaCVlE',
    embedId: 'aGBefIaCVlE',
    duration: '21:30',
    publishedYear: '2025/2026',
    category: 'Overview & Guide',
    arabicCategory: 'دليل شامل للقادمين الجدد',
    language: 'English',
    whyWatch: 'Covers essential newcomer settlement logistics: health care registration, driver licensing tests, and neighbourhood selection.',
    arabicWhyWatch: 'يشرح الخطوات اللوجستية للقادمين الجدد: التسجيل في التأمين الصحي AHCIP واختبار رخصة القيادة واختيار الأحياء.',
    keyTakeaways: [
      'Alberta has immediate zero-day waiting period for provincial healthcare (AHCIP) coverage.',
      'Driver licensing requires Class 7 knowledge test before taking Class 5 road examination.',
      'Children age 12 and under ride Calgary Transit completely free of charge.'
    ]
  },
  {
    id: 'vid-06',
    title: 'أهلا وسهلا بكم في مدينه كالغري البرتا كندا • قلب الغرب النابض',
    arabicTitle: 'أهلاً بكم في كالغاري • قلب الغرب الكندي النابض',
    channelName: 'Sam Nammoura',
    youtubeUrl: 'https://www.youtube.com/watch?v=trwTTrE_JgU',
    embedId: 'trwTTrE_JgU',
    duration: '12:50',
    publishedYear: '2025',
    category: 'Arabic & Family Tour',
    arabicCategory: 'مقدمة ترحيبية وتجربة استقرار',
    language: 'Arabic',
    whyWatch: 'Welcoming perspective from long-time Arab community leaders in Calgary explaining community spirit and mutual support.',
    arabicWhyWatch: 'رسالة ترحيبية ونصائح قيمة من مقيمين عرب قدامى في كالغاري حول التكيف والاندماج والمحافظة على القيم العائلية.',
    keyTakeaways: [
      'Strong Arab and Islamic community presence in Calgary with mutual support networks.',
      'Calgary offers top-rated universities, colleges, and educational opportunities for youth.',
      'Openness and welcoming attitude toward skilled newcomers from the Middle East.'
    ]
  }
];
