/*
|--------------------------------------------------------------------------
| ASCII Total
|--------------------------------------------------------------------------
|
*/

function uniTotal(string) {
   return string == ""
      ? 0
      : string
           .split("")
           .map((i) => i.charCodeAt(0))
           .reduce((a, b) => a + b);
}


function uniTotal(string) {
   return [...string].reduce((acc, char) => acc + char.charCodeAt(0), 0);
}


function uniTotal(string) {
   let count = 0;
   for (let i = 0; i < string.length; i++) {
      count += string.charCodeAt(i);
   }
   return count;
}


console.log(uniTotal(""), 0);
console.log(uniTotal("e"), 101);
console.log(uniTotal("aaa"), 291);
console.log(uniTotal("Mary Had A Little Lamb"), 1873);