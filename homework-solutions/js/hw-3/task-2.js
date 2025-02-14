/*
Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются
*/
 let a = 5;
 console.log(a)
 let b = String(a) + a;
 let modifiedTypeb = Number(b)
 console.log(modifiedTypeb)
 let c = String(a) + a + a;
 let modifiedTypec = Number(c)
 console.log(modifiedTypec)
 console.log (a + modifiedTypeb + modifiedTypec)
