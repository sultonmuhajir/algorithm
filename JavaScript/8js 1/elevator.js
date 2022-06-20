/*
|--------------------------------------------------------------------------
| Closest elevator
|--------------------------------------------------------------------------
|
*/

function elevator(left, right, call) {
   return call == right || Math.abs(call - right) <= Math.abs(call - left) ? 'right' : 'left'
}


function elevator(left, right, call) {
   return (call - left) ** 2 < (call - right) ** 2 ? "left" : "right"
}


function elevator(left, right, call) {
   return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
}


console.log(elevator(0, 1, 0), 'left');
console.log(elevator(0, 1, 1), 'right');
console.log(elevator(0, 1, 2), 'right');
console.log(elevator(0, 0, 0), 'right');
console.log(elevator(0, 2, 1), 'right');