/*
|--------------------------------------------------------------------------
| Smallest unused ID
|--------------------------------------------------------------------------
|
*/

function nextId(ids) {
   let x = [...new Set(ids)].sort((a, b) => a - b);
   for (let i = 0; i < x.length; i++) {
      if (x[i] != i) return i;
   }
   return x.length;
}


function nextId(ids) {
   let x = 0;
   while (ids.includes(x)) x++;
   return x;
}


function nextId(ids) {
   let x = new Set(ids);
   for (let i = 0; i <= ids.length; i++) {
      if (!x.has(i)) return i;
   }
}


console.log(nextId([0, 1, 2, 3, 5]), 4);
console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 11);
console.log(nextId([1, 2, 0, 2, 3, 5]), 4);