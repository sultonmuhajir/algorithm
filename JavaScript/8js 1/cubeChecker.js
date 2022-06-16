/*
|--------------------------------------------------------------------------
| Find out whether the shape is a cube
|--------------------------------------------------------------------------
|
*/

function cubeChecker(volume, side) {
   return volume > 0 && side > 0 && side ** 3 == volume
}


function cubeChecker(volume, side) {
   return side > 0 && volume == side * side * side;
}


function cubeChecker(volume, side) {
   return Math.pow(side, 3) === volume && side > 0;
}


console.log(cubeChecker(56.3, 1), false);
console.log(cubeChecker(-1, 2), false);
console.log(cubeChecker(8, 3), false);
console.log(cubeChecker(8, 2), true);
console.log(cubeChecker(-8, -2), false);
console.log(cubeChecker(0, 0), false);