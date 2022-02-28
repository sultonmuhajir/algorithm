<?php
/*
|--------------------------------------------------------------------------
| Filling an array (part 1)
|--------------------------------------------------------------------------
|
*/

function arr(int $n=0): array {
   $res = [];
   for ($i=0; $i < $n; $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function arr(int $n = 0): array {
   return $n ? range(0, $n - 1) : [];
}


function arr($n=0) {
   $res = [];
   $x = 0;
   while ($x < $n) array_push($res, $x++);
   return $res;
}


function arr(int $n = 0): array { 
  return empty($n) ? array() : range(0,$n-1);
}


print_r(arr(5));