<?php
/*
|--------------------------------------------------------------------------
| Super Duper Easy
|--------------------------------------------------------------------------
|
*/

function problem($x){
   return gettype($x) == 'string' ? 'Error' : $x * 50 + 6;
}


function problem($x){
   return is_string($x) ? 'Error' : $x * 50 + 6;
}


function problem($x){
   return preg_match("/[a-zA-Z]/", $x) ? 'Error' : ($x*50)+6;
}


print_r(problem("hello") . " Error
");
print_r(problem(1) . ' ' . 56 . '
');