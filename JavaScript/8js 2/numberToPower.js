/*
|--------------------------------------------------------------------------
| Power
|--------------------------------------------------------------------------
|
*/

function numberToPower(number, power) {
   let res = 1;
   for (let i = 0; i < power; i++) res *= number;
   return res;
}


function numberToPower(number, power) {
   if (power == 0) return 1;
   return number * numberToPower(number, power - 1);
}


function numberToPower(number, power) {
   return Array(power)
      .fill(number)
      .reduce((res, n) => res * n, 1);
}


console.log(numberToPower(4, 2), 16);
console.log(numberToPower(10, 4), 10000);
console.log(numberToPower(10, 0), 1);