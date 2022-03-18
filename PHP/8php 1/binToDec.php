<?php
/*
|--------------------------------------------------------------------------
| Bin to Decimal
|--------------------------------------------------------------------------
|
*/

function binToDec($bin) {
   return bindec($bin);
}


function binToDec($bin) {
   return array_reduce(str_split($bin), function($acc, $elem) {return 2*$acc + $elem;}, 0);
}


function binToDec($bin) {
   return intval($bin, 2);
}


print_r(binToDec("10") . ' ' . 2 . '
');
print_r(binToDec("11") . ' ' . 3 . '
');
print_r(binToDec("101010") . ' ' . 42 . '
');