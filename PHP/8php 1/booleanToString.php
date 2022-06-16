<?php
/*
|--------------------------------------------------------------------------
| Convert a Boolean to a String
|--------------------------------------------------------------------------
|
*/

function booleanToString($b) {
   return $b == true ? "true" : "false";
}


function booleanToString($b) {
   return $b ? "true" : "false";
}


function booleanToString($b) {
   return $b == false ? "false" : "true";
}


print_r(booleanToString(true) . ' ' . 'true' . '
');
print_r(booleanToString(false) . ' ' . 'false' . '
');