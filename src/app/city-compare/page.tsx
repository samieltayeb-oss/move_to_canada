'use client';

import React from 'react';
import { CityComparisonModule } from '@/components/CityComparisonModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Globe2 } from 'lucide-react';

import { CompareMyLife } from '@/components/CompareMyLife';

export default function CityComparePage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <Globe2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Pan-Canadian Geographic Benchmarks</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'مؤشر القيمة ومقارنة المدن الكندية الكبرى' : 'Canadian City Relocation Value Index (12 Cities)'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'مقارنة رياضية دقيقة عبر 12 مؤشراً (الإيجار، الدخل، الضرائب، الجالية المسلمة، والطقس) بين كالغاري وإدمونتون وتورونتو وفانكوفر'
            : 'Multi-attribute linear normalization scoring across 12 major Canadian cities, Calgary vs Edmonton deep dive, and side-by-side family scenario comparisons.'}
        </p>
      </div>

      <CompareMyLife />
      <CityComparisonModule />
      <SourceModal />
    </div>
  );
}
