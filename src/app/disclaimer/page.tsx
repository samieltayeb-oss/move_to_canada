'use client';

import React from 'react';
import { AlertTriangle, ExternalLink, Shield } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function DisclaimerPage() {
  const { locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8 text-slate-300">
      <div className="border-b border-slate-800 pb-6 space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-mono">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>STATUTORY IMMIGRATION & LEGAL BOUNDARY NOTICE</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          {isAr ? 'إخلاء المسؤولية القانونية وحدود استشارات الهجرة' : 'Immigration Advice Boundary & Legal Disclaimer'}
        </h1>
        <p className="text-sm text-slate-400">
          {isAr ? 'بيان الشفافية الإلزامي لحماية المستهلك' : 'Mandatory Consumer Transparency Statement'}
        </p>
      </div>

      <div className="rounded-2xl border border-rose-500/30 bg-rose-950/20 p-6 space-y-4">
        <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
          <Shield className="w-5 h-5 text-rose-400" />
          <span>NEXORA MOVE is NOT an Immigration Consulting or Legal Firm</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
          NEXORA MOVE operates strictly as an educational, logistical, and financial decision-support platform designed to help newcomers understand the costs and realities of relocating to Canadian communities.
        </p>
        <div className="space-y-2 text-xs sm:text-sm text-slate-300">
          <p className="font-semibold text-rose-300">We do NOT:</p>
          <ul className="list-disc pl-5 rtl:pr-5 space-y-1 text-slate-300">
            <li>Provide individualized immigration legal advice or legal opinions.</li>
            <li>Determine formal eligibility for Canadian immigration streams.</li>
            <li>Prepare, review, or submit visa or PR applications to IRCC.</li>
            <li>Represent applicants before Immigration, Refugees and Citizenship Canada (IRCC).</li>
            <li>Act as an authorized Regulated Canadian Immigration Consultant (RCIC) or Canadian lawyer.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
        <h3 className="text-base font-bold text-white">Official Canadian Government Sources</h3>
        <p>
          For official information regarding Canadian visas, study permits, work permits, and Express Entry or Provincial Nominee Programs (PNP), consult official government portals:
        </p>
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <a
            href="https://www.canada.ca/en/immigration-refugees-citizenship.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
          >
            <span>Immigration, Refugees and Citizenship Canada (IRCC)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href="https://college-ic.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 font-semibold"
          >
            <span>College of Immigration and Citizenship Consultants (CICC)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
