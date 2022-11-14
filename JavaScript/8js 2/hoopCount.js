/*
|--------------------------------------------------------------------------
| Keep up the hoop
|--------------------------------------------------------------------------
|
*/

function hoopCount(n) {
   return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it";
}


function hoopCount(n) {
   if (n >= 10) {
      return "Great, now move on to tricks";
   } else {
      return "Keep at it until you get it";
   }
}


function hoopCount(n) {
   return ["Keep at it until you get it", "Great, now move on to tricks"][+(n >= 10)];
}


console.log(hoopCount(3), "Keep at it until you get it");
console.log(hoopCount(11), "Great, now move on to tricks");