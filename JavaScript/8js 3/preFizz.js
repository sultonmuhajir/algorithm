/*
|--------------------------------------------------------------------------
| Pre-FizzBuzz Workout #1
|--------------------------------------------------------------------------
|
*/

function preFizz(n) {
   let res = [];
   for (let i = 1; i <= n; i++) {
      res.push(i);
   }
   return res;
}


function preFizz(n) {
   return [...Array(n)].map((_, i) => i + 1)
}


function preFizz(n) {
   return Array.from({
      length: n
   }, (_, i) => i + 1)
}


console.log(preFizz(1), [1]);
console.log(preFizz(2), [1, 2]);
console.log(preFizz(3), [1, 2, 3]);
console.log(preFizz(4), [1, 2, 3, 4]);
console.log(preFizz(5), [1, 2, 3, 4, 5]);