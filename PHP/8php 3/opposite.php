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


echo(opposite(1)), '
';
echo(opposite(14)), '
';
echo(opposite(-34)), '
';