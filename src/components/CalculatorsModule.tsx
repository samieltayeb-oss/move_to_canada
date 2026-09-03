'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { Calculator } from 'lucide-react';

export function CalculatorsModule() {
  const { t, familyProfile, sarRate } = useApp();
  const [selectedLifestyle, setSelectedLifestyle] = useState<'Basic' | 'Comfortable' | 'Premium'>('Comfortable');

  // Dynamic cost models based on family configuration
  const is4Bed = familyProfile.housingPreference === '4-Bed';
  const hasIslamicSchool = familyProfile.islamicSchoolPreference;

  const costTiers = {
    Basic: {
      rent: is4Bed ? 2550 : 2250,
      utilities: 380,
      groceries: 1300,
      telecom: 140, // internet + 2 mobile lines
      insurance: 28 + 260, // tenant + auto
      transport: 180, // gas (paid cash for used car)
      schools: hasIslamicSchool ? 400 : 150,
      clothingWinter: 120,
      healthDental: 100,
      miscRecreation: 350
    },
    Comfortable: {
      rent: is4Bed ? 2950 : 2550,
      utilities: 480,
      groceries: 1650,
      telecom: 175,
      insurance: 38 + 320,
      transport: 450 + 250 + 126, // car finance + gas + 1 transit pass
      schools: hasIslamicSchool ? 650 : 250,
      clothingWinter: 200,
      healthDental: 200,
      miscRecreation: 700
    },
    Premium: {
      rent: is4Bed ? 3950 : 3300,
      utilities: 620,
      groceries: 2100,
      telecom: 250,
      insurance: 55 + 550,
      transport: 850 + 380 + 126,
      schools: hasIslamicSchool ? 1100 : 400,
      clothingWinter: 350,
      healthDental: 350,
      miscRecreation: 1250
    }
  };

  const activeTier = costTiers[selectedLifestyle];
  const monthlyTotalCAD = Object.values(activeTier).reduce((a, b) => a + b, 0);
  const annualTotalCAD = monthlyTotalCAD * 12;
  const monthlyTotalSAR = Math.round(monthlyTotalCAD * sarRate);
  const annualTotalSAR = Math.round(annualTotalCAD * sarRate);

  // Arrival Cash Reserves Data
  const landingTiers = {
    Minimum: {
      cad: 26300,
      sar: Math.round(26300 * sarRate),
      rentDeposit: '$4,600 (1st mo + 1 mo deposit)',
      tempStay: '$2,400 (2 weeks Airbnb)',
      furniture: '$3,000 (IKEA / secondhand)',
      vehicle: '$8,000 (Used car down payment / budget cash)',
      winterTiresGear: '$2,200 (Tires + coats for 5)',
      emergencyReserve: '$5,000 (1 month runway)'
    },
    Recommended: {
      cad: 45600,
      sar: Math.round(45600 * sarRate),
      rentDeposit: '$5,700 (1st mo + deposit on 4-bed)',
      tempStay: '$4,000 (3-4 weeks furnished)',
      furniture: '$6,000 (Full house furnishings)',
      vehicle: '$15,000 (Reliable AWD SUV down payment / purchase)',
      winterTiresGear: '$3,300 (Michelin tires + premium coats)',
      emergencyReserve: '$10,000 (2 months buffer)'
    },
    Comfortable: {
      cad: 76500,
      sar: Math.round(76500 * sarRate),
      rentDeposit: '$7,600 (Executive estate lease)',
      tempStay: '$6,000 (Executive corporate suite)',
      furniture: '$10,000 (All-new quality furniture)',
      vehicle: '$25,000 (Substantial down payment / new Sienna AWD)',
      winterTiresGear: '$4,600 (Nokian tires + luxury winter apparel)',
      emergencyReserve: '$20,000 (3+ months emergency liquidity)'
    }
  };

  return (
    <section id="calculators" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2">
              <Calculator className="w-3.5 h-3.5 text-emerald-400" />
              <span>FINANCIAL PLANNING & LIQUIDITY ENGINES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.calculators.colTitle}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              Personalized monthly family budget and upfront arrival cash reserve modeling
            </p>
          </div>

          {/* Lifestyle Tier Selector */}
          <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800">
            {(['Basic', 'Comfortable', 'Premium'] as const).map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedLifestyle(tier)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedLifestyle === tier
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tier === 'Basic'
                  ? t.calculators.lifestyleBasic
                  : tier === 'Comfortable'
                  ? t.calculators.lifestyleComfortable
                  : t.calculators.lifestylePremium}
              </button>
            ))}
          </div>
        </div>

        {/* Master Output Banner */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 mb-10 border border-emerald-500/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Selected Lifestyle Tier:
              </span>
              <span className="text-xl font-bold text-white">
                {selectedLifestyle} Living ({familyProfile.numAdults} Adults + {familyProfile.numChildren} Kids)
              </span>
              <span className="text-xs text-sky-400 block mt-1">
                Housing: {familyProfile.housingPreference} Detached
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Monthly Net Outlay (CAD):
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-mono text-emerald-400">
                  ${monthlyTotalCAD.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">{t.common.monthly}</span>
              </div>
              <span className="text-xs font-mono text-slate-400 block mt-0.5">
                ${annualTotalCAD.toLocaleString()} CAD/year
              </span>
            </div>

            <div>
              <span className="text-xs font-mono uppercase text-slate-400 block mb-1">
                Monthly In Saudi Riyals (SAR):
              </span>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black font-mono text-amber-400">
                  {monthlyTotalSAR.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400">SAR/mo</span>
              </div>
              <span className="text-xs font-mono text-slate-400 block mt-0.5">
                ≈ {annualTotalSAR.toLocaleString()} SAR/year
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300">
              <span className="font-semibold text-slate-200 block mb-1">Bank of Canada FX Benchmark:</span>
              <span className="font-mono text-sky-400 block">1 CAD ≈ {sarRate} SAR</span>
              <span className="text-[10px] text-slate-400 block mt-1">
                No provincial sales tax (0% PST) applied to consumer purchases.
              </span>
            </div>
          </div>
        </div>

        {/* Expense Line-Item Breakdown Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16 text-xs font-mono">
          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Housing Rent:</span>
            <span className="text-base font-bold text-white">${activeTier.rent}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Utilities & Municipal:</span>
            <span className="text-base font-bold text-white">${activeTier.utilities}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Family Halal Groceries:</span>
            <span className="text-base font-bold text-white">${activeTier.groceries}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Telecom & Mobile:</span>
            <span className="text-base font-bold text-white">${activeTier.telecom}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Auto & Tenant Insurance:</span>
            <span className="text-base font-bold text-white">${activeTier.insurance}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Transport (Car + Fuel):</span>
            <span className="text-base font-bold text-white">${activeTier.transport}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Schools & Programs:</span>
            <span className="text-base font-bold text-white">${activeTier.schools}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Winter Apparel Fund:</span>
            <span className="text-base font-bold text-white">${activeTier.clothingWinter}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Medical / Dental Copay:</span>
            <span className="text-base font-bold text-white">${activeTier.healthDental}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800">
            <span className="text-slate-400 block text-[10px] uppercase">Recreation & Misc:</span>
            <span className="text-base font-bold text-white">${activeTier.miscRecreation}</span>
            <span className="text-[10px] text-slate-500 block">CAD/mo</span>
          </div>
        </div>

        {/* Arrival Cash Reserve Calculator Section */}
        <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 border border-amber-500/30">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                LANDING LIQUIDITY BENCHMARK
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {t.calculators.landingReserveTitle}
              </h3>
              <p className="mt-1 text-xs text-slate-300">
                Planning guidance for upfront liquid funds required during the first 60–90 days in Calgary
              </p>
            </div>

            <div className="text-xs text-amber-300 font-mono bg-slate-950 p-2.5 rounded-xl border border-amber-800">
              Planning guidance only • Not financial advice
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(['Minimum', 'Recommended', 'Comfortable'] as const).map((key) => {
              const tier = landingTiers[key];
              const isRecommended = key === 'Recommended';
              return (
                <div
                  key={key}
                  className={`rounded-2xl p-6 border flex flex-col justify-between ${
                    isRecommended
                      ? 'bg-slate-900/90 border-sky-500/60 shadow-xl shadow-sky-950/40 ring-1 ring-sky-500/30'
                      : 'bg-slate-900/40 border-slate-800'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold text-white text-base">
                        {key === 'Minimum'
                          ? t.calculators.reserveMinimum
                          : key === 'Recommended'
                          ? t.calculators.reserveRecommended
                          : t.calculators.reserveComfortable}
                      </h4>
                      {isRecommended && (
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 uppercase">
                          Recommended
                        </span>
                      )}
                    </div>

                    <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 mb-4 font-mono">
                      <div className="flex items-baseline gap-1 text-2xl font-black text-white">
                        <span>${tier.cad.toLocaleString()}</span>
                        <span className="text-xs text-slate-400">CAD</span>
                      </div>
                      <span className="text-xs text-amber-400 block mt-0.5">
                        ≈ {tier.sar.toLocaleString()} SAR
                      </span>
                    </div>

                    <div className="space-y-2 text-xs text-slate-300 mb-4">
                      <div className="flex justify-between border-b border-slate-800/60 pb-1">
                        <span className="text-slate-400">Rent & Deposit:</span>
                        <span className="text-right font-medium">{tier.rentDeposit}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/60 pb-1">
                        <span className="text-slate-400">Temporary Stay:</span>
                        <span className="text-right font-medium">{tier.tempStay}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/60 pb-1">
                        <span className="text-slate-400">Furnishings:</span>
                        <span className="text-right font-medium">{tier.furniture}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/60 pb-1">
                        <span className="text-slate-400">Vehicle Outlay:</span>
                        <span className="text-right font-medium">{tier.vehicle}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-800/60 pb-1">
                        <span className="text-slate-400">Winter Tires/Coats:</span>
                        <span className="text-right font-medium">{tier.winterTiresGear}</span>
                      </div>
                      <div className="flex justify-between pt-1">
                        <span className="text-slate-400">Emergency Buffer:</span>
                        <span className="text-right font-medium text-emerald-400">{tier.emergencyReserve}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 text-[11px] text-slate-500">
                    CBSA declaration required if carrying ≥ $10,000 CAD cash.
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
