<?php
/*
|--------------------------------------------------------------------------
| Points of Reflection
|--------------------------------------------------------------------------
|
*/

function symmetric_point($p, $q) {
   return [2 * $q[0] - $p[0], 2 * $q[1] - $p[1]];
}


function symmetric_point($p, $q) {
   return [($q[0] << 1) - $p[0], ($q[1] << 1) - $p[1]];
}


function symmetric_point($p, $q) {
   return array_map(function($x, $y){return $y * 2 - $x;}, $p, $q);
}


print_r(symmetric_point([0, 0], [1, 1]));
print_r(symmetric_point([2, 6], [-2, -6]));