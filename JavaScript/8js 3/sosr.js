/*
|--------------------------------------------------------------------------
| To square(root) or not to square(root)
|--------------------------------------------------------------------------
|
*/

function squareOrSquareRoot(array) {
   return array.map(i => Math.sqrt(i) % 1 != 0 ? Math.pow(i, 2) : Math.sqrt(i))
}


const squareOrSquareRoot = arr => arr.map(n => n ** 0.5 % 1 ? n * n : n ** 0.5);


function squareOrSquareRoot(array) {
   return array.map(e => Number.isInteger(Math.sqrt(e)) ? Math.sqrt(e) : e * e);
}


function squareOrSquareRoot(array) {
   let res = [];
   for (let i = 0; i < array.length; i++) {
      if ((array[i] ** 0.5) % 1 === 0) {
         res.push(array[i] ** 0.5);
      } else {
         res.push(array[i] ** 2);
      }
   }
   return res;
}


console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]), [2, 9, 3, 49, 4, 1]);
console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]), [10, 10201, 25, 25, 1, 1]);
console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6]), [1, 4, 9, 2, 25, 36]);