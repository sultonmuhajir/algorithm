<?php
/*
|--------------------------------------------------------------------------
| Reversed Words
|--------------------------------------------------------------------------
|
*/

function reverseWords($str) {
   return implode(' ', array_reverse(explode(' ', $str)));
}


function reverseWords($str) {
   $r = explode(" ", $str);
   $r = array_reverse($r);
   return implode(" ", $r);
}


function reverseWords($str) {
   $res = "";
   $temp = explode(" ", $str);
   for($i = count($temp) - 1; $i >= 0; $i--) {
     $res .= $temp[$i] . " ";
   }
   return trim($res);
}


print_r(reverseWords("hello world!"). " || world! hello
");
print_r(reverseWords("yoda doesn't speak like this"). " || this like speak doesn't yoda
");
print_r(reverseWords("foobar"). " || foobar
");