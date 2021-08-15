<?php
/*
|--------------------------------------------------------------------------
| Count of positives / sum of negatives
|--------------------------------------------------------------------------
|
*/

function countPositivesSumNegatives($input) {
   return $input ? [count(array_filter($input, function($i) { return $i > 0; })), array_sum(array_filter($input, function($j) { return $j < 0; }))] : [];
}


function countPositivesSumNegatives($input) {
   if(!empty($input)){
      $sum = 0;
      $cnt = 0;
      foreach($input as $key){
         ($key <= 0) ? $sum+=$key : $cnt++;        
      }
      return [$cnt,$sum];      
   }
   return [];      
}


function countPositivesSumNegatives($input): array {
   return empty($input) ? [] : [
      count(array_filter($input, function($i) {
         return $i > 0;
      })),
      array_sum(array_filter($input, function($i) {
         return $i < 0;
      }))
   ];
}


function countPositivesSumNegatives($input) {
   return count($input) ?
      array_reduce($input, function ($temp, $value) {
         $value > 0 ? $temp[0]++ : $temp[1] += $value;
         return $temp;
      }, [0, 0]) :
   [];
}


print_r(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
print_r(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
print_r(countPositivesSumNegatives(null));
print_r(countPositivesSumNegatives([]));