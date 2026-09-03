'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import {
  newcomerBankPackages,
  youthBankingComparison,
  defaultBankWeights,
  calculateBankFitScore,
  newcomerBankingRoadmap,
  BankScoringWeights
} from '@/data/banking';
import { creditFactors } from '@/data/credit';
import {
  Building2,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  Award,
  Users,
  CheckSquare
} from 'lucide-react';

export function BankingCreditModule() {
  const { isRtl } = useApp();
  const [weights, setWeights] = useState<BankScoringWeights>(defaultBankWeights);
  const [activeSubTab, setActiveSubTab] = useState<'PACKAGES' | 'FIT_SCORE' | 'YOUTH' | 'ROADMAP'>('PACKAGES');

  // Calculate scores for all packages
  const scoredPackages = newcomerBankPackages.map(pkg => ({
    ...pkg,
    fitScore: calculateBankFitScore(pkg, weights)
  })).sort((a, b) => b.fitScore - a.fitScore);

  return (
    <section id="banking-credit" className="py-8 space-y-10">
      {/* Educational Credit Limit Callout Warning */}
      <div className="glass-panel p-5 rounded-2xl border border-amber-500/40 bg-amber-950/20 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div>
          <strong className="text-amber-200 block text-sm">
            {isRtl ? 'تحذير نظامي هام: الحد الائتماني لبطاقة الائتمان ليس مالاً مجانياً' : 'Crucial Newcomer Rule: A $15,000 Credit Card Limit is CREDIT, NOT Free Cash'}
          </strong>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed font-light">
            {isRtl
              ? 'عندما يمنحك بنك مثل RBC أو TD أو CIBC بطاقة ائتمان بحد 15,000 دولار بدون تاريخ ائتماني كندي، فهذا ليس مكافأة نقدية. يجب سداد الفاتورة شهرياً قبل تاريخ الاستحقاق لتجنب فوائد تتجاوز 20.99%، مع الحفاظ على نسبة الاستخدام أقل من 30% لبناء سجل ممتاز.'
              : 'When banks offer up to a $15,000 credit limit without Canadian credit history, this represents a line of credit, not cash. To build a 720+ credit score, keep your monthly statement balance under 25%–30% of the limit and always pay 100% of the statement balance by the due date to avoid 20.99%+ interest.'}
          </p>
        </div>
      </div>

      {/* Sub Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveSubTab('PACKAGES')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSubTab === 'PACKAGES'
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Building2 className="w-4 h-4 text-amber-300" />
          <span>Newcomer Bank Packages (Big 5 + ATB)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('FIT_SCORE')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSubTab === 'FIT_SCORE'
              ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4 text-sky-300" />
          <span>Bank Fit Score Engine (Weighted)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('YOUTH')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSubTab === 'YOUTH'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Users className="w-4 h-4 text-emerald-300" />
          <span>Children’s Accounts (Ages 16, 11, 5)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('ROADMAP')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeSubTab === 'ROADMAP'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <CheckSquare className="w-4 h-4 text-purple-300" />
          <span>Banking Action Roadmap</span>
        </button>
      </div>

      {/* TAB 1: NEWCOMER BANK PACKAGES */}
      {activeSubTab === 'PACKAGES' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scoredPackages.map((bank) => (
              <div
                key={bank.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                        {bank.calgaryBranchCount} Calgary Branches
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1.5">
                        {isRtl ? bank.arabicBankName : bank.bankName}
                      </h3>
                      <span className="text-xs text-slate-400 font-light block">{bank.programName}</span>
                    </div>

                    <div className="text-right">
                      <span className="text-[10px] font-mono font-bold px-2 py-1 rounded bg-amber-950 text-amber-300 border border-amber-800 shrink-0 block">
                        {bank.feeFreePeriodMonths} Mos $0 Fee
                      </span>
                      <span className="text-[11px] font-mono text-emerald-400 font-bold mt-1 block">
                        Fit: {bank.fitScore}/100
                      </span>
                    </div>
                  </div>

                  {/* Best Category Badge */}
                  <div className="inline-block px-2.5 py-1 rounded-lg bg-sky-950/80 border border-sky-800 text-sky-300 text-[11px] font-bold mb-4 font-mono">
                    {isRtl ? bank.arabicBestCategoryBadge : bank.bestCategoryBadge}
                  </div>

                  {/* Quantitative Breakdown Grid (Pure Cash vs Value) */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 text-xs font-mono">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Real Cash Bonus:</span>
                      <span className="text-sm font-bold text-emerald-400">
                        ${bank.realCashBonusCAD} CAD
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Fee Waiver Savings:</span>
                      <span className="text-sm font-bold text-white">
                        ${bank.accountFeeSavingsFirstYearCAD.toFixed(2)}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Max Credit Limit:</span>
                      <span className="text-sm font-bold text-sky-400">
                        Up to ${bank.maxAdvertisedCreditLimitCAD.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Realistic 1st-Yr Value:</span>
                      <span className="text-sm font-bold text-amber-400">
                        ${bank.realisticFirstYearValueForYassirCAD.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Saudi Remittances & Notes */}
                  <div className="space-y-2 text-xs text-slate-300 mb-4">
                    <p className="text-[11px]">
                      <strong className="text-slate-400">Cash Criteria:</strong> {bank.cashBonusConditions}
                    </p>
                    <p className="text-[11px]">
                      <strong className="text-slate-400">Saudi Transfers:</strong> {bank.saudiArabiaTransferSupport}
                    </p>
                    <p className="text-[11px]">
                      <strong className="text-slate-400">Mortgage Program:</strong> {bank.mortgageNewcomerProgram}
                    </p>
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
                    <span>Official Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: BANK FIT SCORE ENGINE */}
      {activeSubTab === 'FIT_SCORE' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-sky-400" />
                <span>Customizable Newcomer Bank Fit Scoring Matrix</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Weights default to newcomer priorities (Credit Building 25%, Fees 15%, Cash 15%, Saudi Transfers 10%). Adjust sliders to personalize.
              </p>
            </div>

            {/* Sliders Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex justify-between mb-1">
                  <span>Credit Building:</span>
                  <strong className="text-sky-400">{(weights.creditBuilding * 100).toFixed(0)}%</strong>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.50"
                  step="0.05"
                  value={weights.creditBuilding}
                  onChange={(e) => setWeights({ ...weights, creditBuilding: Number(e.target.value) })}
                  className="w-full accent-sky-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex justify-between mb-1">
                  <span>Monthly Fee Waivers:</span>
                  <strong className="text-emerald-400">{(weights.monthlyFees * 100).toFixed(0)}%</strong>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.monthlyFees}
                  onChange={(e) => setWeights({ ...weights, monthlyFees: Number(e.target.value) })}
                  className="w-full accent-emerald-500"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex justify-between mb-1">
                  <span>Cash Welcome Bonus:</span>
                  <strong className="text-amber-400">{(weights.cashBonus * 100).toFixed(0)}%</strong>
                </div>
                <input
                  type="range"
                  min="0.05"
                  max="0.40"
                  step="0.05"
                  value={weights.cashBonus}
                  onChange={(e) => setWeights({ ...weights, cashBonus: Number(e.target.value) })}
                  className="w-full accent-amber-500"
                />
              </div>
            </div>

            {/* Ranked Scoreboard Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 font-mono">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Rank</th>
                    <th className="p-3">Bank Institution</th>
                    <th className="p-3">Credit Score (25%)</th>
                    <th className="p-3">Fee Score (15%)</th>
                    <th className="p-3">Cash Score (15%)</th>
                    <th className="p-3">Saudi Transfer (10%)</th>
                    <th className="p-3 text-emerald-400 font-bold">Total Weighted Fit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {scoredPackages.map((b, idx) => (
                    <tr key={b.id} className="hover:bg-slate-900/50">
                      <td className="p-3 font-bold text-white">#{idx + 1}</td>
                      <td className="p-3 font-bold text-white">{b.bankName}</td>
                      <td className="p-3">{b.scores.creditBuilding}/100</td>
                      <td className="p-3">{b.scores.monthlyFees}/100</td>
                      <td className="p-3">{b.scores.cashBonus}/100</td>
                      <td className="p-3">{b.scores.saudiTransfers}/100</td>
                      <td className="p-3 text-emerald-300 font-extrabold text-sm">{b.fitScore} / 100</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CHILDREN YOUTH BANKING (AGES 16, 11, 5) */}
      {activeSubTab === 'YOUTH' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <span>Children &amp; Youth Banking Comparison (Ages 16, 11, and 5)</span>
            </h3>
            <p className="text-xs text-slate-400">
              Free youth accounts designed to teach financial literacy, provide safe debit cards, and link to parental mobile banking.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {youthBankingComparison.map((acct, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-800">
                    <strong className="text-white text-sm">{acct.bankName}</strong>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300">
                      {acct.monthlyFee}
                    </span>
                  </div>
                  <div className="space-y-1 text-slate-300 font-light">
                    <div>• <strong>Account:</strong> {acct.accountName}</div>
                    <div>• <strong>Debit Card:</strong> {acct.debitCardProvided}</div>
                    <div>• <strong>Ages:</strong> {acct.ageEligibility}</div>
                    <div>• <strong>Parental Oversight:</strong> {acct.parentalSupervision}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-sky-300 mt-2">
                    ★ {acct.recommendationForYassirKids}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: BANKING ACTION ROADMAP */}
      {activeSubTab === 'ROADMAP' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase block">1. Before Arrival</span>
              <strong className="text-white block">{newcomerBankingRoadmap.beforeArrival.stage}</strong>
              <ul className="space-y-1.5 text-slate-300 font-light">
                {newcomerBankingRoadmap.beforeArrival.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
              <span className="text-xs font-mono font-bold text-sky-400 uppercase block">2. First 48 Hours</span>
              <strong className="text-white block">{newcomerBankingRoadmap.first48Hours.stage}</strong>
              <ul className="space-y-1.5 text-slate-300 font-light">
                {newcomerBankingRoadmap.first48Hours.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase block">3. First 90 Days</span>
              <strong className="text-white block">{newcomerBankingRoadmap.first90Days.stage}</strong>
              <ul className="space-y-1.5 text-slate-300 font-light">
                {newcomerBankingRoadmap.first90Days.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 text-xs">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase block">4. Months 12–24</span>
              <strong className="text-white block">{newcomerBankingRoadmap.month12to24.stage}</strong>
              <ul className="space-y-1.5 text-slate-300 font-light">
                {newcomerBankingRoadmap.month12to24.steps.map((s, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Credit Building 12-Month Blueprint (Equifax / TransUnion) */}
      <div className="glass-panel-sky rounded-2xl p-6 sm:p-8 border border-sky-500/30">
        <div className="max-w-3xl mb-6">
          <span className="text-xs font-mono tracking-widest text-sky-400 uppercase font-semibold">
            CANADIAN CREDIT ARCHITECTURE
          </span>
          <h3 className="text-xl font-bold text-white mt-1">
            5 Scoring Factors &amp; The Statement Date Utilization Rule
          </h3>
          <p className="mt-1 text-xs text-slate-300 leading-relaxed font-light">
            Canadian credit scores range from 300 to 900. To reach 720+ in your first year, keep balances below 25% of your credit limit and pay in full on the statement date.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {creditFactors.slice(0, 3).map((factor, idx) => (
            <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs">
              <div className="flex justify-between items-center mb-1">
                <strong className="text-white">{factor.name}</strong>
                <span className="text-amber-400 font-mono font-bold">{factor.weightPercent}%</span>
              </div>
              <p className="text-slate-300 text-[11px] font-light leading-snug">{factor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
