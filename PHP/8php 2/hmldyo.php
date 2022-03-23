<?php
/*
|--------------------------------------------------------------------------
| How many lightsabers do you own?
|--------------------------------------------------------------------------
|
*/

function howManyLightsabersDoYouOwn($name='') {
   return $name == 'Zach' ? 18 : 0;
}


function howManyLightsabersDoYouOwn($str = "") {
   return preg_match_all("/Zach/",$str) * 18;
}


function howManyLightsabersDoYouOwn() {
   $argc = func_get_args();
   return isset($argc[0]) && $argc[0] === 'Zach' ? 18 : 0;
}


print_r(howManyLightsabersDoYouOwn() . ' ' . 0 . '
');
print_r(howManyLightsabersDoYouOwn("Adam") . ' ' . 0 . '
');
print_r(howManyLightsabersDoYouOwn("Zach") . ' ' . 18 . '
');