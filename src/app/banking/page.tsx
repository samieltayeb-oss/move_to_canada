'use client';

import React from 'react';
import { BankingCreditModule } from '@/components/BankingCreditModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Building2 } from 'lucide-react';

export default function BankingPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <Building2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Financial Institutions & Credit Architecture</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'حزم البنوك الكندية وبناء السجل الائتماني' : 'Newcomer Banking Packages & 12-Month Credit Blueprint'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'مقارنة البنوك الستة الكبرى مع بنك ألبرتا ATB، مع الفصل الدقيق بين المكافآت النقدية والإعفاءات، واستراتيجية رفع النقاط الائتمانية'
            : 'Big 6 + ATB newcomer packages: Separating pure cash bonuses from fee waivers, Equifax/TransUnion 5 scoring factors, and the statement date utilization hack.'}
        </p>
      </div>

      <BankingCreditModule />
      <SourceModal />
    </div>
  );
}
