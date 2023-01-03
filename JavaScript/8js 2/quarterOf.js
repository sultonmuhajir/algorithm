/*
|--------------------------------------------------------------------------
| Quarter of the year
|--------------------------------------------------------------------------
|
*/

function quarterOf(month) {
   return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
}


function quarterOf(month) {
   return Math.ceil(month / 3);
}


function quarterOf(month) {
   return (month <= 3 && 1) || (month <= 6 && 2) || (month <= 9 && 3) || (month <= 12 && 4);
}


console.log(quarterOf(3), 1);
console.log(quarterOf(8), 3);
console.log(quarterOf(11), 4);