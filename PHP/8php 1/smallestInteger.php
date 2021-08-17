<?php
/*
|--------------------------------------------------------------------------
| Find the smallest integer in the array
|--------------------------------------------------------------------------
|
*/

function smallestInteger ($arr) {
   return min($arr);
}


function smallestInteger ($arr) {
   $min = $arr[0];
   for($i = 0 ; $i < count($arr); $i++ ){
      if ($arr[$i] <= $min) {
         $min = $arr[$i];
      }
   }return $min;
}


function smallestInteger ($elements) {
   sort($elements);
   return $elements[0];
}


print_r(smallestInteger([3, 5, 10, 1, 4, 55]). ' ' . 1 . '
');
print_r(smallestInteger([0]). ' ' . 0 . '
');