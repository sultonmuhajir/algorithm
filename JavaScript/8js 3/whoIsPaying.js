/*
|--------------------------------------------------------------------------
| Who is going to pay for the wall?
|--------------------------------------------------------------------------
|
*/

function whoIsPaying(name) {
   return name.length <= 2 ? [name] : [name, name.slice(0, 2)];
}


function whoIsPaying(name) {
   return [...new Set([name, name.slice(0, 2)])];
}


function whoIsPaying(name) {
   return name.length > 2 ? [name, name.substr(0, 2)] : [name];
}


console.log(whoIsPaying("Mexico"), ["Mexico", "Me"]);
console.log(whoIsPaying("Melania"), ["Melania", "Me"]);
console.log(whoIsPaying("Melissa"), ["Melissa", "Me"]);
console.log(whoIsPaying("Me"), ["Me"]);
console.log(whoIsPaying(""), [""]);
console.log(whoIsPaying("I"), ["I"]);