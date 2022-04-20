<?php
/*
|--------------------------------------------------------------------------
| Count by X
|--------------------------------------------------------------------------
|
*/

function countBy($x, $n) {
   $res = [];
   for ($i=1; $i <= $n; $i++) { 
      array_push($res, $x * $i);
   }
   return $res;
}


function countBy($x, $n) {
   return range($x, $n * $x, $x);
}


function countBy($x, $n) {
   $res = []; $i = 1;
   while ($i <= $n){
      $res[] = $x * $i;
      $i++;
   }
   return $res;
}


function countBy(int $x, int $n): array {
   return array_map(
      function(int $num) use (&$x): int {
         return $num * $x;
      },
      range(1, $n)
   );
}


print_r(countBy(1, 10));
print_r(countBy(2, 5));