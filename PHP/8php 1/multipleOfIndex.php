<?php
/*
|--------------------------------------------------------------------------
| Multiple of index
|--------------------------------------------------------------------------
|
*/

function multipleOfIndex(array $arr) : array {
   return array_values(array_filter($arr, function($v, $ki) {
      return ($v == 0 && $ki == 0) || ($ki != 0 && $v % $ki == 0);
   }, ARRAY_FILTER_USE_BOTH));
}


function multipleOfIndex(array $arr): array {
   $res = [];
   foreach ($arr as $i => $item) {
      if ($item === 0 || ($i !== 0 && $item % $i == 0)) {
         $res[] = $item;
      }
   }
   return $res;
}


function multipleOfIndex(array $a) : array {
   return array_values(array_filter($a, fn($v, $i) => !$v || $i && !($v % $i), ARRAY_FILTER_USE_BOTH));
}


print_r(multipleOfIndex([22, -6, 32, 82, 9, 25]));
print_r(multipleOfIndex([68, -1, 1, -7, 10, 10]));