import React from 'react';
import { Metadata } from 'next';
import { FamilyWeekendModule } from '@/components/activities/FamilyWeekendModule';

export const metadata: Metadata = {
  title: 'Calgary Family Weekend & Kids Activities | Fair Entry Program | Move to Canada',
  description: 'Top weekend destinations for kids (ages 16, 11, 5) in Calgary across all seasons, plus the City of Calgary Fair Entry municipal subsidy application guide.'
};

export default function ActivitiesPage() {
  return (
    <div className="py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FamilyWeekendModule />
      </div>
    </div>
  );
}
