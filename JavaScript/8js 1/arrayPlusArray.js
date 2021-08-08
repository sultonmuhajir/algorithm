/*
|--------------------------------------------------------------------------
| Array plus array
|--------------------------------------------------------------------------
|
*/

function arrayPlusArray(arr1, arr2) {
   return arr1.reduce((acc, curr) => acc + curr) + arr2.reduce((acc, curr) => acc + curr);
}


function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
}


function arrayPlusArray(arr1, arr2) {
   let arr = [...arr1, ...arr2];
   return arr.reduce((a, b) => a + b);
}


function arrayPlusArray(arr1, arr2) {
   let r = 0;
   for (let i = 0; i < arr1.length; i++) {
      r += arr1[i] + arr2[i];
   }
   return r;
}


function arrayPlusArray(...arrays) {
   return [].concat(...arrays).reduce((a, b) => a + b, 0)
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);