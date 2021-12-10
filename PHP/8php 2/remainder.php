<?php
/*
|--------------------------------------------------------------------------
| Find the Remainder
|--------------------------------------------------------------------------
|
*/

function remainder($a, $b) {
   return min($a,$b) != 0 ? max($a,$b) % min($a,$b) : null;
}


function remainder($a, $b) {
   list($a, $b) = $a > $b ? [$a, $b] : [$b, $a];
   return $b === 0 ? null : $a % $b;
}


function remainder($a, $b) {
   if (!$min = min($a, $b)) return null;
   return max($a, $b) % $min;
}


function remainder($a, $b) {
   $arr =array($a, $b);
   return min($arr) === 0 ? NULL : max($arr) % min($arr);
}


print_r(remainder(17, 5));
print_r(remainder(13, 72));
print_r(remainder(0, -1));
print_r(remainder(0, 1));