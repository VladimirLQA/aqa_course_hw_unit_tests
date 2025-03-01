/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1
  193 = 1+9+3 = 13 = 1+3 = 4;

*/

let numberAsArray = [];
function digitalRoot(number) {
  if (number === 0 || typeof number !== 'number') return 0;
  let sumOfDigits = 0;
  numberAsArray = [...''+ number];
  for (let el of numberAsArray) {
    sumOfDigits += +el;    
  }
  if (sumOfDigits <= 9 && sumOfDigits > 0) return sumOfDigits;
  return digitalRoot(sumOfDigits);
}
console.log(digitalRoot(12));

export { digitalRoot };
