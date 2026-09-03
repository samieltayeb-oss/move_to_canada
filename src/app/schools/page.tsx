'use client';

import React from 'react';
import { SchoolsCommandCenter } from '@/components/SchoolsCommandCenter';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { GraduationCap } from 'lucide-react';

export default function SchoolsPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-xs font-mono text-sky-300 mb-3">
          <GraduationCap className="w-3.5 h-3.5 text-sky-400" />
          <span>Alberta Education K-12</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'مركز تعليم ومدارس الأبناء' : 'Schools & Children Command Center'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'تحديد الصفوف الدراسية للأبناء الثلاثة، وإجراءات مركز استقبال القادمين الجدد (CBE Welcome Centre)، ورسوم المدرسة الإسلامية (CIS)'
            : 'Alberta grade conversion for 3 children, Calgary Board of Education (CBE) intake protocol, accredited Islamic school tuition, and required documents.'}
        </p>
      </div>

      <SchoolsCommandCenter />
      <SourceModal />
    </div>
  );
}
