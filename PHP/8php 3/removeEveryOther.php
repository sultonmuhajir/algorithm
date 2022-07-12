<?php
/*
|--------------------------------------------------------------------------
| Removing Elements
|--------------------------------------------------------------------------
|
*/

function removeEveryOther($array) {
   return array_filter($array, function($i) {
      return !($i % 2);
   }, ARRAY_FILTER_USE_KEY);
}


function removeEveryOther($array) {
   return array_filter(array_map(function ($value, $key) {
      return $key % 2 === 0 ? $value : null;
   }, $array, array_keys($array)));
}


function removeEveryOther($array) {
   return array_filter( $array, function ( $el, $i ) {
      return ! ( $i > 0 and $i%2 );
   }, ARRAY_FILTER_USE_BOTH  );
}


function removeEveryOther(array $arr): array {
   for ($i = 0; $i < count($arr); $i += 2)
      $res[$i] = $arr[$i];
   return $res;
}


function removeEveryOther($array) {
   foreach($array as $k => $v) if($k&1) unset($array[$k]);
   return $array;
}


print_r(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
print_r(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));