'use client';

import React from 'react';
import { DrivingVehiclesModule } from '@/components/DrivingVehiclesModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Car } from 'lucide-react';

export default function DrivingPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <Car className="w-3.5 h-3.5 text-sky-400" />
          <span>Alberta Driver Licensing & Legalities</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'استبدال رخصة القيادة السعودية وقانون استيراد المركبات' : 'Alberta Driver\'s Licence & Vehicle Legalities'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'خطوات استبدال الرخصة غير المتبادلة بموجب إصلاحات أبريل 2023، ووثائق أبشر/موجز ونجم، وتحذير حظر استيراد سيارات الخليج'
            : 'Non-reciprocal Saudi licence exchange protocol, Class 7 knowledge test, Special Investigations Unit (SIU) experience credit, direct Full Class 5 road test, and the Transport Canada 15-year vehicle import ban.'}
        </p>
      </div>

      <DrivingVehiclesModule />
      <SourceModal />
    </div>
  );
}
