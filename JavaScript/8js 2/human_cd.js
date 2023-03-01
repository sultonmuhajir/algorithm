/*
|--------------------------------------------------------------------------
| Cat years, Dog years
|--------------------------------------------------------------------------
|
*/

function humanYearsCatYearsDogYears(x) {
   return [
      x,
      x == 1 ? 15 : x == 2 ? 24 : x > 2 ? 24 + (x - 2) * 4 : 0,
      x == 1 ? 15 : x == 2 ? 24 : x > 2 ? 24 + (x - 2) * 5 : 0,
   ];
}


function humanYearsCatYearsDogYears(x) {
   return [x, (x - 1 ? 16 : 11) + 4 * x, (x - 1 ? 14 : 10) + 5 * x];
}


function humanYearsCatYearsDogYears(x) {
   switch (x) {
      case 1:
         return [1, 15, 15];
      case 2:
         return [2, 24, 24];
      default:
         return [x, (x - 2) * 4 + 24, (x - 2) * 5 + 24];
   }
}


console.log(humanYearsCatYearsDogYears(1), [1, 15, 15]);
console.log(humanYearsCatYearsDogYears(2), [2, 24, 24]);
console.log(humanYearsCatYearsDogYears(10), [10, 56, 64]);