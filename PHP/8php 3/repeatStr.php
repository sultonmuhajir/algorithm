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


echo(repeatStr(3, "*")),'
';
echo(repeatStr(2, "@")),'
';
echo(repeatStr(1, "!")),'
';