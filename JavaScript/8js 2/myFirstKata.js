/*
|--------------------------------------------------------------------------
| Fix the Bugs (Syntax) - My First Kata
|--------------------------------------------------------------------------
|
*/

function myFirstKata(a, b) {
   return typeof a == 'number' && typeof b == 'number' ? a % b + b % a : false;
}


function myFirstKata(a, b) {
   return [a, b].every(Number.isFinite) ? a % b + b % a : false
}


function myFirstKata(a, b) {
   return +a === a && +b === b ? a % b + b % a : false;
}


function myFirstKata(a, b) {
   if ([a, b].some(x => typeof x !== 'number')) return false;
   return (a % b) + (b % a);
}


console.log(myFirstKata(3, 5), (3 % 5 + 5 % 3));
console.log(myFirstKata("hello", 3), false);
console.log(myFirstKata(67, "bye"), false);
console.log(myFirstKata(true, true), false);
console.log(myFirstKata(314, 107), (107 % 314 + 314 % 107));
console.log(myFirstKata(19483, 9), (9 % 19483 + 19483 % 9));