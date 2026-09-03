'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { internetPlans, mobilePlans } from '@/data/telecom';
import { calgaryMunicipalUtilityRates, seasonalUtilityProfiles } from '@/data/utilities';
import { 
  Wifi, 
  Smartphone, 
  ExternalLink, 
  PhoneCall
} from 'lucide-react';

export function TelecomUtilitiesModule() {
  const { t, openSourceModal, isRtl } = useApp();

  return (
    <section id="telecom-utilities" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-2">
              <Wifi className="w-3.5 h-3.5 text-cyan-400" />
              <span>HOME TELECOM & UTILITIES ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.telecomUtilities.internetTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Broadband comparisons, mobile lines, calls to Saudi Arabia, and Calgary municipal utilities
            </p>
          </div>
        </div>

        {/* Internet Section: TELUS PureFibre vs Rogers Xfinity */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Wifi className="w-4 h-4 text-sky-400" />
              <span>Calgary High-Speed Broadband Plans</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">2-Year Promotional Rates</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {internetPlans.map((plan) => (
              <div
                key={plan.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-white">{plan.provider}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-semibold">
                      {isRtl ? plan.arabicBestFor : plan.bestFor}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-sky-400 mb-1">{plan.speedTier}</h4>
                  <p className="text-[11px] text-slate-400 mb-4">{plan.technology}</p>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 text-xs font-mono">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-slate-400">Promo Price:</span>
                      <span className="text-xl font-bold text-emerald-400">
                        ${plan.promoPriceMonthlyCAD} CAD/mo
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>Regular Price:</span>
                      <span>${plan.regularPriceMonthlyCAD} CAD/mo</span>
                    </div>
                    <div className="flex justify-between text-[11px] text-sky-400 pt-2 border-t border-slate-800 mt-2">
                      <span>Download / Upload:</span>
                      <span>{plan.downloadSpeedMbps}M / {plan.uploadSpeedMbps}M {plan.isSymmetrical ? '(Symmetrical)' : ''}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isRtl ? plan.arabicNotes : plan.notes}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-500 font-mono">24-Mo Contract</span>
                  <button
                    onClick={() => openSourceModal(plan.sourceId)}
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>{t.common.source}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Plans & Saudi Calling Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {/* Mobile Plans List (2 Columns) */}
          <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-slate-800/80">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Smartphone className="w-4 h-4 text-amber-400" />
                <span>{t.telecomUtilities.mobileTitle}</span>
              </h3>
              <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                CRTC Banned Activation Fees (June 2026)
              </span>
            </div>

            <div className="space-y-3 text-xs">
              {mobilePlans.map((m) => (
                <div key={m.id} className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white">{m.carrier}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                        {m.tier}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{m.dataAllowanceGB} • {m.networkType}</p>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-base font-bold text-white font-mono">${m.monthlyPriceCAD}</span>
                    <span className="text-[10px] text-slate-400 block font-mono">
                      2 Lines: ${m.monthlyPrice2AdultLinesCAD}/mo
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Saudi Arabia Calling Strategy Card */}
          <div className="glass-panel-gold rounded-2xl p-6 border border-amber-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <PhoneCall className="w-5 h-5" />
                <h4 className="text-sm font-bold uppercase tracking-wider">
                  {t.telecomUtilities.saudiCallingTitle}
                </h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Standard Canadian mobile pay-per-minute calls to Saudi Arabia cost <strong>$2.50 to $3.50/minute</strong>. Avoid legacy carrier charges with modern zero-cost VoIP:
              </p>

              <div className="space-y-2 text-xs text-slate-200">
                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-emerald-400 block">1. WhatsApp / FaceTime ($0 Cost):</strong>
                  <span className="text-[11px] text-slate-300">Runs completely free over home Wi-Fi and 5G data buckets.</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-sky-400 block">2. Skype Out / Rebtel (Landlines):</strong>
                  <span className="text-[11px] text-slate-300">~$0.20/min to call Saudi banks or government offices directly.</span>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                  <strong className="text-amber-400 block">3. Carrier Long-Distance Add-On:</strong>
                  <span className="text-[11px] text-slate-300">$7–$10/mo add-on lowers carrier calls to ~$0.45/min.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-400">
              Do not rely on carrier &quot;international promo minutes&quot; as Gulf destinations are universally excluded.
            </div>
          </div>
        </div>

        {/* Alberta Utilities & Calgary Municipal Billing Section */}
        <div>
          <div className="max-w-3xl mb-6">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              CITY OF CALGARY & ENMAX ENERGY
            </span>
            <h3 className="text-xl font-bold text-white mt-1">
              {t.telecomUtilities.utilitiesTitle}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Alberta operates Canada&apos;s only deregulated energy market. In Calgary, electricity, natural gas, water, wastewater, stormwater, and waste carts are consolidated onto a single monthly ENMAX bill.
            </p>
          </div>

          {/* Municipal Baseline Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {calgaryMunicipalUtilityRates.map((rate, i) => (
              <div key={i} className="glass-panel rounded-xl p-4 border border-slate-800 text-xs">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-slate-300 font-semibold">
                    {isRtl ? rate.arabicService : rate.service}
                  </span>
                </div>
                <div className="flex items-baseline gap-1 font-mono text-base font-bold text-white mb-1">
                  <span>${rate.typicalMonthlyCAD.toFixed(2)}</span>
                  <span className="text-[10px] text-slate-400">CAD/mo</span>
                </div>
                <p className="text-[10px] text-slate-400">
                  {isRtl ? rate.arabicNotes : rate.notes}
                </p>
              </div>
            ))}
          </div>

          {/* Seasonal Comparison Cards (Summer vs Deep Winter) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonalUtilityProfiles.map((season, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
                    <h4 className="text-sm font-bold text-white">
                      {isRtl ? season.arabicSeason : season.season}
                    </h4>
                    <span className="text-base font-bold font-mono text-sky-400">
                      {season.totalMonthlyRangeCAD}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 font-mono text-[11px]">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Electricity:</span>
                      <span className="text-slate-200">{season.electricityCAD}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Natural Gas (Heating):</span>
                      <span className="text-amber-300">{season.naturalGasCAD}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">City Services:</span>
                      <span className="text-slate-200">{season.municipalServicesCAD}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Delivery Riders:</span>
                      <span className="text-slate-200">{season.adminAndRidersCAD}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isRtl ? season.arabicDriverExplanation : season.driverExplanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
