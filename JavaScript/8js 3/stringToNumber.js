/*
|--------------------------------------------------------------------------
| Convert a String to a Number!
|--------------------------------------------------------------------------
|
*/

function stringToNumber(str) {
   return Number(str);
}


const stringToNumber = str => parseInt(str);


const stringToNumber = function (str) {
   return +str;
}


console.log(stringToNumber("1234"), 1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"), 1405)
console.log(stringToNumber("-7"), -7)