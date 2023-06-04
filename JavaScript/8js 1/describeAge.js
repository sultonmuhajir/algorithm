/*
|--------------------------------------------------------------------------
| Be Concise I - The Ternary Operator
|--------------------------------------------------------------------------
|
*/

function describeAge(x) {
   return (
      "You're a(n) " +
      (x <= 12 ? "kid" : x >= 13 && x <= 17 ? "teenager" : x >= 18 && x <= 64 ? "adult" : "elderly")
   );
}


const describeAge = (a) =>
   `You're a(n) ${a < 13 ? "kid" : a < 18 ? "teenager" : a < 65 ? "adult" : "elderly"}`;


function describeAge(age) {
   return (
      "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly")
   );
}


console.log(describeAge(9), "You're a(n) kid");
console.log(describeAge(10), "You're a(n) kid");
console.log(describeAge(11), "You're a(n) kid");
console.log(describeAge(12), "You're a(n) kid");
console.log(describeAge(13), "You're a(n) teenager");
console.log(describeAge(14), "You're a(n) teenager");
console.log(describeAge(15), "You're a(n) teenager");
console.log(describeAge(16), "You're a(n) teenager");
console.log(describeAge(17), "You're a(n) teenager");
console.log(describeAge(18), "You're a(n) adult");
console.log(describeAge(19), "You're a(n) adult");
console.log(describeAge(63), "You're a(n) adult");
console.log(describeAge(64), "You're a(n) adult");
console.log(describeAge(65), "You're a(n) elderly");
console.log(describeAge(66), "You're a(n) elderly");
console.log(describeAge(100), "You're a(n) elderly");