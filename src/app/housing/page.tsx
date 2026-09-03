'use client';

import React from 'react';
import Image from 'next/image';
import { HousingCommandCenter } from '@/components/HousingCommandCenter';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { Home } from 'lucide-react';

export default function HousingPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/calgary_suburb_family_home.jpg"
          alt="Modern 4-Bedroom Detached Family Home in Calgary"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Shelter & Real Estate Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'مركز استخبارات السكن والإيجارات في كالغاري' : 'Housing Command Center — 3 & 4 Bed Homes'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'مقارنة دقيقة بين مسوح مؤسسة الإسكان الكندية الرسمية (CMHC) وأسعار السوق المفتوح (Rentals.ca) مع عينات بيوت موثقة'
              : 'Empirical rental benchmarks: Strict separation of CMHC in-place tenant averages vs Rentals.ca open-market asking rents, security deposit rules, and verified listings.'}
          </p>
        </div>
      </div>

      <HousingCommandCenter />
      <SourceModal />
    </div>
  );
}
