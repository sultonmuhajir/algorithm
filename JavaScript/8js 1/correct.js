/*
|--------------------------------------------------------------------------
| Correct the mistakes of the character recognition software
|--------------------------------------------------------------------------
|
*/

function correct(string) {
   let res = '';
   for (let i = 0; i < string.length; i++) {
      res += string[i] == '5' ? 'S' : string[i] == '0' ? 'O' : string[i] == '1' ? 'I' : string[i];
   }
   return res;
}


function correct(string) {
   return string.replace(/0/g, "O")
      .replace(/5/g, "S")
      .replace(/1/g, "I");
}


function correct(string) {
   return [...string].map(a => ({
      '0': 'O',
      '5': 'S',
      '1': 'I'
   })[a] || a).join('')
}


function correct(string) {
   return string.replace(/\d/g, val => `OI   S` [val]);
}


console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");