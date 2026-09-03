'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  calgaryGroceryStores, 
  sampleFamilyBasket, 
  calculateFamilyFoodBudget, 
  calculateCostcoEconomics,
  foodPriceReport2026Benchmarks
} from '@/data/groceries';
import { 
  ShoppingBag, 
  Store, 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ExternalLink, 
  Layers, 
  Scale
} from 'lucide-react';

export function FamilyGroceryModule() {
  const { formatCurrency, isRtl } = useApp();
  const [activeTab, setActiveTab] = useState<'BENCHMARK' | 'COSTCO' | 'STORES' | 'BASKET' | 'WEEKLY_PLAN'>('BENCHMARK');

  // Baseline family ages
  const adult1Age = 38;
  const adult2Age = 36;
  const child1Age = 11;
  const child2Age = 8;
  const child3Age = 4;

  // Costco interactive spend
  const [monthlyCostcoSpend, setMonthlyCostcoSpend] = useState(750);
  const [costcoGasSavings, setCostcoGasSavings] = useState(25);

  const budgetResult = calculateFamilyFoodBudget(adult1Age, adult2Age, child1Age, child2Age, child3Age);
  const costcoResult = calculateCostcoEconomics({
    monthlyGrocerySpend: monthlyCostcoSpend,
    percentPurchasedAtCostco: 100,
    eligibleExecutivePurchasesPercent: 90,
    gasSavingsPerMonthCAD: costcoGasSavings
  });

  return (
    <div className="space-y-10">
      {/* Visual Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/costco_bulk_shopping_family.jpg"
          alt="Family Grocery Shopping in Calgary"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-xs font-mono text-amber-300 mb-3">
            <ShoppingBag className="w-3.5 h-3.5 text-amber-400" />
            <span>Family Food Intelligence Pillar</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'مركز استخبارات الغذاء والتموين العائلي' : 'Family Grocery Command Center'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'كم يكلف إطعام عائلة من 5 أفراد في كالغاري؟ دراسة معتمدة على تقرير أسعار الغذاء الكندي لعام 2026 مع خيارات الحلال ومقارنة كوستكو وسوبرستور'
              : 'How much will feeding a family of five actually cost in Calgary? Real age-based benchmarks, 100% Halal meat sourcing, and Costco vs Superstore unit economics.'}
          </p>
        </div>
      </div>

      {/* Sub-Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'BENCHMARK', label: isRtl ? 'حساب الميزانية بالأعمار' : 'Age-Based Benchmark', icon: Calculator },
          { id: 'COSTCO', label: isRtl ? 'حاسبة جدوى كوستكو' : 'Costco Value Calculator', icon: Sparkles },
          { id: 'STORES', label: isRtl ? 'دليل ومواقع السوبرماركت' : 'Calgary Supermarkets', icon: Store },
          { id: 'BASKET', label: isRtl ? 'مقارنة أسعار السلة' : 'Unit-Price Basket', icon: Scale },
          { id: 'WEEKLY_PLAN', label: isRtl ? 'خطة التسوق الذكية' : 'Smart Weekly Plan', icon: Layers }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'BENCHMARK' | 'COSTCO' | 'STORES' | 'BASKET' | 'WEEKLY_PLAN')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* TAB 1: AGE-BASED NUTRITION BENCHMARK */}
      {activeTab === 'BENCHMARK' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'نموذج تكلفة الغذاء العائلي بالأعمار (Food Price Report 2026)' : 'Canada Food Price Report 2026 — Individual Age Model'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'لا نعتمد على مضاعفة أرقام عائلة مكونة من 4، بل نحسب الاحتياج الغذائي الفعلي لكل فرد من أفراد أسرة ياسر'
                  : 'Individual nutritional expenditure calculated for 2 adults + 3 children, plus Alberta logistics and Halal meat premiums'}
              </p>
            </div>
            <span className="text-xs font-mono text-amber-300 px-3 py-1.5 rounded-lg bg-amber-950/60 border border-amber-800">
              National Avg Family of 4: $17,571.79/yr
            </span>
          </div>

          {/* 3 Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">{isRtl ? 'الميزانية الأسبوعية' : 'Weekly Grocery Target'}</span>
              <span className="text-2xl font-bold text-white">{formatCurrency(budgetResult.benchmarkWeeklyCAD)}</span>
              <span className="text-[11px] text-slate-400 block mt-1">~$75 per person / week</span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-amber-500/20">
              <span className="text-xs text-amber-300 block mb-1">{isRtl ? 'الميزانية الشهرية المتوازنة' : 'Monthly Balanced Budget'}</span>
              <span className="text-2xl font-bold text-amber-400">{formatCurrency(budgetResult.benchmarkMonthlyCAD)}</span>
              <span className="text-[11px] text-slate-400 block mt-1">Includes Alberta +4% & Halal +6%</span>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-slate-800">
              <span className="text-xs text-slate-400 block mb-1">{isRtl ? 'الميزانية السنوية الإجمالية' : 'Annual Food Expenditure'}</span>
              <span className="text-2xl font-bold text-white">{formatCurrency(budgetResult.benchmarkAnnualCAD)}</span>
              <span className="text-[11px] text-slate-400 block mt-1">For 5 household members</span>
            </div>
          </div>

          {/* 3 Lifestyle Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Economical
              </span>
              <h4 className="text-base font-bold text-white">{isRtl ? 'المتسوق الاقتصادي' : 'Value Shopper'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Costco wholesale staples in bulk, weekly produce specials at Superstore/Walmart, strict meal planning, and minimal packaged convenience food.
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block">Monthly Target:</span>
                <span className="text-xl font-bold text-emerald-400">{formatCurrency(budgetResult.planValueShopperCAD)}/mo</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-900/60 text-amber-300 border border-amber-700">
                Recommended
              </span>
              <h4 className="text-base font-bold text-white">{isRtl ? 'العائلة المتوازنة' : 'Balanced Family'}</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Fresh halal butcher meats (Basha/Saned), abundant fresh fruit and berries, school snacks, quality dairy, and moderate family convenience dining.
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block">Monthly Target:</span>
                <span className="text-xl font-bold text-amber-400">{formatCurrency(budgetResult.planBalancedCAD)}/mo</span>
              </div>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                Executive
              </span>
              <h4 className="text-base font-bold text-white">{isRtl ? 'المستوى الراقي' : 'Premium Organic'}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Extensive organic produce, prime Alberta halal steaks and roasts, specialty imported Middle Eastern gourmet items, and frequent prepared meal options.
              </p>
              <div className="pt-2 border-t border-slate-800">
                <span className="text-xs text-slate-400 block">Monthly Target:</span>
                <span className="text-xl font-bold text-white">{formatCurrency(budgetResult.planPremiumCAD)}/mo</span>
              </div>
            </div>
          </div>

          {/* Age Demographics Table */}
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 text-xs">
            <h4 className="text-sm font-bold text-white mb-3">
              Canada Food Price Report 2026 — Individual Category Breakdown
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="pb-2">Family Member</th>
                    <th className="pb-2">Nutritional Category</th>
                    <th className="pb-2">Monthly Baseline (CAD)</th>
                    <th className="pb-2">Annual Baseline (CAD)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="py-2.5 font-medium text-white">Yassir (Adult 1)</td>
                    <td>{foodPriceReport2026Benchmarks.man_31_50.categoryName}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.man_31_50.monthlyEstimateCAD)}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.man_31_50.annualEstimateCAD)}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-white">Spouse (Adult 2)</td>
                    <td>{foodPriceReport2026Benchmarks.woman_31_50.categoryName}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.woman_31_50.monthlyEstimateCAD)}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.woman_31_50.annualEstimateCAD)}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-white">Child 1 (Age 11)</td>
                    <td>{foodPriceReport2026Benchmarks.boy_9_13.categoryName}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.boy_9_13.monthlyEstimateCAD)}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.boy_9_13.annualEstimateCAD)}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-white">Child 2 (Age 8)</td>
                    <td>{foodPriceReport2026Benchmarks.child_4_8.categoryName}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.child_4_8.monthlyEstimateCAD)}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.child_4_8.annualEstimateCAD)}</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 font-medium text-white">Child 3 (Age 4)</td>
                    <td>{foodPriceReport2026Benchmarks.child_0_4.categoryName}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.child_0_4.monthlyEstimateCAD)}</td>
                    <td className="font-mono">{formatCurrency(foodPriceReport2026Benchmarks.child_0_4.annualEstimateCAD)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: COSTCO VALUE CALCULATOR */}
      {activeTab === 'COSTCO' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'حاسبة الجدوى الاقتصادية لعضوية كوستكو' : 'Costco Canada Value & Break-Even Calculator'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'هل تستحق عضوية كوستكو التنفيذية (Executive $130) الدفع مقارنة بالعادية (Gold Star $65)؟ احسب نقطة التعادل بناءً على مشتريات عائلتك'
                : 'Current September 2026 fees: Gold Star $65/yr vs Executive $130/yr. Calculate your 2% reward and gas bar savings.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
            {/* Interactive Inputs */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-5">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Estimate Your Family Spending</span>
              </h4>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Expected Monthly Spend at Costco</span>
                  <span className="font-bold text-amber-400">{formatCurrency(monthlyCostcoSpend)}/mo</span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="1600"
                  step="50"
                  value={monthlyCostcoSpend}
                  onChange={(e) => setMonthlyCostcoSpend(parseInt(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>$200/mo</span>
                  <span>$800/mo (Typical for 5)</span>
                  <span>$1,600/mo</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1.5">
                  <span className="text-slate-300 font-medium">Estimated Monthly Costco Gas Savings</span>
                  <span className="font-bold text-emerald-400">{formatCurrency(costcoGasSavings)}/mo</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="60"
                  step="5"
                  value={costcoGasSavings}
                  onChange={(e) => setCostcoGasSavings(parseInt(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block mt-1">
                  * Costco gas bars in Calgary (Sunridge, Beacon Hill) typically offer an 8¢/L discount vs street pump prices.
                </span>
              </div>

              {/* Warning Notice on Delivery Markup */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-200">
                <strong className="block text-amber-300 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Costco Delivery vs Warehouse Price Warning:
                </strong>
                <p className="text-[11px] leading-relaxed font-light">
                  Costco.ca and Same-Day delivery via Instacart are marked up approximately 15%–20% compared to in-warehouse physical pricing. To capture true savings, shop in person at physical Calgary warehouses.
                </p>
              </div>
            </div>

            {/* Results Display */}
            <div className="glass-panel p-6 rounded-2xl border border-amber-500/30 bg-amber-950/10 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-amber-500/20">
                  <span className="text-xs font-mono uppercase text-amber-400 font-bold">
                    Economic Verdict
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {costcoResult.recommendation}
                  </span>
                </div>

                <div className="space-y-2.5 pt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Annual Costco Purchases:</span>
                    <span className="font-mono font-bold text-white">{formatCurrency(costcoResult.estimatedAnnualCostcoSpendCAD)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">2% Executive Annual Cash-Back:</span>
                    <span className="font-mono font-bold text-emerald-400">+{formatCurrency(costcoResult.estimated2PercentExecutiveRewardCAD)}/yr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Upgrade Cost from Gold Star:</span>
                    <span className="font-mono text-rose-400">-${costcoResult.upgradeCostCAD}/yr ($130 - $65)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Annual Costco Gas Bar Savings:</span>
                    <span className="font-mono text-emerald-400">+{formatCurrency(costcoResult.annualGasSavingsCAD)}/yr</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-amber-500/20 font-bold text-sm">
                    <span className="text-white">Net Executive Dividend:</span>
                    <span className="text-emerald-400">+{formatCurrency(costcoResult.totalExecutiveNetBenefitCAD)}/yr</span>
                  </div>
                </div>

                <p className="mt-4 p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs leading-relaxed">
                  {costcoResult.rationale}
                </p>
              </div>

              <div className="text-[11px] text-slate-400">
                * Break-even threshold: Spend at least <strong>$270.83/month</strong> ($3,250/year) on qualifying Costco items to completely cover the $65 upgrade cost.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: CALGARY SUPERMARKETS */}
      {activeTab === 'STORES' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'دليل ومواقع السوبرماركت والملاحم في كالغاري' : 'Calgary Supermarket & Halal Grocery Guide'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'فهم دور كل متجر: أين تشتري اللحوم الحلال، أين تشتري مستلزمات الجملة، وأين تجد المنتجات العربية'
                : 'Verified retail ecosystem: Wholesale bulk, weekly flyer specials, and dedicated Arab/Middle Eastern halal butchers'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            {calgaryGroceryStores.map(store => (
              <div key={store.id} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-950/80 text-amber-300 border border-amber-800">
                      {store.positioningTag}
                    </span>
                    <span className="text-[11px] text-slate-500 font-mono">{store.calgaryLocationsCount} Locations</span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {isRtl ? store.arabicName : store.name}
                  </h4>

                  <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                    {isRtl ? store.arabicBestFor : store.bestFor}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 mb-3 space-y-1.5">
                    <strong className="text-emerald-400 block flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Halal Meat Status:
                    </strong>
                    <p className="text-slate-400 text-[11px] leading-relaxed">
                      {store.halalNote}
                    </p>
                  </div>

                  <div className="text-[11px] text-slate-400">
                    <strong className="text-slate-300">Key Areas: </strong>
                    {store.primaryLocations.join(' • ')}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between">
                  <a
                    href={store.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>Store Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <span className="text-[10px] text-slate-500 font-mono">Price Index: {store.priceIndexVsAverage}x</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 4: UNIT-PRICE BASKET ENGINE */}
      {activeTab === 'BASKET' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'محرك مقارنة أسعار السلة الغذائية المعيارية' : 'Normalized Unit-Price Basket Comparison'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'مقارنة أسعار موحدة (لكل كيلوجرام أو لتر) عبر المتاجر الكبرى لضمان العدالة وعدم مقارنة عبوة صغيرة بعبوة جملة'
                : 'Unit-normalized pricing ($/kg, $/L, $/dozen) across Superstore, Costco, Walmart, and local Halal butchers'}
            </p>
          </div>

          <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 text-[11px]">
                    <th className="p-3.5">Staple Item (Halal)</th>
                    <th className="p-3.5">Unit</th>
                    <th className="p-3.5">Superstore</th>
                    <th className="p-3.5">Costco Bulk</th>
                    <th className="p-3.5">Walmart</th>
                    <th className="p-3.5">Halal Butcher (Basha/Saned)</th>
                    <th className="p-3.5">Best Value Store</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  {sampleFamilyBasket.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                      <td className="p-3.5 font-medium text-white">
                        {isRtl ? item.arabicItemName : item.itemName}
                      </td>
                      <td className="p-3.5 font-mono text-slate-400">{item.standardUnit}</td>
                      <td className="p-3.5 font-mono">${item.superstoreUnitPriceCAD.toFixed(2)}</td>
                      <td className="p-3.5 font-mono font-bold text-amber-400">${item.costcoUnitPriceCAD.toFixed(2)}</td>
                      <td className="p-3.5 font-mono">${item.walmartUnitPriceCAD.toFixed(2)}</td>
                      <td className="p-3.5 font-mono text-emerald-400">${item.halalStoreUnitPriceCAD.toFixed(2)}</td>
                      <td className="p-3.5 text-[11px] font-semibold text-sky-400">{item.bestStoreForThisItem}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: SMART WEEKLY PLAN */}
      {activeTab === 'WEEKLY_PLAN' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'خطة التسوق الذكية للأسبوع' : 'This Week\'s Smart Family Shopping Plan'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'كيف تقسم مشتريات عائلتك بين المتاجر للحصول على أفضل جودة وأقل تكلفة؟'
                : 'Optimized triage: Bulk pantry at Costco, fresh produce at Superstore, and premium meats at Halal butchers'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="glass-panel p-6 rounded-2xl border border-sky-500/20 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                Stop 1: Every 2–3 Weeks
              </span>
              <h4 className="text-base font-bold text-white">Costco Wholesale (Sunridge / Beacon Hill)</h4>
              <p className="text-slate-400">
                Target bulk staples with highest price divergence:
              </p>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>10 kg Basmati Rice bags</li>
                <li>Kirkland Signature 3L Olive Oil</li>
                <li>Flat of 30 Large Grade A Eggs ($7.75)</li>
                <li>Paper towels, laundry detergent, diapers</li>
                <li>Kirkland mixed nuts, oats, and cereal</li>
                <li>Fill gas tank at Costco Gas Bar (save ~8¢/L)</li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-amber-500/20 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">
                Stop 2: Weekly
              </span>
              <h4 className="text-base font-bold text-white">Real Canadian Superstore (Westwinds / Country Hills)</h4>
              <p className="text-slate-400">
                Target fresh perishable groceries and flyer specials:
              </p>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>4L Milk jugs (2% cow milk)</li>
                <li>Weekly fresh produce (berries, apples, salad greens)</li>
                <li>Yogurt tubs and school lunch items</li>
                <li>Cedar / Al-Alali canned goods from international aisle</li>
                <li>Use PC Optimum points to accumulate cash rebates</li>
              </ul>
            </div>

            <div className="glass-panel p-6 rounded-2xl border border-emerald-500/20 space-y-3">
              <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                Stop 3: Bi-Weekly / As Needed
              </span>
              <h4 className="text-base font-bold text-white">Basha Foods / Saned Halal Butcher</h4>
              <p className="text-slate-400">
                Target fresh custom meat cuts and cultural specialties:
              </p>
              <ul className="space-y-1.5 text-slate-300 list-disc list-inside">
                <li>Fresh Alberta lean ground beef & stewing cubes</li>
                <li>Fresh lamb chops cut to order</li>
                <li>Warm Arabic pita flatbread baked same morning</li>
                <li>Authentic Middle Eastern spices (sumac, 7-spice)</li>
                <li>Tahini, medjool dates, Arabic halloumi cheese</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
