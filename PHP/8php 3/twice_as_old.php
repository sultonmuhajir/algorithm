<?php
/*
|--------------------------------------------------------------------------
| Twice as old
|--------------------------------------------------------------------------
|
*/

function twice_as_old($d, $s) {
   return abs($d - $s - $s);
}


function twice_as_old($dad, $son) {
   return abs($dad-2*$son);
}


function twice_as_old($d, $s) {
   return $s*2 < $d ? $d - $s*2 : $s*2 - $d;
}


function twice_as_old(int $dads_age, int $sons_age): int {
   return abs($dads_age - $sons_age * 2);
}


print_r(twice_as_old(36, 7). ' ' . 22 . '
');
print_r(twice_as_old(55, 30). ' ' . 5 . '
');
print_r(twice_as_old(42, 21). ' ' . 0 . '
');
print_r(twice_as_old(44, 21). ' ' . -2 . '
');
print_r(twice_as_old(22, 1). ' ' . 20 . '
');
print_r(twice_as_old(29, 0). ' ' . 29 . '
');