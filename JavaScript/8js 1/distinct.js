/*
|--------------------------------------------------------------------------
| Remove duplicates from list
|--------------------------------------------------------------------------
|
*/

function distinct(a) {
   return [...new Set(a)];
}


function distinct(a) {
   return a.filter((v, i) => a.indexOf(v) == i);
}


function distinct(a) {
   return Array.from(new Set(a));
}


console.log(distinct([1]), [1]);
console.log(distinct([1, 2]), [1, 2]);
console.log(distinct([1, 1, 2]), [1, 2]);