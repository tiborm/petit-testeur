import PseudoComponent from '../PseudoComponent/PseudoComponent';
import TSXPsuedoComponent from './TSXPsuedoComponent';
import { describe, expect, it } from '../../utils/test-lib/test-lib';

describe("Testing a plain function", () => {
    describe("Testing MyPseudoComponent", () => {
        it("Should propery sum number with sum()", () => {
            const what = new PseudoComponent();

            expect(what.summ(1, 2)).toBe(4);
        });
    });

    describe("Testing pseudo TSX React component", () => {
        it("Should return with a testable DOM", () => {
            const what = TSXPsuedoComponent({ name: "Hello" });

            if (what.type !== "div") {
                throw new Error("Expected div");
            }
        });
    });
});

export default {}