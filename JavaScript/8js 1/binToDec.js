/*
|--------------------------------------------------------------------------
| Bin to Decimal
|--------------------------------------------------------------------------
|
*/

function binToDec(bin) {
   return parseInt(bin, 2);
}


function binToDec(bin) {
   return [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0)
}


function binToDec(bin) {
   return eval('0b' + bin)
}


function binToDec(bin) {
   return bin.split("").reverse().map(function (a, b) {
      return Number(a) * Math.pow(2, b)
   }).reduce(function (a, b) {
      return a + b
   });
}


function binToDec(bin) {
   return +`0b${bin}`
}


console.log(binToDec("0"), 0)
console.log(binToDec("1"), 1)
console.log(binToDec("10"), 2)
console.log(binToDec("11"), 3)
console.log(binToDec("101010"), 42)
console.log(binToDec("1001001"), 73)