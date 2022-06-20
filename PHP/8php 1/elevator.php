<?php
/*
|--------------------------------------------------------------------------
| Closest elevator
|--------------------------------------------------------------------------
|
*/

function elevator($left, $right, $call) {
   return abs($call-$left) < abs($call-$right) ? 'left' : 'right';
}


function elevator($left, $right, $call) {
   $pattern = "/^[012]+$/";
   if (!preg_match($pattern, $left) or !preg_match($pattern, $right) or !preg_match($pattern, $call)) {
      return;
   }
   return abs($left - $call) < abs($right - $call)? 'left' : 'right';
}


function elevator($left, $right, $call): string {
   return abs($right - $call) <= abs($left - $call) ? 'right' : 'left';
}


print_r(elevator(0, 1, 0) . ' left
');
print_r(elevator(0, 1, 1) . ' right
');
print_r(elevator(0, 1, 2) . ' right
');
print_r(elevator(0, 0, 0) . ' right
');
print_r(elevator(0, 2, 1) . ' right
');