const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function solution(data) {
    let firstIsEven = data[0] % 2 === 0;

    for (let i = 1; i < 3; i++) {
        const curr = data[i] % 2 === 0;

        if (firstIsEven !== curr) {
            return "FAIL";
        }
    }

    return "WIN";
}

ioInterface.on('line', function (line) {
    if (lineNumber === 0) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const data = input[0].split(' ').map(el => +el);
    const answer = solution(data);
    process.stdout.write(answer);
})