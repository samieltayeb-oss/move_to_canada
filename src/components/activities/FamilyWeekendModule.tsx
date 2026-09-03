'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  calgaryWeekendActivities, 
  calgaryFairEntryGuide, 
  WeekendActivity 
} from '@/data/weekendActivities';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Award, 
  ShieldCheck, 
  Utensils, 
  Users, 
  CheckCircle2,
  Building2
} from 'lucide-react';

export function FamilyWeekendModule() {
  const { isRtl } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | WeekendActivity['category']>('ALL');
  const [activeTab, setActiveTab] = useState<'ACTIVITIES' | 'FAIR_ENTRY'>('ACTIVITIES');

  const filteredActivities = calgaryWeekendActivities.filter(act => {
    if (selectedCategory === 'ALL') return true;
    return act.category === selectedCategory;
  });

  const categories: { id: 'ALL' | WeekendActivity['category']; label: string; arabicLabel: string }[] = [
    { id: 'ALL', label: 'All Activities (9)', arabicLabel: 'جميع الأنشطة (9)' },
    { id: 'ROCKIES_NATURE', label: 'Rockies & Nature', arabicLabel: 'جبال الروكي والطبيعة' },
    { id: 'INDOOR_RECREATION', label: 'Indoor Recreation & Pools', arabicLabel: 'المراكز المغلقة والمسابح' },
    { id: 'SCIENCE_CULTURE', label: 'Science & Animals', arabicLabel: 'العلوم والحيوانات' },
    { id: 'WINTER_SNOW', label: 'Winter Snow & Ice', arabicLabel: 'الثلوج والتزلج الشتوي' },
    { id: 'SUMMER_PARKS', label: 'Summer Lakes & Parks', arabicLabel: 'البحيرات والحدائق' }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Header Banner */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/banff_mountain_family_trip.jpg"
          alt="Calgary Family Weekend & Rockies Adventures"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            <span>Family Quality of Life &amp; Recreation</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'دليل عطلات نهاية الأسبوع وأنشطة الأبناء في كالغاري' : 'Calgary Family Weekend & Kids Activities'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'أفضل الوجهات والأنشطة الأسبوعية المناسبة لأعمار الأبناء (16، 11، و 5 سنوات) صيفاً وشتاءً، مع برنامج الدخول العادل (Fair Entry) لخصومات بلدية كالغاري'
              : 'Curated weekend excursions tailored for kids (ages 16, 11, and 5) across 4 seasons, plus the City of Calgary Fair Entry municipal subsidy guide.'}
          </p>
        </div>
      </div>

      {/* Top Level Navigation Tabs */}
      <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
        <button
          onClick={() => setActiveTab('ACTIVITIES')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'ACTIVITIES'
              ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4 text-sky-300" />
          <span>{isRtl ? 'الأنشطة والرحلات العائلية (9 وجهات)' : 'Weekend Activities & Trips (9 Destinations)'}</span>
        </button>

        <button
          onClick={() => setActiveTab('FAIR_ENTRY')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            activeTab === 'FAIR_ENTRY'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
              : 'bg-slate-900 text-slate-300 border border-slate-800 hover:text-white'
          }`}
        >
          <Award className="w-4 h-4 text-emerald-300" />
          <span>{isRtl ? 'برنامج الدعم البلدي (Fair Entry)' : 'Calgary Fair Entry Subsidy'}</span>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
            Save $2,000+/yr
          </span>
        </button>
      </div>

      {/* TAB 1: WEEKEND ACTIVITIES */}
      {activeTab === 'ACTIVITIES' && (
        <div className="space-y-6">
          {/* Category Filter Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-sky-600 text-white shadow-md'
                    : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {isRtl ? cat.arabicLabel : cat.label}
              </button>
            ))}
          </div>

          {/* Activities Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredActivities.map((act) => (
              <div
                key={act.id}
                className="glass-panel rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Card Header & Location */}
                  <div className="p-6 border-b border-slate-800/80">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800 font-semibold">
                            {act.quadrantOrArea}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
                            <Clock className="w-3 h-3 inline mr-1 text-slate-400" />
                            {act.drivingTimeFromNE}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800">
                            {act.seasonality}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white leading-snug">
                          {isRtl ? act.arabicTitle : act.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{act.address}</span>
                    </p>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    {/* Age Breakdown for 16, 11, 5 */}
                    <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                      <span className="text-[11px] font-bold font-mono text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        {isRtl ? 'ملاءمة النشاط لأعمار الأبناء (16، 11، 5 سنوات):' : 'Fit for Yassir’s Kids (Ages 16, 11, 5):'}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="font-bold text-sky-400 block text-[11px]">Teenager (16 yrs):</span>
                          <p className="text-slate-300 text-[11px] mt-0.5 leading-tight">
                            {isRtl ? act.arabicAgeFitNotes.teen16 : act.ageFitNotes.teen16}
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="font-bold text-emerald-400 block text-[11px]">Youth (11 yrs):</span>
                          <p className="text-slate-300 text-[11px] mt-0.5 leading-tight">
                            {isRtl ? act.arabicAgeFitNotes.child11 : act.ageFitNotes.child11}
                          </p>
                        </div>
                        <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                          <span className="font-bold text-amber-400 block text-[11px]">Child (5 yrs):</span>
                          <p className="text-slate-300 text-[11px] mt-0.5 leading-tight">
                            {isRtl ? act.arabicAgeFitNotes.kid5 : act.ageFitNotes.kid5}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-1.5 text-xs text-slate-300 font-light">
                      {act.highlights.map((h, hIdx) => (
                        <li key={hIdx} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Halal Dining Note */}
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30 text-xs text-emerald-300 flex items-start gap-2">
                      <Utensils className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-emerald-200 block text-[11px]">Nearby Halal Dining:</strong>
                        <span className="text-slate-300 text-[11px] font-light">{act.halalFoodNearby}</span>
                      </div>
                    </div>

                    {/* Cost Matrix */}
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-mono">Admission / Fees:</span>
                        <strong className="text-white text-xs">{act.admissionCost.regularCAD}</strong>
                      </div>
                      {act.admissionCost.fairEntryDiscountCAD && (
                        <div className="sm:text-right">
                          <span className="text-emerald-400 block text-[10px] uppercase font-mono font-bold">Fair Entry Subsidy:</span>
                          <span className="text-emerald-300 text-xs">{act.admissionCost.fairEntryDiscountCAD}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 border-t border-slate-800/80 mt-auto flex items-center justify-between gap-3 pt-4">
                  <a
                    href={act.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors group"
                  >
                    <span>Official Website</span>
                    <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-sky-400" />
                  </a>
                  <a
                    href={act.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-sky-600/20 hover:bg-sky-600/30 border border-sky-500/40 text-sky-200 hover:text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-colors group"
                  >
                    <MapPin className="w-3 h-3 text-sky-400" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CALGARY FAIR ENTRY SUBSIDY MODULE */}
      {activeTab === 'FAIR_ENTRY' && (
        <div className="space-y-8">
          {/* Main Subsidy Callout Box */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-950">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-slate-800">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-xs font-mono text-emerald-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>CITY OF CALGARY SOCIAL POLICY INITIATIVE</span>
                </div>
                <h2 className="text-xl sm:text-3xl font-extrabold text-white">
                  {isRtl ? calgaryFairEntryGuide.arabicProgramName : calgaryFairEntryGuide.programName}
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                  {isRtl ? calgaryFairEntryGuide.arabicTagline : calgaryFairEntryGuide.tagline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-950/80 border border-emerald-800 text-center shrink-0">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block font-semibold">Total Family Annual Benefit</span>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-emerald-300">$2,400+ CAD</span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Transit passes + swim lessons + rec</span>
              </div>
            </div>

            {/* CRITICAL NEWCOMER IMMIGRATION RULE BANNER */}
            <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 font-bold text-xs sm:text-sm">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <span>
                  {isRtl ? 'قاعدة الهبوط والاستحقاق الفوري للقادمين الجدد (بدون إقرار ضريبي سابق):' : 'Crucial Newcomer Rule: Qualify Instantly with COPR (No Prior Tax Return Required)'}
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed font-light">
                {isRtl ? calgaryFairEntryGuide.newcomerEligibilityRule.arabicRule : calgaryFairEntryGuide.newcomerEligibilityRule.rule}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300 pt-1">
                {calgaryFairEntryGuide.newcomerEligibilityRule.acceptedProofOfIncome.map((proof, pIdx) => (
                  <div key={pIdx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{proof}</span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] font-mono text-amber-300/80 pt-1">
                ★ {calgaryFairEntryGuide.newcomerEligibilityRule.incomeThreshold2026}
              </p>
            </div>
          </div>

          {/* 5 Fair Entry Benefits Cards */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>{isRtl ? 'المزايا والخصومات المعتمدة للأسرة' : 'Approved Family Subsidies Included in Fair Entry'}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {calgaryFairEntryGuide.benefits.map((b, idx) => (
                <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-all flex flex-col justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm mb-2">
                      {isRtl ? b.arabicBenefitTitle : b.benefitTitle}
                    </h4>

                    <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-3 space-y-1 text-xs font-mono">
                      <div className="flex justify-between">
                        <span className="text-slate-400">Regular Price:</span>
                        <span className="line-through text-slate-500">{b.standardCost}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-emerald-400 font-bold">Fair Entry Price:</span>
                        <strong className="text-emerald-300 font-bold text-sm">{b.fairEntryCost}</strong>
                      </div>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed font-light">
                      {isRtl ? b.arabicSavingsDescription : b.savingsDescription}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step-by-Step How to Apply */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                <span>{isRtl ? 'خطوات التقديم خطوة بخطوة' : 'Step-by-Step How to Apply'}</span>
              </h3>
              <a
                href={calgaryFairEntryGuide.onlineApplyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40"
              >
                <span>Apply Online at Calgary.ca</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {calgaryFairEntryGuide.applicationSteps.map((step) => (
                <div key={step.stepNumber} className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 font-bold font-mono flex items-center justify-center text-xs">
                      {step.stepNumber}
                    </span>
                    <h4 className="font-bold text-white text-xs sm:text-sm">
                      {isRtl ? step.arabicTitle : step.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    {isRtl ? step.arabicInstructions : step.instructions}
                  </p>
                </div>
              ))}
            </div>

            {/* In-Person Service Desks in Calgary */}
            <div className="pt-4 border-t border-slate-800/80 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                {isRtl ? 'المكاتب الميدانية للتقديم الحضوري في كالغاري:' : 'In-Person Fair Entry Application Desks in Calgary:'}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {calgaryFairEntryGuide.inPersonOffices.map((office, oIdx) => (
                  <div key={oIdx} className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 text-xs space-y-2">
                    <strong className="text-white block font-medium">{office.name}</strong>
                    <p className="text-slate-400 text-[11px]">{office.address}</p>
                    <div className="text-[11px] font-mono text-slate-500">
                      <div>Hours: {office.hours}</div>
                      <div>Transit: {office.transit}</div>
                    </div>
                    <a
                      href={office.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 text-[11px] font-mono pt-1"
                    >
                      <MapPin className="w-3 h-3" />
                      <span>View on Google Maps</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
