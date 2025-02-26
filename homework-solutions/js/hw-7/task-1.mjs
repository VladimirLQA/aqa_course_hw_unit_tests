/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...rest) {
  let result = []
  while(rest.length) {
    const element = rest.shift()
    if(Array.isArray(element)) {
      rest.unshift(...element)
      continue
    } else {
      result.push(element)
    }
  }
  return result
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
    function devideBy(sentence) {
      let result = [];
      let sentenseArr = sentence.trim().toLowerCase().split(" ");
      for (let i = 0; i < sentenseArr.length; i++) {
        let element = sentenseArr[i].trim();
        if (!element) {
          continue;
        }
        if (i === 0) {
          element = element[0].toLowerCase() + element.slice(1);
        } else {
          element = element = element[0].toUpperCase() + element.slice(1);
        }
        result.push(element);
      }
      return result.join("_");
    }
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
    function fibonacci(n) {
      if(n === 0) {
        return 0
      }
      let fibonacciOne = 1;
      let fibonacciTwo = 1;
      for (let i = 3; i <= n; i++) {
        let fibonacciThree = fibonacciOne + fibonacciTwo;
        fibonacciOne = fibonacciTwo
        fibonacciTwo = fibonacciThree
      }
      return fibonacciTwo
    }

export { mergeArrays, fibonacci, devideBy };
