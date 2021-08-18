<?php
/*
|--------------------------------------------------------------------------
| Find Maximum and Minimum Values of a List
|--------------------------------------------------------------------------
|
*/

function maximum($array) {
   return max($array);
}
function minimum($array) {
   return min($array);
}


use function max as maximum;
use function min as minimum;


function maximum($array) {
   return array_reduce($array, function ($acc, $cur) { return $cur > $acc ? $cur : $acc; }, $array[0]);
}
 function minimum($array) {
   return array_reduce($array, function ($acc, $cur) { return $cur < $acc ? $cur : $acc; }, $array[0]);
}


function maximum($array) {
   sort($array);
   $array = array_reverse($array);
   return $array[0];
}
function minimum($array) {
   sort($array);
   return $array[0];
}


print_r(maximum(array(1, 2, 3, 4, 5)). ' ' . 5 . '
');
print_r(minimum(array(1, 2, 3, 4, 5)). ' ' . 1 . '
');