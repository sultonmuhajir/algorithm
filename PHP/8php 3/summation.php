<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Summation
|--------------------------------------------------------------------------
|
*/

function summation($n) {
   return $n * ($n + 1) / 2;
}


function summation($n) {
   $result = '';
   for ($i = 1; $i <= $n; $i++) {
      $result += $i;
   }
   return $result;
}


function summation($n) {
   return array_sum(range(1, $n));
}


function summation($n) {
   return abs($n)*abs($n+1)/2;
}


print_r(summation(1). ' ' . 1 . '
');
print_r(summation(8). ' ' . 36 . '
');