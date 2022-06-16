<?php
/*
|--------------------------------------------------------------------------
| Find out whether the shape is a cube
|--------------------------------------------------------------------------
|
*/

function cubeChecker($volume, $side){
   return $side > 0 && $side ** 3 == $volume;
}


function cubeChecker($volume, $side){
   return $volume == pow($side, 3) >= 0 ;
}


function cubeChecker($volume, $side) {
   return $volume > 0 && $volume == $side ** 3;
}


print_r(cubeChecker(56.3, 1) . ' ' . false . '
');
print_r(cubeChecker(-1, 2) . ' ' . false . '
');
print_r(cubeChecker(8, 3) . ' ' . false . '
');
print_r(cubeChecker(8, 2) . ' ' . true . '
');
print_r(cubeChecker(-8, -2) . ' ' . false . '
');
print_r(cubeChecker(0, 0) . ' ' . false . '
');