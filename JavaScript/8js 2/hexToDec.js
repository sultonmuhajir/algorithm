/*
|--------------------------------------------------------------------------
| Hex to Decimal
|--------------------------------------------------------------------------
|
*/

function hexToDec(hexString) {
   return parseInt(hexString, 16);
}


function hexToDec(_) {
   return parseInt(_, +!!_ + [!!_ + !!_ + !!_ + !!_ + !!_ + !!_]);
}


function hexToDec(hexString) {
   return hexString.match("-")
      ? -Number(`0x${hexString.replace("-", "")}`)
      : Number(`0x${hexString}`);
}


console.log(hexToDec("1"), 1);
console.log(hexToDec("a"), 10);
console.log(hexToDec("10"), 16);
console.log(hexToDec("FF"), 255);
console.log(hexToDec("-C"), -12);