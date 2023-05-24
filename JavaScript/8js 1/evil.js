/*
|--------------------------------------------------------------------------
| Evil or Odious
|--------------------------------------------------------------------------
|
*/

function evil(n) {
   return n.toString(2).match(/1/g).length % 2 ? "It's Odious!" : "It's Evil!";
}


function evil(n) {
   return ["It's Evil!", "It's Odious!"][(n.toString(2).split("1").length - 1) & 1];
}


function evil(n) {
   return [...n.toString(2)].filter((e) => e == 1).length % 2 == 0 ? "It's Evil!" : "It's Odious!";
}


console.log(evil(1), "It's Odious!");
console.log(evil(2), "It's Odious!");
console.log(evil(3), "It's Evil!");