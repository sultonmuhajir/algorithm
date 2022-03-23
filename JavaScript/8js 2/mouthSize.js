/*
|--------------------------------------------------------------------------
| The Wide-Mouthed frog!
|--------------------------------------------------------------------------
|
*/

function mouthSize(animal) {
   return animal.toLowerCase() == "alligator" ? "small" : "wide";
}


function mouthSize(animal) {
   return animal.match(/alligator/i) ? 'small' : 'wide';
}


function mouthSize(animal) {
   return /alligator/gi.test(animal) ? 'small' : 'wide'
}


function mouthSize(animal) {
   return animal[1].toLowerCase() == "l" ? "small" : "wide"
}


console.log(mouthSize("toucan"), "wide")
console.log(mouthSize("ant bear"), "wide")
console.log(mouthSize("alligator"), "small")