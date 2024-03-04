import { green, red, bgMagenta } from "kleur";

let numberOfFails = 0;
let numberOfSuccess = 0;
let describeRecCount = 0;
let isResultAdded = false;

console.log(bgMagenta("\n\n Running tests (What test framework Tibi is playing with?)"));

function describe(name: string, fn: Function) {
    describeRecCount++;

    if (!isResultAdded) {
        const interval = setInterval(() => {
            spearator();
            console.log(red(` ${numberOfFails} tests FAILED`));
            console.log(green(` ${numberOfSuccess} tests PASSED`));
            if (numberOfFails > 0) {
                process.exit(-1);
            } else {
                process.exit(0);
            }

            clearInterval(interval);
        }, 20);

        isResultAdded = true;
    }

    const interval = setInterval(() => {
        const indent = ' '.repeat(describeRecCount + 1);
        
        console.log(indent + String(name));
        fn();
        describeRecCount--;
        clearInterval(interval);
    }, 0);
}
function spearator() {
    console.log("__________________________________________________________");
}

function it(name: string, fn: Function) {
    const indent = ' '.repeat(describeRecCount + 1);

    try {
        fn();
        console.log(green(`${indent}- ${String(name)}: PASSED`));
        numberOfSuccess++;
    } catch (e) {
        console.log(red(`${indent}- ${String(name)}: FAILED (${e.message})`));
        numberOfFails++;
    }
}

function expect(value: any) {
    return {
        toBe: (expected: any) => {
            if (value !== expected) {
                throw new Error(`Expected ${expected}`);
            }
        },
    };
}

export { describe, it, expect };
