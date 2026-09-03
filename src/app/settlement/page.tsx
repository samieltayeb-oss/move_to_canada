'use client';

import React from 'react';
import { MovePlanChecklist } from '@/components/MovePlanChecklist';
import { SourceModal } from '@/components/SourceModal';
import { useApp } from '@/context/AppContext';
import { CheckSquare } from 'lucide-react';

export default function SettlementPage() {
  const { isRtl } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
          <CheckSquare className="w-3.5 h-3.5 text-emerald-400" />
          <span>Statutory Settlement Sequence</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'خارطة طريق الاستقرار والتسوية النظامية' : 'Newcomer Settlement Roadmap & Action Checklist'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'الخطوات القانونية والتنظيمية من الرياض قبل السفر، إلى اليوم الأول في كالغاري (رقم التأمين SIN، فتح الحساب البنكي، بطاقة AHCIP، وتسجيل المدارس)'
            : 'Step-by-step settlement sequence: Pre-Arrival preparations in Riyadh, Days 1–3 in Calgary, First 30 Days, First 90 Days, and First Year statutory milestones.'}
        </p>
      </div>

      <MovePlanChecklist />
      <SourceModal />
    </div>
  );
}
