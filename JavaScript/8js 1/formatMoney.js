/*
|--------------------------------------------------------------------------
| Dollars and Cents
|--------------------------------------------------------------------------
|
*/

function formatMoney(amount) {
   return `$${String(amount.toFixed(2))}`
}


function formatMoney(amount) {
   return '$' + amount.toFixed(2);
}


function formatMoney(amount) {
   const newAmount = (amount).toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
   }).replace(/,/g, "")
   return newAmount
}


console.log(formatMoney(39.99), '$39.99');