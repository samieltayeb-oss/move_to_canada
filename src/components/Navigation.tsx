'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { 
  Compass, 
  Globe2, 
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
  Briefcase,
  ShoppingBag,
  Fuel,
  Wifi,
  HeartPulse,
  Video,
  CheckSquare
} from 'lucide-react';

export function Navigation() {
  const { locale, setLocale, t, currency, setCurrency, bookmarks, isRtl } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navRoutes = [
    { href: '/', label: isRtl ? 'نظرة عامة' : 'OVERVIEW', icon: Shield },
    { href: '/calgary', label: isRtl ? 'واقع كالغاري' : 'CALGARY', icon: Compass },
    { href: '/housing', label: isRtl ? 'السكن والإيجار' : 'HOUSING', icon: Home },
    { href: '/neighbourhoods', label: isRtl ? 'الأحياء' : 'NEIGHBOURHOODS', icon: Compass },
    { href: '/schools', label: isRtl ? 'المدارس' : 'SCHOOLS', icon: GraduationCap },
    { href: '/muslim-life', label: isRtl ? 'الحياة الإسلامية' : 'MUSLIM LIFE', icon: Moon },
    { href: '/career', label: isRtl ? 'مسرع التوظيف' : 'CAREER', icon: Briefcase, highlight: true },
    { href: '/cost-of-living', label: isRtl ? 'تكاليف المعيشة' : 'COST OF LIVING', icon: Calculator },
    { href: '/groceries', label: isRtl ? 'التموين والغذاء' : 'GROCERIES', icon: ShoppingBag, highlight: true },
    { href: '/banking', label: isRtl ? 'البنوك والائتمان' : 'BANKING', icon: Building2 },
    { href: '/connectivity', label: isRtl ? 'الاتصالات والخدمات' : 'CONNECTIVITY', icon: Wifi },
    { href: '/driving', label: isRtl ? 'رخصة القيادة' : 'DRIVING', icon: Car },
    { href: '/cars', label: isRtl ? 'شراء سيارة' : 'CARS', icon: Car },
    { href: '/fuel', label: isRtl ? 'أسعار البنزين' : 'FUEL', icon: Fuel, highlight: true },
    { href: '/healthcare', label: isRtl ? 'التأمين الصحي' : 'HEALTHCARE', icon: HeartPulse },
    { href: '/settlement', label: isRtl ? 'خارطة الاستقرار' : 'SETTLEMENT', icon: CheckSquare },
    { href: '/city-compare', label: isRtl ? 'مقارنة المدن' : 'CITY COMPARE', icon: Globe2 },
    { href: '/videos', label: isRtl ? 'فيديوهات كالغاري' : 'VIDEOS', icon: Video },
    { href: '/plan', label: isRtl ? 'خطة الانتقال' : 'MY MOVE PLAN', icon: FileText }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="flex items-center justify-between h-16 border-b border-slate-800/50">
          {/* Brand Crest */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 via-slate-900 to-amber-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:border-sky-400/60 transition-all shadow-md shadow-sky-950/50">
              <Compass className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  YASSIR&apos;S MOVE COMMAND
                </span>
                <span className="hidden md:inline-flex text-[9px] font-mono px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {t.common.current} • 2026
                </span>
              </div>
              <h1 className="text-sm font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                {t.appTitle}
              </h1>
            </div>
          </Link>

          {/* Controls: Currency, Language, PDF Print, Bookmarks */}
          <div className="flex items-center gap-2.5">
            {/* Currency Toggle */}
            <div className="flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setCurrency('CAD')}
                className={`px-2 py-1 rounded transition-all ${
                  currency === 'CAD'
                    ? 'bg-sky-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                CAD ($)
              </button>
              <button
                onClick={() => setCurrency('SAR')}
                className={`px-2 py-1 rounded transition-all ${
                  currency === 'SAR'
                    ? 'bg-amber-600 text-white font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                SAR (ر.س)
              </button>
            </div>

            {/* Language Toggle */}
            <div className="flex items-center rounded-lg bg-slate-900 p-0.5 border border-slate-800 text-xs font-mono">
              <button
                onClick={() => setLocale('en')}
                className={`px-2 py-1 rounded transition-all ${
                  locale === 'en'
                    ? 'bg-slate-800 text-sky-400 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLocale('ar')}
                className={`px-2 py-1 rounded transition-all ${
                  locale === 'ar'
                    ? 'bg-slate-800 text-amber-400 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                العربية
              </button>
            </div>

            {/* Bookmarks Counter */}
            {bookmarks.length > 0 && (
              <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-amber-300">
                <Bookmark className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{bookmarks.length}</span>
              </div>
            )}

            {/* Print Trigger */}
            <button
              onClick={() => window.print()}
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
              title={t.common.printExport}
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.common.printExport}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Row — Desktop Multi-Page Route Links */}
        <nav className="hidden md:flex items-center gap-1 py-2 overflow-x-auto no-scrollbar text-xs">
          {navRoutes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`whitespace-nowrap px-2.5 py-1.5 rounded-lg font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-600/20'
                    : route.highlight
                    ? 'bg-sky-950/60 text-sky-300 border border-sky-800/80 hover:bg-sky-900/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900/80'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : route.highlight ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{route.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-2 max-h-[80vh] overflow-y-auto">
          {navRoutes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <Icon className="w-4 h-4 text-sky-400" />
                <span>{route.label}</span>
              </Link>
            );
          })}

          <div className="pt-3 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.print();
              }}
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-medium flex items-center justify-center gap-2"
            >
              <Printer className="w-4 h-4 text-slate-400" />
              <span>{t.common.printExport}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
