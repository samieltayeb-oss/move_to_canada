'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { IMMIGRATION_STATUS_OPTIONS } from '@/data/familyProfile';
import { FamilyProfile } from '@/data/types';
import { 
  PlaneTakeoff, 
  Sliders, 
  Check
} from 'lucide-react';

export function HeroProfile() {
  const { familyProfile, updateFamilyProfile, t, formatCurrency } = useApp();
  const [isEditing, setIsEditing] = useState(false);
  const [tempProfile, setTempProfile] = useState(familyProfile);

  const handleSave = () => {
    updateFamilyProfile(tempProfile);
    setIsEditing(false);
  };

  return (
    <section className="relative pt-8 pb-12 overflow-hidden border-b border-slate-800/80">
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Badging */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
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
        <div className="max-w-3xl mb-8">
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

        {/* Personalized Family Profile Card (Executive Glass) */}
        <div className="glass-panel rounded-2xl border border-sky-500/20 p-6 sm:p-8 shadow-2xl relative">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800">
            {/* Subject Info */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-sky-500/20 to-amber-500/20 border border-slate-700 flex items-center justify-center text-sky-300 text-xl font-bold font-mono">
                YA
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono uppercase px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800">
                    Primary Profile
                  </span>
                  <span className="text-xs text-slate-400">Riyadh (RUH) → Calgary (YYC)</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {familyProfile.headOfHousehold}&apos;s Family
                </h3>
                <p className="text-xs sm:text-sm text-slate-400">
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
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs sm:text-sm font-medium transition-all shadow-md"
            >
              {isEditing ? <Check className="w-4 h-4 text-emerald-400" /> : <Sliders className="w-4 h-4 text-sky-400" />}
              <span>{isEditing ? t.hero.saveProfile : t.hero.editProfile}</span>
            </button>
          </div>

          {/* Profile Metric Grid */}
          {!isEditing ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 pt-6 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">Household Size</span>
                <span className="text-base font-bold text-white">
                  {familyProfile.numAdults} Adults, {familyProfile.numChildren} Kids
                </span>
                <span className="text-[10px] text-sky-400 block mt-0.5">
                  Ages: {familyProfile.childrenAges.join(', ')}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">Immigration Status</span>
                <span className="text-base font-bold text-amber-400">
                  {familyProfile.immigrationStatus}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Full AHCIP eligible
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">Expected CAD Income</span>
                <span className="text-base font-bold text-emerald-400">
                  {formatCurrency(familyProfile.expectedAnnualHouseholdIncomeCAD)}/yr
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Gross household
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">Initial Reserves</span>
                <span className="text-base font-bold text-white">
                  {formatCurrency(familyProfile.initialSavingsCAD)}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Liquid landing funds
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">Housing Target</span>
                <span className="text-base font-bold text-white">
                  {familyProfile.housingPreference} Detached
                </span>
                <span className="text-[10px] text-sky-400 block mt-0.5">
                  Attached double garage
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
                <span className="text-slate-400 block mb-1">School Priority</span>
                <span className="text-base font-bold text-amber-300">
                  {familyProfile.islamicSchoolPreference ? 'Islamic (CIS)' : 'Public (CBE)'}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  Arabic & Quran stream
                </span>
              </div>
            </div>
          ) : (
            /* Editing Drawer */
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs animate-in fade-in duration-200">
              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.numAdults}</label>
                <input
                  type="number"
                  min="1"
                  max="4"
                  value={tempProfile.numAdults}
                  onChange={(e) => setTempProfile({ ...tempProfile, numAdults: parseInt(e.target.value) || 1 })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.numKids}</label>
                <input
                  type="number"
                  min="0"
                  max="6"
                  value={tempProfile.numChildren}
                  onChange={(e) => {
                    const count = parseInt(e.target.value) || 0;
                    const newAges = Array.from({ length: count }, (_, i) => tempProfile.childrenAges[i] || (count === 3 ? [11, 8, 4][i] : 7));
                    setTempProfile({ ...tempProfile, numChildren: count, childrenAges: newAges });
                  }}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.immigrationStatus}</label>
                <select
                  value={tempProfile.immigrationStatus}
                  onChange={(e) => setTempProfile({ ...tempProfile, immigrationStatus: e.target.value as FamilyProfile['immigrationStatus'] })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                >
                  {IMMIGRATION_STATUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.expectedIncome}</label>
                <input
                  type="number"
                  step="5000"
                  value={tempProfile.expectedAnnualHouseholdIncomeCAD}
                  onChange={(e) => setTempProfile({ ...tempProfile, expectedAnnualHouseholdIncomeCAD: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.initialSavings}</label>
                <input
                  type="number"
                  step="5000"
                  value={tempProfile.initialSavingsCAD}
                  onChange={(e) => setTempProfile({ ...tempProfile, initialSavingsCAD: parseInt(e.target.value) || 0 })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 mb-1.5 font-medium">{t.hero.housingPref}</label>
                <select
                  value={tempProfile.housingPreference}
                  onChange={(e) => setTempProfile({ ...tempProfile, housingPreference: e.target.value as '3-Bed' | '4-Bed' })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                >
                  <option value="3-Bed">3-Bedroom Home</option>
                  <option value="4-Bed">4-Bedroom Home</option>
                </select>
              </div>

              <div className="flex items-center gap-2 pt-6">
                <input
                  type="checkbox"
                  id="islamicSchoolCheck"
                  checked={tempProfile.islamicSchoolPreference}
                  onChange={(e) => setTempProfile({ ...tempProfile, islamicSchoolPreference: e.target.checked })}
                  className="w-4 h-4 rounded text-sky-600 focus:ring-sky-500 bg-slate-900 border-slate-700"
                />
                <label htmlFor="islamicSchoolCheck" className="text-slate-200">
                  Prioritize Islamic Schooling (CIS)
                </label>
              </div>

              <div className="flex items-end">
                <button
                  onClick={handleSave}
                  className="w-full py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium transition-all"
                >
                  Apply & Recalculate Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
