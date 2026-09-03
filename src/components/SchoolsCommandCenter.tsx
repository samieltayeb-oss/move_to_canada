'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { islamicSchoolsInCalgary, calculateAlbertaGrade, schoolDocumentChecklist } from '@/data/schools';
import { 
  GraduationCap, 
  BookOpen, 
  ExternalLink, 
  Users, 
  FileCheck, 
  Compass
} from 'lucide-react';

export function SchoolsCommandCenter() {
  const { t, formatCurrency, familyProfile, isRtl } = useApp();

  return (
    <section id="schools-command" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
              <span>EDUCATION & ADOLESCENCE INTELLIGENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.schools.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.schools.subtitle}
            </p>
          </div>
        </div>

        {/* Centralized Welcome Centre Notice */}
        <div className="p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/30 mb-8 text-xs sm:text-sm">
          <div className="flex items-start gap-3">
            <BookOpen className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-indigo-200">
                Centralized CBE Welcome Centre (1221 – 8 Street SW, Calgary)
              </h4>
              <p className="text-slate-300 mt-1 leading-relaxed text-xs">
                {t.schools.welcomeCentreNotice} {t.schools.lotteryNotice}
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic Child Progression Cards (3 Children Under 15) */}
        <div className="mb-12">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Users className="w-4 h-4 text-sky-400" />
            <span>{t.schools.childAgesTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {familyProfile.childrenAges.map((age, idx) => {
              const gradeInfo = calculateAlbertaGrade(age, idx + 1);
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 transition-all"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                      Child {idx + 1}
                    </span>
                    <span className="text-sm font-bold text-amber-400 font-mono">
                      Age {age}
                    </span>
                  </div>

                  <div className="mb-4">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Alberta Division:</span>
                    <span className="text-sm font-semibold text-white">
                      {gradeInfo.albertaDivision}
                    </span>
                    <span className="text-xs font-bold text-sky-400 block mt-1">
                      {gradeInfo.likelyGrade}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800/80">
                    <div>
                      <strong className="text-slate-400 block text-[10px]">Public School Pathway:</strong>
                      <span className="text-[11px]">{gradeInfo.schoolTypeOptions.publicCbe}</span>
                    </div>
                    <div>
                      <strong className="text-slate-400 block text-[10px]">Islamic School Pathway:</strong>
                      <span className="text-[11px] text-amber-300">{gradeInfo.schoolTypeOptions.islamicSchool}</span>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 mt-4 italic">
                    {gradeInfo.notes}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accredited Islamic Schools Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Compass className="w-4 h-4 text-emerald-400" />
              <span>{t.schools.islamicSchoolsTitle}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Approved 2026–2027 Schedule</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {islamicSchoolsInCalgary.map((school) => (
              <div
                key={school.id}
                className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                      {school.quadrant} • {school.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white mb-1">
                    {isRtl ? school.arabicName : school.name}
                  </h4>
                  <p className="text-xs text-slate-400 mb-4">{school.gradesServed}</p>

                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 mb-4 text-xs font-mono">
                    <div className="flex justify-between mb-1">
                      <span className="text-slate-400">Annual Tuition/Fee:</span>
                      <span className="text-base font-bold text-emerald-400">
                        {formatCurrency(school.annualFeePerChildCAD)}/yr
                      </span>
                    </div>
                    {school.siblingFeePerChildCAD && (
                      <div className="flex justify-between text-[11px] text-slate-400">
                        <span>Sibling Rate:</span>
                        <span>{formatCurrency(school.siblingFeePerChildCAD)}/yr</span>
                      </div>
                    )}
                    {school.busingFeePerChildCAD && (
                      <div className="flex justify-between text-[11px] text-sky-400 pt-1 border-t border-slate-800 mt-1">
                        <span>Busing Service:</span>
                        <span>~{formatCurrency(school.busingFeePerChildCAD)}/yr</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                    {school.curriculumHighlights.slice(0, 3).map((h, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-[11px]">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/40 border border-slate-800 text-[11px] text-slate-400 mb-4">
                    <strong className="text-amber-400 block mb-0.5">Admissions / Waitlist:</strong>
                    {school.waitingListStatus}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                  >
                    <span>Visit School Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mandatory School Registration Document Checklist */}
        <div>
          <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <FileCheck className="w-4 h-4 text-amber-400" />
            <span>{t.schools.checklistTitle}</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolDocumentChecklist.map((doc) => (
              <div
                key={doc.id}
                className="glass-panel rounded-xl p-4 border border-slate-800 text-xs"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    doc.mandatory ? 'bg-red-950 text-red-300 border border-red-800' : 'bg-slate-900 text-slate-400'
                  }`}>
                    {doc.mandatory ? 'Mandatory' : 'Requested / Optional'}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{doc.timing}</span>
                </div>

                <h4 className="font-semibold text-white mb-1">
                  {isRtl ? doc.arabicTitle : doc.title}
                </h4>
                <p className="text-slate-300 text-[11px] leading-relaxed">
                  {isRtl ? doc.arabicDescription : doc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
