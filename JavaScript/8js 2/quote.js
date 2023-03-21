/*
|--------------------------------------------------------------------------
| For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre
|--------------------------------------------------------------------------
|
*/

function quote(fighter) {
   return fighter.toLowerCase() == "conor mcgregor"
      ? "I'd like to take this chance to apologize.. To absolutely NOBODY!"
      : "I am not impressed by your performance.";
}


function quote(fighter) {
   switch (fighter.toLowerCase()) {
      case "george saint pierre":
         return "I am not impressed by your performance.";
      case "conor mcgregor":
         return "I'd like to take this chance to apologize.. To absolutely NOBODY!";
   }
}


function quote(fighter) {
   return /conor mcgregor/i.test(fighter)
      ? `I'd like to take this chance to apologize.. To absolutely NOBODY!`
      : `I am not impressed by your performance.`;
}


console.log(quote("george saint pierre"), "I am not impressed by your performance.");
console.log(
   quote("conor mcgregor"),
   "I'd like to take this chance to apologize.. To absolutely NOBODY!"
);
console.log(quote("George Saint Pierre"), "I am not impressed by your performance.");
console.log(
   quote("Conor McGregor"),
   "I'd like to take this chance to apologize.. To absolutely NOBODY!"
);