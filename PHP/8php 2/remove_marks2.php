<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #2: Remove all exclamation marks from the end of sentence
|--------------------------------------------------------------------------
|
*/

function remove($s) {
   $x = 0;
   $str = strrev($s);
   for ($i = 0; $i < strlen($s); $i++) {
      if ($str[$i] != "!") break;
      $x += 1;
   }
   return substr($s, 0, strlen($s)-$x);
}


function remove(string $s): string {
   return rtrim($s, '!');
}


function remove(string $s): string {
   return substr($s,-1) == '!' ? remove(substr($s, 0, -1)) : $s;
}


function remove($s){
   return preg_replace("/!+$/","",$s);
}


print_r(remove("Hi!") . " Hi
");
print_r(remove("Hi!!!") . " Hi
");
print_r(remove("Hi! Hi!") . " Hi! Hi
");