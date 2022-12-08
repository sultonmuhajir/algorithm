/*
|--------------------------------------------------------------------------
| Calculate average
|--------------------------------------------------------------------------
|
*/

function find_average(array) {
   return array.length == 0 ? 0 : array.reduce((acc, cur) => acc + cur) / array.length;
}


const find_average = (array) => [0, ...array].reduce((a, b, index) => a + (b / array.length));


function find_average(array) {
   if (array.length === 0) {
      return 0;
   }
   let result = 0;
   for (i = 0; i < array.length; i++) {
      result += array[i];
   }
   return result / array.length;
}


function find_average(array) {
   return s = 0, array.map(v => s += v), s / array.length;
}


console.log(find_average([1, 1, 1]), 1);
console.log(find_average([]), 0);
console.log(find_average([1, 2, 3]), 2);
console.log(find_average([1, 2, 3, 4]), 2.5);