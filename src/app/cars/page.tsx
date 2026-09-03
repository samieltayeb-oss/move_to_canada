'use client';

import React from 'react';
import Image from 'next/image';
import { DrivingVehiclesModule } from '@/components/DrivingVehiclesModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Car } from 'lucide-react';

export default function CarsPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/family_suv_winter_highway.jpg"
          alt="Family AWD SUV in Calgary Winter"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
            <Car className="w-3.5 h-3.5 text-emerald-400" />
            <span>Family Vehicle Acquisition</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'شراء سيارة العائلة في ألبرتا — الدفع الرباعي وتوفير الضريبة' : 'Family Car Buying in Alberta — AWD & 0% PST'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'أفضل سيارات العائلات المكونة من 5 أفراد (تويوتا هايلاندر، سيينا، بايلوت)، وميزة توفير 4,000 دولار ضريبة في ألبرتا، وتأمين القادمين الجدد'
              : 'Recommended 3-row AWD vehicles for 5 passengers, Alberta\'s 0% PST cash savings vs Ontario/BC, auto insurance broker strategy, and winter tires.'}
          </p>
        </div>
      </div>

      <DrivingVehiclesModule />
      <SourceModal />
    </div>
  );
}
