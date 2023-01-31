/*
|--------------------------------------------------------------------------
| Add Length
|--------------------------------------------------------------------------
|
*/

function addLength(str) {
   return str.split(" ").map((i) => `${i} ${i.length}`);
}


function addLength(str) {
   let strArr = str.split(" ");
   let res = [];
   for (let i of strArr) {
      res.push(`${i} ${i.length}`);
   }
   return res;
}


function addLength(str) {
   return str.split(" ").map((v) => v + " " + v.length);
}


console.log(addLength("apple ban"), ["apple 5", "ban 3"]);
console.log(addLength("you will win"), ["you 3", "will 4", "win 3"]);