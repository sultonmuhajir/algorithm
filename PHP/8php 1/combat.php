<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Terminal game combat function
|--------------------------------------------------------------------------
|
*/

function combat($health, $damage) {
   return max(0, $health-$damage);
}


function combat($h, $d) {
   return $h < $d ? 0 : $h - $d;
}


function combat($h, $d) {
   return ($h -= $d) < 0 ? 0 : $h;
}


print_r(combat(100, 5) . ' ' . 95 . '
');
print_r(combat(92, 8) . ' ' . 84 . '
');
print_r(combat(20, 30) . ' ' . 0 . '
');