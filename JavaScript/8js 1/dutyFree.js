/*
|--------------------------------------------------------------------------
| Holiday VIII - Duty Free
|--------------------------------------------------------------------------
|
*/

function dutyFree(normPrice, discount, hol) {
   return Math.floor(hol / normPrice / discount * 100);
}


function dutyFree(normPrice, discount, hol) {
   return hol / (normPrice * discount / 100) ^ 0;
}


function dutyFree(normPrice, discount, hol) {
   return Math.floor(1 / (normPrice * discount / 100) * hol);
}


function dutyFree(normPrice, discount, hol) {
   return ~~(100 * hol / normPrice / discount)
}


console.log(dutyFree(10, 10, 500), 500);
console.log(dutyFree(12, 50, 1000), 166);
console.log(dutyFree(17, 10, 500), 294);
console.log(dutyFree(24, 35, 3000), 357);