// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM', () => {
        it('should return 5 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });

        it('should return 6 when inputs are 1.5 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
        });
    });

    describe('SUBTRACT', () => {
        it('should return -3 when inputs are 1.2 and 3.7', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
        });

        it('should return -3 when inputs are 1.4 and 3.6', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.6), -3);
        });
    });

    describe('DIVIDE', () => {
        it('should return 0.25 when inputs are 1.4 and 3.6', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.6), 0.25);
        });

        it('should return Error when b rounds to 0', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
        });

        it('should return 1 when inputs are 2.5 and 2.5', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 2.5, 2.5), 1);
        });
    });

    describe('Invalid type', () => {
        it('should throw an error for invalid type', () => {
            assert.throws(() => calculateNumber('MULTIPLY', 1.2, 3.7), /Invalid type/);
        });
    });
});
