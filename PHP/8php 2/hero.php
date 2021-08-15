<?php
/*
|--------------------------------------------------------------------------
| Is he gonna survive?
|--------------------------------------------------------------------------
|
*/

function hero(int $bullets, int $dragons){
   return $bullets >= $dragons * 2;
}


function hero(int $bullets, int $dragons){
   return $dragons << 1 <= $bullets;
}


function hero(int $bullets, int $dragons){
   return ($bullets/2 >= $dragons);
}


function hero(int $bullets, int $dragons){
   return ($dragons * 2 - $bullets) <= 0; 
}


print_r(hero(10, 5). ' ' . true . '
');
print_r(hero(7, 4). ' ' . false . '
');
print_r(hero(4, 5). ' ' . false . '
');
print_r(hero(100, 40). ' ' . true . '
');
print_r(hero(1500, 751). ' ' . false . '
');
print_r(hero(0, 1). ' ' . false . '
');