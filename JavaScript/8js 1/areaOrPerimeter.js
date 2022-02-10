/*
|--------------------------------------------------------------------------
| Area or Perimeter
|--------------------------------------------------------------------------
|
*/

function areaOrPerimeter(l, w) {
   return l == w ? l * w : 2 * (l + w);
}


const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w);


function areaOrPerimeter(l, w) {
   if (l == w) {
      return l * w;
   } else {
      return 2 * (l + w);
   }
}


function areaOrPerimeter(l, w) {
   return l - w ? (l + w) * 2 : l ** 2;
}


console.log(areaOrPerimeter(4, 4), 16);
console.log(areaOrPerimeter(6, 10), 32);