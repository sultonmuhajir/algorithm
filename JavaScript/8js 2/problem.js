/*
|--------------------------------------------------------------------------
| Super Duper Easy
|--------------------------------------------------------------------------
|
*/

function problem(x) {
   return typeof x == 'number' ? x * 50 + 6 : 'Error'
}


function problem(x) {
   return Number.isFinite(x) ? x * 50 + 6 : `Error`;
}


function problem(x) {
   return x === +x ? (x * 50) + 6 : 'Error'
}


function problem(x) {
   return x.big ? "Error" : x * 50 + 6
}


console.log(problem("hello"), "Error");
console.log(problem(1), 56);
console.log(problem(5), 256);