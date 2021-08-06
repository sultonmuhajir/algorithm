/*
|--------------------------------------------------------------------------
| Thinkful - Logic Drills: Traffic light
|--------------------------------------------------------------------------
|
*/

function updateLight(current) {
   return current == 'red' ? 'green' : current == 'yellow' ? 'red' : 'yellow';
}


const updateLight = current => ({
   green: 'yellow',
   yellow: 'red',
   red: 'green',
})[current]


function updateLight(current) {
   let array = ['green', 'yellow', 'red']
   for (let i = 0; i < array.length; i++) {
      if (array[i] === current) {
         return array[(i + 1) % 3]
      }
   }
}


function updateLight(current) {
   const lights = ['green', 'yellow', 'red'];
   return lights[(lights.indexOf(current) + 1) % lights.length];
}


const updateLight = c => s[s.indexOf(c) + 1];
const s = ['red', 'green', 'yellow', 'red', 'B)'];


console.log(updateLight("green"), "yellow");
console.log(updateLight("yellow"), "red");
console.log(updateLight("red"), "green");