'use client';

import React from 'react';
import { TotalFamilyBudgetModule } from '@/components/budget/TotalFamilyBudgetModule';
import { CalculatorsModule } from '@/components/CalculatorsModule';
import { TaxesCareerModule } from '@/components/TaxesCareerModule';
import { SourceModal } from '@/components/SourceModal';

export default function CostOfLivingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* 1. Master Family Budget & Job Offer Simulator */}
      <TotalFamilyBudgetModule />

      {/* 2. Arrival Liquid Cash Reserves & Tax Calculations */}
      <div className="pt-6 border-t border-slate-800">
        <CalculatorsModule />
      </div>

      {/* 3. Progressive Tax Brackets & CCB Engine */}
      <div className="pt-6 border-t border-slate-800">
        <TaxesCareerModule />
      </div>

      <SourceModal />
    </div>
  );
}
