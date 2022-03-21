/*
|--------------------------------------------------------------------------
| Opposites Attract
|--------------------------------------------------------------------------
|
*/

function lovefunc(flower1, flower2) {
   return flower1 % 2 == 0 && flower2 % 2 != 0 || (flower1 % 2 != 0 && flower2 % 2 == 0);
}


const lovefunc = (flower1, flower2) => !!((flower1 ^ flower2) % 2);


function lovefunc(flower1, flower2) {
   return (flower1 + flower2) % 2 !== 0;
}


function lovefunc(flower1, flower2) {
   return flower1 % 2 !== flower2 % 2;
}


function lovefunc(flower1, flower2) {
   return ((flower1 ^ flower2) & 1) == 1;
}


console.log(lovefunc(1, 4), true)
console.log(lovefunc(2, 2), false)
console.log(lovefunc(0, 1), true)
console.log(lovefunc(0, 0), false)