/*
|--------------------------------------------------------------------------
| The Feast of Many Beasts
|--------------------------------------------------------------------------
|
*/

function feast(beast, dish) {
   return beast[0] == dish[0] && beast.substr(-1) == dish.substr(-1);
}


const feast = (...args) => /^(.).*(.),\1.*\2$/.test(args);
const feast = (a, b) => a[0] + [...a].pop() == b[0] + [...b].pop()
const feast = (b, d) => d.startsWith(b[0]) && d.endsWith(b[b.length - 1])


function feast(beast, dish) {
   return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1);
}


function feast(beast, dish) {
   return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
}


console.log(feast("great blue heron", "garlic naan"), true)
console.log(feast("chickadee", "chocolate cake"), true)
console.log(feast("brown bear", "bear claw"), false)