/*
|--------------------------------------------------------------------------
| Grasshopper - Terminal game combat function
|--------------------------------------------------------------------------
|
*/

function combat(health, damage) {
   return health - damage > 0 ? health - damage : 0;
}


function combat(health, damage) {
   return Math.max(0, health - damage);
}


function combat(h, d) {
   return (x => x * ((x > 0) - (x < 0)) + x)(h - d) / 2;
}


console.log(combat(100, 5), 95);
console.log(combat(92, 8), 84);
console.log(combat(20, 30), 0, "Health cannot go below 0");