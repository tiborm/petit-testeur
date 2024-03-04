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

export { describe, it, expect };
