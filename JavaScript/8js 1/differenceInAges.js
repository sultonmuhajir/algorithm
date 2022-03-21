/*
|--------------------------------------------------------------------------
| Find the Difference in Age between Oldest and Youngest Family Members
|--------------------------------------------------------------------------
|
*/


function differenceInAges(ages) {
   return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
}


function differenceInAges(ages) {
   return (min = Math.min(...ages), max = Math.max(...ages), [min, max, max - min])
}


function differenceInAges(ages) {
   return [ages.sort((a, b) => a - b)[0], +(+ages.slice(-1)), ages.slice(-1) - ages[0]]
}


console.log(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
console.log(differenceInAges([57, 99, 14, 32]), [14, 99, 85]);