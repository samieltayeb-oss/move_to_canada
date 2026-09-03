import test from 'node:test';
import assert from 'node:assert';

// Self-contained entitlement resolution unit tests
const PLAN_LIMITS = {
  FREE: {
    maxRelocationScenarios: 1,
    maxAtsResumeTailoring: 0,
    coverLetterGeneration: false,
    jobApplicationTracker: false,
    interviewPrepEngine: false,
    advancedCityComparison: false,
    pdfRelocationBlueprintExport: false,
    benefitsPersonalizationFull: false
  },
  MOVE_PASS: {
    maxRelocationScenarios: 4,
    maxAtsResumeTailoring: 1,
    coverLetterGeneration: false,
    jobApplicationTracker: false,
    interviewPrepEngine: false,
    advancedCityComparison: true,
    pdfRelocationBlueprintExport: true,
    benefitsPersonalizationFull: true
  },
  PRO_MONTHLY: {
    maxRelocationScenarios: 999,
    maxAtsResumeTailoring: 999,
    coverLetterGeneration: true,
    jobApplicationTracker: true,
    interviewPrepEngine: true,
    advancedCityComparison: true,
    pdfRelocationBlueprintExport: true,
    benefitsPersonalizationFull: true
  }
};

function hasFeatureAccess(entitlement, feature) {
  if (entitlement.grantedByAdmin) {
    return true;
  }

  if (feature === 'concierge_session') {
    return Boolean(entitlement.isConciergeCustomer);
  }

  const isProActive = (entitlement.isProSubscribed || entitlement.isConciergeCustomer) &&
    (!entitlement.proExpiresAt || new Date(entitlement.proExpiresAt) > new Date());

  if (isProActive) {
    return true;
  }

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

  return false;
}

test('Entitlements: Default user receives Free tier and limited access', () => {
  const free = {
    userId: 'user_123',
    planId: 'FREE',
    isMovePassPurchased: false,
    isProSubscribed: false,
    proExpiresAt: null,
    isConciergeCustomer: false,
    grantedByAdmin: false
  };

  assert.strictEqual(free.planId, 'FREE');
  assert.strictEqual(hasFeatureAccess(free, 'advanced_city_comparison'), false);
  assert.strictEqual(hasFeatureAccess(free, 'pdf_blueprint'), false);
  assert.strictEqual(hasFeatureAccess(free, 'cover_letters'), false);
  assert.strictEqual(PLAN_LIMITS.FREE.maxRelocationScenarios, 1);
});

test('Entitlements: Move Pass unlocks core relocation features but gates Pro career suite', () => {
  const movePass = {
    userId: 'user_456',
    planId: 'MOVE_PASS',
    isMovePassPurchased: true,
    isProSubscribed: false,
    proExpiresAt: null,
    isConciergeCustomer: false,
    grantedByAdmin: false
  };

  assert.strictEqual(hasFeatureAccess(movePass, 'advanced_city_comparison'), true);
  assert.strictEqual(hasFeatureAccess(movePass, 'benefits_personalization'), true);
  assert.strictEqual(hasFeatureAccess(movePass, 'pdf_blueprint'), true);
  assert.strictEqual(hasFeatureAccess(movePass, 'ats_resume'), true);

  assert.strictEqual(hasFeatureAccess(movePass, 'cover_letters'), false);
  assert.strictEqual(hasFeatureAccess(movePass, 'application_tracker'), false);
  assert.strictEqual(hasFeatureAccess(movePass, 'interview_prep'), false);
  assert.strictEqual(hasFeatureAccess(movePass, 'unlimited_scenarios'), false);
});

test('Entitlements: Pro unlocks full suite while subscription is active', () => {
  const proActive = {
    userId: 'user_789',
    planId: 'PRO_MONTHLY',
    isMovePassPurchased: false,
    isProSubscribed: true,
    proExpiresAt: new Date(Date.now() + 30 * 24 * 3600 * 1000).toISOString(),
    isConciergeCustomer: false,
    grantedByAdmin: false
  };

  assert.strictEqual(hasFeatureAccess(proActive, 'advanced_city_comparison'), true);
  assert.strictEqual(hasFeatureAccess(proActive, 'cover_letters'), true);
  assert.strictEqual(hasFeatureAccess(proActive, 'interview_prep'), true);
  assert.strictEqual(hasFeatureAccess(proActive, 'application_tracker'), true);
  assert.strictEqual(hasFeatureAccess(proActive, 'unlimited_scenarios'), true);
});

test('Entitlements: Expired Pro subscription gracefully falls back without data loss', () => {
  const proExpired = {
    userId: 'user_999',
    planId: 'PRO_MONTHLY',
    isMovePassPurchased: true,
    isProSubscribed: true,
    proExpiresAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString(),
    isConciergeCustomer: false,
    grantedByAdmin: false
  };

  // Reverts to Move Pass features
  assert.strictEqual(hasFeatureAccess(proExpired, 'advanced_city_comparison'), true);
  assert.strictEqual(hasFeatureAccess(proExpired, 'pdf_blueprint'), true);
  assert.strictEqual(hasFeatureAccess(proExpired, 'cover_letters'), false);
  assert.strictEqual(hasFeatureAccess(proExpired, 'interview_prep'), false);
});

test('Entitlements: Concierge client has Move Pass + active 3 months Pro access before expiry', () => {
  const purchaseDate = new Date();
  const proExpiresAt = new Date(purchaseDate.getTime() + 90 * 24 * 3600 * 1000).toISOString(); // +90 days
  const conciergeActive = {
    userId: 'user_concierge_1',
    planId: 'CONCIERGE',
    isMovePassPurchased: true,
    isProSubscribed: true,
    proExpiresAt,
    isConciergeCustomer: true,
    grantedByAdmin: false
  };

  assert.strictEqual(hasFeatureAccess(conciergeActive, 'concierge_session'), true);
  assert.strictEqual(hasFeatureAccess(conciergeActive, 'cover_letters'), true);
  assert.strictEqual(hasFeatureAccess(conciergeActive, 'interview_prep'), true);
  assert.strictEqual(hasFeatureAccess(conciergeActive, 'advanced_city_comparison'), true);
  assert.strictEqual(hasFeatureAccess(conciergeActive, 'pdf_blueprint'), true);
});

test('Entitlements: Concierge client after 90 days reverts Pro features but retains permanent Move Pass', () => {
  const expiredProDate = new Date(Date.now() - 5 * 24 * 3600 * 1000).toISOString(); // Expired 5 days ago
  const conciergeExpiredPro = {
    userId: 'user_concierge_2',
    planId: 'CONCIERGE',
    isMovePassPurchased: true,
    isProSubscribed: false,
    proExpiresAt: expiredProDate,
    isConciergeCustomer: true,
    grantedByAdmin: false
  };

  // Concierge session remains accessible
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'concierge_session'), true);
  // Pro-only features are now locked
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'cover_letters'), false);
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'interview_prep'), false);
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'unlimited_scenarios'), false);
  // Permanent Move Pass features REMAIN UNLOCKED
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'advanced_city_comparison'), true);
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'pdf_blueprint'), true);
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'benefits_personalization'), true);
  assert.strictEqual(hasFeatureAccess(conciergeExpiredPro, 'ats_resume'), true);
});

