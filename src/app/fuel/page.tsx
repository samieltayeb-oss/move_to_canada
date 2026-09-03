'use client';

import React from 'react';
import { GasFuelModule } from '@/components/fuel/GasFuelModule';
import { SourceModal } from '@/components/SourceModal';

export default function FuelPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <GasFuelModule />
      <SourceModal />
    </div>
  );
}
