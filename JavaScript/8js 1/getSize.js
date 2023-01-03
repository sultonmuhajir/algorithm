/*
|--------------------------------------------------------------------------
| Surface Area and Volume of a Box
|--------------------------------------------------------------------------
|
*/

function getSize(w, h, d) {
   return [2 * (w * h + w * d + h * d), w * h * d]
}


function getSize(w, h, d) {
   return [((w + h) << 1) * d + (w * h << 1), w * h * d];
}


function getSize(w, h, d) {
   return [2 * w * h + 2 * w * d + 2 * d * h, w * h * d]
}


console.log(getSize(4, 2, 6), [88, 48]);
console.log(getSize(10, 10, 10), [600, 1000]);