<?php
/*
|--------------------------------------------------------------------------
| Will there be enough space?
|--------------------------------------------------------------------------
|
*/

function enough($cap, $on, $wait) {
   return max($wait - ($cap - $on), 0);
}


function enough($cap, $on, $wait) { 
   return $cap >= ($on + $wait) ? 0 : ($wait - ($cap - $on));
}


function enough(int $cap, int $on, int $wait): int {
   return max($wait + $on - $cap, 0);
}


print_r(enough(10, 5, 5) . ' ' . 0 . ' 
');
print_r(enough(100, 60, 50) . ' ' . 10 . ' 
');
print_r(enough(20, 5, 5) . ' ' . 0 . ' 
');