<?php
/*
|--------------------------------------------------------------------------
| What is between?
|--------------------------------------------------------------------------
|
*/

function between(int $a, int $b): array {
   return range($a, $b);
}


function between(int $a, int $b): array {
   $res = [];
   for ($i = $a; $i <= $b; $i++) {
      $res[] += $i;
   }
   return $res;
}


function between(int $a, int $b): array {
   $arr = [];
   for(; $a<=$b; $a++) array_push($arr, $a);
   return $arr;
}


print_r(between(1, 4));
print_r(between(-2, 2));