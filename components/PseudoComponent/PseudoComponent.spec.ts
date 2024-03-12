import PseudoComponent from "../PseudoComponent/PseudoComponent";
import { describe, expect, it } from "../../utils/test-lib/test-lib";

describe("Testing PseudoComponent #1", () => {
    describe("Testing sum function #1@1", () => {
        it("Should propery sum number with sum() #1#1", () => {
            const what = new PseudoComponent();

            expect(what.summ(1, 2)).toBe(4);
        });

        describe("Testing sum function #1@2@1", () => {
            it("Should propery sum number with sum() #1#2", () => {
                const what = new PseudoComponent();
    
                expect(what.summ(1, 2)).toBe(3);
            });
        });
    });

    describe("Test after deep nesting #1@3", () => {
        it("Should propery sum number with sum() #1#3", () => {
            const what = new PseudoComponent();

            expect(what.summ(1, 2)).toBe(4);
        });
    });
});

export default {};
