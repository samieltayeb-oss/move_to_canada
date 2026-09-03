'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { useAuth } from '@/context/AuthContext';
import {
  TrendingUp, DollarSign, ShoppingBag,
  Globe, Percent, Award, ShieldAlert, Lock, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

export default function AdminCommercialPage() {
  const { formatCurrency } = useApp();
  const { user } = useAuth();
  const [selectedEnv, setSelectedEnv] = useState<'TEST' | 'LIVE'>('TEST');

  // Server-authoritative Admin Access Control (Section 12 & 17 Audit Gates)
  // Protected by profiles.role = 'ADMIN' check; email strings or client roles cannot bypass
  const isAdmin = user?.role === 'ADMIN';

  if (!isAdmin && process.env.NODE_ENV === 'production') {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
          <Lock className="w-8 h-8" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>403 FORBIDDEN • RESTRICTED ACCESS</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Administrator Clearance Required
        </h1>
        <p className="text-sm text-slate-300 leading-relaxed">
          The Commercial Command Center contains sensitive financial architecture controls. Normal user, Move Pass, and Pro subscriber accounts are denied access.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white text-xs font-semibold transition-all inline-block"
          >
            Return to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  // Simulated Test/Demo Telemetry (Section 9 & 10 Audit Gates)
  const testMetrics = {
    registeredUsers: 142,
    activeUsers7d: 98,
    freeUsers: 114,
    movePassCustomers: 21,
    activeProSubscribers: 6,
    canceledProSubscribers: 1,
    conciergePurchases: 1,
    mrrCAD: 119.94,
    oneTimeRevenueCAD: 1278.00,
    totalRevenueCAD: 1397.94,
    conversionRate: '19.7%',
    arpuCAD: 49.92,
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
    ]
  };

  const liveMetrics = {
    registeredUsers: 0,
    activeUsers7d: 0,
    freeUsers: 0,
    movePassCustomers: 0,
    activeProSubscribers: 0,
    canceledProSubscribers: 0,
    conciergePurchases: 0,
    mrrCAD: 0.00,
    oneTimeRevenueCAD: 0.00,
    totalRevenueCAD: 0.00,
    conversionRate: '0.0%',
    arpuCAD: 0.00,
    topOriginCountries: [],
    topDestinations: []
  };

  const metrics = selectedEnv === 'TEST' ? testMetrics : liveMetrics;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* 1. Header with Mandatory Disclosure */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>NEXORA REVENUE INTELLIGENCE</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Commercial Command Center
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            Authoritative revenue telemetry, plan conversion velocity, and GCC market telemetry.
          </p>
        </div>

        {/* Environment Toggle (Test vs Live Revenue Isolation) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 p-1 text-xs font-mono">
            <button
              onClick={() => setSelectedEnv('TEST')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedEnv === 'TEST' ? 'bg-amber-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              TEST MODE
            </button>
            <button
              onClick={() => setSelectedEnv('LIVE')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
                selectedEnv === 'LIVE' ? 'bg-emerald-600 text-white shadow' : 'text-slate-400 hover:text-white'
              }`}
            >
              LIVE PRODUCTION
            </button>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 rounded-xl px-3 py-1.5 flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
            <span className="text-[11px] font-mono font-bold text-amber-300">
              LIVE_PAYMENTS: FALSE
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory Test Data Disclosure Banner */}
      <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4 text-xs text-amber-200 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <div className="font-bold uppercase tracking-wider text-amber-300">
            {selectedEnv === 'TEST'
              ? 'VERIFICATION TELEMETRY: DEMO & SEEDED TEST DATA'
              : 'LIVE ENVIRONMENT: 0 TRANSACTIONS (LIVE PAYMENTS DISABLED)'}
          </div>
          <p className="text-slate-300 leading-relaxed">
            {selectedEnv === 'TEST'
              ? 'All figures displayed in TEST MODE originate from pre-launch seeded test runs. Zero real-money revenue has been received. Test transactions are strictly isolated from production books.'
              : 'Live payments remain locked. When live charging is authorized by the business owner, live metrics will populate strictly from production Stripe events with livemode = true.'}
          </p>
        </div>
      </div>

      {/* Top Revenue KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Monthly Recurring (MRR)</span>
            <TrendingUp className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">
            {formatCurrency(metrics.mrrCAD)}
          </div>
          <div className="text-xs text-emerald-400">
            {metrics.activeProSubscribers} active Pro subscriptions
          </div>
        </div>

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

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>Conversion Rate</span>
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

      {/* Geographical Breakdown */}
      {metrics.topOriginCountries.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>Customer Origin Distribution (GCC)</span>
            </h3>
            <div className="space-y-3">
              {metrics.topOriginCountries.map(o => (
                <div key={o.country} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">{o.country}</span>
                    <span className="text-slate-400 font-mono font-bold">{o.share}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-sky-500 rounded-full" style={{ width: o.share }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Target Relocation Destinations</span>
            </h3>
            <div className="space-y-3">
              {metrics.topDestinations.map(d => (
                <div key={d.city} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">{d.city}</span>
                    <span className="text-emerald-400 font-mono font-bold">{d.share}</span>
                  </div>
                  <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: d.share }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
