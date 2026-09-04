-- ==============================================================================
-- NEXORA MOVE — MULTI-USER SAAS RELOCATION PLATFORM SCHEMA
-- MIGRATION: 20260903000001_multi_user_saas_schema.sql
-- TARGET: PostgreSQL 15+ / Supabase
-- SECURITY: STRICT ROW LEVEL SECURITY (RLS) ON ALL USER DATA TABLES
-- ==============================================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 1. USER PROFILES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    display_name TEXT,
    email TEXT NOT NULL,
    phone TEXT,
    origin_country TEXT NOT NULL,
    origin_city TEXT NOT NULL,
    target_province TEXT NOT NULL DEFAULT 'Alberta',
    target_city TEXT NOT NULL DEFAULT 'Calgary',
    immigration_status TEXT NOT NULL DEFAULT 'Permanent Resident',
    avatar_url TEXT,
    preferred_language TEXT NOT NULL DEFAULT 'en',
    preferred_currency TEXT NOT NULL DEFAULT 'CAD',
    onboarding_completed BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_profiles_user_id UNIQUE (user_id)
);

-- ------------------------------------------------------------------------------
-- 2. HOUSEHOLDS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.households (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    num_adults INT NOT NULL DEFAULT 2,
    num_children INT NOT NULL DEFAULT 0,
    expected_annual_income_cad NUMERIC(12, 2) NOT NULL DEFAULT 100000.00,
    initial_savings_cad NUMERIC(12, 2) NOT NULL DEFAULT 50000.00,
    pre_arrival_income_foreign NUMERIC(12, 2),
    foreign_income_currency TEXT DEFAULT 'SAR',
    foreign_income_cad_equivalent NUMERIC(12, 2),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_households_user_id UNIQUE (user_id)
);

-- ------------------------------------------------------------------------------
-- 3. FAMILY MEMBERS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.family_members (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    household_id UUID NOT NULL REFERENCES public.households(id) ON DELETE CASCADE,
    relationship TEXT NOT NULL, -- 'Primary', 'Spouse', 'Child'
    age INT NOT NULL,
    grade_level TEXT,
    school_type_preference TEXT DEFAULT 'Public',
    special_needs TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 4. RELOCATION SCENARIOS (Allows multiple move comparisons per user)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.relocation_scenarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    name TEXT NOT NULL, -- e.g., 'Calgary 4-Bed Suburban', 'Edmonton Prudent'
    target_province TEXT NOT NULL,
    target_city TEXT NOT NULL,
    housing_preference TEXT NOT NULL, -- '3-Bed Townhouse', '4-Bed Detached'
    monthly_rent_budget_cad NUMERIC(10, 2) NOT NULL,
    primary_transport_mode TEXT NOT NULL, -- 'Car', 'Transit', 'Both'
    vehicle_count INT NOT NULL DEFAULT 1,
    target_annual_income_cad NUMERIC(12, 2) NOT NULL,
    is_active_scenario BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 5. USER PRIORITIES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_priorities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    scenario_id UUID REFERENCES public.relocation_scenarios(id) ON DELETE CASCADE,
    housing_weight INT NOT NULL DEFAULT 20,
    jobs_weight INT NOT NULL DEFAULT 20,
    schools_weight INT NOT NULL DEFAULT 15,
    safety_weight INT NOT NULL DEFAULT 15,
    muslim_community_weight INT NOT NULL DEFAULT 10,
    transit_weight INT NOT NULL DEFAULT 5,
    taxes_weight INT NOT NULL DEFAULT 5,
    weather_weight INT NOT NULL DEFAULT 5,
    airport_connectivity_weight INT NOT NULL DEFAULT 5,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 6. CAREER PROFILES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.career_profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    target_noc_code TEXT NOT NULL,
    target_job_title TEXT NOT NULL,
    years_experience INT NOT NULL,
    expected_salary_min_cad NUMERIC(12, 2),
    expected_salary_target_cad NUMERIC(12, 2),
    professional_summary TEXT,
    arabic_professional_summary TEXT,
    ats_score INT DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_career_profiles_user_id UNIQUE (user_id)
);

-- ------------------------------------------------------------------------------
-- 7. EMPLOYMENT HISTORY
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.employment_history (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    job_title TEXT NOT NULL,
    employer TEXT NOT NULL,
    location TEXT NOT NULL,
    start_date TEXT NOT NULL,
    end_date TEXT,
    is_current BOOLEAN NOT NULL DEFAULT FALSE,
    achievements JSONB NOT NULL DEFAULT '[]'::jsonb,
    verification_status TEXT NOT NULL DEFAULT 'USER_ENTERED',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 8. EDUCATION
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.education (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    degree TEXT NOT NULL,
    institution TEXT NOT NULL,
    graduation_year TEXT NOT NULL,
    eca_status TEXT DEFAULT 'PENDING', -- 'WES Completed', 'In Progress', 'None'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 9. USER SKILLS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.skills (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    skill_name TEXT NOT NULL,
    category TEXT NOT NULL DEFAULT 'Technical', -- 'Technical', 'Management', 'Language'
    years_experience INT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 10. RESUME VERSIONS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.resume_versions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    version_name TEXT NOT NULL,
    target_role TEXT NOT NULL,
    resume_text TEXT NOT NULL,
    ats_readiness_score INT NOT NULL,
    storage_path TEXT, -- Private Supabase bucket path (RLS protected)
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 11. JOB TARGETS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.job_targets (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    target_title TEXT NOT NULL,
    salary_range_cad TEXT,
    location TEXT NOT NULL,
    match_score INT DEFAULT 85,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 12. JOB APPLICATIONS (Career CRM)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.job_applications (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    company_name TEXT NOT NULL,
    job_title TEXT NOT NULL,
    applied_date DATE NOT NULL DEFAULT CURRENT_DATE,
    stage TEXT NOT NULL DEFAULT 'Applied', -- 'Saved', 'Applied', 'Screening', 'Interview', 'Offer', 'Rejected'
    salary_offered_cad NUMERIC(12, 2),
    contact_name TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 13. SAVED CITIES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.saved_cities (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    city_name TEXT NOT NULL,
    province TEXT NOT NULL,
    personal_rank INT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 14. SAVED NEIGHBOURHOODS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.saved_neighbourhoods (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    neighbourhood_id TEXT NOT NULL,
    city TEXT NOT NULL DEFAULT 'Calgary',
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 15. SAVED BUSINESSES & LISTINGS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.saved_businesses (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    listing_or_business_id TEXT NOT NULL,
    category TEXT NOT NULL, -- 'Rental', 'Mosque', 'School', 'Bank', 'Halal'
    name TEXT NOT NULL,
    url TEXT,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 16. SETTLEMENT TASKS (Action Plan checklist persistence)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.settlement_tasks (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    task_key TEXT NOT NULL,
    phase TEXT NOT NULL, -- 'PRE_ARRIVAL', 'DAYS_1_3', 'DAYS_4_30', 'DAYS_31_90'
    title TEXT NOT NULL,
    is_completed BOOLEAN NOT NULL DEFAULT FALSE,
    completed_at TIMESTAMPTZ,
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_settlement_tasks_user_key UNIQUE (user_id, task_key)
);

-- ------------------------------------------------------------------------------
-- 17. BUDGET SCENARIOS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.budget_scenarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    scenario_tier TEXT NOT NULL, -- 'STARTING_CAREFULLY', 'COMFORTABLE', 'PREMIUM'
    housing_rent_cad NUMERIC(10, 2) NOT NULL,
    utilities_cad NUMERIC(10, 2) NOT NULL,
    groceries_cad NUMERIC(10, 2) NOT NULL,
    transport_cad NUMERIC(10, 2) NOT NULL,
    total_monthly_cad NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 18. BENEFIT SCENARIOS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.benefit_scenarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    basis_selected TEXT NOT NULL DEFAULT 'WORLDWIDE_YEAR1',
    assessed_income_cad NUMERIC(12, 2) NOT NULL,
    estimated_ccb_annual_cad NUMERIC(10, 2) NOT NULL,
    estimated_cgeb_annual_cad NUMERIC(10, 2) NOT NULL,
    estimated_acfb_annual_cad NUMERIC(10, 2) NOT NULL,
    total_cash_benefits_annual_cad NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 19. VEHICLE SCENARIOS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.vehicle_scenarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    vehicle_model TEXT NOT NULL,
    purchase_type TEXT NOT NULL DEFAULT 'USED_CASH',
    estimated_price_cad NUMERIC(10, 2) NOT NULL,
    monthly_insurance_cad NUMERIC(10, 2) NOT NULL,
    monthly_fuel_cad NUMERIC(10, 2) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 20. USER PREFERENCES
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_preferences (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    theme TEXT NOT NULL DEFAULT 'dark',
    locale TEXT NOT NULL DEFAULT 'en',
    currency TEXT NOT NULL DEFAULT 'CAD',
    notifications_enabled BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_user_preferences_user_id UNIQUE (user_id)
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES — ZERO CROSS-TENANT DATA LEAKAGE
-- ==============================================================================

-- Enable RLS on ALL 20 private tables
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.households ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.relocation_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_priorities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.employment_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.education ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.resume_versions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_targets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.job_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_neighbourhoods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.saved_businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settlement_tasks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.budget_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.benefit_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vehicle_scenarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_preferences ENABLE ROW LEVEL SECURITY;

-- Helper macro: Apply standard User-Ownership RLS Policy
DO $$
DECLARE
    tbl text;
    tables text[] := ARRAY[
        'profiles', 'households', 'family_members', 'relocation_scenarios',
        'user_priorities', 'career_profiles', 'employment_history', 'education',
        'skills', 'resume_versions', 'job_targets', 'job_applications',
        'saved_cities', 'saved_neighbourhoods', 'saved_businesses',
        'settlement_tasks', 'budget_scenarios', 'benefit_scenarios',
        'vehicle_scenarios', 'user_preferences'
    ];
BEGIN
    FOREACH tbl IN ARRAY tables LOOP
        -- SELECT Policy: Users can only see their own records
        EXECUTE format('
            CREATE POLICY "Users can select own %I" ON public.%I
            FOR SELECT USING (auth.uid() = user_id);
        ', tbl, tbl);

        -- INSERT Policy: Users can only insert records with their own user_id
        EXECUTE format('
            CREATE POLICY "Users can insert own %I" ON public.%I
            FOR INSERT WITH CHECK (auth.uid() = user_id);
        ', tbl, tbl);

        -- UPDATE Policy: Users can only update their own records
        EXECUTE format('
            CREATE POLICY "Users can update own %I" ON public.%I
            FOR UPDATE USING (auth.uid() = user_id) WITH CHECK (auth.uid() = user_id);
        ', tbl, tbl);

        -- DELETE Policy: Users can only delete their own records
        EXECUTE format('
            CREATE POLICY "Users can delete own %I" ON public.%I
            FOR DELETE USING (auth.uid() = user_id);
        ', tbl, tbl);
    END LOOP;
END $$;

-- ------------------------------------------------------------------------------
-- PERFORMANCE INDICES
-- ------------------------------------------------------------------------------
CREATE INDEX IF NOT EXISTS idx_profiles_user_id ON public.profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_households_user_id ON public.households(user_id);
CREATE INDEX IF NOT EXISTS idx_family_members_user_id ON public.family_members(user_id);
CREATE INDEX IF NOT EXISTS idx_relocation_scenarios_user_id ON public.relocation_scenarios(user_id);
CREATE INDEX IF NOT EXISTS idx_career_profiles_user_id ON public.career_profiles(user_id);
CREATE INDEX IF NOT EXISTS idx_employment_history_user_id ON public.employment_history(user_id);
CREATE INDEX IF NOT EXISTS idx_resume_versions_user_id ON public.resume_versions(user_id);
CREATE INDEX IF NOT EXISTS idx_job_applications_user_id ON public.job_applications(user_id);
CREATE INDEX IF NOT EXISTS idx_settlement_tasks_user_id ON public.settlement_tasks(user_id);
