'use client';

import React from 'react';
import { TelecomUtilitiesModule } from '@/components/TelecomUtilitiesModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Wifi } from 'lucide-react';

export default function ConnectivityPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <Wifi className="w-3.5 h-3.5 text-sky-400" />
          <span>Home Infrastructure & Utilities</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'الاتصالات المنزلية وفواتير بلدية كالغاري' : 'Home Telecom Broadband, Mobile & Utilities'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'مقارنة فايبر تيلوس المتماثل مع روجرز، وباقات الجوال 5G، واستراتيجية الاتصال بالسعودية، وفواتير بلدية كالغاري الإلزامية ($139.72)'
            : 'TELUS PureFibre FTTH vs Rogers Xfinity, mobile plans, calling Saudi Arabia (+966), and City of Calgary municipal cart/water baselines.'}
        </p>
      </div>

      <TelecomUtilitiesModule />
      <SourceModal />
    </div>
  );
}
