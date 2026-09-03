/**
 * NEXORA MOVE — CANONICAL COMMERCIAL PLANS REGISTRY
 * 
 * Single source of truth for pricing, billing types, feature limits, and Stripe price bindings.
 * All prices and limits are referenced from this file — NEVER hardcoded across components.
 */

import { COMMERCIAL_CONFIG } from './features';

export type PlanId = 'FREE' | 'MOVE_PASS' | 'PRO_MONTHLY' | 'PRO_ANNUAL' | 'CONCIERGE';
export type BillingType = 'FREE' | 'ONE_TIME' | 'MONTHLY' | 'ANNUAL';

export interface PlanFeatureLimit {
  maxRelocationScenarios: number; // e.g. 1, 4, Infinity
  maxAtsResumeTailoring: number; // 0 = preview only, 1 = single ATS resume, Infinity = unlimited
  coverLetterGeneration: boolean;
  jobApplicationTracker: boolean;
  interviewPrepEngine: boolean;
  advancedCityComparison: boolean;
  pdfRelocationBlueprintExport: boolean;
  benefitsPersonalizationFull: boolean;
  housingAffordabilityDetail: boolean;
  conciergeOneOnOneSession: boolean;
}

export interface CommercialPlan {
  id: PlanId;
  tierRank: number; // 0: Free, 1: Move Pass, 2: Pro, 3: Concierge
  name: string;
  displayName: string;
  arabicDisplayName: string;
  tagline: string;
  arabicTagline: string;
  billingType: BillingType;
  priceCAD: number;
  regularPriceCAD: number;
  priceSAR: number;
  stripePriceIdTest: string;
  stripePriceIdLive: string;
  isActive: boolean;
  isFeatured: boolean;
  badge?: string;
  arabicBadge?: string;
  limits: PlanFeatureLimit;
  features: string[];
  arabicFeatures: string[];
}

export const COMMERCIAL_PLANS: Record<PlanId, CommercialPlan> = {
  FREE: {
    id: 'FREE',
    tierRank: 0,
    name: 'Explore',
    displayName: 'NEXORA MOVE — Explore',
    arabicDisplayName: 'نيكسورا موف — استكشاف',
    tagline: 'Start your journey. Explore verified Canadian benchmarks with no commitment.',
    arabicTagline: 'ابدأ رحلتك واستكشف المعايير الكندية المعتمدة مجاناً وبدون أي التزام.',
    billingType: 'FREE',
    priceCAD: 0,
    regularPriceCAD: 0,
    priceSAR: 0,
    stripePriceIdTest: '',
    stripePriceIdLive: '',
    isActive: true,
    isFeatured: false,
    limits: {
      maxRelocationScenarios: 1,
      maxAtsResumeTailoring: 0,
      coverLetterGeneration: false,
      jobApplicationTracker: false,
      interviewPrepEngine: false,
      advancedCityComparison: false,
      pdfRelocationBlueprintExport: false,
      benefitsPersonalizationFull: false,
      housingAffordabilityDetail: false,
      conciergeOneOnOneSession: false
    },
    features: [
      'Personal household & family profile setup',
      '1 active relocation scenario (Alberta, Ontario, or BC)',
      'Basic cost of living & statutory tax preview',
      'General healthcare, schools, and banking guides',
      'Islamic community & mosque locator directory',
      'Newcomer 72-hour arrival checklist overview'
    ],
    arabicFeatures: [
      'إنشاء ملف العائلة والميزانية التقديرية',
      'خطة انتقال نشطة واحدة (ألبرتا أو أونتاريو أو بريتيش كولومبيا)',
      'معاينة أساسية لتكاليف المعيشة وضرائب الدخل الرسمية',
      'دليل عام للمدارس والتأمين الصحي والبنوك للمبتدئين',
      'دليل المساجد والمراكز الإسلامية والأطعمة الحلال',
      'قائمة مهام الوصول الأولى لكندا (أول 72 ساعة)'
    ]
  },

  MOVE_PASS: {
    id: 'MOVE_PASS',
    tierRank: 1,
    name: 'Move Pass',
    displayName: 'NEXORA MOVE — Move Pass',
    arabicDisplayName: 'نيكسورا موف — تصريح الانتقال',
    tagline: 'The complete family relocation intelligence blueprint. Pay once, plan with clarity.',
    arabicTagline: 'الخطة الشاملة لانتقال واستقرار العائلة في كندا. دفعة واحدة بدون اشتراك دوري.',
    billingType: 'ONE_TIME',
    priceCAD: COMMERCIAL_CONFIG.FOUNDING_PRICE_ENABLED ? 49 : 79,
    regularPriceCAD: 79,
    priceSAR: Math.round((COMMERCIAL_CONFIG.FOUNDING_PRICE_ENABLED ? 49 : 79) * COMMERCIAL_CONFIG.CAD_SAR_EXCHANGE_RATE),
    stripePriceIdTest: 'price_test_move_pass_49',
    stripePriceIdLive: 'price_live_move_pass_79',
    isActive: true,
    isFeatured: true,
    badge: 'MOST POPULAR • FOUNDING OFFER',
    arabicBadge: 'الأكثر اختياراً • عرض العائلات المؤسسة',
    limits: {
      maxRelocationScenarios: 4,
      maxAtsResumeTailoring: 1,
      coverLetterGeneration: false,
      jobApplicationTracker: false,
      interviewPrepEngine: false,
      advancedCityComparison: true,
      pdfRelocationBlueprintExport: true,
      benefitsPersonalizationFull: true,
      housingAffordabilityDetail: true,
      conciergeOneOnOneSession: false
    },
    features: [
      'Everything in Explore tier',
      'Up to 4 side-by-side relocation scenarios (Compare My Life)',
      '12-City Relocation Value Index with custom family weights',
      'Personalized CCB, ACFB, OCB & BCFB child benefits calculator',
      'Comprehensive 3-bed / 4-bed rental & property cost analysis',
      '1 tailored ATS-compliant Canadian resume generation',
      'Detailed 90-day settlement blueprint & exportable PDF dossier',
      'Non-reciprocal Saudi driver licence credit step-by-step roadmap'
    ],
    arabicFeatures: [
      'جميع مزايا باقة الاستكشاف المجانية',
      'مقارنة مباشرة حتى 4 سيناريوهات انتقال جنباً إلى جنب',
      'مؤشر القيمة ومفاضلة 12 مدينة كندية حسب أولويات عائلتك',
      'حاسبة المساعدات الحكومية المخصصة (CCB وACFB وOCB وBCFB)',
      'تحليل إيجارات وتكاليف المنازل لـ 3 و4 غرف نوم',
      'توليد سيرة ذاتية كندية احترافية متوافقة مع أنظمة ATS',
      'خطة الاستقرار المفصلة لأول 90 يوماً وتصدير ملف العائلة PDF',
      'خريطة طريق معادلة رخصة القيادة السعودية بدون فترات انتظار'
    ]
  },

  PRO_MONTHLY: {
    id: 'PRO_MONTHLY',
    tierRank: 2,
    name: 'Pro',
    displayName: 'NEXORA MOVE — Pro Career & Relocation',
    arabicDisplayName: 'نيكسورا موف — المحترف للوظائف والانتقال',
    tagline: 'Unlimited career acceleration, ATS optimization, and multi-scenario relocation tools.',
    arabicTagline: 'تسريع المسار الوظيفي الكندي، وتحسين السيرة الذاتية اللامحدود، وإدارة التقديمات.',
    billingType: 'MONTHLY',
    priceCAD: 19.99,
    regularPriceCAD: 19.99,
    priceSAR: Math.round(19.99 * COMMERCIAL_CONFIG.CAD_SAR_EXCHANGE_RATE),
    stripePriceIdTest: 'price_test_pro_monthly_1999',
    stripePriceIdLive: 'price_live_pro_monthly_1999',
    isActive: COMMERCIAL_CONFIG.PRO_ENABLED,
    isFeatured: false,
    badge: 'FOR ACTIVE JOB SEEKERS',
    arabicBadge: 'للباحثين الجادين عن عمل',
    limits: {
      maxRelocationScenarios: 999,
      maxAtsResumeTailoring: 999,
      coverLetterGeneration: true,
      jobApplicationTracker: true,
      interviewPrepEngine: true,
      advancedCityComparison: true,
      pdfRelocationBlueprintExport: true,
      benefitsPersonalizationFull: true,
      housingAffordabilityDetail: true,
      conciergeOneOnOneSession: false
    },
    features: [
      'Everything in Move Pass included during active subscription',
      'Unlimited relocation scenarios across all 12 Canadian cities',
      'Unlimited ATS resume tailoring mapped to Canadian NOC codes',
      'AI-powered job description keyword alignment & scoring',
      'Targeted cover letter generator for Canadian employers',
      'Job application Kanban tracker & follow-up reminders',
      'Canadian interview preparation simulator & salary negotiator',
      'Self-serve Stripe billing portal: Cancel anytime with 1-click'
    ],
    arabicFeatures: [
      'جميع مميزات باقة Move Pass مشمولة طوال فترة الاشتراك',
      'عدد لا محدود من خطط وسيناريوهات الانتقال لـ 12 مدينة كندية',
      'تعديل وتكييف لا محدود للسيرة الذاتية متوافق مع نظام التصنيف NOC',
      'مطابقة الكلمات المفتاحية للوظائف ورفع نسبة قبول السيرة الذاتية',
      'إنشاء خطابات تقديم (Cover Letters) مخصصة للشركات الكندية',
      'لوحة متابعة وإدارة تقديمات الوظائف والتنبيهات',
      'محاكي المقابلات الوظيفية الكندية وتكتيكات التفاوض على الراتب',
      'بوابة اشتراك ذاتية: إمكانية الإلغاء في أي لحظة بنقرة واحدة'
    ]
  },

  PRO_ANNUAL: {
    id: 'PRO_ANNUAL',
    tierRank: 2,
    name: 'Pro Annual',
    displayName: 'NEXORA MOVE — Pro Annual',
    arabicDisplayName: 'نيكسورا موف — المحترف السنوي',
    tagline: 'Annual career companion with two months free.',
    arabicTagline: 'الاشتراك السنوي الشامل مع شهرين مجاناً.',
    billingType: 'ANNUAL',
    priceCAD: 149,
    regularPriceCAD: 239.88,
    priceSAR: Math.round(149 * COMMERCIAL_CONFIG.CAD_SAR_EXCHANGE_RATE),
    stripePriceIdTest: 'price_test_pro_annual_149',
    stripePriceIdLive: 'price_live_pro_annual_149',
    isActive: COMMERCIAL_CONFIG.PRO_ANNUAL_ENABLED,
    isFeatured: false,
    limits: {
      maxRelocationScenarios: 999,
      maxAtsResumeTailoring: 999,
      coverLetterGeneration: true,
      jobApplicationTracker: true,
      interviewPrepEngine: true,
      advancedCityComparison: true,
      pdfRelocationBlueprintExport: true,
      benefitsPersonalizationFull: true,
      housingAffordabilityDetail: true,
      conciergeOneOnOneSession: false
    },
    features: ['All Pro features with 38% annual discount'],
    arabicFeatures: ['جميع مزايا باقة المحترف بخصم سنوي 38%']
  },

  CONCIERGE: {
    id: 'CONCIERGE',
    tierRank: 3,
    name: 'Family Concierge',
    displayName: 'NEXORA MOVE — Family Concierge Plan',
    arabicDisplayName: 'نيكسورا موف — المساعد العائلي الخاص',
    tagline: 'Personalized human relocation guidance and comprehensive scenario audit.',
    arabicTagline: 'مراجعة وتخطيط مخصص وشامل لخطة انتقال العائلة مع جلسة استشارية.',
    billingType: 'ONE_TIME',
    priceCAD: 249,
    regularPriceCAD: 249,
    priceSAR: Math.round(249 * COMMERCIAL_CONFIG.CAD_SAR_EXCHANGE_RATE),
    stripePriceIdTest: 'price_test_concierge_249',
    stripePriceIdLive: 'price_live_concierge_249',
    isActive: COMMERCIAL_CONFIG.CONCIERGE_ENABLED,
    isFeatured: false,
    badge: '1-ON-1 RELOCATION ADVISORY',
    arabicBadge: 'جلسة استشارية وتخطيط عائلي مخصص',
    limits: {
      maxRelocationScenarios: 999,
      maxAtsResumeTailoring: 999,
      coverLetterGeneration: true,
      jobApplicationTracker: true,
      interviewPrepEngine: true,
      advancedCityComparison: true,
      pdfRelocationBlueprintExport: true,
      benefitsPersonalizationFull: true,
      housingAffordabilityDetail: true,
      conciergeOneOnOneSession: true
    },
    features: [
      'Includes full Move Pass lifetime access + 3 months Pro Career Suite',
      'One-on-one 60-minute video relocation planning consultation',
      'Personalized family budget, taxation & benefits audit review',
      'Tailored neighbourhood & school recommendations for your children',
      'Professional human review of 1 ATS Canadian finance / tech resume',
      'Direct email concierge support during your first 90 days in Canada',
      'Note: Informational relocation planning only — NOT immigration legal advice'
    ],
    arabicFeatures: [
      'يشمل تصريح Move Pass الدائم بالإضافة إلى 3 أشهر في باقة المحترف',
      'جلسة استشارية وتخطيطية خاصة لمدة 60 دقيقة عبر الفيديو',
      'مراجعة وتدقيق شخصي لميزانية العائلة والضرائب والمساعدات الحكومية',
      'ترشيح مخصص لأفضل الأحياء السكنية والمدارس المناسبة لأعمار أطفالك',
      'مراجعة وتدقيق بشري احترافي لسيرتك الذاتية الموجهة للشركات الكندية',
      'دعم مباشر عبر البريد الإلكتروني خلال أول 90 يوماً من استقرارك في كندا',
      'تنبيه: الخدمة مخصصة للتخطيط اللوجستي والمالي ولا تتضمن استشارات قانونية للهجرة'
    ]
  }
};

/**
 * Returns a plan definition by its ID.
 */
export function getPlan(planId: PlanId): CommercialPlan {
  return COMMERCIAL_PLANS[planId] || COMMERCIAL_PLANS.FREE;
}

/**
 * Returns all active plans for public display.
 */
export function getActivePlans(): CommercialPlan[] {
  return Object.values(COMMERCIAL_PLANS).filter(p => p.isActive);
}
