/*
|--------------------------------------------------------------------------
| My head is at the wrong end!
|--------------------------------------------------------------------------
|
*/

function fixTheMeerkat(arr) {
   return arr.reverse();
}


const fixTheMeerkat = ([tail, body, head]) => [head, body, tail];


const fixTheMeerkat = ar => ar.slice().reverse();


function fixTheMeerkat(arr) {
   return [arr[2], arr[1], arr[0]];
}


console.log(fixTheMeerkat(["tail", "body", "head"]), ["head", "body", "tail"]);
console.log(fixTheMeerkat(["tails", "body", "heads"]), ["heads", "body", "tails"]);
console.log(fixTheMeerkat(["bottom", "middle", "top"]), ["top", "middle", "bottom"]);
console.log(fixTheMeerkat(["lower legs", "torso", "upper legs"]), ["upper legs", "torso", "lower legs"]);
console.log(fixTheMeerkat(["ground", "rainbow", "sky"]), ["sky", "rainbow", "ground"]);