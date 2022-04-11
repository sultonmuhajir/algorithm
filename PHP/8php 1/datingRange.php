<?php
/*
|--------------------------------------------------------------------------
| Age Range Compatibility Equation
|--------------------------------------------------------------------------
|
*/

function datingRange($age) {
   $min = $age > 14 ? floor($age / 2 + 7) : floor($age - 0.10 * $age);
   $max = $age > 14 ? floor($age - 7) * 2 : floor($age + 0.10 * $age);
   return "{$min}-{$max}";
}


function datingRange(int $n): string {
   return floor(($b = $n <= 14) ? 0.9 * $n : 0.5 * $n + 7) . "-" . floor($b ? 1.1 * $n : 2 * $n - 14);
}


function datingRange($age) {
   return $age <= 14 ? floor($age * 0.9) .'-' .floor($age * 1.1) : floor($age / 2 + 7) .'-' .floor(($age - 7) * 2);
}


print_r(datingRange(17) . " 15-20
");
print_r(datingRange(40) . " 27-66
");
print_r(datingRange(15) . " 14-16
");
print_r(datingRange(35) . " 24-56
");
print_r(datingRange(10) . " 9-11
");