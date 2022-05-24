<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #1: Seats in Theater
|--------------------------------------------------------------------------
|
*/

function seatsInTheater($nCols, $nRows, $col, $row) {
   return ($nCols - $col + 1) * ($nRows - $row);
}


function seatsInTheater($nCols, $nRows, $col, $row) {
   return ($nRows - $row) * (++$nCols - $col);
}


function seatsInTheater($nCols, $nRows, $col, $row) {
   return ($nCols - ($col - 1)) * ($nRows - $row);
}


print_r(seatsInTheater(16, 11, 5, 3) . ' ' . 96 . '
');
print_r(seatsInTheater(1, 1, 1, 1) . ' ' . 0 . '
');
print_r(seatsInTheater(13, 6, 8, 3) . ' ' . 18 . '
');
print_r(seatsInTheater(60, 100, 60, 1) . ' ' . 99 . '
');
print_r(seatsInTheater(1000, 1000, 1000, 1000) . ' ' . 0 . '
');