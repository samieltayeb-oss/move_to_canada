'use client';

import React, { Suspense } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { ArrowLeft, Shield, CheckCircle2 } from 'lucide-react';

function PaymentCancelContent() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8">
      <div className="w-16 h-16 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 mx-auto">
        <Shield className="w-8 h-8" />
      </div>

      <div className="space-y-3">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {isAr ? 'لم تتم عملية الدفع' : 'Checkout Was Not Completed'}
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-lg mx-auto">
          {isAr
            ? 'لم يتم خصم أي مبالغ من بطاقتك. جميع بيانات ملفك العائلي وسيناريوهات الانتقال الخاصة بك محفوظة تماماً.'
            : 'No charges were made to your payment method. Your family profile, saved data, and relocation scenarios remain completely preserved.'}
        </p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-5 text-left rtl:text-right text-xs text-slate-400 space-y-2">
        <div className="flex items-center gap-2 text-slate-300 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{isAr ? 'بياناتك دائماً في أمان' : 'Your Data is Always Safe'}</span>
        </div>
        <p>
          {isAr
            ? 'يمكنك متابعة استخدام باقة الاستكشاف المجانية أو الترقية في أي وقت يناسبك.'
            : 'You can continue utilizing the free Explore tier to benchmark Canadian cities, or upgrade whenever your family is ready.'}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
        <Link
          href="/pricing"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs sm:text-sm font-bold shadow-md transition-all"
        >
          {isAr ? 'العودة إلى صفحة الباقات والأسعار' : 'Return to Pricing'}
        </Link>
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4 rtl:rotate-180" />
          <span>{isAr ? 'متابعة الاستخدام المجاني' : 'Continue Free Explore'}</span>
        </Link>
      </div>
    </div>
  );
}

export default function PaymentCancelPage() {
  return (
    <Suspense fallback={<div className="text-center p-12 text-slate-400">Loading...</div>}>
      <PaymentCancelContent />
    </Suspense>
  );
}
