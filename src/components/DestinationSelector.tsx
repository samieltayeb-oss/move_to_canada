'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { MapPin, CheckCircle } from 'lucide-react';

interface ProvinceOption {
  code: 'AB' | 'ON' | 'BC';
  name: string;
  arabicName: string;
  tagline: string;
  arabicTagline: string;
  badge: string;
  arabicBadge: string;
  salesTax: string;
  healthWait: string;
  arabicHealthWait: string;
}

const PROVINCES: ProvinceOption[] = [
  {
    code: 'AB',
    name: 'Alberta',
    arabicName: 'ألبرتا',
    tagline: 'Lowest Taxes in Canada (0% PST), Sunny Skies & Rocky Mountains',
    arabicTagline: 'أقل ضرائب في كندا (0% ضريبة مبيعات إقليمية)، شمس وجبال روكي',
    badge: 'Tax Advantage: 0% PST',
    arabicBadge: 'الميزة الضريبية: 0% ضريبة مبيعات',
    salesTax: '5% GST (0% PST)',
    healthWait: 'Immediate (0 Days)',
    arabicHealthWait: 'فوري (0 يوم انتظار)'
  },
  {
    code: 'ON',
    name: 'Ontario',
    arabicName: 'أونتاريو',
    tagline: 'Canada’s Economic Powerhouse, Premier Corporate Markets & Giant Muslim Community',
    arabicTagline: 'عاصمة كندا الاقتصادية والمالية الكبرى وأكبر جالية ومؤسسات إسلامية',
    badge: 'Financial Capital & Bay Street',
    arabicBadge: 'المركز المالي والوظائف الكبرى',
    salesTax: '13% HST',
    healthWait: 'Immediate (0 Days)',
    arabicHealthWait: 'فوري (0 يوم انتظار)'
  },
  {
    code: 'BC',
    name: 'British Columbia',
    arabicName: 'بريتيش كولومبيا',
    tagline: 'Mildest Maritime Climate in Canada, Pacific Gateway & Subsidized Islamic Schools',
    arabicTagline: 'أدفأ شتاء في كندا، بوابة المحيط الهادئ ومدارس إسلامية مدعومة من المقاطعة',
    badge: 'Pacific Tech & Mild Winters',
    arabicBadge: 'مناخ معتدل ومدارس مدعومة',
    salesTax: '12% (5% GST + 7% PST)',
    healthWait: '~75-90 Days (Requires Bridge Insurance)',
    arabicHealthWait: '75-90 يوم (يلزم تأمين زائر مؤقت)'
  }
];

export function DestinationSelector() {
  const { activeProvince, setActiveProvince, activeCity, setActiveCity, availableCities, locale } = useApp();

  const isAr = locale === 'ar';

  return (
    <section className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur shadow-2xl mb-10 transition-all">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <MapPin className="w-3.5 h-3.5" />
            {isAr ? 'المرحلة 2: توسعة كندا الكبرى (ألبرتا • أونتاريو • بريتيش كولومبيا)' : 'PHASE 2 EXPANSION: ALBERTA • ONTARIO • BRITISH COLUMBIA'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {isAr ? 'إلى أين تخطط للانتقال في كندا؟' : 'WHERE ARE YOU THINKING OF MOVING?'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            {isAr 
              ? 'اختر المقاطعة والمدينة لتحديث كافة الضرائب، والمساعدات الحكومية، والإيجارات، والمدارس، والرعاية الصحية فورياً.'
              : 'Select your target province and city. Live taxes, family benefits, housing benchmarks, and settlement intelligence will adapt immediately.'}
          </p>
        </div>

        {/* Active Destination Status Card */}
        <div className="bg-slate-950/80 border border-emerald-500/30 rounded-xl px-4 py-3 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
          <div>
            <div className="text-xs text-slate-400 uppercase font-semibold">
              {isAr ? 'الوجهة النشطة حالياً' : 'Active Relocation Target'}
            </div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span className="text-emerald-400 font-extrabold">{activeProvince}</span>
              <span className="text-slate-500">•</span>
              <span className="capitalize">{availableCities.find(c => c.id === activeCity)?.name || activeCity}</span>
              {isAr && (
                <span className="text-slate-400 text-xs">
                  ({availableCities.find(c => c.id === activeCity)?.arabicName})
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 1. Step 1: Province Cards */}
      <div className="mt-6">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
          {isAr ? 'الخطوة 1: اختر المقاطعة' : 'Step 1: Choose Your Destination Province'}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {PROVINCES.map(prov => {
            const isSelected = activeProvince === prov.code;
            return (
              <button
                key={prov.code}
                onClick={() => setActiveProvince(prov.code)}
                className={`relative text-left p-5 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-emerald-950/30 border-emerald-500/80 shadow-lg shadow-emerald-950/40 ring-2 ring-emerald-500/30'
                    : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 hover:bg-slate-950/70'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3.5 right-3.5 rtl:right-auto rtl:left-3.5 flex items-center gap-1 text-emerald-400 text-xs font-bold">
                    <CheckCircle className="w-4 h-4" />
                    <span>{isAr ? 'المقاطعة المحددة' : 'Active'}</span>
                  </div>
                )}

                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-slate-800 text-slate-300 mb-2.5">
                    {isAr ? prov.arabicBadge : prov.badge}
                  </div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    {prov.name}
                    {isAr && <span className="text-slate-400 text-sm">({prov.arabicName})</span>}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {isAr ? prov.arabicTagline : prov.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 grid grid-cols-2 gap-2">
                  <div>
                    <span className="block text-slate-400 font-semibold">{isAr ? 'ضريبة المبيعات:' : 'Sales Tax:'}</span>
                    <span className="text-slate-200 font-medium">{prov.salesTax}</span>
                  </div>
                  <div>
                    <span className="block text-slate-400 font-semibold">{isAr ? 'تأمين الصحة:' : 'Healthcare Wait:'}</span>
                    <span className={`font-medium ${prov.code === 'BC' ? 'text-amber-400' : 'text-emerald-400'}`}>
                      {isAr ? prov.arabicHealthWait : prov.healthWait}
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Step 2: City Selector */}
      <div className="mt-6 pt-6 border-t border-slate-800/80">
        <label className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
          {isAr ? 'الخطوة 2: حدد المدينة' : `Step 2: Select City in ${activeProvince === 'AB' ? 'Alberta' : activeProvince === 'ON' ? 'Ontario' : 'British Columbia'}`}
        </label>
        <div className="flex flex-wrap gap-2.5">
          {availableCities.map(city => {
            const isCitySelected = activeCity === city.id;
            return (
              <button
                key={city.id}
                onClick={() => setActiveCity(city.id)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold border transition-all flex items-center gap-2 ${
                  isCitySelected
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-md shadow-emerald-950/50'
                    : 'bg-slate-950/60 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isCitySelected ? 'text-white' : 'text-slate-500'}`} />
                <span>{city.name}</span>
                <span className={`text-xs ${isCitySelected ? 'text-emerald-200' : 'text-slate-400'}`}>
                  ({city.arabicName})
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
