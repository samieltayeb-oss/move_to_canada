import test from 'node:test';
import assert from 'node:assert';

// Test Ontario 2026 Tax Engine
import { calculateOntario2026Tax } from '../../src/data/canada/provinces/on/taxes/2026.ts';
import { calculateBc2026Tax } from '../../src/data/canada/provinces/bc/taxes/2026.ts';
import { calculateAlberta2026Tax } from '../../src/data/canada/provinces/ab/taxes/2026.ts';
import { calculateCanadianTax } from '../../src/data/taxes.ts';

test('Ontario 2026 Tax Engine: Validates representative salary bands ($60k, $90k, $120k, $150k, $200k, $300k)', () => {
  const bands = [60000, 90000, 120000, 150000, 200000, 300000];

  for (const gross of bands) {
    const res = calculateOntario2026Tax(gross);
    assert.strictEqual(res.grossIncomeCAD, gross);
    assert.ok(res.provincialBaseTaxCAD > 0, `Base tax for ${gross} must be > 0`);
    assert.ok(res.basicPersonalCreditCAD > 0, `BPA credit for ${gross} must be > 0`);
    assert.ok(res.netProvincialTaxCAD > 0, `Net Ontario tax for ${gross} must be > 0`);
    
    // Ontario Surtax kicks in when basic tax > $5,554 (around $90k+)
    if (gross >= 120000) {
      assert.ok(res.ontarioSurtaxCAD > 0, `Surtax must be applied at $${gross}`);
    }
    // Health Premium maxes out at $900 for > $200,600
    if (gross >= 200600) {
      assert.strictEqual(res.ontarioHealthPremiumCAD, 900);
    }
  }
});

test('Alberta 2026 Tax Engine: Validates representative salary bands ($60k, $90k, $120k, $150k, $200k, $300k)', () => {
  const bands = [60000, 90000, 120000, 150000, 200000, 300000];

  for (const gross of bands) {
    const res = calculateAlberta2026Tax(gross);
    assert.strictEqual(res.grossIncomeCAD, gross);
    assert.ok(res.provincialBaseTaxCAD > 0);
    assert.ok(res.netProvincialTaxCAD > 0);
    assert.ok(res.effectiveProvincialRate <= 0.15);
  }
});

test('BC 2026 Tax Engine: Validates representative salary bands ($60k, $90k, $120k, $150k, $200k, $300k)', () => {
  const bands = [60000, 90000, 120000, 150000, 200000, 300000];

  for (const gross of bands) {
    const res = calculateBc2026Tax(gross);
    assert.strictEqual(res.grossIncomeCAD, gross);
    assert.ok(res.provincialBaseTaxCAD > 0);
    assert.ok(res.netProvincialTaxCAD > 0);
    assert.ok(res.effectiveProvincialRate < 0.205);
  }
});

test('Cross-Province Tax Comparison at $100,000 CAD', () => {
  const ab = calculateCanadianTax(100000, [16, 11, 5], true, 'AB');
  const on = calculateCanadianTax(100000, [16, 11, 5], true, 'ON');
  const bc = calculateCanadianTax(100000, [16, 11, 5], true, 'BC');

  // Federal tax is identical across all 3 provinces
  assert.strictEqual(ab.federalTaxCAD, on.federalTaxCAD);
  assert.strictEqual(ab.federalTaxCAD, bc.federalTaxCAD);

  // Alberta graduated tax on $100k
  assert.strictEqual(ab.provincialTaxCAD, 6954);

  // Ontario tax on $100k
  assert.ok(on.provincialTaxCAD > 0);

  // BC tax on $100k
  assert.ok(bc.provincialTaxCAD > 0);

  // Take-home outputs exist and deductions match sum of components
  assert.strictEqual(ab.totalDeductionsCAD, ab.federalTaxCAD + ab.provincialTaxCAD + ab.cppContributionCAD + ab.eiPremiumCAD);
  assert.strictEqual(on.totalDeductionsCAD, on.federalTaxCAD + on.provincialTaxCAD + on.cppContributionCAD + on.eiPremiumCAD);
  assert.strictEqual(bc.totalDeductionsCAD, bc.federalTaxCAD + bc.provincialTaxCAD + bc.cppContributionCAD + bc.eiPremiumCAD);
});

test('Cross-Province Tax Comparison at $150,000 CAD', () => {
  const ab = calculateCanadianTax(150000, [16, 11, 5], true, 'AB');
  const on = calculateCanadianTax(150000, [16, 11, 5], true, 'ON');
  const bc = calculateCanadianTax(150000, [16, 11, 5], true, 'BC');

  assert.strictEqual(ab.federalTaxCAD, on.federalTaxCAD);
  assert.strictEqual(ab.federalTaxCAD, bc.federalTaxCAD);
  assert.ok(ab.provincialTaxCAD > 0);
  assert.ok(on.provincialTaxCAD > 0);
  assert.ok(bc.provincialTaxCAD > 0);
});

test('Cross-Province Tax Comparison at $250,000 CAD', () => {
  const ab = calculateCanadianTax(250000, [16, 11, 5], true, 'AB');
  const on = calculateCanadianTax(250000, [16, 11, 5], true, 'ON');
  const bc = calculateCanadianTax(250000, [16, 11, 5], true, 'BC');

  assert.strictEqual(ab.federalTaxCAD, on.federalTaxCAD);
  assert.strictEqual(ab.federalTaxCAD, bc.federalTaxCAD);
  assert.ok(ab.provincialTaxCAD > 0);
  assert.ok(on.provincialTaxCAD > 0);
  assert.ok(bc.provincialTaxCAD > 0);
});
