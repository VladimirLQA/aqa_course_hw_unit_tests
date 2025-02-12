/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

let num = 3
let = resultString = num + +(String(num) + num) + +(String(num) + num + num)
console.log(resultString)