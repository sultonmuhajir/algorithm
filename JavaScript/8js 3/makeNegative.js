/*
|--------------------------------------------------------------------------
| Return Negative
|--------------------------------------------------------------------------
|
*/

function makeNegative(num) {
   return num >= 0 ? -(num) : num;
}


const makeNegative = num => num >= 0 ? -(num) : num;


function makeNegative(num) {
   return -Math.abs(num);
}


console.log(makeNegative(42), -42);