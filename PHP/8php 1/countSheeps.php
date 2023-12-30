<?php
/*
|--------------------------------------------------------------------------
| Counting sheep...
|--------------------------------------------------------------------------
|
*/

function countSheep($arr) {
   return count(array_filter($arr, fn($item) => $item === true));
}


function countSheep(array $arr): int {
   return array_sum($arr);
}


function countSheep($arr) {
   $sum = 0;
   foreach ($arr as $a) {
      if ($a) $sum++;
   }
   return $sum;
}