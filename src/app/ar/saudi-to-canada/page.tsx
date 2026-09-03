'use client';

import React from 'react';
import Link from 'next/link';
import { PlaneTakeoff, ArrowRight, DollarSign, Car, GraduationCap } from 'lucide-react';

export default function SaudiToCanadaPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12" dir="rtl">
      {/* 1. Hero Section */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border border-slate-800 p-8 sm:p-12 text-center space-y-6 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
          <PlaneTakeoff className="w-4 h-4" />
          <span>دليل الانتقال العائلي المعتمد: من المملكة العربية السعودية إلى كندا 2026</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          انتقال عائلتك من السعودية إلى كندا: <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
            خطوة بخطوة بأرقام رسمية موثوقة
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto font-light leading-relaxed">
          دليل عملي شامل للعائلات المقيمة في الرياض وجدة والدمام الحاصلة على الإقامة الدائمة (PR). تعرف على معادلة رخصة القيادة من المرور السعودي، وتحويل المدخرات، وتكاليف السكن والمدارس، والضرائب الكندية الفعلية.
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
            <span>باقات وتصاريح الانتقال</span>
          </Link>
        </div>
      </div>

      {/* 2. Key Differences Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Driving Licence */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Car className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">رخصة القيادة السعودية</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            كندا لا تعتمد التبديل التلقائي للرخصة السعودية، لكن إحضار <strong>شهادة بيان مدد وأجور / برنت المرور المترجم والمصدق</strong> يتيح لك تخطي مرحلة المتدرب والتقديم مباشرة لاختبار الطريق النهائي (Class 5 في ألبرتا وBC، أو G2/G في أونتاريو).
          </p>
        </div>

        {/* Banking & SAR Transfers */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <DollarSign className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">التحويلات البنكية والريال السعودي</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            يمكن فتح حساب بنكي كندي قبل مغادرة المملكة مع البنوك الستة الكبرى (RBC, TD, Scotiabank). يقدر سعر الصرف الرسمي بـ <strong>2.7204 ريال لكل دولار كندي</strong>، وتوفر البنوك بطاقات ائتمان للقادمين الجدد بدون تاريخ ائتماني كندي.
          </p>
        </div>

        {/* Schools & Islamic Community */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <GraduationCap className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white">المدارس والبيئة الإسلامية</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            التعليم الحكومي مجاني بالكامل للأطفال من الروضة حتى الثانوي. تتوفر مدارس إسلامية معتمدة في كالغاري وإدمونتون وميسيسوجا وسري برسوم تتراوح بين $2,200 و$7,500 سنوياً، مع انتشار واسع للمساجد ومتاجر اللحوم الحلال.
          </p>
        </div>
      </div>

      {/* 3. Calgary vs Toronto Comparison for Saudi Expats */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          مقارنة الوجهات الأكثر تفضيلاً للعائلات القادمة من السعودية
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-right border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-semibold">
                <th className="py-3 px-4">المعيار الأساسي</th>
                <th className="py-3 px-4 text-emerald-400">كالغاري (ألبرتا)</th>
                <th className="py-3 px-4 text-sky-400">تورونتو (أونتاريو)</th>
                <th className="py-3 px-4 text-purple-400">فانكوفر (بريتيش كولومبيا)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              <tr>
                <td className="py-3 px-4 font-bold text-white">إيجار شقة 3 غرف</td>
                <td className="py-3 px-4 text-emerald-300 font-bold">$2,345 CAD (~6,380 ر.س)</td>
                <td className="py-3 px-4">$3,850 CAD (~10,470 ر.س)</td>
                <td className="py-3 px-4">$4,200 CAD (~11,420 ر.س)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">ضريبة المبيعات الإقليمية</td>
                <td className="py-3 px-4 text-emerald-300 font-bold">0% PST (فقط 5% GST)</td>
                <td className="py-3 px-4">13% HST</td>
                <td className="py-3 px-4">12% (5% GST + 7% PST)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">انتظار التأمين الصحي العام</td>
                <td className="py-3 px-4 text-emerald-300 font-bold">فوري من اليوم الأول (0 يوم)</td>
                <td className="py-3 px-4">فوري من اليوم الأول (0 يوم)</td>
                <td className="py-3 px-4 text-amber-400">~75-90 يوم (يلزم تأمين مؤقت)</td>
              </tr>
              <tr>
                <td className="py-3 px-4 font-bold text-white">طبيعة الشتاء</td>
                <td className="py-3 px-4">بارد ومشمس مع رياح الشينوك الدافئة</td>
                <td className="py-3 px-4">رطب ومثلج مع تأثير البحيرات</td>
                <td className="py-3 px-4">معتدل وماطر (نادر التجمد)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
