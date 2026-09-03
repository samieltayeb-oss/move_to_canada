'use client';

import React from 'react';
import Image from 'next/image';
import { CalgaryRealityCheck } from '@/components/CalgaryRealityCheck';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Compass, Sun, Mountain, Snowflake } from 'lucide-react';

export default function CalgaryPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/calgary_skyline_rockies.jpg"
          alt="Calgary Downtown Skyline with Canadian Rocky Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Alberta Destination Profile</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'واقع الحياة في كالغاري — المميزات والتحديات' : 'Calgary Reality Check — Balanced Evaluation'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'دراسة واقعية متوازنة توضح مزايا كالغاري الاستثنائية وتحدياتها المناخية والخدمية لعائلة قادمة من الرياض'
              : 'An unvarnished, empirical comparison of Calgary’s strengths versus critical settlement difficulties for a family moving from Riyadh.'}
          </p>
        </div>
      </div>

      {/* Highlights Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
        <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
          <Sun className="w-6 h-6 text-amber-400 shrink-0" />
          <div>
            <span className="text-slate-400 block">Sunshine Days:</span>
            <strong className="text-white text-sm">333 Days / Year</strong>
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
          <Mountain className="w-6 h-6 text-sky-400 shrink-0" />
          <div>
            <span className="text-slate-400 block">Rocky Mountains:</span>
            <strong className="text-white text-sm">50 mins away</strong>
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
          <Snowflake className="w-6 h-6 text-sky-300 shrink-0" />
          <div>
            <span className="text-slate-400 block">Winter Snaps:</span>
            <strong className="text-rose-400 text-sm">-25°C to -35°C</strong>
          </div>
        </div>
        <div className="glass-panel p-4 rounded-xl border border-slate-800 flex items-center gap-3">
          <Compass className="w-6 h-6 text-emerald-400 shrink-0" />
          <div>
            <span className="text-slate-400 block">Provincial Sales Tax:</span>
            <strong className="text-emerald-400 text-sm">0% PST (5% GST only)</strong>
          </div>
        </div>
      </div>

      {/* Main Module */}
      <CalgaryRealityCheck />

      <SourceModal />
    </div>
  );
}
