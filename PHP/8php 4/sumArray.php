<?php
/*
|--------------------------------------------------------------------------
| Sum without highest and lowest number
|--------------------------------------------------------------------------
|
*/

function sumArray($array) {
   $sort = [];
   sort($array);
   for ($i=0; $i < count($array); $i++) { 
      array_push($sort, $array[$i]);
   }
   return array_sum(array_splice($sort, 1, -1));
}


function sumArray($a) {
   return array_sum($a) - max($a) - min($a);
}


function sumArray($array) {
   sort($array);
   array_pop($array);
   array_shift($array);
   return array_sum($array);
}


print_r(sumArray([6, 2, 1, 8, 10]). ' ' . 16 . '
');
print_r(sumArray([]). ' ' . 0 . '
');