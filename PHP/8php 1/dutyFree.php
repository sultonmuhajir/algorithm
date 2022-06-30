<?php
/*
|--------------------------------------------------------------------------
| Holiday VIII - Duty Free
|--------------------------------------------------------------------------
|
*/

function dutyFree($normPrice, $discount, $hol) {
   return floor($hol / $normPrice / $discount * 100);
}


function dutyFree($normPrice, $discount, $hol) {
   return $hol / ($normPrice * ($discount / 100));
}


function dutyFree($normPrice, $discount, $hol) {
   return $hol / ($normPrice*0.01*$discount);
}


print_r(dutyFree(12, 50, 1000) . ' ' . 166 . '
');
print_r(dutyFree(17, 10, 500) . ' ' . 294 . '
');