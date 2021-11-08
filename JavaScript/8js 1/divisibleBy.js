/*
|--------------------------------------------------------------------------
| Find numbers which are divisible by given number
|--------------------------------------------------------------------------
|
*/

function divisibleBy(numbers, divisor) {
   return numbers.filter(i => i % divisor == 0);
}


const divisibleBy = (numbers, divisor) => numbers.filter(number => !(number % divisor));


function divisibleBy(numbers, divisor) {
   let res = [];
   for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor === 0) {
         res.push(numbers[i]);
      }
   }
   return res;
}


function divisibleBy(numbers, divisor) {
   return numbers.filter(n => n / divisor % 1 == 0);
}


console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2), [2, 4, 6]);
console.log(divisibleBy([1, 2, 3, 4, 5, 6], 3), [3, 6]);
console.log(divisibleBy([0, 1, 2, 3, 4, 5, 6], 4), [0, 4]);
console.log(divisibleBy([0], 4), [0]);
console.log(divisibleBy([1, 3, 5], 2), []);