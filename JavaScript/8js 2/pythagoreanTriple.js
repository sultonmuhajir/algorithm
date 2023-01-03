/*
|--------------------------------------------------------------------------
| Pythagorean Triple
|--------------------------------------------------------------------------
|
*/

function isPythagoreanTriple(integers) {
   const sort = integers.sort((a, b) => a - b);
   return sort[0] ** 2 + sort[1] ** 2 == sort[2] ** 2;
}


function isPythagoreanTriple(integers) {
   return 2 * Math.max(...integers) ** 2 == integers.reduce((a, b) => a + b ** 2, 0);
}


function isPythagoreanTriple(i) {
   const [a, b, c] = i.sort((a, b) => a - b);
   return a * a + b * b === c * c;
}


console.log(isPythagoreanTriple([3, 4, 5]), true);
console.log(isPythagoreanTriple([3, 5, 9]), false);