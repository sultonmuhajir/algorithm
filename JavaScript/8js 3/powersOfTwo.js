/*
|--------------------------------------------------------------------------
| Powers of 2
|--------------------------------------------------------------------------
|
*/

function powersOfTwo(n) {
   let res = [];
   for (let i = 0; i <= n; i++) res.push(2 ** i);
   return res;
}


function powersOfTwo(n) {
   return [...Array(n + 1)].map((_, i) => 2 ** i);
}


function powersOfTwo(n) {
   return Array.from({ length: n + 1 }, (v, k) => 2 ** k);
}


console.log(powersOfTwo(0), [1]);
console.log(powersOfTwo(1), [1, 2]);
console.log(powersOfTwo(4), [1, 2, 4, 8, 16]);