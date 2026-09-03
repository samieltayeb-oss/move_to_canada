'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroProfile } from '@/components/HeroProfile';
import { ExecutiveDecisionDashboard } from '@/components/ExecutiveDecisionDashboard';
import { CalgaryRealityCheck } from '@/components/CalgaryRealityCheck';
import { HousingCommandCenter } from '@/components/HousingCommandCenter';
import { NeighbourhoodExplorer } from '@/components/NeighbourhoodExplorer';
import { SchoolsCommandCenter } from '@/components/SchoolsCommandCenter';
import { IslamicLifeModule } from '@/components/IslamicLifeModule';
import { BankingCreditModule } from '@/components/BankingCreditModule';
import { TelecomUtilitiesModule } from '@/components/TelecomUtilitiesModule';
import { CalculatorsModule } from '@/components/CalculatorsModule';
import { DrivingVehiclesModule } from '@/components/DrivingVehiclesModule';
import { TransitHealthcareModule } from '@/components/TransitHealthcareModule';
import { TaxesCareerModule } from '@/components/TaxesCareerModule';
import { VideosLifestyleModule } from '@/components/VideosLifestyleModule';
import { CityComparisonModule } from '@/components/CityComparisonModule';
import { MovePlanChecklist } from '@/components/MovePlanChecklist';
import { PrintableMoveDossier } from '@/components/PrintableMoveDossier';
import { Footer } from '@/components/Footer';
import { SourceModal } from '@/components/SourceModal';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-950 text-slate-100 print:bg-white print:text-black">
      {/* Top Fixed Executive Command Bar */}
      <Navigation />

      {/* Main Content Sections (Screen View) */}
      <div className="flex-1 print:hidden">
        {/* 1. Hero & Family Profile Editor */}
        <HeroProfile />

        {/* 2. Executive Fit Decision Dashboard (Calgary Family Fit Score & Dynamic Weights) */}
        <ExecutiveDecisionDashboard />

        {/* 3. Calgary Reality Check (Strengths vs Difficulties) */}
        <CalgaryRealityCheck />

        {/* 4. Housing Command Center (3-Bed vs 4-Bed, CMHC vs Rentals.ca, Verified Listings) */}
        <HousingCommandCenter />

        {/* 5. Family Neighbourhood Explorer (Quadrants, Best-For Filters, School Catchments) */}
        <NeighbourhoodExplorer />

        {/* 6. Schools & Children Command Center (3 Kids Progression, CBE Welcome Centre, CIS Fees) */}
        <SchoolsCommandCenter />

        {/* 7. Islamic Life Module (Mosques, Prayer Shifts, Halal Meat Supply Chains) */}
        <IslamicLifeModule />

        {/* 8. Banking & Canadian Credit Module (Big 6 Packages, 5 Factors, 12-Month Blueprint) */}
        <BankingCreditModule />

        {/* 9. Telecom & Home Utilities (PureFibre vs Cable, Mobile, Seasonal Heating Costs) */}
        <TelecomUtilitiesModule />

        {/* 10. Cost of Living & Upfront Arrival Cash Reserve Calculators */}
        <CalculatorsModule />

        {/* 11. Driving, Vehicles & Saudi Car Import Inadmissibility Warning */}
        <DrivingVehiclesModule />

        {/* 12. Transit & Healthcare (AHCIP 0-Day Wait, Free Kids Transit, 811) */}
        <TransitHealthcareModule />

        {/* 13. Taxes & Financial Career (Progressive Tax Calculator, Calgary Finance Landscape) */}
        <TaxesCareerModule />

        {/* 14. Videos & First Winter Survival Guide (Video Player, Layering, Chinooks) */}
        <VideosLifestyleModule />

        {/* 15. Pan-Canadian City Comparison (9 Cities Index, Calgary vs Edmonton, Calgary vs Riyadh) */}
        <CityComparisonModule />

        {/* 16. Dynamic Move Plan Checklist (Pre-Arrival to Year One, Local Storage) */}
        <MovePlanChecklist />
      </div>

      {/* Printable Move Plan Dossier (Visible only during Print / PDF Export) */}
      <PrintableMoveDossier />

      {/* Sourced Footer & Data Freshness Governance */}
      <Footer />

      {/* Universal Verified Source Drawer Modal */}
      <SourceModal />
    </main>
  );
}
