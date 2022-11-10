/*
|--------------------------------------------------------------------------
| Grasshopper - Personalized Message
|--------------------------------------------------------------------------
|
*/

function greet(name, owner) {
   return name == owner ? "Hello boss" : "Hello guest";
}


function greet(name, owner) {
   return `Hello ${name == owner ? "boss" : "guest"}`;
}


function greet(name, owner) {
   return "Hello " + (name == owner ? "boss" : "guest");
}


console.log(greet("Daniel", "Daniel"), "Hello boss");
console.log(greet("Greg", "Daniel"), "Hello guest");