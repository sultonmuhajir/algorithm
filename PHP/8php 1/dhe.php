<?php
/*
|--------------------------------------------------------------------------
| PHP Functions - Pass By Reference
|--------------------------------------------------------------------------
|
*/

function double(&$n) {
   $n *= 2;
}
function halve(&$n) {
   $n /= 2;
}
function enlarge(&$x, $n) {
   $x *= $n;
}


function double(&$a){$a*=2;}
function halve(&$a){$a/=2;}
function enlarge(&$a,$b){$a*=$b;}


function double(&$n) {
   enlarge($n, 2);
}
function halve(&$n) {
   enlarge($n, 0.5);
}
function enlarge(&$x, $n) {
   $x = $x * $n;
}