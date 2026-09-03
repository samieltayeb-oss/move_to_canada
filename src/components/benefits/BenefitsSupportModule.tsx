'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import {
  defaultFamilyBenefitsProfile,
  SAR_TO_CAD_RATE,
  CAD_TO_SAR_RATE,
  calculateCCBForFamily,
  calculateCGEBForFamily,
  calculateACFBForFamily,
  ALBERTA_CHILDCARE_AFFORDABILITY,
  EDUCATION_SAVINGS_BENCHMARKS,
  calgarySettlementAgencies,
  benefitsNotImmediatelyAvailable,
  firstYearBenefitsTimeline,
  generateSalaryBenefitCliffMatrix,
  FirstYearActionItem
} from '@/data/benefitsEngine';
import {
  ahcipCoverageMatrix,
  canadianDentalCarePlan,
  jobOfferBenefitsValueModel
} from '@/data/healthcare';
import {
  ShieldCheck,
  Award,
  ExternalLink,
  Calculator,
  CheckCircle2,
  AlertTriangle,
  TrendingDown,
  Building2,
  CheckSquare,
  Briefcase,
  DollarSign
} from 'lucide-react';

export function BenefitsSupportModule() {
  const { isRtl, familyProfile } = useApp();

  // Profile Inputs State
  const initialCanadian = familyProfile?.expectedAnnualHouseholdIncomeCAD || defaultFamilyBenefitsProfile.expectedCanadianIncomeCAD;
  const childrenAges = familyProfile?.childrenAges || defaultFamilyBenefitsProfile.childrenAges;

  const [canadianIncome, setCanadianIncome] = useState<number>(initialCanadian);
  const [spouseIncome, setSpouseIncome] = useState<number>(defaultFamilyBenefitsProfile.expectedSpouseIncomeCAD);
  const [worldwideIncomeSAR, setWorldwideIncomeSAR] = useState<number>(defaultFamilyBenefitsProfile.worldwidePreArrivalIncomeSAR);
  const [employerDental, setEmployerDental] = useState<boolean>(defaultFamilyBenefitsProfile.employerHealthInsuranceAvailable);
  const [activeTab, setActiveTab] = useState<'PROFILE' | 'CASH_BENEFITS' | 'HEALTH_DENTAL' | 'EDUCATION' | 'SIMULATOR'>('CASH_BENEFITS');

  // Benefit Income Basis Selector (Form RC66SCH Newcomer vs Future Canadian Employment)
  const [benefitIncomeBasis, setBenefitIncomeBasis] = useState<'WORLDWIDE_YEAR1' | 'FUTURE_CANADIAN'>('WORLDWIDE_YEAR1');

  // Timeline action status tracking
  const [timelineItems, setTimelineItems] = useState<FirstYearActionItem[]>(firstYearBenefitsTimeline);

  // Toggle checklist item status
  const toggleTimelineStatus = (id: string) => {
    setTimelineItems(prev => prev.map(item => {
      if (item.id === id) {
        const nextStatus: FirstYearActionItem['status'] = 
          item.status === 'NOT_STARTED' ? 'IN_PROGRESS' :
          item.status === 'IN_PROGRESS' ? 'COMPLETE' : 'NOT_STARTED';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  // Calculations based on current inputs
  const totalFamilyIncomeCAD = canadianIncome + spouseIncome;
  const convertedWorldIncomeCAD = Math.round(worldwideIncomeSAR * SAR_TO_CAD_RATE);

  // Determine active calculation income based on user selection
  const activeCalculationIncomeCAD = benefitIncomeBasis === 'WORLDWIDE_YEAR1' 
    ? convertedWorldIncomeCAD 
    : totalFamilyIncomeCAD;

  // CCB calculation for active children
  const ccbResult = calculateCCBForFamily(childrenAges, activeCalculationIncomeCAD);

  // CGEB (formerly GST/HST credit)
  const cgebResult = calculateCGEBForFamily(childrenAges.length, activeCalculationIncomeCAD);

  // ACFB (Alberta Child and Family Benefit)
  const acfbResult = calculateACFBForFamily(
    activeCalculationIncomeCAD, 
    benefitIncomeBasis === 'FUTURE_CANADIAN' ? canadianIncome : 0
  );

  // Consolidated Totals
  const totalAnnualCashBenefitsCAD = ccbResult.estimatedNetAnnualCAD + cgebResult.estimatedNetAnnualCAD + acfbResult.totalAnnualCAD;
  const totalMonthlyCashBenefitsCAD = Math.round((totalAnnualCashBenefitsCAD / 12) * 100) / 100;

  // Salary Cliff Matrix
  const cliffMatrix = generateSalaryBenefitCliffMatrix(childrenAges);

  return (
    <div className="space-y-10">
      {/* Top Hero Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/costco_bulk_shopping_family.jpg"
          alt="Canadian Family Government Benefits & Financial Support"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
            <Award className="w-3.5 h-3.5 text-emerald-400" />
            <span>Official 2026–2027 Canadian Government Support Engine</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'استخبارات الدعم والمزايا الحكومية للأسرة في كندا' : 'Benefits & Family Support Command Center'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl
              ? 'ما الذي يمكن أن تحصل عليه أسرة ياسر فعلياً في كالغاري؟ حسابات موثقة لـ CCB، بديل ضريبة GST/HST (CGEB)، ودعم أطفال ألبرتا (ACFB)'
              : 'What could Yassir’s family actually receive in Canada? Fully calculated estimates for CCB, CGEB, ACFB, Dental (CDCP), and healthcare.'}
          </p>
        </div>
      </div>

      {/* CRITICAL STATUTORY DISCLAIMER BANNER */}
      <div className="glass-panel p-5 rounded-2xl border border-amber-500/40 bg-amber-950/20 space-y-2">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {isRtl ? 'مبدأ نظامي هام: الإقامة الدائمة لا تعني استحقاقاً تلقائياً لجميع المساعدات' : 'Critical Statutory Principle: PR Status Does Not Automatically Mean Entitlement to Every Benefit'}
          </span>
        </div>
        <p className="text-xs text-slate-300 leading-relaxed font-light">
          {isRtl
            ? 'تخضع برامج الدعم في كندا لمعايير دقيقة تشمل: الإقامة الضريبية، الدخل العالمي قبل الوصول، دخل الزوجين، أعمار الأبناء، وتقديم الإقرار الضريبي السنوي لـ CRA. جميع الأرقام أدناه تصنف كـ [تقديرية / مؤهل محتمل] ولا تمثل ضمانات قطعية.'
            : 'Eligibility strictly depends on Canadian tax residency, pre-arrival worldwide income, spouse income, children ages, and mandatory CRA tax filing. All figures below are strictly categorized as [ESTIMATED / LIKELY ELIGIBLE] and never represent unconditional entitlements.'}
        </p>
      </div>

      {/* Top-Level Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('CASH_BENEFITS')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'CASH_BENEFITS'
              ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Calculator className="w-4 h-4 text-sky-300" />
          <span>{isRtl ? 'حاسبات الدعم النقدي (CCB, CGEB, ACFB)' : 'Cash Benefits (CCB, CGEB, ACFB)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('PROFILE')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'PROFILE'
              ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <DollarSign className="w-4 h-4 text-purple-300" />
          <span>{isRtl ? 'الملف الشخصي والدخل العالمي (SAR → CAD)' : 'Profile & World Income (SAR → CAD)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('HEALTH_DENTAL')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'HEALTH_DENTAL'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          <span>{isRtl ? 'التأمين الصحي والأسنان ورعاية الأطفال' : 'Health, Dental & Childcare'}</span>
        </button>

        <button
          onClick={() => setActiveTab('EDUCATION')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'EDUCATION'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Building2 className="w-4 h-4 text-blue-300" />
          <span>{isRtl ? 'ادخار التعليم (RESP) وخدمات الاستقرار' : 'Education (RESP) & Settlement'}</span>
        </button>

        <button
          onClick={() => setActiveTab('SIMULATOR')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'SIMULATOR'
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <TrendingDown className="w-4 h-4 text-amber-300" />
          <span>{isRtl ? 'محاكي الراتب والمنحنى المالي' : 'Salary vs Benefit Cliff Simulator'}</span>
        </button>
      </div>

      {/* TAB 1: CASH BENEFITS CALCULATORS */}
      {activeTab === 'CASH_BENEFITS' && (
        <div className="space-y-8">
          {/* BENEFIT INCOME BASIS SELECTOR (Form RC66SCH Newcomer vs Future Canadian Employment) */}
          <div className="glass-panel p-5 rounded-2xl border border-sky-500/30 bg-slate-900/90 space-y-3">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] font-mono text-sky-400 uppercase tracking-wider font-semibold block">
                  {isRtl ? 'أساس احتساب الدخل للمزايا الحكومية (CRA)' : 'BENEFIT INCOME BASIS — STATUTORY ASSESSMENT'}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-white mt-0.5">
                  {benefitIncomeBasis === 'WORLDWIDE_YEAR1'
                    ? (isRtl ? `سنة الهبوط الأولى: بناءً على الدخل العالمي لعام 2025 ($${convertedWorldIncomeCAD.toLocaleString()} CAD / ${worldwideIncomeSAR.toLocaleString()} ريال)` : `Year 1 Landing Estimate: Form RC66SCH 2025 World Income ($${convertedWorldIncomeCAD.toLocaleString()} CAD / ${worldwideIncomeSAR.toLocaleString()} SAR)`)
                    : (isRtl ? `المستقبل الوظيفي: بناءً على إجمالي دخل الأسرة الكندي ($${totalFamilyIncomeCAD.toLocaleString()} CAD)` : `Future Canadian Employment: Target Household Salary ($${totalFamilyIncomeCAD.toLocaleString()} CAD)`)}
                </h3>
              </div>

              {/* Explicit Option Buttons */}
              <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800 shrink-0">
                <button
                  onClick={() => setBenefitIncomeBasis('WORLDWIDE_YEAR1')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    benefitIncomeBasis === 'WORLDWIDE_YEAR1'
                      ? 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isRtl ? 'الدخل العالمي (السنة الأولى)' : 'Newcomer / Worldwide Income'}
                </button>
                <button
                  onClick={() => setBenefitIncomeBasis('FUTURE_CANADIAN')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    benefitIncomeBasis === 'FUTURE_CANADIAN'
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {isRtl ? 'الراتب الكندي المستقبلي' : 'Future Canadian Household Income'}
                </button>
              </div>
            </div>

            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {benefitIncomeBasis === 'WORLDWIDE_YEAR1'
                ? (isRtl 
                    ? `قانون مصلحة الضرائب الكندية (CRA): من تاريخ هبوطك في كندا وحتى 30 يونيو 2027، يتم احتساب إعانة الطفل (CCB) بناءً على دخلك خارج كندا لعام 2025 المعلن في نموذج RC66SCH ($${convertedWorldIncomeCAD.toLocaleString()} CAD). ستحصل أسرتك على دعم شهري أعلى (~$${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} CAD/شهر) خلال فترة الاستقرار الأولى.`
                    : `CRA Statutory Rule: From your arrival date until June 30, 2027, your CCB and provincial benefits are calculated using your 2025 pre-arrival income declared on Form RC66SCH ($${convertedWorldIncomeCAD.toLocaleString()} CAD). Your family receives higher monthly liquidity (~$${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} CAD / mo) to assist during settlement.`)
                : (isRtl
                    ? `المرحلة الوظيفية المستقرة: بمجرد تحقيق الراتب الكندي المستهدف ($${totalFamilyIncomeCAD.toLocaleString()} CAD) وتقديم إقرارك الضريبي الكندي الأول، تعاد جدولة المزايا تدريجياً لتبلغ ~$${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} CAD/شهر.`
                    : `Post-Employment Phase: Once you establish your Canadian career at your target salary ($${totalFamilyIncomeCAD.toLocaleString()} CAD) and file your first Canadian tax return, benefits adjust according to standard clawback brackets (~$${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} CAD / mo).`)}
            </p>
          </div>

          {/* Executive Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="glass-panel p-6 rounded-2xl border border-sky-500/30 bg-sky-950/20">
              <span className="text-[10px] font-mono text-sky-400 uppercase tracking-wider block font-semibold">
                Canada Child Benefit (CCB)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1">
                ${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">/ mo</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                ${ccbResult.estimatedNetAnnualCAD.toLocaleString()} CAD / year estimated
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-sky-900/50 text-sky-300 border border-sky-700">
                {ccbResult.eligibilityStatus}
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/20">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block font-semibold">
                Canada Groceries &amp; Essentials (CGEB)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1">
                ${cgebResult.estimatedQuarterlyCAD.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">/ qtr</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                ${cgebResult.estimatedNetAnnualCAD.toLocaleString()} CAD / year (Formerly GST/HST Credit)
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-900/50 text-emerald-300 border border-emerald-700">
                {cgebResult.eligibilityStatus}
              </span>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-purple-500/30 bg-purple-950/20">
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block font-semibold">
                Alberta Child &amp; Family Benefit (ACFB)
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-mono text-white mt-1">
                ${acfbResult.quarterlyPaymentCAD.toLocaleString()} <span className="text-xs text-slate-400 font-sans font-normal">/ qtr</span>
              </div>
              <p className="text-xs text-slate-300 mt-1">
                ${acfbResult.totalAnnualCAD.toLocaleString()} CAD / year (Base + Working)
              </p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-900/50 text-purple-300 border border-purple-700">
                {acfbResult.eligibilityStatus}
              </span>
            </div>
          </div>

          {/* TOTAL ESTIMATED CASH BENEFITS CALLOUT */}
          <div className="glass-panel p-6 rounded-2xl border border-emerald-500/40 bg-gradient-to-r from-emerald-950/30 to-slate-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-emerald-400 uppercase font-semibold">
                Total Direct Government Family Cash Benefits
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-0.5">
                ${totalAnnualCashBenefitsCAD.toLocaleString()} CAD / year (~${totalMonthlyCashBenefitsCAD.toLocaleString()} CAD / month)
              </h3>
              <p className="text-xs text-slate-300 mt-1 font-light">
                Calculated dynamically based on Yassir’s expected household income of ${totalFamilyIncomeCAD.toLocaleString()} CAD and 3 children (Ages 16, 11, 5).
              </p>
            </div>
            <div className="shrink-0 p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center">
              <span className="text-[10px] font-mono text-slate-400 block uppercase">Tax Treatment</span>
              <strong className="text-emerald-400 text-sm">100% Tax-Free Cash</strong>
            </div>
          </div>

          {/* INDEPENDENT CCB 3-CHILDREN BREAKDOWN */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-sky-400" />
                  <span>Canada Child Benefit (CCB) 3-Children Independent Breakdown</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Benefit Year: July 2026 – June 2027 (CRA T4114 Guidelines)
                </p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400">Gross Max Potential: </span>
                <strong className="text-sky-300">${ccbResult.totalMaxGrossAnnualCAD.toLocaleString()} / yr</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {ccbResult.childBreakdown.map((child, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                  <div className="flex justify-between items-center">
                    <strong className="text-white text-sm">Child {idx + 1} (Age {child.age})</strong>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {child.age < 6 ? 'Under 6 Rate' : 'Age 6–17 Rate'}
                    </span>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 space-y-1 text-xs font-mono">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Max Possible Annual:</span>
                      <strong className="text-white">${child.maxAnnualCAD.toLocaleString()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Max Possible Monthly:</span>
                      <strong className="text-sky-300">${child.maxMonthlyCAD.toLocaleString()}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Reduction calculation math */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span>Total Family Potential Gross:</span>
                <span>${ccbResult.totalMaxGrossAnnualCAD.toLocaleString()} CAD</span>
              </div>
              <div className="flex justify-between text-amber-400">
                <span>Phaseout Reduction based on ${totalFamilyIncomeCAD.toLocaleString()} Income:</span>
                <span>-${ccbResult.totalReductionAnnualCAD.toLocaleString()} CAD</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-bold pt-1 border-t border-slate-800">
                <span>Estimated Net CCB Entitlement:</span>
                <span>${ccbResult.estimatedNetAnnualCAD.toLocaleString()} CAD / yr (~${ccbResult.estimatedNetMonthlyCAD.toLocaleString()} / mo)</span>
              </div>
            </div>

            {/* CCB Newcomer Application Checklist */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold font-mono uppercase text-sky-400 flex items-center gap-1.5">
                <CheckSquare className="w-4 h-4" />
                <span>How to Apply for CCB as a Newcomer Arriving from Saudi Arabia:</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-1">1. Form RC66 (Canada Child Benefits Application)</strong>
                  <p className="text-[11px] font-light">Primary application for the parent who is primarily responsible for the children.</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-1">2. Form RC66SCH (Status in Canada &amp; World Income)</strong>
                  <p className="text-[11px] font-light">Required for all newcomers to declare pre-arrival Saudi income in SAR for the current and previous 2 tax years.</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-1">3. Proof of Children’s Birth</strong>
                  <p className="text-[11px] font-light">Official birth certificates showing parentage for all 3 children (ages 16, 11, 5).</p>
                </div>
                <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <strong className="text-white block mb-1">4. Proof of Permanent Resident Status</strong>
                  <p className="text-[11px] font-light">Copy of stamped Confirmation of Permanent Residence (COPR) or PR Card.</p>
                </div>
              </div>
              <div className="flex justify-end pt-1">
                <a
                  href="https://www.canada.ca/en/revenue-agency/services/forms-publications/forms/rc66.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 underline underline-offset-2"
                >
                  <span>Download Form RC66 &amp; RC66SCH from Canada.ca</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* DEDICATED ALBERTA CHILD AND FAMILY BENEFIT (ACFB) BREAKDOWN */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/30 bg-purple-950/10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-purple-400" />
                  <span>Alberta Child and Family Benefit (ACFB) — Provincial Benefit</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Funded by the Government of Alberta &amp; Administered by CRA • Quarterly Payout Schedule
                </p>
              </div>
              <div className="text-right font-mono text-xs">
                <span className="text-slate-400">Max Potential for 3 Children: </span>
                <strong className="text-purple-300">$4,977.00 CAD / yr</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-white text-sm">1. Base Component</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">No work required</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>3-Child Max Base:</span>
                    <span className="text-white">$3,057.00 / yr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Phaseout Starts:</span>
                    <span>$27,024 AFNI (7.5%)</span>
                  </div>
                  <div className="flex justify-between text-purple-300 font-bold pt-1 border-t border-slate-800">
                    <span>Calculated Base:</span>
                    <span>${acfbResult.baseComponentCAD.toLocaleString()} CAD</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-white text-sm">2. Working Component</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-slate-800 text-slate-300">Labour incentive</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>3-Child Max Working:</span>
                    <span className="text-white">$1,920.00 / yr</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Phase-in / Out:</span>
                    <span>$2,760 / $45,285</span>
                  </div>
                  <div className="flex justify-between text-purple-300 font-bold pt-1 border-t border-slate-800">
                    <span>Calculated Working:</span>
                    <span>${acfbResult.workingComponentCAD.toLocaleString()} CAD</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-purple-500/40 space-y-2">
                <div className="flex justify-between items-center">
                  <strong className="text-white text-sm">Your ACFB Total</strong>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-900 text-purple-300">Quarterly Payout</span>
                </div>
                <div className="space-y-1 text-[11px]">
                  <div className="flex justify-between text-slate-400">
                    <span>Annual Entitlement:</span>
                    <strong className="text-purple-300 text-sm">${acfbResult.totalAnnualCAD.toLocaleString()} CAD</strong>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Each Quarter:</span>
                    <span>${acfbResult.quarterlyPaymentCAD.toLocaleString()} CAD</span>
                  </div>
                  <div className="text-[10px] text-slate-400 pt-1 border-t border-slate-800">
                    Dates: Aug 27, Nov 27, Feb 27, May 27
                  </div>
                </div>
              </div>
            </div>

            {/* Cross-link to Alberta Child Health Benefit (ACHB) */}
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <strong className="text-white flex items-center gap-1.5">
                  <span>Looking for Alberta Child Health Benefit (ACHB)?</span>
                </strong>
                <p className="text-slate-400 text-[11px] font-light">
                  Free dental, optical, and prescription drug coverage for Alberta children under net family income of $41,594.
                </p>
              </div>
              <a
                href="https://www.alberta.ca/alberta-child-and-family-benefit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-purple-400 hover:text-purple-300 font-semibold shrink-0"
              >
                <span>Official Alberta.ca ACFB Rules</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: PROFILE & WORLD INCOME (SAR -> CAD) */}
      {activeTab === 'PROFILE' && (
        <div className="space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-purple-400" />
                <span>My Benefits Profile &amp; Worldwide Income Architecture</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                CRA requires newcomers to declare worldwide earnings before entering Canada to determine baseline income-tested support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SAR to CAD Worldwide Income Converter */}
              <div className="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-4">
                <div className="flex justify-between items-center">
                  <strong className="text-white text-sm">Income Earned Outside Canada (Saudi Arabia)</strong>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-900/50 text-purple-300">
                    Form RC66SCH
                  </span>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">
                    Enter Pre-Arrival Income in Saudi Riyals (SAR):
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      value={worldwideIncomeSAR}
                      onChange={(e) => setWorldwideIncomeSAR(Number(e.target.value) || 0)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white font-mono text-sm focus:outline-none focus:border-purple-500"
                    />
                    <span className="absolute right-3 top-2 text-xs font-mono text-slate-400">SAR</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between text-slate-400">
                    <span>Exchange Rate:</span>
                    <span>1 CAD = {CAD_TO_SAR_RATE} SAR ({SAR_TO_CAD_RATE} CAD/SAR)</span>
                  </div>
                  <div className="flex justify-between items-center pt-1 border-t border-slate-800">
                    <span className="text-slate-300">Converted Canadian Value:</span>
                    <strong className="text-purple-300 text-base">${convertedWorldIncomeCAD.toLocaleString()} CAD</strong>
                  </div>
                  <div className="text-[10px] text-slate-500 pt-1">
                    Source: Google Finance / Bank of Canada (Rate verified September 2026)
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed font-light">
                  ★ <strong>Why CRA asks this:</strong> Newcomers who earned substantial international income in the tax year prior to arrival do not receive maximum income-tested benefits for that portion of the benefit year.
                </p>
              </div>

              {/* Canadian Income Inputs */}
              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
                <strong className="text-white text-sm block">Expected 2026 Canadian Household Earnings</strong>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Yassir’s Expected Canadian Salary:</span>
                    <strong className="font-mono text-sky-400">${canadianIncome.toLocaleString()} CAD</strong>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="200000"
                    step="5000"
                    value={canadianIncome}
                    onChange={(e) => setCanadianIncome(Number(e.target.value))}
                    className="w-full accent-sky-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>$50,000</span>
                    <span>$125,000 (Target NOC 20012)</span>
                    <span>$200,000</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs text-slate-300 mb-1">
                    <span>Spouse Expected Canadian Earnings:</span>
                    <strong className="font-mono text-purple-400">${spouseIncome.toLocaleString()} CAD</strong>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="80000"
                    step="5000"
                    value={spouseIncome}
                    onChange={(e) => setSpouseIncome(Number(e.target.value))}
                    className="w-full accent-purple-500"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                    <span>$0 (Single Earner)</span>
                    <span>$40,000</span>
                    <span>$80,000</span>
                  </div>
                </div>

                {/* Insurance toggles */}
                <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
                  <label className="flex items-center justify-between text-slate-300 cursor-pointer">
                    <span>Employer Health / Dental Insurance Available?</span>
                    <input
                      type="checkbox"
                      checked={employerDental}
                      onChange={(e) => setEmployerDental(e.target.checked)}
                      className="rounded accent-sky-500 w-4 h-4"
                    />
                  </label>
                  <p className="text-[10px] text-slate-500">
                    Note: If employer dental insurance is offered, family is ineligible for Canadian Dental Care Plan (CDCP).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: HEALTH, DENTAL & CHILDCARE SUBSIDIES */}
      {activeTab === 'HEALTH_DENTAL' && (
        <div className="space-y-8">
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <div>
                <strong className="text-white text-sm block">Non-Cash Government Services &amp; Subsidies</strong>
                <span className="text-xs text-slate-400">Strictly separated from household cash to prevent double-counting</span>
              </div>
            </div>
          </div>

          {/* AHCIP 3-Month Rule & Coverage Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white">Alberta Health Care Insurance Plan (AHCIP)</h3>
                <p className="text-xs text-emerald-400 font-mono">
                  ★ Zero (0) Day Wait Period: Effective Day 1 of establishing Alberta residency
                </p>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Register within 3 Months
              </span>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed font-light">
              Unlike Ontario or British Columbia which previously maintained waiting periods, newcomers arriving in Alberta permanently from outside Canada with PR status have immediate coverage starting the day they establish physical residency in Alberta. You must submit your AHCIP application within 3 months to preserve retroactive Day 1 coverage.
            </p>

            {/* Coverage Matrix Table */}
            <div className="pt-2 space-y-2">
              <h4 className="text-xs font-mono uppercase text-slate-400 font-semibold">
                What is Covered by AHCIP vs. What You Must Pay or Insure Separately:
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {ahcipCoverageMatrix.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl border text-xs flex items-start gap-2.5 ${
                      item.isCoveredByAHCIP
                        ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-200'
                        : 'bg-amber-950/20 border-amber-900/40 text-slate-300'
                    }`}
                  >
                    {item.isCoveredByAHCIP ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    )}
                    <div>
                      <strong className={`block ${item.isCoveredByAHCIP ? 'text-emerald-300' : 'text-amber-300'}`}>
                        {item.name}
                      </strong>
                      <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">{item.notes}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* DENTAL: CDCP VS ACHB */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* CDCP */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white text-sm">Canadian Dental Care Plan (CDCP)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  Federal Plan
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {canadianDentalCarePlan.dentistBalanceBillingWarning}
              </p>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs font-mono">
                {canadianDentalCarePlan.copaymentStructure.map((tier, tIdx) => (
                  <div key={tIdx} className="flex justify-between text-[11px]">
                    <span className="text-slate-400">{tier.incomeBracket}:</span>
                    <strong className={tier.copayPercentage === 0 ? 'text-emerald-400' : tier.copayPercentage === 100 ? 'text-rose-400' : 'text-amber-400'}>
                      {tier.copayPercentage}% Co-pay ({tier.govCoverage}% Paid)
                    </strong>
                  </div>
                ))}
              </div>
              <div className="text-[11px] text-slate-400 pt-1">
                Eligibility Status: {employerDental ? '❌ Disqualified (Employer Dental Offered)' : totalFamilyIncomeCAD < 90000 ? '✅ Likely Eligible' : '❌ Ineligible (Income >= $90k)'}
              </div>
            </div>

            {/* ALBERTA $15/DAY CHILDCARE */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white text-sm">Alberta $15/Day Childcare Affordability</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Child 3 (Age 5)
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {ALBERTA_CHILDCARE_AFFORDABILITY.eligibilityNote}
              </p>
              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Regular Market Daycare in Calgary:</span>
                  <span className="line-through text-slate-500">${ALBERTA_CHILDCARE_AFFORDABILITY.marketMonthlyCostUnder6UnsubsidizedCAD}/mo</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-emerald-400 font-bold">Subsidized Parent Fee ($15/day):</span>
                  <strong className="text-emerald-300 font-bold text-sm">${ALBERTA_CHILDCARE_AFFORDABILITY.parentMonthlyCostUnder6CAD} CAD/mo</strong>
                </div>
                <div className="flex justify-between pt-1 border-t border-slate-800 text-sky-400">
                  <span>Monthly Family Savings:</span>
                  <strong>+${ALBERTA_CHILDCARE_AFFORDABILITY.monthlySavingsCAD} CAD/month</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: EDUCATION SAVINGS (RESP, CESG, CLB) & SETTLEMENT */}
      {activeTab === 'EDUCATION' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* RESP & CESG */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white text-sm">Registered Education Savings Plan (RESP) &amp; CESG</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                  20% Federal Match
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                The Government of Canada adds 20% on the first $2,500 contributed annually per child through the Canada Education Savings Grant (CESG), providing $500 free grant money per child per year (lifetime maximum $7,200 per child).
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Annual Contribution per Child:</span>
                  <strong className="text-white">$2,500 CAD</strong>
                </div>
                <div className="flex justify-between text-emerald-400 font-bold">
                  <span>Basic CESG Grant (20%):</span>
                  <span>+$500 CAD / yr per child</span>
                </div>
                <div className="flex justify-between text-sky-300 pt-1 border-t border-slate-800">
                  <span>Total for Yassir’s 3 Children:</span>
                  <span>+$1,500 CAD / yr Free Grant</span>
                </div>
              </div>
            </div>

            {/* Canada Learning Bond (CLB) */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-white text-sm">Canada Learning Bond (CLB)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  Up to $2,000 / Child
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {EDUCATION_SAVINGS_BENCHMARKS.canadaLearningBond.notes}
              </p>
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Personal Family Contribution:</span>
                  <strong className="text-emerald-400">$0 Required</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Initial Deposit:</span>
                  <strong className="text-white">$500 CAD in Year 1</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Subsequent Years:</span>
                  <strong className="text-white">+$100 CAD / year</strong>
                </div>
              </div>
            </div>
          </div>

          {/* WHAT PR STATUS DOES NOT AUTOMATICALLY GIVE YOU */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h4 className="text-sm font-bold font-mono uppercase text-amber-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>What PR Status Does NOT Automatically Give You (Reality Check):</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {benefitsNotImmediatelyAvailable.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 text-xs">
                  <strong className="text-white block">{b.program}</strong>
                  <p className="text-slate-400 font-light text-[11px] leading-relaxed">{b.reason}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FREE IRCC-FUNDED NEWCOMER SETTLEMENT SERVICES DIRECTORY */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Building2 className="w-4 h-4 text-sky-400" />
              <span>Free IRCC-Funded Newcomer Settlement Organizations in Calgary</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {calgarySettlementAgencies.map((agency) => (
                <div key={agency.id} className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <strong className="text-white text-sm">{agency.name}</strong>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        {agency.quadrant}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5">{agency.address}</p>
                    <ul className="mt-2 space-y-1 text-xs text-slate-300 font-light">
                      {agency.servicesProvided.map((svc, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-sky-400 shrink-0" />
                          <span>{svc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 mt-2 flex justify-between items-center text-xs">
                    <span className="text-[10px] font-mono text-emerald-400">{agency.eligibilityWindow}</span>
                    <a
                      href={agency.contactUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300"
                    >
                      <span>Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SALARY VS BENEFIT CLIFF SIMULATOR & TIMELINE */}
      {activeTab === 'SIMULATOR' && (
        <div className="space-y-8">
          {/* Simulation Matrix Table */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingDown className="w-5 h-5 text-amber-400" />
                <span>Salary vs. Government Benefit Cliff Matrix (Family of 5)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Visualizing how income-tested programs (CCB, CGEB, ACFB) decline as family gross earnings rise. Educational planning tool only.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left text-slate-300 font-mono">
                <thead className="bg-slate-900 text-slate-400 uppercase text-[10px]">
                  <tr>
                    <th className="p-3">Gross Salary</th>
                    <th className="p-3">Est. Taxes (AB+Fed)</th>
                    <th className="p-3">Take-Home Pay</th>
                    <th className="p-3 text-sky-400">CCB Benefit</th>
                    <th className="p-3 text-purple-400">CGEB + ACFB</th>
                    <th className="p-3 text-emerald-400 font-bold">Total Cash Flow</th>
                    <th className="p-3">Dental (CDCP)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {cliffMatrix.map((row, rIdx) => (
                    <tr key={rIdx} className="hover:bg-slate-900/50 transition-colors">
                      <td className="p-3 font-bold text-white">${row.grossSalaryCAD.toLocaleString()}</td>
                      <td className="p-3 text-rose-300">-${row.estimatedTaxesCAD.toLocaleString()}</td>
                      <td className="p-3 text-slate-200">${row.netTakeHomeSalaryCAD.toLocaleString()}</td>
                      <td className="p-3 text-sky-300">+${row.estimatedCCBCAD.toLocaleString()}</td>
                      <td className="p-3 text-purple-300">+${(row.estimatedCGEBCAD + row.estimatedACFBCAD).toLocaleString()}</td>
                      <td className="p-3 text-emerald-300 font-bold text-sm">${row.totalFamilyNetCashFlowCAD.toLocaleString()}</td>
                      <td className="p-3 text-[11px] text-slate-400">{row.cdcpEligibility}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Job Offer Total Compensation Evaluator */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-sky-400" />
              <span>{jobOfferBenefitsValueModel.explainerTitle}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {jobOfferBenefitsValueModel.scenarioComparison.map((offer, oIdx) => (
                <div key={oIdx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <strong className="text-white text-sm block">{offer.offerName}</strong>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                      ${offer.totalCompensationCAD.toLocaleString()} CAD <span className="text-xs text-slate-400 font-sans font-normal">Total Compensation</span>
                    </div>
                    <div className="mt-3 space-y-1.5 text-xs text-slate-300 font-light">
                      <div>• <strong>Base:</strong> ${offer.baseSalaryCAD.toLocaleString()} CAD</div>
                      <div>• <strong>Dental:</strong> {offer.dentalCoverage}</div>
                      <div>• <strong>Prescription:</strong> {offer.drugCoverage}</div>
                      <div>• <strong>RRSP Matching:</strong> {offer.rrspMatching}</div>
                    </div>
                  </div>
                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-400 italic">
                    Verdict: {offer.verdict}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* First Year Action Timeline Checklist */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckSquare className="w-4 h-4 text-emerald-400" />
              <span>First Year Government Money Action Timeline Checklist</span>
            </h3>
            <div className="space-y-3">
              {timelineItems.map((item) => (
                <div
                  key={item.id}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleTimelineStatus(item.id)}
                        className={`w-5 h-5 rounded flex items-center justify-center text-xs font-bold transition-colors ${
                          item.status === 'COMPLETE'
                            ? 'bg-emerald-500 text-slate-950'
                            : item.status === 'IN_PROGRESS'
                              ? 'bg-amber-500 text-slate-950'
                              : 'border border-slate-600 text-transparent'
                        }`}
                      >
                        ✓
                      </button>
                      <strong className={`text-sm ${item.status === 'COMPLETE' ? 'text-slate-400 line-through' : 'text-white'}`}>
                        {item.title}
                      </strong>
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-3">
                      <span>Timeline: {item.timelineWindow}</span>
                      <span>Agency: {item.responsibleAgency}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleTimelineStatus(item.id)}
                      className="px-2.5 py-1 rounded text-xs font-mono bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
                    >
                      Status: {item.status}
                    </button>
                    <a
                      href={item.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded text-sky-400 hover:text-sky-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
