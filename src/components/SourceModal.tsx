'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import { ExternalLink, ShieldCheck, X, Clock, Calendar, CheckCircle } from 'lucide-react';

export function SourceModal() {
  const { activeSourceModal, closeSourceModal, t, isRtl } = useApp();

  if (!activeSourceModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl overflow-hidden glass-panel border border-sky-500/40 rounded-2xl shadow-2xl bg-slate-950/95"
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono tracking-wider px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                {activeSourceModal.tier} • {activeSourceModal.id}
              </span>
              <h3 className="text-lg font-semibold text-slate-100 mt-1">
                {activeSourceModal.name}
              </h3>
            </div>
          </div>
          <button
            onClick={closeSourceModal}
            className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-5 text-sm text-slate-300">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>{t.common.lastVerified}</span>
              </div>
              <p className="font-semibold text-slate-200">{activeSourceModal.lastVerifiedAt}</p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Data Period / Cadence</span>
              </div>
              <p className="font-semibold text-slate-200">{activeSourceModal.dataPeriod}</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80">
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 mb-1.5">
              <CheckCircle className="w-4 h-4" />
              <span>Verification Integrity & Scope</span>
            </div>
            <p className="text-slate-300 leading-relaxed">{activeSourceModal.notes}</p>
          </div>

          <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800/60">
            <span>Refresh Cadence: <strong className="text-slate-300">{activeSourceModal.refreshCadence}</strong></span>
            <span>Confidence Index: <strong className="text-emerald-400">{activeSourceModal.confidence}%</strong></span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-5 border-t border-slate-800 bg-slate-900/40">
          <a
            href={activeSourceModal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-medium text-sm transition-all shadow-lg shadow-sky-900/30"
          >
            <span>{t.common.openSource}</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <button
            onClick={closeSourceModal}
            className="px-4 py-2 rounded-xl text-slate-400 hover:text-slate-200 hover:bg-slate-800 text-sm font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
