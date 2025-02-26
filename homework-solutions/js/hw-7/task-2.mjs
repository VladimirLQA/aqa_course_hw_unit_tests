/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if(typeof word !== "string") {
    return false
  }
  return word.trim().toLowerCase() === word.trim().split('').reverse().join('').toLowerCase()
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  if(typeof sentence !== "string" || !sentence) {
    return []
  }
  let result = [];
  let sentenceArr = sentence.split(" ");
  let longestWord = 0;
  for (let word of sentenceArr) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }
  for (let word of sentenceArr) {
    if (word.length === longestWord) {
      result.push(word);
    }
  }
  return result;
}

export { isPalindrom, findLongestWords };
