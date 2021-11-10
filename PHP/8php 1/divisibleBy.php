<?php
/*
|--------------------------------------------------------------------------
| Find numbers which are divisible by given number
|--------------------------------------------------------------------------
|
*/

function divisibleBy($numbers, $divisor) {
   $res = [];
   for ($i=0; $i < count($numbers); $i++) { 
      if ($numbers[$i] % $divisor == 0) {
         array_push($res, $numbers[$i]);
      }
   }
   return $res;
}


function divisibleBy($numbers, $divisor) {
   return array_values(array_filter($numbers, function($n) use ($divisor){return $n % $divisor == 0;}));
}


function divisibleBy($numbers, $divisor) {
   return array_values(array_filter($numbers, function($e) use ($divisor) {
      return !($e % $divisor);
   }));
}


function divisibleBy($num, $divisor) {
   foreach($num as $value){
      if($value % $divisor == 0) $arr[] = $value;
   }
   return $arr;
}


print_r(divisibleBy([1, 2, 3, 4, 5, 6], 2));