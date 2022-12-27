/*
|--------------------------------------------------------------------------
| Take the Derivative
|--------------------------------------------------------------------------
|
*/

function derive(coefficient, exponent) {
   return `${coefficient * exponent}x^${exponent - 1}`;
}


const derive = (coefficient, exponent) => `${coefficient * exponent}x^${exponent - 1}`;


function derive(c, e) {
   return c * e + "x^" + (e - 1);
}


console.log(derive(7, 8), "56x^7");
console.log(derive(5, 9), "45x^8");