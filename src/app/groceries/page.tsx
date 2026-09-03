'use client';

import React from 'react';
import { FamilyGroceryModule } from '@/components/groceries/FamilyGroceryModule';
import { SourceModal } from '@/components/SourceModal';

export default function GroceriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <FamilyGroceryModule />
      <SourceModal />
    </div>
  );
}
