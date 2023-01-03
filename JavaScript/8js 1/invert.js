/*
|--------------------------------------------------------------------------
| Invert values
|--------------------------------------------------------------------------
|
*/

const invert = array => array.map(num => -num);


function invert(array) {
   return array.map(x => x === 0 ? x : -x);
}


const invert = a => a.map(n => ~~-n)


function invert(array) {
   return array.map(n => n && -n)
}


function invert(array) {
   return array.map(e => e * -1);
}


// function invert(array) {
//    let hasil = [];
//    for (let i in array) {
//       array[i] > 0 ? array[i] = array[i] * -1 : array[i] -= array[i] * 2;
//       hasil.push(array[i]);
//    }
//    return hasil;
// }


console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [-0]);