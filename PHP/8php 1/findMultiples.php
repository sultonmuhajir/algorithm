<?php
/*
|--------------------------------------------------------------------------
| Find Multiples of a Number
|--------------------------------------------------------------------------
|
*/

function findMultiples($integer, $limit) {
   $res = [];
   for ($i = $integer; $i <= $limit; $i += $integer) $res[] = $i;
   return $res;
}


function findMultiples(int $integer, int $limit): array {
   return range($integer, $limit - ($limit % $integer) , $integer);
}


function findMultiples(int $integer, int $limit): array{
   $arr = [];
   $num = $integer;
   while($integer <= $limit){
      $arr[] = $integer;
      $integer += $num;
   }
   return $arr;
}


print_r(findMultiples(5, 25));
print_r(findMultiples(1, 2));