/*
|--------------------------------------------------------------------------
| Exclusive "or" (xor) Logical Operator
|--------------------------------------------------------------------------
|
*/

function xor(a, b) {
   return (a ^ b) == 1 ? true : false;
}


function xor(a, b) {
   return a != b;
}


function xor(a, b) {
   return !!(a ^ b);
}


function xor(a, b) {
   return (a || b) && !(a && b);
}


console.log(xor(false, false), false);
console.log(xor(true, false), true);
console.log(xor(false, true), true);
console.log(xor(true, true), false);
console.log(xor(true, true), true);