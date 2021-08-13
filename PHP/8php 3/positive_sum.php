<?php
/*
|--------------------------------------------------------------------------
| Sum of positive
|--------------------------------------------------------------------------
|
*/

function positive_sum($arr) {
   $filter = array_filter($arr, function($i) { return $i >= 0; });
   return count($filter) == 0 ? 0 : array_sum($filter);
}


function positive_sum($arr) {
   $sum = 0;
   foreach ($arr as $element) {
      $sum += $element > 0 ? $element : 0;
   }
   return $sum;
}


function positive_sum($a) {
   return array_sum(array_filter($a, function ($n) {return $n > 0;}));
}


function positive_sum($arr) {
   if (preg_replace('/(-\d.*)/','0',$arr)){
   $rpl = preg_replace('/(-\d.*)/','0',$arr);
   return array_sum($rpl);}else{
   return array_sum($arr);}
}


echo(positive_sum([1, 2, 3, 4, 5])), '
';
echo(positive_sum([1, -2, 3, 4, 5])), '
';
echo(positive_sum([])), '
';