/*
|--------------------------------------------------------------------------
| Beginner Series #1 School Paperwork
|--------------------------------------------------------------------------
|
*/

function paperwork(n, m) {
   return n < 0 || m < 0 ? 0 : n * m;
}


const paperwork = (n, m) => Math.max(0, n) * Math.max(0, m);


function paperwork(n, m) {
   return +(n > 0 && m > 0) && n * m
}


const paperwork = (...n) => n.reduce((s, e) => s * Math.max(e, 0), 1);


function paperwork(n, m) {
   return n > 0 && m > 0 ? n + paperwork(n, --m) : 0;
}


console.log(paperwork(5, 5), 25);
console.log(paperwork(-5, 5), 0);