/*
|--------------------------------------------------------------------------
| A wolf in sheep's clothing
|--------------------------------------------------------------------------
|
*/

function warnTheSheep(queue) {
   let x = queue.reverse().indexOf("wolf");
   return x != 0
      ? `Oi! Sheep number ${x}! You are about to be eaten by a wolf!`
      : "Pls go away and stop eating my sheep";
}


function warnTheSheep(queue) {
   return queue.reverse()[0] == "wolf"
      ? "Pls go away and stop eating my sheep"
      : `Oi! Sheep number ${queue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
}


function warnTheSheep(queue) {
   return (queue = queue.length - queue.indexOf("wolf") - 1)
      ? `Oi! Sheep number ${queue}! You are about to be eaten by a wolf!`
      : "Pls go away and stop eating my sheep";
}


console.log(
   warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]),
   "Oi! Sheep number 2! You are about to be eaten by a wolf!"
);
console.log(warnTheSheep(["wolf"]), "Pls go away and stop eating my sheep");
console.log(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");