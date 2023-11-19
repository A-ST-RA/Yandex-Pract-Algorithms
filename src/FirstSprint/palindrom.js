const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function isCharOrNumber(char) {
    if (+char) return true;

    return char.toLowerCase() !== char.toUpperCase();
}

function solution(string) {
    if (!string) return true;
    if (string.length === 1) return true;

    string = string.toLowerCase();
    
    let l = 0;
    let r = string.length - 1;
    
    while (l <= r) {
        const lValue = string[l];
        const rValue = string[r];

        if (!isCharOrNumber(lValue)) {
            l++;

            continue;
        }

        if (!isCharOrNumber(rValue)) {
            r--;

            continue;
        }

        if (lValue !== rValue) {
            return 'False';
        }
 
        if (lValue === rValue) {
            l++;
            r--;
        }
    }

    return 'True';
}

ioInterface.on('line', function (line) {
    if (lineNumber === 0) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const string = input[0];

    const answer = solution(string);

    process.stdout.write(answer + '\n');
})