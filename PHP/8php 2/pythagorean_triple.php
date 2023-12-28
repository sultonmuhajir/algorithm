<?php
/*
|--------------------------------------------------------------------------
| Pythagorean Triple
|--------------------------------------------------------------------------
|
*/

function pythagorean_triple($int) {
   sort($int);
   return $int[0]**2 + $int[1]**2 == $int[2]**2;
}


function pythagorean_triple($int) {
   $int = array_map(function($v) {
      return pow($v, 2);
   }, $int);
   return max($int) === array_sum($int)/2 ? 1 : 0;
}


function pythagorean_triple($integers) {
   sort($integers);
   [$a2, $b2, $c2] = array_map(fn($i) => $i*$i, $integers);
   return $a2 + $b2 == $c2;
}


print_r(pythagorean_triple([3, 4, 5]) . ' ' . true . '
');
print_r(pythagorean_triple([3, 5, 9]) . ' ' . false . '
');