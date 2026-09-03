'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calculateCanadianTax } from '@/data/taxes';
import { Scale, MapPin } from 'lucide-react';

interface ScenarioComparison {
  id: string;
  cityName: string;
  arabicCityName: string;
  provinceCode: 'AB' | 'ON' | 'BC';
  provinceName: string;
  arabicProvinceName: string;
  targetSalaryCAD: number;
  threeBedRentCAD: number;
  fourBedRentCAD: number;
  monthlyUtilitiesCAD: number;
  monthlyTransitCAD: number;
  monthlyGroceriesCAD: number;
  healthWaitDays: number;
  healthWaitText: string;
  arabicHealthWaitText: string;
  drivingFriction: string;
  arabicDrivingFriction: string;
  muslimCommunityScale: string;
  arabicMuslimCommunityScale: string;
  islamicSchoolTuitionAnnualCAD: number;
  winterSummary: string;
  arabicWinterSummary: string;
}

const DEFAULT_SCENARIOS: ScenarioComparison[] = [
  {
    id: 'calgary',
    cityName: 'Calgary',
    arabicCityName: 'كالغاري',
    provinceCode: 'AB',
    provinceName: 'Alberta',
    arabicProvinceName: 'ألبرتا',
    targetSalaryCAD: 125000,
    threeBedRentCAD: 2345,
    fourBedRentCAD: 2950,
    monthlyUtilitiesCAD: 450,
    monthlyTransitCAD: 126,
    monthlyGroceriesCAD: 1833,
    healthWaitDays: 0,
    healthWaitText: '0 Days (Immediate AHCIP)',
    arabicHealthWaitText: 'فوري من اليوم الأول (0 يوم)',
    drivingFriction: 'Non-reciprocal: abstract review bypasses GDL to Class 5 road test',
    arabicDrivingFriction: 'غير متبادل: معادلة الخبرة عبر المرور السعودي لاختبار الفئة 5 مباشرة',
    muslimCommunityScale: '105,000+ Muslims, CIS Akram Jomaa, 4 major Islamic centres',
    arabicMuslimCommunityScale: 'أكثر من 105 آلاف مسلم، مدرسة إسلامية معتمدة، 4 مراكز كبرى',
    islamicSchoolTuitionAnnualCAD: 2200,
    winterSummary: 'Cold & sunny (-10°C to -25°C) with periodic warming Chinooks',
    arabicWinterSummary: 'بارد ومشمس مع رياح الشينوك الدافئة الدورية'
  },
  {
    id: 'toronto',
    cityName: 'Toronto',
    arabicCityName: 'تورونتو',
    provinceCode: 'ON',
    provinceName: 'Ontario',
    arabicProvinceName: 'أونتاريو',
    targetSalaryCAD: 145000,
    threeBedRentCAD: 3850,
    fourBedRentCAD: 4800,
    monthlyUtilitiesCAD: 380,
    monthlyTransitCAD: 156,
    monthlyGroceriesCAD: 1920,
    healthWaitDays: 0,
    healthWaitText: '0 Days (Immediate OHIP under Reg 552)',
    arabicHealthWaitText: 'فوري من اليوم الأول (0 يوم انتظار)',
    drivingFriction: 'DriveTest: 12 mo max foreign credit, mandatory G2 then G test',
    arabicDrivingFriction: 'اختبار درايف تيست: اعتماد سنة، يلزم رخصة G2 ثم G',
    muslimCommunityScale: '640,000+ Muslims, massive infrastructure, dozens of masajid',
    arabicMuslimCommunityScale: 'أكثر من 640 ألف مسلم، أضخم جالية ومؤسسات في كندا',
    islamicSchoolTuitionAnnualCAD: 7500,
    winterSummary: 'Snowy & humid (-5°C to -15°C) with heavy lake-effect slush',
    arabicWinterSummary: 'رطب ومثلج مع تأثير البحيرات الكبرى وثلوج رطبة'
  },
  {
    id: 'vancouver',
    cityName: 'Vancouver',
    arabicCityName: 'فانكوفر',
    provinceCode: 'BC',
    provinceName: 'British Columbia',
    arabicProvinceName: 'بريتيش كولومبيا',
    targetSalaryCAD: 135000,
    threeBedRentCAD: 4200,
    fourBedRentCAD: 5400,
    monthlyUtilitiesCAD: 320,
    monthlyTransitCAD: 156.70,
    monthlyGroceriesCAD: 1980,
    healthWaitDays: 75,
    healthWaitText: 'Balance of month + 2 calendar months (Mandatory bridge insurance)',
    arabicHealthWaitText: 'بقية الشهر + شهرين كاملين (يلزم تأمين مؤقت إلزامي)',
    drivingFriction: 'ICBC: Surrender Saudi licence, 2+ yrs direct Class 5 road test',
    arabicDrivingFriction: 'هيئة ICBC: تسليم الرخصة، خبرة سنتين تتيح اختبار الفئة 5',
    muslimCommunityScale: '115,000+ Muslims across Metro Vancouver, Al-Jamia Masjid',
    arabicMuslimCommunityScale: 'أكثر من 115 ألف مسلم، أقدم مسجد في المقاطعة',
    islamicSchoolTuitionAnnualCAD: 4100,
    winterSummary: 'Mild & rainy (+3°C to +8°C), rarely snows at sea level',
    arabicWinterSummary: 'معتدل وماطر (نادر التجمد)، أمطار شتوية مستمرة'
  },
  {
    id: 'ottawa',
    cityName: 'Ottawa',
    arabicCityName: 'أوتاوا',
    provinceCode: 'ON',
    provinceName: 'Ontario',
    arabicProvinceName: 'أونتاريو',
    targetSalaryCAD: 130000,
    threeBedRentCAD: 2850,
    fourBedRentCAD: 3400,
    monthlyUtilitiesCAD: 410,
    monthlyTransitCAD: 138.50,
    monthlyGroceriesCAD: 1850,
    healthWaitDays: 0,
    healthWaitText: '0 Days (Immediate OHIP under Reg 552)',
    arabicHealthWaitText: 'فوري من اليوم الأول (0 يوم انتظار)',
    drivingFriction: 'DriveTest: 12 mo max foreign credit, mandatory G2 then G test',
    arabicDrivingFriction: 'درايف تيست: رخصة G2 ثم اختبار G بعد سنة',
    muslimCommunityScale: '120,000+ Muslims, SNMC Centre, Abraar Islamic School',
    arabicMuslimCommunityScale: 'أكثر من 120 ألف مسلم، مدرسة الأبرار، مركز جنوب نيبيان',
    islamicSchoolTuitionAnnualCAD: 6880,
    winterSummary: 'Prolonged cold (-10°C to -22°C) with 220cm+ heavy snowfall',
    arabicWinterSummary: 'شديد البرودة مع تراكمات ثلجية كثيفة تتجاوز 220 سم'
  }
];

export function CompareMyLife() {
  const { locale, familyProfile, formatCurrency } = useApp();
  const [useFourBed, setUseFourBed] = useState<boolean>(false);

  const isAr = locale === 'ar';
  const kidsAges = familyProfile.childrenAges || [16, 11, 5];

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl mb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Scale className="w-3.5 h-3.5" />
            {isAr ? 'المقارنة الكندية الشاملة' : 'CROSS-PROVINCE LIFE COMPARISON'}
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isAr ? 'قارن حياتنا في كندا: أين تزدهر عائلتنا أكثر؟' : 'COMPARE MY LIFE IN CANADA'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1">
            {isAr
              ? 'مقارنة مباشرة جنباً إلى جنب بين 4 مدن رئيسية تشمل الضرائب الفعلية، والمساعدات الحكومية، والإيجارات، وصافي الفائض الشهري.'
              : 'Side-by-side comparative analysis of net disposable income, statutory taxes, benefits, and true monthly family surplus.'}
          </p>
        </div>

        {/* 3-Bed vs 4-Bed Toggle */}
        <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setUseFourBed(false)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              !useFourBed ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'شقة / تاونهاوس 3 غرف' : '3-Bed Benchmark'}
          </button>
          <button
            onClick={() => setUseFourBed(true)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              useFourBed ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
            }`}
          >
            {isAr ? 'منزل مستقل 4 غرف' : '4-Bed House'}
          </button>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="overflow-x-auto mt-6">
        <table className="w-full text-left rtl:text-right border-collapse min-w-[760px]">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs font-bold uppercase tracking-wider">
              <th className="py-4 px-4 bg-slate-950/60 rounded-tl-xl rtl:rounded-tl-none rtl:rounded-tr-xl w-[220px]">
                {isAr ? 'المعيار المالي والأسري' : 'Dimension / Metric'}
              </th>
              {DEFAULT_SCENARIOS.map(s => (
                <th key={s.id} className="py-4 px-4 bg-slate-950/30 border-l border-slate-800/60">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-white font-extrabold text-base">
                      {isAr ? s.arabicCityName : s.cityName}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-normal">
                    {isAr ? s.arabicProvinceName : s.provinceName} ({s.provinceCode})
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-sm">
            {/* 1. Target Salary */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 font-semibold text-slate-300">
                {isAr ? 'الراتب السنوي المستهدف' : 'Target Annual Salary'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 font-bold text-white border-l border-slate-800/60">
                  {formatCurrency(s.targetSalaryCAD)}
                </td>
              ))}
            </tr>

            {/* 2. Provincial Tax */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'ضريبة الدخل الإقليمية (المقاطعة)' : 'Provincial Income Tax'}
              </td>
              {DEFAULT_SCENARIOS.map(s => {
                const taxRes = calculateCanadianTax(s.targetSalaryCAD, kidsAges, true, s.provinceCode);
                return (
                  <td key={s.id} className="py-3 px-4 text-slate-300 border-l border-slate-800/60">
                    {formatCurrency(taxRes.provincialTaxCAD)}
                  </td>
                );
              })}
            </tr>

            {/* 3. Monthly Net Take-Home */}
            <tr className="hover:bg-slate-800/30 bg-emerald-950/10">
              <td className="py-3 px-4 font-semibold text-emerald-400">
                {isAr ? 'صافي الراتب الشهري (بعد الضرائب)' : 'Net Monthly Take-Home Pay'}
              </td>
              {DEFAULT_SCENARIOS.map(s => {
                const taxRes = calculateCanadianTax(s.targetSalaryCAD, kidsAges, true, s.provinceCode);
                return (
                  <td key={s.id} className="py-3 px-4 font-extrabold text-emerald-300 border-l border-slate-800/60">
                    {formatCurrency(taxRes.netMonthlyTakeHomeCAD)}
                  </td>
                );
              })}
            </tr>

            {/* 4. Estimated Family Benefits */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'المساعدات الحكومية الشهرية (CCB + المقاطعة)' : 'Monthly Government Child Benefits'}
              </td>
              {DEFAULT_SCENARIOS.map(s => {
                const taxRes = calculateCanadianTax(s.targetSalaryCAD, kidsAges, true, s.provinceCode);
                const monthlyBen = Math.round(taxRes.totalEstimatedBenefitsAnnualCAD / 12);
                return (
                  <td key={s.id} className="py-3 px-4 text-blue-300 font-medium border-l border-slate-800/60">
                    +{formatCurrency(monthlyBen)}
                  </td>
                );
              })}
            </tr>

            {/* 5. Benchmark Rent */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr 
                  ? (useFourBed ? 'إيجار شهري (منزل 4 غرف)' : 'إيجار شهري (شقة 3 غرف)') 
                  : (useFourBed ? 'Benchmark 4-Bed House Rent' : 'Benchmark 3-Bed Apartment Rent')}
              </td>
              {DEFAULT_SCENARIOS.map(s => {
                const rent = useFourBed ? s.fourBedRentCAD : s.threeBedRentCAD;
                return (
                  <td key={s.id} className="py-3 px-4 font-semibold text-amber-300 border-l border-slate-800/60">
                    -{formatCurrency(rent)}
                  </td>
                );
              })}
            </tr>

            {/* 6. Monthly Utilities */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'فواتير الخدمات والمرافق (كهرباء وغاز ومياه)' : 'Estimated Utilities (Energy/Gas/Water)'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-slate-300 border-l border-slate-800/60">
                  -{formatCurrency(s.monthlyUtilitiesCAD)}
                </td>
              ))}
            </tr>

            {/* 7. Public Transit Pass */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'اشتراك المواصلات العامة (بالغ)' : 'Adult Monthly Transit Pass'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-slate-300 border-l border-slate-800/60">
                  {formatCurrency(Math.round(s.monthlyTransitCAD))}
                </td>
              ))}
            </tr>

            {/* 8. Net Family Monthly Surplus / Deficit */}
            <tr className="hover:bg-slate-800/30 bg-slate-950/80 font-bold">
              <td className="py-4 px-4 text-white">
                {isAr ? 'صافي الفائض العائلي الشهري التقديري' : 'Estimated Net Monthly Family Surplus'}
              </td>
              {DEFAULT_SCENARIOS.map(s => {
                const taxRes = calculateCanadianTax(s.targetSalaryCAD, kidsAges, true, s.provinceCode);
                const rent = useFourBed ? s.fourBedRentCAD : s.threeBedRentCAD;
                const monthlyBen = Math.round(taxRes.totalEstimatedBenefitsAnnualCAD / 12);
                const totalIn = taxRes.netMonthlyTakeHomeCAD + monthlyBen;
                const totalOut = rent + s.monthlyUtilitiesCAD + s.monthlyGroceriesCAD + s.monthlyTransitCAD;
                const surplus = totalIn - totalOut;

                return (
                  <td key={s.id} className="py-4 px-4 border-l border-slate-800/60">
                    <span className={`px-2.5 py-1 rounded-lg text-sm font-extrabold inline-block ${
                      surplus >= 1000 
                        ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40' 
                        : surplus > 0 
                          ? 'bg-blue-950 text-blue-400 border border-blue-500/40'
                          : 'bg-rose-950 text-rose-400 border border-rose-500/40'
                    }`}>
                      {surplus > 0 ? '+' : ''}{formatCurrency(surplus)}
                    </span>
                  </td>
                );
              })}
            </tr>

            {/* 9. Healthcare Waiting Period */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'فترة انتظار التأمين الصحي العام' : 'Public Healthcare Wait Period'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-xs border-l border-slate-800/60">
                  <span className={`font-semibold ${s.healthWaitDays === 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                    {isAr ? s.arabicHealthWaitText : s.healthWaitText}
                  </span>
                </td>
              ))}
            </tr>

            {/* 10. Driving Licence Friction */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'معادلة رخصة القيادة (الرخصة السعودية)' : 'Driver Licence Exchange (Saudi Licence)'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-xs text-slate-300 border-l border-slate-800/60 leading-relaxed">
                  {isAr ? s.arabicDrivingFriction : s.drivingFriction}
                </td>
              ))}
            </tr>

            {/* 11. Muslim Life & Community Scale */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'الجالية والمؤسسات الإسلامية' : 'Muslim Life & Islamic Infrastructure'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-xs text-slate-300 border-l border-slate-800/60 leading-relaxed">
                  {isAr ? s.arabicMuslimCommunityScale : s.muslimCommunityScale}
                </td>
              ))}
            </tr>

            {/* 12. Winter Reality */}
            <tr className="hover:bg-slate-800/30">
              <td className="py-3 px-4 text-slate-400">
                {isAr ? 'طبيعة فصل الشتاء' : 'Winter Weather Reality'}
              </td>
              {DEFAULT_SCENARIOS.map(s => (
                <td key={s.id} className="py-3 px-4 text-xs text-slate-400 border-l border-slate-800/60 leading-relaxed">
                  {isAr ? s.arabicWinterSummary : s.winterSummary}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
