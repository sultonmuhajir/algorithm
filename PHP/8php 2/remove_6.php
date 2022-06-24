<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right
|--------------------------------------------------------------------------
|
*/

function remove(string $s, int $n): string {
   $res = '';
   for ($i = 0; $i < strlen($s); $i++) {
      $s[$i] == '!' && $n > 0 ? $n -= 1 : $res .= $s[$i];
   }
   return $res;
}


function remove(string $s, int $n): string {
   return preg_replace('/!/', "", $s, $n);
}


function remove(string $s, int $n): string {
   return implode("", explode("!", $s, $n+1));
}


function remove(string $s, int $n): string {
   return preg_filter("/\!/", "", $s, $n);
}


print_r(remove("!!!Hi !!hi!!! !hi", 1) . " !!Hi !!hi!!! !hi
");
print_r(remove("!!!Hi !!hi!!! !hi", 3) . " Hi !!hi!!! !hi
");
print_r(remove("!!!Hi !!hi!!! !hi", 5) . " Hi hi!!! !hi
");
print_r(remove("!!!Hi !!hi!!! !hi", 100) . " Hi hi hi
");