'use client';

import React, { useState } from 'react';
import { useApp } from '@/context/AppContext';
import { 
  Compass, 
  Globe2, 
  DollarSign, 
  Printer, 
  Bookmark, 
  Menu, 
  X, 
  Shield, 
  Home, 
  GraduationCap, 
  Moon, 
  Building2, 
  Calculator, 
  Car, 
  FileText, 
  Sparkles
} from 'lucide-react';

export function Navigation() {
  const { locale, setLocale, t, currency, setCurrency, bookmarks } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#executive-fit', label: t.nav.dashboard, icon: Shield },
    { href: '#reality-check', label: t.nav.realityCheck, icon: Compass },
    { href: '#housing-command', label: t.nav.housing, icon: Home },
    { href: '#neighbourhood-explorer', label: t.nav.neighbourhoods, icon: Compass },
    { href: '#schools-command', label: t.nav.schools, icon: GraduationCap },
    { href: '#muslim-life', label: t.nav.islamicLife, icon: Moon },
    { href: '#banking-credit', label: t.nav.bankingCredit, icon: Building2 },
    { href: '#telecom-utilities', label: t.nav.telecomUtilities, icon: Sparkles },
    { href: '#calculators', label: t.nav.calculators, icon: Calculator },
    { href: '#driving-cars', label: t.nav.drivingCars, icon: Car },
    { href: '#taxes-career', label: t.nav.taxes, icon: DollarSign },
    { href: '#city-index', label: t.nav.cityIndex, icon: Globe2 },
    { href: '#my-move-plan', label: t.nav.movePlan, icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand & Crest */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500/20 via-slate-900 to-amber-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400/60 transition-all shadow-lg shadow-sky-950/50">
              <Compass className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  EXECUTIVE RELOCATION COMMAND
                </span>
                <span className="hidden md:inline-flex text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {t.common.current} • 2026
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                <span>{t.appTitle}</span>
              </h1>
            </div>
          </a>

          {/* Desktop Right Utilities */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Currency Toggle */}
            <div className="flex items-center p-1 rounded-xl bg-slate-900 border border-slate-800 text-xs">
              <button
                onClick={() => setCurrency('CAD')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  currency === 'CAD'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                CAD ($)
              </button>
              <button
                onClick={() => setCurrency('SAR')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  currency === 'SAR'
                    ? 'bg-amber-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
                title="Bank of Canada FX series: 1 CAD = 2.74 SAR"
              >
                SAR (ر.س)
              </button>
            </div>

            {/* Language Switch */}
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-medium text-slate-200 transition-all hover:border-slate-700"
            >
              <Globe2 className="w-3.5 h-3.5 text-sky-400" />
              <span>{t.common.switchLang}</span>
            </button>

            {/* Print Dossier */}
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-medium text-slate-200 transition-all"
              title="Print executive dossier to PDF"
            >
              <Printer className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.common.printExport}</span>
            </button>

            {/* Bookmarks Pill */}
            {bookmarks.length > 0 && (
              <a
                href="#my-move-plan"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-medium"
              >
                <Bookmark className="w-3.5 h-3.5 fill-amber-400" />
                <span>{bookmarks.length}</span>
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setLocale(locale === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1 text-xs rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-semibold"
            >
              {locale === 'en' ? 'العربية' : 'EN'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-400 hover:text-slate-200 rounded-lg hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Sub-bar Quick Section Scroller (Desktop) */}
        <div className="hidden lg:flex items-center gap-1 overflow-x-auto py-2 border-t border-slate-800/60 no-scrollbar text-xs font-medium text-slate-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1 rounded-lg hover:text-sky-300 hover:bg-slate-900/60 transition-colors whitespace-nowrap flex items-center gap-1.5"
            >
              <link.icon className="w-3 h-3 text-slate-500" />
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 p-4 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs text-slate-400">Currency</span>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrency('CAD')}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  currency === 'CAD' ? 'bg-sky-600 text-white' : 'bg-slate-900 text-slate-400'
                }`}
              >
                CAD
              </button>
              <button
                onClick={() => setCurrency('SAR')}
                className={`px-3 py-1 rounded-lg text-xs font-medium ${
                  currency === 'SAR' ? 'bg-amber-600 text-white' : 'bg-slate-900 text-slate-400'
                }`}
              >
                SAR
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800/80 text-slate-200 flex items-center gap-2 hover:bg-slate-800"
              >
                <link.icon className="w-4 h-4 text-sky-400" />
                <span className="truncate">{link.label}</span>
              </a>
            ))}
          </div>

          <button
            onClick={() => {
              window.print();
              setMobileMenuOpen(false);
            }}
            className="w-full py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            <span>{t.common.printExport}</span>
          </button>
        </div>
      )}
    </header>
  );
}
