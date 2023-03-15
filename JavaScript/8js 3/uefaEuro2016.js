/*
|--------------------------------------------------------------------------
| UEFA EURO 2016
|--------------------------------------------------------------------------
|
*/

function uefaEuro2016(teams, scores) {
   let res =
      scores[0] > scores[1]
         ? `${teams[0]} won!`
         : scores[0] < scores[1]
         ? `${teams[1]} won!`
         : "teams played draw.";
   return `At match ${teams[0]} - ${teams[1]}, ${res}`;
}


const uefaEuro2016 = (c, s) =>
   `At match ${c[0]} - ${c[1]}, ${
      s[0] == s[1] ? "commands played draw." : (s[0] > s[1] ? c[0] : c[1]) + " won!"
   }`;


function uefaEuro2016(teams, scores) {
   let [team1, team2] = teams;
   let [score1, score2] = scores;
   let winner = score1 > score2 ? team1 : team2;
   return score1 == score2
      ? `At match ${team1} - ${team2}, teams played draw.`
      : `At match ${team1} - ${team2}, ${winner} won!`;
}


console.log(
   uefaEuro2016(["Germany", "Ukraine"], [2, 0]),
   "At match Germany - Ukraine, Germany won!"
);
console.log(uefaEuro2016(["Belgium", "Italy"], [0, 2]), "At match Belgium - Italy, Italy won!");
console.log(
   uefaEuro2016(["Portugal", "Iceland"], [1, 1]),
   "At match Portugal - Iceland, teams played draw."
);