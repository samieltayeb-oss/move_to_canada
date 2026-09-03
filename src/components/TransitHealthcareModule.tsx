'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { calgaryTransitFares2026, ctrainNetworkDetails, calculateFamilyMonthlyTransitCost } from '@/data/transit';
import { ahcipCoverageMatrix, healthcareNavigation } from '@/data/healthcare';
import { 
  Train, 
  HeartPulse, 
  ExternalLink, 
  CheckCircle, 
  XCircle, 
  PhoneCall, 
  Search, 
  ShieldCheck
} from 'lucide-react';

export function TransitHealthcareModule() {
  const { familyProfile, isRtl } = useApp();

  const transitCalculation = calculateFamilyMonthlyTransitCost(
    familyProfile.numAdults,
    familyProfile.childrenAges
  );

  return (
    <section id="transit-healthcare" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dual Module Layout: Left Transit, Right Healthcare */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left: Calgary Transit Command */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                <Train className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Calgary Transit 2026 Network
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              CTrain LRT lines, downtown free zone, and permanent free transit for children 12 &amp; under
            </p>

            {/* Family Calculation Card */}
            <div className="glass-panel-sky rounded-2xl p-5 mb-6 border border-sky-500/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold block mb-1">
                    Family Monthly Transit Scenario
                  </span>
                  <div className="text-2xl font-black font-mono text-white">
                    ${transitCalculation.monthlyTotalCAD} CAD
                    <span className="text-xs text-slate-400 font-normal"> / month</span>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 font-mono">
                    {isRtl ? transitCalculation.arabicBreakdown : transitCalculation.englishBreakdown}
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-800 text-right shrink-0">
                  <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold block">
                    Children &le;12 Policy
                  </span>
                  <span className="text-base font-bold text-white font-mono">100% FREE</span>
                </div>
              </div>
            </div>

            {/* Fares Table */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 mb-6 text-xs">
              <h4 className="font-bold text-white mb-3 flex items-center justify-between">
                <span>Official 2026 Fare Schedule</span>
                <span className="text-[10px] font-mono text-slate-400">Calgary Transit</span>
              </h4>

              <div className="space-y-2.5">
                {calgaryTransitFares2026.map((fare, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-3">
                    <div>
                      <span className="font-semibold text-white block">
                        {isRtl ? fare.arabicCategory : fare.category}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {isRtl ? fare.arabicConditions : fare.conditions}
                      </span>
                    </div>

                    <div className="text-right shrink-0 font-mono">
                      <span className="text-sm font-bold text-white block">
                        {fare.monthlyPassCAD === 0 ? 'FREE' : `$${fare.monthlyPassCAD.toFixed(2)}`}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        Single: ${fare.singleTicketCAD.toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTrain & Green Line Status */}
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 space-y-2">
              <p>
                <strong>Downtown Free Fare Zone:</strong> {isRtl ? ctrainNetworkDetails.arabicFreeFareZone : ctrainNetworkDetails.freeFareZone}
              </p>
              <p className="text-slate-400 text-[11px]">
                {ctrainNetworkDetails.greenLineStatus}
              </p>
            </div>
          </div>

          {/* Right: Healthcare & AHCIP Command */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Alberta Health (AHCIP) Setup
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Zero waiting period for international arrivals, covered vs. excluded services, and finding a doctor
            </p>

            {/* Zero-Wait Badge Callout */}
            <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 text-xs sm:text-sm mb-6 text-slate-200">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-emerald-300">
                    Zero Waiting Period for International Arrivals
                  </h4>
                  <p className="text-slate-300 mt-1 leading-relaxed text-xs">
                    Unlike BC or Ontario (which historically enforced 3-month wait periods), newcomers moving directly to Alberta from abroad are eligible for AHCIP <strong>effective the exact date residency is established</strong>. Apply in person at an Alberta Registry Agent office.
                  </p>
                </div>
              </div>
            </div>

            {/* Covered vs NOT Covered Matrix */}
            <div className="glass-panel rounded-2xl p-5 border border-slate-800/80 mb-6 text-xs">
              <h4 className="font-bold text-white mb-3">
                What AHCIP Covers vs. What Requires Private Insurance
              </h4>

              <div className="space-y-2">
                {ahcipCoverageMatrix.map((item, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                    {item.isCoveredByAHCIP ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <XCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <strong className="text-white">
                          {isRtl ? item.arabicName : item.name}
                        </strong>
                        <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                          item.isCoveredByAHCIP ? 'bg-emerald-950 text-emerald-300' : 'bg-amber-950 text-amber-300'
                        }`}>
                          {item.isCoveredByAHCIP ? '100% Covered' : 'Out-of-Pocket / Private'}
                        </span>
                      </div>
                      <p className="text-slate-400 text-[11px] mt-0.5">
                        {isRtl ? item.arabicNotes : item.notes}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 811 & Find a Doctor Portals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-sky-400 font-bold mb-1">
                  <PhoneCall className="w-4 h-4" />
                  <span>{isRtl ? healthcareNavigation.healthLink811.arabicTitle : healthcareNavigation.healthLink811.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {isRtl ? healthcareNavigation.healthLink811.arabicDescription : healthcareNavigation.healthLink811.description}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                  <Search className="w-4 h-4" />
                  <span>{isRtl ? healthcareNavigation.findADoctor.arabicTitle : healthcareNavigation.findADoctor.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-2">
                  {isRtl ? healthcareNavigation.findADoctor.arabicDescription : healthcareNavigation.findADoctor.description}
                </p>
                <a
                  href={healthcareNavigation.findADoctor.portalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-400 hover:text-sky-300 font-mono text-[10px] flex items-center gap-1 font-medium"
                >
                  <span>albertafindadoctor.ca</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
