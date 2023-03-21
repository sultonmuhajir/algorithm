/*
|--------------------------------------------------------------------------
| Is it a number?
|--------------------------------------------------------------------------
|
*/

function isDigit(s) {
   return s == parseFloat(s);
}


function isDigit(s) {
   return /^-?\d+(\.\d+)?$/.test(s);
}


function isDigit(s) {
   return !!str.trim() && !isNaN(str);
}


console.log(isDigit("s2324"), false);
console.log(isDigit("-234.4"), true);