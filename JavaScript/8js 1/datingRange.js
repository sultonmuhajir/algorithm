/*
|--------------------------------------------------------------------------
| Age Range Compatibility Equation
|--------------------------------------------------------------------------
|
*/

function datingRange(age) {
   return age > 14 ? `${Math.floor(age / 2 + 7)}-${Math.floor(age - 7) * 2}` : `${Math.floor(age - 0.10 * age)}-${Math.floor(age + 0.10 * age)}`
}


function datingRange(n) {
   return [n <= 14 ? 0.9 * n : 0.5 * n + 7, n <= 14 ? 1.1 * n : 2 * n - 14].map(Math.floor).join("-");
}


function datingRange(age) {
   return age > 14 ? `${age / 2 + 7 ^ 0}-${(age - 7) * 2 ^ 0}` : `${0.9 * age ^ 0}-${1.1 * age ^ 0}`;
}


function datingRange(n) {
   return age > 14 ? `${~~(age / 2) + 7}-${age * 2 - 14}` : `${~~(age * 0.9)}-${~~(age * 1.1)}`;
}


console.log(datingRange(17), "15-20")
console.log(datingRange(40), "27-66")
console.log(datingRange(15), "14-16")
console.log(datingRange(35), "24-56")
console.log(datingRange(10), "9-11")