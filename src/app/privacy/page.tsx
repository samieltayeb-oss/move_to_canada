'use client';

import React from 'react';
import { ShieldCheck, Lock, EyeOff } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function PrivacyPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>PRIVACY & DATA PROTECTION POLICY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'سياسة الخصوصية وحماية البيانات' : 'Privacy Policy'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr ? 'آخر تحديث: سبتمبر 2026' : 'Last updated: September 2026'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
            <Lock className="w-4 h-4" />
            <span>{isAr ? 'عزل كامل للبيانات (RLS)' : 'Row-Level Security (RLS)'}</span>
          </div>
          <p className="text-xs text-slate-300">
            {isAr
              ? 'كل مستخدم يمتلك معرفاً مشفراً خاصاً. لا يمكن لأي مستخدم آخر الوصول إلى سيرتك الذاتية أو أرقام دخلك أو سيناريوهاتك.'
              : 'Every user record is isolated at the PostgreSQL database level using Supabase Row-Level Security. Cross-tenant data access is strictly blocked.'}
          </p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 space-y-2">
          <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase">
            <EyeOff className="w-4 h-4" />
            <span>{isAr ? 'لا نبيع بياناتك مطلقاً' : 'Zero Sale of Personal Data'}</span>
          </div>
          <p className="text-xs text-slate-300">
            {isAr
              ? 'نحن لا نبيع بياناتك الشخصية لأي طرف ثالث أو لشركات الإعلانات أو التوظيف.'
              : 'We do not sell, rent, or monetize your personal details, household data, or career documents to third-party ad networks or aggregators.'}
          </p>
        </div>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Information We Collect</h2>
          <p>
            We collect information you explicitly provide: account email, household structure (adults and children ages for benefit estimation), target destination cities, career history for resume generation, and payment transaction metadata via Stripe. We do NOT store credit card numbers on our servers.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Payment Security</h2>
          <p>
            All payment transactions are securely handled by <strong>Stripe Inc.</strong> under Level 1 PCI-DSS compliance. We receive only transaction confirmations, subscription statuses, and customer tokens.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Your Right to Delete</h2>
          <p>
            You may request complete account and data deletion at any time via your Account Settings or by emailing support. All associated database records and stored resume files are permanently deleted.
          </p>
        </section>
      </div>
    </div>
  );
}
