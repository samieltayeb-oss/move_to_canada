'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useApp } from '@/context/AppContext';
import { 
  Compass, 
  Printer, 
  Bookmark, 
  Menu, 
  X, 
  Shield, 
  Home, 
  GraduationCap, 
  Moon, 
  Calculator, 
  Car, 
  FileText, 
  Briefcase,
  ShoppingBag,
  Fuel,
  ChevronDown,
  LayoutGrid
} from 'lucide-react';

export function Navigation() {
  const { locale, setLocale, t, currency, setCurrency, bookmarks, isRtl } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();

  const primaryBarRoutes = [
    { href: '/', label: isRtl ? 'الرئيسية' : 'Overview', icon: Shield },
    { href: '/career', label: isRtl ? 'مسرع التوظيف' : 'Career Accelerator', icon: Briefcase, highlight: true, badge: 'NOC & ATS' },
    { href: '/groceries', label: isRtl ? 'التموين والغذاء' : 'Groceries & Halal', icon: ShoppingBag, highlight: true, badge: 'Costco & 2026' },
    { href: '/fuel', label: isRtl ? 'أسعار الوقود' : 'Gas & Fuel', icon: Fuel, highlight: true, badge: 'StatsCan' },
    { href: '/housing', label: isRtl ? 'السكن والإيجار' : 'Housing', icon: Home },
    { href: '/cost-of-living', label: isRtl ? 'الميزانية الشاملة' : 'Family Budget', icon: Calculator },
    { href: '/schools', label: isRtl ? 'المدارس' : 'Schools', icon: GraduationCap },
    { href: '/muslim-life', label: isRtl ? 'الحياة الإسلامية' : 'Muslim Life', icon: Moon },
    { href: '/driving', label: isRtl ? 'رخصة القيادة' : 'Driving & Licence', icon: Car },
    { href: '/plan', label: isRtl ? 'خطة الانتقال' : 'Move Plan', icon: FileText }
  ];

  const allPagesGrouped = [
    {
      groupName: isRtl ? 'الاستقرار والحياة في كالغاري' : 'Relocation & Living in Calgary',
      routes: [
        { href: '/', label: isRtl ? 'لوحة القيادة والمؤشرات' : 'Executive Overview & Fit Score', desc: 'Scorecard & key relocation indicators' },
        { href: '/calgary', label: isRtl ? 'واقع الحياة في كالغاري' : 'Calgary Reality Check', desc: 'Strengths vs. winter & service challenges' },
        { href: '/housing', label: isRtl ? 'السكن والإيجارات (3 و 4 غرف)' : 'Housing Command Center', desc: 'CMHC vs Rentals.ca, deposits & listings' },
        { href: '/neighbourhoods', label: isRtl ? 'مستكشف الأحياء العائلية' : 'Neighbourhood Explorer', desc: 'NE, NW, SW & SE community comparison' },
        { href: '/schools', label: isRtl ? 'تعليم ومدارس الأبناء' : 'Schools Command Center', desc: 'CBE Welcome Centre, Islamic CIS tuition' },
        { href: '/muslim-life', label: isRtl ? 'المساجد والمجتمع الإسلامي' : 'Muslim Life & Halal Infrastructure', desc: 'Akram Jomaa, prayer shifts, Tahfeez' },
        { href: '/settlement', label: isRtl ? 'خارطة طريق الاستقرار' : 'Settlement Roadmap', desc: 'Pre-arrival to Year 1 statutory steps' }
      ]
    },
    {
      groupName: isRtl ? 'المهنة والمالية والتموين' : 'Career, Finance & Family Outlay',
      routes: [
        { href: '/career', label: isRtl ? 'مسرع التوظيف الكندي (ATS)' : 'Career Accelerator Module', desc: 'Job Bank NOC matching, ATS Resume Studio, CRM', badge: 'Primary Pillar' },
        { href: '/cost-of-living', label: isRtl ? 'الميزانية ومحاكي عروض العمل' : 'Total Family Living Budget', desc: '20-category budget & net take-home simulator' },
        { href: '/groceries', label: isRtl ? 'التموين وسلة الحلال وكوستكو' : 'Family Grocery Command Center', desc: 'Canada Food Price Report 2026 age model & Costco' },
        { href: '/banking', label: isRtl ? 'البنوك وبناء السجل الائتماني' : 'Banking Packages & Credit Blueprint', desc: 'Big 6 + ATB comparison, 12-month credit plan' },
        { href: '/fuel', label: isRtl ? 'أسعار البنزين وحاسبة التنقل' : 'Gas & Fuel Command Center', desc: 'StatsCan 18-10-0001 benchmarks & hybrid savings' },
        { href: '/connectivity', label: isRtl ? 'الاتصالات المنزلية والخدمات' : 'Telecom & Municipal Utilities', desc: 'TELUS PureFibre, mobile, calling KSA, Enmax' }
      ]
    },
    {
      groupName: isRtl ? 'المركبات والتنقل والمقارنات' : 'Mobility, Legalities & Insights',
      routes: [
        { href: '/driving', label: isRtl ? 'استبدال الرخصة وقانون الاستيراد' : 'Alberta Driver\'s Licence Exchange', desc: 'Saudi licence rules & 15-year import ban' },
        { href: '/cars', label: isRtl ? 'شراء سيارة العائلة وتوفير الضريبة' : 'Family AWD Vehicles & 0% PST', desc: 'Highlander, Sienna, Pilot & auto insurance' },
        { href: '/healthcare', label: isRtl ? 'التأمين الصحي AHCIP والمواصلات' : 'Alberta Healthcare (AHCIP) & Transit', desc: 'Zero-day wait period & CTrain family fares' },
        { href: '/city-compare', label: isRtl ? 'مؤشر القيمة ومقارنة 9 مدن' : 'Canadian City Value Index', desc: 'Calgary vs Edmonton, Toronto, Vancouver' },
        { href: '/videos', label: isRtl ? 'معرض فيديوهات الانتقال والطقس' : 'Calgary Videos & Winter Survival', desc: 'Real Gulf families, Chinooks & thermal layers' },
        { href: '/plan', label: isRtl ? 'خطة الانتقال والملف التنفيذي' : 'My Move Plan & PDF Dossier', desc: 'Interactive checklist & printable dossier' },
        { href: '/sources', label: isRtl ? 'سجل المصادر الرسمية (32 مصدر)' : 'Official Source Registry', desc: 'StatCan, Alberta.ca, CMHC, CBE governance' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/95 backdrop-blur-md">
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
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-amber-400 uppercase font-semibold">
                  YASSIR&apos;S MOVE COMMAND
                </span>
                <span className="hidden lg:inline-flex text-[9px] font-mono px-2 py-0.2 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  {t.common.current} • 2026
                </span>
              </div>
              <h1 className="text-xs sm:text-sm font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors">
                {t.appTitle}
              </h1>
            </div>
          </Link>

          {/* Quick Mega-Menu Trigger & Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* All Pages Dropdown Trigger */}
            <div className="relative">
              <button
                onClick={() => setMegaMenuOpen(!megaMenuOpen)}
                className={`hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                  megaMenuOpen 
                    ? 'bg-sky-600 border-sky-500 text-white shadow-lg shadow-sky-600/20' 
                    : 'bg-slate-900/90 border-slate-700 text-slate-200 hover:border-sky-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5 text-sky-400" />
                <span>{isRtl ? 'جميع الصفحات والأقسام (18)' : 'All 18 Pages & Hubs'}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${megaMenuOpen ? 'rotate-180 text-white' : 'text-slate-400'}`} />
              </button>
            </div>

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
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 text-xs font-medium transition-all"
              title={t.common.printExport}
            >
              <Printer className="w-3.5 h-3.5 text-slate-400" />
              <span>{t.common.printExport}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Secondary Navigation Row — Desktop Primary Links Bar */}
        <nav className="hidden md:flex items-center gap-1.5 py-2 overflow-x-auto no-scrollbar text-xs">
          {primaryBarRoutes.map((route) => {
            const Icon = route.icon;
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={`whitespace-nowrap px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-sky-600 text-white font-bold shadow-md shadow-sky-600/20'
                    : route.highlight
                    ? 'bg-sky-950/50 text-sky-300 border border-sky-800/80 hover:bg-sky-900/60'
                    : 'text-slate-300 hover:text-white hover:bg-slate-900'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : route.highlight ? 'text-sky-400' : 'text-slate-400'}`} />
                <span>{route.label}</span>
                {route.badge && !isActive && (
                  <span className="hidden lg:inline text-[9px] font-mono px-1.5 py-0.2 rounded bg-sky-900/80 text-sky-300 border border-sky-700/60">
                    {route.badge}
                  </span>
                )}
              </Link>
            );
          })}

          <button
            onClick={() => setMegaMenuOpen(!megaMenuOpen)}
            className="whitespace-nowrap px-2.5 py-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 flex items-center gap-1 text-[11px] ml-auto border border-dashed border-slate-800"
          >
            <LayoutGrid className="w-3 h-3 text-slate-400" />
            <span>{isRtl ? 'المزيد (+8)' : 'More (+8)'}</span>
          </button>
        </nav>
      </div>

      {/* DESKTOP MEGA-MENU POPUP (ALL 18 PAGES) */}
      {megaMenuOpen && (
        <div className="hidden md:block border-t border-slate-800 bg-slate-950/98 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2.5">
                <LayoutGrid className="w-5 h-5 text-sky-400" />
                <h3 className="text-sm font-bold text-white tracking-tight uppercase font-mono">
                  {isRtl ? 'دليل جميع صفحات ومحاور النظام المتكاملة' : 'Complete 18-Page Modular Navigation Hub'}
                </h3>
              </div>
              <button
                onClick={() => setMegaMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 text-xs flex items-center gap-1"
              >
                <span>{isRtl ? 'إغلاق' : 'Close'}</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs">
              {allPagesGrouped.map((col, cIdx) => (
                <div key={cIdx} className="space-y-3">
                  <h4 className="text-xs font-bold text-sky-400 uppercase tracking-wider font-mono border-b border-slate-800/80 pb-2">
                    {col.groupName}
                  </h4>
                  <div className="space-y-1.5">
                    {col.routes.map((rt, rIdx) => {
                      const isActive = pathname === rt.href;
                      return (
                        <Link
                          key={rIdx}
                          href={rt.href}
                          onClick={() => setMegaMenuOpen(false)}
                          className={`p-2.5 rounded-xl block transition-all group ${
                            isActive
                              ? 'bg-sky-600 text-white'
                              : 'hover:bg-slate-900 border border-transparent hover:border-slate-800'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <strong className={`font-semibold ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-sky-300'}`}>
                              {rt.label}
                            </strong>
                            {rt.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                {rt.badge}
                              </span>
                            )}
                          </div>
                          <p className={`text-[11px] mt-0.5 font-light leading-relaxed ${isActive ? 'text-sky-100' : 'text-slate-400'}`}>
                            {rt.desc}
                          </p>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MOBILE DRAWER (ALL 18 PAGES WITH CATEGORIES) */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950 px-4 py-6 space-y-6 max-h-[85vh] overflow-y-auto">
          {allPagesGrouped.map((grp, gIdx) => (
            <div key={gIdx} className="space-y-2">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-sky-400 px-1">
                {grp.groupName}
              </h4>
              <div className="space-y-1">
                {grp.routes.map((rt, rIdx) => {
                  const isActive = pathname === rt.href;
                  return (
                    <Link
                      key={rIdx}
                      href={rt.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 py-2 rounded-xl text-xs transition-all ${
                        isActive
                          ? 'bg-sky-600 text-white font-bold'
                          : 'text-slate-300 hover:bg-slate-900'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{rt.label}</span>
                        {rt.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                            {rt.badge}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="pt-4 border-t border-slate-800">
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
