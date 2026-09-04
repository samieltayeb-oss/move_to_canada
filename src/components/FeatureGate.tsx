'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { FeatureKey, hasFeatureAccess, getDefaultFreeEntitlement, UserEntitlementRecord } from '@/lib/entitlements';
import { COMMERCIAL_PLANS } from '@/config/plans';
import { Lock, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FeatureGateProps {
  feature: FeatureKey;
  children: React.ReactNode;
  previewContent?: React.ReactNode;
  fallbackTitle?: string;
  fallbackDescription?: string;
  recommendedTier?: 'MOVE_PASS' | 'PRO_MONTHLY';
}

export function FeatureGate({
  feature,
  children,
  previewContent,
  fallbackTitle,
  fallbackDescription,
  recommendedTier = 'MOVE_PASS'
}: FeatureGateProps) {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  const [activePlan, setActivePlan] = React.useState<string>('FREE');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedPlan = localStorage.getItem('nexora_move_active_plan');
        if (savedPlan) {
          setActivePlan(savedPlan);
        }
      } catch {}
    }
  }, []);

  const entitlement: UserEntitlementRecord = {
    userId: 'client_session',
    planId: (activePlan as any) || 'FREE',
    isMovePassPurchased: activePlan === 'MOVE_PASS' || activePlan === 'CONCIERGE',
    isProSubscribed: activePlan === 'PRO_MONTHLY' || activePlan === 'CONCIERGE',
    proExpiresAt: null,
    isConciergeCustomer: activePlan === 'CONCIERGE',
    isFoundingMember: false,
    grantedByAdmin: false,
    createdAt: new Date().toISOString()
  };

  const isUnlocked = hasFeatureAccess(entitlement, feature);

  if (isUnlocked) {
    return <>{children}</>;
  }

  const targetPlan = COMMERCIAL_PLANS[recommendedTier];

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/40 p-1">
      {/* 1. Preview Content with Blur */}
      <div className="relative pointer-events-none select-none filter blur-[3px] opacity-40 max-h-[280px] overflow-hidden">
        {previewContent || children}
      </div>

      {/* 2. Non-Hostile Conversion Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/85 to-transparent flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-3 shadow-lg shadow-amber-950/40">
          <Lock className="w-6 h-6" />
        </div>

        <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
          {targetPlan.badge || (isAr ? 'ميزة مخصصة' : 'PREMIUM FEATURE')}
        </span>

        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight max-w-md">
          {fallbackTitle || (isAr ? 'افتح التحليل الشامل المخصص لعائلتك' : 'Unlock Full Personalized Family Intelligence')}
        </h3>

        <p className="text-sm text-slate-300 max-w-lg mt-2 leading-relaxed">
          {fallbackDescription || (isAr
            ? `احصل على خطة الانتقال الكاملة، والمقارنات المتقدمة، وحاسبة المساعدات والضرائب الرسمية مقابل $${targetPlan.priceCAD} كندي دفعة واحدة.`
            : `Gain full access to side-by-side relocation models, custom benefits calculation, and full settlement blueprints for $${targetPlan.priceCAD} CAD one-time.`)}
        </p>

        {/* Clear pricing transparency */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {targetPlan.billingType === 'ONE_TIME'
              ? (isAr ? 'دفعة واحدة (لا يوجد اشتراك دوري)' : 'One-time payment (No recurring fees)')
              : (isAr ? 'اشتراك شهري (إلغاء في أي وقت)' : 'Monthly subscription (Cancel anytime)')}
          </span>
          <span className="text-slate-600">•</span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            {isAr ? 'حفظ دائم لبيانات عائلتك' : '100% Data preservation guarantee'}
          </span>
        </div>

        {/* Action Button */}
        <div className="mt-5 flex items-center gap-3">
          <Link
            href={`/pricing?highlight=${targetPlan.id}`}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-extrabold shadow-lg shadow-emerald-950/60 transition-all flex items-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>
              {isAr ? `افتح باستخدام ${targetPlan.arabicDisplayName}` : `Unlock with ${targetPlan.name}`}
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
          </Link>

          <Link
            href="/pricing"
            className="px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-sm font-semibold transition-all"
          >
            {isAr ? 'عرض جميع الباقات' : 'Compare Plans'}
          </Link>
        </div>
      </div>
    </div>
  );
}
