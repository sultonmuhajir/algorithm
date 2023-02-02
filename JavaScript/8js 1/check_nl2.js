/*
|--------------------------------------------------------------------------
| No Loops 2 - You only need one
|--------------------------------------------------------------------------
|
*/

function check(a, x) {
   return a.includes(x);
}


function check(a, x) {
   return a.indexOf(x) >= 0;
}


function check(a, x) {
   return a.some((v) => v == x);
}


console.log(check([66, 101], 66), true);
console.log(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
console.log(check(["t", "e", "s", "t"], "e"), true);
console.log(check(["what", "a", "great", "kata"], "kat"), false);