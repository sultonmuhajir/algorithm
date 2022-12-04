/*
|--------------------------------------------------------------------------
| Capitalization and Mutability
|--------------------------------------------------------------------------
|
*/

function capitalizeWord(word) {
   return word[0].toUpperCase() + word.slice(1, word.length).toLowerCase();
}


function capitalizeWord(word) {
   return word.replace(/^\w/, (val) => val.toUpperCase());
}


function capitalizeWord(word) {
   return word[0].toUpperCase() + word.slice(1);
}


function capitalizeWord(word) {
   return `${word[0].toUpperCase()}${word.slice(1)}`;
}


console.log(capitalizeWord("word"), "Word");
console.log(capitalizeWord("i"), "I");
console.log(capitalizeWord("glasswear"), "Glasswear");