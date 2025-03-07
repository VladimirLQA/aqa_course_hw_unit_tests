/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr = []) {
  let result = [...wordsArr];
  result.sort((a, b) => a.match(/[aeiouy]/g).length - b.match(/[aeiouy]/g).length);
  return result;
}
console.log(sortedByVowels(words))      
    
export { sortedByVowels };