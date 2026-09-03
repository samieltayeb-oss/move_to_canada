'use client';

import React from 'react';
import { MovePlanChecklist } from '@/components/MovePlanChecklist';
import { PrintableMoveDossier } from '@/components/PrintableMoveDossier';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { FileText, Printer } from 'lucide-react';

export default function PlanPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>Interactive Action Plan</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isRtl ? 'خطة الانتقال التنفيذية وقائمة المهام' : 'My Move Plan & Action Timeline'}
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
            {isRtl 
              ? 'متابعة مراحل الانتقال خطوة بخطوة مع حفظ تقدمك محلياً في المتصفح، وإمكانية طباعة الملف التنفيذي كاملاً'
              : 'Interactive settlement checklist with browser local persistence and printable executive move dossier export.'}
          </p>
        </div>

        <button
          onClick={() => window.print()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-medium shadow-md self-start"
        >
          <Printer className="w-4 h-4" />
          <span>{isRtl ? 'طباعة الملف التنفيذي (PDF)' : 'Print Move Dossier (PDF)'}</span>
        </button>
      </div>

      <MovePlanChecklist />
      <PrintableMoveDossier />
      <SourceModal />
    </div>
  );
}
