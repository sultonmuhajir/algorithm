/*
|--------------------------------------------------------------------------
| Is the string uppercase?
|--------------------------------------------------------------------------
|
*/

String.prototype.isUpperCase = function () {
   return this.toUpperCase() == this
}


String.prototype.isUpperCase = function () {
   return !/[a-z]/.test(this);
}


String.prototype.isUpperCase = function () {
   return this.split('').every(a => a == a.toUpperCase());
}


String.prototype.isUpperCase = function () {
   return !this.match(/[a-z]/g);
}


console.log('c'.isUpperCase(), false);
console.log('C'.isUpperCase(), true);