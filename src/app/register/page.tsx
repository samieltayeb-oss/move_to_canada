'use client';

/**
 * REGISTRATION PAGE — NEXORA MOVE
 * 
 * High-visibility, premium Canadian newcomer registration screen.
 * Fields: First Name, Email, Password, Confirm Password, Terms Agreement.
 * Zero household/relocation questions on registration (deferred to onboarding).
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { Shield, Check, AlertCircle, ArrowRight, Compass } from 'lucide-react';

export default function RegisterPage() {
  const router = useRouter();
  const { signUp, enterDemoMode } = useAuth();
  const { isRtl } = useApp();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!firstName.trim()) {
      setError(isRtl ? 'يرجى كتابة الاسم الأول' : 'Please enter your first name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setError(isRtl ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please provide a valid email address.');
      return;
    }
    if (password.length < 8) {
      setError(isRtl ? 'يجب ألا تقل كلمة المرور عن 8 أحرف' : 'Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match.');
      return;
    }
    if (!agreeTerms) {
      setError(isRtl ? 'يجب الموافقة على الشروط وسياسة الخصوصية' : 'You must agree to the Terms and Privacy Policy.');
      return;
    }

    setLoading(true);
    const result = await signUp(email, password, firstName, lastName);
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(
        isRtl
          ? 'تم إنشاء الحساب بنجاح! يرجى فحص بريدك الإلكتروني لتأكيد الحساب، ثم الانتقال لإعداد خطة الانتقال.'
          : 'Your account has been created successfully! Please check your email to verify your address, then proceed to your onboarding plan.'
      );
      // Brief delay, then route to onboarding
      setTimeout(() => {
        router.push('/onboarding');
      }, 1800);
    }
  };

  const handleTryDemo = () => {
    enterDemoMode();
    router.push('/');
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Glow Accent */}
        <div className="absolute -top-20 -right-20 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>NEXORA MOVE — CANADA RELOCATION</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isRtl ? 'إنشاء حساب جديد مجاني' : 'Create Your Free Account'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            {isRtl 
              ? 'احصل على لوحة قيادة مخصصة، وحسابات الإعانات والضرائب الكندية، ومسرع السيرة الذاتية الكندية.'
              : 'Build your customized Canadian relocation plan, calculate statutory benefits, and access the ATS career accelerator.'}
          </p>
        </div>

        {/* Alerts */}
        {error && (
          <div className="p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">{error}</div>
          </div>
        )}

        {success && (
          <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/60 text-emerald-200 text-xs flex items-start gap-2.5">
            <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed font-medium">{success}</div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isRtl ? 'الاسم الأول' : 'First Name'} *
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={isRtl ? 'مثال: سامي' : 'e.g. Alex'}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isRtl ? 'اسم العائلة' : 'Last Name'}
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder={isRtl ? 'مثال: الأحمد' : 'e.g. Taylor'}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isRtl ? 'البريد الإلكتروني' : 'Email Address'} *
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isRtl ? 'كلمة المرور' : 'Password'} *
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors font-mono"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1">
                {isRtl ? 'تأكيد كلمة المرور' : 'Confirm Password'} *
              </label>
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder-slate-500 focus:border-sky-500 focus:outline-none transition-colors font-mono"
              />
            </div>
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start gap-2.5 pt-1">
            <input
              id="terms"
              type="checkbox"
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-slate-800 bg-slate-950 text-sky-600 focus:ring-sky-500 shrink-0"
            />
            <label htmlFor="terms" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
              {isRtl ? (
                <>أوافق على الشروط والأحكام و <span className="text-sky-400">سياسة الخصوصية وحماية البيانات الكندية (PIPEDA)</span>.</>
              ) : (
                <>I agree to the Terms of Service and <span className="text-sky-400">Canadian Privacy & Data Protection (PIPEDA)</span> policy.</>
              )}
            </label>
          </div>

          {/* Primary CTA */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">{isRtl ? 'جاري إنشاء الحساب...' : 'Creating Account...'}</span>
            ) : (
              <>
                <span>{isRtl ? 'إنشاء حسابي المجاني' : 'CREATE MY FREE ACCOUNT'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Secondary Links & Demo Option */}
        <div className="pt-4 border-t border-slate-800/80 space-y-3 text-center text-xs">
          <p className="text-slate-400">
            {isRtl ? 'لديك حساب بالفعل؟ ' : 'Already have an account? '}
            <Link href="/login" className="font-bold text-sky-400 hover:text-sky-300 underline underline-offset-4">
              {isRtl ? 'تسجيل الدخول' : 'SIGN IN'}
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
    </div>
  );
}
