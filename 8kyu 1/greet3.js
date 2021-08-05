/*
|--------------------------------------------------------------------------
| Jenny's secret message
|--------------------------------------------------------------------------
|
*/

function greet(name) {
   return name == 'Johnny' ? 'Hello, my love!' : `Hello, ${name}!`;
}


const greet = name => `Hello, ${name == "Johnny" ? "my love" : name}!`;


function greet(name) {
   if (name === "Johnny")
      return "Hello, my love!";
   else
      return "Hello, " + name + "!";
}


function greet(name) {
   return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}


console.log(greet("Jim"), "Hello, Jim!");
console.log(greet("Jane"), "Hello, Jane!");
console.log(greet("Simon"), "Hello, Simon!");
console.log(greet("Johnny"), "Hello, my love!");