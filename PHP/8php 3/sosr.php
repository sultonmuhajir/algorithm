<?php
/*
|--------------------------------------------------------------------------
| To square(root) or not to square(root)
|--------------------------------------------------------------------------
|
*/

function squareOrSquareRoot($array) {
   return array_map(function($i) {
      return fmod(sqrt($i), 1) == 0 ? sqrt($i) : $i * $i;
   }, $array);
}


function squareOrSquareRoot(array $a): array {
   return array_map(function ($n) {return sqrt($n) == intval(sqrt($n)) ? sqrt($n) : $n ** 2;}, $a);
}


function squareOrSquareRoot($input){
   $res = [];
   for ($i = 0; $i < count($input); $i++) {
      $res [] = sqrt($input[$i]) === floor(sqrt($input[$i])) ? sqrt($input[$i]) : pow($input[$i],2);
   }
   return $res;
}


function squareOrSquareRoot($array) {
   return array_map(function ($a) { return preg_match("/\./", sqrt($a)) ? $a*$a : sqrt($a); }, $array);
}


print_r(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));