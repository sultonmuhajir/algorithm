<?php
/*
|--------------------------------------------------------------------------
| Basic variable assignment
|--------------------------------------------------------------------------
|
*/

$a = "code";
$b = "wa.rs";
$name = $a.$b;


$name = 'codewa.rs';


$a = [99,111,100,101,119,97,46,114,115];
$name = implode('', array_map(function($l){return chr($l);}, $a));


$GLOBALS['name'] = 'codewa.rs';


global $name;
$name = 'codewa.rs';


print_r($name);