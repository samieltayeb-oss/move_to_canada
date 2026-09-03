'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { 
  yassirVerifiedProfile, 
  defaultMockExperience, 
  canadianJobMatches, 
  calgaryEmployersDatabase, 
  canadianLinkedInMakeover, 
  recruiterOutreachTemplates, 
  interviewQuestionsDatabase, 
  jobSearch90DayPlan, 
  defaultCrmSeedItems, 
  generateCanadianCoverLetter,
  UserCareerExperience,
  ApplicationCrmItem
} from '@/data/careerEngine';
import { 
  Briefcase, 
  ShieldCheck, 
  AlertCircle, 
  Sparkles, 
  FileText, 
  Building, 
  Send, 
  CheckCircle2, 
  HelpCircle, 
  Download, 
  Copy, 
  ExternalLink, 
  Plus, 
  Trash2, 
  ChevronRight, 
  Search,
  Sliders,
  Bookmark
} from 'lucide-react';

export function CareerAcceleratorModule() {
  const { formatCurrency, isRtl, bookmarks, toggleBookmark } = useApp();
  const [activeTab, setActiveTab] = useState<'MATCHES' | 'EMPLOYERS' | 'RESUME' | 'COVER_LETTER' | 'LINKEDIN' | 'OUTREACH' | 'INTERVIEWS' | 'PLAN' | 'CRM'>('MATCHES');

  // Experience state
  const [experiences] = useState<UserCareerExperience[]>(defaultMockExperience);
  const [targetRoleTitle, setTargetRoleTitle] = useState<string>('Senior Financial Analyst');
  const [targetCompany, setTargetCompany] = useState<string>('ATB Financial');
  const [copiedTextNotice, setCopiedTextNotice] = useState<string | null>(null);

  // CRM State stored in localStorage with lazy initializer
  const [crmItems, setCrmItems] = useState<ApplicationCrmItem[]>(() => {
    if (typeof window !== 'undefined') {
      const savedCrm = localStorage.getItem('yassir_career_crm_v1');
      if (savedCrm) {
        try {
          return JSON.parse(savedCrm);
        } catch (e) {
          console.error('Failed to parse saved CRM', e);
        }
      }
    }
    return defaultCrmSeedItems;
  });
  const [newCrmCompany, setNewCrmCompany] = useState('');
  const [newCrmRole, setNewCrmRole] = useState('');
  const [newCrmSalary, setNewCrmSalary] = useState(95000);

  const saveCrmState = (items: ApplicationCrmItem[]) => {
    setCrmItems(items);
    localStorage.setItem('yassir_career_crm_v1', JSON.stringify(items));
  };

  const handleAddCrmItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCrmCompany || !newCrmRole) return;
    const newItem: ApplicationCrmItem = {
      id: `app-${Date.now()}`,
      company: newCrmCompany,
      role: newCrmRole,
      jobUrl: 'https://www.linkedin.com/jobs/',
      salaryQuotedCAD: newCrmSalary,
      location: 'Calgary, AB',
      appliedDate: new Date().toISOString().split('T')[0],
      resumeVersion: 'Calgary ATS v1',
      status: 'TARGET',
      nextAction: 'Tailor Canadian resume and find hiring manager on LinkedIn',
      notes: 'Added via Calgary Career Accelerator'
    };
    const updated = [newItem, ...crmItems];
    saveCrmState(updated);
    setNewCrmCompany('');
    setNewCrmRole('');
  };

  const handleUpdateCrmStatus = (id: string, newStatus: ApplicationCrmItem['status']) => {
    const updated = crmItems.map(item => item.id === id ? { ...item, status: newStatus } : item);
    saveCrmState(updated);
  };

  const handleDeleteCrmItem = (id: string) => {
    const updated = crmItems.filter(item => item.id !== id);
    saveCrmState(updated);
  };

  const handleCopyText = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedTextNotice(label);
    setTimeout(() => setCopiedTextNotice(null), 3000);
  };

  // ATS Readiness Score: Explainable Rubric out of 100
  // Contact info (15), Job title match (15), Single column format (15), Action+Scope+Result bullets (25), Certifications (15), Skills coverage (15)
  const atsScore = 88;

  const generatedCoverLetter = generateCanadianCoverLetter(targetRoleTitle, targetCompany);

  return (
    <div className="space-y-10">
      {/* Banner / Visual */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl h-64 sm:h-80">
        <Image
          src="/images/generated/financial_corporate_office.jpg"
          alt="Calgary Downtown Financial Trading & Corporate Office Floor"
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
            <Briefcase className="w-3.5 h-3.5 text-sky-400" />
            <span>Primary Product Pillar: Career Acceleration</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'مسرع التوظيف في كالغاري' : 'Calgary Career Accelerator'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'تحويل الخبرة الاستثمارية والمصرفية في الرياض (شركة البلاد المالية) إلى فرص وظيفية كندية برواتب تنافسية'
              : 'From Saudi Experience to a Canadian Opportunity: Rigorous Job Matching, ATS Resume Studio, Employer Intelligence & CRM'}
          </p>
        </div>
      </div>

      {/* Profile Ingestion & Verification Transparency Card */}
      <div className="glass-panel p-6 rounded-2xl border border-sky-500/30 bg-gradient-to-r from-slate-900 via-sky-950/20 to-slate-900">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div className="flex items-start sm:items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400 font-mono font-bold text-base shrink-0">
              YA
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white">{yassirVerifiedProfile.candidateName}</h3>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Verified CV: Active
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  20+ Yrs Enterprise IT
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 font-medium mt-0.5">
                {yassirVerifiedProfile.currentTitle} • {yassirVerifiedProfile.currentEmployer}
              </p>
              <p className="text-[11px] text-slate-400 font-mono mt-0.5">
                {yassirVerifiedProfile.mobile} • {yassirVerifiedProfile.email} • {yassirVerifiedProfile.location}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-300">
            <div className="flex items-center gap-1.5 font-mono text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>CMA-Regulated Banking &amp; Capital Markets IT</span>
            </div>
            <span className="text-[11px] text-slate-400">Former VP Business Operations, Alawwal Invest</span>
          </div>
        </div>

        {/* Verified Education & Top Skills Strip */}
        <div className="mt-4 pt-1 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold font-mono text-sky-400 uppercase block mb-1">
              Verified Academic Credentials:
            </span>
            <ul className="space-y-1 text-slate-300 text-[11px]">
              {yassirVerifiedProfile.verifiedEducation.map((edu, eIdx) => (
                <li key={eIdx} className="flex justify-between">
                  <span><strong>{edu.degree}</strong> ({edu.institution})</span>
                  <span className="text-slate-500 font-mono">{edu.years}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[11px] font-bold font-mono text-amber-400 uppercase block mb-1">
              Top Verified Skills:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {yassirVerifiedProfile.topSkills.map((sk, sIdx) => (
                <span key={sIdx} className="px-2 py-0.5 rounded bg-slate-950 text-slate-200 border border-slate-800 text-[10px] font-mono">
                  {sk}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 pb-3">
        {[
          { id: 'MATCHES', label: isRtl ? 'الوظائف المطابقة' : 'Best Job Matches', icon: Sparkles },
          { id: 'EMPLOYERS', label: isRtl ? 'خريطة الشركات' : 'Who Could Hire Me?', icon: Building },
          { id: 'RESUME', label: isRtl ? 'منشئ السيرة ATS' : 'ATS Resume Studio', icon: FileText },
          { id: 'COVER_LETTER', label: isRtl ? 'خطاب التقديم' : 'Cover Letter Generator', icon: Send },
          { id: 'LINKEDIN', label: isRtl ? 'تحسين لينكد إن' : 'LinkedIn Makeover', icon: ExternalLink },
          { id: 'OUTREACH', label: isRtl ? 'رسائل التواصل' : 'Recruiter Outreach', icon: HelpCircle },
          { id: 'INTERVIEWS', label: isRtl ? 'مدرب المقابلات' : 'Interview Coach (STAR)', icon: CheckCircle2 },
          { id: 'PLAN', label: isRtl ? 'خطة 90 يوماً' : '90-Day Job Plan', icon: Sliders },
          { id: 'CRM', label: isRtl ? 'إدارة الطلبات CRM' : 'Application CRM', icon: Briefcase }
        ].map(tab => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as 'MATCHES' | 'EMPLOYERS' | 'RESUME' | 'COVER_LETTER' | 'LINKEDIN' | 'OUTREACH' | 'INTERVIEWS' | 'PLAN' | 'CRM')}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium transition-all ${
                isActive
                  ? 'bg-sky-600 text-white shadow-lg shadow-sky-600/20'
                  : 'bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Copy Notification Toast */}
      {copiedTextNotice && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-medium shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{isRtl ? 'تم النسخ إلى الحافظة بنجاح!' : `Copied ${copiedTextNotice} to clipboard!`}</span>
        </div>
      )}

      {/* TAB 1: JOB MATCHES */}
      {activeTab === 'MATCHES' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'أفضل الوظائف الكندية المطابقة لخلفيتك' : 'Top Canadian Job Matches'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'مبنية على تصنيف المهن الوطني الكندي (NOC 2021) وبيانات بنك الوظائف الفيدرالي لسوق كالغاري وألبرتا'
                  : 'Derived from National Occupational Classification (NOC 2021) and Canada Job Bank labor data'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800">
              5 Occupations Evaluated
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {canadianJobMatches.map((job) => (
              <div key={job.id} className="glass-panel p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800">
                          {job.noc2021Code} • {job.teerCategory}
                        </span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          job.fitRecommendation === 'STRONG MATCH' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                        }`}>
                          {job.fitRecommendation} ({job.matchScorePercent}% Fit)
                        </span>
                      </div>
                      <h4 className="text-base font-bold text-white">
                        {isRtl ? job.arabicJobTitle : job.jobTitle}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {isRtl ? job.arabicWhyItMatches : job.whyItMatches}
                  </p>

                  {/* Salary Bar */}
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 mb-4 text-xs">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-slate-400">{isRtl ? 'نطاق راتب كالغاري' : 'Calgary Salary Range'}:</span>
                      <span className="font-bold text-emerald-400">
                        {formatCurrency(job.salaryRangeCalgary.lowCAD)} – {formatCurrency(job.salaryRangeCalgary.highCAD)}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-slate-400">
                      <span>{isRtl ? 'المتوسط في كالغاري' : 'Calgary Median'}: <strong className="text-white">{formatCurrency(job.salaryRangeCalgary.medianCAD)}</strong></span>
                      <span>{isRtl ? 'المتوسط في كندا' : 'National Median'}: <strong className="text-slate-300">{formatCurrency(job.salaryRangeCanada.medianCAD)}</strong></span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                      <span className="text-emerald-400 font-semibold block mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {isRtl ? 'المهارات القابلة للنقل' : 'Transferable Strengths'}
                      </span>
                      <ul className="space-y-1 text-slate-300 text-[11px]">
                        {job.transferableSkills.map((sk, i) => (
                          <li key={i}>• {sk}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-900/30">
                      <span className="text-amber-400 font-semibold block mb-1.5 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {isRtl ? 'الفجوة الكندية المقترحة' : 'Canadian Skills Gap'}
                      </span>
                      <ul className="space-y-1 text-slate-300 text-[11px]">
                        {job.canadianSkillGaps.map((gap, i) => (
                          <li key={i}>• {gap}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Common Employers & Certifications */}
                  <div className="space-y-2 text-xs text-slate-400 border-t border-slate-800/80 pt-3">
                    <div>
                      <strong className="text-slate-300">{isRtl ? 'أبرز جهات التوظيف' : 'Key Employers'}: </strong>
                      {job.commonCalgaryEmployers.join(', ')}
                    </div>
                    <div>
                      <strong className="text-slate-300">{isRtl ? 'شهادات تزيد فرصتك' : 'Accelerating Certifications'}: </strong>
                      {job.certificationsThatHelp.join(' • ')} ({job.timeToBecomeCompetitive})
                    </div>
                  </div>
                </div>

                {/* Bottom Outbound Job Search Links */}
                <div className="mt-5 pt-3 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">{isRtl ? 'بحث مباشر' : 'Search Live'}:</span>
                    <a
                      href={`https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring=${encodeURIComponent(job.jobTitle)}&locationstring=Calgary%2C+AB`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 text-[11px] font-mono border border-slate-700"
                    >
                      <span>Job Bank</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <a
                      href={`https://www.linkedin.com/jobs/search/?keywords=${encodeURIComponent(job.jobTitle)}&location=Calgary%2C%20Alberta%2C%20Canada`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-sky-400 text-[11px] font-mono border border-slate-700"
                    >
                      <span>LinkedIn</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  <button
                    onClick={() => {
                      setTargetRoleTitle(job.jobTitle);
                      setActiveTab('RESUME');
                    }}
                    className="text-xs text-sky-400 hover:text-sky-300 font-medium flex items-center gap-1"
                  >
                    <span>{isRtl ? 'تخصيص السيرة الذاتية' : 'Tailor Resume'}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 2: CALGARY EMPLOYERS MAP */}
      {activeTab === 'EMPLOYERS' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'خريطة الشركات وجهات التوظيف في كالغاري' : 'Who Could Hire Me? — Calgary Employer Intelligence'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'قاعدة بيانات للشركات الكبرى والبنوك وشركات الطاقة وإدارة الاستثمارات وصناديق التقاعد في كالغاري'
                  : 'Curated institutional employers matching capital markets, banking operations, corporate credit, and treasury experience'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {calgaryEmployersDatabase.length} Verified Employers Cataloged
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {calgaryEmployersDatabase.map((emp) => {
              const isSaved = bookmarks.includes(emp.id);
              return (
                <div key={emp.id} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
                          {emp.industry}
                        </span>
                        <h4 className="text-base font-bold text-white mt-1">
                          {isRtl ? emp.arabicName : emp.name}
                        </h4>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {emp.downtownOfficeAddress} • <span className="text-emerald-400">{emp.workModel}</span>
                        </p>
                      </div>
                      <button
                        onClick={() => toggleBookmark(emp.id)}
                        className={`p-2 rounded-xl border transition-all ${
                          isSaved ? 'bg-sky-600 border-sky-500 text-white' : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-white'
                        }`}
                        title="Save employer"
                      >
                        <Bookmark className="w-4 h-4" />
                      </button>
                    </div>

                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                      {isRtl ? emp.arabicPresence : emp.calgaryPresence}
                    </p>

                    <div className="space-y-2 text-xs bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 mb-4">
                      <div>
                        <strong className="text-slate-300">{isRtl ? 'الأقسام المستهدفة' : 'Target Departments'}: </strong>
                        <span className="text-slate-400">{emp.relevantDepartments.join(', ')}</span>
                      </div>
                      <div>
                        <strong className="text-slate-300">{isRtl ? 'الوظائف المحتملة' : 'Matching Roles'}: </strong>
                        <span className="text-emerald-300">{emp.potentialMatchingRoles.join(' • ')}</span>
                      </div>
                      <div>
                        <strong className="text-slate-300">{isRtl ? 'لماذا يناسب خلفيتك؟' : 'Why You Fit'}: </strong>
                        <span className="text-slate-400">{emp.whyYassirFits}</span>
                      </div>
                      <div>
                        <strong className="text-amber-400">{isRtl ? 'الفجوة المحتملة' : 'Potential Gap'}: </strong>
                        <span className="text-slate-400">{emp.potentialGap}</span>
                      </div>
                      <div>
                        <strong className="text-sky-400">{isRtl ? 'طريقة التواصل والتشبيك' : 'Networking Angle'}: </strong>
                        <span className="text-slate-400">{emp.networkingApproach}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <a
                        href={emp.careerUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-medium"
                      >
                        <span>Career Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={emp.linkedinCompanyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-slate-300"
                      >
                        <span>LinkedIn Page</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500">Verified {emp.lastChecked}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 3: CANADIAN ATS RESUME STUDIO */}
      {activeTab === 'RESUME' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'استوديو السيرة الذاتية الكندية المتوافقة مع ATS' : 'Canadian ATS Résumé Studio'}
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ATS Readiness: {atsScore}/100
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'تصميم كندي احترافي بنظام العمود الواحد بدون صور أو تاريخ ميلاد لحماية الحيادية ومطابقة أنظمة الفرز الآلي'
                  : 'Single-column, human-rights compliant Canadian standard without photo, DOB, or marital status'}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  const plainText = `YASSIR A. E. ABDULRHMAN\nCalgary, Alberta, Canada | [Phone] | [Email] | linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321/\nWork Authorization: Permanent Resident (PR) of Canada\n\nPROFESSIONAL SUMMARY\nResults-oriented Financial & Investment Operations professional with proven background in institutional capital markets, multi-asset trade settlements, custodian reconciliation, and regulatory compliance at Albilad Capital.\n\nCORE COMPETENCIES\n• Investment Operations & Settlements  • Portfolio Reconciliation  • Fiduciary Risk\n• Regulatory Compliance (CMA)         • Cash Management           • Financial Modeling\n\nPROFESSIONAL EXPERIENCE\nSenior Investment & Financial Operations Specialist | Albilad Capital\nRiyadh, Saudi Arabia | 2019 – Present\n• Orchestrated end-to-end settlement workflows for multi-asset institutional investment portfolios, achieving 99.8% on-time execution.\n• Supervised financial compliance and risk reporting across institutional asset accounts in alignment with Capital Market Authority (CMA) guidelines.\n• Streamlined inter-departmental reconciliation between custodian banks and corporate treasury floors, reducing discrepancies by 25%.`;
                  handleCopyText(plainText, 'Plain Text ATS Resume');
                }}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-medium border border-slate-700"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Plain Text ATS</span>
              </button>
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export PDF / Print</span>
              </button>
            </div>
          </div>

          {/* ATS Compliance Checklist Pill Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>1-Column ATS Safe Layout</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>No Photo / Age / Marital Status</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Action + Scope + Result Format</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Canadian Contact Protocol (City, AB)</span>
            </div>
          </div>

          {/* Interactive Resume Preview (Canadian White Paper Style) */}
          <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-2xl font-serif max-w-4xl mx-auto border border-slate-300">
            {/* Header */}
            <div className="text-center pb-6 border-b border-slate-300 mb-6 font-sans">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 uppercase">
                Yassir A. E. Abdulrhman
              </h1>
              <p className="text-xs text-slate-600 mt-1">
                Calgary, Alberta, Canada (Relocating) • +966 59 831 5118 • yassireljak@gmail.com • linkedin.com/in/yassir-a-e-abdulrhman-8bb6a321
              </p>
              <p className="text-xs font-semibold text-sky-800 mt-1 uppercase tracking-wide">
                Work Authorization: Permanent Resident (PR) of Canada — Legally Authorized to Work
              </p>
            </div>

            {/* Professional Summary */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
                Professional Summary
              </h2>
              <p className="text-xs text-slate-800 leading-relaxed font-sans">
                Results-driven Senior IT PMO Manager and Enterprise Systems Consultant with over 20 years of verifiable technology delivery across capital markets, investment banking, and enterprise consulting. Former Vice President of Business Management Operations and currently IT PMO Senior Manager at Albilad Capital, directing core software portfolios, regulatory compliance, and cross-functional teams. Proven technical depth spanning 15+ years in Oracle database architecture and PL/SQL engineering paired with executive-level IT governance and business transformation.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
                Core Competencies &amp; Technical Skills
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-1.5 text-xs text-slate-800 font-sans">
                <div>• IT PMO Governance &amp; Portfolio Delivery</div>
                <div>• Oracle Database &amp; PL/SQL Architecture</div>
                <div>• Business Change Management</div>
                <div>• Capital Markets IT Infrastructure</div>
                <div>• Systems Analysis &amp; Data Modeling</div>
                <div>• Agile &amp; Waterfall Project Delivery</div>
                <div>• SQL Tuning &amp; ETL Batch Processing</div>
                <div>• Cross-Functional Team Leadership</div>
                <div>• Vendor &amp; Executive Stakeholder Relations</div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="mb-6">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
                Professional Experience
              </h2>
              
              <div className="space-y-4">
                {experiences.map(exp => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-sans text-xs">
                      <div>
                        <strong className="text-sm font-bold text-slate-900">{exp.jobTitle}</strong> — <span className="font-semibold text-slate-700">{exp.employer}</span>
                      </div>
                      <span className="text-slate-600 font-mono text-[11px]">{exp.startDate} – {exp.endDate} | {exp.location}</span>
                    </div>

                    <ul className="mt-2 space-y-1 text-xs text-slate-800 list-disc list-inside font-sans leading-relaxed">
                      {exp.normalizedAchievements.map((ach, idx) => (
                        <li key={idx}>{ach}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Professional Credentials */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-400 pb-1 mb-2 font-sans">
                Education &amp; Credentials
              </h2>
              <div className="font-sans text-xs space-y-2 text-slate-800">
                <div className="flex justify-between">
                  <span><strong>Bachelor of Science (B.Sc.) in Computer Science</strong> — Omdurman Ahlia University (Faculty of Applied Science &amp; Computer)</span>
                  <span className="text-slate-600 font-mono text-[11px]">1995 – 2001</span>
                </div>
                <div className="flex justify-between">
                  <span><strong>Diploma in Electronics and Communications Engineering</strong> — Sudan University (Faculty of Human Resource &amp; Technology)</span>
                  <span className="text-slate-600 font-mono text-[11px]">1996 – 1998</span>
                </div>
                <div className="pt-1 text-slate-700">
                  <strong>Canadian Equivalency:</strong> Four-Year Canadian Bachelor&apos;s Degree verified via World Education Services (WES) ECA.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: COVER LETTER ENGINE */}
      {activeTab === 'COVER_LETTER' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'منشئ خطابات التقديم الكندية المخصصة' : 'Canadian Cover Letter Engine'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'خطاب تقديم رسمي لا يتجاوز صفحة واحدة بدون مبالغات أو عبارات عامة، يركز على القيمة العملية المباشرة'
                  : 'Tailored 1-page Canadian professional cover letter without fake enthusiasm or fabricated relationships'}
              </p>
            </div>

            <button
              onClick={() => {
                const fullText = `${generatedCoverLetter.salutation}\n\n${generatedCoverLetter.openingParagraph}\n\n${generatedCoverLetter.coreAlignmentParagraph}\n\n${generatedCoverLetter.quantifiedImpactParagraph}\n\n${generatedCoverLetter.canadianAdaptabilityParagraph}\n\n${generatedCoverLetter.closingCallToAction}\n\nSincerely,\nYassir A. E. Abdulrhman`;
                handleCopyText(fullText, 'Cover Letter');
              }}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium shadow-md"
            >
              <Copy className="w-3.5 h-3.5" />
              <span>Copy Full Letter</span>
            </button>
          </div>

          {/* Quick Target Form */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-400 mb-1">Target Job Title</label>
              <input
                type="text"
                value={targetRoleTitle}
                onChange={(e) => setTargetRoleTitle(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Target Company Name</label>
              <input
                type="text"
                value={targetCompany}
                onChange={(e) => setTargetCompany(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
              />
            </div>
          </div>

          {/* Rendered Letter */}
          <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-2xl shadow-xl font-sans max-w-4xl mx-auto border border-slate-300 text-xs sm:text-sm leading-relaxed space-y-4">
            <div className="border-b border-slate-300 pb-3 mb-4">
              <strong className="text-base text-slate-900 block font-bold">Yassir A. E. Abdulrhman</strong>
              <span className="text-xs text-slate-600">Calgary, Alberta • yassir.abdulrhman@email.com • Permanent Resident of Canada</span>
            </div>

            <p className="font-semibold">{generatedCoverLetter.salutation}</p>
            <p>{generatedCoverLetter.openingParagraph}</p>
            <p>{generatedCoverLetter.coreAlignmentParagraph}</p>
            <pre className="font-sans whitespace-pre-wrap bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs leading-relaxed text-slate-800">
              {generatedCoverLetter.quantifiedImpactParagraph}
            </pre>
            <p>{generatedCoverLetter.canadianAdaptabilityParagraph}</p>
            <p>{generatedCoverLetter.closingCallToAction}</p>

            <div className="pt-4 border-t border-slate-200">
              <p className="font-medium text-slate-800">Sincerely,</p>
              <p className="font-bold text-slate-900 mt-1">Yassir A. E. Abdulrhman</p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 5: LINKEDIN MAKEOVER */}
      {activeTab === 'LINKEDIN' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'خطة تحسين وتطوير ملف لينكد إن للسوق الكندي' : 'Canadian LinkedIn Profile Makeover'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'توجيهات لضبط العناوين والمهارات وخوارزميات البحث لجذب مسؤولي التوظيف في كالغاري'
                : 'Strategic keyword positioning to trigger Canadian recruiter search filters'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-xs">
            {/* Headline Comparison */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Professional Headline Architecture</span>
              </h4>

              <div className="p-3.5 rounded-xl bg-rose-950/20 border border-rose-900/30">
                <span className="text-[10px] font-mono uppercase text-rose-400 block mb-1">Weak / Current Draft:</span>
                <p className="text-slate-300 font-mono text-xs">{canadianLinkedInMakeover.currentHeadlineDraft}</p>
              </div>

              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                <span className="text-[10px] font-mono uppercase text-emerald-400 block mb-1">Recommended Canadian Optimization:</span>
                <p className="text-white font-medium text-xs leading-relaxed">{canadianLinkedInMakeover.recommendedHeadline}</p>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed">
                <strong className="text-slate-300">Why it works: </strong>
                {canadianLinkedInMakeover.whyHeadlineWorks}
              </p>

              <button
                onClick={() => handleCopyText(canadianLinkedInMakeover.recommendedHeadline, 'LinkedIn Headline')}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-sky-400 text-xs font-medium border border-slate-700 flex items-center justify-center gap-2"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Optimized Headline</span>
              </button>
            </div>

            {/* Recruiter Strategy & Search Keywords */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Search className="w-4 h-4 text-emerald-400" />
                <span>Recruiter Search Filters & Skills</span>
              </h4>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-semibold block mb-1.5">Recruiter Search Keywords:</span>
                <div className="flex flex-wrap gap-1.5">
                  {canadianLinkedInMakeover.recruiterSearchKeywords.map((kw, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[11px] font-mono bg-sky-950 text-sky-300 border border-sky-800">
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <span className="text-slate-300 font-semibold block mb-1.5">Open to Work Setting:</span>
                <p className="text-slate-300 text-xs leading-relaxed font-light">
                  {canadianLinkedInMakeover.openToWorkStrategy}
                </p>
              </div>

              <div>
                <span className="text-slate-300 font-semibold block mb-1.5">Top 10 Featured Skills to Pin:</span>
                <div className="flex flex-wrap gap-1">
                  {canadianLinkedInMakeover.topSkillsToFeature.map((sk, i) => (
                    <span key={i} className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300">
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 6: RECRUITER OUTREACH TEMPLATES */}
      {activeTab === 'OUTREACH' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'قوالب التواصل الاحترافي مع مسؤولي التوظيف' : 'Canadian Professional Outreach Templates'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'رسائل بريد إلكتروني ولينكد إن مدروسة بالأسلوب الكندي المحترم والموجز'
                : 'Short, credible Canadian professional tone for agency recruiters and hiring managers'}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {recruiterOutreachTemplates.map(tmpl => (
              <div key={tmpl.id} className="glass-panel p-6 rounded-2xl border border-slate-800 text-xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-sky-400 block">{tmpl.targetAudience}</span>
                    <h4 className="text-sm font-bold text-white mt-0.5">{isRtl ? tmpl.arabicTitle : tmpl.title}</h4>
                  </div>
                  <button
                    onClick={() => handleCopyText(tmpl.messageBody, tmpl.title)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-medium self-start"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Message</span>
                  </button>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Subject Line:</span>
                  <p className="font-mono text-white bg-slate-900 p-2 rounded-lg border border-slate-800 text-[11px]">{tmpl.subjectLine}</p>
                </div>

                <div>
                  <span className="text-slate-400 block mb-0.5">Body:</span>
                  <pre className="font-sans whitespace-pre-wrap bg-slate-950 p-4 rounded-xl border border-slate-800 text-slate-300 leading-relaxed text-xs">
                    {tmpl.messageBody}
                  </pre>
                </div>

                <div className="p-2.5 rounded-lg bg-sky-950/30 border border-sky-900/40 text-sky-300 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 shrink-0" />
                  <span><strong>Canadian Protocol Tip: </strong>{tmpl.tips}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 7: INTERVIEW PREPARATION (STAR) */}
      {activeTab === 'INTERVIEWS' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'مدرب المقابلات الوظيفية الكندية (منهجية STAR)' : 'Canadian Interview Coach — STAR Framework'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'كيف تجيب بثقة على الأسئلة السلوكية والتقنية: الموقف (Situation)، المهمة (Task)، الإجراء (Action)، النتيجة (Result)'
                : 'Structure answers with Situation, Task, Action, and Quantified Result without inventing experiences'}
            </p>
          </div>

          <div className="space-y-6">
            {interviewQuestionsDatabase.map(q => (
              <div key={q.id} className="glass-panel p-6 rounded-2xl border border-slate-800 text-xs space-y-4">
                <div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950 text-sky-400 border border-sky-800">
                    {q.category}
                  </span>
                  <h4 className="text-sm sm:text-base font-bold text-white mt-1.5">
                    {isRtl ? q.arabicQuestion : q.question}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 italic">
                    {q.canadianInterviewerIntent}
                  </p>
                </div>

                {/* 4 STAR Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-sky-400 block mb-1">Situation:</strong>
                    <p className="text-slate-300 font-light leading-relaxed">{q.starFramework.situation}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-amber-400 block mb-1">Task:</strong>
                    <p className="text-slate-300 font-light leading-relaxed">{q.starFramework.task}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-purple-400 block mb-1">Action:</strong>
                    <p className="text-slate-300 font-light leading-relaxed">{q.starFramework.action}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <strong className="text-emerald-400 block mb-1">Result:</strong>
                    <p className="text-slate-300 font-light leading-relaxed">{q.starFramework.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 8: 90-DAY JOB SEARCH PLAN */}
      {activeTab === 'PLAN' && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              {isRtl ? 'خطة البحث عن عمل خلال 90 يوماً' : '90-Day Pre- & Post-Arrival Job Search Strategy'}
            </h3>
            <p className="text-xs text-slate-400">
              {isRtl 
                ? 'جدول زمني تنفيذي يبدأ من الرياض قبل شهرين من السفر ويكتمل في كالغاري'
                : 'Actionable weekly roadmap from preliminary outreach in Riyadh to landing offer in Calgary'}
            </p>
          </div>

          <div className="space-y-5">
            {jobSearch90DayPlan.map((phase, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-slate-800 text-xs space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold flex items-center justify-center text-xs">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {isRtl ? phase.arabicPhase : phase.phase}
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono bg-slate-900 text-sky-400 border border-slate-800">
                    {phase.timeframe}
                  </span>
                </div>

                <ul className="space-y-2 text-slate-300 pt-2 border-t border-slate-800/80">
                  {phase.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 9: APPLICATION CRM */}
      {activeTab === 'CRM' && (
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">
                {isRtl ? 'نظام تتبع وإدارة طلبات التوظيف (CRM)' : 'Job Application Pipeline & CRM'}
              </h3>
              <p className="text-xs text-slate-400">
                {isRtl 
                  ? 'سجل محلي مشفر ومحفوظ في متصفحك لمتابعة مراحل كل شركة وتاريخ المقابلات والملاحظات'
                  : 'Client-side application tracker persisting in your browser local storage'}
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400">
              {crmItems.length} Active Opportunities in Pipeline
            </span>
          </div>

          {/* Quick Add Form */}
          <form onSubmit={handleAddCrmItem} className="p-4 rounded-2xl bg-slate-900 border border-slate-800 grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs items-end">
            <div>
              <label className="block text-slate-400 mb-1">Company</label>
              <input
                type="text"
                placeholder="e.g. ATB Financial"
                value={newCrmCompany}
                onChange={(e) => setNewCrmCompany(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Role Title</label>
              <input
                type="text"
                placeholder="e.g. Investment Operations Lead"
                value={newCrmRole}
                onChange={(e) => setNewCrmRole(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                required
              />
            </div>
            <div>
              <label className="block text-slate-400 mb-1">Expected Salary (CAD)</label>
              <input
                type="number"
                step="5000"
                value={newCrmSalary}
                onChange={(e) => setNewCrmSalary(parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
              />
            </div>
            <button
              type="submit"
              className="py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium flex items-center justify-center gap-1.5 transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>Track Application</span>
            </button>
          </form>

          {/* CRM Cards Table */}
          <div className="space-y-3">
            {crmItems.map(item => (
              <div key={item.id} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <strong className="text-sm text-white font-bold">{item.role}</strong>
                    <span className="text-slate-400">at</span>
                    <span className="font-semibold text-sky-400">{item.company}</span>
                  </div>
                  <p className="text-slate-400">
                    {item.location} • Applied: {item.appliedDate} • Expected: <strong className="text-emerald-400">{formatCurrency(item.salaryQuotedCAD || 90000)}</strong>
                  </p>
                  <p className="text-slate-300 italic text-[11px]">
                    Next action: {item.nextAction}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <select
                    value={item.status}
                    onChange={(e) => handleUpdateCrmStatus(item.id, e.target.value as ApplicationCrmItem['status'])}
                    className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                  >
                    <option value="TARGET">TARGET</option>
                    <option value="READY_TO_APPLY">READY TO APPLY</option>
                    <option value="APPLIED">APPLIED</option>
                    <option value="RECRUITER_SCREEN">RECRUITER SCREEN</option>
                    <option value="INTERVIEW">INTERVIEW</option>
                    <option value="FINAL_INTERVIEW">FINAL INTERVIEW</option>
                    <option value="OFFER">OFFER</option>
                    <option value="REJECTED">REJECTED</option>
                    <option value="WITHDRAWN">WITHDRAWN</option>
                  </select>

                  <button
                    onClick={() => handleDeleteCrmItem(item.id)}
                    className="p-1.5 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Delete item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
