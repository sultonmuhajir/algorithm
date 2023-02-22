/*
|--------------------------------------------------------------------------
| Sum Arrays
|--------------------------------------------------------------------------
|
*/

function sum(numbers) {
   return numbers.length == 0 ? 0 : numbers.reduce((a, b) => a + b);
}


const sum = n => n.length && n.shift() + sum(n)


function sum(numbers) {
   return numbers.reduce((a, b) => a + b, 0);
}


function sum(numbers) {
   let res = 0;
   for (let i = 0; i < numbers.length; i++) {
      res += numbers[i];
   }
   return res;
}


function sum(numbers) {
   return numbers.length == 0 ? 0 : numbers.shift() + sum(numbers);
}


console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);