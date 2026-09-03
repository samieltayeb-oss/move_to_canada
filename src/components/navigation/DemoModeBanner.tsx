'use client';

/**
 * DEMO PROFILE & USER CONTEXT BANNER — NEXORA MOVE
 * 
 * Displays transparent indication when viewing Yassir's approved golden baseline scenario,
 * and allows any newcomer to register, start the 9-step onboarding wizard, or manage account settings.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
import { AccountSettingsModal } from '@/components/account/AccountSettingsModal';
import { Settings, LogOut, Compass } from 'lucide-react';

export function DemoModeBanner() {
  const { user, isDemoMode, signOut, enterDemoMode } = useAuth();
  const { isRtl } = useApp();

  const [showOnboarding, setShowOnboarding] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const isGuest = !user && !isDemoMode;

  return (
    <>
      <aside aria-label="Demo mode and user context" className={`w-full text-xs font-mono border-b transition-colors ${
        isDemoMode
          ? 'bg-amber-950/40 border-amber-500/30 text-amber-200'
          : isGuest
          ? 'bg-slate-900 border-slate-800 text-slate-300'
          : 'bg-emerald-950/40 border-emerald-500/30 text-emerald-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase tracking-wider ${
              isDemoMode 
                ? 'bg-amber-500/20 border border-amber-400/40 text-amber-300'
                : isGuest
                ? 'bg-sky-500/20 border border-sky-400/40 text-sky-300'
                : 'bg-emerald-500/20 border border-emerald-400/40 text-emerald-300'
            }`}>
              {isDemoMode ? 'DEMO PROFILE' : isGuest ? 'GUEST MODE' : 'AUTHENTICATED USER'}
            </span>

            <span className="font-sans font-medium text-xs text-slate-300">
              {isDemoMode ? (
                <>
                  {isRtl ? 'ملف العرض التوضيحي المعتمد: ' : 'Approved Baseline: '}
                  <strong className="text-white font-bold">Yassir A. E. Abdulrhman</strong>
                  <span className="hidden md:inline text-slate-400 font-light"> (Calgary, AB Scenario)</span>
                </>
              ) : isGuest ? (
                <>
                  <span className="text-slate-300">
                    {isRtl ? 'منصة الانتقال الكندية — استكشف الحساب التجريبي أو أنشئ خطتك الخاصة' : 'Canada Relocation Intelligence — Try the verified baseline demo or start your move plan'}
                  </span>
                </>
              ) : (
                <>
                  {isRtl ? 'مرحباً، ' : 'Welcome, '}
                  <strong className="text-white font-bold">{user?.displayName || user?.email}</strong>
                </>
              )}
            </span>
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-2">
            {isDemoMode ? (
              <>
                <Link
                  href="/register"
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-sans text-xs font-bold transition-all shadow-sm"
                >
                  <span>{isRtl ? 'إنشاء حسابك الخاص' : 'CREATE YOUR OWN ACCOUNT'}</span>
                </Link>
                <button
                  onClick={() => signOut()}
                  className="px-2 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono"
                >
                  {isRtl ? 'إنهاء الديمو' : 'Exit Demo'}
                </button>
              </>
            ) : isGuest ? (
              <>
                <button
                  onClick={() => enterDemoMode()}
                  className="px-2.5 py-1 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 hover:bg-amber-500/30 text-xs font-bold transition-all"
                >
                  {isRtl ? 'تجربة ديمو ياسر' : 'Try Demo (Yassir Scenario)'}
                </button>
                <button
                  onClick={() => setShowOnboarding(true)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-sans text-xs font-bold transition-all shadow-sm"
                >
                  <Compass className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'بدء خطة الانتقال' : 'Start 9-Step Move Plan'}</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowSettings(true)}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 hover:text-white text-xs"
                >
                  <Settings className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isRtl ? 'إعدادات الحساب' : 'My Account'}</span>
                </button>
                <button
                  onClick={() => enterDemoMode()}
                  className="px-2 py-1 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white text-xs"
                >
                  {isRtl ? 'عرض ديمو ياسر' : 'View Yassir Demo'}
                </button>
                <button
                  onClick={() => signOut()}
                  className="flex items-center gap-1 px-2 py-1 rounded-lg bg-rose-950/40 border border-rose-800/40 text-rose-300 hover:text-white text-xs"
                >
                  <LogOut className="w-3 h-3" />
                  <span>{isRtl ? 'خروج' : 'Sign Out'}</span>
                </button>
              </>
            )}
          </div>

        </div>
      </aside>

      {/* Onboarding Wizard Modal */}
      {showOnboarding && (
        <OnboardingWizard
          onComplete={() => setShowOnboarding(false)}
          onCancel={() => setShowOnboarding(false)}
        />
      )}

      {/* Account Settings Modal */}
      {showSettings && (
        <AccountSettingsModal
          isOpen={showSettings}
          onClose={() => setShowSettings(false)}
        />
      )}
    </>
  );
}
