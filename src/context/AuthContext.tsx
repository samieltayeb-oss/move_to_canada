'use client';

/**
 * AUTHENTICATION & MULTI-USER SESSION CONTEXT — NEXORA MOVE
 * 
 * Provides production-ready authentication, Row-Level-Security aware session handling,
 * multi-scenario management, and an isolated Demo Mode based on Yassir's approved baseline.
 */

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getSupabaseClient, isSupabaseConfigured } from '@/lib/supabase/client';
import { 
  YASSIR_BASELINE_FAMILY_PROFILE, 
  YASSIR_BASELINE_CAREER_PROFILE, 
  YASSIR_BASELINE_WORK_EXPERIENCE 
} from '@/data/demo/yassirBaseline';
import { FamilyProfile } from '@/data/types';
import { VerifiedProfessionalProfile, UserCareerExperience } from '@/data/careerEngine';

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName: string;
  isDemo: boolean;
}

export interface RelocationScenario {
  id: string;
  userId: string;
  name: string;
  provinceCode: 'AB' | 'ON' | 'BC';
  provinceName: string;
  cityName: string;
  housingType: string;
  monthlyRentBudgetCAD: number;
  vehicleCount: number;
  targetAnnualIncomeCAD: number;
  isActive: boolean;
  createdAt: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  familyProfile: FamilyProfile | null;
  careerProfile: VerifiedProfessionalProfile | null;
  workExperience: UserCareerExperience[];
  scenarios: RelocationScenario[];
  activeScenario: RelocationScenario | null;
  isAuthenticated: boolean;
  isDemoMode: boolean;
  isLoading: boolean;
  
  // Auth Operations
  signUp: (email: string, password: string, firstName: string, lastName: string) => Promise<{ error: string | null }>;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  
  // Demo Mode Operations
  enterDemoMode: () => void;
  exitDemoMode: () => void;
  
  // Scenario & Profile Management
  updateFamilyProfile: (profile: Partial<FamilyProfile>) => void;
  createScenario: (scenario: Omit<RelocationScenario, 'id' | 'userId' | 'createdAt'>) => void;
  setActiveScenarioId: (scenarioId: string) => void;
  deleteAccount: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const YASSIR_DEMO_USER: AuthUser = {
  id: '00000000-0000-0000-0000-000000000001',
  email: 'yassir.demo@nexoramove.ca',
  firstName: 'Yassir',
  lastName: 'A. E. Abdulrhman',
  displayName: 'Yassir A. E. Abdulrhman',
  isDemo: true
};

const YASSIR_DEFAULT_SCENARIO: RelocationScenario = {
  id: 'scen-yassir-calgary-default',
  userId: YASSIR_DEMO_USER.id,
  name: 'Calgary 4-Bed Detached Baseline',
  provinceCode: 'AB',
  provinceName: 'Alberta',
  cityName: 'Calgary',
  housingType: '4-Bed Detached House',
  monthlyRentBudgetCAD: 2600,
  vehicleCount: 1,
  targetAnnualIncomeCAD: 125000,
  isActive: true,
  createdAt: '2026-09-03T12:00:00.000Z'
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.user && !parsed.isDemo) return parsed.user;
          if (parsed.isDemo) return YASSIR_DEMO_USER;
        }
      } catch {}
    }
    return null; // Production Security: Default to unauthenticated guest (Fail closed)
  });

  const [isDemoMode, setIsDemoMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          return Boolean(parsed.isDemo);
        }
      } catch {}
    }
    return false; // Demo Mode must ONLY activate through explicit user action
  });

  const [isLoading] = useState<boolean>(false);
  const [familyProfile, setFamilyProfile] = useState<FamilyProfile | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.isDemo) return YASSIR_BASELINE_FAMILY_PROFILE;
          if (parsed.familyProfile) return parsed.familyProfile;
        }
      } catch {}
    }
    return null;
  });

  const [careerProfile, setCareerProfile] = useState<VerifiedProfessionalProfile | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.isDemo) return YASSIR_BASELINE_CAREER_PROFILE;
        }
      } catch {}
    }
    return null;
  });

  const [workExperience, setWorkExperience] = useState<UserCareerExperience[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.isDemo) return YASSIR_BASELINE_WORK_EXPERIENCE;
        }
      } catch {}
    }
    return [];
  });

  const [scenarios, setScenarios] = useState<RelocationScenario[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.isDemo) return [YASSIR_DEFAULT_SCENARIO];
          if (parsed.scenarios) return parsed.scenarios;
        }
      } catch {}
    }
    return [];
  });

  const [activeScenario, setActiveScenario] = useState<RelocationScenario | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const storedSession = localStorage.getItem('nexora_active_session_v1');
        if (storedSession) {
          const parsed = JSON.parse(storedSession);
          if (parsed.isDemo) return YASSIR_DEFAULT_SCENARIO;
          if (parsed.activeScenario) return parsed.activeScenario;
        }
      } catch {}
    }
    return null;
  });

  // Enter Demo Mode (Yassir's approved baseline — strictly explicit action)
  const enterDemoMode = () => {
    setUser(YASSIR_DEMO_USER);
    setIsDemoMode(true);
    setFamilyProfile(YASSIR_BASELINE_FAMILY_PROFILE);
    setCareerProfile(YASSIR_BASELINE_CAREER_PROFILE);
    setWorkExperience(YASSIR_BASELINE_WORK_EXPERIENCE);
    setScenarios([YASSIR_DEFAULT_SCENARIO]);
    setActiveScenario(YASSIR_DEFAULT_SCENARIO);
    
    if (typeof window !== 'undefined') {
      localStorage.setItem('nexora_active_session_v1', JSON.stringify({ isDemo: true }));
    }
  };

  // Exit Demo Mode (Clears demo data completely)
  const exitDemoMode = () => {
    setUser(null);
    setIsDemoMode(false);
    setFamilyProfile(null);
    setCareerProfile(null);
    setWorkExperience([]);
    setScenarios([]);
    setActiveScenario(null);

    if (typeof window !== 'undefined') {
      localStorage.removeItem('nexora_active_session_v1');
    }
  };

  // Real User Registration
  const signUp = async (email: string, password: string, firstName: string, lastName: string): Promise<{ error: string | null }> => {
    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { first_name: firstName, last_name: lastName }
          }
        });
        if (error) return { error: error.message };
        if (data.user) {
          const newUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || email,
            firstName,
            lastName,
            displayName: `${firstName} ${lastName}`.trim(),
            isDemo: false
          };
          setUser(newUser);
          setIsDemoMode(false);
          // Initialize pristine empty profile for new user
          const pristineProfile: FamilyProfile = {
            headOfHousehold: `${firstName} ${lastName}`,
            originCity: '',
            originCountry: '',
            targetCity: 'Calgary',
            targetProvince: 'Alberta',
            numAdults: 1,
            numChildren: 0,
            childrenAges: [],
            immigrationStatus: 'Permanent Resident',
            expectedAnnualHouseholdIncomeCAD: 85000,
            initialSavingsCAD: 30000,
            housingPreference: '3-Bed',
            propertyTypePreference: 'Apartment',
            vehicleCount: 0,
            preferredCommuteMins: 30,
            islamicSchoolPreference: false,
            publicSchoolPreference: true,
            communityPriorities: ['Jobs', 'Housing', 'Schools', 'Safety']
          };
          setFamilyProfile(pristineProfile);
          setCareerProfile(null);
          setWorkExperience([]);
          setScenarios([]);
          setActiveScenario(null);
          return { error: null };
        }
      }

      // PRODUCTION SECURITY: Fail Closed
      // In production, unconfigured Supabase must NEVER silently create a local session or fall back to demo mode!
      if (process.env.NODE_ENV === 'production') {
        return { 
          error: 'Production Security Gate: Supabase connection is not configured on this deployment. For data privacy, private accounts fail closed and never fall back to local or demo mode.' 
        };
      }

      // Simulated local auth for offline / dev preview ONLY
      const localUserId = `user_${Date.now()}`;
      const newUser: AuthUser = {
        id: localUserId,
        email,
        firstName,
        lastName,
        displayName: `${firstName} ${lastName}`.trim(),
        isDemo: false
      };
      setUser(newUser);
      setIsDemoMode(false);
      const pristineProfile: FamilyProfile = {
        headOfHousehold: `${firstName} ${lastName}`,
        originCity: '',
        originCountry: '',
        targetCity: 'Calgary',
        targetProvince: 'Alberta',
        numAdults: 2,
        numChildren: 0,
        childrenAges: [],
        immigrationStatus: 'Permanent Resident',
        expectedAnnualHouseholdIncomeCAD: 95000,
        initialSavingsCAD: 40000,
        housingPreference: '3-Bed',
        propertyTypePreference: 'Townhouse',
        vehicleCount: 1,
        preferredCommuteMins: 30,
        islamicSchoolPreference: false,
        publicSchoolPreference: true,
        communityPriorities: ['Jobs', 'Housing', 'Schools', 'Safety']
      };
      setFamilyProfile(pristineProfile);
      setCareerProfile(null);
      setWorkExperience([]);
      
      const defaultScenario: RelocationScenario = {
        id: `scen_${Date.now()}`,
        userId: localUserId,
        name: 'My Relocation Plan',
        provinceCode: 'AB',
        provinceName: 'Alberta',
        cityName: 'Calgary',
        housingType: '3-Bed Townhouse',
        monthlyRentBudgetCAD: 2300,
        vehicleCount: 1,
        targetAnnualIncomeCAD: 95000,
        isActive: true,
        createdAt: new Date().toISOString()
      };
      setScenarios([defaultScenario]);
      setActiveScenario(defaultScenario);

      if (typeof window !== 'undefined') {
        localStorage.setItem('nexora_active_session_v1', JSON.stringify({
          isDemo: false,
          user: newUser,
          familyProfile: pristineProfile,
          scenarios: [defaultScenario],
          activeScenario: defaultScenario
        }));
      }

      return { error: null };
    } catch (err: unknown) {
      return { error: err instanceof Error ? err.message : 'Registration failed' };
    }
  };

  // Real User Sign In
  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    try {
      if (isSupabaseConfigured()) {
        const supabase = getSupabaseClient();
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) return { error: error.message };
        if (data.user) {
          const authUser: AuthUser = {
            id: data.user.id,
            email: data.user.email || email,
            firstName: data.user.user_metadata?.first_name || 'User',
            lastName: data.user.user_metadata?.last_name || '',
            displayName: data.user.user_metadata?.first_name || email,
            isDemo: false
          };
          setUser(authUser);
          setIsDemoMode(false);
          return { error: null };
        }
      }

      // PRODUCTION SECURITY: Fail Closed
      if (process.env.NODE_ENV === 'production') {
        return { 
          error: 'Production Security Gate: Supabase connection is not configured on this deployment. Private sign-in fails closed.' 
        };
      }

      // Simulated local sign in for dev preview ONLY
      const authUser: AuthUser = {
        id: `user_registered_${email.replace(/[^a-zA-Z0-9]/g, '_')}`,
        email,
        firstName: email.split('@')[0],
        lastName: '',
        displayName: email.split('@')[0],
        isDemo: false
      };
      setUser(authUser);
      setIsDemoMode(false);
      return { error: null };
    } catch (err: unknown) {
      return { error: err instanceof Error ? err.message : 'Sign in failed' };
    }
  };

  // Sign Out
  const signOut = async () => {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseClient();
      await supabase.auth.signOut();
    }
    exitDemoMode();
  };

  // Reset Password
  const resetPassword = async (email: string): Promise<{ error: string | null }> => {
    if (isSupabaseConfigured()) {
      const supabase = getSupabaseClient();
      const { error } = await supabase.auth.resetPasswordForEmail(email);
      return { error: error ? error.message : null };
    }
    return { error: null };
  };

  // Update Family Profile
  const updateFamilyProfile = (updates: Partial<FamilyProfile>) => {
    setFamilyProfile(prev => {
      if (!prev) return null;
      const updated = { ...prev, ...updates };
      if (typeof window !== 'undefined' && !isDemoMode) {
        const session = localStorage.getItem('nexora_active_session_v1');
        if (session) {
          const parsed = JSON.parse(session);
          parsed.familyProfile = updated;
          localStorage.setItem('nexora_active_session_v1', JSON.stringify(parsed));
        }
      }
      return updated;
    });
  };

  // Create Scenario
  const createScenario = (newScenarioData: Omit<RelocationScenario, 'id' | 'userId' | 'createdAt'>) => {
    const newScenario: RelocationScenario = {
      ...newScenarioData,
      id: `scen_${Date.now()}`,
      userId: user?.id || 'anonymous',
      createdAt: new Date().toISOString()
    };
    setScenarios(prev => [...prev, newScenario]);
    if (newScenario.isActive) {
      setActiveScenario(newScenario);
    }
  };

  // Set Active Scenario ID
  const setActiveScenarioId = (scenarioId: string) => {
    setScenarios(prev => prev.map(s => ({
      ...s,
      isActive: s.id === scenarioId
    })));
    const found = scenarios.find(s => s.id === scenarioId);
    if (found) {
      setActiveScenario(found);
    }
  };

  // Delete Account
  const deleteAccount = async () => {
    if (isSupabaseConfigured() && user && !user.isDemo) {
      const supabase = getSupabaseClient();
      // Supabase user deletion via RPC or cascade
      await supabase.from('profiles').delete().eq('user_id', user.id);
      await supabase.auth.signOut();
    }
    exitDemoMode();
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        familyProfile,
        careerProfile,
        workExperience,
        scenarios,
        activeScenario,
        isAuthenticated: Boolean(user),
        isDemoMode,
        isLoading,
        signUp,
        signIn,
        signOut,
        resetPassword,
        enterDemoMode,
        exitDemoMode,
        updateFamilyProfile,
        createScenario,
        setActiveScenarioId,
        deleteAccount
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
