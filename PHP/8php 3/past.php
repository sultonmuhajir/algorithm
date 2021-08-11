<?php
/*
|--------------------------------------------------------------------------
| Beginner Series #2 Clock
|--------------------------------------------------------------------------
|
*/

function past($h, $m, $s) {
   return (($h * 3600000) + ($m * 60000) + ($s * 1000));
}


function past($h, $m, $s) {
   return (($h * 60 * 60) + $m * 60 + $s) * 1000;
}


function past($h, $m, $s) {
   return strtotime("$h:$m:$s", 0) * 1000;
}


function past($h, $m, $s) {
   return ($s + ($m + $h * 60) * 60) * 1000;
}


echo(past(0, 1, 1)), '
';
echo(past(1, 1, 1)), '
';
echo(past(0, 0, 0)), '
';