import React from 'react';
import { Metadata } from 'next';
import { BenefitsSupportModule } from '@/components/benefits/BenefitsSupportModule';

export const metadata: Metadata = {
  title: 'Government Benefits & Family Support | CCB, CGEB, ACFB Calculator | Move to Canada',
  description: 'Comprehensive Canadian and Alberta government benefits calculator for newcomer families: CCB (3 children ages 16, 11, 5), CGEB, ACFB, Dental (CDCP), and healthcare coverage.'
};

export default function BenefitsPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BenefitsSupportModule />
      </div>
    </div>
  );
}
