import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { isSupabaseConfigured, getServiceRoleSupabaseClient } from '@/lib/supabase/client';
import { PlanId } from '@/config/plans';

export interface StoredPaymentEvent {
  stripeEventId: string;
  eventType: string;
  environment: 'TEST' | 'LIVE';
  processedAt: string;
}

export interface StoredPurchase {
  id: string;
  userId: string;
  customerEmail: string;
  planId: PlanId;
  amountCAD: number;
  currency: string;
  paymentEnvironment: 'TEST' | 'LIVE';
  stripeSessionId: string;
  stripePaymentIntentId: string | null;
  status: 'PAID' | 'REFUNDED' | 'FAILED';
  createdAt: string;
}

export interface StoredEntitlement {
  userId: string;
  customerEmail: string;
  planId: PlanId;
  isMovePassPurchased: boolean;
  isProSubscribed: boolean;
  proExpiresAt: string | null;
  isConciergeCustomer: boolean;
  updatedAt: string;
}

interface CommerceDatabase {
  events: Record<string, StoredPaymentEvent>;
  purchases: Record<string, StoredPurchase>;
  entitlements: Record<string, StoredEntitlement>;
}

const STORE_PATH = path.join(process.cwd(), '.commerce_store.json');

const isProduction = process.env.NODE_ENV === 'production' || process.env.VERCEL_ENV === 'production';

function readLocalStore(): CommerceDatabase {
  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Ephemeral local JSON store read is forbidden in production.');
  }
  try {
    if (fs.existsSync(STORE_PATH)) {
      const raw = fs.readFileSync(STORE_PATH, 'utf-8');
      return JSON.parse(raw);
    }
  } catch (err) {
    console.warn('[CommerceStore] Read fallback error:', err);
  }
  return { events: {}, purchases: {}, entitlements: {} };
}

function writeLocalStore(data: CommerceDatabase) {
  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Ephemeral local JSON store write is forbidden in production.');
  }
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[CommerceStore] Write fallback error:', err);
  }
}

/**
 * Deterministically resolves a valid auth.users UUID for both authenticated and guest users.
 */
export async function resolveAuthUserId(email: string, explicitUserId?: string): Promise<string> {
  const normEmail = email.toLowerCase().trim();
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (explicitUserId && uuidRegex.test(explicitUserId)) {
    return explicitUserId;
  }

  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    try {
      // 1. Try to find user in auth.users by email
      const { data: userData } = await supabase.auth.admin.listUsers();
      const existing = userData?.users?.find(u => u.email?.toLowerCase() === normEmail);
      if (existing) {
        return existing.id;
      }

      // 2. Provision shadow guest account in auth.users
      const { data: created, error } = await supabase.auth.admin.createUser({
        email: normEmail,
        email_confirm: true,
        user_metadata: { is_guest: true, provisioned_for: 'checkout' }
      });

      if (created?.user?.id) {
        return created.user.id;
      }

      // If concurrent create happened, retry find
      const { data: retryData } = await supabase.auth.admin.listUsers();
      const retryUser = retryData?.users?.find(u => u.email?.toLowerCase() === normEmail);
      if (retryUser) {
        return retryUser.id;
      }
    } catch (authErr) {
      console.warn('[CommerceStore] Supabase auth lookup warning:', authErr);
      if (isProduction) {
        throw new Error(`[CommerceStore:P0.1] Failed to resolve durable auth identity for ${normEmail} in production.`);
      }
    }
  }

  // Fallback for local development or mock environments: deterministic UUIDv5-like hash
  const hash = crypto.createHash('sha256').update(`nexora-guest-${normEmail}`).digest('hex');
  return `${hash.slice(0, 8)}-${hash.slice(8, 12)}-4${hash.slice(13, 16)}-a${hash.slice(17, 20)}-${hash.slice(20, 32)}`;
}

/**
 * Checks if a Stripe event was already processed (durable idempotency).
 */
export async function isEventProcessed(eventId: string): Promise<boolean> {
  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    const { data, error } = await supabase
      .from('payment_events')
      .select('stripe_event_id')
      .eq('stripe_event_id', eventId)
      .maybeSingle();

    if (error && isProduction) {
      throw new Error(`[CommerceStore:P0.1] Database query error for payment_events: ${error.message}`);
    }

    if (data) return true;
    return false;
  }

  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Supabase durable database required.');
  }

  const store = readLocalStore();
  return Boolean(store.events[eventId]);
}

/**
 * Records a processed Stripe event for idempotency.
 */
export async function recordEvent(event: StoredPaymentEvent): Promise<void> {
  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    const { error } = await supabase.from('payment_events').insert({
      stripe_event_id: event.stripeEventId,
      event_type: event.eventType,
      payment_environment: event.environment
    });

    if (error && isProduction) {
      throw new Error(`[CommerceStore:P0.1] Failed to record durable payment event: ${error.message}`);
    }
    return;
  }

  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Supabase durable database required.');
  }

  const store = readLocalStore();
  store.events[event.stripeEventId] = event;
  writeLocalStore(store);
}

/**
 * Persists a purchase transaction record.
 */
export async function savePurchase(purchase: StoredPurchase): Promise<void> {
  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    const resolvedUserId = await resolveAuthUserId(purchase.customerEmail, purchase.userId);

    const { error } = await supabase.from('purchases').insert({
      user_id: resolvedUserId,
      plan_id: purchase.planId,
      amount_cad: purchase.amountCAD,
      currency: purchase.currency,
      payment_environment: purchase.paymentEnvironment,
      stripe_session_id: purchase.stripeSessionId,
      stripe_payment_intent_id: purchase.stripePaymentIntentId,
      status: purchase.status
    });

    if (error && isProduction) {
      throw new Error(`[CommerceStore:P0.1] Failed to persist purchase in durable database: ${error.message}`);
    }
    return;
  }

  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Supabase durable database required.');
  }

  const store = readLocalStore();
  store.purchases[purchase.stripeSessionId] = purchase;
  writeLocalStore(store);
}

/**
 * Saves or updates user/guest entitlements.
 */
export async function saveEntitlement(entitlement: StoredEntitlement): Promise<void> {
  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    const resolvedUserId = await resolveAuthUserId(entitlement.customerEmail, entitlement.userId);

    const { error } = await supabase.from('user_entitlements').upsert({
      user_id: resolvedUserId,
      plan_id: entitlement.planId,
      is_move_pass_purchased: entitlement.isMovePassPurchased,
      is_pro_subscribed: entitlement.isProSubscribed,
      pro_expires_at: entitlement.proExpiresAt,
      is_concierge_customer: entitlement.isConciergeCustomer,
      updated_at: entitlement.updatedAt
    });

    if (error && isProduction) {
      throw new Error(`[CommerceStore:P0.1] Failed to persist entitlement in durable database: ${error.message}`);
    }
    return;
  }

  if (isProduction) {
    throw new Error('[CommerceStore:P0.1] Production law violation: Supabase durable database required.');
  }

  const store = readLocalStore();
  if (entitlement.userId) {
    store.entitlements[entitlement.userId] = entitlement;
  }
  if (entitlement.customerEmail) {
    store.entitlements[entitlement.customerEmail.toLowerCase().trim()] = entitlement;
  }
  writeLocalStore(store);
}

/**
 * Retrieves entitlement by userId, customerEmail, or sessionId.
 */
export async function getEntitlement(identifier: string): Promise<StoredEntitlement | null> {
  const norm = identifier.toLowerCase().trim();

  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    try {
      // 1. Check direct user_id match
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
      if (uuidRegex.test(identifier)) {
        const { data } = await supabase
          .from('user_entitlements')
          .select('*')
          .eq('user_id', identifier)
          .maybeSingle();

        if (data) {
          return {
            userId: data.user_id,
            customerEmail: norm,
            planId: data.plan_id,
            isMovePassPurchased: data.is_move_pass_purchased,
            isProSubscribed: data.is_pro_subscribed,
            proExpiresAt: data.pro_expires_at,
            isConciergeCustomer: data.is_concierge_customer,
            updatedAt: data.updated_at
          };
        }
      }

      // 2. Check by email lookup in auth.users
      if (norm.includes('@')) {
        const { data: usersData } = await supabase.auth.admin.listUsers();
        const user = usersData?.users?.find(u => u.email?.toLowerCase() === norm);
        if (user) {
          const { data } = await supabase
            .from('user_entitlements')
            .select('*')
            .eq('user_id', user.id)
            .maybeSingle();

          if (data) {
            return {
              userId: data.user_id,
              customerEmail: norm,
              planId: data.plan_id,
              isMovePassPurchased: data.is_move_pass_purchased,
              isProSubscribed: data.is_pro_subscribed,
              proExpiresAt: data.pro_expires_at,
              isConciergeCustomer: data.is_concierge_customer,
              updatedAt: data.updated_at
            };
          }
        }
      }

      // 3. Check by stripe_session_id in purchases
      if (identifier.startsWith('cs_')) {
        const { data: purchase } = await supabase
          .from('purchases')
          .select('user_id, plan_id, status')
          .eq('stripe_session_id', identifier)
          .maybeSingle();

        if (purchase && purchase.status === 'PAID') {
          return {
            userId: purchase.user_id,
            customerEmail: norm,
            planId: purchase.plan_id,
            isMovePassPurchased: purchase.plan_id === 'MOVE_PASS' || purchase.plan_id === 'CONCIERGE',
            isProSubscribed: purchase.plan_id === 'PRO_MONTHLY' || purchase.plan_id === 'CONCIERGE',
            proExpiresAt: null,
            isConciergeCustomer: purchase.plan_id === 'CONCIERGE',
            updatedAt: new Date().toISOString()
          };
        }
      }
    } catch (err) {
      console.warn('[CommerceStore] Supabase getEntitlement error:', err);
      if (isProduction) {
        throw new Error('[CommerceStore:P0.1] Durable entitlement store lookup failed.');
      }
    }
  }

  if (isProduction) {
    return null;
  }

  const store = readLocalStore();
  if (store.entitlements[norm]) return store.entitlements[norm];
  if (store.entitlements[identifier]) return store.entitlements[identifier];

  const purchase = store.purchases[identifier];
  if (purchase && purchase.customerEmail && store.entitlements[purchase.customerEmail.toLowerCase().trim()]) {
    return store.entitlements[purchase.customerEmail.toLowerCase().trim()];
  }

  return null;
}

/**
 * Retrieves purchase by sessionId.
 */
export async function getPurchaseBySession(sessionId: string): Promise<StoredPurchase | null> {
  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    try {
      const { data } = await supabase
        .from('purchases')
        .select('*')
        .eq('stripe_session_id', sessionId)
        .maybeSingle();

      if (data) {
        return {
          id: data.id,
          userId: data.user_id,
          customerEmail: '',
          planId: data.plan_id,
          amountCAD: Number(data.amount_cad),
          currency: data.currency,
          paymentEnvironment: data.payment_environment,
          stripeSessionId: data.stripe_session_id,
          stripePaymentIntentId: data.stripe_payment_intent_id,
          status: data.status,
          createdAt: data.created_at
        };
      }
    } catch (err) {
      console.warn('[CommerceStore] getPurchaseBySession Supabase error:', err);
    }
  }

  if (isProduction) {
    return null;
  }

  const store = readLocalStore();
  return store.purchases[sessionId] || null;
}

/**
 * Finds all purchases for an email address (for guest account recovery).
 */
export async function getPurchasesByEmail(email: string): Promise<StoredPurchase[]> {
  const norm = email.toLowerCase().trim();

  if (isSupabaseConfigured()) {
    const supabase = getServiceRoleSupabaseClient();
    try {
      const { data: usersData } = await supabase.auth.admin.listUsers();
      const user = usersData?.users?.find(u => u.email?.toLowerCase() === norm);
      if (user) {
        const { data } = await supabase
          .from('purchases')
          .select('*')
          .eq('user_id', user.id);

        if (data && data.length > 0) {
          return data.map(d => ({
            id: d.id,
            userId: d.user_id,
            customerEmail: norm,
            planId: d.plan_id,
            amountCAD: Number(d.amount_cad),
            currency: d.currency,
            paymentEnvironment: d.payment_environment,
            stripeSessionId: d.stripe_session_id,
            stripePaymentIntentId: d.stripe_payment_intent_id,
            status: d.status,
            createdAt: d.created_at
          }));
        }
      }
    } catch (err) {
      console.warn('[CommerceStore] getPurchasesByEmail Supabase error:', err);
    }
  }

  if (isProduction) {
    return [];
  }

  const store = readLocalStore();
  return Object.values(store.purchases).filter(p => p.customerEmail.toLowerCase().trim() === norm);
}
