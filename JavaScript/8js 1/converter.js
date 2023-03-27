/*
|--------------------------------------------------------------------------
| Miles per gallon to kilometers per liter
|--------------------------------------------------------------------------
|
*/

function converter(mpg) {
   return Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
}


function converter(mpg) {
   return +(mpg * 0.354006043538).toFixed(2);
}


function converter(mpg) {
   return Math.round(mpg * 35.400604353821375031) / 100;
}


console.log(converter(10), 3.54);
console.log(converter(20), 7.08);
console.log(converter(30), 10.62);