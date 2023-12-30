<?php
/*
|--------------------------------------------------------------------------
| No zeros for heros
|--------------------------------------------------------------------------
|
*/

function noBoringZeros(int $n): int {
   while ($n % 10 == 0 && $n != 0) $n /= 10;
   return $n;
}


function noBoringZeros(int $n): int {
   return (int) rtrim($n, '0');
}


function noBoringZeros(int $n): int {
   return (int) preg_replace('/0+$/', '', $n);
}


print_r(noBoringZeros(1450) . ' ' . 145 . '
');
print_r(noBoringZeros(960000) . ' ' . 96 . '
');
print_r(noBoringZeros(1050) . ' ' . 105 . '
');
print_r(noBoringZeros(-1050) . ' ' . -105 . '
');
print_r(noBoringZeros(-105) . ' ' . -105 . '
');
print_r(noBoringZeros(0) . ' ' . 0 . '
');