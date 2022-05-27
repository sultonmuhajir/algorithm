<?php
/*
|--------------------------------------------------------------------------
| Surface Area and Volume of a Box
|--------------------------------------------------------------------------
|
*/

function getSize($w, $h, $d) {
   return [2 * ($w * $h + $w * $d + $h * $d), $w * $h * $d];
}


function getSize($w, $h, $d) {
   return [2*$d*$w + 2*$h*$w + 2*$d*$h, $w*$h*$d];
}


function getSize($w, $h, $d) {
   $area = 2 * ($w * $h + $w * $d + $h * $d);
   $volume = $w * $h * $d;
   return [$area, $volume];
}


print_r(getSize(4, 2, 6));
print_r(getSize(10, 10, 10));