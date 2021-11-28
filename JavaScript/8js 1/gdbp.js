/*
|--------------------------------------------------------------------------
| L1: Bartender, drinks!
|--------------------------------------------------------------------------
|
*/

function getDrinkByProfession(param) {
   const x = param.toLowerCase();
   if (x == "jabroni") {
      return "Patron Tequila"
   } else if (x == "school counselor") {
      return "Anything with Alcohol"
   } else if (x == "programmer") {
      return "Hipster Craft Beer"
   } else if (x == "bike gang member") {
      return "Moonshine"
   } else if (x == "politician") {
      return "Your tax dollars"
   } else if (x == "rapper") {
      return "Cristal"
   } else {
      return "Beer"
   }
}


function getDrinkByProfession(param) {
   param = param.toLowerCase();
   switch (param) {
      case "jabroni":
         return "Patron Tequila";
      case "school counselor":
         return "Anything with Alcohol";
      case "programmer":
         return "Hipster Craft Beer";
      case "bike gang member":
         return "Moonshine";
      case "politician":
         return "Your tax dollars";
      case "rapper":
         return "Cristal";
      default:
         return "Beer";
   }
}


const drinks = {
   "jabroni": "Patron Tequila",
   "school counselor": "Anything with Alcohol",
   "programmer": "Hipster Craft Beer",
   "bike gang member": "Moonshine",
   "politician": "Your tax dollars",
   "rapper": "Cristal"
}
const getDrinkByProfession = profession => drinks[profession.toLowerCase()] || "Beer"


function getDrinkByProfession(param) {
   let map = new Map([
      ["jabroni", "Patron Tequila"],
      ["school counselor", "Anything with Alcohol"],
      ["programmer", "Hipster Craft Beer"],
      ["bike gang member", "Moonshine"],
      ["politician", "Your tax dollars"],
      ["rapper", "Cristal"]
   ]);
   let normal = param.toLowerCase();
   return map.has(normal) ? map.get(normal) : "Beer";
}


console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");