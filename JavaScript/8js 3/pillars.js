/*
|--------------------------------------------------------------------------
| Pillars
|--------------------------------------------------------------------------
|
*/

function pillars(num_pill, dist, width) {
   if (num_pill == 1) {
      return 0
   } else {
      return dist * 100 * (num_pill - 1) + ((num_pill - 2) * width)
   }
}


const pillars = (n, d, w) => --n ? n * (d * 100 + w) - w : 0;


function pillars(num_pill, dist, width) {
   return num_pill > 1 ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width : 0;
}


function pillars(num_pill, dist, width) {
   return Math.max(0, num_pill - 1) * (dist * 100) + Math.max(0, num_pill - 2) * width;
}


console.log(pillars(1, 10, 10), 0);
console.log(pillars(2, 20, 25), 2000);
console.log(pillars(11, 15, 30), 15270);
console.log(pillars(4, 10, 20), 3040);