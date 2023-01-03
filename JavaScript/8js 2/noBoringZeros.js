/*
|--------------------------------------------------------------------------
| No zeros for heros
|--------------------------------------------------------------------------
|
*/

function noBoringZeros(n) {
   while (n % 10 == 0 && n != 0) {
      n /= 10;
   }
   return n;
}


function noBoringZeros(n) {
   return Number(String(n).replace(/0+$/, ""));
}


function noBoringZeros(n) {
   return n % 10 || n === 0 ? n : noBoringZeros(n / 10);
}


console.log(noBoringZeros(1450), 145);
console.log(noBoringZeros(960000), 96);
console.log(noBoringZeros(1050), 105);
console.log(noBoringZeros(-1050), -105);
console.log(noBoringZeros(-105), -105);
console.log(noBoringZeros(0), 0);