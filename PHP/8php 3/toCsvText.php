<?php
/*
|--------------------------------------------------------------------------
| CSV representation of array
|--------------------------------------------------------------------------
|
*/

function toCsvText($array) {
   return implode('\n', array_map(fn($i) => implode(',', $i), $array));
}


function toCsvText($array) {
   $res = '';
   foreach ($array as $arr) {
      $res .= implode(',', $arr) . '\n';
   }
   $res = rtrim($res, '\n');
   return $res;
}


function toCsvText($array) {
   return join("\\n", array_map(fn($v) => join(",", $v), $array));
}


print_r(
   toCsvText([
      [0, 1, 2, 3, 45],
      [10, 11, 12, 13, 14],
      [20, 21, 22, 23, 24],
      [30, 31, 32, 33, 34],
   ]) .
   " 0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34"
);