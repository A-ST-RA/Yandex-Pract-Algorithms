const readline = require('readline');
const ioInterface = readline.createInterface({input: process.stdin});

const input = [];
let lineNumber = 0;

function solution(length, sentence) {
    let maxWord = '';
    let maxWordLength = 0;

    let tempWord = '';

    for (let i = 0; i < length; i++) {
        tempWord += sentence[i] === ' ' ? '' : sentence[i];
        
        if (sentence[i] === ' ' || i === length - 1) {
            if (tempWord.length > maxWordLength) {
                maxWord = tempWord;
                maxWordLength = tempWord.length;
            }

            tempWord = '';
        }
    }

    return `${maxWord}\n${maxWordLength}\n`;
}

ioInterface.on('line', function (line) {
    if (lineNumber < 2) {
        input.push(line);
        lineNumber++;
    }
})

ioInterface.on('close', function () {
    const [length, sentence] = input;

    const answer = solution(length, sentence);

    process.stdout.write(answer + '\n');
})