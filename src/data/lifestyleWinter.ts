export interface WinterItem {
  name: string;
  arabicName: string;
  priority: 'MUST HAVE' | 'NICE TO HAVE';
  estimatedCostFamilyCAD: number;
  whyNeeded: string;
  arabicWhyNeeded: string;
}

export const winterGearChecklist: WinterItem[] = [
  {
    name: 'Heavy Winter Down/Synthetic Parkas (5 Family Members)',
    arabicName: 'معاطف شتوية عازلة مقاومة للرياح (لكل أفراد العائلة)',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 750, // ~$150-$200 per adult, ~$100-$130 per child (Eddie Bauer/Columbia/SportChek)
    whyNeeded: 'Calgary temperatures drop to -25°C with wind chill. Parkas must be windproof and extend past the hip with insulated hoods.',
    arabicWhyNeeded: 'تنخفض الحرارة إلى 25 درجة تحت الصفر مع رياح قوية؛ يجب أن تكون المعاطف طويلة ومقاومة للرياح مع غطاء رأس معزول.'
  },
  {
    name: 'Winter Snow Boots Rated to -30°C (Waterproof)',
    arabicName: 'أحذية ثلجية معزولة ومقاومة للماء مصنفة حتى -30° مئوية',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 450, // ~$90 per pair (Sorel, Kamik, Bogs)
    whyNeeded: 'Cold feet lead to rapid heat loss. Rubber waterproof lower shell with thermal felt liners prevents freezing and slips on slush.',
    arabicWhyNeeded: 'حماية القدمين من البرودة الشديدة والبلل، مع نعال مطاطية تمنع الانزلاق على الجليد والثلج الذائب.'
  },
  {
    name: 'Thermal Base Layers (Merino Wool / Polypropylene)',
    arabicName: 'ملابس داخلية حرارية (صوف ميرينو أو ألياف صناعية)',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 200,
    whyNeeded: 'Never wear 100% cotton in freezing weather (cotton traps sweat and freezes). Moisture-wicking base layer keeps skin dry.',
    arabicWhyNeeded: 'يمنع ارتداء الملابس القطنية في البرد القارس لأنها تمتص العرق وتبرد؛ الألياف الحرارية تبقي الجسم جافاً ودافئاً.'
  },
  {
    name: 'Winter Snowsuits & Snow Pants for 3 Children',
    arabicName: 'بناطيل وبدلات ثلجية للأطفال للمدرسة واللعب',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 220,
    whyNeeded: 'Alberta elementary schools hold outdoor recess down to -20°C. Children are not allowed outside without snow pants and winter boots.',
    arabicWhyNeeded: 'تسمح مدارس ألبرتا باللعب في الساحات الخارجية حتى درجة -20 مئوية؛ ويُلزم الطلاب بارتداء بنطال الثلج للخروج.'
  },
  {
    name: 'Thermal Gloves, Mittens, Toques (Beanies) & Balaclavas',
    arabicName: 'قفازات ثلجية سميكة وقبعات صوفية وأقنعة تدفئة الوجه',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 150,
    whyNeeded: 'Exposed skin can develop frostbite within 10–20 minutes at -25°C wind chill. Mittens keep young children hands warmer than fingered gloves.',
    arabicWhyNeeded: 'الجلد المكشوف قد يتعرض لعضة الصقيع خلال دقائق في الرياح الباردة؛ القفازات ذات الإصبع الواحد أدفأ للأطفال الصغار.'
  },
  {
    name: 'Vehicle Winter Preparation Kit',
    arabicName: 'حقيبة تجهيز السيارة للشتاء الكندي',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 120,
    whyNeeded: 'Includes outdoor heavy-duty block heater extension cord, telescoping snow brush/ice scraper, -40°C washer fluid, and booster cables.',
    arabicWhyNeeded: 'سلك تمديد كهربائي لتشغيل سخان محرك السيارة ليلاً، ومكنسة ثلج ومكشطة جليد، ومحلول زجاج -40 وكوابل اشتراك.'
  },
  {
    name: 'Dedicated Winter Tires on Wheels (Michelin / Bridgestone)',
    arabicName: 'طقم 4 إطارات شتوية مخصصة على جنوط منفصلة',
    priority: 'MUST HAVE',
    estimatedCostFamilyCAD: 1250,
    whyNeeded: 'All-season rubber hardens below +7°C. Dedicated winter compound remains pliable, reducing stopping distance on black ice by up to 40%.',
    arabicWhyNeeded: 'إطارات كل الفصول تتصلب تحت 7 درجات مئوية؛ الإطارات الشتوية تحافظ على مرونتها وتقلل مسافة التوقف على الجليد بنسبة 40%.'
  },
  {
    name: 'Ultrasonic Home Cool/Warm Mist Humidifiers',
    arabicName: 'أجهزة ترطيب الهواء للمنزل وغرف النوم',
    priority: 'NICE TO HAVE',
    estimatedCostFamilyCAD: 140,
    whyNeeded: 'Calgary winter air is exceptionally dry; indoor home heating drops humidity below 15%, causing dry skin and nosebleeds for Gulf newcomers.',
    arabicWhyNeeded: 'هواء كالغاري شتاءً جاف جداً؛ التدفئة المنزلية تخفض الرطوبة لأقل من 15% مما يسبب جفاف البشرة ورعاف الأنف.'
  },
  {
    name: 'Portable Lithium Jump Starter Battery Pack',
    arabicName: 'جهاز شحن وبدء تشغيل بطارية السيارة المحمول',
    priority: 'NICE TO HAVE',
    estimatedCostFamilyCAD: 95,
    whyNeeded: 'Extreme cold snaps weaken car 12V batteries. A compact lithium booster allows self-starting without waiting for roadside assistance.',
    arabicWhyNeeded: 'البرد القارس يضعف بطارية السيارة؛ يتيح لك تشغيل سيارتك بنفسك دون انتظار مساعدة الطريق لساعات.'
  }
];

export const calgaryClimatePhenomena = {
  chinooks: {
    title: 'The Chinook Phenomenon (Warm Rocky Mountain Winds)',
    arabicTitle: 'ظاهرة رياح الشينوك (الرياح الدافئة القادمة من الجبال)',
    description: 'Calgary is unique in Canada for experiencing frequent "Chinooks"—warm, dry foehn winds that blow over the Rocky Mountains. A strong Chinook can raise winter temperatures by 15°C to 20°C in a matter of hours, melting road snow and offering unexpected breaks of spring-like warmth in the dead of January.',
    arabicDescription: 'تتميز كالغاري بظاهرة فريدة في كندا وهي رياح الشينوك الدافئة التي تعبر جبال روكي؛ وترفع درجة الحرارة بمقدار 15 إلى 20 درجة مئوية خلال ساعات قليلة لتذيب الثلوج وتمنح أجواء ربيعية في منتصف الشتاء.'
  },
  sunshine: {
    title: "Canada's Sunniest Major City (2,400+ Hours of Sun)",
    arabicTitle: 'أكثر مدن كندا الكبرى إشراقاً (أكثر من 2400 ساعة شمس سنوياً)',
    description: 'Calgary averages 333 sunny days and over 2,400 hours of bright sunshine annually. Unlike the gray, damp, overcast winters of Vancouver or Toronto, Calgary winters feature dazzling blue skies and bright sunlight, which significantly mitigates seasonal affective fatigue.',
    arabicDescription: 'تسجل كالغاري معدل 333 يوماً مشمساً سنوياً. على عكس شتاء فانكوفر أو تورونتو الرطب والغائم رمادياً، يتميز شتاء كالغاري بسماء زرقاء صافية وشمس ساطعة تمنح طاقة إيجابية.'
  },
  daylightCycle: {
    title: 'Seasonal Daylight Variance from Riyadh',
    arabicTitle: 'التباين الموسمي في ساعات النهار (مقارنة بالرياض)',
    description: 'In Riyadh, daylight varies moderately between 10.5 and 13.5 hours year-round. In Calgary (latitude 51°N), summer offers nearly 16.5 hours of sunlight (sun sets after 10:00 PM in June), while winter contracts to 7.5 hours of daylight (sun rises at 8:40 AM and sets around 4:30 PM in late December).',
    arabicDescription: 'في الرياض يتراوح النهار بين 10.5 و 13.5 ساعة. أما في كالغاري (خط عرض 51 شمالاً)، يمتد النهار صيفاً إلى 16.5 ساعة وتغرب الشمس بعد العاشرة ليلاً، بينما يقصر شتاءً إلى 7.5 ساعات فقط.'
  }
};
