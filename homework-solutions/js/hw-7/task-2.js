/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

/*function isPalindrom(word) {
  const newWord = word.split('').reverse().join('');
  return word === newWord;
  // Ваш код
}
*/
function isPalindrom(word) {
  // Проверка, что word является строкой
  if (typeof word !== 'string') {
    return false; // Возвращаем false, если вход не строка
  }

  // Приводим строку к нижнему регистру, чтобы игнорировать регистр при проверке
  const lowerWord = word.toLowerCase();

  // Преобразуем слово в обратный порядок и проверяем на равенство
  const newWord = lowerWord.split('').reverse().join('');
  return lowerWord === newWord;
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

/*function findLongestWords(sentence) {
  
  const words = sentence.split(' '); //Разбиваем предложение на массив слов
  let maxLength = 0;
  let longestWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWords = [words[i]]; // Обновляем массив, если нашли слово длиннее
    } else if (words[i].length === maxLength) {
      longestWords.push(words[i]); // Добавляем, если длина совпадает с максимальной
    }
  }
  return longestWords;
  
}
 */
function findLongestWords(sentence) {
  // Проверяем, что передан строковый параметр
  if (typeof sentence !== 'string') {
    return []; // Вместо ошибки возвращаем пустой массив
  }

  // Убираем лишние пробелы в начале и в конце строки, а затем разбиваем строку на массив слов
  const words = sentence.trim().split(' ');

  // Если строка пуста, возвращаем пустой массив
  if (words.length === 1 && words[0] === '') {
    return [];
  }

  let maxLength = 0;
  let longestWords = [];

  // Проходим по каждому слову в массиве
  for (let i = 0; i < words.length; i++) {
    // Если текущая длина слова больше максимальной, обновляем maxLength и longestWords
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      longestWords = [words[i]]; // Создаем новый массив с единственным длинным словом
    }
    // Если длина слова равна максимальной, добавляем его в массив longestWords
    else if (words[i].length === maxLength) {
      longestWords.push(words[i]);
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
