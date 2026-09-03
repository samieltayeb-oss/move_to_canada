'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { housingBenchmarks, sampleVerifiedListings, live24hRentalFeeds } from '@/data/housing';
import { 
  Home, 
  ExternalLink, 
  Info, 
  Sparkles,
  TrendingDown,
  Clock,
  RefreshCw
} from 'lucide-react';

export function HousingCommandCenter() {
  const { t, formatCurrency, openSourceModal, isRtl } = useApp();
  const [bedroomFilter, setBedroomFilter] = useState<'4' | '3' | 'ALL'>('4');

  const filteredBenchmarks = housingBenchmarks.filter(b => {
    if (bedroomFilter === 'ALL') return true;
    return b.bedrooms === parseInt(bedroomFilter);
  });

  const filteredListings = sampleVerifiedListings.filter(l => {
    if (bedroomFilter === 'ALL') return true;
    return l.bedrooms === parseInt(bedroomFilter);
  });

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
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              {t.housing.subtitle}
            </p>
          </div>

          {/* 3-Bed vs 4-Bed vs All Toggle */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto text-xs font-semibold">
            <button
              onClick={() => setBedroomFilter('4')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                bedroomFilter === '4'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              4-Bed Homes (4 Options)
            </button>
            <button
              onClick={() => setBedroomFilter('3')}
              className={`px-3.5 py-1.5 rounded-lg transition-all ${
                bedroomFilter === '3'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              3-Bed Homes (4 Options)
            </button>
            <button
              onClick={() => setBedroomFilter('ALL')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                bedroomFilter === 'ALL'
                  ? 'bg-sky-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All 8 Homes
            </button>
          </div>
        </div>

        {/* 24-HOUR LIVE LISTING FEEDS BANNER (Direct Live Links) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-sky-950/50 via-slate-900 to-indigo-950/40 border border-sky-500/30 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-sky-400" />
                <span>{isRtl ? 'بوابة العروض الحية والمباشرة (تحديث تلقائي كل 24 ساعة)' : 'Live 24-Hour Rental Feeds (Direct Marketplace & RentFaster)'}</span>
              </h3>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>{isRtl ? live24hRentalFeeds.arabicSyncFrequency : live24hRentalFeeds.syncFrequency}</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-relaxed font-light">
            {isRtl 
              ? 'روابط مباشرة وفورية تفتح نتائج البحث المحدثة لحظياً على فيسبوك ماركت بليس ورنت فاستر في كالغاري حتى يتابع ياسر العروض والأسعار الجديدة أولاً بأول:'
              : 'Direct deep links to active daily listings across Calgary. Click any channel to view live listings with real-time price changes:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 pt-1">
            {live24hRentalFeeds.directSearchFeeds.map((feed, idx) => (
              <a
                key={idx}
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/40 text-xs transition-all flex flex-col justify-between group"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-medium">
                    {feed.platform}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                    {feed.tag}
                  </span>
                </div>
                <strong className="text-slate-200 group-hover:text-white font-medium text-xs line-clamp-2">
                  {isRtl ? feed.arabicLabel : feed.label}
                </strong>
                <div className="flex items-center justify-end gap-1 text-[11px] text-sky-400 mt-2 font-mono">
                  <span>{isRtl ? 'عرض النتائج الحية' : 'Open Live Feed'}</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </a>
            ))}
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
              href="https://www.facebook.com/marketplace/calgary/propertyrentals?minPrice=2200&maxPrice=2700&bedrooms=4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 shrink-0 transition-all self-start md:self-auto"
            >
              <span>{isRtl ? 'تصفح عروض 4 غرف فيسبوك ماركت بليس' : 'Browse 4-Bed on FB Marketplace'}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredBenchmarks.map((benchmark, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {benchmark.bedrooms} Bedrooms
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1">
                      {benchmark.propertyType}
                    </h3>
                  </div>
                  <button
                    onClick={() => openSourceModal(benchmark.sourceId)}
                    className="text-slate-400 hover:text-sky-400 p-1 transition-colors"
                    title="View Data Source"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2 mb-4 font-mono text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <span className="text-slate-400">FB Marketplace (Dropped):</span>
                    <strong className="text-emerald-400 text-sm font-bold">
                      {formatCurrency(benchmark.facebookMarketplaceAskingCAD)}/mo
                    </strong>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">Rentals.ca Asking Avg:</span>
                    <span className="text-slate-300 font-semibold">{formatCurrency(benchmark.rentalsCaCurrentAskingCAD)}/mo</span>
                  </div>
                  <div className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-400">CMHC Occupied Avg:</span>
                    <span className="text-slate-400">{formatCurrency(benchmark.cmhcOccupiedAverageCAD)}/mo</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Square Footage:</span>
                    <span className="font-mono text-slate-200">{benchmark.typicalSquareFootage}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Parking / Garage:</span>
                    <span className="text-slate-200 truncate max-w-[180px]">{benchmark.parkingType}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-slate-800/60">
                    <span className="text-slate-400">Est. Utilities:</span>
                    <span className="font-mono text-slate-200">~{formatCurrency(benchmark.typicalMonthlyUtilitiesCAD)}/mo</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-slate-400">Tenant Insurance:</span>
                    <span className="font-mono text-slate-200">~{formatCurrency(benchmark.typicalTenantInsuranceCAD)}/mo</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed italic border-t border-slate-800/60 pt-3">
                  {benchmark.notes}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 mt-4 flex items-center justify-between text-xs text-slate-400">
                <span>Deposit: ~{formatCurrency(benchmark.typicalDepositCAD)}</span>
                <span className="text-[11px] font-mono text-slate-500">CMHC &amp; Rentals.ca 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Real Active Listings with Price Reductions (8 Total Listings with Photos) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>
                  {isRtl ? 'عينات من بيوت معروضة فعلياً بالصور وروابط الإعلانات' : 'Real Active Listings with Photos & Direct Links'} ({filteredListings.length} Options)
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isRtl ? 'تم رصدها من فيسبوك ماركت بليس ورنت فاستر مع روابط المشاركة المباشرة' : 'Sampled from Facebook Marketplace & RentFaster with direct shareable listing links'}
              </p>
            </div>
            <span className="text-xs text-emerald-400 font-mono px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800">
              Cornerstone, Thorncliffe, Savanna, Evanston, Taradale, Sage Hill, Redstone, Cityscape
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredListings.map((listing) => (
              <div
                key={listing.id}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Property Image Header */}
                  <div className="relative w-full h-48 sm:h-56 bg-slate-900 overflow-hidden">
                    <Image
                      src={listing.imageUrl}
                      alt={listing.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/30"></div>

                    {/* Badge Overlay */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/90 text-sky-300 border border-sky-800/80 backdrop-blur-md font-bold">
                        {listing.quadrant} • {listing.neighbourhood}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-950/90 text-slate-200 border border-slate-800 backdrop-blur-md">
                        {listing.propertyType}
                      </span>
                    </div>

                    {/* Price Overlay */}
                    <div className="absolute bottom-3 right-3 text-right">
                      <div className="flex items-baseline gap-1.5 bg-slate-950/90 px-3 py-1 rounded-xl border border-slate-800/80 backdrop-blur-md">
                        {listing.previousRentCAD && (
                          <span className="text-xs line-through text-slate-400 font-mono">
                            ${listing.previousRentCAD}
                          </span>
                        )}
                        <span className="text-lg sm:text-xl font-bold font-mono text-emerald-400">
                          {formatCurrency(listing.monthlyRentCAD)}
                        </span>
                        <span className="text-[10px] text-slate-400">/mo</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-sm sm:text-base font-bold text-white mb-2 leading-snug">
                      {isRtl ? listing.arabicTitle : listing.title}
                    </h4>

                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300 py-2.5 my-2 border-y border-slate-800/60 font-mono">
                      <div>{listing.bedrooms} Beds • {listing.bathrooms} Baths</div>
                      <div>{listing.squareFeet.toLocaleString()} sq ft</div>
                      <div className="text-right text-slate-400 truncate">{listing.garageType}</div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 my-3">
                      {listing.highlights.map((h, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Links (Exact Share Link Format) */}
                <div className="p-5 pt-0 border-t border-slate-800/60 mt-auto space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3">
                    <span>{t.common.lastVerified} {listing.lastVerifiedAt}</span>
                    <span className="font-mono text-[10px] text-emerald-400">Available: {listing.availableDate}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href={listing.facebookMarketplaceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors group"
                    >
                      <span>Direct Facebook Listing</span>
                      <ExternalLink className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={listing.rentFasterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2.5 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors group"
                    >
                      <span>RentFaster Listing</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-400" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
