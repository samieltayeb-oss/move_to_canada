'use client';

import React, { useState } from 'react';
import { HelpCircle, Mail, MessageSquare, AlertTriangle, CheckCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function SupportPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>NEXORA CUSTOMER SUPPORT & DATA AUDIT</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'مركز الدعم والإبلاغ عن البيانات' : 'Help & Customer Support'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr
            ? 'نحن هنا لمساعدتك في أي استفسار تقني أو مالي، أو لتلقي تقارير تحديث البيانات والأسعار.'
            : 'Get assistance with billing, accounts, or report outdated statutory figures.'}
        </p>
      </div>

      {/* Support Options */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <Mail className="w-5 h-5 text-emerald-400" />
          <h3 className="text-base font-bold text-white">
            {isAr ? 'الدعم عبر البريد الإلكتروني' : 'Email Support'}
          </h3>
          <p className="text-xs text-slate-400">
            {isAr ? 'فريق الدعم يجيب خلال 24 ساعة في أيام العمل.' : 'Dedicated customer team replies within 24 business hours.'}
          </p>
          <span className="text-xs font-mono text-emerald-300 block pt-1">support@nexoramove.ca</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <AlertTriangle className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">
            {isAr ? 'الإبلاغ عن تصحيح بيانات' : 'Report Data Issue'}
          </h3>
          <p className="text-xs text-slate-400">
            {isAr ? 'هل لاحظت إيجاراً غير محدث أو تغيراً في رسوم المدارس؟' : 'Notice a change in rental benchmarks or school tuition?'}
          </p>
          <span className="text-xs font-mono text-amber-300 block pt-1">audit@nexoramove.ca</span>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <MessageSquare className="w-5 h-5 text-purple-400" />
          <h3 className="text-base font-bold text-white">
            {isAr ? 'المساعد العائلي الخاص' : 'Family Concierge'}
          </h3>
          <p className="text-xs text-slate-400">
            {isAr ? 'لحاملي باقة Concierge: تنسيق الجلسة الاستشارية.' : 'For Concierge clients: schedule your 1-on-1 session.'}
          </p>
          <span className="text-xs font-mono text-purple-300 block pt-1">concierge@nexoramove.ca</span>
        </div>
      </div>

      {/* Ticket / Contact Form */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8 space-y-6">
        <h2 className="text-xl font-bold text-white">
          {isAr ? 'إرسال تذكرة دعم أو تقرير بيانات' : 'Submit a Support Ticket or Data Correction'}
        </h2>

        {submitted ? (
          <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
            <h3 className="text-base font-bold text-white">
              {isAr ? 'تم استلام رسالتك بنجاح' : 'Ticket Submitted Successfully'}
            </h3>
            <p className="text-xs text-slate-300">
              {isAr ? 'سيقوم فريق الدعم بمراجعة طلبك والتواصل معك عبر البريد الإلكتروني.' : 'Our team will review your inquiry and follow up promptly via email.'}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">{isAr ? 'الاسم الكامل' : 'Your Name'}</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Yassir Abdulrhman"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-slate-400 font-semibold">{isAr ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 font-semibold">{isAr ? 'نوع الطلب' : 'Inquiry Category'}</label>
              <select className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500">
                <option value="billing">{isAr ? 'استفسار عن الفواتير والاشتراكات' : 'Billing & Subscription'}</option>
                <option value="data">{isAr ? 'تصحيح بيانات أو أسعار' : 'Data Correction / Outdated Benchmark'}</option>
                <option value="technical">{isAr ? 'مشكلة تقنية في الحساب' : 'Technical / Account Issue'}</option>
                <option value="concierge">{isAr ? 'حجز جلسة المساعد العائلي' : 'Concierge Scheduling'}</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400 font-semibold">{isAr ? 'تفاصيل الرسالة' : 'Message Details'}</label>
              <textarea
                required
                rows={4}
                placeholder={isAr ? 'اكتب تفاصيل استفسارك هنا...' : 'Provide details of your inquiry or the specific data item to audit...'}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-emerald-500"
              />
            </div>

            <button
              type="submit"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold transition-all"
            >
              {isAr ? 'إرسال الطلب' : 'Submit Ticket'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
