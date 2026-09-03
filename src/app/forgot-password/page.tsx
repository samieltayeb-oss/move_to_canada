'use client';

/**
 * FORGOT PASSWORD PAGE — NEXORA MOVE
 * 
 * Secure password recovery request screen.
 * Dispatches an encrypted reset link via Supabase Auth.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { Shield, Mail, Check, AlertCircle, ArrowLeft } from 'lucide-react';

export default function ForgotPasswordPage() {
  const { resetPassword } = useAuth();
  const { isRtl } = useApp();

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!email.trim() || !email.includes('@')) {
      setError(isRtl ? 'يرجى إدخال بريد إلكتروني صالح' : 'Please enter a valid email address.');
      return;
    }

    setLoading(true);
    const result = await resetPassword(email);
    setLoading(false);

    if (result.error) {
      setError(result.error);
    } else {
      setSuccess(
        isRtl
          ? 'تم إرسال رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني بنجاح. يرجى مراجعة صندوق الوارد.'
          : 'Password reset link dispatched! Please check your email inbox to update your credentials.'
      );
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
            {isRtl ? 'استعادة كلمة المرور' : 'Reset Your Password'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
            {isRtl 
              ? 'أدخل بريدك الإلكتروني المسجل وسنرسل لك رابطاً آمناً لإعادة تعيين كلمة المرور.'
              : "Enter your registered email address and we'll send you an encrypted link to reset your credentials."}
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
              {isRtl ? 'البريد الإلكتروني المسجل' : 'Registered Email Address'}
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

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-600/30 transition-all transform active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <span className="animate-pulse">{isRtl ? 'جاري الإرسال...' : 'Sending Link...'}</span>
            ) : (
              <>
                <Mail className="w-4 h-4" />
                <span>{isRtl ? 'إرسال رابط استعادة كلمة المرور' : 'SEND PASSWORD RESET LINK'}</span>
              </>
            )}
          </button>
        </form>

        {/* Return to Login */}
        <div className="pt-4 border-t border-slate-800/80 text-center text-xs">
          <Link 
            href="/login" 
            className="inline-flex items-center gap-1.5 font-semibold text-sky-400 hover:text-sky-300"
          >
            {isRtl ? (
              <>
                <span>العودة إلى صفحة تسجيل الدخول</span>
                <ArrowLeft className="w-3.5 h-3.5" />
              </>
            ) : (
              <>
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Return to Sign In</span>
              </>
            )}
          </Link>
        </div>

      </div>
    </div>
  );
}
