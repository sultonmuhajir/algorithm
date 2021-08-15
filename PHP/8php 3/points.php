<?php
/*
|--------------------------------------------------------------------------
| Total amount of points
|--------------------------------------------------------------------------
|
*/

function points($games) {
   $res = 0;
   foreach ($games as $game) {
      $score = explode(':', $game);
      $res += ($score[0] > $score[1] ? 3 : ($score[0] == $score[1] ? 1 : 0));
   }
   return $res;
}


function points( array $games ): int {
   return array_sum( array_map( function( $g ) { return $g[0] != $g[strlen($g)-1] ? $g[0] > $g[strlen($g)-1] ? 3 : 0 : 1; }, $games ) );
}


function points(array $games): int {
   return array_sum(array_map(function($e) {
      list($x, $y) = explode(':', $e);
      return $x > $y ? 3 : ($x < $y ? 0 : 1);
   }, $games));
}


print_r(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]). ' ' . 30 . '
');
print_r(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]). ' ' . 10 . '
');