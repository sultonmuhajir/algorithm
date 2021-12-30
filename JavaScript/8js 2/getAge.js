/*
|--------------------------------------------------------------------------
| Parse nice int from char problem
|--------------------------------------------------------------------------
|
*/

function getAge(inputString) {
   return Number(inputString.split(' ')[0]);
}


function getAge(inputString) {
   return parseInt(inputString);
}


function getAge(inputString) {
   return +inputString[0];
}


function getAge(inputString) {
   return inputString.match(/[0-9]/)[0] * 1;
}


console.log(getAge("4 years old"), 4);