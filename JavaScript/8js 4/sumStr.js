/*
|--------------------------------------------------------------------------
| Sum The Strings
|--------------------------------------------------------------------------
|
*/

function sumStr(a, b) {
   return String(Number(a) + Number(b));
}


function sumStr(a, b) {
   return +a + +b + "";
}


function sumStr(a, b) {
   return "" + (a - -b);
}


console.log(sumStr("4", "5"), "9");
console.log(sumStr("34", "5"), "39");