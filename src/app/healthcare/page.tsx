'use client';

import React from 'react';
import { TransitHealthcareModule } from '@/components/TransitHealthcareModule';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import {
  ahcipNewcomerPolicy,
  canadianDentalCarePlan,
  albertaChildHealthBenefit,
  albertaBlueCrossNonGroup,
  jobOfferBenefitsValueModel,
  familyHealthSetupChecklist
} from '@/data/healthcare';
import {
  HeartPulse,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ExternalLink,
  Briefcase
} from 'lucide-react';

export default function HealthcarePage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <HeartPulse className="w-3.5 h-3.5 text-sky-400" />
          <span>Alberta Health Care Insurance Plan (AHCIP) &amp; Dental</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'التأمين الصحي ورعاية الأسنان في ألبرتا' : 'Alberta Family Healthcare, Dental & Transit Command'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'تغطية فورية من اليوم الأول لوصول القادمين الجدد، مع تفصيل الخدمات المغطاة وغير المغطاة، وخطة الأسنان الفيدرالية CDCP، وتأمين العمل الخاص'
            : 'Zero-day waiting period for direct international PR arrivals in Alberta, CDCP dental co-payments, Alberta Child Health Benefit, and job offer total compensation evaluation.'}
        </p>
      </div>

      {/* Existing Transit & Core Healthcare Matrix */}
      <TransitHealthcareModule />

      {/* EXPANDED SECTION 1: AHCIP 3-Month Registration & In-Person Calgary Registries */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span>AHCIP Application Protocol &amp; The 3-Month Rule</span>
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Form AHC0102 • Direct in-person registration at authorized Calgary private registry agents
            </p>
          </div>
          <a
            href={ahcipNewcomerPolicy.officialApplyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold"
          >
            <span>Official Alberta.ca Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs text-slate-300">
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <strong className="text-white text-sm block">Mandatory Documentation to Bring:</strong>
            <ul className="space-y-1.5 font-light">
              {ahcipNewcomerPolicy.requiredDocuments.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <strong className="text-white text-sm block">Recommended In-Person Registries in Calgary:</strong>
            <div className="space-y-3 font-light">
              {ahcipNewcomerPolicy.inPersonOfficesCalgary.map((office, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80">
                  <strong className="text-white block">{office.name}</strong>
                  <div className="text-slate-400 text-[11px]">{office.address}</div>
                  <div className="text-[10px] text-sky-400 font-mono mt-1">{office.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EXPANDED SECTION 2: DENTAL (CDCP, ACHB, BLUE CROSS NON-GROUP) */}
      <div className="space-y-6">
        <div className="border-b border-slate-800 pb-3">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <Building2 className="w-5 h-5 text-sky-400" />
            <span>Canadian Dental Care Plan (CDCP) vs. Provincial Safety Nets</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            How routine and emergency dental is funded when AHCIP excludes adult cleanings and fillings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* CDCP Card */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-white text-sm">CDCP (Federal Dental)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                  Income Tested
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                For Canadian tax residents with <strong>NO employer dental access</strong> and net family income under $90,000.
              </p>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1 text-xs font-mono">
                {canadianDentalCarePlan.copaymentStructure.map((tier, i) => (
                  <div key={i} className="flex justify-between text-[11px]">
                    <span className="text-slate-400">{tier.incomeBracket}:</span>
                    <span className={tier.copayPercentage === 0 ? 'text-emerald-400' : 'text-amber-400'}>
                      {tier.copayPercentage}% copay
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-[11px] text-amber-300 bg-amber-950/30 p-2.5 rounded-xl border border-amber-800/40">
              ⚠️ <em>Dentist Balance Billing Warning:</em> You must pay any rate difference if dentist charges above the CDCP fee schedule.
            </div>
          </div>

          {/* Alberta Child Health Benefit (ACHB) */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-white text-sm">Alberta Child Health (ACHB)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                  Alberta Provincial
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                Free dental, prescription eyeglasses, and drugs for children of families with net income below <strong>${albertaChildHealthBenefit.incomeThresholds2026.coupleWith3ChildrenNetIncomeCAD.toLocaleString()} CAD</strong> (Couple + 3 kids).
              </p>
              <ul className="space-y-1 text-xs text-slate-300 font-light">
                {albertaChildHealthBenefit.coveredServicesForChildren.map((svc, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={albertaChildHealthBenefit.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1 font-mono pt-2 border-t border-slate-800"
            >
              <span>Alberta Supports Application</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Alberta Blue Cross Non-Group Bridge */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-1">
                <h4 className="font-bold text-white text-sm">Blue Cross Non-Group (Plan 118)</h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                  Bridge Coverage
                </span>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed mb-3">
                Government-subsidized bridge insurance for outpatient prescriptions and ambulance before employer group benefits start.
              </p>
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between">
                  <span className="text-slate-400">Family Premium:</span>
                  <strong className="text-white">${albertaBlueCrossNonGroup.monthlyPremiumsCAD.familyStandardMonthlyCAD} / mo</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Subsidized Family:</span>
                  <strong className="text-purple-300">${albertaBlueCrossNonGroup.monthlyPremiumsCAD.familySubsidizedMonthlyCAD} / mo</strong>
                </div>
                <div className="flex justify-between text-emerald-400 pt-1 border-t border-slate-800">
                  <span>Prescription Co-pay:</span>
                  <span>30% (Max $35/rx)</span>
                </div>
              </div>
            </div>
            <a
              href={albertaBlueCrossNonGroup.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-purple-400 hover:text-purple-300 flex items-center gap-1 font-mono pt-2 border-t border-slate-800"
            >
              <span>Blue Cross Plan 118 Portal</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* EXPANDED SECTION 3: JOB OFFER HEALTH BENEFITS VALUATION */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <div>
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-sky-400" />
            <span>Evaluating Job Offers: Base Salary vs. Total Benefits Package</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Why a $135k corporate offer with enterprise dental, drugs, and RRSP matching beats a $145k offer with zero group benefits.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobOfferBenefitsValueModel.scenarioComparison.map((sc, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3 flex flex-col justify-between">
              <div>
                <strong className="text-white text-sm block">{sc.offerName}</strong>
                <div className="text-xl font-bold font-mono text-emerald-400 mt-1">
                  ${sc.totalCompensationCAD.toLocaleString()} CAD <span className="text-xs text-slate-400 font-sans font-normal">Total Real Family Value</span>
                </div>
                <div className="mt-3 space-y-1.5 text-xs text-slate-300 font-light">
                  <div>• <strong>Base Salary:</strong> ${sc.baseSalaryCAD.toLocaleString()} CAD</div>
                  <div>• <strong>Dental:</strong> {sc.dentalCoverage}</div>
                  <div>• <strong>Prescription:</strong> {sc.drugCoverage}</div>
                  <div>• <strong>RRSP Match:</strong> {sc.rrspMatching}</div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800/80 text-[11px] text-slate-300 italic">
                {sc.verdict}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXPANDED SECTION 4: FAMILY HEALTH SETUP CHECKLIST */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-lg font-bold text-white">Family Health Setup Checklist (First Week &amp; Month)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-sky-400 uppercase">First Week in Calgary:</span>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {familyHealthSetupChecklist.firstWeek.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{item.step}</strong>
                    <span className="text-[10px] font-mono text-slate-400">{item.days} • Priority: {item.priority}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
            <span className="text-xs font-mono font-bold text-emerald-400 uppercase">First Month in Calgary:</span>
            <ul className="space-y-2 text-xs text-slate-300 font-light">
              {familyHealthSetupChecklist.firstMonth.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">{item.step}</strong>
                    <span className="text-[10px] font-mono text-slate-400">{item.days} • Priority: {item.priority}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <SourceModal />
    </div>
  );
}
