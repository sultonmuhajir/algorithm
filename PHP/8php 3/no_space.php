<?php
/*
|--------------------------------------------------------------------------
| Remove String Spaces
|--------------------------------------------------------------------------
|
*/

function no_space(string $s): string {
   return implode('', explode(' ', $s));   
}


function no_space(string $s): string {
   return str_replace(' ', '', $s);
}


function no_space(string $s): string {
   return preg_replace('/\s+/','',$s);
}


print_r(no_space('8 j 8   mBliB8g  imjB8B8  jl  B'). ' 8j8mBliB8gimjB8B8jlB
');
print_r(no_space('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'). ' 88Bifk8hB8BB8BBBB888chl8BhBfd
');
print_r(no_space('8aaaaa dddd r     '). ' 8aaaaaddddr
');