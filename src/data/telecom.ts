export interface InternetPlan {
  id: string;
  provider: 'TELUS PureFibre' | 'Rogers Xfinity';
  speedTier: string;
  downloadSpeedMbps: number;
  uploadSpeedMbps: number;
  isSymmetrical: boolean;
  technology: string;
  promoPriceMonthlyCAD: number;
  regularPriceMonthlyCAD: number;
  contractTermMonths: number;
  bestFor: 'Work from Home' | 'Family Streaming & Gaming' | 'Best Value' | 'Power Users';
  arabicBestFor: string;
  notes: string;
  arabicNotes: string;
  sourceId: string;
}

export const internetPlans: InternetPlan[] = [
  {
    id: 'telus-250',
    provider: 'TELUS PureFibre',
    speedTier: 'PureFibre 250',
    downloadSpeedMbps: 250,
    uploadSpeedMbps: 250,
    isSymmetrical: true,
    technology: '100% Fibre-to-the-Home (FTTH optical glass)',
    promoPriceMonthlyCAD: 65,
    regularPriceMonthlyCAD: 95,
    contractTermMonths: 24,
    bestFor: 'Best Value',
    arabicBestFor: 'أفضل قيمة اقتصادية',
    notes: 'Symmetrical 250 Mbps upload and download. Excellent for 2-3 simultaneous 4K streams and standard browsing.',
    arabicNotes: 'سرعات متماثلة 250 ميجابت للتحميل والرفع عبر ألياف بصرية كاملة. ممتازة للتصفح ومشاهدة 4K على عدة أجهزة.',
    sourceId: 'SRC-TEL-001'
  },
  {
    id: 'telus-500',
    provider: 'TELUS PureFibre',
    speedTier: 'PureFibre 500',
    downloadSpeedMbps: 500,
    uploadSpeedMbps: 500,
    isSymmetrical: true,
    technology: '100% Fibre-to-the-Home (FTTH optical glass)',
    promoPriceMonthlyCAD: 75,
    regularPriceMonthlyCAD: 105,
    contractTermMonths: 24,
    bestFor: 'Work from Home',
    arabicBestFor: 'مثالي للعمل عن بُعد من المنزل',
    notes: 'Symmetrical 500 Mbps. Zero latency (1-3ms ping). Ideal for executive Zoom/Teams conferences and cloud corporate backups.',
    arabicNotes: 'سرعة متماثلة 500 ميجابت وزمن استجابة فائق (1-3 ميلي ثانية). مثالي لاجتماعات زوم والعمل المالي عن بُعد.',
    sourceId: 'SRC-TEL-001'
  },
  {
    id: 'telus-1000',
    provider: 'TELUS PureFibre',
    speedTier: 'Gigabit Internet',
    downloadSpeedMbps: 1000,
    uploadSpeedMbps: 1000,
    isSymmetrical: true,
    technology: '100% Fibre-to-the-Home (FTTH optical glass)',
    promoPriceMonthlyCAD: 85,
    regularPriceMonthlyCAD: 120,
    contractTermMonths: 24,
    bestFor: 'Family Streaming & Gaming',
    arabicBestFor: 'مثالي للعائلات متعددة الأجهزة والألعاب',
    notes: '1,000 Mbps symmetrical. Supports 15+ connected smart home devices, simultaneous 4K streams, and large downloads without buffering.',
    arabicNotes: '1000 ميجابت متماثل يدعم أكثر من 15 جهازاً ذكياً في وقت واحد مع تصفح فائق السرعة دون أي تباطؤ.',
    sourceId: 'SRC-TEL-001'
  },
  {
    id: 'rogers-500',
    provider: 'Rogers Xfinity',
    speedTier: 'Xfinity 500',
    downloadSpeedMbps: 500,
    uploadSpeedMbps: 50,
    isSymmetrical: false,
    technology: 'Hybrid Fibre-Coax (Cable)',
    promoPriceMonthlyCAD: 75,
    regularPriceMonthlyCAD: 110,
    contractTermMonths: 24,
    bestFor: 'Family Streaming & Gaming',
    arabicBestFor: 'بديل رائع في المناطق التي لا تصلها ألياف تيلوس',
    notes: 'High download speed; upload speed capped at 50 Mbps due to coaxial network. 100% available across virtually all Calgary communities.',
    arabicNotes: 'سرعة تحميل عالية ولكن سرعة الرفع محدودة بـ 50 ميجابت بسبب أسلاك الكيبل. متوفر في كل أحياء كالغاري تقريباً.',
    sourceId: 'SRC-TEL-002'
  },
  {
    id: 'rogers-1000',
    provider: 'Rogers Xfinity',
    speedTier: 'Xfinity Gigabit',
    downloadSpeedMbps: 1000,
    uploadSpeedMbps: 100,
    isSymmetrical: false,
    technology: 'Hybrid Fibre-Coax (Cable)',
    promoPriceMonthlyCAD: 85,
    regularPriceMonthlyCAD: 125,
    contractTermMonths: 24,
    bestFor: 'Work from Home',
    arabicBestFor: 'سرعة جيجابت للمنازل ذات الكيبل',
    notes: '1,000 Mbps down / 100 Mbps up. Broad coverage across mature Calgary suburbs where Telus fiber is not yet trenched.',
    arabicNotes: '1000 ميجابت تحميل مع 100 ميجابت رفع، يغطي الأحياء التي لم تكتمل فيها شبكة الألياف البصرية.',
    sourceId: 'SRC-TEL-002'
  }
];

export interface MobilePlan {
  id: string;
  carrier: string;
  tier: 'Tier 1 (Premium)' | 'Tier 2 (Mid-Tier)' | 'Tier 3 (Budget / Digital)';
  planName: string;
  monthlyPriceCAD: number;
  monthlyPrice2AdultLinesCAD: number;
  dataAllowanceGB: string;
  networkType: '5G' | '5G+' | '4G LTE';
  usRoamingIncluded: boolean;
  activationFeeCAD: number;
  saudiCallingMethod: string;
  sourceId: string;
}

export const mobilePlans: MobilePlan[] = [
  {
    id: 'public-mobile-50',
    carrier: 'Public Mobile (TELUS network)',
    tier: 'Tier 3 (Budget / Digital)',
    planName: '5G Unlimited 50GB',
    monthlyPriceCAD: 34,
    monthlyPrice2AdultLinesCAD: 68,
    dataAllowanceGB: '50 GB at 5G speed',
    networkType: '5G',
    usRoamingIncluded: false,
    activationFeeCAD: 0, // CRTC banned in June 2026
    saudiCallingMethod: 'Use WhatsApp / FaceTime Audio ($0 data). Add Skype Out or long-distance VoIP for landlines.',
    sourceId: 'SRC-TEL-003'
  },
  {
    id: 'freedom-75',
    carrier: 'Freedom Mobile (Videotron)',
    tier: 'Tier 3 (Budget / Digital)',
    planName: 'Canada-US 75GB 5G',
    monthlyPriceCAD: 40,
    monthlyPrice2AdultLinesCAD: 80,
    dataAllowanceGB: '75 GB at 5G speed',
    networkType: '5G',
    usRoamingIncluded: true,
    activationFeeCAD: 0,
    saudiCallingMethod: 'Free seamless data roaming when traveling to the US. Use WhatsApp/FaceTime over data for Saudi calls.',
    sourceId: 'SRC-TEL-003'
  },
  {
    id: 'koodo-60',
    carrier: 'Koodo Mobile (TELUS flanker)',
    tier: 'Tier 2 (Mid-Tier)',
    planName: '5G Speed 60GB',
    monthlyPriceCAD: 44,
    monthlyPrice2AdultLinesCAD: 88,
    dataAllowanceGB: '60 GB at 5G speed',
    networkType: '5G',
    usRoamingIncluded: false,
    activationFeeCAD: 0,
    saudiCallingMethod: 'Optional $10/mo international long distance saver add-on drops Saudi rate to $0.45/min.',
    sourceId: 'SRC-TEL-003'
  },
  {
    id: 'fido-75',
    carrier: 'Fido (Rogers flanker)',
    tier: 'Tier 2 (Mid-Tier)',
    planName: '5G Data 75GB',
    monthlyPriceCAD: 45,
    monthlyPrice2AdultLinesCAD: 90,
    dataAllowanceGB: '75 GB at 5G speed',
    networkType: '5G',
    usRoamingIncluded: false,
    activationFeeCAD: 0,
    saudiCallingMethod: 'Rogers International Saver add-on ($7/mo) drops calls to Saudi Arabia to ~$0.45/min.',
    sourceId: 'SRC-TEL-003'
  },
  {
    id: 'telus-unlimited',
    carrier: 'TELUS Mobility',
    tier: 'Tier 1 (Premium)',
    planName: '5G+ Unlimited 100GB',
    monthlyPriceCAD: 70,
    monthlyPrice2AdultLinesCAD: 140,
    dataAllowanceGB: '100 GB at up to 2 Gbps 5G+',
    networkType: '5G+',
    usRoamingIncluded: false,
    activationFeeCAD: 0,
    saudiCallingMethod: 'Priority network QoS, family pooling, in-person store support across all Calgary malls.',
    sourceId: 'SRC-TEL-001'
  }
];
