function firstNonConsecutive(arr) {
   for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i - 1] + 1) {
         return arr[i];
      }
   }
   return null;
}


const firstNonConsecutive = arr => arr.length == 1 ? null : arr[0] + 1 != arr[1] ? arr[1] : firstNonConsecutive(arr.slice(1));


function firstNonConsecutive(arr) {
   for (let i = 1; i < arr.length; i++) {
      let cur = arr[i];
      let prev = arr[i - 1];
      if (cur - prev > 1) {
         return cur;
      }
   }
   return null;
}


function firstNonConsecutive(arr) {
   return (r = arr.find((x, i) => i > 0 && x != arr[i - 1] + 1)) === undefined ? null : r
}


function firstNonConsecutive(arr) {
   let result = arr.find((val, index) => val !== index + arr[0]);
   return (Number.isInteger(result)) ? result : null;
}


console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]), 6)
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 6, 7, 8]), null)
console.log(firstNonConsecutive([4, 6, 7, 8, 9, 11]), 6)
console.log(firstNonConsecutive([4, 5, 6, 7, 8, 9, 11]), 11)