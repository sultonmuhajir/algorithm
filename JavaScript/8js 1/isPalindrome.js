/*
|--------------------------------------------------------------------------
| Is it a palindrome?
|--------------------------------------------------------------------------
|
*/

function isPalindrome(x) {
   return (
      x.toLowerCase().slice(0, Math.floor(x.length / 2)) ==
      x
         .split("")
         .reverse()
         .join("")
         .toLowerCase()
         .slice(0, Math.floor(x.length / 2))
   );
}


function isPalindrome(x) {
   return x.split("").reverse().join("").toLowerCase() == x.toLowerCase() ? true : false;
}


function isPalindrome(x) {
   x = x.toLowerCase();
   let a = 0;
   let b = x.length;
   while (a < b) {
      if (x[a] != x[b - 1]) return false;
      a++;
      b--;
   }
   return true;
}


console.log(isPalindrome("a"), true);
console.log(isPalindrome("aba"), true);
console.log(isPalindrome("Abba"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Bob"), true);
console.log(isPalindrome("Madam"), true);
console.log(isPalindrome("AbBa"), true);
console.log(isPalindrome(""), true);