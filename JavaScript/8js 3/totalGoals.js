/*
|--------------------------------------------------------------------------
| Grasshopper - Messi Goals
|--------------------------------------------------------------------------
|
*/

const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;
const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


let goals = [43, 10, 5],
   [laLigaGoals, championsLeagueGoals, copaDelReyGoals] = goals,
   totalGoals = goals.reduce((s, v) => s + v);


let laLigaGoals = 43,
   championsLeagueGoals = 10,
   copaDelReyGoals = 5,
   totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;


console.log(totalGoals, 58);