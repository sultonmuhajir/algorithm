/*
|--------------------------------------------------------------------------
| Twice as old
|--------------------------------------------------------------------------
|
*/

function twiceAsOld(d, s) {
   return (d - s) >= s ? (d - s) - s : ((d - s) - s) * -1
}


const twiceAsOld = (d, s) => Math.abs(d - s - s)


function twiceAsOld(dadYearsOld, sonYearsOld) {
   return Math.abs(2 * sonYearsOld - dadYearsOld);
}


function twiceAsOld(a, b) {
   return a > 2 * b ? a - 2 * b : 2 * b - a;
}


console.log(twiceAsOld(36, 7), 22);
console.log(twiceAsOld(55, 30), 5);
console.log(twiceAsOld(42, 21), 0);
console.log(twiceAsOld(44, 21), -2);
console.log(twiceAsOld(22, 1), 20);
console.log(twiceAsOld(29, 0), 29);