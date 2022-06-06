/*
|--------------------------------------------------------------------------
| Will you make it?
|--------------------------------------------------------------------------
|
*/

function zeroFuel(distanceToPump, mpg, fuelLeft) {
   return mpg * fuelLeft >= distanceToPump
}


zeroFuel = (_, __, ___) => ___ * __ >= _


function zeroFuel(distanceToPump, mpg, fuelLeft) {
   return distanceToPump / mpg <= fuelLeft
}


console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);