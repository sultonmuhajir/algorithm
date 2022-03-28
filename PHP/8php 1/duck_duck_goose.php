<?php
/*
|--------------------------------------------------------------------------
| Duck Duck Goose
|--------------------------------------------------------------------------
|
*/

function duck_duck_goose($players, $goose) {
   return $players[($goose - 1) % count($players)]['name'];
}


function duck_duck_goose(array $players, int $goose) {
   for ($i=0;$i<$goose;$i++) {
      $result = $players[$i%count($players)];
   }
   return $result['name'];
}


function duck_duck_goose ( array $players, int $goose ) : string {
   return $players[--$goose % count($players)]['name'];
}


function duck_duck_goose($players, $goose) {
   $res = count($players);
   while ($res < $goose) {
      $goose = $goose - $res;
   }
   return $players[$goose - 1]['name'];
}