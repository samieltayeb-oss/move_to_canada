'use client';

import React from 'react';
import { ShieldCheck, Database, CalendarCheck, Sparkles } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function TrustPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10 text-slate-300">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DATA PROVENANCE & METHODOLOGY TRUST CENTER</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'مركز الشفافية والموثوقية العلمية' : 'How NEXORA MOVE Uses Data'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr
            ? 'نظامنا الرياضي يعتمد حصراً على الإحصاءات الحكومية الرسمية والقوانين الكندية المنشورة لعام 2026.'
            : 'Our computational models rely exclusively on verified government statistics and statutory publications.'}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <Database className="w-6 h-6 text-sky-400" />
          <h2 className="text-base font-bold text-white">1. Official Statutory Sources</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            All personal income tax formulas, surtaxes, Canada Child Benefit (CCB), and provincial child benefits (ACFB, OCB, BCFB) are coded directly from Canada Revenue Agency (CRA) schedules and provincial Ministry of Finance statutes.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-3">
          <CalendarCheck className="w-6 h-6 text-emerald-400" />
          <h2 className="text-base font-bold text-white">2. Continuous Benchmarking</h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Rental data is synthesized from Canada Mortgage and Housing Corporation (CMHC) occupied averages and Urbanation/Rentals.ca current market asking rents. Fuel benchmarks are refreshed from Statistics Canada Table 18-10-0001.
          </p>
        </div>
      </div>

      {/* AI Transparency Clause */}
      <div className="rounded-2xl border border-purple-500/30 bg-purple-950/20 p-6 space-y-3">
        <div className="flex items-center gap-2 text-purple-300 font-bold text-sm uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>{isAr ? 'الشفافية في استخدام الذكاء الاصطناعي' : 'AI Transparency & Separation of Calculations'}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {isAr
            ? 'نحن نفرق بدقة بين الحسابات الضريبية والمالية الرسمية (التي يتم حسابها برمجياً بمعادلات حتمية 100%) وبين أدوات الذكاء الاصطناعي المستخدمة فقط لتنقيح صياغة السيرة الذاتية الكندية وتوليد خطابات التقديم. الذكاء الاصطناعي لا يخترع نسب الضرائب ولا يستنتج الأهلية القانونية.'
            : 'We strictly distinguish between deterministic mathematical calculations (taxes, childcare subsidies, net surplus, which run via 100% verified arithmetic algorithms) and AI recommendation tools (which are used strictly to optimize resume phrasing and match job description keywords). AI does NOT generate statutory tax rules.'}
        </p>
      </div>
    </div>
  );
}
