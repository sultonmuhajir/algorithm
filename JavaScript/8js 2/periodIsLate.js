/*
|--------------------------------------------------------------------------
| Is your period late?
|--------------------------------------------------------------------------
|
*/

function periodIsLate(last, today, cycleLength) {
   return cycleLength * (24 * 60 * 60 * 1000) < today - last;
}


function periodIsLate(last, today, c) {
   return (last.setDate(last.getDate() + c), last < today)
}


function periodIsLate(last, today, cycleLength) {
   return (today - last) / 86400000 > cycleLength
}


console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35), false);
console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 28), true);