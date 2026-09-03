import test from 'node:test';
import assert from 'node:assert';

// Test Ontario 2026 Tax Engine
import { calculateOntario2026Tax } from '../../src/data/canada/provinces/on/taxes/2026.ts';
import { calculateBc2026Tax } from '../../src/data/canada/provinces/bc/taxes/2026.ts';
import { calculateAlberta2026Tax } from '../../src/data/canada/provinces/ab/taxes/2026.ts';

test('Ontario 2026 Tax Engine: Validates representative salary bands ($60k, $90k, $120k, $150k, $200k, $300k)', () => {
  const bands = [60000, 90000, 120000, 150000, 200000, 300000];

  for (const gross of bands) {
    const res = calculateOntario2026Tax(gross);
    assert.strictEqual(res.grossIncomeCAD, gross);
    assert.ok(res.provincialBaseTaxCAD > 0);
    assert.ok(res.netProvincialTaxCAD > 0);
    assert.ok(res.ontarioHealthPremiumCAD >= 600);
    assert.ok(res.effectiveProvincialRate < 0.18);
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
  const ab = calculateAlberta2026Tax(100000);
  const on = calculateOntario2026Tax(100000);
  const bc = calculateBc2026Tax(100000);

  // Alberta graduated tax on $100k: $6,954 CAD
  assert.strictEqual(ab.netProvincialTaxCAD, 6954);

  // Ontario tax on $100k: $7,314 CAD ($6,396 basic + $168 surtax + $750 OHP)
  assert.strictEqual(on.netProvincialTaxCAD, 7314);

  // BC tax on $100k: $5,898 CAD ($6,550 base - $652 BPA)
  assert.strictEqual(bc.netProvincialTaxCAD, 5898);

  // Cross-province rank at $100k: BC is lowest, then AB, then ON
  assert.ok(bc.netProvincialTaxCAD < ab.netProvincialTaxCAD);
  assert.ok(ab.netProvincialTaxCAD < on.netProvincialTaxCAD);
});

test('Cross-Province Tax Comparison at $150,000 CAD', () => {
  const ab = calculateAlberta2026Tax(150000);
  const on = calculateOntario2026Tax(150000);
  const bc = calculateBc2026Tax(150000);

  // Alberta graduated tax on $150k: $11,954 CAD
  assert.strictEqual(ab.netProvincialTaxCAD, 11954);

  // Ontario tax on $150k: $15,671 CAD
  assert.strictEqual(on.netProvincialTaxCAD, 15671);

  // BC tax on $150k: $12,257 CAD
  assert.strictEqual(bc.netProvincialTaxCAD, 12257);

  // Cross-province rank at $150k: AB is lowest, then BC, then ON
  assert.ok(ab.netProvincialTaxCAD < bc.netProvincialTaxCAD);
  assert.ok(bc.netProvincialTaxCAD < on.netProvincialTaxCAD);
});

test('Cross-Province Tax Comparison at $250,000 CAD', () => {
  const ab = calculateAlberta2026Tax(250000);
  const on = calculateOntario2026Tax(250000);
  const bc = calculateBc2026Tax(250000);

  // Alberta graduated tax on $250k: $24,550 CAD
  assert.strictEqual(ab.netProvincialTaxCAD, 24550);

  // Ontario tax on $250k: $35,258 CAD (surtax adds $9,981!)
  assert.strictEqual(on.netProvincialTaxCAD, 35258);

  // BC tax on $250k: $28,401 CAD
  assert.strictEqual(bc.netProvincialTaxCAD, 28401);

  // Cross-province rank at $250k: AB lowest ($24.9k) < BC ($28.4k) < ON ($35.3k)
  assert.ok(ab.netProvincialTaxCAD < bc.netProvincialTaxCAD);
  assert.ok(bc.netProvincialTaxCAD < on.netProvincialTaxCAD);
});
