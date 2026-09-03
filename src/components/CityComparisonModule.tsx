'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { canadianCities, computeCityIndex, calgaryVsEdmontonPoints, calgaryVsRiyadhPoints } from '@/data/cities';
import { Globe2 } from 'lucide-react';

export function CityComparisonModule() {
  const { t, isRtl } = useApp();
  const [activeTab, setActiveTab] = useState<'9-CITIES' | 'CALGARY-VS-EDMONTON' | 'CALGARY-VS-RIYADH'>('9-CITIES');
  const [sortBy, setSortBy] = useState<'score' | 'rent' | 'income'>('score');

  const cityScores = new Map(canadianCities.map(c => [c.id, computeCityIndex(c)]));

  const sortedCities = [...canadianCities].sort((a, b) => {
    const scoreA = cityScores.get(a.id)?.overallScore ?? 0;
    const scoreB = cityScores.get(b.id)?.overallScore ?? 0;
    if (sortBy === 'score') return scoreB - scoreA;
    if (sortBy === 'rent') return a.threeBedRentCAD - b.threeBedRentCAD;
    if (sortBy === 'income') return b.medianFamilyIncomeCAD - a.medianFamilyIncomeCAD;
    return 0;
  });

  return (
    <section id="city-index" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              <span>PAN-CANADIAN GEOGRAPHIC BENCHMARKING</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.cityIndex.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.cityIndex.subtitle}
            </p>
          </div>

          {/* Sub-Tab Navigation */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
            <button
              onClick={() => setActiveTab('9-CITIES')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === '9-CITIES'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              9-City Value Matrix
            </button>
            <button
              onClick={() => setActiveTab('CALGARY-VS-EDMONTON')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'CALGARY-VS-EDMONTON'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Calgary vs. Edmonton
            </button>
            <button
              onClick={() => setActiveTab('CALGARY-VS-RIYADH')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
                activeTab === 'CALGARY-VS-RIYADH'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Calgary vs. Riyadh
            </button>
          </div>
        </div>

        {/* TAB 1: 9-City Value Comparison Matrix */}
        {activeTab === '9-CITIES' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 text-xs">
              <span className="text-slate-400 font-mono">Normalized Linear Scoring (100-Point Scale)</span>
              <div className="flex items-center gap-2">
                <span className="text-slate-500">Sort by:</span>
                <button
                  onClick={() => setSortBy('score')}
                  className={`px-2.5 py-1 rounded-lg border transition-colors ${
                    sortBy === 'score' ? 'bg-sky-950 text-sky-300 border-sky-800' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Family Value Score
                </button>
                <button
                  onClick={() => setSortBy('rent')}
                  className={`px-2.5 py-1 rounded-lg border transition-colors ${
                    sortBy === 'rent' ? 'bg-sky-950 text-sky-300 border-sky-800' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Lowest Rent
                </button>
                <button
                  onClick={() => setSortBy('income')}
                  className={`px-2.5 py-1 rounded-lg border transition-colors ${
                    sortBy === 'income' ? 'bg-sky-950 text-sky-300 border-sky-800' : 'bg-slate-900 text-slate-400 border-slate-800'
                  }`}
                >
                  Median Income
                </button>
              </div>
            </div>

            {/* Matrix Table Responsive */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 mb-8">
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/80 text-slate-400 font-mono">
                      <th className="p-4">Rank / Metropolitan City</th>
                      <th className="p-4">Relocation Score</th>
                      <th className="p-4">3-Bed Rent</th>
                      <th className="p-4">4-Bed Detached</th>
                      <th className="p-4">Median Income</th>
                      <th className="p-4">Sales Tax</th>
                      <th className="p-4">Annual Sun</th>
                      <th className="p-4">Muslim Community</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-mono">
                    {sortedCities.map((city, idx) => {
                      const isCalgary = city.id === 'calgary';
                      const scoreInfo = cityScores.get(city.id);
                      return (
                        <tr
                          key={city.id}
                          className={`hover:bg-slate-900/50 transition-colors ${
                            isCalgary ? 'bg-sky-950/30 font-semibold' : ''
                          }`}
                        >
                          <td className="p-4 text-white flex items-center gap-2">
                            <span className="w-5 text-slate-500 font-bold">#{idx + 1}</span>
                            <span className={isCalgary ? 'text-sky-300 font-bold' : ''}>
                              {isRtl ? city.arabicName : city.name}, {city.province}
                            </span>
                            {isCalgary && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40">
                                Target City
                              </span>
                            )}
                          </td>
                          <td className="p-4 font-bold text-amber-400">
                            {scoreInfo?.overallScore}/100
                          </td>
                          <td className="p-4 text-white">
                            ${city.threeBedRentCAD.toLocaleString()}
                          </td>
                          <td className="p-4 text-slate-300">
                            ${city.fourBedHouseRentCAD.toLocaleString()}
                          </td>
                          <td className="p-4 text-emerald-400">
                            ${city.medianFamilyIncomeCAD.toLocaleString()}
                          </td>
                          <td className="p-4">
                            <span className={city.provincialSalesTaxRate === 0 ? 'text-emerald-400 font-bold' : 'text-slate-400'}>
                              {city.provincialSalesTaxRate === 0 ? '0% PST (5% GST)' : `${city.provincialSalesTaxRate}% PST`}
                            </span>
                          </td>
                          <td className="p-4 text-slate-300">
                            {city.annualSunshineHours.toLocaleString()} hrs
                          </td>
                          <td className="p-4 text-slate-300">
                            {city.muslimPopulation.toLocaleString()}+
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Calgary vs Edmonton Deep Dive */}
        {activeTab === 'CALGARY-VS-EDMONTON' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 mb-8">
            <div className="max-w-2xl mb-6">
              <h3 className="text-xl font-bold text-white">
                {t.cityIndex.calgaryVsEdmonton}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Both cities share Alberta&apos;s 0% PST and high basic personal amounts, but offer distinctly different lifestyle rhythms and economic profiles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {calgaryVsEdmontonPoints.map((pt, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                  <span className="font-bold text-sky-400 block mb-1">
                    {pt.dimension}:
                  </span>
                  <div className="space-y-1 text-slate-300 text-[11px] leading-relaxed">
                    <p><strong className="text-white">Calgary:</strong> {pt.calgaryFact}</p>
                    <p><strong className="text-slate-400">Edmonton:</strong> {pt.edmontonFact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Calgary vs Riyadh Lifestyle Transition */}
        {activeTab === 'CALGARY-VS-RIYADH' && (
          <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 border border-amber-500/30 mb-8">
            <div className="max-w-2xl mb-6">
              <h3 className="text-xl font-bold text-white">
                {t.cityIndex.calgaryVsRiyadh}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                Realities of transitioning from Saudi Arabia to Western Canada for a family with 3 young children.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {calgaryVsRiyadhPoints.map((pt, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="font-bold text-amber-400 block mb-1">
                    {pt.aspect}:
                  </span>
                  <div className="space-y-1.5 text-slate-300 text-[11px] leading-relaxed">
                    <p><strong className="text-white">Riyadh Reality:</strong> {pt.riyadhReality}</p>
                    <p><strong className="text-emerald-400">Calgary Adaptation:</strong> {pt.calgaryAdaptation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
