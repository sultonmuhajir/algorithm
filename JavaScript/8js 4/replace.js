/*
|--------------------------------------------------------------------------
| Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
|--------------------------------------------------------------------------
|
*/

function replace(s) {
   return s.replace(/[aeiouAIUEO]/g, '!');
}


function replace(s) {
   let res = ''
   let x = "aAeEiIoOuU"
   for (let i = 0; i < s.length; i++) {
      if (x.indexOf(s[i]) === -1) {
         res += s[i]
      } else {
         res += '!'
      }
   }
   return res
}


function replace(s) {
   return s.replace(/[aeoiu]/ig, '!')
}


function replace(s) {
   return s.split('').map(el => /[AEIOUaeiou]/g.test(el) ? '!' : el).join('')
}


console.log(replace("Hi!"), "H!!")
console.log(replace("!Hi! Hi!"), "!H!! H!!")
console.log(replace("aeiou"), "!!!!!")
console.log(replace("ABCDE"), "!BCD!")