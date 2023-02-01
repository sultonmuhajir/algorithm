/*
|--------------------------------------------------------------------------
| Enumerable Magic - Does My List Include This?
|--------------------------------------------------------------------------
|
*/

function include(arr, item) {
   return arr.includes(item);
}


function include(arr, item) {
   return arr.indexOf(item) > -1;
}


function include(arr, item) {
   return arr.some((n) => n === item);
}


console.log(include([1, 2, 3, 4], 3), true);
console.log(include([1, 2, 4, 5], 3), false);
console.log(include([], 3), false);