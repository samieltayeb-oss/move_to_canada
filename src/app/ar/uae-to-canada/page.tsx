'use client';

import React from 'react';
import Link from 'next/link';
import { PlaneTakeoff, ArrowRight, DollarSign, Car, GraduationCap } from 'lucide-react';

export default function UaeToCanadaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" dir="rtl">
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <PlaneTakeoff className="w-4 h-4" />
          <span>دليل الانتقال العائلي: من الإمارات العربية المتحدة إلى كندا 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          انتقال العائلة من دبي وأبوظبي إلى كندا: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            تخطيط شامل للمعيشة والوظائف والمدارس
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          انتقال مدروس للعائلات المقيمة في الإمارات. مقارنة تكاليف المعيشة بين دبي والمدن الكندية الكبرى، ومعادلة رخصة القيادة الإشرافية من هيئة الطرق والمواصلات RTA، والتحول من المدارس الخاصة إلى التعليم الكندي العام.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/register"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-extrabold text-base shadow-xl shadow-emerald-950/60 transition-all flex items-center justify-center gap-2"
          >
            <span>ابدأ خطة انتقال عائلتك مجاناً</span>
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
          <h3 className="text-lg font-bold text-white">رخصة القيادة وشهادة RTA</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            احرص على استخراج <strong>شهادة خبرة قيادة وتاريخ الحوادث من هيئة الطرق والمواصلات (RTA) أو شرطة أبوظبي</strong> مصدقة ومترجمة، حيث تمنحك حق دخول الاختبار النهائي مباشرة وتوفير سنة كاملة من فترات الانتظار.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">مقارنة تكاليف المعيشة (دبي vs كندا)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            بينما لا توجد ضريبة دخل في الإمارات، فإن إيجارات المنازل ومصاريف المدارس الخاصة في دبي تتجاوز بكثير تكاليف المعيشة في ألبرتا، حيث التعليم المدرسي والتأمين الصحي مجانيان تماماً لحاملي الإقامة الدائمة.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">المساعدات الحكومية للأطفال (CCB)</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            يحصل القادمون الجدد على إعانة الطفل الكندية (CCB) التي تصل إلى $8,157 سنوياً لكل طفل دون السادسة و$6,883 للأطفال من 6 إلى 17 سنة بناءً على إقرار الدخل العالمي للسنة الأولى.
          </p>
        </div>
      </div>
    </div>
  );
}
