/*
|--------------------------------------------------------------------------
| A Strange Trip to the Market
|--------------------------------------------------------------------------
|
*/

function isLockNessMonster(s) {
   return s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty");
}


function isLockNessMonster(s) {
   return /tree fiddy|3.50|three fifty/.test(s);
}


function isLockNessMonster(s) {
   const x = ["tree fiddy", "3.50"];
   return x.some((el) => s.includes(el));
}


console.log(
   isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"),
   true
);
console.log(
   isLockNessMonster(
      "Yo, I heard you were on the lookout for Nessie. Let me know if you need assistance."
   ),
   false
);