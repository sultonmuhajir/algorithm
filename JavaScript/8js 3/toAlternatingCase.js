/*
|--------------------------------------------------------------------------
| altERnaTIng cAsE <=> ALTerNAtiNG CaSe
|--------------------------------------------------------------------------
|
*/

String.prototype.toAlternatingCase = function () {
   let res = "";
   this.split("").forEach((i) => {
      res += i == i.toLowerCase() ? i.toUpperCase() : i.toLowerCase();
   });
   return res;
};


String.prototype.toAlternatingCase = function () {
   return this.split("")
      .map((a) => (a == a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
      .join("");
};


String.prototype.toAlternatingCase = function () {
   return this.replace(/[A-Za-z]/g, (x) => (x > "Z" ? x.toUpperCase() : x.toLowerCase()));
};


console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");