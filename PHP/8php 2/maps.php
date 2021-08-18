<?php
/*
|--------------------------------------------------------------------------
| Beginner - Lost Without a Map
|--------------------------------------------------------------------------
|
*/

function maps($x)
{
   return array_map(function($i) { return $i * 2; }, $x);
}


function maps($x)
{
   $numbers = [];
   foreach ($x as $number) {
      $numbers[] = $number * 2;
   }
   return $numbers;
}


function maps($x)
{
   foreach ($x as $data) {
      $hasil[] = $data + $data;
   } return $hasil;
}


print_r(maps([1, 2, 3]));
print_r(maps([4, 1, 1, 1, 4]));
print_r(maps([2, 2, 2, 2, 2, 2]));