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

function sortedByVowels(wordsArr) {
  let vowels = "aeiouy";
  function coutVowels(word) {
    let count = 0;
    for (let element of word) {
      if (vowels.includes(element)) {
        count++;
      }
    }
    return count
  }
  return wordsArr.sort((a, b) => coutVowels(a) - coutVowels(b))
}


export { sortedByVowels };
