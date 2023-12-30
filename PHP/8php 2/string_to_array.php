<?php
/*
|--------------------------------------------------------------------------
| Convert a string to an array
|--------------------------------------------------------------------------
|
*/

function string_to_array($s){
   return explode(' ', $s);
}


function string_to_array($s){
   $array = [];
   $word = "";
   for ($x = 0; $x < strlen($s); $x += 1) {
      if ($s[$x] != " ") {
         $word .= $s[$x];    
      } else {
         $array[] = $word;
         $word = "";
      }
   }
   $array[] = $word;
   return $array;
}


function string_to_array($s){
   return preg_split('/ /', $s);
}


print_r(string_to_array("Robin Singh"));