/*
|--------------------------------------------------------------------------
| String Templates - Bug Fixing #5
|--------------------------------------------------------------------------
|
*/

function buildString(...template) {
   return `I like ${template.join(", ")}!`;
}


const buildString = (...template) => `I like ${template.join(", ")}!`;


function buildString(...template) {
   return "I like " + template.join(", ") + "!";
}


console.log(buildString("Cheese", "Milk", "Chocolate"), "I like Cheese, Milk, Chocolate!");
console.log(buildString("Cheese", "Milk"), "I like Cheese, Milk!");
console.log(buildString("Chocolate"), "I like Chocolate!");