/*
|--------------------------------------------------------------------------
| Find the position!
|--------------------------------------------------------------------------
|
*/

function position(letter) {
   return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}


function position(letter) {
   return `Position of alphabet: ${"_abcdefghijklmnopqrstuvwxyz".indexOf(letter)}`;
}


function position(letter) {
   return `Position of alphabet: ${parseInt(letter, 36) - 9}`;
}


console.log(position("a"), "Position of alphabet: 1");
console.log(position("z"), "Position of alphabet: 26");
console.log(position("e"), "Position of alphabet: 5");