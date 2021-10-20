<?php
/*
|--------------------------------------------------------------------------
| If you can't sleep, just count sheep!!
|--------------------------------------------------------------------------
|
*/


function countsheep($num){
   $res = "";
   for ($i=1; $i <= $num; $i++) { 
      $res .= "{$i} sheep...";
   }
   return $res;
}


function countsheep($num) {
   $glue = ' sheep...';
   return implode($glue, range(1, $num)) . $glue;
}


function countsheep($n) {
   return implode(array_map(function ($n) { return "$n sheep..."; }, range(1, $n)));
}


function countsheep($num){  
   return $num == 0 ? "" : countsheep($num - 1)."$num sheep...";
}


function countsheep($num){
   return implode('', array_map(function($n){
      return $n . ' sheep...';
   }, range(1, $num)));
}


print_r(countsheep(1) . " 1 sheep...
");
print_r(countsheep(2) . " 1 sheep...2 sheep...
");
print_r(countsheep(3) . " 1 sheep...2 sheep...3 sheep...
");