<?php
/*
|--------------------------------------------------------------------------
| Difference of Volumes of Cuboids
|--------------------------------------------------------------------------
|
*/

function findDifference($a, $b) {
   return abs(array_product($a) - array_product($b));
}


function findDifference($a, $b) {
   $res = $a[0]*$a[1]*$a[2] - $b[0]*$b[1]*$b[2];
   return $res < 0 ? $res*-1 : $res;
}


function findDifference($a, $b) {
   $x = 1;
   $y = 1;
   foreach($a as $i) {
      $x *= $i;
   }
   foreach($b as $j) {
      $y *= $j;
   }   
   return abs($x - $y);
}


function findDifference($a, $b) {
   $c = 1;
   $d = 1;
   for ($i = 0; $i < 3; $i++) {
      $c *= $a[$i];
      $d *= $b[$i];
   }
   return abs($c - $d);
}


print_r(findDifference([3, 2, 5], [1, 4, 4]) . ' ' . 14 . '
');
print_r(findDifference([9, 7, 2], [5, 2, 2]) . ' ' . 106 . '
');