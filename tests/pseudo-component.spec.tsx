import React from "react";
import { green, red, bgMagenta } from 'kleur';

let numberOfFails = 0;
let numberOfSuccess = 0;
let describeRecCount = 0;

console.log(bgMagenta(" Running tests                                          "));

function describe(name: string, fn: Function) {
    console.log(` ${String(name)}`);
    describeRecCount++;
    fn();
    describeRecCount--;

    if (!describeRecCount) {
        spearator();
        console.log(red(` ${numberOfFails} tests FAILED`));
        console.log(green(` ${numberOfSuccess} tests PASSED`));
        if (numberOfFails > 0) {
            process.exit(-1);
        } else {
            process.exit(0);
        }
    }
}
function spearator() {
    console.log("__________________________________________________________");
}

function it(name: string, fn: Function) {
    const indent = "    - ";
    try {
        fn();
        console.log(green(`${indent} ${String(name)}: PASSED`));
        numberOfSuccess++;
    } catch (e) {
        console.log(red(`${indent} ${String(name)}: FAILED (${e.message})`));
        numberOfFails++;
    }
}

// Also works with classes
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
    describe("Testing MyPseudoComponent", () => {
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

