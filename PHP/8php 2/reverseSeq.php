<?php
/*
|--------------------------------------------------------------------------
| Reversed sequence
|--------------------------------------------------------------------------
|
*/

function reverseSeq ($n) {
   $res = [];
   for ($i=1; $i <= $n; $i++) { 
      array_push($res, $i);
   }
   return array_reverse($res);
};


function reverseSeq ($n) {
   for ($i = $n; $i > 0; $i--) {
      $result[] = $i ;
   }
   return $result;
};


function reverseSeq ($n) {
   return range($n, 1);
};


function reverseSeq ($n) {
   while($n>=1) {
      $arr[] += $n--;
   }
   return $arr;
};


print_r(reverseSeq(5));