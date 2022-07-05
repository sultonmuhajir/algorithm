/*
|--------------------------------------------------------------------------
| Expressions Matter
|--------------------------------------------------------------------------
|
*/

function expressionMatter(a, b, c) {
   return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c));
}


const expressionMatter = (a, b, c) => Math.max(a + b + c, (a + b) * c, a * (b + c), a * b * c);


function expressionMatter(a, b, c) {
   if (a == 1 && b == 1 && c == 1) {
      return 3;
   } else if (a == 1 && c == 1) {
      return a + b + c;
   } else if ((a == 1 || c == 1) || (a != 1 && b == 1 && c != 1)) {
      return a < c ? (a + b) * c : a * (b + c);
   } else {
      return a * b * c;
   }
}


console.log(expressionMatter(2, 1, 2), 6)
console.log(expressionMatter(2, 1, 1), 4)
console.log(expressionMatter(2, 2, 4), 16)