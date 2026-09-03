'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { IMMIGRATION_STATUS_OPTIONS } from '@/data/familyProfile';
import { 
  PlaneTakeoff, 
  Sliders, 
  Check,
  Video,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export function HeroProfile() {
  const { familyProfile, updateFamilyProfile, t, isRtl } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(familyProfile);
  const [heroVideoLang, setHeroVideoLang] = useState<'EN' | 'AR'>('EN');

  const heroVideos = {
    EN: {
      id: 'ZjfFvYr2Grs',
      title: 'Moving to Calgary in 2026? WATCH THIS FIRST | Mapping, Prices, Best Areas, Schools',
      author: 'Ton Nguyen — Living in Calgary',
      duration: '24 mins',
      highlights: [
        'Quadrant map breakdown (NE, NW, SW, SE) for newcomer families',
        'Recent rental price softening and housing inventory in 2026',
        'How school boundaries work with the Calgary Board of Education (CBE)'
      ]
    },
    AR: {
      id: 'U4UeZD3w0ls',
      title: 'معلومات ستصدمك عن كندا ، مدينة كالغاري | CALGARY ALBERTA',
      author: 'Ali Imad — علي عماد',
      duration: '14 دقيقة',
      highlights: [
        'ميزة انعدام ضريبة المبيعات الإقليمية (0% PST) وتوفير آلاف الدولارات في ألبرتا',
        'المجتمع الإسلامي والمساجد والمراكز العائلية وتوفر اللحوم الحلال',
        'شمس كالغاري الساطعة وطبيعة الشتاء الجاف وظاهرة رياح الشينوك'
      ]
    }
  };

  const activeVideo = heroVideos[heroVideoLang];

  const handleSave = () => {
    updateFamilyProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <section className="relative pt-6 pb-10 overflow-hidden border-b border-slate-800/80">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
        {/* Top Badging */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-sky-300">
            <PlaneTakeoff className="w-4 h-4 text-sky-400" />
            <span>{t.hero.badge}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Target Horizon: Relocation Decision 2026</span>
          </div>
        </div>

        {/* Hero Headline */}
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.hero.headline}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-light">
            {t.hero.question}
          </p>
          <p className="mt-2 text-sm text-sky-400 font-medium">
            {t.secondaryCopy}
          </p>
        </div>

        {/* Two-Column Grid: Profile Card + Featured Relocation Video */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Column: Personalized Family Profile Card (7 cols) */}
          <div className="lg:col-span-7 glass-panel rounded-2xl border border-sky-500/20 p-5 sm:p-7 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
                {/* Subject Info */}
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-amber-500/20 border border-slate-700 flex items-center justify-center text-sky-300 text-lg font-bold font-mono shrink-0">
                    YA
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800">
                        Primary Profile
                      </span>
                      <span className="text-[11px] text-slate-400">Riyadh (RUH) → Calgary (YYC)</span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mt-0.5">
                      {familyProfile.headOfHousehold}&apos;s Family
                    </h3>
                    <p className="text-xs text-slate-400">
                      {t.hero.familySummary}
                    </p>
                  </div>
                </div>

                {/* Customization Action */}
                <button
                  onClick={() => {
                    if (isEditing) handleSave();
                    else {
                      setTempProfile(familyProfile);
                      setIsEditing(true);
                    }
                  }}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-medium transition-all shadow-md self-start sm:self-auto"
                >
                  {isEditing ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Sliders className="w-3.5 h-3.5 text-sky-400" />}
                  <span>{isEditing ? t.hero.saveProfile : t.hero.editProfile}</span>
                </button>
              </div>

              {/* Read-Only Mode Display Grid */}
              {!isEditing ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 pt-5 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">{t.hero.targetCity}</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">
                      {familyProfile.targetCity}, AB
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">{t.hero.familyMembers}</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">
                      {familyProfile.numAdults} Adults, {familyProfile.numChildren} Kids
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">{t.hero.childAges}</span>
                    <strong className="text-sky-400 font-mono font-semibold text-xs sm:text-sm">
                      {familyProfile.childrenAges.join(', ')} yrs
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">{t.hero.immigrationStatus}</span>
                    <strong className="text-emerald-400 font-semibold text-xs sm:text-sm">
                      {familyProfile.immigrationStatus}
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">{t.hero.housingPref}</span>
                    <strong className="text-white font-semibold text-xs sm:text-sm">
                      {familyProfile.housingPreference} Detached
                    </strong>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-400 block mb-0.5 text-[11px]">Primary Education</span>
                    <strong className="text-sky-300 font-semibold text-xs sm:text-sm">
                      Public (CBE) $0
                    </strong>
                  </div>
                </div>
              ) : (
                /* Edit Mode Interactive Form */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-5 text-xs animate-in fade-in duration-200">
                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">{t.hero.headOfHousehold}</label>
                    <input
                      type="text"
                      value={tempProfile.headOfHousehold}
                      onChange={(e) => setTempProfile({ ...tempProfile, headOfHousehold: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">{t.hero.immigrationStatus}</label>
                    <select
                      value={tempProfile.immigrationStatus}
                      onChange={(e) => setTempProfile({ ...tempProfile, immigrationStatus: e.target.value as (typeof IMMIGRATION_STATUS_OPTIONS)[number] })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    >
                      {IMMIGRATION_STATUS_OPTIONS.map((status) => (
                        <option key={status} value={status}>{status}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">{t.hero.expectedIncome}</label>
                    <input
                      type="number"
                      step="5000"
                      value={tempProfile.expectedAnnualHouseholdIncomeCAD}
                      onChange={(e) => setTempProfile({ ...tempProfile, expectedAnnualHouseholdIncomeCAD: parseInt(e.target.value) || 0 })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1 font-medium">{t.hero.housingPref}</label>
                    <select
                      value={tempProfile.housingPreference}
                      onChange={(e) => setTempProfile({ ...tempProfile, housingPreference: e.target.value as '3-Bed' | '4-Bed' })}
                      className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="3-Bed">3-Bedroom Home</option>
                      <option value="4-Bed">4-Bedroom Home</option>
                    </select>
                  </div>

                  <div className="flex items-center gap-2 pt-2 sm:col-span-2">
                    <input
                      type="checkbox"
                      id="islamicSchoolCheck"
                      checked={tempProfile.islamicSchoolPreference}
                      onChange={(e) => setTempProfile({ ...tempProfile, islamicSchoolPreference: e.target.checked })}
                      className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 bg-slate-900 border-slate-700"
                    />
                    <label htmlFor="islamicSchoolCheck" className="text-slate-300 text-xs">
                      Optional: Prioritize Islamic Schooling (CIS) instead of Public Schools (CBE)
                    </label>
                  </div>

                  <div className="sm:col-span-2 pt-2">
                    <button
                      onClick={handleSave}
                      className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition-all"
                    >
                      Apply &amp; Recalculate Dashboard
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-4 mt-5 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
              <span>{isRtl ? 'حالة الملف: موثق بالكامل' : 'Profile Status: Verified Baseline'}</span>
              <span className="font-mono text-emerald-400">{isRtl ? 'بالغان • 3 أبناء (16، 11، 5 سنوات)' : '2 Adults • 3 Kids (16, 11, 5 yrs)'}</span>
            </div>
          </div>

          {/* Right Column: Featured Relocation Video (5 cols) */}
          <div className="lg:col-span-5 glass-panel rounded-2xl border border-red-500/30 p-5 shadow-2xl flex flex-col justify-between bg-slate-950/70">
            <div>
              {/* Video Header & Language Switcher */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                      {isRtl ? 'فيديو توجيهي موثق' : 'Calgary Relocation Brief'}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-mono">Verified 2026 Orientation</span>
                  </div>
                </div>

                {/* Video Language Toggle */}
                <div className="flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-[10px] font-mono">
                  <button
                    onClick={() => setHeroVideoLang('EN')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      heroVideoLang === 'EN' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setHeroVideoLang('AR')}
                    className={`px-2 py-0.5 rounded transition-all ${
                      heroVideoLang === 'AR' ? 'bg-red-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    عربي
                  </button>
                </div>
              </div>

              {/* Responsive Embedded Player */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-slate-800 bg-black shadow-lg mb-3">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?rel=0`}
                  title={activeVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="space-y-1.5 mb-3">
                <h5 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                  {activeVideo.title}
                </h5>
                <p className="text-[11px] text-slate-400">
                  By {activeVideo.author} • {activeVideo.duration}
                </p>
              </div>

              {/* Bullet Takeaways */}
              <div className="space-y-1 pt-2 border-t border-slate-800/80">
                {activeVideo.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-300">
                    <span className="text-red-400 font-bold">•</span>
                    <span className="line-clamp-1">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-3 mt-3 border-t border-slate-800 flex items-center justify-between text-xs">
              <a
                href={`https://www.youtube.com/watch?v=${activeVideo.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white flex items-center gap-1 text-[11px]"
              >
                <span>Watch on YouTube</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>

              <Link
                href="/videos"
                className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1 text-[11px]"
              >
                <span>{isRtl ? 'جميع الفيديوهات (6)' : 'All 6 Videos'}</span>
                <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
