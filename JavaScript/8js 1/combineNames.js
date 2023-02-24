/*
|--------------------------------------------------------------------------
| Grasshopper - Combine strings
|--------------------------------------------------------------------------
|
*/

function combineNames(fn, ln) {
   return `${fn} ${ln}`;
}


function combineNames(...names) {
   return names.join(" ");
}


function combineNames(fn, ln) {
   return fn + " " + ln;
}


console.log(combineNames("James", "Stevens"), "James Stevens");