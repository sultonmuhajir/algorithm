/*
|--------------------------------------------------------------------------
| Remove First and Last Character Part Two
|--------------------------------------------------------------------------
|
*/

function array(arr) {
   return (
      arr
         .split(",")
         .slice(1, arr.split(",").length - 1)
         .join(" ") || null
   );
}


const array = (a) => (a = a.match(/^.*?,(.*),.*?$/)) && a[1].replace(/,/g, " ");


function array(arr) {
   return arr.split(",").slice(1, -1).join(" ") || null;
}


console.log(array("1,2,3"), "2");
console.log(array("1,2,3,4"), "2 3");
console.log(array("1,2,3,4,5"), "2 3 4");
console.log(array(""), null);
console.log(array("1"), null);
console.log(array("1,2"), null);