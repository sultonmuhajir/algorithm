/*
|--------------------------------------------------------------------------
| Grasshopper - Debug sayHello
|--------------------------------------------------------------------------
|
*/

function sayHello(name) {
   return `Hello, ${name}`;
}


function sayHello(name) {
   return 'Hello, ' + name;
}


function sayHello(name) {
   return 'Hello, '.concat(name);
}


function sayHello(name) {
   return ['Hello', name].join(', ')
}


console.log(sayHello('Mr. Spock'), 'Hello, Mr. Spock');
console.log(sayHello('Captain Kirk'), 'Hello, Captain Kirk');
console.log(sayHello('Liutenant Uhura'), 'Hello, Liutenant Uhura');
console.log(sayHello('Dr. McCoy'), 'Hello, Dr. McCoy');