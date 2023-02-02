/*
|--------------------------------------------------------------------------
| Grasshopper - Array Mean
|--------------------------------------------------------------------------
|
*/

function findAverage(nums) {
   return nums.reduce((a, b) => a + b) / nums.length;
}


const findAverage = (nums) => nums.reduce((pre, val) => pre + val, 0) / nums.length;


function findAverage(nums) {
   let res = 0;
   for (let num of nums) {
      res += num;
   }
   return res / nums.length;
}


console.log(findAverage([1]), 1);
console.log(findAverage([1, 3, 5, 7]), 4);