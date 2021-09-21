<?php
/*
|--------------------------------------------------------------------------
| You only need one - Beginner
|--------------------------------------------------------------------------
|
*/

function solution($a, $x) {
   return in_array($x, $a);
}


function solution($a, $x) {
   return array_search($x, $a)!==false ? true : false;
}


function solution($a, $x = 0) {
   return strpos(implode($a), is_array($x) ? (empty($x) ? 0 : implode($x)) : $x) !== false ? true : false;
}


function solution($a, $x) {
   foreach ($a as $b){
      if($b==$x){
         return true;
      }
   }
   return false;
}


function solution($a, $x) {
   return is_int(array_search($x, $a));
}


print_r(solution([66, 101], 66). ' ' . true . '
');
print_r(solution([101, 45, 75, 105, 99, 107], 107). ' ' . true . '
');
print_r(solution(['t', 'e', 's', 't'], 'e'). ' ' . true . '
');
print_r(solution(['what', 'a', 'great', 'kata'], 'kat'). ' ' . false) . '
'; 