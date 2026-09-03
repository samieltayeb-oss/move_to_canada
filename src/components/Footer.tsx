'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { ShieldCheck, Printer } from 'lucide-react';

export function Footer() {
  const { isRtl } = useApp();

  const sections = [
    {
      title: isRtl ? 'الاستقرار والمعيشة' : 'Relocation & Living',
      links: [
        { href: '/', label: isRtl ? 'لوحة المؤشرات الرئيسية' : 'Command Center Overview' },
        { href: '/calgary', label: isRtl ? 'واقع الحياة في كالغاري' : 'Calgary Reality Check' },
        { href: '/housing', label: isRtl ? 'السكن والإيجارات' : 'Housing & Rentals' },
        { href: '/neighbourhoods', label: isRtl ? 'مستكشف الأحياء' : 'Neighbourhood Explorer' },
        { href: '/schools', label: isRtl ? 'تعليم ومدارس الأبناء' : 'Schools & CBE Welcome' },
        { href: '/muslim-life', label: isRtl ? 'المساجد والحياة الإسلامية' : 'Muslim Community & Mosques' },
        { href: '/settlement', label: isRtl ? 'خارطة طريق الاستقرار' : 'Settlement Roadmap' },
      ]
    },
    {
      title: isRtl ? 'المهنة والمالية' : 'Career & Finance',
      links: [
        { href: '/career', label: isRtl ? 'مسرع التوظيف الكندي' : 'Career Accelerator (NOC & ATS)' },
        { href: '/cost-of-living', label: isRtl ? 'الميزانية ومحاكي العروض' : 'Family Budget (20 Categories)' },
        { href: '/groceries', label: isRtl ? 'التموين وسلة الحلال' : 'Groceries & Costco Planner' },
        { href: '/banking', label: isRtl ? 'البنوك الكندية والائتمان' : 'Banking & Credit Score' },
        { href: '/fuel', label: isRtl ? 'أسعار البنزين والتنقل' : 'Fuel & Commute Engine' },
        { href: '/connectivity', label: isRtl ? 'الاتصالات والخدمات' : 'Telecom & Home Utilities' },
      ]
    },
    {
      title: isRtl ? 'التنقل والمصادر' : 'Transit & Legalities',
      links: [
        { href: '/driving', label: isRtl ? 'استبدال رخصة القيادة' : 'Driver Licensing (Saudi to AB)' },
        { href: '/cars', label: isRtl ? 'شراء سيارة دفع رباعي' : 'Family AWD Vehicles & 0% PST' },
        { href: '/healthcare', label: isRtl ? 'التأمين الصحي AHCIP' : 'Healthcare (AHCIP) & Transit' },
        { href: '/city-compare', label: isRtl ? 'مقارنة 9 مدن كندية' : 'Canadian City Value Index' },
        { href: '/videos', label: isRtl ? 'فيديوهات وتجارب كالغاري' : 'Videos & Winter Survival' },
        { href: '/plan', label: isRtl ? 'خطة الانتقال التنفيذية' : 'Action Plan & PDF Dossier' },
        { href: '/sources', label: isRtl ? 'سجل المصادر الحكومية (32)' : 'Official Source Registry (32)' },
      ]
    }
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand Col */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2.5 text-white font-bold">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-slate-900 border border-sky-400/30 flex items-center justify-center p-1">
                <Image
                  src="/images/logo.png"
                  alt="Move to Canada Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <span className="text-sm tracking-tight">Yassir&apos;s Calgary Move Center</span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed font-light">
              {isRtl 
                ? 'نظام استخبارات تنفيذي متكامل للانتقال من الرياض إلى كالغاري، مدعوم ببيانات حكومية موثقة لعام 2026'
                : 'Executive relocation and career intelligence system for Yassir A. E. Abdulrhman and family moving from Riyadh, Saudi Arabia to Calgary, Alberta.'}
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-mono">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>32 Verified Primary Sources</span>
            </div>
          </div>

          {/* Nav Categories */}
          {sections.map((col, idx) => (
            <div key={idx} className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
                {col.title}
              </h4>
              <ul className="space-y-1.5">
                {col.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-sky-400 transition-colors block py-0.5"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 Move to Canada — Calgary Relocation Command Center. Built for Yassir A. E. Abdulrhman.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/sources" className="hover:text-slate-300">
              {isRtl ? 'سجل المصادر' : 'Data Governance'}
            </Link>
            <Link href="/plan" className="hover:text-slate-300">
              {isRtl ? 'الملف التنفيذي' : 'Executive Dossier'}
            </Link>
            <button
              onClick={() => window.print()}
              className="hover:text-slate-300 inline-flex items-center gap-1"
            >
              <Printer className="w-3 h-3" />
              <span>Print / PDF</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
