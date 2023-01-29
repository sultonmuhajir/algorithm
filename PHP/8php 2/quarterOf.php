<?php
/*
|--------------------------------------------------------------------------
| Quarter of the year
|--------------------------------------------------------------------------
|
*/

function quarterOf($month) {
   return $month <= 3 ? 1 : ($month <= 6 ? 2 : ($month <= 9 ? 3 : 4));
}


function quarterOf($month) {
   return ceil($month / 3);
}


function quarterOf($month) {
   return floor(($month - 1) / 3) + 1;
}


function quarterOf($month) {
	return (($month + 2) / 3) | 0;
}


print_r(quarterOf(3) . ' ' . 1 . '
');
print_r(quarterOf(8) . ' ' . 3 . '
');
print_r(quarterOf(11) . ' ' . 4 . '
');