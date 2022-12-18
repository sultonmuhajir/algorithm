/*
|--------------------------------------------------------------------------
| SpeedCode #2 - Array Madness
|--------------------------------------------------------------------------
|
*/

function arrayMadness(a, b) {
   return (
      a.map((i) => i ** 2).reduce((x, y) => x + y) > b.map((i) => i ** 3).reduce((x, y) => x + y)
   );
}


function arrayMadness(a, b) {
   return a.reduce((pre, val) => pre + val ** 2, 0) > b.reduce((pre, val) => pre + val ** 3, 0);
}


function arrayMadness(a, b) {
   const x = (arr, n) => arr.map((v) => v ** n).reduce((a, b) => a + b);
   return x(a, 2) > x(b, 3);
}


console.log(arrayMadness([4, 5, 6], [1, 2, 3]), true);
console.log(arrayMadness([5, 6, 7], [4, 5, 6]), false);
console.log(arrayMadness([4, 5, 6], [3, 4, 5]), false);
console.log(arrayMadness([3, 4, 5], [2, 3, 4]), false);
console.log(arrayMadness([1, 2, 3, 4, 5], [2, 2, 2, 2, 2, 2, 1, 1, 1]), true);