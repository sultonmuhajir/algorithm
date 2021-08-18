<?php
/*
|--------------------------------------------------------------------------
| Keep Hydrated!
|--------------------------------------------------------------------------
|
*/

function litres($t) {
   return floor($t * 0.5);
}


function litres($t) {
   return floor($t/2);
}


function litres($t) {
   return intdiv($t, 2);
}


function litres($t) {
   return $t >> 1;
}


print_r(litres(2). ' ' . 1 . '
');
print_r(litres(1.4). ' ' . 0 . '
');
print_r(litres(12.3). ' ' . 6 . '
');
print_r(litres(0.82). ' ' . 0 . '
');