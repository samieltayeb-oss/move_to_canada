'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { housingBenchmarks, sampleVerifiedListings } from '@/data/housing';
import { 
  Home, 
  ExternalLink, 
  Info, 
  Sparkles
} from 'lucide-react';

export function HousingCommandCenter() {
  const { t, formatCurrency, openSourceModal } = useApp();
  const [selectedBedrooms, setSelectedBedrooms] = useState<3 | 4>(4);

  const filteredBenchmarks = housingBenchmarks.filter(b => b.bedrooms === selectedBedrooms);
  const filteredListings = sampleVerifiedListings.filter(l => l.bedrooms === selectedBedrooms);

  return (
    <section id="housing-command" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Bedroom Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <Home className="w-3.5 h-3.5 text-sky-400" />
              <span>FAMILY SHELTER COMMAND</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.housing.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.housing.subtitle}
            </p>
          </div>

          {/* 3-Bed vs 4-Bed Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            <button
              onClick={() => setSelectedBedrooms(3)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedBedrooms === 3
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.housing.toggle3Bed}
            </button>
            <button
              onClick={() => setSelectedBedrooms(4)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
                selectedBedrooms === 4
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {t.housing.toggle4Bed}
            </button>
          </div>
        </div>

        {/* Critical Methodology Callout Alert */}
        <div className="p-5 rounded-2xl bg-sky-950/40 border border-sky-500/30 mb-8 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-200">
                {t.housing.methodologyDiffTitle}
              </h4>
              <p className="text-slate-300 mt-1 leading-relaxed text-xs">
                {t.housing.methodologyDiffText}
              </p>
            </div>
          </div>
        </div>

        {/* Benchmarks Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBenchmarks.map((b, idx) => (
            <div
              key={idx}
              className="glass-panel glass-card-hover rounded-2xl p-6 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-md bg-slate-900 text-sky-400 border border-slate-800 font-semibold">
                    {b.propertyType}
                  </span>
                  <span className="text-xs text-slate-400">{b.typicalSquareFootage}</span>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Asking Rent */}
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">
                      {t.housing.rentalsCaAsking}
                    </span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white font-mono">
                        {formatCurrency(b.rentalsCaCurrentAskingCAD)}
                      </span>
                      <span className="text-xs text-slate-400">{t.common.monthly}</span>
                    </div>
                  </div>

                  {/* CMHC Average */}
                  <div className="flex items-center justify-between text-xs px-1 text-slate-400">
                    <span>{t.housing.cmhcAverage}:</span>
                    <span className="font-mono text-slate-200 font-semibold">
                      {formatCurrency(b.cmhcOccupiedAverageCAD)}/mo
                    </span>
                  </div>

                  {/* Security Deposit & Utilities */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.housing.deposit}:</span>
                      <span className="font-mono text-white">{formatCurrency(b.typicalDepositCAD)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">{t.housing.estUtilities}:</span>
                      <span className="font-mono text-amber-300">+{formatCurrency(b.typicalMonthlyUtilitiesCAD)}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Tenant Insurance:</span>
                      <span className="font-mono text-slate-300">~{formatCurrency(b.typicalTenantInsuranceCAD)}/mo</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Parking:</span>
                      <span className="text-slate-300 text-right truncate max-w-[150px]">{b.parkingType}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 italic mb-4">
                  {b.notes}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-mono">Rentals.ca 2026 Snapshot</span>
                <button
                  onClick={() => openSourceModal(b.sourceId)}
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>{t.common.source}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sample Verified Listings Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t.housing.sampleListings} ({selectedBedrooms}-Bed)</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Verified Rental Examples</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-sky-500/40 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      {listing.quadrant} • {listing.neighbourhood}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-1.5">
                      {listing.title}
                    </h4>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-bold font-mono text-emerald-400">
                      {formatCurrency(listing.monthlyRentCAD)}
                    </span>
                    <span className="text-[10px] text-slate-400 block">{t.common.monthly}</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 py-2.5 my-2.5 border-y border-slate-800/60 font-mono">
                  <div>{listing.bedrooms} Beds • {listing.bathrooms} Baths</div>
                  <div>{listing.squareFeet.toLocaleString()} sq ft</div>
                  <div className="text-right text-slate-400">{listing.garageType}</div>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-3">
                  {listing.highlights.map((h, i) => (
                    <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
                  <span>{t.common.lastVerified} {listing.lastVerifiedAt}</span>
                  <a
                    href={listing.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>View Rentals.ca</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
