'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calculateCanadianTax } from '@/data/taxes';
import { calgaryEmployerLandscape, calgarySalaryBenchmarks, verifiedProfileAudit } from '@/data/career';
import { 
  DollarSign, 
  TrendingUp, 
  ShieldCheck, 
  ExternalLink, 
  Building, 
  Scale
} from 'lucide-react';

export function TaxesCareerModule() {
  const { t, familyProfile, openSourceModal, isRtl } = useApp();
  const [incomeInput, setIncomeInput] = useState<number>(familyProfile.expectedAnnualHouseholdIncomeCAD);

  const isPR = familyProfile.immigrationStatus === 'Permanent Resident';
  const taxResult = calculateCanadianTax(
    incomeInput,
    familyProfile.childrenAges,
    isPR
  );

  return (
    <section id="taxes-career" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>TAXATION, TAKE-HOME PAY & FINANCIAL SECTOR CAREERS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.career.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.career.subtitle}
            </p>
          </div>
        </div>

        {/* Verified Profile Audit Callout Alert */}
        <div className="glass-panel-sky rounded-2xl p-6 border border-sky-500/40 mb-10 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-white text-base">
                  Candidate Profile: {verifiedProfileAudit.candidateName}
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  Verified Indexing
                </span>
              </div>
              <p className="text-slate-300 text-xs">
                <strong>Public Affiliation:</strong> {verifiedProfileAudit.publiclyVerifiedAffiliation} ({verifiedProfileAudit.publiclyVerifiedIndustry})
              </p>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                {isRtl ? verifiedProfileAudit.arabicUnverifiedAssumptionsWarning : verifiedProfileAudit.unverifiedAssumptionsWarning}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Salary-to-Take-Home Calculator */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800/80 mb-14">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                2026 TAX ENGINE (FEDERAL + ALBERTA)
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Household Salary to Net Take-Home Pay Estimator
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Calculates federal &amp; Alberta progressive tax, CPP/EI, and Canada Child Benefit (CCB)
              </p>
            </div>

            {/* Income Slider */}
            <div className="w-full md:w-72">
              <div className="flex justify-between text-xs font-mono text-slate-300 mb-1">
                <span>Gross Income:</span>
                <span className="font-bold text-emerald-400">${incomeInput.toLocaleString()} CAD</span>
              </div>
              <input
                type="range"
                min="60000"
                max="250000"
                step="5000"
                value={incomeInput}
                onChange={(e) => setIncomeInput(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Tax Result Metrics Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-mono text-xs mb-6">
            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-1">Federal Tax (14–33%):</span>
              <span className="text-base font-bold text-white">${taxResult.federalTaxCAD.toLocaleString()}</span>
              <span className="text-[10px] text-slate-500 block mt-0.5">BPA: $16,452</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-1">Alberta Tax (8–15%):</span>
              <span className="text-base font-bold text-white">${taxResult.albertaTaxCAD.toLocaleString()}</span>
              <span className="text-[10px] text-emerald-400 block mt-0.5">BPA: $22,769 (High)</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-1">CPP &amp; EI Deductions:</span>
              <span className="text-base font-bold text-white">
                ${(taxResult.cppContributionCAD + taxResult.eiPremiumCAD).toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-500 block mt-0.5">Statutory 2026 Max</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-1">Average Tax Rate:</span>
              <span className="text-base font-bold text-amber-400">{taxResult.averageTaxRatePercent}%</span>
              <span className="text-[10px] text-slate-400 block mt-0.5">Marginal: {taxResult.marginalTaxRatePercent}%</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
              <span className="text-[10px] text-slate-400 block mb-1">Est. Canada Child Benefit:</span>
              <span className="text-base font-bold text-sky-400">
                {taxResult.isCcbEligible ? `+$${taxResult.canadaChildBenefitEstimatedAnnualCAD.toLocaleString()}/yr` : '$0 (Work Permit)'}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                {taxResult.isCcbEligible ? 'Tax-free monthly cash' : '18-mo wait applies'}
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40">
              <span className="text-[10px] text-emerald-300 uppercase font-bold block mb-1">
                Net Monthly Take-Home:
              </span>
              <span className="text-xl font-black text-emerald-400">
                ${taxResult.netMonthlyTakeHomeCAD.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                ${taxResult.netAnnualTakeHomeCAD.toLocaleString()} CAD/yr
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-slate-800">
            <span>Provincial Sales Tax: <strong>0% PST (Save 5–10% on all retail vs ON/BC/QC)</strong></span>
            <button
              onClick={() => openSourceModal('SRC-GOV-005')}
              className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
            >
              <span>View CRA &amp; Alberta Treasury Tax Tables</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Calgary Financial Sector Employers & Salary Benchmarks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Employers Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Building className="w-4 h-4 text-sky-400" />
              <span>{t.career.employersTitle}</span>
            </h3>

            <div className="space-y-4 text-xs">
              {calgaryEmployerLandscape.map((emp, idx) => (
                <div key={idx} className="glass-panel rounded-xl p-4 border border-slate-800/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-bold text-white">
                      {isRtl ? emp.arabicCategory : emp.category}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-2 font-mono text-[10px]">
                    {emp.employers.map((e, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-slate-900 text-sky-300 border border-slate-800">
                        {e}
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {isRtl ? emp.arabicMarketFocus : emp.calgaryMarketFocus}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Salary Benchmarks & Toronto Trade-off Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>{t.career.salaryTitle}</span>
            </h3>

            <div className="space-y-3 text-xs mb-6">
              {calgarySalaryBenchmarks.map((sal, idx) => (
                <div key={idx} className="glass-panel rounded-xl p-4 border border-slate-800/80">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-white">
                      {isRtl ? sal.arabicRoleTitle : sal.roleTitle}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {sal.jobBankNocCode}
                    </span>
                  </div>

                  <div className="flex items-baseline gap-2 font-mono my-1.5">
                    <span className="text-base font-bold text-emerald-400">
                      ${sal.medianCAD.toLocaleString()} CAD
                    </span>
                    <span className="text-[11px] text-slate-400">
                      (Range: ${sal.lowEndCAD.toLocaleString()} – ${sal.highEndCAD.toLocaleString()})
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-slate-800/60">
                    <span>Bonus: <strong className="text-amber-300">{sal.bonusExpectation}</strong></span>
                    <span className="text-[10px] text-slate-500">{sal.sourceNotes}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Calgary vs Toronto Strategic Finance Trade-Off Card */}
            <div className="glass-panel-gold rounded-xl p-5 border border-amber-500/30 text-xs">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>{t.career.calgaryVsTorontoFinance}</span>
              </h4>
              <ul className="space-y-2 text-slate-300 text-[11px] leading-relaxed">
                <li>
                  • <strong>Toronto (Bay St):</strong> 5x larger capital markets, global investment banking, and deepest liquidity. However, average detached homes cost ~$1.4M CAD, 13% HST, double land transfer tax, and 45+ min commutes.
                </li>
                <li>
                  • <strong>Calgary (Downtown):</strong> Specialized in corporate debt, energy risk, private wealth, and AIMCo. Detached 4-bed homes are ~$680k–$750k CAD, 0% PST, Canada&apos;s highest personal tax exemption, and 20–30 min commutes.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
