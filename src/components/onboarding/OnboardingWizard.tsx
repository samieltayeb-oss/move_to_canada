'use client';

/**
 * 9-STEP RELOCATION ONBOARDING WIZARD — NEXORA MOVE
 * 
 * Guides newly registered newcomers through step-by-step profile and relocation scenario generation.
 * Enforces strict multi-user privacy: no newcomer inherits Yassir's profile.
 */

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { 
  Compass, 
  MapPin, 
  Users, 
  FileCheck, 
  Briefcase, 
  Home, 
  Car, 
  Sliders, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft,
  CheckCircle
} from 'lucide-react';

interface OnboardingWizardProps {
  onComplete: () => void;
  onCancel?: () => void;
}

export function OnboardingWizard({ onComplete, onCancel }: OnboardingWizardProps) {
  const { createScenario, updateFamilyProfile } = useAuth();
  const { isRtl } = useApp();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 9;

  // Form State
  const [originCountry, setOriginCountry] = useState<string>('Saudi Arabia');
  const [originCity, setOriginCity] = useState<string>('Riyadh');
  const [targetProvince, setTargetProvince] = useState<'AB' | 'ON' | 'BC'>('AB');
  const [targetCity, setTargetCity] = useState<string>('Calgary');
  const [numAdults, setNumAdults] = useState<number>(2);
  const [numChildren, setNumChildren] = useState<number>(2);
  const [childAgesInput, setChildAgesInput] = useState<string>('8, 5');
  const [immigrationStatus, setImmigrationStatus] = useState<string>('Permanent Resident');
  const [profession, setProfession] = useState<string>('Financial Analyst');
  const [industry, setIndustry] = useState<string>('Banking & Financial Services');
  const [yearsExperience, setYearsExperience] = useState<number>(10);
  const [expectedSalaryCAD, setExpectedSalaryCAD] = useState<number>(110000);
  const [housingPreference, setHousingPreference] = useState<string>('Rent');
  const [bedrooms, setBedrooms] = useState<string>('3-Bed');
  const [monthlyRentBudget, setMonthlyRentBudget] = useState<number>(2400);
  const [transportationMode, setTransportationMode] = useState<string>('Both (Car + Transit)');
  const [vehicleCount, setVehicleCount] = useState<number>(1);
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([
    'Safe Neighbourhoods',
    'High-Ranking Schools',
    'Halal Groceries & Mosques',
    'Career Growth'
  ]);

  const togglePriority = (p: string) => {
    setSelectedPriorities(prev => 
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const handleFinish = () => {
    const parsedAges = childAgesInput
      .split(',')
      .map(x => parseInt(x.trim(), 10))
      .filter(n => !isNaN(n) && n >= 0 && n <= 18);

    // 1. Update family profile in state
    updateFamilyProfile({
      originCountry,
      originCity,
      targetProvince: targetProvince === 'AB' ? 'Alberta' : targetProvince === 'ON' ? 'Ontario' : 'British Columbia',
      targetCity,
      numAdults,
      numChildren,
      childrenAges: parsedAges,
      immigrationStatus: (immigrationStatus === 'Work Permit' ? 'Work Permit' : immigrationStatus === 'Study Permit' ? 'Study Permit' : 'Permanent Resident'),
      expectedAnnualHouseholdIncomeCAD: expectedSalaryCAD,
      housingPreference: (bedrooms === '4-Bed' ? '4-Bed' : '3-Bed'),
      vehicleCount
    });

    // 2. Create authoritative initial scenario
    createScenario({
      name: `${targetCity} ${bedrooms} Plan`,
      provinceCode: targetProvince,
      provinceName: targetProvince === 'AB' ? 'Alberta' : targetProvince === 'ON' ? 'Ontario' : 'British Columbia',
      cityName: targetCity,
      housingType: `${bedrooms} ${housingPreference === 'Rent' ? 'Rental' : 'Purchase'}`,
      monthlyRentBudgetCAD: monthlyRentBudget,
      vehicleCount,
      targetAnnualIncomeCAD: expectedSalaryCAD,
      isActive: true
    });

    onComplete();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        
        {/* Progress Header */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>{isRtl ? `الخطوة ${currentStep} من ${totalSteps}` : `STEP ${currentStep} OF ${totalSteps}`}</span>
            <span>{Math.round((currentStep / totalSteps) * 100)}% {isRtl ? 'مكتمل' : 'COMPLETE'}</span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: Origin */}
        {currentStep === 1 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Compass className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'من أين تبدأ رحلتك؟' : 'Where are you moving from?'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'بلد الإقامة الحالي يساعدنا في احتساب معادلة العملة ورخص القيادة' : 'Your current location helps us tailor currency conversion and driver licensing.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'دولة الإقامة الحالية' : 'Country'}
                </label>
                <input
                  type="text"
                  value={originCountry}
                  onChange={e => setOriginCountry(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none"
                  placeholder="e.g. Saudi Arabia, UAE, Qatar"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'المدينة' : 'City'}
                </label>
                <input
                  type="text"
                  value={originCity}
                  onChange={e => setOriginCity(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none"
                  placeholder="e.g. Riyadh, Jeddah, Dammam"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Destination */}
        {currentStep === 2 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'أين وجهتك المقترحة في كندا؟' : 'Where are you thinking of moving?'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'ألبرتا (كالغاري / إدمونتون) نشطة بالكامل في الإصدار الأول' : 'Alberta (Calgary/Edmonton) is fully verified for V1.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'المقاطعة المستهدفة' : 'Target Province'}
                </label>
                <select
                  value={targetProvince}
                  onChange={e => setTargetProvince(e.target.value as 'AB' | 'ON' | 'BC')}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-emerald-500 outline-none"
                >
                  <option value="AB">Alberta (Active V1 Release)</option>
                  <option value="ON" disabled>Ontario (Phase 2 Coming Soon)</option>
                  <option value="BC" disabled>British Columbia (Phase 2 Coming Soon)</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'المدينة' : 'Target City'}
                </label>
                <select
                  value={targetCity}
                  onChange={e => setTargetCity(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-emerald-500 outline-none"
                >
                  <option value="Calgary">Calgary</option>
                  <option value="Edmonton">Edmonton</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Household */}
        {currentStep === 3 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'تكوين الأسرة' : 'Household Configuration'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'أعمار الأطفال تحدد بدقة إعانات CCB وميزانية التموين اليومية' : 'Exact child ages dynamically calculate Canada Child Benefit (CCB) and food budgets.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'البالغين' : 'Adults (18+)'}
                </label>
                <input
                  type="number"
                  min={1}
                  max={4}
                  value={numAdults}
                  onChange={e => setNumAdults(parseInt(e.target.value, 10) || 1)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'الأطفال' : 'Children'}
                </label>
                <input
                  type="number"
                  min={0}
                  max={6}
                  value={numChildren}
                  onChange={e => setNumChildren(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-purple-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'أعمار الأطفال (مفصولة بفاصلة)' : 'Child Ages (comma-separated)'}
                </label>
                <input
                  type="text"
                  value={childAgesInput}
                  onChange={e => setChildAgesInput(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-purple-500 outline-none font-mono"
                  placeholder="e.g. 14, 9, 4"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Immigration Status */}
        {currentStep === 4 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'الوضع القانوني والهجرة' : 'Immigration Status'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'يحدد أحقية الرعاية الصحية AHCIP والخدمات الاستيطانية المجانية' : 'Dictates AHCIP healthcare eligibility and settlement service funding.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-2">
              {['Permanent Resident', 'Work Permit', 'Study Permit', 'Canadian Citizen', 'Planning / Express Entry'].map(status => (
                <button
                  key={status}
                  onClick={() => setImmigrationStatus(status)}
                  className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all ${
                    immigrationStatus === status
                      ? 'border-amber-500 bg-amber-950/30 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 5: Career */}
        {currentStep === 5 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'المجال المهني والراتب المستهدف' : 'Career & Target Salary'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'لمطابقة الوظائف في سوق كالغاري وحساب صافي الدخل الضريبي' : 'Aligns local employers and calculates net take-home cash flow.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'المسمى الوظيفي الحالي' : 'Current Profession / Title'}
                </label>
                <input
                  type="text"
                  value={profession}
                  onChange={e => setProfession(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none"
                  placeholder="e.g. Senior Project Manager"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'القطاع' : 'Industry'}
                </label>
                <input
                  type="text"
                  value={industry}
                  onChange={e => setIndustry(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none"
                  placeholder="e.g. Technology, Energy, Banking"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'سنوات الخبرة' : 'Years of Experience'}
                </label>
                <input
                  type="number"
                  min={1}
                  max={35}
                  value={yearsExperience}
                  onChange={e => setYearsExperience(parseInt(e.target.value, 10) || 1)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'الراتب الكندي المستهدف (CAD/سنة)' : 'Expected Annual Household Income (CAD)'}
                </label>
                <input
                  type="number"
                  step={5000}
                  value={expectedSalaryCAD}
                  onChange={e => setExpectedSalaryCAD(parseInt(e.target.value, 10) || 75000)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 6: Housing */}
        {currentStep === 6 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-400/30 flex items-center justify-center text-teal-400">
                <Home className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'تفضيلات السكن والميزانية' : 'Housing & Monthly Rent Budget'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'معايير إيجار كالغاري المحدثة لعام 2026' : 'Calgary 2026 softened rental market benchmarks.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'النوع' : 'Strategy'}
                </label>
                <select
                  value={housingPreference}
                  onChange={e => setHousingPreference(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-teal-500 outline-none"
                >
                  <option value="Rent">Rent Initially</option>
                  <option value="Buy">Buy After 1 Year</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'عدد الغرف' : 'Bedrooms'}
                </label>
                <select
                  value={bedrooms}
                  onChange={e => setBedrooms(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-teal-500 outline-none"
                >
                  <option value="2-Bed">2-Bed</option>
                  <option value="3-Bed">3-Bed</option>
                  <option value="4-Bed">4-Bed</option>
                  <option value="5-Bed">5-Bed Estate</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'الميزانية الشهرية (CAD)' : 'Monthly Budget (CAD)'}
                </label>
                <input
                  type="number"
                  step={100}
                  value={monthlyRentBudget}
                  onChange={e => setMonthlyRentBudget(parseInt(e.target.value, 10) || 2000)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-teal-500 outline-none font-mono"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 7: Transportation */}
        {currentStep === 7 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-400/30 flex items-center justify-center text-orange-400">
                <Car className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'وسائل النقل والمواصلات' : 'Transportation & Vehicles'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'تأمين السيارات الأجنبية وأسعار بنزين ألبرتا 144.9 سنت/لتر' : 'Factoring foreign licence auto insurance and StatsCan fuel.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'طريقة التنقل المفضلة' : 'Primary Commute Mode'}
                </label>
                <select
                  value={transportationMode}
                  onChange={e => setTransportationMode(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-orange-500 outline-none"
                >
                  <option value="Car Only">AWD Family SUV Only</option>
                  <option value="Both (Car + Transit)">Both (Car + Calgary Transit)</option>
                  <option value="Transit Only">Calgary Transit CTrain Only</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'عدد السيارات المخطط لها' : 'Vehicle Count'}
                </label>
                <input
                  type="number"
                  min={0}
                  max={3}
                  value={vehicleCount}
                  onChange={e => setVehicleCount(parseInt(e.target.value, 10) || 0)}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-orange-500 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 8: Priorities */}
        {currentStep === 8 && (
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-400/30 flex items-center justify-center text-pink-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  {isRtl ? 'أولويات الأسرة في الحي' : 'What matters most to your family?'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isRtl ? 'اختر العوامل المؤثرة لتخصيص درجات تقييم الأحياء والمدن' : 'Select key weights to dynamically score neighbourhoods.'}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              {[
                'Safe Neighbourhoods',
                'High-Ranking Schools',
                'Halal Groceries & Mosques',
                'Affordable Rent',
                'Short Commute to Downtown',
                'Parks & Recreation',
                'Proximity to CTrain',
                'Healthcare & Clinics'
              ].map(p => (
                <button
                  key={p}
                  onClick={() => togglePriority(p)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-left transition-all ${
                    selectedPriorities.includes(p)
                      ? 'border-pink-500 bg-pink-950/30 text-white'
                      : 'border-slate-800 bg-slate-950 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{p}</span>
                    {selectedPriorities.includes(p) && <CheckCircle className="w-3.5 h-3.5 text-pink-400" />}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 9: Generate Plan */}
        {currentStep === 9 && (
          <div className="space-y-6 text-center py-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-500 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-extrabold text-white">
                {isRtl ? 'جاهز لإنشاء خطة الانتقال المخصصة' : 'Ready to Generate Your Move Plan'}
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                {isRtl 
                  ? `قمنا بتهيئة نموذجك المالي لمدينة ${targetCity} لأسرة مكونة من ${numAdults + numChildren} أفراد، مع حساب مخصص للضرائب، والمدارس، وبدلات الأطفال.`
                  : `We have tailored your relocation scenario for ${targetCity} with ${numAdults + numChildren} household members, dynamic CCB modeling, and customized budget allocations.`}
              </p>
            </div>

            <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 text-left text-xs font-mono space-y-1.5 max-w-md mx-auto">
              <div className="flex justify-between text-slate-400">
                <span>Destination:</span>
                <span className="text-white font-semibold">{targetCity}, {targetProvince}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Household:</span>
                <span className="text-white font-semibold">{numAdults} Adults, {numChildren} Children</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Target Salary:</span>
                <span className="text-emerald-400 font-semibold">${expectedSalaryCAD.toLocaleString()} CAD / yr</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Housing Target:</span>
                <span className="text-sky-400 font-semibold">{bedrooms} (${monthlyRentBudget}/mo)</span>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          {currentStep > 1 ? (
            <button
              onClick={() => setCurrentStep(prev => Math.max(1, prev - 1))}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-950 border border-slate-800 text-slate-300 hover:text-white"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{isRtl ? 'السابق' : 'Back'}</span>
            </button>
          ) : (
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-500 hover:text-slate-300"
            >
              {isRtl ? 'إلغاء' : 'Cancel'}
            </button>
          )}

          {currentStep < totalSteps ? (
            <button
              onClick={() => setCurrentStep(prev => Math.min(totalSteps, prev + 1))}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30"
            >
              <span>{isRtl ? 'التالي' : 'Continue'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleFinish}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white shadow-xl shadow-emerald-600/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isRtl ? 'إنشاء لوحة التحكم الخاصة بي' : 'Generate My Move Plan'}</span>
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
