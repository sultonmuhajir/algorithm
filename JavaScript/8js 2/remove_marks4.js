/*
|--------------------------------------------------------------------------
| Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   return string.replace(/!/g, "") + "!";
}


const remove = (s) => `${s.replace(/!/g, "")}!`;


function remove(string) {
   return string.split("!").join("") + "!";
}


console.log(remove("Hi!"), "Hi!");
console.log(remove("Hi!!!"), "Hi!");
console.log(remove("!Hi"), "Hi!");
console.log(remove("!Hi!"), "Hi!");
console.log(remove("Hi! Hi!"), "Hi Hi!");
console.log(remove("Hi"), "Hi!");