/*
|--------------------------------------------------------------------------
| Will there be enough space?
|--------------------------------------------------------------------------
|
*/

function enough(cap, on, wait) {
   return wait - (cap - on) > 0 ? wait - (cap - on) : 0
}


function enough(cap, on, wait) {
   return Math.max(wait + on - cap, 0);
}


function enough(cap, on, wait) {
   return Math.abs(Math.min([cap - on - wait], 0))
}


console.log(enough(10, 5, 5), 0);
console.log(enough(100, 60, 50), 10);
console.log(enough(20, 5, 5), 0);