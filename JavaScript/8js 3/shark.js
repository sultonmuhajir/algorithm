/*
|--------------------------------------------------------------------------
| Holiday VI - Shark Pontoon
|--------------------------------------------------------------------------
|
*/

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
   return pontoonDistance / youSpeed < sharkDistance / (dolphin ? sharkSpeed / 2 : sharkSpeed) ? 'Alive!' : 'Shark Bait!'
}


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
   return sharkSpeed / sharkDistance / ++dolphin > youSpeed / pontoonDistance ? 'Shark Bait!' : 'Alive!'
}


function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
   return pontoonDistance / youSpeed <= sharkDistance / sharkSpeed * (1 + dolphin) ? "Alive!" : "Shark Bait!";
}


console.log(shark(12, 50, 4, 8, true), "Alive!");
console.log(shark(7, 55, 4, 16, true), "Alive!");
console.log(shark(24, 0, 4, 8, true), "Shark Bait!");