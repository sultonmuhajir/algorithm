/*
|--------------------------------------------------------------------------
| get ascii value of character
|--------------------------------------------------------------------------
|
*/

function getASCII(c) {
   return c.charCodeAt(0);
}


getASCII = (c) => c.charCodeAt();


function getASCII(c) {
   let a =
      " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
   return a.indexOf(c) + 32;
}


console.log(getASCII("A"), 65);
console.log(getASCII(" "), 32);
console.log(getASCII("!"), 33);