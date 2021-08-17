<?php
/*
|--------------------------------------------------------------------------
| Even or Odd
|--------------------------------------------------------------------------
|
*/

function even_or_odd(int $n): string {
   return $n % 2 == 0 ? "Even" : "Odd";
}


function even_or_odd(int $n): string {
   return ($n & 1) ? "Odd" : "Even";
}


function even_or_odd(int $n): string {
   return (($n != 0) && ($n % 2)) ? 'Odd' : 'Even';
}


function even_or_odd(int $n): string {
   return ['Even', 'Odd'][$n & 1];
}


print_r(even_or_odd(-3). " Odd
");
print_r(even_or_odd(0). " Even
");
print_r(even_or_odd(7). " Odd
");
print_r(even_or_odd(1). " Odd
");