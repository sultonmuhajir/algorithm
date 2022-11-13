/*
|--------------------------------------------------------------------------
| Beginner Series #4 Cockroach
|--------------------------------------------------------------------------
|
*/

function cockroachSpeed(s) {
   return Math.floor((s * 100) / 3.6);
}


function cockroachSpeed(s) {
   return (s / 3.6e-2) ^ 0;
}


function cockroachSpeed(s) {
   return Math.floor(s / 0.036);
}


function cockroachSpeed(s) {
   return Math.floor(s * 27.778);
}


console.log(cockroachSpeed(1.08), 30);
console.log(cockroachSpeed(1.09), 30);
console.log(cockroachSpeed(0), 0);