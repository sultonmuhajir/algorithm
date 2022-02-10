<?php
/*
|--------------------------------------------------------------------------
| Area or Perimeter
|--------------------------------------------------------------------------
|
*/

function areaOrPerimeter (int $l, int $w){
   return $l == $w ? $l * $w : 2 * ($l + $w);
}


function areaOrPerimeter(int $l, int $w) {
   if ($l == $w) {
      return $l * $w;
   } else {
      return 2 * ($l + $w);
   }
}


function areaOrPerimeter (int $l, int $w){
   return $l - $w ? ($l + $w) * 2 : $l ** 2;
}


print_r(areaOrPerimeter(4, 4) . ' ' . 16 . '
');
print_r(areaOrPerimeter(6, 10) . ' ' . 32 . '
');