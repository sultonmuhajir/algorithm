<?php
/*
|--------------------------------------------------------------------------
| Sum Arrays
|--------------------------------------------------------------------------
|
*/

function sum($a) {
   return array_sum($a);
}


function sum(array $a): float {
   return array_reduce($a, function($b,$c){return $b+$c;},0);
}


function sum($a) {
   $result = 0;
   foreach($a as $_a)
      $result += $_a;
   return $result;
}


function sum(array $a): float {
   $i = 0;
   $sum = 0;
   while($i < count($a)){
      $sum += $a[$i];
      $i++;
   }
   return $sum;
}


print_r(sum([]). ' ' . 0 . '
');
print_r(sum([1, 5.2, 4, 0, -1]). ' ' . 9.2 . '
');