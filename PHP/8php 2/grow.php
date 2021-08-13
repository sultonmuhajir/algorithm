<?php
/*
|--------------------------------------------------------------------------
| Beginner - Reduce but Grow
|--------------------------------------------------------------------------
|
*/

function grow($a) {
   $res = 1;
   foreach ($a as $b) {
      $res *= $b;
   }
   return $res;
}


use function array_product as grow;


function grow($a) {
   return array_product($a);
}


function grow($a) {
   return array_reduce($a, function($x, $s){return $x*$s;}, 1);
}


echo(grow([1, 2, 3])),'
';
echo(grow([4, 1, 1, 1, 4])),'
';
echo(grow([2, 2, 2, 2, 2, 2])),'
';