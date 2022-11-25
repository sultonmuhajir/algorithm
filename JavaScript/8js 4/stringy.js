/*
|--------------------------------------------------------------------------
| Stringy Strings
|--------------------------------------------------------------------------
|
*/

function stringy(size) {
   res = "";
   for (let i = 1; i <= size; i++) {
      res += i % 2 == 0 ? "0" : "1";
   }
   return res;
}


function stringy(size) {
   return "".padStart(size, "10");
}


function stringy(size) {
   return "10".repeat(size).slice(0, size);
}


console.log(stringy(4), "1010");