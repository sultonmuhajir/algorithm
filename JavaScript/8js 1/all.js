/*
|--------------------------------------------------------------------------
| Enumerable Magic #1 - True for All?
|--------------------------------------------------------------------------
|
*/

function all(arr, fun) {
   return arr.every(fun);
}


const all = (arr, fun) => arr.every(fun);


function all(arr, fun) {
   for (let i = 0; i < arr.length; i++) {
      if (!fun(arr[i])) return false;
   }
   return true;
}


console.log(
   all([1, 2, 3, 4, 5], function (v) {
      return v < 9;
   }),
   true
);
console.log(
   all([1, 2, 3, 4, 5], function (v) {
      return v > 9;
   }),
   false
);