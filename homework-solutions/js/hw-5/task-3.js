/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';

let vowelsAndConsonantsResult = '';

let vowels = "aeiouy" 
let countVowels = 0
for(let i = 0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
        ++countVowels
    }
}
vowelsAndConsonantsResult = `${word} contains ${countVowels} vowels and ${word.length - countVowels} consonants`;


export { vowelsAndConsonantsResult };
