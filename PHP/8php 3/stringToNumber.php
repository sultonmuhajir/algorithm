<?php
/*
|--------------------------------------------------------------------------
| Convert a String to a Number!
|--------------------------------------------------------------------------
|
*/

function stringToNumber($str) {
   return (int) $str;
}


function stringToNumber($str) {
   return $str/1;
}


function stringToNumber($str): int {
   return intval($str);
}


print_r(stringToNumber("1234"). ' ' . 1234 . '
');
print_r(stringToNumber("605"). ' ' . 605 . '
');
print_r(stringToNumber("1405"). ' ' . 1405 . '
');
print_r(stringToNumber("-7"). ' ' . -7 . '
');