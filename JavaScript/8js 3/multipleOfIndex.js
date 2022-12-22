/*
|--------------------------------------------------------------------------
| Multiple of index
|--------------------------------------------------------------------------
|
*/

function multipleOfIndex(array) {
   return array.filter((v, i) => v % i == 0);
}


const multipleOfIndex = (array) => array.filter((val, idx) => val % idx === 0);


function multipleOfIndex(array) {
   let res = [];
   for (let i = 1; i < array.length; i++) {
      if (array[i] % i == 0) {
         res.push(array[i]);
      }
   }
   return res;
}


console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]), [-6, 32, 25]);
console.log(multipleOfIndex([68, -1, 1, -7, 10, 10]), [-1, 10]);
console.log(multipleOfIndex([11, -11]), [-11]);
console.log(multipleOfIndex([28, 38, -44, -99, -13, -54, 77, -51]), [38, -44, -99]);
console.log(multipleOfIndex([-1, -49, -1, 67, 8, -60, 39, 35]), [-49, 8, -60, 35]);