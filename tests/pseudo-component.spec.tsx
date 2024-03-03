import React from "react";

let numberOfFails = 0;
let describeRecCount = 0;

function describe(name: string, fn: Function) {
    console.log(`Testing ${String(name)}: `);
    describeRecCount++;
    fn();
    describeRecCount--;

    if (!describeRecCount) {
        if (numberOfFails > 0) {
            spearator();
            console.log(`${numberOfFails} tests failed\n`);
            process.exit(1);
        } else {
            spearator();
            console.log(`All tests passed\n`);
            process.exit(0);
        }
    }
}
function spearator() {
    console.log("_____________________________________________________________________________________________");
}

function it(name: string, fn: Function) {
    const prefix = "  - Test";
    try {
        fn();
        console.log(`${prefix} ${String(name)} PASSED`);
    } catch (e) {
        console.log(`${prefix} ${String(name)} FAILED: ${e.message}`);
        numberOfFails++;
    }
}

// class MyPseudoComponent {
//     constructor() {}

//     summ(a: number, b: number) {
//         return a + b;
//     }
// }

function expect(value: any) {
    return {
        toBe: (expected: any) => {
            if (value !== expected) {
                throw new Error(`Expected ${expected}`);
            }
        },
    };
}

function MyPseudoComponent() {
    this.summ = (a: number, b: number) => {
        return a + b;
    };
}

function MyJSXPsuedoComponent({ name }) {
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
}

describe("Testing a plain function", () => {
    describe("MyPseudoComponent Tests", () => {
        it("Should propery sum number with sum()", () => {
            const what = new MyPseudoComponent();

            expect(what.summ(1, 2)).toBe(4);
        });
    });

    describe("Testing pseudo TSX React component", () => {
        it("Should return with a testable DOM", () => {
            const what = MyJSXPsuedoComponent({ name: "Hello" });

            if (what.type !== "div") {
                throw new Error("Expected div");
            }
        });
    });
});

