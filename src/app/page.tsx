'use client';

import React from 'react';
import { HeroProfile } from '@/components/HeroProfile';
import { HomeSummaryWidgets } from '@/components/HomeSummaryWidgets';
import { ExecutiveDecisionDashboard } from '@/components/ExecutiveDecisionDashboard';
import { CalgaryRealityCheck } from '@/components/CalgaryRealityCheck';
import { SourceModal } from '@/components/SourceModal';
import { PrintableMoveDossier } from '@/components/PrintableMoveDossier';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. Hero & Family Profile Editor */}
      <HeroProfile />

      {/* 2. Core Family Relocation Intelligence Brief (Summary Widgets) */}
      <HomeSummaryWidgets />

      {/* 3. Executive Decision Dashboard (Personalized Fit Score) */}
      <ExecutiveDecisionDashboard />

      {/* 4. Calgary Reality Check (Strengths vs. Difficulties) */}
      <CalgaryRealityCheck />

      {/* Universal Source Provenance Modal */}
      <SourceModal />

      {/* Print Dossier Layout */}
      <PrintableMoveDossier />
    </div>
  );
}
