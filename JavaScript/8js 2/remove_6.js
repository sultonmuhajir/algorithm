/*
|--------------------------------------------------------------------------
| Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
|--------------------------------------------------------------------------
|
*/

function remove(s, n) {
   res = '';
   for (let i = 0; i < s.length; i++) {
      s[i] == '!' && n > 0 ? n -= 1 : res += s[i]
   }
   return res
}


function remove(s, n) {
   for (let i = 0; i < n; i++) s = s.replace("!", "");
   return s;
}


function remove(s, n) {
   return n > 0 ? remove(s.replace('!', ''), n - 1) : s;
}


function remove(s, n) {
   while (n) {
      s = s.replace("!", "");
      n--;
   }
   return s;
}


function remove(s, n) {
   return s.replace(/!/g, c => n-- > 0 ? "" : c)
}


console.log(remove("!!!Hi !!hi!!! !hi", 1), "!!Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 3), "Hi !!hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 5), "Hi hi!!! !hi")
console.log(remove("!!!Hi !!hi!!! !hi", 100), "Hi hi hi")