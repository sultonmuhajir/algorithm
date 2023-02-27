/*
|--------------------------------------------------------------------------
| Are arrow functions odd?
|--------------------------------------------------------------------------
|
*/

function odds(values) {
   return values.filter((i) => i % 2 != 0);
}


function odds(values) {
   return values.filter((x) => x & 1);
}


function odds(values) {
   return values.filter((v) => v % 2);
}


console.log(odds([]), []);
console.log(odds([2, 4, 6]), []);
console.log(odds([1, 3, 5]), [1, 3, 5]);
console.log(odds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);