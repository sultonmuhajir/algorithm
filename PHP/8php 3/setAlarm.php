<?php
/*
|--------------------------------------------------------------------------
| L1: Set Alarm
|--------------------------------------------------------------------------
|
*/

function setAlarm(bool $employed, bool $vacation): bool {
   return $employed > $vacation;
}


function setAlarm(bool $employed, bool $vacation): bool {
   return $employed && !$vacation;
}


function setAlarm(bool $employed, bool $vacation): bool {
   return !(!$employed || $vacation);
}


function setAlarm(bool $employed, bool $vacation): bool {
   return (int)$employed - (int)$vacation === 1;
}


print_r(setAlarm(true, true) . false);
print_r(setAlarm(false, true) . false);
print_r(setAlarm(true, false) . true);