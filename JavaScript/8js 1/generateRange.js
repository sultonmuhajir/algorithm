/*
|--------------------------------------------------------------------------
| Generate range of integers
|--------------------------------------------------------------------------
|
*/

function generateRange(min, max, step) {
   let res = [];
   for (let i = min; i <= max; i = i + step) {
      res.push(i)
   }
   return res;
}


function generateRange(min, max, step) {
   return min > max ? [] : [min, ...generateRange(min + step, max, step)];
}


function generateRange(min, max, step) {
   for (var res = []; min <= max; min += step) res.push(min)
   return res
}


function generateRange(min, max, step) {
   return Array.from({
      length: 1 + (max - min) / step
   }, (_, i) => min + i * step);
}


console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);