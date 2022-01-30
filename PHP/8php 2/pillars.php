<?php
/*
|--------------------------------------------------------------------------
| Pillars
|--------------------------------------------------------------------------
|
*/

function pillars($p, $d, $w) {
   return $p > 1 ? ($p - 1) * $d * 100 + ($p - 2) * $w : 0;
}


function pillars($n, $d, $w) {
   return ($n-1)*$d*100 + ($n-2)*$w*$n>1;
}


function pillars($numberOfPillars, $dist, $width) {
   return max(0, ($numberOfPillars-1)*($dist*100+$width)-$width);
}


function pillars($n, $dist, $width) {
   return --$n*$dist*100 + ($n ? --$n*$width:0);
}


print_r(pillars(1, 10, 10) . ' ' . 0 . '
');
print_r(pillars(2, 20, 25) . ' ' . 2000 . '
');
print_r(pillars(11, 15, 30) . ' ' . 15270 . '
');
print_r(pillars(4, 10, 20) . ' ' . 3040 . '
');