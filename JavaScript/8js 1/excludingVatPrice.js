/*
|--------------------------------------------------------------------------
| Calculate Price Excluding VAT
|--------------------------------------------------------------------------
|
*/

function excludingVatPrice(price) {
   return price != null ? Number((price - ((price / 115) * 15)).toFixed(2)) : -1
}


function excludingVatPrice(price) {
   return price == null ? -1 : +(price / 1.15).toFixed(2);
}


function excludingVatPrice(price) {
   return price == null ? -1 : Number(parseFloat(price / 1.15).toFixed(2))
}


console.log(excludingVatPrice(230), 200.00);
console.log(excludingVatPrice(123), 106.96);
console.log(excludingVatPrice(null), -1);