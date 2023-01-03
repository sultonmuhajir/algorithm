<?php
/*
|--------------------------------------------------------------------------
| Sort and Star
|--------------------------------------------------------------------------
|
*/

function twoSort($s) {
   sort($s);
   return implode('***', str_split($s[0]));
}


function twoSort( array $s ) : string {
   return implode( '***', str_split( min( $s ) ) );
}


function twoSort($s) {
   sort($s);
   return implode("***", str_split(reset($s)));
}


function twoSort($s) {
   sort($s);
   return preg_replace('/^\*+/', '', array_reduce(str_split($s[0]), function($a, $c){  $a .= '***' . $c; return $a;  })); 
}


print_r(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]). ' b***i***t***c***o***i***n
');
print_r(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]). ' a***r***
e');