<?php
/*
|--------------------------------------------------------------------------
| Get the mean of an array
|--------------------------------------------------------------------------
|
*/

function get_average($a) {
   return floor(array_reduce($a, function($v1, $v2) { return $v1 + $v2; }) / count($a));
}


function get_average( array $a ) : int {
   return intval( array_sum( $a )/count( $a ) );
}


function get_average($a) {
   return floor(array_sum($a)/count($a));
}


function get_average($a) {
   return intdiv(array_sum($a), count($a));
}


echo(get_average([2, 2, 2, 2])), '
';
echo(get_average([1, 2, 3, 4, 5])), '
';
echo(get_average([1, 1, 1, 1, 1, 1, 1, 2])), '
';