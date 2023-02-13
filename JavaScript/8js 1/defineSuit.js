/*
|--------------------------------------------------------------------------
| Define a card suit
|--------------------------------------------------------------------------
|
*/

function defineSuit(card) {
   return card[card.length - 1] == "♠"
      ? "spades"
      : card[card.length - 1] == "♦"
      ? "diamonds"
      : card[card.length - 1] == "♥"
      ? "hearts"
      : "clubs";
}


function defineSuit(card) {
   return {
      "♣": "clubs",
      "♦": "diamonds",
      "♥": "hearts",
      "♠": "spades",
   }[card.substr(-1)];
}


function defineSuit(card) {
   if (card.includes("♥")) return "hearts";
   if (card.includes("♦")) return "diamonds";
   if (card.includes("♣")) return "clubs";
   if (card.includes("♠")) return "spades";
}


console.log(defineSuit("Q♠"), "spades");
console.log(defineSuit("9♦"), "diamonds");
console.log(defineSuit("J♥"), "hearts");
console.log(defineSuit("3♣"), "clubs");