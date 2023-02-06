/*
|--------------------------------------------------------------------------
| Sum of differences in array
|--------------------------------------------------------------------------
|
*/

function sumOfDifferences(arr) {
   let sort = arr.sort((a, b) => b - a);
   let res = 0;
   for (let i = 1; i < sort.length; i++) {
      res += sort[i - 1] - sort[i];
   }
   return res;
}


function sumOfDifferences(arr) {
   return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}


function sumOfDifferences(arr) {
   return arr.sort((a, b) => b - a).shift() - arr.pop() || 0;
}


function sumOfDifferences(arr) {
   return arr
      .sort((a, b) => b - a)
      .map((a, i) => a - arr[i + 1] || 0)
      .reduce((a, b) => a + b, 0);
}


console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
console.log(sumOfDifferences([13, -21, -15]), 34);