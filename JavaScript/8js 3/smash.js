/*
|--------------------------------------------------------------------------
| Sentence Smash
|--------------------------------------------------------------------------
|
*/

function smash(words) {
   return words.join(' ');
}


const smash = words => words.join(' ');


function smash(words) {
   let res = '';
   for (let i of words) {
      res += i.concat(' ')
   }
   return res.trim();
}


function smash(words) {
   let res = '';
   let i = 0;
   while (i < words.length) {
      res += words[i].concat(' ')
      i++;
   }
   return res.trim();
}


console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");