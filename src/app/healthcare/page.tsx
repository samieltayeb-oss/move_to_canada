'use client';

import React from 'react';
import { TransitHealthcareModule } from '@/components/TransitHealthcareModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { HeartPulse } from 'lucide-react';

export default function HealthcarePage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <HeartPulse className="w-3.5 h-3.5 text-sky-400" />
          <span>Alberta Health Care Insurance Plan (AHCIP)</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'التأمين الصحي في ألبرتا — التغطية الفورية والخدمات' : 'Alberta Healthcare (AHCIP) & Calgary Transit'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'تغطية فورية من اليوم الأول لوصول القادمين الجدد، مع تفصيل الخدمات المغطاة وغير المغطاة، وخدمة Health Link 811 ومجانية مواصلات الأطفال'
            : 'Zero-day waiting period for direct international arrivals in Alberta, covered doctor/hospital care vs excluded adult dental/drugs, 811 Health Link, and Calgary Transit fares.'}
        </p>
      </div>

      <TransitHealthcareModule />
      <SourceModal />
    </div>
  );
}
