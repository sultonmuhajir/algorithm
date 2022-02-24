<?php
/*
|--------------------------------------------------------------------------
| Lario and Muigi Pipe Problem
|--------------------------------------------------------------------------
|
*/

function pipeFix($numbers) {
   $res = [];
   for ($i=min($numbers); $i <= max($numbers); $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function pipeFix($numbers) {
   return range(min($numbers), max($numbers));
}


function pipeFix($numbers) {
   return range($numbers[0], $numbers[count($numbers) - 1]);
}


function pipeFix($numbers) {
   return range(current($numbers), end($numbers));
}


print_r(pipeFix([1, 2, 3, 5, 6, 8, 9]));
print_r(pipeFix([1, 2, 3, 12]));
print_r(pipeFix([6, 9]));
print_r(pipeFix([-1, 4]));
print_r(pipeFix([1, 2, 3]));