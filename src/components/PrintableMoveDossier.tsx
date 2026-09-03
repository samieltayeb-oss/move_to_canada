'use client';

import React from 'react';
import { useApp } from '@/context/AppContext';
export function PrintableMoveDossier() {
  const { familyProfile } = useApp();

  return (
    <div className="hidden print:block p-8 bg-white text-black max-w-4xl mx-auto space-y-8">
      {/* Print Header */}
      <div className="border-b-2 border-slate-900 pb-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-black uppercase tracking-tight">
            Yassir&apos;s Calgary Relocation Command Dossier
          </h1>
          <p className="text-xs text-slate-600 font-serif mt-1">
            Personalized Settlement Intelligence • Riyadh (Saudi Arabia) → Calgary, Alberta (Canada)
          </p>
        </div>
        <div className="text-right text-xs font-mono text-slate-600">
          <div>CONFIDENTIAL &amp; PERSONAL</div>
          <div>Date: September 2026 Horizon</div>
        </div>
      </div>

      {/* Household Profile */}
      <div className="border border-slate-300 p-4 rounded-lg">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
          1. Household Relocation Profile
        </h2>
        <div className="grid grid-cols-3 gap-4 text-xs font-mono">
          <div>
            <span className="text-slate-500 block">Family Members:</span>
            <strong>{familyProfile.numAdults} Adults, {familyProfile.numChildren} Children</strong>
          </div>
          <div>
            <span className="text-slate-500 block">Children Ages:</span>
            <strong>{familyProfile.childrenAges.join(', ')} Years Old</strong>
          </div>
          <div>
            <span className="text-slate-500 block">Immigration Status:</span>
            <strong>{familyProfile.immigrationStatus}</strong>
          </div>
          <div>
            <span className="text-slate-500 block">Target Housing:</span>
            <strong>{familyProfile.housingPreference} Detached (Calgary)</strong>
          </div>
          <div>
            <span className="text-slate-500 block">Planned Landing Liquidity:</span>
            <strong>${familyProfile.initialSavingsCAD.toLocaleString()} CAD</strong>
          </div>
          <div>
            <span className="text-slate-500 block">School Priority:</span>
            <strong>{familyProfile.islamicSchoolPreference ? 'Islamic Alternative (CIS)' : 'Public (CBE)'}</strong>
          </div>
        </div>
      </div>

      {/* Monthly Budget & Landing Reserves */}
      <div className="border border-slate-300 p-4 rounded-lg">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
          2. Financial Benchmarks (Comfortable Tier)
        </h2>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-slate-500 block">Target Monthly Household Budget:</span>
            <div className="text-lg font-bold font-mono">
              $7,539 CAD / month <span className="text-xs font-normal">(≈ 20,650 SAR)</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1">
              Includes 4-bed rent ($2,950), ENMAX utilities ($480), halal groceries ($1,650), insurance ($358), vehicle ($700), and school fees ($650).
            </p>
          </div>
          <div>
            <span className="text-slate-500 block">Recommended Upfront Landing Cash:</span>
            <div className="text-lg font-bold font-mono">
              $45,600 CAD <span className="text-xs font-normal">(≈ 125,000 SAR)</span>
            </div>
            <p className="text-[10px] text-slate-600 mt-1">
              Covers 1st month rent + 1 mo deposit ($5,700), temporary furnished rental ($4,000), furniture ($6,000), family AWD vehicle ($15,000), winter outfitting ($3,300), and 2-month reserve.
            </p>
          </div>
        </div>
      </div>

      {/* Key Action Priorities */}
      <div className="border border-slate-300 p-4 rounded-lg">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
          3. Critical Settlement Protocols
        </h2>
        <div className="space-y-3 text-xs">
          <div>
            <strong className="block text-slate-900">• Before Departure from Riyadh:</strong>
            <p className="text-slate-700">
              Download bilingual Saudi driving record with QR from Absher/Mojaz; obtain claims-free insurance experience letter from Najm; obtain report cards for 3 kids; DO NOT ship modern GCC vehicles under 15 years old.
            </p>
          </div>
          <div>
            <strong className="block text-slate-900">• First 72 Hours in Calgary:</strong>
            <p className="text-slate-700">
              Obtain Social Insurance Number (SIN) in-person at Service Canada; activate Canadian mobile lines; complete KYC branch identity verification at RBC/TD/CIBC for debit and newcomer credit cards.
            </p>
          </div>
          <div>
            <strong className="block text-slate-900">• First 30 Days:</strong>
            <p className="text-slate-700">
              Apply for AHCIP health coverage (zero waiting period for direct arrivals); pass Class 7 knowledge test; register children at CBE Welcome Centre (1221 8 St SW); apply for Canada Child Benefit (CCB) via CRA form RC66.
            </p>
          </div>
        </div>
      </div>

      {/* Official Directory */}
      <div className="border border-slate-300 p-4 rounded-lg text-xs">
        <h2 className="text-sm font-bold uppercase tracking-wider mb-2 text-slate-800">
          4. Essential Official Portals
        </h2>
        <div className="grid grid-cols-2 gap-2 text-[11px] font-mono">
          <div>• Service Canada (SIN): canada.ca</div>
          <div>• Alberta Health (AHCIP): alberta.ca/ahcip-apply.aspx</div>
          <div>• CBE Welcome Centre: cbe.ab.ca</div>
          <div>• Find a Doctor: albertafindadoctor.ca</div>
          <div>• Health Link 24/7 Advice: Dial 811</div>
          <div>• Calgary Transit: calgarytransit.com</div>
        </div>
      </div>

      <div className="text-[10px] text-slate-500 text-center pt-4 border-t border-slate-300">
        Generated by Yassir&apos;s Calgary Relocation Command Center • Move with confidence.
      </div>
    </div>
  );
}
