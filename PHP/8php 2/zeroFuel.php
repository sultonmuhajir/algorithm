<?php
/*
|--------------------------------------------------------------------------
| Will you make it?
|--------------------------------------------------------------------------
|
*/

function zeroFuel($distanceToPump, $mpg, $fuelLeft) {
   return $mpg * $fuelLeft >= $distanceToPump;
}


function zeroFuel($distanceToPump, $mpg, $fuelLeft) {
   return $distanceToPump <= $mpg * $fuelLeft;
}


print_r(zeroFuel(50, 25, 2) . ' ' . true . '
');
print_r(zeroFuel(100, 50, 1) . ' ' . false . '
');