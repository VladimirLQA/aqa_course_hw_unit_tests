/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив, в котором будут находиться все переданные в функцию в виде чисел
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/

function mergeArrays(...arrays) {
  // Ваш код
  return arrays.flat();
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
  // Убираем лишние пробелы и разделяем строку на слова
  const words = sentence.trim().split(/\s+/);

  // Если строка пустая, сразу возвращаем пустую строку
  if (words.length === 0) return '';

  // Первое слово с маленькой буквы
  let result = [words[0].toLowerCase()];

  // Все остальные слова с заглавной буквы
  for (let i = 1; i < words.length; i++) {
    result.push(words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase());
  }

  // Собираем строку с подчеркиваниями между словами
  return result.join('_');
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
  // Если n меньше 2, то возвращаем n (0 или 1)
  if (n < 2) return n;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b; // Возвращаем n-е число Фибоначчи
}

console.log(fibonacci(6)); // 8 (для F(6))

export { mergeArrays, fibonacci, devideBy };
