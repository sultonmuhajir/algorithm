<?php
/*
|--------------------------------------------------------------------------
| The Wide-Mouthed frog!
|--------------------------------------------------------------------------
|
*/

function mouth_size($animal) {
   return strtolower($animal) == "alligator" ? "small" : "wide";
}


function mouth_size($animal) {
   return preg_match('/^alligator$/i', $animal) ? 'small':'wide';
}


function mouth_size($animal) {
   return !strcasecmp($animal, 'alligator') ? 'small' : 'wide';
}


function mouth_size($animal) {
   return preg_match("@alligator@i", $animal) ? 'small' : 'wide';
}


print_r(mouth_size("toucan") . " wide
");
print_r(mouth_size("ant bear") . " wide
");
print_r(mouth_size("alligator") . " small
");