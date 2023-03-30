/*
|--------------------------------------------------------------------------
| Vowel remover
|--------------------------------------------------------------------------
|
*/

function shortcut(string) {
   let res = "";
   for (let i = 0; i < string.length; i++) {
      res += "aiueo".includes(string[i]) ? "" : string[i];
   }
   return res;
}


function shortcut(string) {
   return string.replace(/[aeiou]/g, "");
}


function shortcut(string) {
   return string
      .split("")
      .filter((str) => !"aeiou".includes(str))
      .join("");
}


console.log(shortcut("hello"), "hll");