/*
|--------------------------------------------------------------------------
| Reverse List Order
|--------------------------------------------------------------------------
|
*/

function reverseList(list) {
   return list.reverse();
}


const reverseList = list => list.reverse();
const reverseList = ([h, ...t]) => h == undefined ? [] : [...reverseList(t), h];


function reverseList(list) {
   let array = [];
   for (let i = list.length - 1; i >= 0; i--) {
      array.push(list[i]);
   }
   return array;
}


function reverseList(list) {
   return list.reduce((reverseList, element) => [element, ...reverseList], []);
}


function reverseList(list) {
   const rList = [];
   for (let i = 0; i < list.length; i++) {
      rList.unshift(list[i]);
   }
   return rList
}


console.log(reverseList([1, 2, 3, 4]), [4, 3, 2, 1]);
console.log(reverseList([3, 1, 5, 4]), [4, 5, 1, 3]);