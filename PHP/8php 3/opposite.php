<?php
/*
|--------------------------------------------------------------------------
| Opposite number
|--------------------------------------------------------------------------
|
*/

function opposite($n) {
   return -$n;
}


function opposite($n) {
   return $n *(-1);
}


function opposite($n) {
   return $n-1^-1>>63;
}


print_r(opposite(5). -1);