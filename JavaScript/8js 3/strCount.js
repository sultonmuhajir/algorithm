/*
|--------------------------------------------------------------------------
| All Star Code Challenge #18
|--------------------------------------------------------------------------
|
*/

function strCount(str, letter) {
   return str.split('').filter(i => i == letter).length;
}


const strCount = (w, l) => [...w].reduce((a, b) => a + +(b == l), 0);


function strCount(str, letter) {
   return str.split(letter).length - 1
}


function strCount(str, letter) {
   return [...str].filter(c => c === letter).length
}


function strCount(str, letter) {
   return str.length - str.replace(new RegExp(letter, "gi"), '').length;
}


console.log(strCount('Hello', 'o'), 1);
console.log(strCount('Hello', 'l'), 2);
console.log(strCount('', 'z'), 0);