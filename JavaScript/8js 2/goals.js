/*
|--------------------------------------------------------------------------
| Grasshopper - Messi goals function
|--------------------------------------------------------------------------
|
*/

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}


const goals = (_, $, __) => _ + $ + __


const goals = (...goalsArray) => goalsArray.reduce((a, b) => a + b);


function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
   return [].reduce.call(arguments, (a, b) => a + b);
}


function goals(l, c, ch) {
   return [l, c, ch].reduce((a, b) => a + b)
}


console.log(goals(0, 0, 0), 0);
console.log(goals(43, 10, 5), 58);