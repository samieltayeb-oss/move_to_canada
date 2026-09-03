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
  CheckCircle2,
  Sparkles,
  ShieldCheck
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
              <span>EDUCATION &amp; ADOLESCENCE INTELLIGENCE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.schools.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.schools.subtitle}
            </p>
          </div>
        </div>

        {/* PRIMARY PATHWAY BANNER: PUBLIC SCHOOLS (CBE) $0 TUITION */}
        <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-950/60 via-slate-900/80 to-sky-950/40 border border-sky-500/40 mb-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/40">
                  {isRtl ? 'المسار الأساسي المعتمد' : 'Primary Default Pathway'}
                </span>
                <span className="text-xs text-emerald-400 font-mono font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>$0 Tuition (Publicly Funded K-12)</span>
                </span>
              </div>
              <h3 className="text-xl font-extrabold text-white tracking-tight">
                {isRtl 
                  ? 'المدارس الحكومية العامة (CBE) — الخيار الأساسي لتعليم الأبناء'
                  : 'Calgary Public Schools (CBE) — Primary Educational Pathway'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed max-w-3xl font-light">
                {isRtl 
                  ? 'بموجب قانون التعليم في ألبرتا، يحق لجميع أطفال القادمين الجدد (الإقامة الدائمة أو تصاريح العمل) التعليم المجاني بنسبة 100% في مدارس كالغاري الحكومية (CBE). يحصل الأبناء على تقييم مجاني للغة الإنجليزية (ELL)، مع إمكانية التحاقهم ببرامج تحفيظ القرآن والتربية الإسلامية في عطلة نهاية الأسبوع كخيار بديل موفر ومرن.'
                  : 'Under Alberta Education, all newcomer children (PR or Work Permit) receive 100% tuition-free public education through the Calgary Board of Education (CBE). Islamic schools (CIS/Al-Amal) remain an optional alternative for families wanting specialized day school curriculum.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-2 shrink-0">
              <a
                href="https://www.cbe.ab.ca/registration/registration/Pages/new-to-canada.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-lg shadow-sky-950/40 transition-all"
              >
                <span>CBE Welcome Centre Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <div className="text-[11px] font-mono text-slate-400 text-center lg:text-left px-1">
                Kingsland Reception: 1221 – 8 St SW
              </div>
            </div>
          </div>
        </div>

        {/* COMPARISON MATRIX: PUBLIC CBE VS OPTIONAL ISLAMIC */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-xs">
          <div className="glass-panel p-5 rounded-2xl border border-sky-500/30 bg-slate-900/60">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <h4 className="font-bold text-white text-sm">
                  {isRtl ? 'المدارس الحكومية العامة (CBE)' : 'Public Schools (CBE) — Primary'}
                </h4>
              </div>
              <span className="font-mono text-emerald-400 font-bold text-xs">$0 CAD / Year</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong>Tuition:</strong> Completely free for Alberta residents; small incidental supplies fee (~$90/yr).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong>Placement:</strong> Guaranteed community school assignment based on residential home address.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong>ELL English Support:</strong> Comprehensive intake and language development built into the daily curriculum.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong>Islamic Integration:</strong> Balanced with weekend Islamic schooling (Madrasah / Tahfeez at Akram Jomaa).</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-amber-500/30 bg-slate-900/60">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                <h4 className="font-bold text-white text-sm">
                  {isRtl ? 'المدارس الإسلامية (CIS / الأمل) — خيار إضافي' : 'Islamic Schools (CIS) — Optional Alternative'}
                </h4>
              </div>
              <span className="font-mono text-amber-300 font-bold text-xs">~$2,450 CAD / Child</span>
            </div>
            <ul className="space-y-2 text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Society Enhancement Fee:</strong> ~$2,450/year per child (subsidized public alternative model).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Curriculum:</strong> Full Alberta Program of Studies + daily Arabic language and Islamic Studies.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Environment:</strong> Daily congregational prayers (Dhuhr/Asr), halal cafeteria, Quranic focus.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Waiting Lists:</strong> Competitive admissions; requires early spring application or waitlist queue.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Child Progression Cards (3 Children Under 15) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="w-4 h-4 text-sky-400" />
              <span>{t.schools.childAgesTitle}</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Yassir Household Profile</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {familyProfile.childrenAges.map((age, idx) => {
              const gradeInfo = calculateAlbertaGrade(age, idx + 1);
              return (
                <div
                  key={idx}
                  className="glass-panel rounded-2xl p-6 border border-slate-800/80 hover:border-sky-500/40 transition-all flex flex-col justify-between"
                >
                  <div>
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
                      <div className="p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/20">
                        <strong className="text-sky-300 block text-[10px] uppercase font-mono mb-0.5">
                          ✓ Primary Default (CBE Public):
                        </strong>
                        <span className="text-[11px] text-slate-200">{gradeInfo.schoolTypeOptions.publicCbe}</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                        <strong className="text-slate-400 block text-[10px] uppercase font-mono mb-0.5">
                          Optional Alternative (Islamic School):
                        </strong>
                        <span className="text-[11px] text-amber-300/90">{gradeInfo.schoolTypeOptions.islamicSchool}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] text-slate-500 mt-4 italic pt-3 border-t border-slate-900">
                    {gradeInfo.notes}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Accredited Islamic Schools Section (Optional Alternative) */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-emerald-400" />
                <span>{t.schools.islamicSchoolsTitle}</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {isRtl ? 'قائمة المدارس البديلة المعتمدة في حال رغبت الأسرة في منهاج إسلامي نهاري' : 'Accredited alternative schools if your family chooses an Islamic day school model'}
              </p>
            </div>
            <span className="text-xs text-slate-400 font-mono">Optional Alternative</span>
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
                        <span>Sibling Discount Rate:</span>
                        <span>{formatCurrency(school.siblingFeePerChildCAD)}/yr</span>
                      </div>
                    )}
                    {school.busingAvailable && (
                      <div className="flex justify-between text-[11px] text-amber-300 mt-1 pt-1 border-t border-slate-800">
                        <span>Charter Bus Service:</span>
                        <span>+{formatCurrency(school.busingFeePerChildCAD || 0)}/yr</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <span className="text-xs text-slate-400 font-semibold block">Curriculum Focus:</span>
                    {school.curriculumHighlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-1.5 text-xs text-slate-300">
                        <span className="text-emerald-400 text-xs">✓</span>
                        <span className="text-[11px]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-[10px] text-slate-500 font-mono truncate max-w-[130px]">{school.address}</span>
                  <a
                    href={school.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory School Document Checklist */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-sky-400" />
              <span>{t.schools.checklistTitle}</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Mandatory for CBE Intake</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {schoolDocumentChecklist.map((doc) => (
              <div
                key={doc.id}
                className="glass-panel rounded-xl p-4 border border-slate-800/80 hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                      doc.mandatory 
                        ? 'bg-rose-950 text-rose-300 border border-rose-800' 
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {doc.mandatory ? 'Mandatory Document' : 'Recommended'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{doc.timing}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white mb-1">
                    {isRtl ? doc.arabicTitle : doc.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {isRtl ? doc.arabicDescription : doc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
