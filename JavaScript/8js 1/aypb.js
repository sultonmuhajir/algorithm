/*
|--------------------------------------------------------------------------
| Are You Playing Banjo?
|--------------------------------------------------------------------------
|
*/

function areYouPlayingBanjo(name) {
   return name.charAt(0).toLowerCase() == 'r' ? `${name} plays banjo` : `${name} does not play banjo`
}


function areYouPlayingBanjo(name) {
   return name + (/^r/i.test(name) ? " plays " : " does not play ") + "banjo";
}


function areYouPlayingBanjo(name) {
   return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}


function areYouPlayingBanjo(name) {
   return name.match(/^r.+/i) ? `${name} plays banjo` : `${name} does not play banjo`;
}


console.log(areYouPlayingBanjo("Adam"), "Adam does not play banjo");
console.log(areYouPlayingBanjo("Paul"), "Paul does not play banjo");
console.log(areYouPlayingBanjo("Ringo"), "Ringo plays banjo");
console.log(areYouPlayingBanjo("bravo"), "bravo does not play banjo");
console.log(areYouPlayingBanjo("rolf"), "rolf plays banjo");