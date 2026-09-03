'use client';

/**
 * DEDICATED ONBOARDING PAGE — NEXORA MOVE
 * 
 * 9-step newcomer setup wizard surfaced as a dedicated App Router page.
 * Personalizes the move plan and saves directly to the user's private state.
 */

import React from 'react';
import { useRouter } from 'next/navigation';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';

export default function OnboardingPage() {
  const router = useRouter();

  const handleComplete = () => {
    router.push('/plan');
  };

  const handleCancel = () => {
    router.push('/');
  };

  return (
    <div className="min-h-[85vh] py-8 px-4 flex items-center justify-center">
      <OnboardingWizard onComplete={handleComplete} onCancel={handleCancel} />
    </div>
  );
}
