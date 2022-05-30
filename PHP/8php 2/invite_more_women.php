<?php
/*
|--------------------------------------------------------------------------
| Simple Fun #152: Invite More Women?
|--------------------------------------------------------------------------
|
*/

function invite_more_women(array $a): bool {
   return array_sum($a) > 0;
}


function invite_more_women(array $a): bool {
   return (array_count_values($a)[1] ?? 0) - (array_count_values($a)[-1] ?? 0) > 0;
}


function invite_more_women(array $a): bool {
   return array_reduce($a, function($a,$b) {return $a + $b; }) > 0;
}


print_r(invite_more_women([1, -1, 1]) . ' ' . true . ' 
');
print_r(invite_more_women([1, 1, 1]) . ' ' . true . ' 
');
print_r(invite_more_women([-1, -1, -1]) . ' ' . false . ' 
');
print_r(invite_more_women([1, -1]) . ' ' . false . ' 
');