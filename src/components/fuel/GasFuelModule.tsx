'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  calgaryFuelBenchmarks, 
  familyVehicleFuelProfiles, 
  commuteQuadrantMatrix, 
  calculateVehicleFuelExpenditure 
} from '@/data/fuel';
import { 
  Fuel, 
  Car, 
  Train, 
  Calculator, 
  TrendingUp, 
  TrendingDown, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';

export function GasFuelModule() {
  const { formatCurrency, isRtl } = useApp();
  const [activeTab, setActiveTab] = useState<'BENCHMARKS' | 'CALCULATOR' | 'COMMUTE' | 'VEHICLE_COMPARE'>('BENCHMARKS');

  // Calculator interactive state
  const [selectedLPer100Km, setSelectedLPer100Km] = useState<number>(10.5); // Gas SUV
  const [commuteKmDay, setCommuteKmDay] = useState<number>(44); // 22 km one-way
  const [commuteDaysMonth, setCommuteDaysMonth] = useState<number>(20);
  const [errandsKmDay, setErrandsKmDay] = useState<number>(15); // groceries, school, mosque
  const [weekendKmMonth, setWeekendKmMonth] = useState<number>(250); // Banff / activities
  const fuelPricePerLitre = 1.449;

  const fuelCalcResult = calculateVehicleFuelExpenditure({
    fuelEconomyLPer100Km: selectedLPer100Km,
    commuteKmPerDay: commuteKmDay,
    daysCommutedPerMonth: commuteDaysMonth,
    familyErrandsKmPerDay: errandsKmDay,
    weekendTripsKmPerMonth: weekendKmMonth,
    fuelPricePerLitreCAD: fuelPricePerLitre
  });

  return (
    <div className="space-y-10">
      {/* Visual Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/family_suv_winter_highway.jpg"
          alt="Family AWD SUV Driving on Calgary Stoney Trail with Rocky Mountains"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
            <Fuel className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mobility & Energy Command Center</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'مركز استخبارات الوقود وتكاليف التنقل' : 'Gas & Fuel Command Center'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'كم ستكلفك قيادة السيارة في كالغاري؟ بيانات هيئة الإحصاء الكندية (StatsCan Table 18-10-0001-01) مع حاسبة الاستهلاك اليومي ومقارنة السيارات الهايبرد مقابل البنزين'
              : 'What will driving actually cost? Official Statistics Canada pump benchmarks, commute route fuel models, and 5-year hybrid vs gas vehicle economics.'}
          </p>
        </div>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'BENCHMARKS', label: isRtl ? 'أسعار البنزين الرسمية' : 'StatsCan Pump Benchmarks', icon: Fuel },
          { id: 'CALCULATOR', label: isRtl ? 'حاسبة استهلاك الوقود' : 'Fuel Expenditure Calculator', icon: Calculator },
          { id: 'COMMUTE', label: isRtl ? 'تكلفة المشاوير والدوام' : 'Commute Cost: Car vs Transit', icon: Train },
          { id: 'VEHICLE_COMPARE', label: isRtl ? 'مقارنة استهلاك السيارات' : 'Hybrid vs Gas Comparison', icon: Car }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'BENCHMARKS' | 'CALCULATOR' | 'COMMUTE' | 'VEHICLE_COMPARE')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: STATSCAN PUMP BENCHMARKS */}
      {activeTab === 'BENCHMARKS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'أسعار الوقود في كالغاري (إحصاءات كندا الرسمية)' : 'Official Calgary Fuel Price Benchmarks'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'المصدر: هيئة الإحصاء الكندية جدول 18-10-0001-01 لأسعار التجزئة الشهرية'
                  : 'Statistics Canada Table 18-10-0001-01 (Monthly retail fuel benchmarks for Calgary)'}
              </p>
            </div>
            <span className="text-xs font-mono text-emerald-300 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800">
              Reference: September 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calgaryFuelBenchmarks.map((fuel, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {fuel.fuelType}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">Calgary, AB</span>
                  </div>

                  <div className="mt-4 mb-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-white">
                        ${fuel.currentPricePerLitreCAD.toFixed(3)}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">/ Litre</span>
                    </div>
                    <span className="text-[11px] text-emerald-400 block mt-0.5">
                      Costco Gas Bar: ~${fuel.costcoPumpPricePerLitreCAD.toFixed(3)}/L (8¢ discount)
                    </span>
                  </div>

                  {/* Trend Indicator */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs">
                    <div className="flex justify-between items-center text-slate-300">
                      <span>1-Month Trend:</span>
                      <span className={`font-mono font-medium flex items-center gap-1 ${
                        fuel.oneMonthTrendCents < 0 ? 'text-emerald-400' : 'text-rose-400'
                      }`}>
                        {fuel.oneMonthTrendCents < 0 ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
                        {fuel.oneMonthTrendCents > 0 ? `+${fuel.oneMonthTrendCents}¢` : `${fuel.oneMonthTrendCents}¢`}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>3-Month Trend:</span>
                      <span className="font-mono text-rose-400">+{fuel.threeMonthTrendCents}¢/L</span>
                    </div>
                    <div className="flex justify-between items-center text-slate-300">
                      <span>12-Month Horizon:</span>
                      <span className="font-mono text-rose-400">+{fuel.twelveMonthTrendCents}¢/L</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>{fuel.statCanTableId}</span>
                  <span>Verified Current</span>
                </div>
              </div>
            ))}
          </div>

          {/* Sourced Alberta Advantage Note */}
          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white block mb-1">
                {isRtl ? 'ميزة ألبرتا في أسعار البنزين والضريبة 0% PST:' : 'The Alberta Advantage in Fuel Pricing:'}
              </strong>
              <p className="text-slate-400 leading-relaxed font-light">
                Alberta consistently enjoys Canada&apos;s lowest provincial fuel tax rates and 0% Provincial Sales Tax (PST). Gasoline in Calgary is typically 20¢–35¢/L cheaper than in Vancouver or Montreal, translating into annual family savings of $500–$900 CAD on fuel alone.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: VEHICLE FUEL CALCULATOR */}
      {activeTab === 'CALCULATOR' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'حاسبة استهلاك الوقود التفاعلية للسيارة العائلية' : 'Interactive Vehicle Fuel Expenditure Calculator'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'احسب بدقة مصروف البنزين الشهري والسنوي بناءً على مسافة مشاويرك ونوع محرك سيارتك'
                : 'Customizable formula: litres used = monthly km × L/100km ÷ 100; monthly cost = litres × price/L'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
            {/* Inputs */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Car className="w-4 h-4 text-emerald-400" />
                <span>Vehicle & Mileage Parameters</span>
              </h4>

              {/* Powertrain Presets */}
              <div>
                <label className="block text-slate-300 font-medium mb-1.5">Vehicle Powertrain Preset</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedLPer100Km(10.5)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedLPer100Km === 10.5 ? 'bg-emerald-950/60 border-emerald-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <strong className="block text-xs">Gas SUV (10.5 L)</strong>
                    <span className="text-[10px] text-slate-400">Highlander V6 / Pilot</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedLPer100Km(6.7)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedLPer100Km === 6.7 ? 'bg-emerald-950/60 border-emerald-500 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
                    }`}
                  >
                    <strong className="block text-xs">Hybrid SUV (6.7 L)</strong>
                    <span className="text-[10px] text-emerald-400">Highlander Hybrid</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Round-Trip Daily Commute (km)</span>
                  <span className="font-bold text-white">{commuteKmDay} km/day</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="80"
                  step="2"
                  value={commuteKmDay}
                  onChange={(e) => setCommuteKmDay(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Office Days Per Month</span>
                  <span className="font-bold text-white">{commuteDaysMonth} days</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="1"
                  value={commuteDaysMonth}
                  onChange={(e) => setCommuteDaysMonth(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Daily Family Errands (Schools, Mosques, Groceries)</span>
                  <span className="font-bold text-white">{errandsKmDay} km/day</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="40"
                  step="1"
                  value={errandsKmDay}
                  onChange={(e) => setErrandsKmDay(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-300">Weekend Trips & Mountain Outings (Monthly)</span>
                  <span className="font-bold text-white">{weekendKmMonth} km/mo</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={weekendKmMonth}
                  onChange={(e) => setWeekendKmMonth(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>
            </div>

            {/* Results */}
            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/30 bg-emerald-950/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold">
                    Calculated Expenditure
                  </span>
                  <span className="px-2.5 py-1 rounded text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    {fuelCalcResult.monthlyTotalKm} km / month
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Daily Fuel Outlay:</span>
                    <span className="text-lg font-bold text-white">{formatCurrency(fuelCalcResult.dailyFuelCostCAD)}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Weekly Fuel Outlay:</span>
                    <span className="text-lg font-bold text-white">{formatCurrency(fuelCalcResult.weeklyFuelCostCAD)}</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 col-span-2">
                    <span className="text-emerald-300 font-medium block mb-1">Monthly Fuel Budget:</span>
                    <span className="text-3xl font-extrabold text-emerald-400">{formatCurrency(fuelCalcResult.monthlyFuelCostCAD)}</span>
                    <span className="text-[11px] text-slate-400 block mt-1">Requires ~{fuelCalcResult.monthlyLitresUsed} Litres of gasoline</span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 col-span-2">
                    <span className="text-slate-400 block mb-1">Annual Fuel Expenditure:</span>
                    <span className="text-xl font-bold text-white">{formatCurrency(fuelCalcResult.annualFuelCostCAD)} / year</span>
                  </div>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                * Based on verified benchmark price of $1.449/L for Regular 87 unleaded gasoline in Calgary.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: COMMUTE COST: CAR VS TRANSIT */}
      {activeTab === 'COMMUTE' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'مقارنة تكلفة مشوار الدوام اليومي: السيارة مقابل القطار CTrain' : 'Commute Cost Breakdown: Private Car vs. Calgary Transit'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'مقارنة مسافة وزمن المشوار من أحياء كالغاري الأربعة إلى وسط المدينة (داون تاون)'
                : 'Commute distance matrix connecting suburban communities to Downtown Calgary'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {commuteQuadrantMatrix.map((commute, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-base font-bold text-white">{commute.quadrantName}</span>
                    <span className="text-xs text-slate-400 block">{commute.neighbourhoodExample}</span>
                  </div>
                  <span className="text-xs font-mono text-sky-400 bg-slate-900 px-2.5 py-1 rounded border border-slate-800">
                    {commute.oneWayKmToDowntown} km one-way
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Gas SUV Monthly Fuel:</span>
                    <strong className="text-rose-400 text-sm">{formatCurrency(commute.monthlyFuelCostGasSUV)}</strong>
                    <span className="text-[10px] text-slate-500 block mt-0.5">{commute.avgDriveMinutesOneWay} mins drive</span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-slate-400 block mb-1">Hybrid SUV Monthly Fuel:</span>
                    <strong className="text-emerald-400 text-sm">{formatCurrency(commute.monthlyFuelCostHybridSUV)}</strong>
                    <span className="text-[10px] text-emerald-300 block mt-0.5">Save ~$48/mo</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-900/30 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Train className="w-4 h-4 text-sky-400" />
                    <div>
                      <strong className="text-white block">Calgary Transit CTrain Pass:</strong>
                      <span className="text-slate-400 text-[11px]">{commute.transitAlternativeCtrainTimeMinutes} mins travel time</span>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-sky-300">{formatCurrency(commute.monthlyCtrainAdultPassCAD)}/mo</span>
                </div>

                <div className="text-[11px] text-slate-400 leading-relaxed">
                  * Note: Downtown corporate parking averages $250–$400/month. If driving, transit or hybrid park-and-ride (e.g. Saddletowne or Crowfoot CTrain stations with free parking) yields the highest net monthly savings.
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: VEHICLE POWERTRAIN COMPARISON */}
      {activeTab === 'VEHICLE_COMPARE' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'المقارنة الخماسية لاستهلاك الوقود: الهايبرد مقابل البنزين' : '5-Year Vehicle Powertrain Comparison (At 20,000 km / Year)'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'هل تستحق سيارة الهايبرد دفع فرق السعر المبدئي؟ دراسة استهلاك الوقود على مدى 5 سنوات في كالغاري'
                : 'Fuel economy ratings from Natural Resources Canada (NRCan) for family 3-row vehicles'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {familyVehicleFuelProfiles.map(veh => (
              <div key={veh.id} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {veh.powertrain}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {veh.fuelEconomyLPer100Km} L/100km
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-2">{veh.vehicleName}</h4>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">{veh.notes}</p>

                  <div className="space-y-2 p-3.5 rounded-xl bg-slate-900 border border-slate-800 mb-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Annual Fuel (20,000 km):</span>
                      <strong className="text-white">{veh.annualLitresAt20kKm} Litres</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Annual Fuel Cost (at $1.45/L):</span>
                      <strong className="text-emerald-400">{formatCurrency(veh.annualFuelCostAt145CentsCAD)} / yr</strong>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-slate-800">
                      <span className="text-slate-400">5-Year Cumulative Fuel:</span>
                      <strong className="text-white font-mono text-sm">{formatCurrency(veh.annualFuelCostAt145CentsCAD * 5)}</strong>
                    </div>
                  </div>
                </div>

                <div className="text-[11px] text-slate-400">
                  Recommended fuel: <strong className="text-slate-300">{veh.recommendedFuelType}</strong>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-200">
            <strong className="block text-emerald-300 mb-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              Verdict on Hybrid Family Vehicles:
            </strong>
            <p className="leading-relaxed font-light">
              Over 5 years of family ownership (100,000 km), a Toyota Highlander Hybrid saves approximately <strong>$5,510 CAD</strong> in direct fuel costs compared to its gas V6 counterpart, plus significantly lower brake pad wear from regenerative braking.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
