/*
|--------------------------------------------------------------------------
| Count Odd Numbers below n
|--------------------------------------------------------------------------
|
*/

function oddCount(n) {
   return Math.floor(n / 2);
}


function oddCount(n) {
   return parseInt(n / 2);
}


function oddCount(n) {
   return Math.trunc(n / 2);
}


function oddCount(n) {
   return (n - n % 2) / 2
}


console.log(oddCount(15), 7, "Oops! Wrong.");
console.log(oddCount(15023), 7511, "Oops! Wrong.");