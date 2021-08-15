<?php
/*
|--------------------------------------------------------------------------
| Hello, Name or World!
|--------------------------------------------------------------------------
|
*/

function hello($name = ''): string {
   $nm = $name != '' ? ucfirst(strtolower($name)) : "World";
   return "Hello, {$nm}!";
}


function hello($name = ""): string {
   return "Hello, " . ucfirst(strtolower(strlen($name) ? $name : "World")) . "!";
}


function hello($name = ''): string {
   return sprintf("Hello, %s!", empty($name) ? 'World' : ucfirst(strtolower($name)));
}


print_r(hello('johN'). ' Hello, John!
');
print_r(hello('alice'). ' Hello, Alice!
');
print_r(hello(). ' Hello, World!
');
print_r(hello(''). ' Hello, World!
');