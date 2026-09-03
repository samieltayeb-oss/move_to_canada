'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { newcomerBankPackages } from '@/data/banking';
import { creditFactors, newcomerCreditPlan } from '@/data/credit';
import { 
  Building2, 
  ExternalLink, 
  DollarSign, 
  CheckCircle, 
  Zap, 
  TrendingUp
} from 'lucide-react';

export function BankingCreditModule() {
  const { t, isRtl } = useApp();

  return (
    <section id="banking-credit" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300 mb-2">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              <span>FINANCIAL SETTLEMENT & CREDIT MATURATION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.bankingCredit.bankingTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Verified Big 6 + ATB newcomer packages, fee waivers, credit limits, and remittances
            </p>
          </div>
        </div>

        {/* Pure Cash vs Fee Savings Callout Alert */}
        <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-500/30 text-xs text-amber-200 mb-8 flex items-center gap-3">
          <DollarSign className="w-5 h-5 text-amber-400 shrink-0" />
          <span>{t.bankingCredit.pureCashNotice}</span>
        </div>

        {/* Bank Comparison Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {newcomerBankPackages.map((bank) => (
            <div
              key={bank.id}
              className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {bank.branchCountCalgaryApprox} Calgary Branches
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1.5">
                      {isRtl ? bank.arabicBankName : bank.bankName}
                    </h3>
                  </div>

                  <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 shrink-0">
                    {bank.chequingFeeWaiverMonths} Mos Free
                  </span>
                </div>

                {/* Best For Badge */}
                <div className="inline-block px-2.5 py-1 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-300 text-[11px] font-bold mb-4 font-mono">
                  {isRtl ? bank.arabicBestForBadge : bank.bestForBadge}
                </div>

                {/* Quantitative Value Grid */}
                <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Pure Cash Bonus:</span>
                    <span className="text-base font-bold text-emerald-400">
                      ${bank.pureCashBonusCAD} CAD
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Fee Savings:</span>
                    <span className="text-base font-bold text-white">
                      ${bank.totalFeeSavingsCAD.toFixed(2)}
                    </span>
                  </div>
                  <div className="col-span-2 pt-2 border-t border-slate-800">
                    <span className="text-slate-400 block text-[10px]">Credit Card Limit (No Credit History):</span>
                    <span className="text-sm font-bold text-sky-400">
                      Up to ${bank.maxAdvertisedCreditLimitCAD.toLocaleString()} CAD
                    </span>
                  </div>
                </div>

                {/* Features & Requirements */}
                <div className="space-y-2 text-xs text-slate-300 mb-4">
                  <p className="text-[11px]">
                    <strong className="text-slate-400">Cash Criteria:</strong> {bank.cashBonusRequirements}
                  </p>
                  <p className="text-[11px]">
                    <strong className="text-slate-400">Remittance:</strong> {bank.internationalTransferPerk}
                  </p>
                  {bank.novaCreditIntegration && (
                    <div className="p-2 rounded bg-indigo-950/50 border border-indigo-800 text-[11px] text-indigo-300">
                      ★ <strong>Nova Credit:</strong> Pulls overseas credit history for immediate prime limits.
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-[10px] text-slate-500 font-mono">Verified: {bank.lastVerified}</span>
                <a
                  href={bank.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                >
                  <span>Bank Portal</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Canadian Credit Architecture Section */}
        <div className="glass-panel-sky rounded-2xl p-6 sm:p-8 border border-sky-500/30 mb-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
              EQUIFAX & TRANSUNION CANADA
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              {t.bankingCredit.creditFactorsTitle}
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              Canadian credit bureaus score consumers on a 300–900 point scale. Arriving from Saudi Arabia, you begin as an &quot;unscorable thin file&quot; (not at 300). Five heavily tested factors determine your score trajectory.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {creditFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-white">
                      {isRtl ? factor.arabicName : factor.name}
                    </h4>
                    <span className="text-xs font-mono font-bold text-amber-400">
                      {factor.weightPercent}%
                    </span>
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed mb-3">
                    {isRtl ? factor.arabicDescription : factor.description}
                  </p>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[10px] text-sky-300">
                  <strong>Action:</strong> {isRtl ? factor.arabicActionRule : factor.actionRule}
                </div>
              </div>
            ))}
          </div>

          {/* Statement Date Hack Callout */}
          <div className="p-4 rounded-xl bg-sky-950/70 border border-sky-500/40 text-xs sm:text-sm">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-sky-200 block mb-1">
                  The Newcomer Statement Date Utilization Hack:
                </strong>
                <p className="text-slate-300 text-xs leading-relaxed">
                  {t.bankingCredit.statementDateHack}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 12-Month Credit Building Blueprint Timeline */}
        <div>
          <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-400" />
            <span>{t.bankingCredit.twelveMonthPlanTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {newcomerCreditPlan.map((step, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-5 border border-slate-800/80 text-xs flex flex-col justify-between relative"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold text-sky-400">
                      {isRtl ? step.arabicMonth : step.month}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                      {step.targetScore}
                    </span>
                  </div>

                  <h4 className="font-bold text-white text-sm mb-3">
                    {isRtl ? step.arabicTitle : step.title}
                  </h4>

                  <ul className="space-y-2 text-slate-300 text-[11px] mb-4">
                    {(isRtl ? step.arabicActions : step.actions).map((act, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 text-[10px] text-slate-400 italic">
                  {isRtl ? step.arabicOperationalSecret : step.operationalSecret}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
