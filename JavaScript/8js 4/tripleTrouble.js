/*
|--------------------------------------------------------------------------
| Triple Trouble
|--------------------------------------------------------------------------
|
*/

function tripleTrouble(one, two, three) {
   let res = '';
   for (let i = 0; i < one.length; i++) {
      res += `${one[i]}${two[i]}${three[i]}`;
   }
   return res
}


const tripleTrouble = (a, b, c) => Array.from(a, (x, i) => x + b[i] + c[i]).join('')


function tripleTrouble(one, two, three) {
   return one.replace(/./g, (v, i) => v + two[i] + three[i])
}


function tripleTrouble(one, two, three) {
   return one.split('').reduce((acc, c, i, array) => [acc, one[i], two[i], three[i]].join(''), '')
}


function tripleTrouble(one, two, three) {
   return !arg[0][0] ? '' : arg.map(i => i[0]).join('') + tripleTrouble(...arg.map(i => i.slice(1)))
}


console.log(tripleTrouble("aaa", "bbb", "ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa", "bbbbbb", "cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea", "urn", "pms"), "Supermans");
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");