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


echo(hello('johN')), '
';
echo(hello('aliCE')), '
';
echo(hello()), '
';
echo(hello('')), '
';