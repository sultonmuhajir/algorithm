/*
|--------------------------------------------------------------------------
| validate code with simple regex
|--------------------------------------------------------------------------
|
*/

function validateCode(code) {
   return "123".includes(String(code)[0]);
}


function validateCode(code) {
   return /^[1-3]/.test(code);
}


function validateCode(code) {
   return +(code + "")[0] < 4;
}


console.log(validateCode(123), true);
console.log(validateCode(248), true);
console.log(validateCode(8), false);
console.log(validateCode(321), true);
console.log(validateCode(9453), false);