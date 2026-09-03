'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calgaryMosques, halalGroceryHubs } from '@/data/islamicLife';
import { 
  Moon, 
  MapPin, 
  ExternalLink, 
  Clock, 
  ShoppingBag, 
  Compass
} from 'lucide-react';

export function IslamicLifeModule() {
  const { t, isRtl } = useApp();
  const [filter, setFilter] = useState<'ALL' | 'YOUTH' | 'QURAN' | 'ARABIC'>('ALL');

  const filteredMosques = calgaryMosques.filter(m => {
    if (filter === 'YOUTH') return m.youthClubAvailable;
    if (filter === 'QURAN') return m.quranTahfeezAvailable;
    if (filter === 'ARABIC') return m.arabicClassesAvailable;
    return true;
  });

  return (
    <section id="muslim-life" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2">
              <Moon className="w-3.5 h-3.5 text-emerald-400" />
              <span>ISLAMIC COMMUNITY INFRASTRUCTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.islamicLife.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.islamicLife.subtitle}
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setFilter('ALL')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filter === 'ALL' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.islamicLife.filterAll}
            </button>
            <button
              onClick={() => setFilter('YOUTH')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filter === 'YOUTH' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.islamicLife.filterYouth}
            </button>
            <button
              onClick={() => setFilter('QURAN')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filter === 'QURAN' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.islamicLife.filterQuran}
            </button>
            <button
              onClick={() => setFilter('ARABIC')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filter === 'ARABIC' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.islamicLife.filterArabic}
            </button>
          </div>
        </div>

        {/* Prayer Times Seasonal Disclaimer Callout */}
        <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 mb-8 flex items-start gap-3">
          <Clock className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            {t.islamicLife.prayerTimeDisclaimer}
          </p>
        </div>

        {/* Mosques & Islamic Centres Grid */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <Compass className="w-4 h-4 text-emerald-400" />
            <span>{t.islamicLife.mosquesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredMosques.map((mosque) => (
              <div
                key={mosque.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                        {mosque.quadrant}
                      </span>
                      <h4 className="text-lg font-bold text-white mt-1.5">
                        {isRtl ? mosque.arabicName : mosque.name}
                      </h4>
                    </div>

                    <span className="text-[11px] text-slate-400 shrink-0 text-right">
                      {mosque.capacityEstimate}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 mb-3 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{mosque.address}</span>
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 text-xs">
                    <strong className="text-emerald-400 block mb-1">Friday Jumu&apos;ah Shifts:</strong>
                    <div className="flex flex-wrap gap-1.5 font-mono text-[11px] text-slate-300">
                      {mosque.jumuahShifts.map((shift, i) => (
                        <span key={i} className="px-2 py-0.5 rounded bg-slate-800/80 border border-slate-700">
                          {shift}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1 text-xs text-slate-300 mb-4">
                    <strong className="text-slate-400 text-[10px] uppercase tracking-wider block mb-1">
                      Key Programs & Services:
                    </strong>
                    {mosque.programs.slice(0, 4).map((prog, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{prog}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-slate-400 italic mb-4">
                    {isRtl ? mosque.arabicFamilyRelevance : mosque.familyRelevance}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-mono">Verified: {mosque.verifiedDate}</span>
                  <a
                    href={mosque.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>Visit Mosque Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Halal Groceries & Wholesale Meat Supply */}
        <div>
          <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>{t.islamicLife.groceriesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {halalGroceryHubs.map((store) => (
              <div
                key={store.id}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800">
                      {store.quadrant} • {store.type}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {isRtl ? store.arabicName : store.name}
                  </h4>
                  <p className="text-[11px] text-slate-400 mb-3">{store.address}</p>

                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                    {isRtl ? store.arabicSpecialty : store.specialty}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800/80 text-[10px] text-slate-500 font-mono">
                  Verified Active Supply
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
