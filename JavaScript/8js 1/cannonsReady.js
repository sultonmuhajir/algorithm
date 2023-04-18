/*
|--------------------------------------------------------------------------
| Pirates!! Are the Cannons ready!??
|--------------------------------------------------------------------------
|
*/

function cannonsReady(gunners) {
   return Object.values(gunners).includes("nay") ? "Shiver me timbers!" : "Fire!";
}


const cannonsReady = (gunners) =>
   Object.values(gunners).every((val) => val == "aye") ? "Fire!" : "Shiver me timbers!";


function cannonsReady(gunners) {
   for (var i in gunners) {
      if (gunners[i] == "nay") {
         return "Shiver me timbers!";
      }
   }
   return "Fire!";
}


let a = { Mike: "aye", Joe: "aye", Johnson: "aye", Peter: "aye" };
let b = { Mike: "aye", Joe: "nay", Johnson: "aye", Peter: "aye" };
console.log(cannonsReady(a), "Fire!");
console.log(cannonsReady(b), "Shiver me timbers!");