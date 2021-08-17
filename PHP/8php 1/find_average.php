<?php
/*
|--------------------------------------------------------------------------
| Calculate average
|--------------------------------------------------------------------------
|
*/

function find_average($array) {
   return count($array) == 0 ? 0 : array_sum($array) / count($array);
}


function find_average($a) {
   $s = 0;
   foreach($a as $i){
      $s += $i;
   }
   return $s / count($a);
}


function find_average($array) {
   return array_sum($array) / count($array);
}


function find_average($array) {
   $sum = 0;
   $count = 0;
   foreach ( $array as $item ) {
      $sum += $item;
      $count++;
   }
   return $sum / $count;
}


print_r(find_average([1, 1, 1]). ' ' . 1 . '
');
print_r(find_average([]). ' ' . 0 . '
');
print_r(find_average([1, 2, 3]). ' ' . 2 . '
');
print_r(find_average([1, 2, 3, 4]). ' ' . 2.5 . '
');