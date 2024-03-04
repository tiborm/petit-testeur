import TSXPsuedoComponent from './TSXPsuedoComponent';
import { describe, expect, it } from '../../utils/test-lib/test-lib';

describe("Testing pseudo TSX React component", () => {
    it("Should return with a testable DOM", () => {
        const what = TSXPsuedoComponent({ name: "Hello" });

        expect(what.type).toBe("div");
    });
});

export default {}