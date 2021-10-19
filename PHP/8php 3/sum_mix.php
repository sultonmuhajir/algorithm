<?php
/*
|--------------------------------------------------------------------------
| Sum Mixed Array
|--------------------------------------------------------------------------
|
*/

function sum_mix($a) {
   return array_sum(array_map(function ($i) {
      return intval($i);
   }, $a));
}


function sum_mix($a) {
   return array_sum($a);  
}


function sum_mix($a) {
   return array_reduce($a, function($carry, $item) {
      return $carry + (int)$item; 
   });
}


function sum_mix($a) {
   $res = 0;
   foreach ($a as $number) {
      $res += $number;
   }
   return $res;
}


print_r(sum_mix([9, 3, '7', '3']) . ' ' . 22 . '
');
print_r(sum_mix(['5', '0', 9, 3, 2, 1, '9', 6, 7]) . ' ' . 42 . '
');
print_r(sum_mix(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']) . ' ' . 41 . '
');