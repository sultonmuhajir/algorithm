/*
|--------------------------------------------------------------------------
| Sum of Multiples
|--------------------------------------------------------------------------
|
*/

function sumMul(n, m) {
   let res = 0;
   for (let i = n; i < m; i += n) res += i;
   return res != 0 ? res : "INVALID";
}


function sumMul(n, m) {
   return (~~(m / n) * (m + n - (m % n))) / 2 || "INVALID";
}


function sumMul(n, m) {
   return m <= n ? "INVALID" : Math.floor(m / n) * (Math.floor(m / n) + 1) * (n / 2);
}


console.log(sumMul(0, 0), "INVALID");
console.log(sumMul(2, 9), 20);
console.log(sumMul(4, -7), "INVALID");