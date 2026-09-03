'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { calgaryFirstDaysGuide } from '@/data/firstDaysSettlement';
import { 
  CheckCircle2, 
  MapPin, 
  FileText, 
  ExternalLink, 
  Sparkles, 
  Building2,
  Navigation as NavIcon
} from 'lucide-react';

export function FirstDaysArrivalGuide() {
  const { isRtl, formatCurrency } = useApp();
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});

  const activeStep = calgaryFirstDaysGuide[activeStepIndex];

  const toggleDoc = (key: string) => {
    setCheckedDocs(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <section id="first-days-arrival-guide" className="py-8 space-y-8">
      {/* Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-sky-500/30 bg-gradient-to-r from-sky-950/40 via-slate-900 to-emerald-950/30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{isRtl ? 'خطة الأيام الأولى في كالغاري' : 'FIRST 72 HOURS ACTION ROADMAP'}</span>
            </div>
            <h2 className="text-xl sm:text-3xl font-extrabold text-white tracking-tight">
              {isRtl 
                ? 'الخطوات الإلزامية الأولى فور وصول ياسر وعائلته إلى كالغاري' 
                : 'First Steps Upon Landing: Step-by-Step Newcomer Intake Guide'}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {isRtl 
                ? 'أين تذهب تحديداً، العناوين الدقيقة، الوثائق المطلوبة، وكيف تستخرج رقم التأمين الاجتماعي (SIN) وكرت الصحة المجاني (AHCIP) ومدارس الأبناء (16، 11، 5 سنوات) دون تأخير.'
                : 'Exact locations, required documents, transit access, and government procedures to get your SIN, Alberta Health Cards (AHCIP), and school enrollments done with zero friction.'}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs font-mono px-3 py-1.5 rounded-xl bg-emerald-950/80 text-emerald-300 border border-emerald-800">
              {isRtl ? 'تكلفة الإجراءات: 0$ مجاناً' : 'Government Fees: $0 FREE'}
            </span>
          </div>
        </div>

        {/* Step Progression Tabs */}
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-5 gap-2 pt-6 border-t border-slate-800/80">
          {calgaryFirstDaysGuide.map((step, idx) => {
            const isSelected = idx === activeStepIndex;
            return (
              <button
                key={step.stepNumber}
                onClick={() => setActiveStepIndex(idx)}
                className={`p-3 rounded-2xl text-left transition-all flex flex-col justify-between border ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-400 shadow-lg shadow-sky-950/50'
                    : 'bg-slate-900/60 hover:bg-slate-900 text-slate-300 border-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`w-6 h-6 rounded-full text-xs font-mono font-bold flex items-center justify-center ${
                    isSelected ? 'bg-white text-sky-700' : 'bg-slate-800 text-sky-400'
                  }`}>
                    {step.stepNumber}
                  </span>
                  <span className={`text-[9px] font-mono px-1.5 py-0.2 rounded ${
                    isSelected ? 'bg-sky-700 text-sky-100' : 'bg-slate-800 text-slate-400'
                  }`}>
                    Step {step.stepNumber}
                  </span>
                </div>
                <h4 className={`text-xs font-bold line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {isRtl ? step.arabicCategory : step.category}
                </h4>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Step Master Detail Card */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
        {/* Step Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-bold uppercase">
                {activeStep.priorityLabel}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {isRtl ? `الخطوة ${activeStep.stepNumber} من 5` : `Step ${activeStep.stepNumber} of 5`}
              </span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-white">
              {isRtl ? activeStep.arabicTitle : activeStep.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
              {isRtl ? activeStep.arabicWhyFirst : activeStep.whyFirst}
            </p>
          </div>

          <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-center shrink-0">
            <span className="text-[10px] font-mono text-slate-400 block uppercase">
              {isRtl ? 'الرسوم الحكومية' : 'Government Fee'}
            </span>
            <strong className="text-emerald-400 font-mono text-lg font-bold">
              {activeStep.costCAD === 0 ? (isRtl ? 'مجاناً 0$' : '$0 FREE') : formatCurrency(activeStep.costCAD)}
            </strong>
          </div>
        </div>

        {/* 2-Column Grid: Location Details + Document Checklist */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: WHERE TO GO (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-bold uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>{isRtl ? 'الموقع والعنوان الدقيق' : 'Exact Calgary Location to Visit'}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold text-white">
                  {isRtl ? activeStep.whereToGo.arabicPrimaryName : activeStep.whereToGo.primaryName}
                </h4>
                <p className="text-xs text-slate-300 mt-1 flex items-start gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" />
                  <span>{activeStep.whereToGo.address}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-800 text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">
                    {isRtl ? 'المواصلات العامة:' : 'Public Transit:'}
                  </span>
                  <span className="text-slate-200 text-[11px]">{activeStep.whereToGo.nearestTransit}</span>
                </div>
                <div>
                  <span className="text-[11px] text-slate-400 block mb-0.5">
                    {isRtl ? 'أوقات العمل:' : 'Hours of Operation:'}
                  </span>
                  <span className="text-slate-200 text-[11px]">{activeStep.whereToGo.openingHours}</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={activeStep.whereToGo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-md transition-all group"
                >
                  <NavIcon className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'فتح الموقع في خرائط Google والتوجيه' : 'Open in Google Maps & Get Directions'}</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Alternative Branch Locations */}
            {activeStep.whereToGo.alternativeLocations.length > 0 && (
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2.5">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                  {isRtl ? 'فروع حكومية بديلة في كالغاري:' : 'Alternative Locations Across Calgary:'}
                </span>
                <div className="space-y-2 text-xs">
                  {activeStep.whereToGo.alternativeLocations.map((alt, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
                      <div>
                        <strong className="text-white block text-xs">{alt.name}</strong>
                        <span className="text-slate-400 text-[11px]">{alt.address}</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-sky-300">
                        {alt.quadrant}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: REQUIRED DOCUMENTS CHECKLIST (6 cols) */}
          <div className="lg:col-span-6 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <FileText className="w-4 h-4" />
                  <span>{isRtl ? 'الوثائق الإلزامية المطلوبة' : 'Mandatory Documents to Bring'}</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  {isRtl ? 'حدد ما تم تجهيزه' : 'Interactive Checklist'}
                </span>
              </div>

              <div className="space-y-2.5">
                {activeStep.requiredDocuments.map((doc, docIdx) => {
                  const docKey = `step_${activeStep.stepNumber}_doc_${docIdx}`;
                  const isChecked = !!checkedDocs[docKey];
                  return (
                    <div
                      key={docIdx}
                      onClick={() => toggleDoc(docKey)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? 'bg-emerald-950/40 border-emerald-700/60 text-slate-200'
                          : 'bg-slate-950/60 hover:bg-slate-900 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked
                          ? 'bg-emerald-500 border-emerald-400 text-white'
                          : 'border-slate-700 bg-slate-900 text-transparent'
                      }`}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs">
                        <strong className={`block ${isChecked ? 'line-through text-slate-400' : 'text-white'}`}>
                          {isRtl ? doc.arabicName : doc.name}
                        </strong>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">{doc.notes}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Immediate Outcome Box */}
              <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-800/60 text-xs text-emerald-200 space-y-1">
                <strong className="block text-emerald-300 font-mono text-[11px] uppercase tracking-wider">
                  {isRtl ? 'ما ستستلمه فوراً في نفس اليوم:' : 'What You Walk Out With Same-Day:'}
                </strong>
                <p className="leading-relaxed">
                  {isRtl ? activeStep.arabicImmediateOutput : activeStep.immediateOutput}
                </p>
              </div>
            </div>

            {/* Pro-Tips */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
              <span className="text-[11px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                {isRtl ? 'نصائح مهمة للقادمين الجدد:' : 'Newcomer Advisor Pro-Tips:'}
              </span>
              <ul className="space-y-1.5 text-slate-300 text-[11px]">
                {(isRtl ? activeStep.arabicProTips : activeStep.proTips).map((tip, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2">
                    <span className="text-sky-400 font-bold">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
