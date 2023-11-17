const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function solution(string) {
    if (!string) return true;
    if (string.length === 1) return true;

    let l = 0;
    let r = string.length - 1;

    while (l <= r) {
        const lValue = string[l];
    }
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

    process.stdout.write(answer);
})