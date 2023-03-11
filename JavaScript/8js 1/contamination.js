/*
|--------------------------------------------------------------------------
| Contamination #1 -String-
|--------------------------------------------------------------------------
|
*/

function contamination(text, char) {
   return char.repeat(text.length);
}


function contamination(text, char) {
   return text.split("").fill(char).join("");
}


function contamination(text, char) {
   return text.replace(/./g, char);
}


console.log(contamination("abc", "z"), "zzz");
console.log(contamination("", "z"), "");
console.log(contamination("abc", ""), "");
console.log(contamination("_3ebzgh4", "&"), "&&&&&&&&");
console.log(contamination("//case", " "), "      ");