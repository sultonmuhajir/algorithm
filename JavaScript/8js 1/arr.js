/*
|--------------------------------------------------------------------------
| Filling an array (part 1)
|--------------------------------------------------------------------------
|
*/

function arr(N) {
   let res = [];
   for (let i = 0; i < N; i++) {
      res.push(i);
   }
   return res;
}


const arr = n => n ? [...Array(n).keys()] : [];


function arr(n) {
   return Array.from({
      length: n
   }, (_, i) => i);
}


function arr(n) {
   return [...Array(n)].map((_, i) => i);
}


console.log(arr(5));