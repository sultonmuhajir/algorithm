/*
|--------------------------------------------------------------------------
| Beginner Series #2 Clock
|--------------------------------------------------------------------------
|
*/

function past(h, m, s) {
   return ((h * 3600000) + (m * 60000) + (s * 1000));
}


const past = (...args) => args.reduce((pre, val) => 60 * pre + val, 0) * 1e3;


function past(h, m, s) {
   return ((h * 3600) + (m * 60) + s) * 1000;
}


function past(h, m, s) {
   const setTime = new Date().setHours(h, m, s);
   const midnight = new Date().setHours(0, 0, 0);
   return Math.round(setTime - midnight);
}


console.log(past(0, 1, 1), 61000)
console.log(past(1, 1, 1), 3661000)
console.log(past(0, 0, 0), 0)
console.log(past(1, 0, 1), 3601000)
console.log(past(1, 0, 0), 3600000)