/*
|--------------------------------------------------------------------------
| What is between?
|--------------------------------------------------------------------------
|
*/

function between(a, b) {
   let res = [];
   for (let i = a; i <= b; i++) res.push(i);
   return res;
}


function between(a, b) {
   return Array.from(new Array(b - a + 1), (_, i) => a + i);
}


function between(a, b) {
   return [...Array(b - a + 1)].map((_, idx) => idx + a);
}


console.log(between(1, 4), [1, 2, 3, 4]);
console.log(between(-2, 2), [-2, -1, 0, 1, 2]);