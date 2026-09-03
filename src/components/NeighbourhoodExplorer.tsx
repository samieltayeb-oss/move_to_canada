'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calgaryNeighbourhoods } from '@/data/neighbourhoods';
import { 
  Compass, 
  Car, 
  Train, 
  Moon, 
  GraduationCap, 
  ShoppingBag, 
  AlertTriangle, 
  Check, 
  X,
  Plane
} from 'lucide-react';

export function NeighbourhoodExplorer() {
  const { t, formatCurrency, isRtl, bookmarks, toggleBookmark } = useApp();
  const [filterType, setFilterType] = useState<'ALL' | 'MUSLIM' | 'BUDGET' | 'SCHOOLS' | 'TRANSIT' | 'EXECUTIVE'>('ALL');

  const filteredNeighbourhoods = calgaryNeighbourhoods.filter(n => {
    if (filterType === 'MUSLIM') return n.keyTags.includes('Best for Muslim Family') || n.muslimFamilyScore >= 85;
    if (filterType === 'BUDGET') return n.fourBedDetachedRentCAD <= 2800;
    if (filterType === 'SCHOOLS') return n.keyTags.includes('Best for Public Schools') || n.keyTags.includes('Top Academies');
    if (filterType === 'TRANSIT') return n.keyTags.includes('Transit Access') || n.keyTags.includes('Transit Walkable') || n.nearestCTrainStation.includes('Line');
    if (filterType === 'EXECUTIVE') return n.quadrant.includes('SW') || n.fourBedDetachedRentCAD > 3500;
    return true;
  });

  return (
    <section id="neighbourhood-explorer" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              <span>COMMUNITY FIT ENGINE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.neighbourhoods.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.neighbourhoods.subtitle}
            </p>
          </div>

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs">
            <button
              onClick={() => setFilterType('ALL')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'ALL' ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterAll}
            </button>
            <button
              onClick={() => setFilterType('MUSLIM')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'MUSLIM' ? 'bg-emerald-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterMuslim}
            </button>
            <button
              onClick={() => setFilterType('BUDGET')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'BUDGET' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterBudget}
            </button>
            <button
              onClick={() => setFilterType('SCHOOLS')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'SCHOOLS' ? 'bg-indigo-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterSchools}
            </button>
            <button
              onClick={() => setFilterType('TRANSIT')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'TRANSIT' ? 'bg-cyan-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterTransit}
            </button>
            <button
              onClick={() => setFilterType('EXECUTIVE')}
              className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
                filterType === 'EXECUTIVE' ? 'bg-purple-600 text-white' : 'bg-slate-900 text-slate-300 border border-slate-800'
              }`}
            >
              {t.neighbourhoods.filterExecutive}
            </button>
          </div>
        </div>

        {/* Catchment Warning Banner */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 mb-8 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{t.neighbourhoods.catchmentWarning}</span>
        </div>

        {/* Neighbourhoods Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredNeighbourhoods.map((n) => {
            const bookmarked = bookmarks.includes(n.id);
            return (
              <div
                key={n.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Badging */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                          {n.quadrant}
                        </span>
                        <span className="text-xs text-slate-400">{n.vintage}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mt-1.5">
                        {isRtl ? n.arabicName : n.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => toggleBookmark(n.id)}
                      className={`p-2 rounded-xl border text-xs transition-colors ${
                        bookmarked
                          ? 'bg-amber-500/20 border-amber-500/50 text-amber-400'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                      title="Bookmark neighbourhood"
                    >
                      {bookmarked ? '★ Saved' : '☆ Save'}
                    </button>
                  </div>

                  {/* Pricing Banner */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">3-Bed Rent:</span>
                      <span className="text-base font-bold text-white">
                        {formatCurrency(n.threeBedRentCAD)}/mo
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">4-Bed Detached:</span>
                      <span className="text-base font-bold text-emerald-400">
                        {formatCurrency(n.fourBedDetachedRentCAD)}/mo
                      </span>
                    </div>
                  </div>

                  {/* Infrastructure Details */}
                  <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 mb-5">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Car className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Downtown: <strong>{n.commuteDowntownMinutes} mins</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Train className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span className="truncate" title={n.nearestCTrainStation}>
                          CTrain: <strong>{n.nearestCTrainStation}</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Plane className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                        <span>Airport (YYC): <strong>{n.distanceToAirportMins} mins</strong></span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Moon className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span className="truncate" title={n.nearestMosqueName}>
                          Mosque: <strong>{n.distanceToMosqueMins} mins</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                        <span className="truncate" title={n.nearestIslamicSchool}>
                          Islamic School: <strong>{n.distanceToIslamicSchoolMins} mins</strong>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ShoppingBag className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Halal: <strong>{n.halalGroceryAccess}</strong></span>
                      </div>
                    </div>
                  </div>

                  {/* Pros & Cons */}
                  <div className="space-y-3 pt-3 border-t border-slate-800 text-xs mb-4">
                    <div>
                      <span className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider block mb-1.5">
                        Key Advantages:
                      </span>
                      <ul className="space-y-1">
                        {(isRtl ? n.arabicPros : n.pros).slice(0, 2).map((pro, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-300 text-[11px]">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{pro}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block mb-1.5">
                        Trade-Offs to Consider:
                      </span>
                      <ul className="space-y-1">
                        {(isRtl ? n.arabicCons : n.cons).slice(0, 2).map((con, i) => (
                          <li key={i} className="flex items-start gap-2 text-slate-400 text-[11px]">
                            <X className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                            <span>{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Catchment Footer Note */}
                <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
                  <span className="font-semibold text-slate-400">Designated School:</span> {n.designatedPublicElementary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
