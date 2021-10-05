<?php
/*
|--------------------------------------------------------------------------
| The Feast of Many Beasts
|--------------------------------------------------------------------------
|
*/

function feast($beast, $dish){
   return $beast[0] == $dish[0] && $beast[-1] == $dish[-1];
}


function feast($a, $b){
   return $a[0] == $b[0] && substr($a, -1) == substr($b, -1);
}


function feast($a, $b){
   return preg_replace('/(^.).+(.$)/',"$1$2",$a) == preg_replace('/(^.).+(.$)/',"$1$2",$b);
}


function feast($beast, $dish){
   $get = function ($str) {
      return substr($str, 0, 1) . substr($str, -1);
   };
   return $get($beast)  === $get($dish);
}


print(feast("great blue heron", "garlic naan"). ' ' . true . '
');
print(feast("chickadee", "chocolate cake"). ' ' . true . '
');
print(feast("brown bear", "bear claw"). ' ' . false . '
');