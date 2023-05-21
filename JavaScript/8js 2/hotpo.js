/*
|--------------------------------------------------------------------------
| Collatz Conjecture (3n+1)
|--------------------------------------------------------------------------
|
*/

function hotpo(n) {
   return n === 1 ? 0 : 1 + hotpo(n % 2 ? n * 3 + 1 : n / 2);
}


const hotpo = (n) => (n < 2 ? 0 : hotpo(n % 2 ? 3 * n + 1 : n / 2) + 1);


function hotpo(n) {
   let res = 0;
   while (n > 1) {
      res++;
      n = n % 2 ? n * 3 + 1 : n / 2;
   }
   return res;
}


console.log(hotpo(1), 0);
console.log(hotpo(5), 5);
console.log(hotpo(6), 8);
console.log(hotpo(23), 15);