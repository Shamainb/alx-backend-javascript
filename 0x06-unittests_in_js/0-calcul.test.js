// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return 4 when a = 1.4 and b = 2.6', function() {
    assert.strictEqual(calculateNumber(1.4, 2.6), 4);
  });

  it('should return 5 when a = 1.5 and b = 2.5', function() {
    assert.strictEqual(calculateNumber(1.5, 2.5), 5);
  });

  it('should return 0 when a = 0 and b = 0', function() {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should return -4 when a = -1.4 and b = -2.6', function() {
    assert.strictEqual(calculateNumber(-1.4, -2.6), -4);
  });

  it('should return -3 when a = -1.5 and b = -1.5', function() {
    assert.strictEqual(calculateNumber(-1.5, -1.5), -3);
  });

  it('should return 1 when a = 0.9 and b = 0', function() {
    assert.strictEqual(calculateNumber(0.9, 0), 1);
  });

  it('should return 0 when a = 0.4 and b = 0', function() {
    assert.strictEqual(calculateNumber(0.4, 0), 0);
  });
});
