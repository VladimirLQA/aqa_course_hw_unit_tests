/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */

const word = 'hello';
let vowelsAndConsonantsResult = '';
const vowelLetters = 'aeiouy';
const consonantLetters = 'bcdfghjklmnpqrstvwxz';
let countOfvowels = 0;
let countOfConsonants = 0;
for (let i = 0; i < word.length; i++) {
    if (vowelLetters.includes(word[i])) {
        countOfvowels += 1;
    }
    else if (consonantLetters.includes(word[i])) {
        countOfConsonants += 1;
    }
}
vowelsAndConsonantsResult = `hello contains ${countOfvowels} vowels and ${countOfConsonants} consonants`;
console.log(vowelsAndConsonantsResult);

export { vowelsAndConsonantsResult };
