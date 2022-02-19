/*
|--------------------------------------------------------------------------
| get character from ASCII Value
|--------------------------------------------------------------------------
|
*/

function getChar(c) {
   return String.fromCharCode(c)
}


function getChar(c) {
   return String.fromCodePoint(c);
}


function getChar(c) {
   let char = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
   return char[c - 32];
}


function getChar(c) {
   return eval('"\\' + c.toString(8) + '"')
}


console.log(getChar(55), '7')
console.log(getChar(56), '8')
console.log(getChar(57), '9')
console.log(getChar(58), ':')
console.log(getChar(59), ';')
console.log(getChar(60), '<')
console.log(getChar(61), '=')
console.log(getChar(62), '>')
console.log(getChar(63), '?')
console.log(getChar(64), '@')
console.log(getChar(65), 'A')