/*
|--------------------------------------------------------------------------
| Gravity Flip
|--------------------------------------------------------------------------
|
*/

function flip(d, a) {
   return a.sort((x, y) => d === 'R' ? x - y : y - x);
}


function flip(d, a) {
   return a.sort((v, w) => ({
      R: v - w,
      L: w - v
   } [d]));
}


function flip(d, a) {
   return a.sort((a, b) => d === 'L' && b - a || a - b)
}


console.log(flip('R', [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip('L', [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);