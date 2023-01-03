/*
|--------------------------------------------------------------------------
| Well of Ideas - Easy Version
|--------------------------------------------------------------------------
|
*/

function well(x) {
   let ideas = x.filter((i) => i == "good").length;
   return ideas <= 0 ? "Fail!" : ideas > 2 ? "I smell a series!" : "Publish!";
}


function well(x) {
   return ((i) => (i ? (i > 2 ? "I smell a series!" : "Publish!") : "Fail!"))(
      x.filter((i) => i === "good").length
   );
}


function well(x) {
   let count = x.reduce((s, v) => s + (v == "good"), 0);
   return count ? (count > 2 ? "I smell a series!" : "Publish!") : "Fail!";
}


console.log(well(["bad", "bad", "bad"]), "Fail!");
console.log(well(["good", "bad", "bad", "bad", "bad"]), "Publish!");
console.log(
   well(["good", "bad", "bad", "bad", "bad", "good", "bad", "bad", "good"]),
   "I smell a series!"
);