/*
|--------------------------------------------------------------------------
| Removing Elements
|--------------------------------------------------------------------------
|
*/

function removeEveryOther(arr) {
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      if (i % 2 == 0) {
         res.push(arr[i]);
      }
   }
   return res;
}


const removeEveryOther = arr => arr.filter((item, i) => i % 2 == 0);


function removeEveryOther(arr) {
   for (var i = 1; i < arr.length; i++) {
      arr.splice(i, 1);
   }
   return arr;
}


function removeEveryOther(arr) {
   return arr.filter((v, i) => !(i & 1));
}


console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']), ['Hello', 'Hello Again']);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);