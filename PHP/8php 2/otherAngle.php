<?php
/*
|--------------------------------------------------------------------------
| Third Angle of a Triangle
|--------------------------------------------------------------------------
|
*/

function otherAngle($a, $b) {
   return 180 - ($a + $b);
}


function otherAngle($a, $b) {
   return 180 - $a - $b;
}


function otherAngle(...$n) {
   return 180 - array_sum($n);
}


print_r(otherAngle(30, 60) . ' ' . 90 . '
');
print_r(otherAngle(60, 60) . ' ' . 60 . '
');
print_r(otherAngle(43, 78) . ' ' . 59 . '
');
print_r(otherAngle(10, 20) . ' ' . 150 . '
');