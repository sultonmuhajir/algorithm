/*
|--------------------------------------------------------------------------
| If you can't sleep, just count sheep!!
|--------------------------------------------------------------------------
|
*/

function countSheep(num) {
   let res = '';
   for (let i = 1; i <= num; i++) {
      res += `${i} sheep...`;
   }
   return res
}


const countSheep = n => [...Array(n).keys()].map(x => `${x+1} sheep...`).join ``


const countSheep = length =>
   Array.from({
      length
   }, (_, i) => ++i + ' sheep...').join('')


const countSheep = function (n) {
   return [...Array(n)].map((_, i) => i + 1 + ' sheep...').join ``
}


console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");