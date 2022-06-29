/*
|--------------------------------------------------------------------------
| simple calculator
|--------------------------------------------------------------------------
|
*/

function calculator(a, b, sign) {
   try {
      return eval(a + sign + b);
   } catch {
      return "unknown value";
   }
}


function calculator(a, b, sign) {
   switch (sign) {
      case '+':
         return a + b;
      case '-':
         return a - b;
      case '*':
         return a * b;
      case '/':
         return a / b;
      default:
         return "unknown value";
   }
}


function calculator(a, b, sign) {
   const oper = {
      "+": a + b,
      "-": a - b,
      "*": a * b,
      "/": a / b
   }
   return oper[sign] ? oper[sign] : "unknown value"
}


function calculator(a, b, op) {
   if (isNaN(a) || isNaN(b) || /[^\+\-\*\/]/.test(op)) return 'unknown value';
   return {
      '+': () => a + b,
      '-': () => a - b,
      '*': () => a * b,
      '/': () => a / b
   } [op]()
}


console.log(calculator(1, 2, "+"), 3);
console.log(calculator(1, 2, "-"), -1);
console.log(calculator(3, 5, "*"), 15);
console.log(calculator(6, 2, "/"), 3);
console.log(calculator(6, 2, "$"), "unknown value");
console.log(calculator(6, "h", "*"), "unknown value");