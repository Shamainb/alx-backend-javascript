import { expect } from "chai";
import { describe, it } from "mocha";
import calculateNumber from "./2-calcul_chai.js";

describe("calculateNumber()", function() {
    it(`should return 3 when SUM is used with 1 and 2`, function() {
        const res = calculateNumber("SUM", 1, 2);
        expect(res).to.equal(3);
    });

    it(`should return -1 when SUBTRACT is used with 1.4 and 2.2`, function() {
        const res = calculateNumber("SUBTRACT", 1.4, 2.2);
        expect(res).to.equal(-1);
    });

    it(`should return 2 when SUBTRACT is used with 4.9 and 2.7`, function() {
        const res = calculateNumber("SUBTRACT", 4.9, 2.7);
        expect(res).to.equal(2);
    });

    it(`should return 2 when DIVIDE is used with 4 and 2`, function() {
        const res = calculateNumber("DIVIDE", 4, 2);
        expect(res).to.equal(2);
    });

    it(`should return "Error" when DIVIDE is used with 1.7 and 0`, function() {
        const res = calculateNumber("DIVIDE", 1.7, 0);
        expect(res).to.equal("Error");
    });

    it(`should return 0.2 when DIVIDE is used with 1.4 and 4.6`, function() {
        const res = calculateNumber("DIVIDE", 1.4, 4.6);
        expect(res).to.equal(0.2);
    });
});
