/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  let resultArray = [];
  return resultArray.concat(...arrays);
}
console.log(mergeArrays([1,2], [3,4], [5,6]));

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */

function devideBy(sentence = '') {
  let resultSentence = [...sentence.trim().replace(/ +/g, '_').toLowerCase()];
  for (let i = 0; i < resultSentence.length; i++) {
    if (resultSentence[i] === '_') {
      resultSentence[i+1] = resultSentence[i+1].toUpperCase();
    }
  }
  return resultSentence.join('');
}
console.log(devideBy('I    am    an     engineer'));

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */

function fibonacci(n) {
  if (n >= 2) {
    let fibonachiArray = [0,1];
    for (let i = 2; i <= n; i++) {
      fibonachiArray.push(fibonachiArray[i-1]+fibonachiArray[i-2]); 
    }
    return fibonachiArray.at(-1);
  }
  else if ( n === 0 || n === 1) {
    return n;
  }
}
console.log(fibonacci(6));

export { mergeArrays, fibonacci, devideBy };
