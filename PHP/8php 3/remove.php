<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #1: Remove an exclamation mark from the end of string
|--------------------------------------------------------------------------
|
*/

function remove(string $s): string {
   return preg_replace('/!$/', '', $s);
}


function remove(string $s): string {
   return ($s[strlen($s) - 1]) == '!' ? substr($s, 0, -1) : $s;  
}


function remove(string $s): string {
   return substr($s,-1)=='!'?substr($s,0,-1):$s;
}


function remove(string $s): string {
   return str_ends_with($s, "!") ? substr($s, 0, -1) : $s;
}


print_r(remove("Hi!") . " Hi
");
print_r(remove("Hi!!!") . " Hi!!
");
print_r(remove("!Hi") . " !Hi
");