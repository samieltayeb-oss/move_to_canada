'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { COMMERCIAL_PLANS, PlanId, CommercialPlan } from '@/config/plans';
import { COMMERCIAL_CONFIG } from '@/config/features';
import { Check, Sparkles, Shield, ArrowRight, Star, RefreshCw } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const router = useRouter();
  const { locale } = useApp();
  const [selectedCurrency, setSelectedCurrency] = useState<'CAD' | 'SAR'>('CAD');
  const [isLoadingCheckout, setIsLoadingCheckout] = useState<string | null>(null);

  const isAr = locale === 'ar';

  const handleCheckout = async (plan: CommercialPlan) => {
    if (plan.id === 'FREE') {
      router.push('/register');
      return;
    }

    setIsLoadingCheckout(plan.id);
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          planId: plan.id,
          referralCode: typeof window !== 'undefined' ? localStorage.getItem('nexora_referral_code') : ''
        })
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || 'Failed to initiate checkout. Please try again.');
      }
    } catch (err: unknown) {
      console.error('Checkout error:', err);
      alert('Network error connecting to checkout.');
    } finally {
      setIsLoadingCheckout(null);
    }
  };

  const getPriceDisplay = (plan: CommercialPlan) => {
    if (plan.priceCAD === 0) return isAr ? 'مجاني' : '$0';
    if (selectedCurrency === 'SAR') {
      return `${plan.priceSAR.toLocaleString()} ر.س`;
    }
    return `$${plan.priceCAD} CAD`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* 1. Header Banner */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          {isAr ? 'خطط وباقات الانتقال المعتمدة 2026' : 'VERIFIED 2026 RELOCATION PLANS'}
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          {isAr ? 'خطتك الذكية للاستقرار في كندا' : "Your Family's Intelligent Move to Canada"}
        </h1>

        <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
          {isAr
            ? 'قارن المدن الكندية، وتعرف على الضرائب والمساعدات الحكومية الفعلية، وجهّز مسارك المهني بأرقام موثوقة وبدون تكاليف مخفية.'
            : 'Explore Canadian cities, benchmark real taxation & government benefits, and accelerate your career with verified data and zero hidden fees.'}
        </p>

        {/* Currency Toggle */}
        <div className="pt-2 flex items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-semibold">{isAr ? 'العملة المعروضة:' : 'Display Currency:'}</span>
          <div className="inline-flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono">
            <button
              onClick={() => setSelectedCurrency('CAD')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                selectedCurrency === 'CAD' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              CAD ($)
            </button>
            <button
              onClick={() => setSelectedCurrency('SAR')}
              className={`px-3 py-1 rounded-lg font-bold transition-all ${
                selectedCurrency === 'SAR' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              SAR (ر.س)
            </button>
          </div>
        </div>

        {/* Currency Benchmark Disclosure (Section 11 Audit Gate) */}
        <p className="text-[11px] text-slate-400 font-mono pt-1">
          {isAr
            ? 'سعر صرف إرشادي تقديري (1 دولار كندي ≈ 2.7204 ريال سعودي - محدث في 2026-09-01). الفوترة الفعلية على Stripe تتم بالدولار الكندي (CAD).'
            : 'Approximate conversion benchmark (1 CAD ≈ 2.7204 SAR, rate updated 2026-09-01). Authoritative checkout is billed in CAD by Stripe.'}
        </p>
      </div>

      {/* 2. Founding Member Banner */}
      {COMMERCIAL_CONFIG.FOUNDING_PRICE_ENABLED && (
        <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-blue-500/10 border border-amber-500/30 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left rtl:sm:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Star className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {isAr ? 'عرض العائلات المؤسسة المحدود' : 'FOUNDING FAMILIES LAUNCH OFFER'}
              </div>
              <div className="text-sm text-slate-200 mt-0.5">
                {isAr 
                  ? 'خصم خاص لأول 100 عائلة: احصل على تصريح Move Pass الكامل مقابل $49 CAD فقط (بدلاً من $79 CAD).'
                  : 'Special launch pricing for the first 100 families: Get the full Move Pass for $49 CAD (Regular $79 CAD).'}
              </div>
            </div>
          </div>
          <div className="px-3 py-1.5 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300 font-mono text-xs font-bold whitespace-nowrap">
            {isAr ? 'وفر $30 CAD اليوم' : 'Save $30 CAD'}
          </div>
        </div>
      )}

      {/* 3. Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
        {(Object.keys(COMMERCIAL_PLANS) as PlanId[])
          .filter(id => id !== 'PRO_ANNUAL') // Keep 4 primary tiers
          .map(planId => {
            const plan = COMMERCIAL_PLANS[planId];
            const isFeatured = plan.isFeatured;

            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl flex flex-col justify-between p-6 transition-all ${
                  isFeatured
                    ? 'bg-slate-900/90 border-2 border-emerald-500/80 shadow-2xl shadow-emerald-950/60 ring-4 ring-emerald-500/20'
                    : 'bg-slate-900/50 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold uppercase tracking-wider shadow-md">
                    {isAr ? plan.arabicBadge : plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan Name & Tagline */}
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {isAr ? plan.arabicDisplayName : plan.displayName}
                  </div>
                  <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 min-h-[38px] leading-relaxed">
                    {isAr ? plan.arabicTagline : plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="mt-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-white">
                        {getPriceDisplay(plan)}
                      </span>
                      {plan.billingType === 'MONTHLY' && (
                        <span className="text-xs text-slate-400 font-medium">
                          {isAr ? '/ شهر' : '/ mo'}
                        </span>
                      )}
                    </div>

                    {/* Regular Price Cross-out if discounted */}
                    {plan.id === 'MOVE_PASS' && COMMERCIAL_CONFIG.FOUNDING_PRICE_ENABLED && (
                      <div className="text-xs text-slate-500 line-through mt-1">
                        {isAr ? 'السعر الأصلي: $79 CAD' : 'Regular Price: $79 CAD'}
                      </div>
                    )}

                    <div className="text-[11px] font-semibold text-emerald-400 mt-1">
                      {plan.billingType === 'FREE' && (isAr ? 'بدون بطاقة ائتمانية' : 'No credit card required')}
                      {plan.billingType === 'ONE_TIME' && (isAr ? 'دفعة واحدة • وصول دائم' : 'One-time payment • Lifetime access')}
                      {plan.billingType === 'MONTHLY' && (isAr ? 'إلغاء في أي وقت بنقرة واحدة' : 'Cancel anytime in 1-click')}
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isAr ? 'المزايا المشمولة:' : "What's Included:"}
                    </div>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {(isAr ? plan.arabicFeatures : plan.features).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Primary CTA */}
                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <button
                    onClick={() => handleCheckout(plan)}
                    disabled={isLoadingCheckout === plan.id}
                    className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all flex items-center justify-center gap-2 shadow-lg ${
                      isFeatured
                        ? 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-950/60'
                        : plan.id === 'FREE'
                          ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white'
                          : 'bg-slate-800 hover:bg-emerald-600 text-white'
                    }`}
                  >
                    {isLoadingCheckout === plan.id ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>{isAr ? 'جاري التحويل...' : 'Connecting...'}</span>
                      </>
                    ) : (
                      <>
                        <span>
                          {plan.id === 'FREE'
                            ? (isAr ? 'ابدأ مجاناً' : 'Get Started Free')
                            : plan.id === 'MOVE_PASS'
                              ? (isAr ? 'الحصول على تصريح Move Pass' : 'Get Move Pass ($49)')
                              : plan.id === 'PRO_MONTHLY'
                                ? (isAr ? 'اشترك في باقة المحترف' : 'Start Pro ($19.99/mo)')
                                : (isAr ? 'طلب المساعد العائلي' : 'Request Concierge ($249)')}
                        </span>
                        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
      </div>

      {/* 4. Trust & Legal Transparency Footer */}
      <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8 space-y-4 text-xs text-slate-400">
        <div className="flex items-center gap-2 text-slate-200 font-bold uppercase tracking-wider">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>{isAr ? 'التزام الشفافية والحدود القانونية' : 'Legal Transparency & Consumer Protection'}</span>
        </div>
        <p className="leading-relaxed">
          {isAr
            ? 'منصة NEXORA MOVE هي منصة برمجية ذكية للمعلومات والتخطيط اللوجستي والمالي والأسري للانتقال إلى كندا. المنصة ليست مكتب محاماة ولا تقدم استشارات قانونية للهجرة أو تمثيلاً لدى إدارة الهجرة الكندية (IRCC). جميع الحسابات هي تقديرات دقيقة مبنية على القوانين واللوائح الرسمية المعلنة لعام 2026.'
            : 'NEXORA MOVE provides relocation, financial modeling, and settlement planning intelligence tools. We are not an immigration law firm or registered immigration consultants (RCIC). We do not guarantee visa approvals, employment placement, or government entitlements. All figures are estimates calculated from published 2026 federal and provincial statutory parameters.'}
        </p>
        <div className="pt-2 flex flex-wrap items-center gap-4 text-slate-500">
          <Link href="/terms" className="hover:text-slate-300 underline underline-offset-2">
            {isAr ? 'شروط الخدمة' : 'Terms of Service'}
          </Link>
          <Link href="/privacy" className="hover:text-slate-300 underline underline-offset-2">
            {isAr ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </Link>
          <Link href="/refund-policy" className="hover:text-slate-300 underline underline-offset-2">
            {isAr ? 'سياسة الاسترجاع' : 'Refund Policy'}
          </Link>
          <Link href="/disclaimer" className="hover:text-slate-300 underline underline-offset-2">
            {isAr ? 'إخلاء المسؤولية القانونية' : 'Immigration Boundary Disclaimer'}
          </Link>
        </div>
      </div>
    </div>
  );
}
