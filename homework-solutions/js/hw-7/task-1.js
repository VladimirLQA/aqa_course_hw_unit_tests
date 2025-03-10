/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  return arrays.flat().filter((item) => typeof item === 'number'); // Ваш код
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1).replace(/ /g, '_');
  // Ваш код
}
console.log(devideBy('I am super engineer'));
/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
    первые два числа которой являются 0 и 1, а каждое последующее за ними число является суммой двух предыдущих
    - Например fibonacci(8) //21
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2) для n ≥ 2
  */
function fibonacci(n) {
  // Ваш код
  if (n <= 1) {
    return n; // Базовый случай: F(0) = 0, F(1) = 1
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов
}

console.log(fibonacci(6)); // 8 (для F(6))

export { mergeArrays, fibonacci, devideBy };
