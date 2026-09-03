'use client';

/**
 * RESET PASSWORD PAGE — NEXORA MOVE
 * 
 * New password entry screen after clicking password recovery email link.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { Shield, Lock, Check, AlertCircle } from 'lucide-react';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { isRtl } = useApp();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError(isRtl ? 'يجب ألا تقل كلمة المرور عن 8 أحرف' : 'Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError(isRtl ? 'كلمتا المرور غير متطابقتين' : 'Passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseClient();
        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
          setError(error.message);
          setLoading(false);
          return;
        }
      }
      setSuccess(
        isRtl 
          ? 'تم تحديث كلمة المرور بنجاح! يمكنك الآن تسجيل الدخول بكلمة المرور الجديدة.'
          : 'Password updated successfully! You can now sign in with your new credentials.'
      );
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to update password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-mono">
            <Shield className="w-3.5 h-3.5" />
            <span>NEXORA MOVE — SECURITY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {isRtl ? 'تعيين كلمة مرور جديدة' : 'Set New Password'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            {isRtl 
              ? 'أدخل كلمة المرور الجديدة وتأكيدها لحماية حسابك.'
              : 'Enter your new secure password to update your account access.'}
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
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">
              {isRtl ? 'كلمة المرور الجديدة' : 'New Password'}
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
              {isRtl ? 'تأكيد كلمة المرور الجديدة' : 'Confirm New Password'}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">{isRtl ? 'جاري التحديث...' : 'Updating Password...'}</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>{isRtl ? 'تحديث كلمة المرور' : 'UPDATE PASSWORD'}</span>
              </>
            )}
          </button>
        </form>

        <div className="pt-4 border-t border-slate-800/80 text-center text-xs">
          <Link href="/login" className="font-semibold text-sky-400 hover:text-sky-300">
            {isRtl ? 'العودة لتسجيل الدخول' : 'Return to Sign In'}
          </Link>
        </div>

      </div>
    </div>
  );
}
