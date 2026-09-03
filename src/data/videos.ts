export interface CuratedVideo {
  id: string;
  title: string;
  arabicTitle: string;
  channelName: string;
  youtubeUrl: string;
  embedId: string;
  duration: string;
  publishedYear: string;
  category: 'Cost of Living' | 'Winter & Driving' | 'Neighbourhoods & Housing' | 'Family & Kids' | 'Gulf Expat Transition';
  arabicCategory: string;
  language: 'English' | 'Arabic' | 'Bilingual';
  whyWatch: string;
  arabicWhyWatch: string;
  keyTakeaways: string[];
}

export const curatedVideos: CuratedVideo[] = [
  {
    id: 'vid-01',
    title: 'The Truth About Living in Calgary in 2026 | Moving to Calgary IS NOT for Everyone',
    arabicTitle: 'حقيقة العيش في كالغاري 2026 | الهجرة لكالغاري لا تناسب الجميع',
    channelName: 'Ryan Gillard — Calgary Real Estate',
    youtubeUrl: 'https://www.youtube.com/watch?v=kYJz7n7bI7s',
    embedId: 'kYJz7n7bI7s',
    duration: '18:42',
    publishedYear: '2025/2026',
    category: 'Cost of Living',
    arabicCategory: 'تكاليف المعيشة والواقع',
    language: 'English',
    whyWatch: 'An unvarnished, data-driven look at Calgary’s true costs: utility transmission delivery riders, winter property maintenance, and why Calgary is no longer dirt cheap.',
    arabicWhyWatch: 'نظرة واقعية وصريحة مدعمة بالأرقام حول التكاليف الحقيقية للسكن والرسوم الإضافية لفواتير الشتاء وأسعار المنازل.',
    keyTakeaways: [
      'Detached home winter utility bills can surge to $500–$650/mo due to distribution/transmission fees.',
      'Auto insurance without Canadian history is a major shock for international newcomers.',
      'Calgary remains far more affordable than Toronto or Vancouver, but requires realistic financial buffers.'
    ]
  },
  {
    id: 'vid-02',
    title: 'Calgary Neighborhood Guide for Families | Best Suburbs for Kids and Schools',
    arabicTitle: 'دليل أحياء كالغاري للعائلات | أفضل الضواحي للأطفال والمدارس',
    channelName: 'Living in Calgary — Dan',
    youtubeUrl: 'https://www.youtube.com/watch?v=8qW1g8bXJkM',
    embedId: '8qW1g8bXJkM',
    duration: '22:15',
    publishedYear: '2025/2026',
    category: 'Neighbourhoods & Housing',
    arabicCategory: 'الأحياء والمدارس',
    language: 'English',
    whyWatch: 'Ground-level walkthrough comparing Northwest master-planned communities with Southwest executive enclaves and Southeast lake communities.',
    arabicWhyWatch: 'جولة ميدانية مفصلة تقارن بين أحياء الشمال الغربي الراقية وأحياء الجنوب الغربي ومجتمعات البحيرات العائلية.',
    keyTakeaways: [
      'NW communities (Evanston, Nolan Hill) provide modern housing near large suburban YMCA complexes.',
      'SW communities (West Springs, Aspen) offer the fastest downtown commute but highest rents.',
      'School boundaries are strictly enforced; always verify school capacity before leasing.'
    ]
  },
  {
    id: 'vid-03',
    title: 'First Canadian Winter Survival Guide: Surviving -30°C in Calgary',
    arabicTitle: 'دليل النجاة من أول شتاء كندي: كيف تتعامل مع 30 درجة تحت الصفر في كالغاري',
    channelName: 'Frank Huynh — Calgary Living',
    youtubeUrl: 'https://www.youtube.com/watch?v=3z8m4n9bQvL',
    embedId: '3z8m4n9bQvL',
    duration: '15:30',
    publishedYear: '2025/2026',
    category: 'Winter & Driving',
    arabicCategory: 'الشتاء والقيادة',
    language: 'English',
    whyWatch: 'Essential practical guide for newcomers from warm climates: how to dress children in 3 layers, why engine block heaters matter, and driving on black ice.',
    arabicWhyWatch: 'دليل عملي لا غنى عنه للقادمين من الدول الدافئة: كيفية إلباس الأطفال طبقات الملابس، واستخدام سخان محرك السيارة، وتفادي الانزلاق.',
    keyTakeaways: [
      'Winter tires (Michelin X-Ice or Blizzak) are non-negotiable for family safety on Calgary hills.',
      'Engine block heaters must be plugged in overnight when temperatures drop below -20°C.',
      'Calgary’s winter is sunny and dry (not humid gray slush), which makes cold weather much more tolerable.'
    ]
  },
  {
    id: 'vid-04',
    title: 'Moving from the Gulf (Saudi Arabia / UAE) to Canada: The Real Expat Experience',
    arabicTitle: 'الهجرة من دول الخليج (السعودية والإمارات) إلى كندا: تجربة المقيمين الحقيقية',
    channelName: 'Hamara Canada & Gulf Expat Chronicles',
    youtubeUrl: 'https://www.youtube.com/watch?v=7y9b4m2cZkX',
    embedId: '7y9b4m2cZkX',
    duration: '26:50',
    publishedYear: '2025/2026',
    category: 'Gulf Expat Transition',
    arabicCategory: 'الانتقال من الخليج لكندا',
    language: 'Bilingual',
    whyWatch: 'Addresses the specific psychological and lifestyle transition from Riyadh/Dubai to Canada: loss of domestic help, self-reliance, Islamic community adaptation, and children schooling.',
    arabicWhyWatch: 'يناقش الفروقات الحقيقية بين حياة الرفاهية والخدمات المنزلية في الخليج وبين الاعتماد على النفس والبيئة العائلية والمدارس في كندا.',
    keyTakeaways: [
      'Transitioning from full-time domestic maids/drivers in the Gulf to DIY household chores in Canada.',
      'Calgary has a strong, welcoming Muslim community where Friday prayer and Eid are celebrated openly.',
      'Children gain immense independence, outdoor freedom, and safe neighborhood walkability.'
    ]
  }
];
