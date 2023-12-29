<?php
/*
|--------------------------------------------------------------------------
| Draw stairs
|--------------------------------------------------------------------------
|
*/

function draw_stairs($n) {
   $res = [];
   for ($i = 0; $i < $n; $i++) {
      $res[] = str_repeat(" ", $i) . "I";
   }
   return implode("\n", $res);
}


function draw_stairs($n){
   $str = '';
   for($i = 1;$i<$n;$i++){
      $str = $str . "I\n".str_repeat(' ',$i);
   }
   return($str."I");
}


function draw_stairs($n){
   $result = '';
   for ($i = 0; $i < $n; $i++) {
      $result .= str_repeat(' ', $i);
      $result .= 'I' . PHP_EOL;
   }
   return substr($result, 0, -1);
}


print_r(draw_stairs(1));
print_r(draw_stairs(3));
print_r(draw_stairs(5));