/*
|--------------------------------------------------------------------------
| Invert values
|--------------------------------------------------------------------------
|
*/

function invert(array) {
   let hasil = [];
   for (let i in array) {
      array[i] > 0 ? array[i] = array[i] * -1 : array[i] -= array[i] * 2;
      hasil.push(array[i]);
   }
   return hasil;
}


const invert = array => array.map(num => -num);


function invert(array) {
   return array.map(x => x === 0 ? x : -x);
}


console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);