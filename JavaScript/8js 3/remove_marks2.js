/*
|--------------------------------------------------------------------------
| Exclamation marks series #2: Remove all exclamation marks from the end of sentence
|--------------------------------------------------------------------------
|
*/

function remove(string) {
   let x = 0;
   let str = string.split("").reverse();
   for (let i = 0; i < str.length; i++) {
      if (str[i] != "!") break;
      x += 1;
   }
   return string.slice(0, string.length - x);
}


function remove(s) {
   return s.replace(/!+$/, "");
}


function remove(s) {
   while (s && s.slice(-1) == "!") {
      s = s.slice(0, -1);
   }
   return s;
}


function remove(s) {
   for (let i = 0; s.endsWith("!"); i++) {
      s.endsWith("!") ? (s = s.slice(0, -1)) : s;
   }
   return s;
}


console.log(remove("Hi!"), "Hi");
console.log(remove("Hi!!!"), "Hi");
console.log(remove("!Hi"), "!Hi");
console.log(remove("!Hi!"), "!Hi");
console.log(remove("Hi! Hi!"), "Hi! Hi");
console.log(remove("Hi"), "Hi");