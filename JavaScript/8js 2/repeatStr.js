/*
|--------------------------------------------------------------------------
| String repeat
|--------------------------------------------------------------------------
|
*/

function repeatStr(n, s) {
   return s.repeat(n);
}


const repeatStr = (n, s) => s.repeat(n);


function repeatStr(n, s) {
   var str = "";
   for (var i = 0; i < n; i++)
      str += s;
   return str;
}


console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");