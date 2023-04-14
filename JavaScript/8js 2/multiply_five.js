/*
|--------------------------------------------------------------------------
| Multiply the number
|--------------------------------------------------------------------------
|
*/

function multiply(number) {
   return number * 5 ** String(Math.abs(number)).length;
}


function multiply(number) {
   return number * Math.pow(5, Math.abs(number).toString().length);
}


const multiply = (number) => number * Math.pow(5, (Math.abs(number) + "").length);


console.log(multiply(10), 250);
console.log(multiply(5), 25);
console.log(multiply(200), 25000);
console.log(multiply(0), 0);
console.log(multiply(-2), -10);