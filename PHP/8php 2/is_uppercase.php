<?php
/*
|--------------------------------------------------------------------------
| Is the string uppercase?
|--------------------------------------------------------------------------
|
*/

function is_uppercase($str) {
   return strtoupper($str) == $str;
}


function is_uppercase($str) {
   return !preg_match('/[a-z]/', $str);
}


function is_uppercase($str): bool {
   return preg_match('/^[^a-z]*$/', $str);
}


print_r(is_uppercase("c") . ' ' . False . '
');
print_r(is_uppercase("C") . ' ' . True . '
');