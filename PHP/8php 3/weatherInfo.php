<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Debug
|--------------------------------------------------------------------------
|
*/

function weatherInfo($temp) {
   $temp = intval(($temp - 32) * (5 / 9));
   return "$temp is " . ($temp < 0 ? "" : "above ") . "freezing temperature";
}


function weatherInfo(int $temp): string {
   $celsius = (int)(($temp - 32) * (5/9));
   return $celsius >= 0 ? "{$celsius} is above freezing temperature" : "{$celsius} is freezing temperature";
}


function weatherInfo(int $f_temp): string {
   $c_temp = intval(($f_temp - 32) * (5/9));
   return sprintf('%d is %sfreezing temperature', $c_temp, $c_temp >= 0 ? 'above ' : '');
}


print_r(weatherInfo(50) . ' 10 is above freezing temperature
');
print_r(weatherInfo(23) . ' -5 is freezing temperature
');