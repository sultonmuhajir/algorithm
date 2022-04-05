<?php
/*
|--------------------------------------------------------------------------
| Parse float
|--------------------------------------------------------------------------
|
*/

function parseFloat(string $s) {
   return floatval($s);
}


function parseFloat(string $s) {
   return preg_match("/\d/", $s) ? (float) $s : null;
}


function parseFloat( string $s ): float {
   return (float) $s;
}


function parseFloat(string $s) {
   return preg_match("@^[0-9].*@", $s) ? (float) $s : NULL;
}


print_r(parseFloat("1") . ' ' . 1.0 . '
');
print_r(parseFloat("a") . ' ' . null . '
');