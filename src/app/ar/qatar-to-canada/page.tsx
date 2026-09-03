'use client';

import React from 'react';
import Link from 'next/link';
import { PlaneTakeoff, ArrowRight, DollarSign, Car, GraduationCap } from 'lucide-react';

export default function QatarToCanadaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" dir="rtl">
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <PlaneTakeoff className="w-4 h-4" />
          <span>دليل الانتقال العائلي: من قطر إلى كندا 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          انتقال عائلتك من الدوحة إلى كندا: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            تخطيط مالي ولوجستي ذكي للاستقرار الدائم
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          دليل العائلات المقيمة في الدوحة الحاصلة على الإقامة الدائمة الكندية. تعرف على كيفية توثيق رخصة القيادة القطرية، وإدارة المدخرات بالريال القطري، ومقارنة المقاطعات الكندية الكبرى.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2"
          >
            <span>ابدأ خطة الانتقال مجاناً</span>
            <ArrowRight className="w-5 h-5 rtl:rotate-180" />
          </Link>
          <Link
            href="/pricing"
            className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-bold transition-all"
          >
            <span>عرض تصريح Move Pass</span>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">رخصة القيادة القطرية</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            استخرج <strong>شهادة بيانات رخصة القيادة من الإدارة العامة للمرور عبر تطبيق مطراش2</strong> مصدقة من وزارة الخارجية القطرية لتخطي فترات التدريب والحصول على الرخصة الكندية الكاملة.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">إدارة المدخرات والتحويلات</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            تتيح البنوك الكندية تحويل الأموال بالريال القطري مباشرة إلى حسابات Chequing كندية مع إعفاءات من رسوم الصيانة الشهرية لمدة عام كامل ضمن برامج القادمين الجدد.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">المدارس واستقرار الأطفال</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            يوفر نظام التعليم الكندي مراكز استقبال خاصة لتقييم مستوى اللغة الإنجليزية للأطفال (ELL) مجاناً، مع إمكانية التسجيل في برامج المدارس البديلة أو المدارس الإسلامية المعتمدة.
          </p>
        </div>
      </div>
    </div>
  );
}
