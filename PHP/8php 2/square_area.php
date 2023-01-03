<?php
/*
|--------------------------------------------------------------------------
| Area of a Square
|--------------------------------------------------------------------------
|
*/

function square_area($A) {
   return round(($A / pi()) ** 2 * 400) / 100;
}


function square_area($A) {
   return round(pow((2 * $A) / M_PI, 2), 2);
}


function square_area($A) {
   return round( ($A/deg2rad(90))**2, 2 );
}


function square_area($A) {
   return round(($A / M_PI) ** 2 * 4, 2);
}


print_r(square_area(2) . ' ' . 1.62 . ' 
');
print_r(square_area(0) . ' ' . 0 . ' 
');
print_r(square_area(14.05) . ' ' . 80 . ' 
');