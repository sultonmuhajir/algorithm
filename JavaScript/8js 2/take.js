/*
|--------------------------------------------------------------------------
| Enumerable Magic #25 - Take the First N Elements
|--------------------------------------------------------------------------
|
*/

function take(arr, n) {
   return arr.slice(0, n);
}


function take(arr, n) {
   return arr.reduce((acc, rec, index) => (index < n ? [...acc, rec] : acc), []);
}


function take(arr, n) {
   return arr.filter((elem, i) => i < n);
}


console.log(take([0, 1, 2, 3, 5, 8, 13], 3), [0, 1, 2]);