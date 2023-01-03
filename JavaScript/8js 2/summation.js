/*
|--------------------------------------------------------------------------
| Grasshopper - Summation
|--------------------------------------------------------------------------
|
*/

function summation(num) {
   let result = 0;
   for (i = 1; i <= num; i++) {
      hasil = result += i;
   }
   return hasil;
}


const summation = n => n * (n + 1) / 2;


console.log(summation(1), 1)
console.log(summation(8), 36)