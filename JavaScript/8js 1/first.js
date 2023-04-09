/*
|--------------------------------------------------------------------------
| pick a set of first elements
|--------------------------------------------------------------------------
|
*/

function first(arr, n = 1) {
   return arr.slice(0, n);
}


const first = (arr, n = 1) => (n == 0 ? [] : arr.slice(0, n));


function first(arr, n = 1) {
   return arr.filter((_, i) => i < n);
}


console.log(first(["a", "b", "c", "d", "e"]), ["a"]);
console.log(first(["a", "b", "c", "d", "e"], 2), ["a", "b"]);