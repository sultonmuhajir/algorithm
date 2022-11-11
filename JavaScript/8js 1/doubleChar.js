/*
|--------------------------------------------------------------------------
| Double Char
|--------------------------------------------------------------------------
|
*/

function doubleChar(str) {
   return str
      .split("")
      .map((i) => i + i)
      .join("");
}


function doubleChar(str) {
   return str.replace(/(.)/g, "$1$1");
}


function doubleChar(str) {
   let word = "";
   for (let i = 0; i < str.length; i++) {
      word = word + str[i] + str[i];
   }
   return word;
}


console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");