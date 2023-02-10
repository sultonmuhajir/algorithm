/*
|--------------------------------------------------------------------------
| Printing Array elements with Comma delimiters
|--------------------------------------------------------------------------
|
*/

function printArray(array) {
   return array.join(",");
}


function printArray(a) {
   return a + "";
}


function printArray(array) {
   return String(array);
}


console.log(printArray([2, 4, 5, 2]), "2,4,5,2");