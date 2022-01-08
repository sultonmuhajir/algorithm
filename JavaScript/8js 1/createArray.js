/*
|--------------------------------------------------------------------------
| Unfinished Loop - Bug Fixing #1
|--------------------------------------------------------------------------
|
*/


function createArray(number) {
   let newArray = [];
   for (let i = 1; i <= number; i++) {
      newArray.push(i);
   }
   return newArray;
}


const createArray = n => Array(...Array(n)).map((v, i) => i + 1);


function createArray(number) {
   let newArray = [];
   for (let counter = 1; counter <= number; counter++) {
      newArray.push(counter);
   }
   return newArray;
}


function createArray(number) {
   return Array.from({
      length: number
   }, (v, i) => i + 1)
}


console.log(createArray(1), [1]);
console.log(createArray(2), [1, 2]);
console.log(createArray(3), [1, 2, 3]);
console.log(createArray(4), [1, 2, 3, 4]);
console.log(createArray(5), [1, 2, 3, 4, 5]);