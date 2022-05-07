/*
|--------------------------------------------------------------------------
| Area of a Square
|--------------------------------------------------------------------------
|
*/

function squareArea(A) {
   return Number((((A * 4) / (2 * Math.PI)) ** 2).toFixed(2))
}


function squareArea(A) {
   return Math.round(Math.pow(A * 2 / Math.PI, 2) * 100) / 100
}


function squareArea(A) {
   return +Math.pow((4 * A) / (Math.PI * 2), 2).toFixed(2);
}


function squareArea(A) {
   return Math.round((A / Math.PI) ** 2 * 400) / 100;
}


console.log(squareArea(2), 1.62);
console.log(squareArea(0), 0);
console.log(squareArea(14.05), 80);