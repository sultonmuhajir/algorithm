<?php
/*
|--------------------------------------------------------------------------
| Holiday VI - Shark Pontoon
|--------------------------------------------------------------------------
|
*/

function shark(int $pd, int $sd, int $ys, int $ss, bool $d): string {
   return $pd / $ys < $sd / ($d ? $ss / 2 : $ss) ? 'Alive!' : 'Shark Bait!';
}


function shark(int $pontoonDistance, int $sharkDistance, int $youSpeed, int $sharkSpeed, bool $dolphin): string {
   return ($pontoonDistance / $youSpeed < $sharkDistance / $sharkSpeed << $dolphin) ? "Alive!" : "Shark Bait!";  
}


function shark(int $pD, int $sD, int $yS, int $sS, bool $d): string {
   return ($pD / $yS) < ($sD / $sS) * ($d ? 2 : 1) ? "Alive!" : "Shark Bait!";
}


print_r(shark(12, 50, 4, 8, true) . " Alive!
");
print_r(shark(7, 55, 4, 16, true) . " Alive!
");
print_r(shark(24, 0, 4, 8, true) . " Shark Bait!
");