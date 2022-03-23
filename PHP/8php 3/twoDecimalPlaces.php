<?php
/*
|--------------------------------------------------------------------------
| Formatting decimal places #0
|--------------------------------------------------------------------------
|
*/

function twoDecimalPlaces($n) {
   return round($n, 2);
}


function twoDecimalPlaces(float $n): float {
   return number_format($n, 2, '.', '');
}


function twoDecimalPlaces($n) {
   return +sprintf("%.2f", $n);
}


function twoDecimalPlaces($n) {
   return intval(round($n * 100)) / 100;
}


print_r(twoDecimalPlaces(4.659725356) . ' ' . 4.66 . '
');
print_r(twoDecimalPlaces(173735326.3783732637948948) . ' ' . 173735326.38 . '
');
print_r(twoDecimalPlaces(4.653725356) . ' ' . 4.65 . '
');