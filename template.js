const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function solution(a, x, b, c) {
    return a * x ** 2 + b * x + c;
}

ioInterface.on('line', function (line) {
    if (lineNumber === 0) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const [a, x, b, c] = input[0].split(' ').map(el => +el);

    const answer = solution(a, x, b, c);

    process.stdout.write(answer + '\n');
})