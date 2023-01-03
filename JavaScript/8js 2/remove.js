/*
|--------------------------------------------------------------------------
| Exclamation marks series #1: Remove an exclamation mark from the end of string
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   return string[string.length - 1] == '!' ? string.slice(0, string.length - 1) : string;
}


const remove = s => s.replace(/!$/, '');


function remove(s) {
   return s.endsWith('!') ? s.slice(0, -1) : s;
}


function remove(s) {
   return s.charAt(s.length - 1) == "!" ? s.substr(0, s.length - 1) : s;
}


console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi!!");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi! Hi");
console.log(remove("Hi"), "Hi");