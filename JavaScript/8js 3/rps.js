/*
|--------------------------------------------------------------------------
| Rock Paper Scissors!
|--------------------------------------------------------------------------
|
*/

function rps(p1, p2) {
   if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'paper' && p2 == 'rock') || (p1 == 'rock' && p2 == 'scissors')) {
      return 'Player 1 won!';
   } else if ((p2 == 'scissors' && p1 == 'paper') || (p2 == 'paper' && p1 == 'rock') || (p2 == 'rock' && p1 == 'scissors')) {
      return 'Player 2 won!';
   } else {
      return 'Draw!';
   }
}


const rps = (a, b) => a == b ? 'Draw!' : `Player ${/rp|ps|sr/.test(a[0]+b[0])?2:1} won!`;


const rps = (p1, p2) => {
   if (p1 === p2) {
      return 'Draw!'
   };
   return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
}


const rps = (p1, p2) => {
   if (p1 === p2) return "Draw!";
   let rules = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper"
   };
   if (p2 === rules[p1]) {
      return "Player 1 won!";
   } else {
      return "Player 2 won!";
   }
};


const rps = (p1, p2) => {
   let map = {
      'rock': 'scissors',
      'scissors': 'paper',
      'paper': 'rock'
   };
   if (p1 == p2) {
      return 'Draw!';
   } else {
      return 'Player ' + (map[p1] == p2 ? 1 : 2) + ' won!';
   }
};


console.log(rps('scissors', 'paper'), 'Player 1 won!');
console.log(rps('scissors', 'rock'), 'Player 2 won!');
console.log(rps('paper', 'paper'), 'Draw!');