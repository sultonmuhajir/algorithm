<?php
/*
|--------------------------------------------------------------------------
| Remove First and Last Character
|--------------------------------------------------------------------------
|
*/

function remove_char(string $s): string {
   return substr($s, 1, -1);
}


function remove_char(string $s) : string
{
   $x = str_split($s);
   array_pop($x);
   array_shift($x);
   $imp = implode("", $x);
   return $imp;
}


function remove_char(string $s): string {
   return substr($s, 1, strlen($s) - 2);
}


function remove_char(string $s): string {
   $tmp = "";
   for($i = 0; $i < strlen($s); $i++) {
      if($i != 0 && $i != strlen($s) - 1) {
         $tmp.=$s[$i];
      }
   }
   return $tmp;
}


echo(remove_char('eloquent')),'
';
echo(remove_char('country')),'
';
echo(remove_char('person')),'
';
echo(remove_char('place')),'
';