<?php
/*
|--------------------------------------------------------------------------
| Function 3 - multiplying two numbers
|--------------------------------------------------------------------------
|
*/

function multiply($x, $y) {
   return $x * $y;
}


function multiply(...$n) {
   return array_product($n);
}


function multiply() {
   return array_product(func_get_args());
}


print_r(multiply(2,3) . ' ' . 6);