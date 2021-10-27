/*
|--------------------------------------------------------------------------
| Sort and Star
|--------------------------------------------------------------------------
|
*/

function twoSort(s) {
   return s.sort()[0].split('').join('***');
}


const twoSort = s => [...s.sort()[0]].join('***');


function twoSort(s) {
   let last = s.sort()[0];
   let a = last[0];
   for (let i = 1; i < last.length; i++) {
      a += "***" + last[i];
   }
   return a;
}


function twoSort(array) {
   return [...array.reduce((min, str) => min < str ? min : str)].join("***");
}


function twoSort(q) {
   let a = q.sort();
   a = a[0].replace(/(.)(?=.{1,}$)/g, '$1***');
   return a;
}


console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n');
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');