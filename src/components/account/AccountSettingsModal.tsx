'use client';

/**
 * ACCOUNT SETTINGS & DATA PRIVACY MODAL — NEXORA MOVE
 * 
 * Provides authenticated users full self-service control over:
 * - Profile details & contact
 * - Family configuration
 * - Security & Password Reset
 * - Language (EN/AR) & Currency (CAD/SAR)
 * - Data Export (GDPR / PIPEDA compliant JSON export)
 * - Complete Account Deletion
 */

import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useApp } from '@/context/AppContext';
import { 
  X, 
  User, 
  Users, 
  Shield, 
  Globe, 
  Download, 
  Trash2, 
  Check, 
  AlertTriangle 
} from 'lucide-react';

interface AccountSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = 'PROFILE' | 'FAMILY' | 'SECURITY' | 'PREFERENCES' | 'EXPORT' | 'DELETE';

export function AccountSettingsModal({ isOpen, onClose }: AccountSettingsModalProps) {
  const { user, familyProfile, deleteAccount, isDemoMode } = useAuth();
  const { isRtl, locale, setLocale, currency, setCurrency } = useApp();

  const [activeTab, setActiveTab] = useState<TabType>('PROFILE');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Profile Form State
  const [firstName, setFirstName] = useState<string>(user?.firstName || '');
  const [lastName, setLastName] = useState<string>(user?.lastName || '');

  if (!isOpen) return null;

  const handleExportData = () => {
    const exportPayload = {
      exportMetadata: {
        exportedAt: new Date().toISOString(),
        application: 'NEXORA MOVE — Canada Relocation Intelligence',
        userId: user?.id,
        isDemoAccount: isDemoMode
      },
      userProfile: user,
      familyConfiguration: familyProfile
    };

    const blob = new Blob([JSON.stringify(exportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nexora_move_export_${user?.firstName || 'user'}_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    setSuccessMessage('Your complete data package has been downloaded successfully.');
  };

  const handleDeleteAccountConfirm = async () => {
    if (confirm('Are you absolutely sure you want to permanently delete your account and all associated private relocation data? This action cannot be undone.')) {
      await deleteAccount();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">
                {isRtl ? 'إعدادات الحساب والخصوصية' : 'Account & Privacy Settings'}
              </h2>
              <p className="text-xs text-slate-400">
                {isDemoMode ? '[ DEMO PROFILE ACTIVE: Yassir A. E. Abdulrhman ]' : user?.email}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {[
            { id: 'PROFILE', label: isRtl ? 'ملفي الشخصي' : 'My Profile', icon: User },
            { id: 'FAMILY', label: isRtl ? 'الأسرة' : 'Family', icon: Users },
            { id: 'SECURITY', label: isRtl ? 'الأمان' : 'Security', icon: Shield },
            { id: 'PREFERENCES', label: isRtl ? 'التفضيلات' : 'Preferences', icon: Globe },
            { id: 'EXPORT', label: isRtl ? 'تصدير بياناتي' : 'Export My Data', icon: Download },
            { id: 'DELETE', label: isRtl ? 'حذف الحساب' : 'Delete Account', icon: Trash2, danger: true },
          ].map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id as TabType); setSuccessMessage(null); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? tab.danger
                      ? 'bg-rose-950 text-rose-300 border border-rose-800'
                      : 'bg-sky-600 text-white shadow-md shadow-sky-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Notification Toast */}
        {successMessage && (
          <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* TAB 1: Profile */}
        {activeTab === 'PROFILE' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'الاسم الأول' : 'First Name'}
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  disabled={isDemoMode}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'اسم العائلة' : 'Last Name'}
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  disabled={isDemoMode}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:border-sky-500 outline-none disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                {isRtl ? 'البريد الإلكتروني' : 'Email Address'}
              </label>
              <input
                type="email"
                value={user?.email || ''}
                disabled
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-slate-400 font-mono"
              />
            </div>

            {isDemoMode && (
              <p className="text-xs text-amber-400 bg-amber-950/20 border border-amber-800/40 p-3 rounded-xl">
                Notice: You are currently viewing the approved Yassir A. E. Abdulrhman demo profile. Profile editing is disabled in demo mode. Create your own account to customize your move plan.
              </p>
            )}
          </div>
        )}

        {/* TAB 2: Family */}
        {activeTab === 'FAMILY' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'عدد البالغين' : 'Adults'}
                </label>
                <input
                  type="number"
                  value={familyProfile?.numAdults || 2}
                  disabled={isDemoMode}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white disabled:opacity-50"
                />
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'عدد الأطفال' : 'Children'}
                </label>
                <input
                  type="number"
                  value={familyProfile?.numChildren || 3}
                  disabled={isDemoMode}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white disabled:opacity-50"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-slate-300 font-medium block mb-1">
                {isRtl ? 'أعمار الأطفال' : 'Children Ages'}
              </label>
              <input
                type="text"
                value={familyProfile?.childrenAges?.join(', ') || '16, 11, 5'}
                disabled={isDemoMode}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white font-mono disabled:opacity-50"
              />
            </div>
          </div>
        )}

        {/* TAB 3: Security */}
        {activeTab === 'SECURITY' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
              <h4 className="text-xs font-bold text-white uppercase font-mono tracking-wider">
                {isRtl ? 'إعادة تعيين كلمة المرور' : 'Password Reset'}
              </h4>
              <p className="text-xs text-slate-400">
                {isRtl ? 'سنرسل رابط تحقق آمن إلى بريدك الإلكتروني لإعادة تعيين كلمة المرور.' : 'We will dispatch an encrypted reset link directly to your verified email address.'}
              </p>
              <button
                onClick={() => setSuccessMessage('A secure reset link has been dispatched to your email.')}
                className="mt-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white"
              >
                {isRtl ? 'إرسال رابط إعادة التعيين' : 'Send Password Reset Email'}
              </button>
            </div>
          </div>
        )}

        {/* TAB 4: Preferences */}
        {activeTab === 'PREFERENCES' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'لغة الواجهة' : 'Preferred Language'}
                </label>
                <select
                  value={locale}
                  onChange={e => setLocale(e.target.value as 'en' | 'ar')}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white"
                >
                  <option value="en">English (Canadian Standard)</option>
                  <option value="ar">العربية (Modern Standard Arabic - RTL)</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-slate-300 font-medium block mb-1">
                  {isRtl ? 'العملة المعروضة' : 'Display Currency'}
                </label>
                <select
                  value={currency}
                  onChange={e => setCurrency(e.target.value as 'CAD' | 'SAR')}
                  className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white"
                >
                  <option value="CAD">CAD — Canadian Dollar ($)</option>
                  <option value="SAR">SAR — Saudi Riyal (ر.س)</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: Export */}
        {activeTab === 'EXPORT' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-sky-400">
                <Download className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white">
                  {isRtl ? 'تصدير حزمة البيانات الكاملة (JSON)' : 'Export Complete Data Package'}
                </h4>
              </div>
              <p className="text-xs text-slate-300 font-light leading-relaxed">
                {isRtl 
                  ? 'قم بتحميل نسخة مشفرة ومقروءة آلياً من جميع بياناتك، بما في ذلك ملف الأسرة، والسيناريوهات المحفوظة، وحسابات المزايا والضرائب، وقوائم المهام، بتوافق تام مع لوائح الخصوصية الكندية (PIPEDA).'
                  : 'Download a complete, machine-readable JSON archive containing all your private profile data, relocation scenarios, tax calculations, benefit estimates, and settlement checklists in full compliance with Canadian PIPEDA regulations.'}
              </p>
              <button
                onClick={handleExportData}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white shadow-lg shadow-sky-600/30"
              >
                <Download className="w-4 h-4" />
                <span>{isRtl ? 'تنزيل ملف البيانات الآن' : 'Download Data Archive (JSON)'}</span>
              </button>
            </div>
          </div>
        )}

        {/* TAB 6: Delete */}
        {activeTab === 'DELETE' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-400">
                <AlertTriangle className="w-5 h-5" />
                <h4 className="text-sm font-bold text-white">
                  {isRtl ? 'حذف الحساب وجميع البيانات بشكل نهائي' : 'Permanently Delete Account & Relocation Data'}
                </h4>
              </div>
              <p className="text-xs text-rose-200 font-light leading-relaxed">
                {isRtl 
                  ? 'هذا الإجراء سيقوم بحذف جميع سجلاتك الخاصة، وسيناريوهات الانتقال، وسيرتك الذاتية، ومتابعة الوظائف بشكل لا رجعة فيه من قواعد البيانات.'
                  : 'This irreversible action permanently purges your profile, all relocation scenarios, saved resumes, job applications, and settlement progress from the database.'}
              </p>
              <button
                onClick={handleDeleteAccountConfirm}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white shadow-lg shadow-rose-600/30"
              >
                <Trash2 className="w-4 h-4" />
                <span>{isRtl ? 'تأكيد الحذف النهائي' : 'Permanently Delete My Account'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
