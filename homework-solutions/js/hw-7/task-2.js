/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

/*function isPalindrom(word) {
  const newWord = word.split('').reverse().join('');
  return word === newWord;
  // Ваш код
  // Проверяем, что вход - это строка
  if (typeof word !== 'string') {
    return false;
  }

  // Приводим строку к нижнему регистру и убираем пробелы
  word = word.toLowerCase().replace(/\s/g, '');

  // Сравниваем слово с его перевёрнутой версией
  return word === word.split('').reverse().join('');
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
  // Ваш код
  if (typeof sentence !== 'string') {
    return [];
  }

  // Если строка пуста, возвращаем пустой массив
  if (sentence.trim() === '') {
    return [];
  }

  // Разделяем предложение на слова
  const words = sentence.split(' ');

  let maxLength = 0;
  let longestWords = [];

  // Проходим по каждому слову
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;

    // Если текущее слово длиннее найденного максимума
    if (wordLength > maxLength) {
      maxLength = wordLength; // Обновляем максимальную длину
      longestWords = [words[i]]; // Начинаем новый список с текущим словом
    }
    // Если длина текущего слова равна максимальной длине
    else if (wordLength === maxLength) {
      longestWords.push(words[i]); // Добавляем текущее слово в список
    }
  }

  return longestWords;
}

export { isPalindrom, findLongestWords };
