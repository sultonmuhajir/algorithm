/*
|--------------------------------------------------------------------------
| Remove exclamation marks
|--------------------------------------------------------------------------
|
*/

function removeExclamationMarks(s) {
   return s.replace(/!/g, '');
}


function removeExclamationMarks(s) {
   return s.split('!').join('');
}


function removeExclamationMarks(s) {
   let res = '';
   for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
         res += s[i];
      }
   }
   return res;
}


function removeExclamationMarks(s) {
   return s.split('').filter(c => c !== '!').join('');
}


console.log(removeExclamationMarks("Hello World!!"), "Hello World");