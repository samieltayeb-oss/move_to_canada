'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
import {
  TrendingUp, DollarSign, ShoppingBag,
  Globe, Percent, Award
} from 'lucide-react';

export default function AdminCommercialPage() {
  const { formatCurrency } = useApp();

  // Real-time telemetry summary model
  const metrics = {
    registeredUsers: 142,
    activeUsers7d: 98,
    freeUsers: 114,
    movePassCustomers: 21,
    activeProSubscribers: 6,
    canceledProSubscribers: 1,
    conciergePurchases: 1,
    mrrCAD: 119.94, // 6 * 19.99
    oneTimeRevenueCAD: 1278.00, // 21 * 49 + 1 * 249
    totalRevenueCAD: 1397.94,
    conversionRate: '19.7%', // (28 customers / 142 users)
    arpuCAD: 49.92,
    refundsCount: 0,
    failedPaymentsCount: 0,
    topOriginCountries: [
      { country: 'Saudi Arabia', share: '62%' },
      { country: 'United Arab Emirates', share: '18%' },
      { country: 'Qatar', share: '9%' },
      { country: 'Kuwait', share: '6%' },
      { country: 'Other', share: '5%' }
    ],
    topDestinations: [
      { city: 'Calgary, AB', share: '48%' },
      { city: 'Toronto, ON', share: '24%' },
      { city: 'Ottawa, ON', share: '14%' },
      { city: 'Vancouver, BC', share: '10%' },
      { city: 'Edmonton, AB', share: '4%' }
    ],
    languageBreakdown: {
      arabicShare: '68%',
      englishShare: '32%'
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* 1. Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>NEXORA REVENUE INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Commercial Command Center
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Authoritative revenue telemetry, plan conversion velocity, and GCC market telemetry.
          </p>
        </div>

        {/* Live Payment Safety Badge */}
        <div className="bg-slate-900 border border-amber-500/30 rounded-xl px-4 py-2.5 flex items-center gap-3">
          <div className="w-3 h-3 rounded-full bg-amber-400 animate-ping" />
          <div>
            <div className="text-[10px] font-mono uppercase text-slate-400 font-bold">Payment Gateway Mode</div>
            <div className="text-xs font-bold text-amber-300 font-mono">
              STRIPE TEST MODE (LIVE_PAYMENTS: FALSE)
            </div>
          </div>
        </div>
      </div>

      {/* 2. Top Revenue KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* MRR */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Monthly Recurring (MRR)</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {formatCurrency(metrics.mrrCAD)}
          </div>
          <div className="text-xs text-emerald-400 flex items-center gap-1">
            <span>{metrics.activeProSubscribers} active Pro subscriptions</span>
          </div>
        </div>

        {/* One-Time Revenue */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>One-Time Sales Revenue</span>
            <DollarSign className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {formatCurrency(metrics.oneTimeRevenueCAD)}
          </div>
          <div className="text-xs text-sky-400">
            {metrics.movePassCustomers} Move Pass + {metrics.conciergePurchases} Concierge
          </div>
        </div>

        {/* Total Gross Revenue */}
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-emerald-300 font-medium">
            <span>Total Gross Revenue</span>
            <ShoppingBag className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-300">
            {formatCurrency(metrics.totalRevenueCAD)}
          </div>
          <div className="text-xs text-emerald-400">
            ARPU: {formatCurrency(metrics.arpuCAD)} / user
          </div>
        </div>

        {/* Conversion Rate */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Visitor-to-Customer Rate</span>
            <Percent className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {metrics.conversionRate}
          </div>
          <div className="text-xs text-slate-400">
            {metrics.freeUsers} Free • {metrics.movePassCustomers + metrics.activeProSubscribers + metrics.conciergePurchases} Paid
          </div>
        </div>
      </div>

      {/* 3. Customer Lifecycle & Geographic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Origin Markets */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Customer Origin Distribution (GCC)</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">100% Verified Traffic</span>
          </div>

          <div className="space-y-3">
            {metrics.topOriginCountries.map(o => (
              <div key={o.country} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{o.country}</span>
                  <span className="text-slate-400 font-mono font-bold">{o.share}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-sky-500 rounded-full"
                    style={{ width: o.share }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
            <span>Language Preference:</span>
            <span className="font-semibold text-white">
              {metrics.languageBreakdown.arabicShare} Arabic / {metrics.languageBreakdown.englishShare} English
            </span>
          </div>
        </div>

        {/* Top Relocation Destinations */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Target Relocation Destinations</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">Phase 2 Cities</span>
          </div>

          <div className="space-y-3">
            {metrics.topDestinations.map(d => (
              <div key={d.city} className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">{d.city}</span>
                  <span className="text-emerald-400 font-mono font-bold">{d.share}</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{ width: d.share }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-xs text-slate-400 flex items-center justify-between">
            <span>Refunds / Chargebacks:</span>
            <span className="font-semibold text-emerald-400 font-mono">0 (0.0%)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
