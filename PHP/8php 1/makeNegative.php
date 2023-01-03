<?php
/*
|--------------------------------------------------------------------------
| Return Negative
|--------------------------------------------------------------------------
|
*/

function makeNegative(float $num) : float {
   return $num > 0 ? -($num) : $num;
}


function makeNegative(float $num) : float {
   return -abs($num);
}


function makeNegative(float $num) : float {
   return min($num, -$num);
}


print_r(makeNegative(7). ' ' . -7 . '
');
print_r(makeNegative(-20). ' ' . -20 . '
');
print_r(makeNegative(0). ' ' . 0 . '
');
print_r(makeNegative(0.12). ' ' . -0.12 . '
');