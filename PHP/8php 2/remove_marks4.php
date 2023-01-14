<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
|--------------------------------------------------------------------------
|
*/

function remove($s) {
   return str_replace("!", "", $s) . "!";
}


function remove(string $s): string {
   return sprintf('%s!', str_replace('!', '', $s)); 
}


function remove(string $s): string {
   return preg_replace("[!]", "", $s) . "!";
}


print_r(remove("Hi!") . " Hi!
");
print_r(remove("Hi!!!") . " Hi!
");
print_r(remove("!Hi") . " Hi!
");
print_r(remove("!Hi!") . " Hi!
");
print_r(remove("Hi! Hi!") . " Hi Hi!
");
print_r(remove("Hi") . " Hi!
");