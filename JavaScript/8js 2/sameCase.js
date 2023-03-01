/*
|--------------------------------------------------------------------------
| Check same case
|--------------------------------------------------------------------------
|
*/

function sameCase(a, b) {
   return /[^a-z]/gi.test(a + b) ? -1 : (a == a.toLowerCase()) == (b == b.toLowerCase()) ? 1 : 0;
}


sameCase = (a, b) => (/^[A-Za-z]+$/g.test(a + b) ? (a < {} == b < {} ? 1 : 0) : -1);


function sameCase(a, b) {
   return /[^a-z]/i.test(a + b) ? -1 : a >= "a" == b >= "a" ? 1 : 0;
}


console.log(sameCase("C", "B"), 1);
console.log(sameCase("b", "a"), 1);
console.log(sameCase("d", "d"), 1);
console.log(sameCase("A", "s"), 0);
console.log(sameCase("c", "B"), 0);
console.log(sameCase("b", "Z"), 0);
console.log(sameCase("\t", "Z"), -1);
console.log(sameCase("H", ":"), -1);