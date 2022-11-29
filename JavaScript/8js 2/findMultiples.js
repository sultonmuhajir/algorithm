/*
|--------------------------------------------------------------------------
| Find Multiples of a Number
|--------------------------------------------------------------------------
|
*/

function findMultiples(integer, limit) {
   let res = [];
   for (let i = integer; i <= limit; i += integer) res.push(i);
   return res;
}


function findMultiples(integer, limit) {
   return [...Array((limit / integer) ^ 0)].map((_, idx) => ++idx * integer);
}


function findMultiples(integer, limit) {
   return Array.from({ length: ~~(limit / integer) }, (a, i) => i * integer + integer);
}


console.log(findMultiples(5, 25), [5, 10, 15, 20, 25]);
console.log(findMultiples(1, 2), [1, 2]);
console.log(findMultiples(5, 7), [5]);
console.log(findMultiples(4, 27), [4, 8, 12, 16, 20, 24]);
console.log(findMultiples(11, 54), [11, 22, 33, 44]);