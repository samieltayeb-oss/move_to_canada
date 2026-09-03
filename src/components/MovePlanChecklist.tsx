'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { settlementPhases } from '@/data/checklists';
import { 
  CheckSquare, 
  Square, 
  ExternalLink, 
  CheckCircle2, 
  Info, 
  Printer
} from 'lucide-react';

export function MovePlanChecklist() {
  const { t, checklistCompleted, toggleChecklistTask, isRtl } = useApp();
  const [activePhaseId, setActivePhaseId] = useState<string>('pre-arrival');

  // Compute overall progress
  const allTasks = settlementPhases.flatMap(p => p.tasks);
  const totalCount = allTasks.length;
  const completedCount = allTasks.filter(task => checklistCompleted[task.id]).length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const activePhase = settlementPhases.find(p => p.id === activePhaseId) || settlementPhases[0];

  return (
    <section id="my-move-plan" className="py-12 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-xs font-mono text-sky-300 mb-2">
              <CheckSquare className="w-3.5 h-3.5 text-sky-400" />
              <span>INTERACTIVE SETTLEMENT EXECUTION</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {t.plan.title}
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              {t.plan.subtitle}
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-xs font-semibold transition-colors"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>{t.plan.printableTitle}</span>
          </button>
        </div>

        {/* Progress Overview Bar */}
        <div className="glass-panel rounded-2xl p-6 border border-sky-500/30 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-3">
            <div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {t.plan.progress}
              </span>
              <span className="text-sm font-mono text-sky-400 font-bold ml-2">
                {completedCount} of {totalCount} Tasks Complete
              </span>
            </div>
            <span className="text-xl font-bold font-mono text-emerald-400">
              {progressPercent}%
            </span>
          </div>

          <div className="w-full h-3 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
            <div
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Phase Tabs Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar text-xs font-medium">
          {settlementPhases.map((phase) => {
            const isSelected = phase.id === activePhaseId;
            const phaseCompletedTasks = phase.tasks.filter(t => checklistCompleted[t.id]).length;
            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseId(phase.id)}
                className={`px-4 py-2.5 rounded-xl whitespace-nowrap transition-all border flex items-center gap-2 ${
                  isSelected
                    ? 'bg-sky-600 text-white border-sky-500 shadow-md shadow-sky-950/50'
                    : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:bg-slate-850'
                }`}
              >
                <span>{isRtl ? phase.arabicTitle : phase.title}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded ${
                  isSelected ? 'bg-sky-700 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {phaseCompletedTasks}/{phase.tasks.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Tasks List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-xs text-slate-400 font-mono">
            <span>Timeframe: <strong>{isRtl ? activePhase.arabicTimeframe : activePhase.timeframe}</strong></span>
            <span>{activePhase.tasks.length} Tasks in this Phase</span>
          </div>

          {activePhase.tasks.map((task) => {
            const isDone = Boolean(checklistCompleted[task.id]);
            return (
              <div
                key={task.id}
                className={`glass-panel rounded-2xl p-5 border transition-all ${
                  isDone
                    ? 'border-emerald-500/40 bg-emerald-950/10'
                    : 'border-slate-800/80 hover:border-sky-500/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleChecklistTask(task.id)}
                    className="mt-1 text-slate-400 hover:text-emerald-400 transition-colors shrink-0"
                    title={isDone ? 'Mark Incomplete' : 'Mark Complete'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="w-6 h-6 text-emerald-400 fill-emerald-950" />
                    ) : (
                      <Square className="w-6 h-6 text-slate-600 hover:text-slate-400" />
                    )}
                  </button>

                  <div className="space-y-2 w-full text-xs">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-sky-400 border border-slate-800">
                          {isRtl ? task.arabicCategory : task.category}
                        </span>
                        <h4 className={`text-base font-bold text-white ${isDone ? 'line-through text-slate-400' : ''}`}>
                          {isRtl ? task.arabicTitle : task.title}
                        </h4>
                      </div>

                      {task.officialUrl && (
                        <a
                          href={task.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sky-400 hover:text-sky-300 font-mono text-[11px]"
                        >
                          <span>Official Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <p className="text-slate-300 leading-relaxed text-xs">
                      {isRtl ? task.arabicDescription : task.description}
                    </p>

                    {/* Eligibility Warning Callout (if any) */}
                    {task.eligibilityCondition && (
                      <div className="p-2.5 rounded-xl bg-amber-950/50 border border-amber-800/80 text-[11px] text-amber-300 flex items-center gap-2">
                        <Info className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{isRtl ? task.arabicEligibilityCondition : task.eligibilityCondition}</span>
                      </div>
                    )}

                    {/* Required Documents Pill List */}
                    <div className="pt-2 border-t border-slate-800/60 flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] text-slate-400 uppercase font-mono mr-1">Required:</span>
                      {task.requiredDocuments.map((doc, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-300"
                        >
                          {doc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
