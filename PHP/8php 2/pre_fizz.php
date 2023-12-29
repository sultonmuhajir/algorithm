<?php
/*
|--------------------------------------------------------------------------
| Pre-FizzBuzz Workout #1
|--------------------------------------------------------------------------
|
*/

function pre_fizz($n) {
   $res = [];
   for ($i=1; $i <= $n; $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function pre_fizz(int $n): array {
   return range(1, $n);
}


function pre_fizz($n) {
   $arr = [];
   $start = 0;
   while($start != $n) {
      $start = $start+1;
      array_push($arr,$start);
   }
   return $arr;
}


print_r(pre_fizz(1));
print_r(pre_fizz(2));
print_r(pre_fizz(3));
print_r(pre_fizz(4));
print_r(pre_fizz(5));