/*
|--------------------------------------------------------------------------
| Find the Remainder
|--------------------------------------------------------------------------
|
*/

function remainder(a, b) {
   return Math.max(a, b) % Math.min(a, b)
}


function remainder(a, b) {
   return a > b ? a % b : b % a;
}


function remainder(a, b) {
   return Math.max(a, b) % (Math.min(a, b) || NaN);
}


function remainder(a, b) {
   let [min, max] = [...arguments].sort((a, b) => a - b);
   return max % min;
}


console.log(remainder(17, 5));
console.log(remainder(13, 72));
console.log(remainder(0, -1));
console.log(remainder(0, 1));