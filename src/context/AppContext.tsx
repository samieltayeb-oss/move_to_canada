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
  sarRate: number; // 1 CAD = 2.7204 SAR (Google Finance Live Snapshot)
  formatCurrency: (amountCAD: number) => string;
  familyProfile: FamilyProfile;
  updateFamilyProfile: (newProfile: Partial<FamilyProfile>) => void;
  activeCountry: 'CA';
  activeProvince: 'AB' | 'ON' | 'BC';
  setActiveProvince: (p: 'AB' | 'ON' | 'BC') => void;
  activeCity: string;
  setActiveCity: (c: string) => void;
  availableCities: { id: string; name: string; arabicName: string }[];
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
        localStorage.removeItem('move_to_canada_profile'); // purge old v1 cache with [11, 8, 4]
        const saved = localStorage.getItem('move_to_canada_profile_v2');
        if (saved) {
          const parsed = JSON.parse(saved);
          return { ...defaultFamilyProfile, ...parsed, childrenAges: [16, 11, 5] };
        }
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

  const PROVINCE_CITIES: Record<'AB' | 'ON' | 'BC', { id: string; name: string; arabicName: string }[]> = {
    AB: [
      { id: 'calgary', name: 'Calgary', arabicName: 'كالغاري' },
      { id: 'edmonton', name: 'Edmonton', arabicName: 'إدمونتون' }
    ],
    ON: [
      { id: 'toronto', name: 'Toronto', arabicName: 'تورونتو' },
      { id: 'ottawa', name: 'Ottawa', arabicName: 'أوتاوا' },
      { id: 'mississauga', name: 'Mississauga', arabicName: 'ميسيساغا' },
      { id: 'brampton', name: 'Brampton', arabicName: 'برامبتون' },
      { id: 'hamilton', name: 'Hamilton', arabicName: 'هاميلتون' },
      { id: 'kitchener', name: 'Kitchener-Waterloo', arabicName: 'كيتشنر ووترلو' }
    ],
    BC: [
      { id: 'vancouver', name: 'Vancouver', arabicName: 'فانكوفر' },
      { id: 'burnaby', name: 'Burnaby', arabicName: 'بيرنابي' },
      { id: 'surrey', name: 'Surrey', arabicName: 'سري' },
      { id: 'richmond', name: 'Richmond', arabicName: 'ريتشموند' },
      { id: 'coquitlam', name: 'Coquitlam', arabicName: 'كوكيتلام' },
      { id: 'victoria', name: 'Victoria', arabicName: 'فيكتوريا' }
    ]
  };

  const [activeProvince, setActiveProvinceState] = useState<'AB' | 'ON' | 'BC'>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_active_province') as 'AB' | 'ON' | 'BC' | null;
        if (saved && (saved === 'AB' || saved === 'ON' || saved === 'BC')) return saved;
      } catch {}
    }
    return 'AB';
  });

  const [activeCity, setActiveCityState] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('move_to_canada_active_city');
        if (saved) return saved;
      } catch {}
    }
    return 'calgary';
  });

  const setActiveProvince = (p: 'AB' | 'ON' | 'BC') => {
    setActiveProvinceState(p);
    const defaultCity = PROVINCE_CITIES[p][0].id;
    setActiveCityState(defaultCity);
    try {
      localStorage.setItem('move_to_canada_active_province', p);
      localStorage.setItem('move_to_canada_active_city', defaultCity);
    } catch {}
  };

  const setActiveCity = (c: string) => {
    setActiveCityState(c);
    try {
      localStorage.setItem('move_to_canada_active_city', c);
    } catch {}
  };

  const availableCities = PROVINCE_CITIES[activeProvince] || PROVINCE_CITIES.AB;

  const [activeSourceModal, setActiveSourceModal] = useState<VerifiedSource | null>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  // Google Finance Live Snapshot: 1 CAD = 2.7204 SAR (Updated Sep 3, 2026)
  const sarRate = 2.7204;

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
        localStorage.setItem('move_to_canada_profile_v2', JSON.stringify(updated));
        localStorage.removeItem('move_to_canada_profile');
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
        activeCountry: 'CA',
        activeProvince,
        setActiveProvince,
        activeCity,
        setActiveCity,
        availableCities,
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
