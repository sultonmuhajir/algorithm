/*
|--------------------------------------------------------------------------
| What's the real floor?
|--------------------------------------------------------------------------
|
*/

function getRealFloor(n) {
   return n - (n > 13 ? 2 : n > 0 ? 1 : 0);
}


function getRealFloor(n) {
   return n > 0 ? --n - (n >= 13) : n;
}


function getRealFloor(n) {
   return n > 0 ? n - 1 - (n > 12) : n;
}


console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);