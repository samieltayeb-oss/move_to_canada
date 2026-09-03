'use client';

/**
 * LOGIN PAGE — NEXORA MOVE
 * 
 * Clean, high-visibility newcomer sign-in screen.
 * Fields: Email, Password.
 * CTAs: SIGN IN, Forgot Password, Create Free Account, Try Demo.
 */

import React, { useState, Suspense } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { Shield, Lock, AlertCircle, Compass } from 'lucide-react';

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectMessage = searchParams.get('message');

  const { signIn, enterDemoMode } = useAuth();
  const { isRtl } = useApp();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes('@')) {
      setError(isRtl ? 'يرجى إدخال البريد الإلكتروني' : 'Please enter your email address.');
      return;
    }
    if (!password) {
      setError(isRtl ? 'يرجى إدخال كلمة المرور' : 'Please enter your password.');
      return;
    }

    setLoading(true);
    const result = await signIn(email, password);
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  const handleTryDemo = () => {
    enterDemoMode();
    router.push('/');
  };

  return (
    <div className="max-w-md w-full space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono">
          <Shield className="w-3.5 h-3.5" />
          <span>NEXORA MOVE — CANADA RELOCATION</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {isRtl ? 'تسجيل الدخول' : 'Sign In to Your Plan'}
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
          {isRtl 
            ? 'أدخل بيانات حسابك للوصول إلى خطة الانتقال الخاصة بك وحسابات الضرائب والمساعدات.'
            : 'Access your private relocation plan, saved budgets, and customized Canadian move benchmarks.'}
        </p>
      </div>

      {/* Redirect Message from Protected Route */}
      {redirectMessage && (
        <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-200 text-xs flex items-center gap-2 font-medium">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{redirectMessage}</span>
        </div>
      )}

      {/* Error Alert */}
      {error && (
        <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{error}</div>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-medium text-slate-300 mb-1">
            {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@domain.com"
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors font-mono"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-medium text-slate-300">
              {isRtl ? 'كلمة المرور' : 'Password'}
            </label>
            <Link 
              href="/forgot-password" 
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors"
            >
              {isRtl ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
            </Link>
          </div>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors font-mono"
          />
        </div>

        {/* Primary CTA */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="animate-pulse">{isRtl ? 'جاري التحقق...' : 'Signing in...'}</span>
          ) : (
            <>
              <Lock className="w-4 h-4" />
              <span>{isRtl ? 'تسجيل الدخول' : 'SIGN IN'}</span>
            </>
          )}
        </button>
      </form>

      {/* Secondary Links & Demo Option */}
      <div className="pt-4 border-t border-slate-800/80 space-y-3 text-center text-xs">
        <p className="text-slate-400">
          {isRtl ? 'ليس لديك حساب بعد؟ ' : "Don't have an account? "}
          <Link href="/register" className="font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4">
            {isRtl ? 'إنشاء حساب مجاني' : 'CREATE FREE ACCOUNT'}
          </Link>
        </p>

        <div className="pt-2">
          <button
            onClick={handleTryDemo}
            type="button"
            className="w-full py-2 px-3 rounded-lg bg-slate-950 border border-slate-800 text-amber-300 hover:bg-amber-950/30 hover:border-amber-500/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>{isRtl ? 'تجربة النظام التوضيحي (ديمو ياسر) دون تسجيل' : 'TRY DEMO WITHOUT REGISTERING'}</span>
          </button>
        </div>
      </div>

    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div className="text-white text-center">Loading login...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
