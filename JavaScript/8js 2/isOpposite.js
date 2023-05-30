/*
|--------------------------------------------------------------------------
| Are they opposite?
|--------------------------------------------------------------------------
|
*/

function isOpposite(s1, s2) {
   return (
      s1
         .split("")
         .map((i) => (i === i.toLowerCase() ? i.toUpperCase() : i.toLowerCase()))
         .join("") === s2 && s1 !== ""
   );
}


function isOpposite(s1, s2) {
   return (
      s1 != "" &&
      s1 == s2.replace(/./g, (ch) => ch["to" + (ch <= "Z" ? "Lower" : "Upper") + "Case"]())
   );
}


function isOpposite(s1, s2) {
   return (s1 == "" && s2 == "") || s1.length != s2.length
      ? false
      : [...s1].every((x, i) => Math.abs(x.charCodeAt() - s2[i].charCodeAt()) == 32);
}


console.log(isOpposite("ab", "AB"), true);
console.log(isOpposite("aB", "Ab"), true);
console.log(isOpposite("aBcd", "AbCD"), true);
console.log(isOpposite("aBcde", "AbCD"), false);
console.log(isOpposite("AB", "Ab"), false);
console.log(isOpposite("", ""), false);