/*
|--------------------------------------------------------------------------
| Regexp Basics - is it a digit?
|--------------------------------------------------------------------------
|
*/

String.prototype.digit = function () {
   return this.match(/^[0-9]$/) != null;
};


String.prototype.digit = function () {
   return /^[0-9]$/g.test(this);
};


String.prototype.digit = function () {
   return /^\d$/.test(this);
};


String.prototype.digit = function () {
   return this.length === 1 && "0" <= this && this <= "9";
};


console.log("".digit(), false);
console.log("7".digit(), true);
console.log(" ".digit(), false);
console.log("a".digit(), false);
console.log("a5".digit(), false);
console.log("14".digit(), false);