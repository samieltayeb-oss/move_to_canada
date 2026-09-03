'use client';

import React from 'react';
import Image from 'next/image';
import { IslamicLifeModule } from '@/components/IslamicLifeModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Moon } from 'lucide-react';

export default function MuslimLifePage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/halal_grocery_butcher_market.jpg"
          alt="Clean Halal Market & Butcher in Calgary"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
            <Moon className="w-3.5 h-3.5 text-emerald-400" />
            <span>Faith & Halal Community Hub</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'الحياة الإسلامية والمجتمع في كالغاري' : 'Muslim Life in Calgary — Mosques & Halal Infrastructure'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'دليل المساجد الكبرى ومواعيد صلاة الجمعة وتحفيظ القرآن وأسواق اللحوم الحلال المعتمدة وساعات الصلاة الموسمية'
              : 'Community infrastructure for a Muslim family of 5: Akram Jomaa, MAC Al-Salam, Downtown Mosque, Jumu’ah prayer shifts, Tahfeez clubs, and Halal meat supplies.'}
          </p>
        </div>
      </div>

      <IslamicLifeModule />
      <SourceModal />
    </div>
  );
}
