/*
|--------------------------------------------------------------------------
| Convert to Binary
|--------------------------------------------------------------------------
|
*/

function toBinary(n) {
   return Number(n.toString(2));
}


function toBinary(n) {
   let arr = [];
   for (let i = n; i >= 1; i = Math.floor(i / 2)) {
      arr.push(i % 2 === 0 ? 0 : 1);
   }
   return Number(arr.reverse().join(""));
}


function toBinary(n) {
   return +n.toString(2);
}


console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);