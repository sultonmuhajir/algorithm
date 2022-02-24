/*
|--------------------------------------------------------------------------
| Lario and Muigi Pipe Problem
|--------------------------------------------------------------------------
|
*/

function pipeFix(numbers) {
   let res = [];
   for (let i = Math.min(...numbers); i <= Math.max(...numbers); i++) {
      res.push(i);
   }
   return res;
}


function pipeFix(numbers) {
   return Array.from({
      length: numbers.pop() - numbers[0] + 1
   }, (v, i) => i + numbers[0]);
}


function pipeFix(num, arr = []) {
   for (let i = num[0]; i <= num.slice(-1)[0]; i++) {
      arr.push(i)
   }
   return arr
}


function pipeFix(numbers) {
   return Array(arr.pop() - numbers[0] + 1).fill(0).map((e, i) => i + numbers[0])
}


console.log(pipeFix([1, 2, 3, 5, 6, 8, 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(pipeFix([1, 2, 3, 12]), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
console.log(pipeFix([6, 9]), [6, 7, 8, 9]);
console.log(pipeFix([-1, 4]), [-1, 0, 1, 2, 3, 4]);
console.log(pipeFix([1, 2, 3]), [1, 2, 3]);