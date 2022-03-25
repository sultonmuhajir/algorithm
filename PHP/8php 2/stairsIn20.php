<?php
/*
|--------------------------------------------------------------------------
| How many stairs will Suzuki climb in 20 years?
|--------------------------------------------------------------------------
|
*/

function stairsIn20($arr) {
   $res = 0;
   foreach ($arr as $i) {
      $res += array_sum($i);
   }
   return 20 * $res;
}


function stairsIn20($arr) {
   return 20 * array_sum(array_merge(...$arr));
}


function stairsIn20($arr) {
   return 20 * array_reduce($arr, function($acc, $curr) {
     return $acc + array_sum($curr);
   }, 0);
}


function stairsIn20($a) {
   return array_sum(array_map('array_sum', $a)) * 20;
}