<?php
/*
|--------------------------------------------------------------------------
| Is n divisible by x and y?
|--------------------------------------------------------------------------
|
*/

function is_divisible($n, $x, $y) {
   return $n % $x == 0 && $n % $y == 0;
}


function is_divisible($n, $x, $y) {
   return $n % $x == 0 and $n % $y == 0 ? true : false;
}


function is_divisible(int $n, int $x, int $y) : bool {
   return !($n % $x || $n % $y);
}


print_r(is_divisible(3, 3, 4). ' ' . false . '
');
print_r(is_divisible(12, 3, 4). ' ' . true . '
');
print_r(is_divisible(8, 3, 4). ' ' . false . '
');
print_r(is_divisible(48, 3, 4). ' ' . true . '
');