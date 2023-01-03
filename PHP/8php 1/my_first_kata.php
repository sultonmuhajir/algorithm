<?php
/*
|--------------------------------------------------------------------------
| Fix the Bugs (Syntax) - My First Kata
|--------------------------------------------------------------------------
|
*/

function my_first_kata($a, $b) {
   return is_numeric($a) && is_numeric($b) ? $a % $b + $b % $a : false;
}


function my_first_kata($a, $b) {
   if ( (! is_int($a) && ! is_float($a)) || (! is_int($b) && ! is_float($b)) ) return false;
   return $b % $a + $a % $b;
}


function my_first_kata($a,$b) {
   return (is_string($a)||is_string($b))? false : $a%$b + $b%$a;
}


print_r(my_first_kata(3.0, 5) . ' ' . (3 % 5 + 5 % 3) . '
');
print_r(my_first_kata("hello", 3) . ' ' . false . '
');
print_r(my_first_kata(67, "bye") . ' ' . false . '
');
print_r(my_first_kata(true, true) . ' ' . false . '
');
print_r(my_first_kata(314, 107) . ' ' . (107 % 314 + 314 % 107) . '
');
print_r(my_first_kata(19483, 9) . ' ' . (9 % 19483 + 19483 % 9) . '
');