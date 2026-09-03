'use client';

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function RefundPolicyPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
          <RotateCcw className="w-3.5 h-3.5 text-emerald-400" />
          <span>TRANSPARENT REFUND & CANCELLATION POLICY</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'سياسة الاسترجاع والإلغاء' : 'Refund & Cancellation Policy'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr ? 'آخر تحديث: سبتمبر 2026' : 'Last updated: September 2026'}
        </p>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Move Pass (One-Time Purchase)</h2>
          <p>
            We stand behind the quality and empirical rigor of our Canadian relocation intelligence. If you purchase a Move Pass and find that the personalized analysis does not provide value for your family relocation planning, you may request a <strong>full refund within 14 days of purchase</strong> by contacting support.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Pro Monthly Subscription</h2>
          <p>
            You can cancel your Pro monthly subscription at any time with <strong>1-click via the self-serve Stripe Billing Portal</strong>. Your access will continue through the end of your current paid billing period, after which your account reverts to Move Pass or Explore without recurring charges. We do not issue partial refunds for mid-billing-cycle cancellations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Family Concierge</h2>
          <p>
            Family Concierge orders may be fully refunded if canceled before your scheduled 1-on-1 consultation session or prior to the delivery of your personalized audit dossier. Once a consultation has taken place or customized work delivered, concierge fees become non-refundable.
          </p>
        </section>
      </div>
    </div>
  );
}
