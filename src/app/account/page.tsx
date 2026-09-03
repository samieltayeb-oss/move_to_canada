'use client';

/**
 * DEDICATED ACCOUNT & PRIVACY DASHBOARD — NEXORA MOVE
 * 
 * Protected route for managing user profile, security, data export, and account deletion.
 * Fails closed and redirects unauthenticated visitors to /login.
 */

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { AccountSettingsModal } from '@/components/account/AccountSettingsModal';

export default function AccountPage() {
  const router = useRouter();
  const { user, isDemoMode } = useAuth();

  useEffect(() => {
    // Protected route check: if unauthenticated and not in explicit demo mode, redirect to /login
    if (!user && !isDemoMode) {
      router.push('/login?message=Sign in to continue your relocation plan.');
    }
  }, [user, isDemoMode, router]);

  if (!user && !isDemoMode) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-slate-400 text-sm font-mono animate-pulse">
          Redirecting to secure login...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[85vh] py-12 px-4 flex items-center justify-center">
      <AccountSettingsModal isOpen={true} onClose={() => router.push('/')} />
    </div>
  );
}
