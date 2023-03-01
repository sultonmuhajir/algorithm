/*
|--------------------------------------------------------------------------
| Tip Calculator
|--------------------------------------------------------------------------
|
*/

function calculateTip(amount, rating) {
   switch (rating.toLowerCase()) {
      case "terrible":
         return 0;
      case "poor":
         return Math.ceil(amount * 0.05);
      case "good":
         return Math.ceil(amount * 0.1);
      case "great":
         return Math.ceil(amount * 0.15);
      case "excellent":
         return Math.ceil(amount * 0.2);
      default:
         return "Rating not recognised";
   }
}


let calculateTip = (a, r) => {
   const i = ["terrible", "poor", "good", "great", "excellent"].indexOf(r.toLowerCase());
   return i === -1 ? "Rating not recognised" : Math.ceil(i * a * 0.05);
};


function calculateTip(amount, rating) {
   var tips = {
      terrible: 0,
      poor: 0.05,
      good: 0.1,
      great: 0.15,
      excellent: 0.2,
   };
   rating = rating.toLowerCase();
   return rating in tips ? Math.ceil(amount * tips[rating]) : "Rating not recognised";
}


console.log(calculateTip(20, "Excellent"), 4);
console.log(calculateTip(26.95, "good"), 3);