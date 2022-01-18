/*
|--------------------------------------------------------------------------
| Grasshopper - If/else syntax debug
|--------------------------------------------------------------------------
|
*/

function checkAlive(health) {
   return health > 0;
}


function checkAlive(health) {
   return health > 0 ? true : false;
}


function checkAlive(health) {
   if (health > 0) {
      return true;
   } else {
      return false;
   }
}


console.log(checkAlive(5), true)
console.log(checkAlive(0), false)