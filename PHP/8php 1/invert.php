<?php
/*
|--------------------------------------------------------------------------
| Invert values
|--------------------------------------------------------------------------
|
*/

function invert(array $a): array {
   return array_map(function($i) { return -$i; }, $a);
}


function invert(array $a): array {
   $res = [];
   foreach ($a as $value) {
      $res [] = $value * -1;
   }
   return $res;
}


function invert(array $a): array {
   for($i = 0; $i < count($a); $i++ ){
      $a[$i] = -$a[$i];
   }
   return $a;
}


function invert(array $a): array {
   foreach($a as $key=>&$val)
      $val = $val*(-1);
   return $a;
}


print_r(invert([1, 2, 3, 4, 5]));
print_r(invert([1, -2, 3, -4, 5]));
print_r(invert([]));
print_r(invert([0]));