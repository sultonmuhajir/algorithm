/*
|--------------------------------------------------------------------------
| Parse float
|--------------------------------------------------------------------------
|
*/

function parseF(s) {
   return Number.isNaN(parseFloat(s)) ? null : parseFloat(s)
}


function parseF(s) {
   return /\d+/.test(s) ? +s : null;
}


function parseF(s) {
   return (s += '').match(/^-?\d*(\.\d+)?$/) ? s * 1 : null
}


console.log(parseF("1"), 1.0);
console.log(parseF("a"), null);