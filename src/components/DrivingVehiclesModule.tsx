'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  recommendedFamilyVehicles, 
  saudiVehicleImportWarning, 
  saudiLicenceConversionGuide,
  live24hVehicleFeeds,
  FamilyVehicle
} from '@/data/vehicles';
import { 
  Car, 
  ShieldAlert, 
  FileText, 
  AlertTriangle, 
  Snowflake,
  ExternalLink,
  Fuel,
  Users,
  RefreshCw,
  Clock
} from 'lucide-react';

export function DrivingVehiclesModule() {
  const { t, isRtl } = useApp();
  const [selectedBrand, setSelectedBrand] = useState<'ALL' | 'Toyota' | 'Honda' | 'Kia' | 'Hyundai' | 'Nissan'>('ALL');

  const filteredVehicles = recommendedFamilyVehicles.filter(v => {
    if (selectedBrand === 'ALL') return true;
    return v.brand === selectedBrand;
  });

  const brands: ('ALL' | 'Toyota' | 'Honda' | 'Kia' | 'Hyundai' | 'Nissan')[] = [
    'ALL', 'Toyota', 'Honda', 'Kia', 'Hyundai', 'Nissan'
  ];

  return (
    <section id="driving-cars" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-2">
              <Car className="w-3.5 h-3.5 text-cyan-400" />
              <span>MOBILITY, VEHICLES &amp; LICENSING LEGALITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.drivingCars.drivingTitle}
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              Alberta non-reciprocal licence rules, GDL modernization, 2015–2024 family vehicles, and shipping regulations
            </p>
          </div>
        </div>

        {/* Critical Saudi Car Import Warning Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-red-500/40 bg-red-950/20 mb-12">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <div>
                <span className="text-xs font-mono tracking-wider px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-800 font-semibold">
                  STATUTORY FEDERAL WARNING: TRANSPORT CANADA
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {isRtl ? saudiVehicleImportWarning.arabicRuleName : saudiVehicleImportWarning.ruleName}
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isRtl ? saudiVehicleImportWarning.arabicReason : saudiVehicleImportWarning.reason}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 pt-2">
                {(isRtl ? saudiVehicleImportWarning.arabicConsequences : saudiVehicleImportWarning.consequences).map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-red-800/80 text-xs text-red-300 font-bold">
                {isRtl ? saudiVehicleImportWarning.arabicVerdict : saudiVehicleImportWarning.verdict}
              </div>
            </div>
          </div>
        </div>

        {/* Saudi Licence Conversion Step-by-Step Guide */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-sky-400" />
              <span>Alberta Licensing Conversion Protocol (Non-Reciprocal)</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">90-Day Legal Exemption Window</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {saudiLicenceConversionGuide.steps.map((step) => (
              <div
                key={step.stepNumber}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-800">
                    <span className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 font-bold font-mono flex items-center justify-center text-xs">
                      {step.stepNumber}
                    </span>
                    <span className="text-[10px] text-slate-500 font-mono">Step {step.stepNumber}</span>
                  </div>

                  <h4 className="font-bold text-white mb-2">
                    {isRtl ? step.arabicTitle : step.title}
                  </h4>
                  <p className="text-slate-300 leading-relaxed font-light">
                    {isRtl ? step.arabicDescription : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Car Buying Command Center — Toyota, Kia, Honda, Hyundai, Nissan (2015-2024) */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <Car className="w-5 h-5 text-amber-400" />
                  <span>{isRtl ? 'مركز شراء سيارات العائلة (2015 – 2024)' : 'Family Car Buying Command Center (2015–2024 Models)'}</span>
                </h3>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono">
                  Facebook Marketplace YYC
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isRtl 
                  ? 'أسعار فيسبوك ماركت بليس كالغاري لسيارات تويوتا، كيا، هوندا، هيونداي، ونيسان المناسبة لعائلة من 5 أفراد (أبناء 16، 11، 5 سنوات)'
                  : 'Calgary Facebook Marketplace pricing for Toyota, Kia, Honda, Hyundai & Nissan (2015–2024) optimized for a family of 5 (kids 16, 11, 5).'}
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 font-mono shrink-0">
              ★ 0% Alberta Sales Tax Saves ~$2,500–$4,000 vs. Ontario/BC
            </div>
          </div>

          {/* 24-HOUR LIVE VEHICLE FEEDS BANNER */}
          <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-950/40 via-slate-900 to-sky-950/30 border border-amber-500/30 mb-8 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <h4 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <RefreshCw className="w-4 h-4 text-amber-400" />
                  <span>{isRtl ? 'بوابة إعلانات السيارات الحية المباشرة (تحديث كل 24 ساعة)' : 'Live 24-Hour Vehicle Feeds (Direct FB Marketplace YYC)'}</span>
                </h4>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{isRtl ? live24hVehicleFeeds.arabicSyncFrequency : live24hVehicleFeeds.syncFrequency}</span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              {isRtl
                ? 'روابط بحث مباشرة تفتح إعلانات فيسبوك ماركت بليس المحدثة لحظياً لكل علامة تجارية في كالغاري (موديلات 2015 إلى 2024):'
                : 'Direct deep search channels for live Calgary vehicle inventory across the 5 target family brands (2015 to 2024):'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 pt-1">
              {live24hVehicleFeeds.marketplaceDirectLinks.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-xs transition-all flex flex-col justify-between group"
                >
                  <div>
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 block mb-1.5 w-fit">
                      {link.tag}
                    </span>
                    <strong className="text-slate-200 group-hover:text-white font-medium text-xs line-clamp-2">
                      {isRtl ? link.arabicBrand : link.brand}
                    </strong>
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[11px] text-amber-400 mt-2 font-mono">
                    <span>{isRtl ? 'فتح العروض الحية' : 'Open Feed'}</span>
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Brand Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-mono text-slate-400 mr-1">{isRtl ? 'اختر العلامة:' : 'Filter Make:'}</span>
            {brands.map((b) => (
              <button
                key={b}
                onClick={() => setSelectedBrand(b)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  selectedBrand === b
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-950/50'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {b === 'ALL' ? (isRtl ? 'جميع السيارات (15)' : 'All 5 Makes (15 Models)') : b}
              </button>
            ))}
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVehicles.map((car: FamilyVehicle) => (
              <div
                key={car.id}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-800/60 font-bold uppercase">
                          {car.brand}
                        </span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                          {car.modelYears}
                        </span>
                      </div>
                      <h4 className="text-sm sm:text-base font-bold text-white mt-1.5">
                        {isRtl ? car.arabicName : car.name}
                      </h4>
                    </div>
                  </div>

                  {/* Facebook Marketplace Price Matrix */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-3 space-y-1.5 font-mono text-xs">
                    <div className="flex justify-between items-center pb-1.5 border-b border-slate-800">
                      <span className="text-[10px] text-slate-400">FB Marketplace Range:</span>
                      <strong className="text-emerald-400 font-bold">{car.facebookMarketplaceCalgaryCAD}</strong>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Older Gen (2015–2018):</span>
                      <span className="text-slate-200">{car.facebookOlderGenCAD}</span>
                    </div>
                    <div className="flex justify-between text-[11px]">
                      <span className="text-slate-400">Newer Gen (2019–2024):</span>
                      <span className="text-slate-200">{car.facebookNewerGenCAD}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] mb-3 text-slate-300">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                      <span>{car.seatingCapacity} Seats • {car.type}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="truncate">{car.fuelEconomyL100km}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4 font-light">
                    {isRtl ? car.arabicFamilyFitNotes : car.familyFitNotes}
                  </p>
                </div>

                {/* Direct Action Links: Facebook Marketplace + AutoTrader */}
                <div className="pt-3 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1">
                      <Snowflake className="w-3.5 h-3.5 text-sky-400" />
                      <span>{car.winterAwdRating}</span>
                    </span>
                    <span className="text-emerald-400 font-mono">0% PST: Save ${car.albertaTaxSavingsVsOntarioCAD}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    <a
                      href={car.facebookMarketplaceSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors group"
                    >
                      <span>FB Marketplace</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-amber-400" />
                    </a>
                    <a
                      href={car.autoTraderSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors group"
                    >
                      <span>AutoTrader YYC</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-400" />
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
