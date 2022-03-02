<?php
/*
|--------------------------------------------------------------------------
| Beginner Series #2 Clock
|--------------------------------------------------------------------------
|
*/

function past($h, $m, $s) {
   return (($h * 3600000) + ($m * 60000) + ($s * 1000));
}


function past($h, $m, $s) {
   return (($h * 60 * 60) + $m * 60 + $s) * 1000;
}


function past($h, $m, $s) {
   return strtotime("$h:$m:$s", 0) * 1000;
}


function past($h, $m, $s) {
   return ($s + ($m + $h * 60) * 60) * 1000;
}


print_r(past(0, 1, 1). ' ' . 61000 . '
');
print_r(past(1, 1, 1). ' ' . 3661000 . '
');
print_r(past(0, 0, 0). ' ' . 0 . '
');
print_r(past(1, 0, 1). ' ' . 3601000 . '
');
print_r(past(1, 0, 0). ' ' . 3600000 . '
');