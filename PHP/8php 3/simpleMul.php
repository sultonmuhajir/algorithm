<?php
/*
|--------------------------------------------------------------------------
| Simple multiplication
|--------------------------------------------------------------------------
|
*/

function simpleMultiplication($n) {
   return $n * (8 + $n%2);
}


function simpleMultiplication($number) {
   return ($number % 2 == 0) ? $number * 8 : $number * 9;
}


function simpleMultiplication($a) {
   return $a * (8 + ($a & 1));
}


function simpleMultiplication($n) {
   return $n * ($n % 2 == 0 ? 8 : 9);
}


print_r(simpleMultiplication(2). ' ' . 16 . '
');
print_r(simpleMultiplication(1). ' ' . 9 . '
');
print_r(simpleMultiplication(8). ' ' . 64 . '
');
print_r(simpleMultiplication(4). ' ' . 32 . '
');
print_r(simpleMultiplication(5). ' ' . 45 . '
');