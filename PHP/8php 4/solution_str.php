<?php
/*
|--------------------------------------------------------------------------
| Reversed Strings
|--------------------------------------------------------------------------
|
*/

function solution($str) {
   return implode('', array_reverse(str_split($str)));
}


function solution($str) {
   return strrev($str);
}


function solution($str) {
   $rev = '';
   $strlen = strlen($str);
   for( $i = $strlen; $i >= 0; $i-- ) {
      $rev .=  $str[$i];
   }    
   return $rev;
}


print_r(solution('world'). ' dlrow
');
print_r(solution('hello'). ' olleh
');
print_r(solution(''). ' 
');
print_r(solution('h'). ' h
');