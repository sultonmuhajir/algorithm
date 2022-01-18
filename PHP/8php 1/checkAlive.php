<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - If/else syntax debug
|--------------------------------------------------------------------------
|
*/

function checkAlive($health) {
   return $health > 0;
}


function checkAlive($h) {
   return !!max($h, 0);
}


function checkAlive($h) {
   return $h > 0 ? true : false;
}


function checkAlive($health) {
   if ($health > 0) {
      return true;
   } else {
      return false;
   }
}


print_r(checkAlive(5) . ' ' . true . '
');
print_r(checkAlive(0) . ' ' . false . '
');