/*
|--------------------------------------------------------------------------
| Find the Integral
|--------------------------------------------------------------------------
|
*/

function integrate(coefficient, exponent) {
   return `${coefficient / (exponent + 1)}x^${exponent + 1}`;
}


function integrate(coeff, exp) {
   return coeff / ++exp + "x^" + exp;
}


function integrate(coefficient, exponent) {
   return coefficient / (exponent + 1) + "x^" + (exponent + 1);
}


console.log(integrate(3, 2), "1x^3");
console.log(integrate(12, 5), "2x^6");
console.log(integrate(20, 1), "10x^2");
console.log(integrate(40, 3), "10x^4");
console.log(integrate(90, 2), "30x^3");