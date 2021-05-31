function positiveSum(arr) {
   const filter = arr.filter(item => item >= 0);
   return filter.length == 0 ? 0 : filter.reduce((total, value) => total + value);
}


function positiveSum(arr) {
   var total = 0;
   for (i = 0; i < arr.length; i++) {
      if (arr[i] > 0) {
         total += arr[i];
      }
   }
   return total;
}


function positiveSum(arr) {
   return arr.reduce((a, b) => a + (b > 0 ? b : 0), 0);
}


const positiveSum = (arr) => arr.reduce((sum, n) => n > 0 ? sum + n : sum, 0);


console.log(positiveSum([1, 2, 3, 4, 5]), 15);
console.log(positiveSum([1, -2, 3, 4, 5]), 13);
console.log(positiveSum([]), 0);
console.log(positiveSum([-1, -2, -3, -4, -5]), 0);
console.log(positiveSum([-1, 2, 3, 4, -5]), 9);
