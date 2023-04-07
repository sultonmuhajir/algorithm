/*
|--------------------------------------------------------------------------
| Template Strings
|--------------------------------------------------------------------------
|
*/

function TempleStrings(obj, feature) {
   return `${obj} are ${feature}`;
}


const TempleStrings = (obj, feature) => `${obj} are ${feature}`;


const TempleStrings = function (obj, feature) {
   return obj + " are " + feature;
};


console.log(TempleStrings("Animals", "Good"), "Animals are Good");