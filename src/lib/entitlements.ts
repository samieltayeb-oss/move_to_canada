/**
 * NEXORA MOVE — SERVER-AUTHORITATIVE ENTITLEMENTS ENGINE
 * 
 * Determines user capability access based on database entitlements and active subscriptions.
 * NEVER trust client-supplied entitlement claims.
 */

import { PlanId, CommercialPlan, getPlan } from '@/config/plans';

export type FeatureKey =
  | 'advanced_city_comparison'
  | 'unlimited_scenarios'
  | 'benefits_personalization'
  | 'pdf_blueprint'
  | 'ats_resume'
  | 'resume_tailoring'
  | 'cover_letters'
  | 'application_tracker'
  | 'interview_prep'
  | 'advanced_job_match'
  | 'concierge_session';

export interface UserEntitlementRecord {
  userId: string;
  planId: PlanId;
  isMovePassPurchased: boolean;
  isProSubscribed: boolean;
  proExpiresAt: string | null;
  isConciergeCustomer: boolean;
  isFoundingMember: boolean;
  grantedByAdmin: boolean;
  createdAt: string;
}

/**
 * Returns default Free entitlement for new/anonymous users.
 */
export function getDefaultFreeEntitlement(userId: string = 'anonymous'): UserEntitlementRecord {
  return {
    userId,
    planId: 'FREE',
    isMovePassPurchased: false,
    isProSubscribed: false,
    proExpiresAt: null,
    isConciergeCustomer: false,
    isFoundingMember: false,
    grantedByAdmin: false,
    createdAt: new Date().toISOString()
  };
}

/**
 * Evaluates whether an entitlement record has access to a specific feature key.
 */
export function hasFeatureAccess(
  entitlement: UserEntitlementRecord,
  feature: FeatureKey
): boolean {
  // Admin bypass
  if (entitlement.grantedByAdmin) {
    return true;
  }

  // Concierge advisory session
  if (feature === 'concierge_session') {
    return entitlement.isConciergeCustomer;
  }

  // Active Pro evaluation: applies to Pro subscribers and Concierge clients within their 3-month window
  const isProActive = (entitlement.isProSubscribed || entitlement.isConciergeCustomer) &&
    (!entitlement.proExpiresAt || new Date(entitlement.proExpiresAt) > new Date());

  if (isProActive) {
    return true;
  }

  // Move Pass features: Permanent for Move Pass purchasers and Concierge customers even after Pro expires
  if (entitlement.isMovePassPurchased || entitlement.isConciergeCustomer || entitlement.planId === 'MOVE_PASS') {
    switch (feature) {
      case 'advanced_city_comparison':
      case 'benefits_personalization':
      case 'pdf_blueprint':
      case 'ats_resume':
        return true;
      case 'unlimited_scenarios':
      case 'resume_tailoring':
      case 'cover_letters':
      case 'application_tracker':
      case 'interview_prep':
      case 'advanced_job_match':
        return false;
      default:
        return false;
    }
  }

  // Free Tier
  return false;
}

/**
 * Returns effective tier plan details based on entitlement record.
 */
export function getEffectivePlan(entitlement: UserEntitlementRecord): CommercialPlan {
  if (entitlement.isConciergeCustomer) return getPlan('CONCIERGE');
  if (entitlement.isProSubscribed) {
    if (!entitlement.proExpiresAt || new Date(entitlement.proExpiresAt) > new Date()) {
      return getPlan('PRO_MONTHLY');
    }
  }
  if (entitlement.isMovePassPurchased) return getPlan('MOVE_PASS');
  return getPlan('FREE');
}
