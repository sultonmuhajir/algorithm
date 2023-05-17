/*
|--------------------------------------------------------------------------
| NBA full 48 minutes average
|--------------------------------------------------------------------------
|
*/

function pointsPer48(ppg, mpg) {
   return Math.round(((ppg * 48) / mpg) * 10) / 10 || 0;
}


const pointsPer48 = (p, t) => t && +((48 / t) * p).toFixed`1`;


function pointsPer48(ppg, mpg) {
   return +((ppg / mpg) * 48).toFixed(1) || 0;
}


console.log(pointsPer48(12, 20), 28.8);
console.log(pointsPer48(10, 10), 48.0);
console.log(pointsPer48(5, 17), 14.1);
console.log(pointsPer48(0, 0), 0);
console.log(pointsPer48(30.8, 34.7), 42.6);
console.log(pointsPer48(22.9, 33.8), 32.5);