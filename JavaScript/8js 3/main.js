/*
|--------------------------------------------------------------------------
| Grasshopper - Function syntax debugging
|--------------------------------------------------------------------------
|
*/

function main(verb, noun) {
   return verb + noun;
}


const main = String.prototype.concat.bind("");


function main(...x) {
   return x.join("");
}


function main(verb, noun) {
   return `${verb}${noun}`;
}


console.log(main("take ", "item"), "take item");
console.log(main("use ", "sword"), "use sword");