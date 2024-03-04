import PseudoComponent from "../PseudoComponent/PseudoComponent";
import { describe, expect, it } from "../../utils/test-lib/test-lib";

describe("Testing PseudoComponent", () => {
    describe("  Testing sum function", () => {
        it("Should propery sum number with sum()", () => {
            const what = new PseudoComponent();

            expect(what.summ(1, 2)).toBe(4);
        });
    });
});

export default {};
