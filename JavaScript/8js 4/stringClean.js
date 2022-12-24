/*
|--------------------------------------------------------------------------
| String cleaning
|--------------------------------------------------------------------------
|
*/

function stringClean(s) {
   return [...s].filter((i) => !"0123456789".includes(i)).join("");
}


function stringClean(s) {
   return s.replace(/\d/g, "");
}


function stringClean(s) {
   return s.replace(/[0-9]/g, "");
}


console.log(stringClean("! !"), "! !");
console.log(stringClean("123456789"), "");
console.log(stringClean("(E3at m2e2!!)"), "(Eat me!!)");