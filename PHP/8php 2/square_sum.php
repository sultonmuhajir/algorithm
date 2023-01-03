<?php
/*
|--------------------------------------------------------------------------
| Square(n) Sum
|--------------------------------------------------------------------------
|
*/

function square_sum($numbers) : int {
   return array_reduce($numbers, function($a, $b) { return $a + ($b * $b); }, 0);
}


function square_sum($n) : int {
   return array_sum(array_map(function($v){return $v * $v;}, $n));
}


function square_sum(array $numbers) : int {
   $sum = 0;
   foreach($numbers as $number) {
      $sum += $number * $number;
   }
   return $sum;
}


print_r(square_sum([1, 2]). ' ' . 5 . '
');
print_r(square_sum([0, 3, 4, 5]). ' ' . 50 . '
');