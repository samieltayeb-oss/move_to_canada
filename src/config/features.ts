/**
/**
 * NEXORA MOVE — PHASE 3 FEATURE FLAGS & COMMERCIAL CONFIGURATION
 * 
 * Central switchboard for commercial capabilities, payment modes, and founding campaigns.
 */

export const COMMERCIAL_CONFIG = {
  // Master UI switch: renders pricing, upgrade gates, and checkout buttons
  COMMERCIAL_UI_ENABLED: true,

  // Stripe Mode: strictly runs in TEST MODE for development & Phase 3 validation
  STRIPE_TEST_MODE_ENABLED: true,

  // MANDATORY SECURITY GUARDRAIL: LIVE PAYMENTS MUST REMAIN FALSE
  // Real money charging cannot be enabled without explicit owner authorization
  LIVE_PAYMENTS_ENABLED: false,

  // Founding Family launch campaign ($49 Move Pass vs $79 regular)
  FOUNDING_PRICE_ENABLED: true,
  FOUNDING_MEMBER_MAX_COUNT: 100,

  // Subscription & Tier switches
  PRO_ENABLED: true,
  PRO_ANNUAL_ENABLED: false, // Disabled until annual billing is authorized
  CONCIERGE_ENABLED: true,
  REFERRALS_ENABLED: true,
  BETA_PROGRAM_ENABLED: true,

  // Currency Support
  CAD_SAR_EXCHANGE_RATE: 2.7204, // 1 CAD = 2.7204 SAR
  DEFAULT_CURRENCY: 'CAD' as const,

  // Legal & Disclaimer
  DISCLAIMER_VERSION: '2026.1',
  IMMIGRATION_ADVICE_PROHIBITION_STRICT: true
} as const;

export type CommercialConfig = typeof COMMERCIAL_CONFIG;
