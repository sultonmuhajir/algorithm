/*
|--------------------------------------------------------------------------
| Compare within margin
|--------------------------------------------------------------------------
|
*/

function closeCompare(a, b, margin = 0) {
   return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}


const closeCompare = (a, b, margin) => (Math.abs(a - b) <= margin ? 0 : Math.sign(a - b));


function closeCompare(a, b, margin = 0) {
   return Math.abs(a - b) > margin ? [1, -1].at(a < b) : 0;
}


console.log(closeCompare(4, 5), -1);
console.log(closeCompare(5, 5), 0);
console.log(closeCompare(6, 5), 1);
console.log(closeCompare(-6, -5), -1);
console.log(closeCompare(2, 5, 3), 0);
console.log(closeCompare(8.1, 5, 3), 1);
console.log(closeCompare(1.99, 5, 3), -1);