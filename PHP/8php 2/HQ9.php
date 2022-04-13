<?php
/*
|--------------------------------------------------------------------------
| 8kyu interpreters: HQ9+
|--------------------------------------------------------------------------
|
*/

function HQ9($code) {
   switch($code) {
      case 'H': return 'Hello World!';
      case 'Q': return $code;
      case '9':
         $str = '';
         for($i = 99; $i > 0; $i--) {
            $bottles = $i > 1 ? 'bottles' : 'bottle';
            $str .= $i .' ' .$bottles .' of beer on the wall, ' .$i .' ' .$bottles .' of beer.\n';
            $left = $i > 1 ? $i-1 : 'no more';
            $bottles = $i == 2 ? 'bottle' : 'bottles';
            $str .= 'Take one down and pass it around, ' .$left .' ' .$bottles .' of beer on the wall.\n';
         }
         
         $str .= 'No more bottles of beer on the wall, no more bottles of beer.\n';
      return $str .'Go to the store and buy some more, 99 bottles of beer on the wall.';
   }
}


function HQ9($code) {
   if ($code == 'H') return 'Hello World!';
   if ($code == 'Q') return 'Q';
   if ($code != '9') return null;
   $result = '';
   for ($i = 99; $i > 2; $i--) {
      $result .= sprintf(
         '%d bottles of beer on the wall, %d bottles of beer.\nTake one down and pass it around, %d bottles of beer on the wall.\n',
         $i, $i, $i - 1
      );
   }
   return $result . '2 bottles of beer on the wall, 2 bottles of beer.\n'
      . 'Take one down and pass it around, 1 bottle of beer on the wall.\n'
      . '1 bottle of beer on the wall, 1 bottle of beer.\n'
      . 'Take one down and pass it around, no more bottles of beer on the wall.\n'
      . 'No more bottles of beer on the wall, no more bottles of beer.\n'
      . 'Go to the store and buy some more, 99 bottles of beer on the wall.';
}


print_r(HQ9('H
'));
print_r(HQ9('Q
'));
print_r(HQ9('9
'));
print_r(HQ9('X
'));