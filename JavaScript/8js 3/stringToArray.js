/*
|--------------------------------------------------------------------------
| Convert a string to an array
|--------------------------------------------------------------------------
|
*/

function stringToArray(string) {
   return string.split(' ')
}


stringToArray = (string) => string.split(' ')


function stringToArray(string) {
   return string.match(/\b\w+/g);
}


console.log(stringToArray("Robin Singh"), ["Robin", "Singh"]);
console.log(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);