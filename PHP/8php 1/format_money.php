<?php
/*
|--------------------------------------------------------------------------
| Dollars and Cents
|--------------------------------------------------------------------------
|
*/

function format_money(float $amount): string {
   return '$' . sprintf('%.2f', $amount);
}


function format_money(float $amount): string {
   return sprintf('$%.2f', $amount);
}


function format_money(float $amount): string {
   return '$' . number_format($amount, 2,'.','');
}


print_r(format_money(394324.99));