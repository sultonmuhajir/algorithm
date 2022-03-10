<?php
/*
|--------------------------------------------------------------------------
| All Star Code Challenge #18
|--------------------------------------------------------------------------
|
*/

function strCount($str, $letter) {
   return count(array_filter(str_split($str), fn($i) => $i == $letter));
}


function strCount($str, $letter) {
   return substr_count($str, $letter);
}


function strCount($str, $letter) {
   str_replace($letter, $letter, $str, $count);
   return $count;
}


function strCount($str, $letter) {
   return count(explode($letter, $str))-1;
}


function strCount($str, $letter) {
   return preg_match_all("/[$letter]/", $str);
}


print_r(strCount('Hello', 'o'). ' ' . 1 . '
');
print_r(strCount('Hello', 'l'). ' ' . 2 . '
');
print_r(strCount('', 'z'). ' ' . 0 . '
');