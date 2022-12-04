/*
|--------------------------------------------------------------------------
| Difference of Volumes of Cuboids
|--------------------------------------------------------------------------
|
*/

function findDifference(a, b) {
   return Math.abs(a.reduce((a, b) => a * b) - b.reduce((a, b) => a * b))
}


const find_difference = (a, b) => (c = (a, b) => a * b, Math.abs(a.reduce(c) - b.reduce(c)))


function findDifference(a, b) {
   return Math.abs(eval(a.join("*")) - eval(b.join("*")))
}


function find_difference(a, b) {
   return Math.abs(a[0] * a[1] * a[2] - b[0] * b[1] * b[2]);
}


console.log(findDifference([3, 2, 5], [1, 4, 4]), 14);
console.log(findDifference([9, 7, 2], [5, 2, 2]), 106);
console.log(findDifference([11, 2, 5], [1, 10, 8]), 30);
console.log(findDifference([4, 4, 7], [3, 9, 3]), 31);
console.log(findDifference([15, 20, 25], [10, 30, 25]), 0);