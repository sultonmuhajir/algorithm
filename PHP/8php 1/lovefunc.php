<?php
/*
|--------------------------------------------------------------------------
| Opposites Attract
|--------------------------------------------------------------------------
|
*/

function lovefunc($flower1, $flower2) {
   return ($flower1 + $flower2) % 2 !== 0;
}


function lovefunc($f1, $f2):bool {
   return ($f1+$f2)%2;
}


function lovefunc($flower1, $flower2) {
   return 1 == ($flower1 + $flower2) % 2; 
}


function lovefunc($f1, $f2) {
   return ($f1 + $f2) % 2 == 1;
}


function lovefunc($flower1, $flower2) {
   return ($flower1 % 2) == !($flower2 % 2);
}


print_r(lovefunc(1, 4). ' ' . true . '
');
print_r(lovefunc(2, 2). ' ' . false . '
');
print_r(lovefunc(0, 1). ' ' . true . '
');
print_r(lovefunc(0, 0). ' ' . false . '
');