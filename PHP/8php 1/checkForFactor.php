<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Check for factor
|--------------------------------------------------------------------------
|
*/

function checkForFactor($base, $factor) {
   return $base % $factor == 0;
}


function checkForFactor($base, $factor) {
   return !($base % $factor);
}


function checkForFactor($base, $factor) {
   return ctype_digit(''.$base/$factor.'');
}


function checkForFactor($base, $factor) {
   return is_int($base/$factor);
}


print_r(checkForFactor(63, 7) . ' ' . true . '
');
print_r(checkForFactor(2450, 5) . ' ' . true . '
');
print_r(checkForFactor(653, 7) . ' ' . false . '
');
print_r(checkForFactor(2453, 5) . ' ' . false . '
');