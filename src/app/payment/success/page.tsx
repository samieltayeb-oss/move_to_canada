'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useApp } from '@/context/AppContext';
import { COMMERCIAL_PLANS, PlanId } from '@/config/plans';
import { CheckCircle, Sparkles, ShieldCheck, FileText, Compass, AlertCircle, Download, ArrowRight } from 'lucide-react';

interface VerificationResult {
  verified: boolean;
  status: string;
  sessionId: string;
  planId: PlanId;
  planName: string;
  customerEmail: string;
  amountCAD: number;
  downloadUrl: string;
}

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const planIdParam = (searchParams.get('plan') as PlanId) || 'MOVE_PASS';
  const { locale } = useApp();
  const isAr = locale === 'ar';

  const [verification, setVerification] = useState<VerificationResult | null>(null);
  const [isVerifying, setIsVerifying] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const verifySession = async () => {
      try {
        if (!sessionId) {
          setIsVerifying(false);
          setErrorMessage('Missing transaction identifier (session_id).');
          return;
        }

        // Call server-side verification endpoint
        const res = await fetch(`/api/checkout/verify?session_id=${encodeURIComponent(sessionId)}`);
        const data = await res.json();

        if (res.ok && data.verified) {
          setVerification(data);
          // Unlock client-side context for immediate feature gating
          if (typeof window !== 'undefined') {
            try {
              localStorage.setItem('nexora_move_active_plan', data.planId);
              localStorage.setItem('nexora_move_entitlement', JSON.stringify({
                planId: data.planId,
                email: data.customerEmail,
                verifiedAt: new Date().toISOString()
              }));
            } catch {}
          }
        } else {
          setErrorMessage(data.error || 'Payment synchronization pending. Verification could not be finalized.');
        }
      } catch (err) {
        console.error('Session verification error:', err);
        setErrorMessage('Network error while verifying checkout session.');
      } finally {
        setIsVerifying(false);
      }
    };

    verifySession();
  }, [sessionId]);

  const plan = COMMERCIAL_PLANS[verification?.planId || planIdParam] || COMMERCIAL_PLANS.MOVE_PASS;

  if (isVerifying) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6 space-y-4">
        <div className="w-12 h-12 rounded-full border-4 border-emerald-500 border-t-transparent animate-spin" />
        <h2 className="text-xl font-bold text-white">
          {isAr ? 'جاري التحقق من نجاح عملية الدفع...' : 'Verifying Authoritative Payment State...'}
        </h2>
        <p className="text-sm text-slate-400">
          {isAr ? 'يرجى الانتظار بينما نقوم بتأكيد ترقية حسابك مع خوادم الدفع.' : 'Connecting with Stripe to confirm your account fulfillment.'}
        </p>
      </div>
    );
  }

  if (!verification || !verification.verified) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>
        <h1 className="text-2xl font-bold text-white">
          {isAr ? 'في انتظار مزامنة الدفع' : 'Awaiting Payment Confirmation'}
        </h1>
        <p className="text-sm text-slate-300">
          {errorMessage || (isAr
            ? 'جاري التحقق من حالة العملية عبر خادم الدفع. سيتم تفعيل حسابك تلقائياً بمجرد اكتمال المعالجة.'
            : 'Your checkout session is being verified with Stripe. Your account will automatically activate upon webhook confirmation.')}
        </p>
        <div className="flex items-center justify-center gap-3">
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
          >
            {isAr ? 'إعادة المحاولة' : 'Check Again'}
          </button>
          <Link href="/" className="px-6 py-3 rounded-xl bg-slate-800 text-white text-xs font-semibold hover:bg-slate-700 transition-colors">
            {isAr ? 'العودة إلى لوحة القيادة' : 'Return to Dashboard'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-8">
      {/* Success Badge */}
      <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto shadow-xl shadow-emerald-950/50">
        <CheckCircle className="w-10 h-10" />
      </div>

      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5" />
          {isAr ? 'تم تأكيد الدفع رسمياً' : 'PAYMENT CONFIRMED & ENTITLED'}
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? `مرحباً بك في ${plan.arabicDisplayName}` : `Welcome to ${plan.displayName}!`}
        </h1>

        <p className="text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
          {isAr
            ? `تم تفعيل ترخيصك بنجاح للبريد ${verification.customerEmail}. يمكنك تحميل ملف الخطة الشامل مباشرة أدناه.`
            : `Your purchase ($${verification.amountCAD} CAD) has been confirmed for ${verification.customerEmail}. Your complete relocation dossier is ready.`}
        </p>

        <div className="inline-block font-mono text-[11px] text-slate-500 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
          Ref: {verification.sessionId}
        </div>
      </div>

      {/* Primary Digital Fulfillment Action: Instant Download */}
      <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-900 border border-emerald-500/30 shadow-2xl text-center space-y-4">
        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
          <Download className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            {isAr ? 'تحميل ملف خطة الانتقال المعتمدة' : 'Download Your Relocation Blueprint & Dossier'}
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto mt-1">
            {isAr 
              ? 'يتضمن ميزانية الـ 7,539 دولار المفصلة، خطة أول 72 ساعة، واستراتيجية بناء السجل الائتماني.' 
              : 'Includes complete 72-hour arrival checklist, Calgary budget breakdown, and 12-month credit blueprint.'}
          </p>
        </div>
        <a
          href={verification.downloadUrl}
          download="NEXORA_MOVE_Relocation_Blueprint.json"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white text-sm font-extrabold shadow-lg shadow-emerald-950/60 transition-all"
        >
          <Download className="w-4 h-4" />
          <span>{isAr ? 'تحميل الملف الرقمي الآن' : 'Download Digital Product (JSON)'}</span>
        </a>
      </div>

      {/* Unlocked Features Box */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-left rtl:text-right space-y-4">
        <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {isAr ? 'المزايا المفعلة الآن في حسابك:' : 'Features Unlocked in Your Account:'}
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200">
          {(isAr ? plan.arabicFeatures : plan.features).map((feat, i) => (
            <li key={i} className="flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Navigation Buttons */}
      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <Compass className="w-4 h-4" />
          <span>{isAr ? 'الذهاب إلى لوحة القيادة الكاملة' : 'Go to Command Center'}</span>
        </Link>

        <Link
          href="/plan"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 text-sm font-semibold transition-all flex items-center justify-center gap-2"
        >
          <FileText className="w-4 h-4" />
          <span>{isAr ? 'تصفح خطة الانتقال (90 يوماً)' : 'Open 90-Day Move Plan'}</span>
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div className="text-center p-12 text-slate-400">Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
