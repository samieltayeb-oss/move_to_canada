'use client';

import React from 'react';
import { NeighbourhoodExplorer } from '@/components/NeighbourhoodExplorer';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Compass } from 'lucide-react';

export default function NeighbourhoodsPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <Compass className="w-3.5 h-3.5 text-sky-400" />
          <span>Quadrant Intelligence</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'مستكشف أحياء كالغاري العائلية' : 'Calgary Family Neighbourhood Explorer'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'تقييم شامل لأحياء الشمال الشرقي (NE)، الشمال الغربي (NW)، والجنوب الغربي (SW) مع مسافات المدارس والمساجد والداون تاون'
            : 'Detailed evaluation of Calgary quadrants: Mosques, Islamic schools, CBE catchment lottery warnings, commute times, and typical 4-bed rents.'}
        </p>
      </div>

      <NeighbourhoodExplorer />
      <SourceModal />
    </div>
  );
}
