'use client';

import React from 'react';
import { HeroProfile } from '@/components/HeroProfile';
import { HomeSummaryWidgets } from '@/components/HomeSummaryWidgets';
import { AllPagesPortal } from '@/components/AllPagesPortal';
import { FirstDaysArrivalGuide } from '@/components/settlement/FirstDaysArrivalGuide';
import { FamilyWeekendModule } from '@/components/activities/FamilyWeekendModule';
import { BenefitsSupportModule } from '@/components/benefits/BenefitsSupportModule';
import { ExecutiveDecisionDashboard } from '@/components/ExecutiveDecisionDashboard';
import { CalgaryRealityCheck } from '@/components/CalgaryRealityCheck';
import { SourceModal } from '@/components/SourceModal';
import { PrintableMoveDossier } from '@/components/PrintableMoveDossier';

import { DestinationSelector } from '@/components/DestinationSelector';
import { CompareMyLife } from '@/components/CompareMyLife';

export default function Home() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      {/* 1. Hero & Family Profile Editor */}
      <HeroProfile />

      {/* 2. Phase 2 Destination Selector: Alberta, Ontario, British Columbia & Cities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <DestinationSelector />
      </div>

      {/* 3. Core Family Relocation Intelligence Brief (Summary Widgets) */}
      <HomeSummaryWidgets />

      {/* 4. Compare My Life in Canada (Side-by-Side 4 Scenarios) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <CompareMyLife />
      </div>

      {/* 3. Master Multi-Page Navigation Portal (18 Dedicated Hubs) */}
      <AllPagesPortal />

      {/* 4. First 72 Hours in Calgary: Newcomer Immediate Action Guide (SIN, AHCIP Health Cards, CBE Schools) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FirstDaysArrivalGuide />
      </div>

      {/* 5. Government Benefits & Family Support Command Center (CCB, CGEB, ACFB, Dental, Health) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <BenefitsSupportModule />
      </div>

      {/* 6. Calgary Family Weekend, Kids Activities & Fair Entry Subsidy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <FamilyWeekendModule />
      </div>

      {/* 7. Executive Decision Dashboard (Personalized Fit Score & KPI Matrix) */}
      <ExecutiveDecisionDashboard />

      {/* 5. Calgary Reality Check (Strengths vs. Difficulties) */}
      <CalgaryRealityCheck />

      {/* Universal Source Provenance Modal */}
      <SourceModal />

      {/* Print Dossier Layout */}
      <PrintableMoveDossier />
    </div>
  );
}
