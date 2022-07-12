<?php
/*
|--------------------------------------------------------------------------
| Gravity Flip
|--------------------------------------------------------------------------
|
*/

function flip(string $dir, array $arr): array {
   sort($arr);
   return $dir == 'R' ? $arr : array_reverse($arr);
}


function flip(string $dir, array $arr): array {
   return ["sort", "rsort"][$dir == "L"]($arr) ? $arr : [];
}


function flip(string $dir, array $arr): array {
   $dir === 'R' ? sort($arr): rsort($arr); 
   return $arr;
}


print_r(flip('R', [3, 2, 1, 2]));
print_r(flip('L', [1, 4, 5, 3, 5]));