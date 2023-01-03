<?php
/*
|--------------------------------------------------------------------------
| Count the Monkeys!
|--------------------------------------------------------------------------
|
*/

function monkeyCount($n) {
   $res = [];
   for ($i=1; $i <= $n; $i++) { 
      array_push($res, $i);
   }
   return $res;
}


function monkeyCount($n) {
   return range(1, $n);
}


function monkeyCount($n) {
   $counter = [];
   while ($n > 0){
      $counter[] = $n;
      $n--;
   }
   return array_reverse($counter);
}


function monkeyCount($n) {
   return array_fill(1, $n,range(1, $n))[1];
}


print_r(monkeyCount(5));
print_r(monkeyCount(3));