'use client';

import React from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { 
  Briefcase, 
  ShoppingBag, 
  Fuel, 
  Wallet, 
  ArrowRight
} from 'lucide-react';

export function HomeSummaryWidgets() {
  const { formatCurrency, isRtl } = useApp();

  return (
    <section className="py-8 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
            <h3 className="text-lg font-bold text-white tracking-tight">
              {isRtl ? 'لوحة ملخص المؤشرات الحيوية للعائلة' : 'Core Family Relocation Intelligence Brief'}
            </h3>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {isRtl ? 'تحديث: سبتمبر 2026' : 'Ref: September 2026'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Widget 1: Career Readiness */}
          <div className="glass-panel p-5 rounded-2xl border border-sky-500/20 hover:border-sky-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  ATS Ready: 88/100
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {isRtl ? 'الجاهزية المهنية والتوظيف' : 'Career Readiness'}
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                {isRtl ? 'مطابقة خلفية شركة البلاد المالية مع سوق كالغاري' : 'Albilad Capital experience mapped to Calgary capital markets'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'المطابقة الأعلى' : 'Top Match'}:</span>
                  <span className="font-semibold text-white">Investment Analyst (92%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'نطاق الراتب' : 'Salary Target'}:</span>
                  <span className="font-semibold text-emerald-400">{formatCurrency(88500)}–{formatCurrency(132000)}</span>
                </div>
              </div>
            </div>
            <Link 
              href="/career"
              className="mt-4 inline-flex items-center justify-between text-xs text-sky-400 hover:text-sky-300 font-medium group"
            >
              <span>{isRtl ? 'فتح مسرع التوظيف' : 'Open Career Accelerator'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Widget 2: Food & Grocery Intelligence */}
          <div className="glass-panel p-5 rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                  Food Report 2026
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {isRtl ? 'سلة الغذاء والتموين (5 أفراد)' : 'Family Grocery Budget'}
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                {isRtl ? 'حسابات تفصيلية حسب الأعمار مع اللحم الحلال' : 'Age-based nutrition model for 5 + 100% Halal meats'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'التكلفة الأسبوعية' : 'Weekly Target'}:</span>
                  <span className="font-semibold text-white">{formatCurrency(376)}/wk</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'الميزانية الشهرية' : 'Monthly Spend'}:</span>
                  <span className="font-semibold text-amber-400">{formatCurrency(1630)}/mo</span>
                </div>
              </div>
            </div>
            <Link 
              href="/groceries"
              className="mt-4 inline-flex items-center justify-between text-xs text-amber-400 hover:text-amber-300 font-medium group"
            >
              <span>{isRtl ? 'مقارنة الأسعار وكوستكو' : 'Costco & Superstore Planner'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Widget 3: Gas & Fuel Benchmark */}
          <div className="glass-panel p-5 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Fuel className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                  StatsCan 18-10-0001
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {isRtl ? 'أسعار البنزين والتنقل' : 'Calgary Fuel & Commute'}
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                {isRtl ? 'مؤشر أسعار الوقود في كالغاري وحساب المشاوير' : 'Official Statistics Canada Calgary pump benchmarks'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'بنزين 87 عادي' : 'Regular 87'}:</span>
                  <span className="font-semibold text-white">144.9¢/L ($1.45)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'وقود شهري متوقع' : 'Est. Monthly Fuel'}:</span>
                  <span className="font-semibold text-emerald-400">{formatCurrency(210)}/mo</span>
                </div>
              </div>
            </div>
            <Link 
              href="/fuel"
              className="mt-4 inline-flex items-center justify-between text-xs text-emerald-400 hover:text-emerald-300 font-medium group"
            >
              <span>{isRtl ? 'حاسبة استهلاك الوقود' : 'Fuel & Commute Engine'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Widget 4: Monthly Family Life Budget */}
          <div className="glass-panel p-5 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                  <Wallet className="w-5 h-5" />
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                  Comfortable Tier
                </span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1">
                {isRtl ? 'إجمالي الميزانية الشهرية' : 'Total Monthly Budget'}
              </h4>
              <p className="text-xs text-slate-400 mb-3">
                {isRtl ? 'منزل 4 غرف + سيارة SUV + مدرسة إسلامية' : '4-Bed house + AWD SUV + CIS Schooling + Halal Food'}
              </p>
              <div className="space-y-1.5 text-xs text-slate-300 pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'المصروف الشهري' : 'Total Outlay'}:</span>
                  <span className="font-semibold text-white">{formatCurrency(7540)}/mo</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">{isRtl ? 'الراتب السنوي المطلوب' : 'Target Gross Salary'}:</span>
                  <span className="font-semibold text-purple-400">{formatCurrency(125000)}/yr</span>
                </div>
              </div>
            </div>
            <Link 
              href="/cost-of-living"
              className="mt-4 inline-flex items-center justify-between text-xs text-purple-400 hover:text-purple-300 font-medium group"
            >
              <span>{isRtl ? 'محاكي عروض العمل' : 'Simulate Job Offers'}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
