/*
|--------------------------------------------------------------------------
| Sum Mixed Array
|--------------------------------------------------------------------------
|
*/

function sumMix(x) {
   return x.map(i => Number(i)).reduce((a, b) => a + b);
}


const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);


function sumMix(x) {
   let result = 0;
   for (let n of x) {
      result += parseInt(n);
   }
   return result;
}


function sumMix(x) {
   return x.reduce((s, x) => s + +x, 0);
}


function sumMix(x) {
   return eval(x.join("+"))
}


console.log(sumMix([9, 3, '7', '3']), 22);
console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
console.log(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']), 41);