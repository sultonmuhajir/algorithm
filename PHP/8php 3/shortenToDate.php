<?php
/*
|--------------------------------------------------------------------------
| Remove the time
|--------------------------------------------------------------------------
|
*/

function shortenToDate($longDate) {
   return explode(',', $longDate)[0];
}


function shortenToDate($str) {
   return preg_replace('/,.*$/', '', $str);
}


function shortenToDate($longDate) {
   return substr($longDate, 0, strpos($longDate, ','));
}


function shortenToDate($d) {
   return preg_replace('/\, \d+(a|p)m/', '', $d);
}


print_r(shortenToDate("Friday May 2, 9am") . " Friday May 2
");
print_r(shortenToDate("Tuesday January 29, 10pm") . " Tuesday January 29
");
print_r(shortenToDate("Monday December 25, 10pm") . " Monday December 25
");