<?php
/*
|--------------------------------------------------------------------------
| My head is at the wrong end!
|--------------------------------------------------------------------------
|
*/

function fixTheMeerkat($arr) {
   return array_reverse($arr);
}


function fixTheMeerkat(array $arr): array {
   return [$arr[2], $arr[1], $arr[0]];
}


function fixTheMeerkat($arr) {
   krsort($arr);
   return explode(',', implode(',', $arr));
}


function fixTheMeerkat($arr) {
   $res = [];
   for ($i = count($arr) -1; $i >= 0; $i--) {
      $res[] = $arr[$i];
   }
   return $res;
}


print_r(fixTheMeerkat(["tail", "body", "head"]));