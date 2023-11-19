const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

const isTwoOne = (firstSymbol, secondSymbol) => firstSymbol === '1' && firstSymbol === secondSymbol;
const isNoOne = (firstSymbol, secondSymbol) => firstSymbol === '0' && firstSymbol === secondSymbol;
const isAnyOne = (firstSymbol, secondSymbol) => +firstSymbol + +secondSymbol === 1;

function solution(firstBinary, secondBinary) {
    if (firstBinary === '1' && secondBinary === '1') return '10';
    if (firstBinary === '0' && secondBinary === '1' || firstBinary === '1' && secondBinary === '0') return '1';        
    if (firstBinary === '0' && secondBinary === '0') return '0';        

    const lengthOfMax = Math.max(firstBinary.length, secondBinary.length);
    const answerArray = new Array(lengthOfMax).fill('0');
    let reminder = '0';
    
    firstBinary = firstBinary.padStart(lengthOfMax, '0');
    secondBinary = secondBinary.padStart(lengthOfMax, '0');

    for (let i = lengthOfMax + 1; i >= 0; i--) {
        const firstBinaryElement = firstBinary[i];
        const secondBinaryElement = secondBinary[i];

        if (isTwoOne(firstBinaryElement, secondBinaryElement) && reminder === '0') {
            answerArray[i] = '0';
            reminder = '1';

            continue;
        }

        if (isTwoOne(firstBinaryElement, secondBinaryElement) && reminder === '1') {
            answerArray[i] = '1';
            reminder = '1';

            continue;
        }

        if (isAnyOne(firstBinaryElement, secondBinaryElement) && reminder === '0') {
            answerArray[i] = '1';

            continue;
        }

        if (isAnyOne(firstBinaryElement, secondBinaryElement) && reminder === '1') {
            answerArray[i] = '0';
            reminder = '1';

            continue;
        }

        if (isNoOne(firstBinaryElement, secondBinaryElement) && reminder === '0') {
            answerArray[i] = '0';

            continue;
        }

        if (isNoOne(firstBinaryElement, secondBinaryElement) && reminder === '1') {
            answerArray[i] = '1';
            reminder = '0';

            continue;
        }
    }

    return reminder === '1' ? `1${answerArray.join('')}` : answerArray.join('');
}

ioInterface.on('line', function (line) {
    if (lineNumber < 2) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const [firstBinary, secondBinary] = input;

    const answer = solution(firstBinary, secondBinary);

    process.stdout.write(answer + '\n');
})