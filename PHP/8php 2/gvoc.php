<?php
/*
|--------------------------------------------------------------------------
| Volume of a Cuboid
|--------------------------------------------------------------------------
|
*/

function get_volume_of_cuboid($length, $width, $height) {
   return $length * $width * $height;
}


function get_volume_of_cuboid(...$volume) {
   return array_product($volume);
}


function get_volume_of_cuboid($length, $width, $height) {
   return array_product(func_get_args());
}


function get_volume_of_cuboid($length, $width, $height) {
   return array_product(array_values(get_defined_vars())); 
}


print_r(get_volume_of_cuboid(1, 2, 2) . ' ' . 4 . '
');
print_r(get_volume_of_cuboid(6.3, 2, 5) . ' ' . 63 . '
');