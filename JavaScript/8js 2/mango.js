/*
|--------------------------------------------------------------------------
| Price of Mangoes
|--------------------------------------------------------------------------
|
*/

function mango(quantity, price) {
   return Math.ceil(quantity - quantity / 3) * price;
}


function mango(quantity, price) {
   return (quantity - ~~(quantity / 3)) * price;
}


function mango(quantity, price) {
   return price * (quantity - Math.floor(quantity / 3));
}


function mango(quantity, price) {
   return (quantity - ((quantity / 3) ^ 0)) * price;
}


console.log(mango(2, 3), 6);
console.log(mango(3, 3), 6);
console.log(mango(5, 3), 12);
console.log(mango(9, 5), 30);