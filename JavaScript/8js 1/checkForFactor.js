/*
|--------------------------------------------------------------------------
| Grasshopper - Check for factor
|--------------------------------------------------------------------------
|
*/

function checkForFactor(base, factor) {
   return base % factor == 0;
}


function checkForFactor(base, factor) {
   return !(base % factor);
}


function checkForFactor(base, factor) {
   return (Number.isInteger(base / factor))
}


function checkForFactor(base, factor) {
   return base % factor === [].length
}


console.log(checkForFactor(63, 7), true)
console.log(checkForFactor(2450, 5), true)
console.log(checkForFactor(653, 7), false)
console.log(checkForFactor(2453, 5), false)