# NEXORA MOVE — COMMERCIAL DATABASE SCHEMA
**Version:** 3.0.0  
**Database Target:** PostgreSQL / Supabase  
**Migration ID:** `004_commercial_tables.sql`  

---

## 1. Table Definitions (Additive to Phase 1.5/2 Baseline)

### 1. `commercial_plans`
Stores active plans and tier ranks.
```sql
CREATE TABLE commercial_plans (
  id VARCHAR(32) PRIMARY KEY,
  tier_rank INT NOT NULL,
  display_name VARCHAR(128) NOT NULL,
  price_cad NUMERIC(10,2) NOT NULL,
  billing_type VARCHAR(32) NOT NULL, -- 'FREE', 'ONE_TIME', 'MONTHLY', 'ANNUAL'
  stripe_price_id VARCHAR(128),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

### 2. `user_entitlements`
Server-authoritative entitlements tied to authenticated Supabase user ID.
```sql
CREATE TABLE user_entitlements (
  user_id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id VARCHAR(32) REFERENCES commercial_plans(id),
  is_move_pass_purchased BOOLEAN DEFAULT FALSE,
  is_pro_subscribed BOOLEAN DEFAULT FALSE,
  pro_expires_at TIMESTAMPTZ,
  is_concierge_customer BOOLEAN DEFAULT FALSE,
  is_founding_member BOOLEAN DEFAULT FALSE,
  granted_by_admin BOOLEAN DEFAULT FALSE,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE user_entitlements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own entitlement"
  ON user_entitlements FOR SELECT
  USING (auth.uid() = user_id);
```

### 3. `purchases`
One-time transaction log (Move Pass and Concierge).
```sql
CREATE TABLE purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  plan_id VARCHAR(32) REFERENCES commercial_plans(id),
  amount_cad NUMERIC(10,2) NOT NULL,
  stripe_session_id VARCHAR(255) UNIQUE,
  stripe_payment_intent_id VARCHAR(255),
  status VARCHAR(32) NOT NULL, -- 'PAID', 'REFUNDED'
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE purchases ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own purchases"
  ON purchases FOR SELECT
  USING (auth.uid() = user_id);
```

### 4. `subscriptions`
Recurring Pro subscription lifecycle table.
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id VARCHAR(255) NOT NULL,
  stripe_subscription_id VARCHAR(255) UNIQUE NOT NULL,
  status VARCHAR(32) NOT NULL, -- 'active', 'past_due', 'canceled'
  current_period_end TIMESTAMPTZ NOT NULL,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own subscriptions"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);
```

### 5. `concierge_requests`
Advisory planning requests submitted by Concierge tier buyers.
```sql
CREATE TABLE concierge_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  status VARCHAR(32) DEFAULT 'NEW', -- 'NEW', 'SCHEDULED', 'IN_PROGRESS', 'DELIVERED', 'CLOSED'
  family_priorities TEXT,
  preferred_cities TEXT[],
  scheduled_at TIMESTAMPTZ,
  delivered_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE concierge_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own concierge requests"
  ON concierge_requests FOR ALL
  USING (auth.uid() = user_id);
```
