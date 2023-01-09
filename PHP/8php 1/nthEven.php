<?php
/*
|--------------------------------------------------------------------------
| Get Nth Even Number
|--------------------------------------------------------------------------
|
*/

function nthEven($n) {
   return $n * 2 - 2;
}


function nthEven($n) {
   return --$n << 1;
}


function nthEven($n) {
   return ($n - 1) * 2;
}


print_r(nthEven(1) . ' ' . 0 . '
');
print_r(nthEven(2) . ' ' . 2 . '
');
print_r(nthEven(3) . ' ' . 4 . '
');