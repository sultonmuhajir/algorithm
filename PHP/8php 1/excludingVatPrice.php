<?php
/*
|--------------------------------------------------------------------------
| Calculate Price Excluding VAT
|--------------------------------------------------------------------------
|
*/

function excludingVatPrice($price){
   return $price != null ? number_format($price/1.15, 2) : -1;
}


function excludingVatPrice($price){  
   return round($price/1.15, 2) ?: -1;
}


function excludingVatPrice($price) {
   return $price ? round($price / 1.15, 2) : -1;
}


print_r(excludingVatPrice(230) . ' ' . 200.00 . '
');
print_r(excludingVatPrice(123) . ' ' . 106.96 . '
');
print_r(excludingVatPrice(null) . ' ' . -1 . '
');