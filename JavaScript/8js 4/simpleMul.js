/*
|--------------------------------------------------------------------------
| Simple multiplication
|--------------------------------------------------------------------------
|
*/

function simpleMultiplication(number) {
   return number % 2 == 0 ? number * 8 : number * 9;
}


function simpleMultiplication(n) {
   return n * (n % 2 ? 9 : 8);
}


function simpleMultiplication(number) {
   return (8 + number % 2) * number;
}


console.log(simpleMultiplication(2), 16)
console.log(simpleMultiplication(1), 9)
console.log(simpleMultiplication(8), 64)
console.log(simpleMultiplication(4), 32)
console.log(simpleMultiplication(5), 45)