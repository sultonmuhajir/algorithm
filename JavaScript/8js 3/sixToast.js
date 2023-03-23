/*
|--------------------------------------------------------------------------
| BASIC: Making Six Toast.
|--------------------------------------------------------------------------
|
*/

function sixToast(num) {
   return Math.abs(num - 6);
}


const sixToast = (_) => (_ > 6 ? _ - 6 : 6 - _);


function sixToast(num) {
   return Math.abs(6 - num);
}


console.log(sixToast(6), 0);
console.log(sixToast(17), 11);
console.log(sixToast(3), 3);