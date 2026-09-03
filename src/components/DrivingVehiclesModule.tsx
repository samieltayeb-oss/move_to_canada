'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { 
  recommendedFamilyVehicles, 
  saudiVehicleImportWarning, 
  saudiLicenceConversionGuide 
} from '@/data/vehicles';
import { 
  Car, 
  ShieldAlert, 
  FileText, 
  AlertTriangle, 
  Snowflake
} from 'lucide-react';

export function DrivingVehiclesModule() {
  const { t, isRtl } = useApp();

  return (
    <section id="driving-cars" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-300 mb-2">
              <Car className="w-3.5 h-3.5 text-cyan-400" />
              <span>MOBILITY, VEHICLES & LICENSING LEGALITIES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.drivingCars.drivingTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Alberta non-reciprocal rules, GDL modernization, family vehicles, and shipping regulations
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

                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {isRtl ? step.arabicDescription : step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Family Car Buying Command Center */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-amber-400" />
                <span>{t.drivingCars.carBuyingTitle} (Family of 5 AWD Candidates)</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Evaluated for winter black ice, cargo capacity, child car seats, and resale value
              </p>
            </div>

            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800 text-xs text-emerald-300 font-mono">
              ★ 0% Alberta Sales Tax Saves ~$4,000 vs. Ontario on a $50k Vehicle
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedFamilyVehicles.map((car) => (
              <div
                key={car.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-amber-300 border border-slate-800 font-semibold">
                        {car.type} • {car.seatingCapacity} Passengers
                      </span>
                      <h4 className="text-base font-bold text-white mt-1.5">
                        {isRtl ? car.arabicName : car.name}
                      </h4>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 font-mono text-xs">
                    <div>
                      <span className="text-slate-400 block text-[10px]">Used (2021–2023):</span>
                      <span className="font-bold text-white">{car.usedPriceRangeCAD}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Brand New MSRP:</span>
                      <span className="font-bold text-emerald-400">{car.newPriceRangeCAD}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Fuel Economy:</span>
                      <span className="text-slate-300">{car.fuelEconomyL100km}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[10px]">Alberta Tax Savings:</span>
                      <span className="text-amber-300">Save ${car.albertaTaxSavingsVsOntarioCAD} vs ON</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {isRtl ? car.arabicFamilyFitNotes : car.familyFitNotes}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Snowflake className="w-3.5 h-3.5 text-sky-400" />
                    <span>AWD Traction: {car.winterAwdRating}</span>
                  </span>
                  <span className="font-mono text-[11px] text-slate-500">AutoTrader CA 2026</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
