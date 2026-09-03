'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calgaryFitDimensions, calculateCalgaryFitScore } from '@/data/calgaryScore';
import { 
  Sliders, 
  RotateCcw, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Award
} from 'lucide-react';

export function ExecutiveDecisionDashboard() {
  const { t, isRtl, openSourceModal } = useApp();
  const [customWeights, setCustomWeights] = useState<Record<string, number>>({});
  const [showWeightSliders, setShowWeightSliders] = useState(false);

  const currentScore = calculateCalgaryFitScore(customWeights);

  const handleWeightChange = (id: string, value: number) => {
    setCustomWeights(prev => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setCustomWeights({});
  };

  return (
    <section id="executive-fit" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <Award className="w-3.5 h-3.5 text-sky-400" />
              <span>DECISION INTELLIGENCE MATRIX</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.decisionDashboard.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.decisionDashboard.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowWeightSliders(!showWeightSliders)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs font-medium text-slate-200 transition-colors"
            >
              <Sliders className="w-3.5 h-3.5 text-sky-400" />
              <span>{showWeightSliders ? 'Hide Sliders' : t.decisionDashboard.adjustWeights}</span>
            </button>

            {Object.keys(customWeights).length > 0 && (
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>{t.decisionDashboard.resetWeights}</span>
              </button>
            )}
          </div>
        </div>

        {/* Master Score Display Card */}
        <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 mb-8 border border-amber-500/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                EVIDENCE-BASED SYNTHESIS
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.decisionDashboard.overallScore}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {t.decisionDashboard.methodologyNote}
              </p>
            </div>

            {/* Circular / Badge Score */}
            <div className="flex items-center gap-4 bg-slate-950/80 p-5 rounded-2xl border border-amber-500/40 shadow-inner">
              <div className="text-center">
                <span className="text-4xl sm:text-5xl font-black text-amber-300 font-mono tracking-tight">
                  {currentScore}
                </span>
                <span className="text-lg font-bold text-slate-500">/100</span>
                <span className="block text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mt-0.5">
                  Strong Relocation Fit
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* FINAL FAMILY COMMAND METRICS (SECTION 164 MASTER KPIS) */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Executive Synthesis
              </span>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {isRtl ? 'ملخص القرار العائلي الشامل لياسر' : 'Yassir’s Master Family Relocation KPI Dashboard'}
              </h3>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono text-xs font-bold text-center">
              Arrival Readiness: 92% Ready
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 text-xs font-mono">
            {/* KPI 1 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Calgary Family Fit</span>
              <strong className="text-base text-amber-300 font-extrabold">{currentScore}/100</strong>
              <span className="text-[10px] text-emerald-400 block mt-0.5">Top-Tier Quality of Life</span>
            </div>

            {/* KPI 2 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Best Neighbourhoods</span>
              <strong className="text-white font-bold truncate block text-xs">Cornerstone &amp; Saddleridge</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">NE Calgary Family Hubs</span>
            </div>

            {/* KPI 3 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">3-Bed Rent (Market)</span>
              <strong className="text-white font-bold text-sm">$2,450 CAD</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">/ mo (Rentals.ca)</span>
            </div>

            {/* KPI 4 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">4-Bed Rent (Market)</span>
              <strong className="text-white font-bold text-sm">$2,850 CAD</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">/ mo (Active Listings)</span>
            </div>

            {/* KPI 5 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Monthly Groceries (5)</span>
              <strong className="text-white font-bold text-sm">$1,650 CAD</strong>
              <span className="text-[10px] text-emerald-400 block mt-0.5">100% Halal + Costco</span>
            </div>

            {/* KPI 6 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Gas &amp; Commute</span>
              <strong className="text-white font-bold text-sm">$280 CAD</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">/ mo (144.9¢/L StatsCan)</span>
            </div>

            {/* KPI 7 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Total Monthly Outlay</span>
              <strong className="text-rose-300 font-bold text-sm">~$5,850 CAD</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Housing, Food, Auto, Util</span>
            </div>

            {/* KPI 8 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Salary Target</span>
              <strong className="text-sky-300 font-bold text-sm">$125K–$145K</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">NOC 20012 IT PMO</span>
            </div>

            {/* KPI 9 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Est. Gov Benefits</span>
              <strong className="text-emerald-300 font-bold text-sm">~$18,400 CAD</strong>
              <span className="text-[10px] text-emerald-400 block mt-0.5">/ yr (CCB + CGEB + ACFB)</span>
            </div>

            {/* KPI 10 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Best Newcomer Bank</span>
              <strong className="text-amber-300 font-bold text-xs truncate block">ATB &amp; RBC</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">$15k Credit / Alberta Perks</span>
            </div>

            {/* KPI 11 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">ATS Resume Status</span>
              <strong className="text-emerald-400 font-bold text-sm">READY (95/100)</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">1-Col Enterprise Validated</span>
            </div>

            {/* KPI 12 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">AHCIP &amp; Health</span>
              <strong className="text-sky-300 font-bold text-xs">0-DAY WAIT</strong>
              <span className="text-[10px] text-amber-400 block mt-0.5">Apply within 3 Months</span>
            </div>

            {/* KPI 13 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Dental Coverage</span>
              <strong className="text-white font-bold text-xs">EMPLOYER / CDCP</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Group benefits primary</span>
            </div>

            {/* KPI 14 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Schools Plan</span>
              <strong className="text-white font-bold text-xs">CBE PUBLIC $0</strong>
              <span className="text-[10px] text-sky-400 block mt-0.5">Ages 16, 11, 5 (CIS Alt)</span>
            </div>

            {/* KPI 15 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Islamic Life</span>
              <strong className="text-emerald-300 font-bold text-xs truncate block">Akram Jomaa</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">5-min drive in NE</span>
            </div>

            {/* KPI 16 */}
            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-[10px] text-slate-400 block uppercase">Overall Readiness</span>
              <strong className="text-emerald-400 font-extrabold text-sm">92% STAGED</strong>
              <span className="text-[10px] text-slate-400 block mt-0.5">Docs, Housing, Jobs Ready</span>
            </div>
          </div>
        </div>

        {/* Dynamic Weight Sliders Panel (If toggled) */}
        {showWeightSliders && (
          <div className="glass-panel rounded-2xl p-6 mb-8 border border-sky-500/30 animate-in fade-in duration-200">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
              <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-sky-400" />
                <span>Adjust Priority Weightings (Default: 100% Normalized)</span>
              </h4>
              <span className="text-xs text-sky-400 font-mono">Changes update score live</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
              {calgaryFitDimensions.map((dim) => {
                const currentW = customWeights[dim.id] !== undefined ? customWeights[dim.id] : dim.defaultWeight;
                return (
                  <div key={dim.id} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
                    <div className="flex items-center justify-between text-slate-300 mb-1.5 font-medium">
                      <span>{isRtl ? dim.arabicName : dim.name}</span>
                      <span className="font-mono text-sky-400">{currentW}%</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="35"
                      value={currentW}
                      onChange={(e) => handleWeightChange(dim.id, parseInt(e.target.value))}
                      className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 13 Dimension Breakdown Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {calgaryFitDimensions.map((dim) => (
            <div
              key={dim.id}
              className="glass-panel glass-card-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2.5">
                  <div className="flex items-center gap-2">
                    <div className={`p-1.5 rounded-lg ${dim.isStrength ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'}`}>
                      {dim.isStrength ? <CheckCircle2 className="w-4 h-4" /> : <AlertCircle className="w-4 h-4" />}
                    </div>
                    <h4 className="text-sm font-bold text-white">
                      {isRtl ? dim.arabicName : dim.name}
                    </h4>
                  </div>

                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-slate-800">
                    {dim.score}/100
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {isRtl ? dim.arabicRationale : dim.rationale}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span className="font-mono truncate max-w-[170px]" title={dim.benchmarkValue}>
                  {dim.benchmarkValue}
                </span>

                <button
                  onClick={() => openSourceModal(dim.sourceId)}
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors font-medium"
                >
                  <span>{t.common.source}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
