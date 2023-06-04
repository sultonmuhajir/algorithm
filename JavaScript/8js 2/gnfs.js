/*
|--------------------------------------------------------------------------
| Get number from string
|--------------------------------------------------------------------------
|
*/

function getNumberFromString(s) {
   return Number(s.replace(/[^0-9]/g, ""));
}


function getNumberFromString(s) {
   return parseInt(
      s
         .split("")
         .filter((x) => "0123456789".includes(x))
         .join("")
   );
}


function getNumberFromString(s) {
   return +s.replace(/\D/g, "");
}


console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);