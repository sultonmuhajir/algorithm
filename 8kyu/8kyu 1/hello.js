function hello(name = "") {
   if (name == "") {
      return `Hello, World!`;
   } else {
      const lower = name.toLowerCase().substr(1);
      const upper = name[0].toUpperCase();
      return `Hello, ${upper + lower}!`;
   }
}


function hello(name = "") {
   if (name == "") {
      return `Hello, World!`;
   } else {
      return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`
   }
}


function hello(name) {
   if (name) {
      return "Hello, " + name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase() + '!';
   } else {
      return "Hello, World!";
   }
}


function hello(name) {
   return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
}


console.log(hello('johN'), 'Hello, John!')
console.log(hello('alice'), 'Hello, Alice!')
console.log(hello(), 'Hello, World!')
console.log(hello(''), 'Hello, World!')