/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  if (typeof word === 'string') {
    for (let i = 0; i < Math.floor(word.length/2); i++ ) {
      if (word[i].toLowerCase() !== word.at(-1-i).toLowerCase()) {
        return false;
      }
    }
    return true;

  }
  else {
    return false;
  } 
}
console.log(isPalindrom('dfgd5dgfD'));

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence = '') {
  if (typeof sentence !== 'string' || sentence === '') {
    return [];
  }
  else {
    let sentenceInArray = sentence.replace(/ +/g,' ').split(' ');
    let result = []; 
    let longestWord = sentenceInArray[0].match(/[a-zA-Z]/g).join('');
    for (let i = 0; i < sentenceInArray.length; i++) {
      if (sentenceInArray[i].match(/[a-zA-Z]/g).join('').length === longestWord.length) {
        result.push(sentenceInArray[i]);
      }
      else if ((sentenceInArray[i].match(/[a-zA-Z]/g).join('').length > longestWord.length)) {
        result.splice(0);
        result.push(sentenceInArray[i]);
        longestWord = sentenceInArray[i].match(/[a-zA-Z]/g).join('');
      }
    }
      return result;
  }
}
console.log(findLongestWords('It\'s    crazy, this\'s a party'));
console.log(findLongestWords(123));

export { isPalindrom, findLongestWords };