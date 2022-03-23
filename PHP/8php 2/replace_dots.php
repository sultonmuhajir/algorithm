<?php
/*
|--------------------------------------------------------------------------
| FIXME: Replace all dots
|--------------------------------------------------------------------------
|
*/

function replace_dots(string $str): string {
   return str_replace('.', '-', $str);
}


function replace_dots(string $str): string {
   return preg_replace('/\./', '-', $str);
}


function replace_dots(string $str): string {
   $str = explode(".",$str);
   return implode('-',$str);
}


print_r(replace_dots('one.two.three'). ' one-two-three');