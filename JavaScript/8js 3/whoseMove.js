/*
|--------------------------------------------------------------------------
| Simple Fun #261: Whose Move
|--------------------------------------------------------------------------
|
*/

function whoseMove(lastPlayer, win) {
   return lastPlayer == "black" && win == false || lastPlayer == "white" && win == true ? "white" : "black"
}


const whoseMove = (l, w) => ['black', 'white'][(+w - (l == 'black' ? -1 : 0)) % 2];


function whoseMove(lastPlayer, win) {
   return win ? lastPlayer : lastPlayer == "white" ? "black" : "white"
}


function whoseMove(lastPlayer, win) {
   return lastPlayer && win ? lastPlayer : {
      'black': 'white',
      'white': 'black'
   } [lastPlayer];
}


function whoseMove(lastPlayer, win) {
   return lastPlayer === `black` ^ win ? `white` : `black`;
}


console.log(whoseMove("black", false), "white")
console.log(whoseMove("white", true), "white")
console.log(whoseMove("white", false), "black")