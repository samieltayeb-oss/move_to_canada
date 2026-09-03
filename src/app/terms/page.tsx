'use client';

import React from 'react';
import { Scale, AlertCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function TermsPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-400">
          <Scale className="w-3.5 h-3.5 text-emerald-400" />
          <span>NEXORA MOVE COMMERCIAL TERMS • VERSION 2026.1</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'شروط وأحكام الخدمة' : 'Terms of Service'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr ? 'آخر تحديث: سبتمبر 2026' : 'Last updated: September 2026'}
        </p>
      </div>

      {/* Critical Legal Boundary Box */}
      <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6 space-y-3">
        <div className="flex items-center gap-2 text-amber-300 font-bold text-sm uppercase tracking-wider">
          <AlertCircle className="w-4 h-4" />
          <span>{isAr ? 'تنبيه قانوني حاسم: حدود الخدمة' : 'CRITICAL LEGAL BOUNDARY: INFORMATIONAL & ESTIMATE NATURE'}</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          {isAr
            ? 'منصة NEXORA MOVE هي أداة برمجية للمعلومات والتخطيط اللوجستي والمالي. المنصة ليست مكتب محاماة ولا مرخصاً لتقديم استشارات الهجرة (RCIC). نحن لا نمثل المستخدمين أمام إدارة الهجرة الكندية (IRCC)، ولا نضمن الحصول على تأشيرة، أو عمل، أو مبالغ محددة من المساعدات الحكومية. جميع الأرقام هي تقديرات مبنية على معايير وقوانين عام 2026 المنشورة.'
            : 'NEXORA MOVE is an informational relocation intelligence, budgeting, and career preparation software platform. We are NOT an immigration law firm, legal practice, or licensed Regulated Canadian Immigration Consultant (RCIC). We do NOT represent users before Immigration, Refugees and Citizenship Canada (IRCC). Calculations are mathematical estimates based on official 2026 published statutes.'}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-6 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">1. Acceptance of Terms</h2>
          <p>
            By creating an account, accessing NEXORA MOVE, or purchasing a Move Pass, Pro Subscription, or Family Concierge session, you agree to these Terms of Service. If you disagree, do not use the platform.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">2. Commercial Plans & Billing</h2>
          <ul className="list-disc pl-5 rtl:pr-5 space-y-1">
            <li><strong>Explore (Free):</strong> Basic exploration and 1 active relocation scenario.</li>
            <li><strong>Move Pass (\$49 Launch / \$79 Regular):</strong> A one-time purchase granting premium relocation planning features for your account without recurring charges.</li>
            <li><strong>Pro Monthly (\$19.99/mo):</strong> A recurring monthly subscription providing unlimited ATS resume tailoring and career tracking tools. Can be canceled anytime via the self-serve Stripe billing portal.</li>
            <li><strong>Family Concierge (\$249):</strong> A one-time personalized planning assistance package including a 60-minute planning consultation. Does NOT include immigration legal advice.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">3. Data Preservation Upon Downgrade</h2>
          <p>
            If your Pro subscription is canceled, we <strong>never delete your data</strong> (resumes, job applications, saved scenarios, or family budget entries). Access to premium creation and editing tools is restricted according to the active entitlement tier, but your historical data remains intact.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-lg font-bold text-white">4. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Canada and the applicable provincial statutes.
          </p>
        </section>
      </div>
    </div>
  );
}
