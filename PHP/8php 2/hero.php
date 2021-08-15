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


echo(hero(10,5)), '
';
echo(hero(7,4)), '
';
echo(hero(4,5)), '
';
echo(hero(100,40)), '
';