/*
|--------------------------------------------------------------------------
| How good are you really?
|--------------------------------------------------------------------------
|
*/

function betterThanAverage(classPoints, yourPoints) {
   return yourPoints > (classPoints.reduce((a, b) => a + b) + yourPoints) / (classPoints.length + 1);
}


function betterThanAverage(classPoints, yourPoints) {
   return yourPoints > classPoints.reduce(function (sum, x) {
      return sum + x
   }, yourPoints) / (classPoints.length + 1)
}


function betterThanAverage(classPoints, yourPoints) {
   const classPointsSum = classPoints.reduce((a, b) => a + b, 0);
   const classAverage = classPointsSum / classPoints.length;
   const isBetter = yourPoints > classAverage;
   return isBetter;
}


function betterThanAverage(classPoints, yourPoints) {
   return classPoints.reduce((sum, x) => sum + x) < yourPoints * classPoints.length;
}


console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);