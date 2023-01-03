/*
|--------------------------------------------------------------------------
| Get the mean of an array
|--------------------------------------------------------------------------
|
*/

function getAverage(marks) {
   return Math.floor(marks.reduce((acc, curr) => acc + curr) / marks.length);
}


const getAverage = marks => ~~(marks.reduce((s, v) => s + v) / marks.length);


function getAverage(marks) {
   let sum = 0;
   for (let i in marks)
      sum += marks[i];

   return parseInt(sum / marks.length);
}


console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5, ]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);