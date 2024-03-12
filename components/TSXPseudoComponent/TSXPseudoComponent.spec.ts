import TSXPsuedoComponent from './TSXPsuedoComponent';
import { describe, expect, it } from '../../utils/test-lib/test-lib';

describe("Testing pseudo TSX React component #2", () => {
    it("Should return with a testable DOM #2#1", () => {
        const what = TSXPsuedoComponent({ name: "Hello" });

        expect(what.type).toBe("div");
    });

    it("Should return with a testable DOM #2#2", () => {
        const what = TSXPsuedoComponent({ name: "Hello" });

        expect(what.type).toBe("div");
    });
});

export default {}