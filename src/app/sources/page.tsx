'use client';

import React from 'react';
import { verifiedSources } from '@/data/sources';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export default function SourcesPage() {
  const { isRtl } = useApp();
  const sourcesList = Object.values(verifiedSources);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-xs font-mono text-emerald-300 mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Data Governance & Provenance</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isRtl ? 'سجل المصادر الرسمية والتحقق الحكومي' : 'Official Primary Source Registry (32 Sources)'}
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-3xl font-light">
          {isRtl 
            ? 'فهرس كامل لجميع المصادر الفيدرالية وحكومة ألبرتا وبنك كندا ومجلس التعليم وشركات الطاقة المعتمدة في النظام'
            : 'All data points link directly to primary government, municipal, and institutional authorities. Verified current for the September 2026 reference horizon.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
        {sourcesList.map(src => (
          <div key={src.id} className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-sky-950 text-sky-300 border border-sky-800">
                  {src.tier}
                </span>
                <span className="text-[10px] font-mono text-slate-500">Ref: {src.refreshCadence}</span>
              </div>

              <h4 className="text-base font-bold text-white mb-1">
                {src.sourceType}
              </h4>
              <h5 className="text-xs font-medium text-slate-300 mb-3">
                {src.name}
              </h5>

              <p className="text-slate-400 text-xs mb-4 leading-relaxed font-light">
                {src.notes}
              </p>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5 mb-3">
                <div className="flex items-center gap-2 text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>Last Verified: <strong className="text-white">{src.lastVerifiedAt}</strong></span>
                </div>
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Reliability Confidence: {src.confidence}%</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-medium"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] font-mono text-slate-500">{src.id}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
