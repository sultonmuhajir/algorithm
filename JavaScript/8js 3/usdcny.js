/*
|--------------------------------------------------------------------------
| USD => CNY
|--------------------------------------------------------------------------
|
*/

function usdcny(usd) {
   return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}


const usdcny = (_) => `${(_ * 6.75).toFixed(2)} Chinese Yuan`;


function usdcny(usd) {
   return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}


console.log(usdcny(15), "101.25 Chinese Yuan");
console.log(usdcny(465), "3138.75 Chinese Yuan");
console.log(usdcny(1816), "12258.00 Chinese Yuan");