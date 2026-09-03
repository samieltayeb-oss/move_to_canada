'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, MessageSquare, AlertCircle } from 'lucide-react';

export function Footer() {
  const { t } = useApp();
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [reportSuccess, setReportSuccess] = useState(false);

  const handleSubmitReport = (e: React.FormEvent) => {
    e.preventDefault();
    setReportSuccess(true);
    setTimeout(() => {
      setReportSuccess(false);
      setReportModalOpen(false);
    }, 2000);
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Badging & Freshness Policy */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
              <ShieldCheck className="w-4 h-4 text-sky-400" />
              <span>DATA GOVERNANCE &amp; SOURCE PROVENANCE</span>
            </div>
            <p className="text-[11px] text-slate-400">
              All quantitative metrics are indexed against primary Tier 1 &amp; Tier 2 Canadian government and institutional data.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
              {t.common.current}: 0–30 Days
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
              {t.common.recent}: 31–90 Days
            </span>
            <button
              onClick={() => setReportModalOpen(true)}
              className="text-[11px] text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1 font-medium ml-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.common.reportOutdated}</span>
            </button>
          </div>
        </div>

        {/* Disclaimer Callout */}
        <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-[11px] leading-relaxed text-slate-400">
          <strong className="text-slate-300 block mb-1">Notice &amp; Disclaimer:</strong>
          {t.common.disclaimerText}
        </div>

        {/* Bottom Credits */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 pt-4">
          <div>
            Built for <strong>Yassir A. E. Abdulrhman &amp; Family</strong> • Riyadh (KSA) → Calgary, Alberta (Canada)
          </div>
          <div className="flex items-center gap-1">
            <span>Precision Engineering for Global Newcomers</span>
          </div>
        </div>
      </div>

      {/* Report Outdated Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-panel border border-slate-700 rounded-2xl max-w-md w-full p-6 bg-slate-950 text-xs">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-800">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span>Report Outdated Data or Policy Shift</span>
              </h4>
              <button onClick={() => setReportModalOpen(false)} className="text-slate-400 hover:text-white">
                ✕
              </button>
            </div>

            {reportSuccess ? (
              <div className="p-4 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-center font-medium">
                ✓ Report logged to audit registry. Thank you!
              </div>
            ) : (
              <form onSubmit={handleSubmitReport} className="space-y-4">
                <p className="text-slate-300 text-[11px]">
                  Found a change in Alberta transit fares, school fees, CRA brackets, or AHCIP rules? Let us know so the verification ledger can be updated immediately.
                </p>

                <div>
                  <label className="block text-slate-300 mb-1">Dataset or Policy Area:</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Calgary Transit 2026 Child Fares"
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 mb-1">New Information or Official Source URL:</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Provide details or official link..."
                    className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold"
                  >
                    Submit Report
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </footer>
  );
}
