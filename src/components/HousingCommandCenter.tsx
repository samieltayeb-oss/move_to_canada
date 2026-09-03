'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { housingBenchmarks, sampleVerifiedListings } from '@/data/housing';
import { 
  Home, 
  ExternalLink, 
  Info, 
  Sparkles,
  TrendingDown,
  Tag
} from 'lucide-react';

export function HousingCommandCenter() {
  const { t, formatCurrency, openSourceModal, isRtl } = useApp();
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

        {/* MARKET PRICE DROP CALLOUT BANNER */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-slate-900/60 to-emerald-950/30 border border-emerald-500/30 mb-8 text-xs sm:text-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                <TrendingDown className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-emerald-300 text-sm">
                    {isRtl ? 'انخفاض أسعار الإيجار في كالغاري — تحديث فيسبوك ماركت بليس ورنت فاستر' : 'Calgary Rental Market Softening — Prices Dropped on Facebook Marketplace'}
                  </h4>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Active Drop: -$200 to -$400/mo
                  </span>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed max-w-3xl font-light">
                  {isRtl 
                    ? 'شهدت كالغاري زيادة ملحوظة في المعروض السكني بالمناطق الشمالية الشرقية (مثل كورنرستون وريدستون وسافانا)، مما أدى لانخفاض إيجار البيوت المستقلة (4 غرف) من 2,950+ دولار إلى 2,450 – 2,650 دولار على Facebook Marketplace مع مرونة عالية في التفاوض.'
                    : 'Surging completion of new developments across Calgary NE (Cornerstone, Redstone, Savanna, Cityscape) has softened detached 4-bedroom rental rates from $2,950+ down to $2,450–$2,650 CAD/month on Facebook Marketplace. Landlords frequently offer move-in discounts.'}
                </p>
              </div>
            </div>

            <a
              href="https://www.facebook.com/marketplace/calgary/propertyrentals"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 shrink-0 transition-all self-start md:self-auto"
            >
              <span>{isRtl ? 'تصفح عروض فيسبوك ماركت بليس' : 'Browse Facebook Marketplace'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Critical Methodology Callout Alert */}
        <div className="p-4 rounded-2xl bg-sky-950/30 border border-sky-500/20 mb-8 text-xs">
          <div className="flex items-start gap-3">
            <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-sky-200">
                {t.housing.methodologyDiffTitle}
              </h4>
              <p className="text-slate-400 mt-0.5 leading-relaxed text-[11px]">
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
                  {/* Facebook Marketplace (Softened/Current) */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-emerald-300 font-semibold flex items-center gap-1">
                        <Tag className="w-3 h-3 text-emerald-400" />
                        <span>Facebook Marketplace:</span>
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">Current Drop</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-black text-white font-mono">
                        {formatCurrency(b.facebookMarketplaceAskingCAD)}
                      </span>
                      <span className="text-xs text-slate-400">{t.common.monthly}</span>
                    </div>
                  </div>

                  {/* Rentals.ca Asking */}
                  <div className="flex items-center justify-between text-xs px-1 text-slate-300">
                    <span className="text-slate-400">Rentals.ca Asking:</span>
                    <span className="font-mono text-slate-200 font-semibold">
                      {formatCurrency(b.rentalsCaCurrentAskingCAD)}/mo
                    </span>
                  </div>

                  {/* CMHC Average */}
                  <div className="flex items-center justify-between text-xs px-1 text-slate-400">
                    <span>{t.housing.cmhcAverage}:</span>
                    <span className="font-mono text-slate-400">
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
                <span className="text-[11px] text-slate-500 font-mono">Marketplace &amp; CMHC</span>
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
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{isRtl ? 'عينات من بيوت معروضة فعلياً' : 'Real Active Listings with Price Reductions'} ({selectedBedrooms}-Bed)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isRtl ? 'تم رصدها من فيسبوك ماركت بليس ورنت فاستر في أحياء كالغاري' : 'Sampled from Facebook Marketplace & RentFaster across top Calgary communities'}
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-mono px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800">
              Includes Cornerstone &amp; Thorncliffe
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                          {listing.quadrant} • {listing.neighbourhood}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                          {listing.sourcePlatform}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mt-1">
                        {listing.title}
                      </h4>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="flex items-baseline justify-end gap-1.5">
                        {listing.previousRentCAD && (
                          <span className="text-xs line-through text-slate-500 font-mono">
                            ${listing.previousRentCAD}
                          </span>
                        )}
                        <span className="text-xl font-bold font-mono text-emerald-400">
                          {formatCurrency(listing.monthlyRentCAD)}
                        </span>
                      </div>
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
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800">
                  <span>{t.common.lastVerified} {listing.lastVerifiedAt}</span>
                  <a
                    href={listing.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>View on {listing.sourcePlatform}</span>
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
