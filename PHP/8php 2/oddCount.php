<?php
/*
|--------------------------------------------------------------------------
| Count Odd Numbers below n
|--------------------------------------------------------------------------
|
*/

function oddCount($n) {
   return floor($n/2);
}


function oddCount($n) {
   return ($n - 1) / 2;
}


function oddCount($n) {
   return intdiv($n, 2);
}


function oddCount($n) {
   return $n >> 1;
}


print_r(oddCount(15) . ' ' . 7 . '
');
print_r(oddCount(15023) . ' ' . 7511 . '
');