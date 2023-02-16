/*
|--------------------------------------------------------------------------
| Simple validation of a username with regex
|--------------------------------------------------------------------------
|
*/

function validateUsr(username) {
   return /^[a-z_0-9]{4,16}$/.test(username);
}


const validateUsr = (u) => /^[a-z\d_]{4,16}$/.test(u);


function validateUsr(username) {
   return /^[^A-Z\s\\n]{4,16}$/.test(username);
}


console.log(validateUsr("asddsa"), true);
console.log(validateUsr("a"), false);
console.log(validateUsr("Hass"), false);
console.log(validateUsr("Hasd_12assssssasasasasasaasasasasas"), false);
console.log(validateUsr(""), false);
console.log(validateUsr("____"), true);
console.log(validateUsr("012"), false);
console.log(validateUsr("p1pp1"), true);
console.log(validateUsr("asd43 34"), false);
console.log(validateUsr("asd43_34"), true);