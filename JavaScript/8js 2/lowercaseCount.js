/*
|--------------------------------------------------------------------------
| Regex count lowercase letters
|--------------------------------------------------------------------------
|
*/

function lowercaseCount(str) {
   return (str.match(/[a-z]/g) || []).length;
}


function lowercaseCount(str) {
   return str.split("").filter((el) => /[a-z]/.test(el)).length;
}


function lowercaseCount(str) {
   return str.replace(/[^a-z]/g, "").length;
}


console.log(lowercaseCount("abc"), 3);
console.log(lowercaseCount("abcABC123"), 3);
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 3);
console.log(lowercaseCount(""), 0);
console.log(lowercaseCount("ABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"), 0);
console.log(lowercaseCount("abcdefghijklmnopqrstuvwxyz"), 26);