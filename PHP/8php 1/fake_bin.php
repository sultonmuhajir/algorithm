<?php
/*
|--------------------------------------------------------------------------
| Fake Binary
|--------------------------------------------------------------------------
|
*/

function fake_bin(string $s): string {
   $res = '';
   for ($i=0; $i < strlen($s); $i++) { 
      $res .= ((int)$s[$i]) < 5 ? "0" : "1";
   }
   return $res;
}


function fake_bin(string $s): string {
   return strtr($s, '0123456789', '0000011111');
}


function fake_bin(string $s): string {
   return preg_replace(['/[1-4]/','/[5-9]/'], [0,1], $s);
}


function fake_bin(string $s): string {
   $s = str_replace(range(0,4), 0, $s);
   $s = str_replace(range(5,9), 1, $s);
   return $s;
}


print_r(fake_bin('45385593107843568'). ' 01011110001100111
');
print_r(fake_bin('509321967506747'). ' 101000111101101
');
print_r(fake_bin('366058562030849490134388085'). ' 011011110000101010000011011
');