<?php
/*
|--------------------------------------------------------------------------
| Fuel Calculator
|--------------------------------------------------------------------------
|
*/

function fuel_price($litres, $price_per_litre) {
   return round($litres * $price_per_litre - (($litres <= 10 ? floor($litres / 2) * 5 : 25) * $litres * 0.01), 2);
}


function fuel_price($l, $p) {
   return round($l * max($p - 0.25, $p - 0.05 * ~~($l / 2)), 2);
}


function fuel_price ( $litres, $price_per_liter ) {
   return $litres * ($price_per_liter - ($litres >= 10 ? 0.25 : intval($litres / 2) * 0.05));
}


print_r(fuel_price(10, 21.5) . ' ' . 212.5 . '
');
print_r(fuel_price(40, 10) . ' ' . 390 . '
');
print_r(fuel_price(15, 5.83) . ' ' . 83.7 . '
');