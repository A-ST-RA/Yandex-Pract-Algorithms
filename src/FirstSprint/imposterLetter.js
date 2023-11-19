const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function solution(first, second) {
    let firstNumbered = 0;
    let secondNumbered = 0;

    for (let i = 0; i < first.length; i++) {
        firstNumbered += first.charCodeAt(i);
        secondNumbered += second.charCodeAt(i);
    }
    
    secondNumbered += second.charCodeAt(second.length - 1);

    return String.fromCharCode(secondNumbered - firstNumbered);
}

ioInterface.on('line', function (line) {
    if (lineNumber < 2) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const [first, second] = input;

    const answer = solution(first, second);

    process.stdout.write(answer + '\n');
})