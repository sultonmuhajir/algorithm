/*
|--------------------------------------------------------------------------
| Count by X
|--------------------------------------------------------------------------
|
*/

function countBy(x, n) {
   const mul = x
   let res = []
   for (let i = 0; i < n; i++) {
      res.push(x);
      x += mul
   }
   return res
}


function countBy(x, n) {
   return Array.from({
      length: n
   }, (v, k) => (k + 1) * x)
}


function countBy(x, n) {
   let res = []
   for (let i = 1; i <= n; i++) {
      res.push(x * i);
   }
   return res
}


function countBy(x, n) {
   return [...Array(n)].map((_, idx) => ++idx * x);
}


console.log(countBy(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(countBy(2, 5), [2, 4, 6, 8, 10])