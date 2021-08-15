<?php
/*
|--------------------------------------------------------------------------
| Beginner - Reduce but Grow
|--------------------------------------------------------------------------
|
*/

function grow($a) {
   $res = 1;
   foreach ($a as $b) {
      $res *= $b;
   }
   return $res;
}


use function array_product as grow;


function grow($a) {
   return array_product($a);
}


function grow($a) {
   return array_reduce($a, function($x, $s){return $x*$s;}, 1);
}


print_r(grow([1, 2, 3]). ' ' . 6 . '
');
print_r(grow([4, 1, 1, 1, 4]). ' ' . 16 . '
');
print_r(grow([2, 2, 2, 2, 2, 2]). ' ' . 64 . '
');