/*
|--------------------------------------------------------------------------
| Duck Duck Goose
|--------------------------------------------------------------------------
|
*/

function duckDuckGoose(players, goose) {
   return players[(goose - 1) % players.length].name
}


function duckDuckGoose(players, goose) {
   return players[--goose % players.length].name;
}


function duckDuckGoose(players, goose) {
   return players.find((el, idx) => idx === ((goose - 1) % players.length)).name;
}


class Player {
   constructor(name) {
      this.name = name;
   }
}
let ex_names = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"];
let players = ex_names.map((n) => new Player(n));
console.log(duckDuckGoose(players, 1), "a");
console.log(duckDuckGoose(players, 28), "g");