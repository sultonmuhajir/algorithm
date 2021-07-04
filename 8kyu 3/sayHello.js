function sayHello(name, city, state) {
   return `Hello, ${name.join(" ")}! Welcome to ${city}, ${state}!`;
}


const sayHello = (name, ...city) => `Hello, ${name.join(' ')}! Welcome to ${city.join(', ')}!`


function sayHello(name, city, state) {
   return `Hello, ${name.toString().replace(/,/g, " ")}! Welcome to ${city}, ${state}!`;
}


function sayHello(name, city, state) {
   let n = name.reduce((a, c) => a + c + ' ', '')
   let str = `Hello, ${n.slice(0,-1)}! Welcome to ${city}, ${state}!`
   return str
}


console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'))