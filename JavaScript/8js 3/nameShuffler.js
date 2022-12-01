/*
|--------------------------------------------------------------------------
| Name Shuffler
|--------------------------------------------------------------------------
|
*/

function nameShuffler(str) {
   return str.split(" ").reverse().join(" ");
}


function nameShuffler(str) {
   return str.replace(/([^\s]+) ([^\s]+)/, `$2 $1`);
}


function nameShuffler(str) {
   return str.replace(/^(.*) (.*)$/, "$2 $1");
}


function nameShuffler(str) {
   return str.replace(/([\w'-]+) ([\w'-]+)/g, "$2 $1");
}


console.log(nameShuffler("john McClane"), "McClane john");
console.log(nameShuffler("Mary jeggins"), "jeggins Mary");
console.log(nameShuffler("tom jerry"), "jerry tom");