/*
|--------------------------------------------------------------------------
| Do you speak "English"?
|--------------------------------------------------------------------------
|
*/

function spEng(sentence) {
   return sentence.toLowerCase().includes("english");
}


function spEng(s) {
   return /english/i.test(s);
}


function spEng(s) {
   return s.toLowerCase().indexOf("english") != -1;
}


console.log(spEng("english"), true);
console.log(spEng("egnlish"), false);