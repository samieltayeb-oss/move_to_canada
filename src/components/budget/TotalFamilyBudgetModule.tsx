'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  familyBudgetScenarios, 
  arrivalSalaryThresholds, 
  simulateJobOfferCashFlow 
} from '@/data/familyBudget';
import { 
  Wallet, 
  Calculator, 
  DollarSign, 
  Layers
} from 'lucide-react';

export function TotalFamilyBudgetModule() {
  const { formatCurrency, isRtl } = useApp();
  const [activeTab, setActiveTab] = useState<'BUDGET_SCENARIOS' | 'SALARY_NEEDED' | 'OFFER_SIMULATOR'>('BUDGET_SCENARIOS');
  const [selectedScenarioId, setSelectedScenarioId] = useState<'STARTING_CAREFULLY' | 'COMFORTABLE' | 'PREMIUM'>('COMFORTABLE');

  // Job Offer Simulator Inputs
  const [offerSalary, setOfferSalary] = useState<number>(125000);
  const [offerBonus, setOfferBonus] = useState<number>(10000);
  const [offerOfficeDays, setOfferOfficeDays] = useState<number>(3);
  const [offerRent, setOfferRent] = useState<number>(2550);
  const [offerSchooling, setOfferSchooling] = useState<number>(0);
  const [offerCarPayment, setOfferCarPayment] = useState<number>(450);

  const currentScenario = familyBudgetScenarios[selectedScenarioId];
  const simulationResult = simulateJobOfferCashFlow({
    baseSalaryCAD: offerSalary,
    bonusAnnualCAD: offerBonus,
    daysInOfficePerWeek: offerOfficeDays,
    housingMonthlyRentCAD: offerRent,
    islamicSchoolMonthlyCAD: offerSchooling,
    vehicleMonthlyFinancingCAD: offerCarPayment
  });

  return (
    <div className="space-y-10">
      {/* Visual Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/banff_mountain_family_trip.jpg"
          alt="Canadian Rockies Lifestyle in Alberta"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-xs font-mono text-purple-300 mb-3">
            <Wallet className="w-3.5 h-3.5 text-purple-400" />
            <span>Family Financial Architecture</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'الميزانية العائلية الشاملة ومحاكي عروض العمل' : 'Total Family Budget & Job Offer Simulator'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'كم يكلف العيش الفعلي في كالغاري؟ الميزانية التفصيلية لـ 20 بنداً عائلياً، مع حساب الراتب المطلوب ومحاكاة صافي الدخل والفائض المالي'
              : 'Itemized 20-category living costs, required salary targets for financial stability, and real-time job offer cash flow simulation.'}
          </p>
        </div>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'BUDGET_SCENARIOS', label: isRtl ? 'سيناريوهات الميزانية (20 بنداً)' : '20-Category Family Budget', icon: Layers },
          { id: 'SALARY_NEEDED', label: isRtl ? 'ما هو الراتب الذي تحتاجه العائلة؟' : 'What Salary Do We Need?', icon: DollarSign },
          { id: 'OFFER_SIMULATOR', label: isRtl ? 'محاكي عروض العمل وصافي الدخل' : 'Job Offer Life Simulator', icon: Calculator }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'BUDGET_SCENARIOS' | 'SALARY_NEEDED' | 'OFFER_SIMULATOR')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/20'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: 20-CATEGORY FAMILY BUDGET */}
      {activeTab === 'BUDGET_SCENARIOS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'الميزانية الشهرية والسنوية الحقيقية في كالغاري' : 'Real Calgary Family Budget — 3 Lifestyles'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'تتضمن السكن، فواتير إنماكس، الغذاء الحلال، تأمين القادمين الجدد، البنزين، والمدارس'
                  : 'Comprehensive 20-category budget models tailored for a family of five with 3 young children'}
              </p>
            </div>

            {/* Scenario Switcher */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setSelectedScenarioId('STARTING_CAREFULLY')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedScenarioId === 'STARTING_CAREFULLY' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Starting
              </button>
              <button
                onClick={() => setSelectedScenarioId('COMFORTABLE')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedScenarioId === 'COMFORTABLE' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Comfortable
              </button>
              <button
                onClick={() => setSelectedScenarioId('PREMIUM')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedScenarioId === 'PREMIUM' ? 'bg-slate-800 text-white font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                Premium
              </button>
            </div>
          </div>

          {/* Scenario Overview Card */}
          <div className="glass-panel p-6 rounded-2xl border border-purple-500/20 bg-purple-950/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-purple-500/20">
              <div>
                <span className="text-[10px] font-mono uppercase text-purple-400 font-bold block mb-1">
                  Active Budget Blueprint
                </span>
                <h4 className="text-xl font-bold text-white">
                  {isRtl ? currentScenario.arabicName : currentScenario.name}
                </h4>
                <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
                  {currentScenario.description}
                </p>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs text-slate-400 block mb-0.5">Total Monthly Outlay:</span>
                <span className="text-3xl font-extrabold text-white">
                  {formatCurrency(currentScenario.totalMonthlyCAD)}
                </span>
                <span className="text-xs text-purple-300 block mt-0.5 font-mono">
                  {formatCurrency(currentScenario.totalAnnualCAD)} / year
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block text-[11px]">Housing Choice:</span>
                <strong className="text-white text-xs">{currentScenario.housingType}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Vehicle:</span>
                <strong className="text-white text-xs">{currentScenario.vehicleType}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Grocery Model:</span>
                <strong className="text-amber-400 text-xs">{currentScenario.groceryStrategy}</strong>
              </div>
              <div>
                <span className="text-slate-500 block text-[11px]">Schooling:</span>
                <strong className="text-sky-400 text-xs">{currentScenario.schoolType}</strong>
              </div>
            </div>
          </div>

          {/* Itemized Table */}
          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden text-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="p-3.5">Budget Line Item</th>
                    <th className="p-3.5">Monthly (CAD)</th>
                    <th className="p-3.5">Weekly (CAD)</th>
                    <th className="p-3.5">Annual (CAD)</th>
                    <th className="p-3.5">Type</th>
                    <th className="p-3.5">Specifications & Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {currentScenario.items.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-medium text-white">
                        {isRtl ? item.arabicCategory : item.category}
                      </td>
                      <td className="p-3.5 font-mono font-bold text-white">
                        {formatCurrency(item.monthlyCAD)}
                      </td>
                      <td className="p-3.5 font-mono text-slate-400">
                        {formatCurrency(item.weeklyCAD)}
                      </td>
                      <td className="p-3.5 font-mono text-slate-400">
                        {formatCurrency(item.annualCAD)}
                      </td>
                      <td className="p-3.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          item.fixedOrVariable === 'Fixed' ? 'bg-slate-800 text-slate-300' : 'bg-purple-950 text-purple-300 border border-purple-800'
                        }`}>
                          {item.fixedOrVariable}
                        </span>
                      </td>
                      <td className="p-3.5 text-slate-400 text-[11px]">{item.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: WHAT SALARY DO WE NEED? */}
      {activeTab === 'SALARY_NEEDED' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'ما هو الراتب السنوي الذي تحتاجه العائلة؟' : 'What Salary Does Our Family Need? — Arrival Benchmarks'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'تحليل دقيق يربط بين الراتب الإجمالي، والضرائب، وإعانة الطفل الكندية (CCB)، والتكلفة المعيشية الفعلية'
                : 'Correlates gross compensation with 2026 progressive taxes, Canada Child Benefit (CCB), and net surplus'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 text-xs">
            {arrivalSalaryThresholds.map((thresh, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">
                      Tier {idx + 1}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">
                      {isRtl ? thresh.arabicLifestyleTier : thresh.lifestyleTier}
                    </h4>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <span className="text-slate-400 text-[11px] block">Target Gross Salary:</span>
                      <span className="text-2xl font-extrabold text-emerald-400 font-mono">
                        {formatCurrency(thresh.recommendedGrossSalaryCAD)} / yr
                      </span>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                      thresh.financialFeasibility === 'EXCELLENT SURPLUS' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-sky-500/20 text-sky-300 border border-sky-500/30'
                    }`}>
                      {thresh.financialFeasibility}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Net Monthly Pay:</span>
                    <strong className="text-white text-sm">{formatCurrency(thresh.estimatedNetMonthlyCAD)}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Monthly CCB Benefit:</span>
                    <strong className="text-emerald-400 text-sm">+{formatCurrency(thresh.canadaChildBenefitMonthlyCAD)}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Living Expenses:</span>
                    <strong className="text-rose-400 text-sm">-{formatCurrency(thresh.monthlyExpensesCAD)}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/30">
                    <span className="text-emerald-400 block mb-1">Net Monthly Surplus:</span>
                    <strong className="text-emerald-400 text-sm font-bold">+{formatCurrency(thresh.monthlySurplusCAD)}</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Housing Cost %:</span>
                    <strong className="text-white text-sm">{thresh.housingCostPercentage}% of gross</strong>
                  </div>
                </div>

                <p className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 text-slate-300 text-xs leading-relaxed">
                  {thresh.rationale}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 3: JOB OFFER LIFE SIMULATOR */}
      {activeTab === 'OFFER_SIMULATOR' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'محاكي عروض العمل وصافي السيولة النقدية' : 'Job Offer Life & Cash Flow Simulator'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'أدخل تفاصيل عرض العمل لمعرفة صافي الدخل الحقيقي ومعدل الأمان المالي وتكلفة السكن'
                : 'Enter your compensation and lifestyle choices to calculate true net take-home, taxes, and monthly liquid surplus'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
            {/* Simulation Inputs */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-purple-400" />
                <span>Job Offer & Lifestyle Parameters</span>
              </h4>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Base Annual Salary (CAD)</span>
                  <span className="font-bold text-emerald-400">{formatCurrency(offerSalary)}</span>
                </div>
                <input
                  type="range"
                  min="70000"
                  max="220000"
                  step="5000"
                  value={offerSalary}
                  onChange={(e) => setOfferSalary(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Annual Discretionary Bonus (CAD)</span>
                  <span className="font-bold text-white">{formatCurrency(offerBonus)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="2500"
                  value={offerBonus}
                  onChange={(e) => setOfferBonus(parseInt(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Days in Downtown Office per Week</span>
                  <span className="font-bold text-white">{offerOfficeDays} days</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5"
                  step="1"
                  value={offerOfficeDays}
                  onChange={(e) => setOfferOfficeDays(parseInt(e.target.value))}
                  className="w-full accent-sky-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">
                    Target Monthly Rent <span className="text-[10px] text-emerald-400 font-mono">(Calgary Price Drop: $2,450–$2,650)</span>
                  </span>
                  <span className="font-bold text-white font-mono">{formatCurrency(offerRent)}/mo</span>
                </div>
                <input
                  type="range"
                  min="1800"
                  max="4500"
                  step="50"
                  value={offerRent}
                  onChange={(e) => setOfferRent(parseInt(e.target.value))}
                  className="w-full accent-purple-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">
                    Schooling Tuition <span className="text-[10px] text-sky-400 font-mono">(Public CBE: $0 | Optional CIS: ~$410)</span>
                  </span>
                  <span className="font-bold text-white font-mono">
                    {offerSchooling === 0 ? '$0 (Public CBE Default)' : `${formatCurrency(offerSchooling)}/mo (Islamic)`}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={offerSchooling}
                  onChange={(e) => setOfferSchooling(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-400 mt-1">
                  <span>$0 (Public Schools)</span>
                  <span>$410/mo (CIS 2 Kids)</span>
                  <span>$1,000/mo (Private)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-slate-300">Monthly Car Financing / Lease</span>
                  <span className="font-bold text-white">{formatCurrency(offerCarPayment)}/mo</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  step="50"
                  value={offerCarPayment}
                  onChange={(e) => setOfferCarPayment(parseInt(e.target.value))}
                  className="w-full accent-slate-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Simulation Results */}
            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-purple-950/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-purple-500/20">
                  <span className="text-xs font-mono uppercase text-purple-400 font-bold">
                    Net Monthly Cash Flow
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-mono font-bold ${
                    simulationResult.isHousingAffordable ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                  }`}>
                    Housing: {simulationResult.housingToGrossRatioPercent}% (Affordable: {simulationResult.isHousingAffordable ? 'Yes' : 'Tight'})
                  </span>
                </div>

                <div className="space-y-2.5 pt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Gross Annual:</span>
                    <strong className="text-white font-mono">{formatCurrency(simulationResult.grossAnnualIncomeCAD)}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Combined Taxes (Federal + Alberta):</span>
                    <strong className="text-rose-400 font-mono">-{formatCurrency(simulationResult.totalTaxAnnualCAD)} / yr</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Net Monthly Salary Take-Home:</span>
                    <strong className="text-white font-mono">{formatCurrency(simulationResult.netMonthlyTakeHomeCAD)}/mo</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Canada Child Benefit (3 Kids):</span>
                    <strong className="text-emerald-400 font-mono">+{formatCurrency(simulationResult.ccbMonthlyEstimatedCAD)}/mo</strong>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-purple-500/20 font-bold text-sm">
                    <span className="text-slate-200">Total Monthly Liquid Inflow:</span>
                    <span className="text-emerald-400 font-mono">{formatCurrency(simulationResult.totalMonthlyLiquidCashFlowCAD)}/mo</span>
                  </div>

                  <div className="flex justify-between pt-2 text-rose-300">
                    <span>Estimated Monthly Expenses:</span>
                    <span className="font-mono font-bold">-{formatCurrency(simulationResult.estimatedMonthlyLivingExpensesCAD)}/mo</span>
                  </div>

                  <div className="flex justify-between pt-3 border-t border-purple-500/30 font-extrabold text-base">
                    <span className="text-white">Monthly Net Savings Surplus:</span>
                    <span className={`font-mono ${simulationResult.monthlyNetSurplusCAD >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {simulationResult.monthlyNetSurplusCAD >= 0 ? '+' : ''}{formatCurrency(simulationResult.monthlyNetSurplusCAD)} / mo
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-300 leading-relaxed">
                * Housing accounts for <strong>{simulationResult.housingToGrossRatioPercent}%</strong> of gross monthly income. CMHC considers housing affordable when it consumes less than 32% of pre-tax earnings.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
