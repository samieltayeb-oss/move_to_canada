-- ==============================================================================
-- NEXORA MOVE — COMMERCIAL, ENTITLEMENTS & PAYMENT IDEMPOTENCY SCHEMA
-- MIGRATION: 20260903000002_commercial_entitlements_schema.sql
-- TARGET: PostgreSQL 15+ / Supabase
-- SECURITY: STRICT ROW LEVEL SECURITY (RLS) & SERVICE-ROLE WRITES ONLY
-- ==============================================================================

-- ------------------------------------------------------------------------------
-- 1. DURABLE WEBHOOK IDEMPOTENCY STORE
-- Survives serverless cold starts, multi-instance concurrency, and process reboots
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.payment_events (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stripe_event_id TEXT NOT NULL,
    event_type TEXT NOT NULL,
    payment_environment TEXT NOT NULL DEFAULT 'TEST', -- 'TEST' or 'LIVE'
    payload JSONB,
    processed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    CONSTRAINT uq_payment_events_stripe_id UNIQUE (stripe_event_id)
);

ALTER TABLE public.payment_events ENABLE ROW LEVEL SECURITY;

-- Deny all normal user access to payment_events (Server/Service-role only)
CREATE POLICY "No public read on payment events"
    ON public.payment_events FOR SELECT
    USING (FALSE);

CREATE POLICY "No public write on payment events"
    ON public.payment_events FOR INSERT
    WITH CHECK (FALSE);

-- ------------------------------------------------------------------------------
-- 2. USER ENTITLEMENTS (AUTHORITATIVE DURABLE STORE)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.user_entitlements (
    user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_id TEXT NOT NULL DEFAULT 'FREE', -- 'FREE', 'MOVE_PASS', 'PRO_MONTHLY', 'CONCIERGE'
    is_move_pass_purchased BOOLEAN NOT NULL DEFAULT FALSE,
    is_pro_subscribed BOOLEAN NOT NULL DEFAULT FALSE,
    pro_expires_at TIMESTAMPTZ,
    is_concierge_customer BOOLEAN NOT NULL DEFAULT FALSE,
    is_founding_member BOOLEAN NOT NULL DEFAULT FALSE,
    granted_by_admin BOOLEAN NOT NULL DEFAULT FALSE,
    admin_grant_reason TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.user_entitlements ENABLE ROW LEVEL SECURITY;

-- Normal users can ONLY READ their own entitlement
CREATE POLICY "Users can read own entitlement"
    ON public.user_entitlements FOR SELECT
    USING (auth.uid() = user_id);

-- Normal users CANNOT INSERT or UPDATE their own entitlement (Blocks tampering)
CREATE POLICY "No direct client inserts on user_entitlements"
    ON public.user_entitlements FOR INSERT
    WITH CHECK (FALSE);

CREATE POLICY "No direct client updates on user_entitlements"
    ON public.user_entitlements FOR UPDATE
    USING (FALSE);

CREATE POLICY "No direct client deletes on user_entitlements"
    ON public.user_entitlements FOR DELETE
    USING (FALSE);

-- ------------------------------------------------------------------------------
-- 3. PURCHASES (ONE-TIME TRANSACTIONS)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.purchases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    plan_id TEXT NOT NULL,
    amount_cad NUMERIC(10, 2) NOT NULL,
    currency TEXT NOT NULL DEFAULT 'CAD',
    payment_environment TEXT NOT NULL DEFAULT 'TEST', -- 'TEST' or 'LIVE'
    stripe_session_id TEXT UNIQUE,
    stripe_payment_intent_id TEXT,
    status TEXT NOT NULL DEFAULT 'PAID', -- 'PAID', 'REFUNDED', 'FAILED'
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.purchases ENABLE ROW LEVEL SECURITY;

-- Users can only read their own verified purchases
CREATE POLICY "Users can view own purchases"
    ON public.purchases FOR SELECT
    USING (auth.uid() = user_id);

-- Client cannot insert or tamper with purchase records
CREATE POLICY "No direct client inserts on purchases"
    ON public.purchases FOR INSERT
    WITH CHECK (FALSE);

CREATE POLICY "No direct client updates on purchases"
    ON public.purchases FOR UPDATE
    USING (FALSE);

-- ------------------------------------------------------------------------------
-- 4. SUBSCRIPTIONS (RECURRING PRO LIFECYCLE)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    stripe_customer_id TEXT NOT NULL,
    stripe_subscription_id TEXT NOT NULL UNIQUE,
    plan_id TEXT NOT NULL DEFAULT 'PRO_MONTHLY',
    payment_environment TEXT NOT NULL DEFAULT 'TEST', -- 'TEST' or 'LIVE'
    status TEXT NOT NULL, -- 'active', 'past_due', 'canceled', 'unpaid'
    current_period_start TIMESTAMPTZ NOT NULL,
    current_period_end TIMESTAMPTZ NOT NULL,
    cancel_at_period_end BOOLEAN NOT NULL DEFAULT FALSE,
    canceled_at TIMESTAMPTZ,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own subscriptions"
    ON public.subscriptions FOR SELECT
    USING (auth.uid() = user_id);

CREATE POLICY "No direct client inserts on subscriptions"
    ON public.subscriptions FOR INSERT
    WITH CHECK (FALSE);

CREATE POLICY "No direct client updates on subscriptions"
    ON public.subscriptions FOR UPDATE
    USING (FALSE);

-- ------------------------------------------------------------------------------
-- 5. CONCIERGE REQUESTS
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.concierge_requests (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    purchase_id UUID REFERENCES public.purchases(id) ON DELETE SET NULL,
    status TEXT NOT NULL DEFAULT 'NEW', -- 'NEW', 'SCHEDULED', 'IN_PROGRESS', 'DELIVERED', 'CLOSED'
    family_priorities TEXT,
    target_provinces TEXT[] DEFAULT ARRAY['Alberta'],
    target_cities TEXT[] DEFAULT ARRAY['Calgary'],
    scheduled_consultation_at TIMESTAMPTZ,
    admin_notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

ALTER TABLE public.concierge_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view and manage own concierge requests"
    ON public.concierge_requests FOR ALL
    USING (auth.uid() = user_id);

-- ------------------------------------------------------------------------------
-- 6. TRUSTED SERVER-SIDE ROLE AUTHORIZATION (ADMIN HARDENING)
-- ------------------------------------------------------------------------------
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS role TEXT NOT NULL DEFAULT 'USER';

-- Ensure clients cannot self-assign or elevate role
CREATE OR REPLACE FUNCTION public.protect_user_role()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.role IS DISTINCT FROM OLD.role THEN
        IF current_setting('request.jwt.claim.role', true) != 'service_role' THEN
            RAISE EXCEPTION 'Unauthorized: Clients cannot modify account role.';
        END IF;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS tr_protect_user_role ON public.profiles;
CREATE TRIGGER tr_protect_user_role
    BEFORE UPDATE ON public.profiles
    FOR EACH ROW
    EXECUTE FUNCTION public.protect_user_role();

