<?php
/*
|--------------------------------------------------------------------------
| Is your period late?
|--------------------------------------------------------------------------
|
*/

function periodIsLate($last, $today, $cycleLength) {
   return ($today->diff($last)->days > $cycleLength);
}


function periodIsLate($last, $today, $cycleLength) {
   return ($today->getTimestamp() - $last->getTimestamp()) / (60 * 60 * 24) > $cycleLength;
}


function periodIsLate($last, $today, $cycleLength) {
   return $last->add(new DateInterval("P{$cycleLength}D")) < $today;
}