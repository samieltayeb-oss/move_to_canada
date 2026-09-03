'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { FamilyProfile } from '@/data/types';
import { defaultFamilyProfile } from '@/data/familyProfile';
import { VerifiedSource } from '@/data/types';
import { verifiedSources } from '@/data/sources';
import { translations, TranslationDictionary } from '@/data/translations';

interface AppContextType {
  locale: 'en' | 'ar';
  setLocale: (lang: 'en' | 'ar') => void;
  isRtl: boolean;
  t: TranslationDictionary;
  currency: 'CAD' | 'SAR';
  setCurrency: (curr: 'CAD' | 'SAR') => void;
  sarRate: number; // 1 CAD = 2.70 SAR (Verified Google Finance & TD Exchange)
  formatCurrency: (amountCAD: number) => string;
  familyProfile: FamilyProfile;
  updateFamilyProfile: (newProfile: Partial<FamilyProfile>) => void;
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  checklistCompleted: Record<string, boolean>;
  toggleChecklistTask: (taskId: string) => void;
  activeSourceModal: VerifiedSource | null;
  openSourceModal: (sourceIdOrSource: string | VerifiedSource) => void;
  closeSourceModal: () => void;
  activeVideoId: string | null;
  openVideoModal: (videoId: string) => void;
  closeVideoModal: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<'en' | 'ar'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_locale') as 'en' | 'ar' | null;
        if (saved) return saved;
      } catch {}
    }
    return 'en';
  });

  const [currency, setCurrencyState] = useState<'CAD' | 'SAR'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_currency') as 'CAD' | 'SAR' | null;
        if (saved) return saved;
      } catch {}
    }
    return 'CAD';
  });

  const [familyProfile, setFamilyProfile] = useState<FamilyProfile>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_profile');
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return defaultFamilyProfile;
  });

  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_bookmarks');
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return [];
  });

  const [checklistCompleted, setChecklistCompleted] = useState<Record<string, boolean>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_checklist');
        if (saved) return JSON.parse(saved);
      } catch {}
    }
    return {};
  });

  const [activeSourceModal, setActiveSourceModal] = useState<VerifiedSource | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Verified Mid-Market & TD Benchmark Rate: 1 CAD = 2.70 SAR (2.700)
  const sarRate = 2.70;

  useEffect(() => {
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (lang: 'en' | 'ar') => {
    setLocaleState(lang);
    try {
      localStorage.setItem('move_to_canada_locale', lang);
    } catch {}
  };

  const setCurrency = (c: 'CAD' | 'SAR') => {
    setCurrencyState(c);
    try {
      localStorage.setItem('move_to_canada_currency', c);
    } catch {}
  };

  const updateFamilyProfile = (newProfile: Partial<FamilyProfile>) => {
    setFamilyProfile(prev => {
      const updated = { ...prev, ...newProfile };
      try {
        localStorage.setItem('move_to_canada_profile', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const exists = prev.includes(id);
      const updated = exists ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem('move_to_canada_bookmarks', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  const toggleChecklistTask = (taskId: string) => {
    setChecklistCompleted(prev => {
      const updated = { ...prev, [taskId]: !prev[taskId] };
      try {
        localStorage.setItem('move_to_canada_checklist', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const formatCurrency = (amountCAD: number): string => {
    if (currency === 'SAR') {
      const sarAmount = Math.round(amountCAD * sarRate);
      return `${sarAmount.toLocaleString()} SAR`;
    }
    return `$${amountCAD.toLocaleString()} CAD`;
  };

  const openSourceModal = (sourceIdOrSource: string | VerifiedSource) => {
    if (typeof sourceIdOrSource === 'string') {
      const src = verifiedSources[sourceIdOrSource];
      if (src) setActiveSourceModal(src);
    } else {
      setActiveSourceModal(sourceIdOrSource);
    }
  };

  const closeSourceModal = () => setActiveSourceModal(null);
  const openVideoModal = (videoId: string) => setActiveVideoId(videoId);
  const closeVideoModal = () => setActiveVideoId(null);

  const isRtl = locale === 'ar';
  const t = translations[locale];

  return (
    <AppContext.Provider
      value={{
        locale,
        setLocale,
        isRtl,
        t,
        currency,
        setCurrency,
        sarRate,
        formatCurrency,
        familyProfile,
        updateFamilyProfile,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        checklistCompleted,
        toggleChecklistTask,
        activeSourceModal,
        openSourceModal,
        closeSourceModal,
        activeVideoId,
        openVideoModal,
        closeVideoModal
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
