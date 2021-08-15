<?php
/*
|--------------------------------------------------------------------------
| String repeat
|--------------------------------------------------------------------------
|
*/

function repeatStr($n, $str)
{
   return str_repeat($str, $n);
}


function repeatStr($n, $str) {
   $s = "";
   for ($i = 0; $i < $n; $i++) {
      $s .= $str;
   }
   return $s;
}


function repeatStr($n, $str)
{
   return implode('', array_fill(0, $n, $str));
}


function repeatStr($n, $str)
{
   $s = '';
   $i = 0;
   while ($i++<$n) {
      $s = $s .''.$str;
   } 
   return $s;
}


print_r(repeatStr(3, "*"). " ***
");
print_r(repeatStr(5, "#"). " #####
");
print_r(repeatStr(2, "ha "). " ha ha 
");