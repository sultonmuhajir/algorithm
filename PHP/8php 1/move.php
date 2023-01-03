<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Terminal game move function
|--------------------------------------------------------------------------
|
*/

function move($pos, $roll) {
   return $pos + $roll * 2;
}


function move($_, $__) {
   return $__ + $_ + $__;
}


function move($pos, $roll) {
   return $pos + ($roll << 1);
}


print_r(move(0, 4) . ' ' . 8 . '
');
print_r(move(3, 6) . ' ' . 15 . '
');
print_r(move(2, 5) . ' ' . 12 . '
');