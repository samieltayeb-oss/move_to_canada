import fs from 'fs';
import path from 'path';
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
  entitlements: Record<string, StoredEntitlement>; // keyed by email and/or userId
}

const STORE_PATH = path.join(process.cwd(), '.commerce_store.json');

function readLocalStore(): CommerceDatabase {
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
  try {
    fs.writeFileSync(STORE_PATH, JSON.stringify(data, null, 2), 'utf-8');
  } catch (err) {
    console.warn('[CommerceStore] Write fallback error:', err);
  }
}

/**
 * Checks if a Stripe event was already processed (durable idempotency).
 */
export async function isEventProcessed(eventId: string): Promise<boolean> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = getServiceRoleSupabaseClient();
      const { data } = await supabase
        .from('payment_events')
        .select('stripe_event_id')
        .eq('stripe_event_id', eventId)
        .maybeSingle();
      if (data) return true;
    } catch {}
  }

  const store = readLocalStore();
  return Boolean(store.events[eventId]);
}

/**
 * Records a processed Stripe event for idempotency.
 */
export async function recordEvent(event: StoredPaymentEvent): Promise<void> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = getServiceRoleSupabaseClient();
      await supabase.from('payment_events').insert({
        stripe_event_id: event.stripeEventId,
        event_type: event.eventType,
        payment_environment: event.environment
      });
    } catch {}
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
    try {
      const supabase = getServiceRoleSupabaseClient();
      await supabase.from('purchases').insert({
        user_id: purchase.userId,
        plan_id: purchase.planId,
        amount_cad: purchase.amountCAD,
        currency: purchase.currency,
        payment_environment: purchase.paymentEnvironment,
        stripe_session_id: purchase.stripeSessionId,
        stripe_payment_intent_id: purchase.stripePaymentIntentId,
        status: purchase.status
      });
    } catch {}
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
    try {
      const supabase = getServiceRoleSupabaseClient();
      await supabase.from('user_entitlements').upsert({
        user_id: entitlement.userId,
        plan_id: entitlement.planId,
        is_move_pass_purchased: entitlement.isMovePassPurchased,
        is_pro_subscribed: entitlement.isProSubscribed,
        pro_expires_at: entitlement.proExpiresAt,
        is_concierge_customer: entitlement.isConciergeCustomer,
        updated_at: entitlement.updatedAt
      });
    } catch {}
  }

  const store = readLocalStore();
  // Key by both userId and normalized customerEmail
  if (entitlement.userId) {
    store.entitlements[entitlement.userId] = entitlement;
  }
  if (entitlement.customerEmail) {
    store.entitlements[entitlement.customerEmail.toLowerCase().trim()] = entitlement;
  }
  writeLocalStore(store);
}

/**
 * Retrieves entitlement by userId or customerEmail or sessionId.
 */
export async function getEntitlement(identifier: string): Promise<StoredEntitlement | null> {
  const norm = identifier.toLowerCase().trim();

  if (isSupabaseConfigured()) {
    try {
      const supabase = getServiceRoleSupabaseClient();
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
    } catch {}
  }

  const store = readLocalStore();
  if (store.entitlements[norm]) return store.entitlements[norm];
  if (store.entitlements[identifier]) return store.entitlements[identifier];

  // Also check if identifier matches a session ID in purchases
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
  const store = readLocalStore();
  return store.purchases[sessionId] || null;
}

/**
 * Finds all purchases for an email address (for guest account recovery).
 */
export async function getPurchasesByEmail(email: string): Promise<StoredPurchase[]> {
  const norm = email.toLowerCase().trim();
  const store = readLocalStore();
  return Object.values(store.purchases).filter(p => p.customerEmail.toLowerCase().trim() === norm);
}
