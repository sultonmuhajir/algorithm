<?php
/*
|--------------------------------------------------------------------------
| How good are you really?
|--------------------------------------------------------------------------
|
*/

function betterThanAverage($classPoints, $yourPoints) {
   return $yourPoints > (array_sum($classPoints) + $yourPoints) / (count($classPoints) + 1);
}


function betterThanAverage($classPoints, $yourPoints) {
   return $yourPoints * count($classPoints) > array_sum($classPoints);
}


function betterThanAverage($classPoints, $yourPoints) {
   $sum = 0;
   foreach ($classPoints as $value) 
      $sum+=$value;
   return ($yourPoints>$sum/=sizeof($classPoints));
}


function betterThanAverage($classPoints, $yourPoints) {
   $avg = array_sum($classPoints) / sizeof($classPoints);
   return $yourPoints > $avg;
}


print_r(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75) . ' ' . true); 