/*
|--------------------------------------------------------------------------
| Fuel Calculator
|--------------------------------------------------------------------------
|
*/

function fuelPrice(litres, pricePerLitre) {
   return Number((litres * pricePerLitre - ((litres <= 10 ? Math.floor(litres / 2) * 5 : 25) * litres * 0.01)).toFixed(2))
}


function fuelPrice(litres, pricePerLiter) {
   return Math.round(100 * litres * Math.max(pricePerLiter - 0.05 * ~~(litres / 2), pricePerLiter - 0.25)) / 100;
}


function fuelPrice(litres, pricePerLiter) {
   return +(litres * (pricePerLiter - Math.min((litres / 2 ^ 0) * 0.05, 0.25))).toFixed(2);
}


console.log(fuelPrice(5, 1.23), 5.65);
console.log(fuelPrice(8, 2.5), 18.40);
console.log(fuelPrice(5, 5.6), 27.50);
console.log(fuelPrice(10, 21.5), 212.5);
console.log(fuelPrice(40, 10), 390);
console.log(fuelPrice(15, 5.83), 83.7);