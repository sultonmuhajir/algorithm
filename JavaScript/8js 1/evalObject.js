/*
|--------------------------------------------------------------------------
| Switch/Case - Bug Fixing #6
|--------------------------------------------------------------------------
|
*/

function evalObject(value) {
   let result = 0;
   switch (value.operation) {
      case "+": result = value.a + value.b; break;
      case "-": result = value.a - value.b; break;
      case "/": result = value.a / value.b; break;
      case "*": result = value.a * value.b; break;
      case "%": result = value.a % value.b; break;
      case "^": result = Math.pow(value.a, value.b); break;
   }
   return result;
}


const evalObject = value => ({
   '+': (a, b) => a + b,
   '-': (a, b) => a - b,
   '/': (a, b) => a / b,
   '*': (a, b) => a * b,
   '%': (a, b) => a % b,
   '^': Math.pow,
}[value.operation](value.a, value.b));


function evalObject(value){
   switch(value.operation){
      case'+': return value.a + value.b;
      case'-': return value.a - value.b;
      case'/': return value.a / value.b;
      case'*': return value.a * value.b;
      case'%': return value.a % value.b;
      case'^': return Math.pow(value.a, value.b);
   }
}


console.log(evalObject({ a: 1, b: 1, operation: "+" }), 2);
console.log(evalObject({ a: 1, b: 1, operation: "-" }), 0);
console.log(evalObject({ a: 1, b: 1, operation: "/" }), 1);
console.log(evalObject({ a: 1, b: 1, operation: "*" }), 1);
console.log(evalObject({ a: 1, b: 1, operation: "%" }), 0);
console.log(evalObject({ a: 1, b: 1, operation: "^" }), 1);