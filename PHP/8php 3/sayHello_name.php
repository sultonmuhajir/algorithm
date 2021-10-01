<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Debug sayHello
|--------------------------------------------------------------------------
|
*/

function sayHello($name) {
   return "Hello, {$name}";
}


function sayHello($name) {
   return "Hello, " . $name;
}


function sayHello($name) {
   return sprintf("Hello, %s", $name);
}


function sayHello($name) {
   return "Hello, $name";
}


print_r(sayHello('Mr. Spock'). ' Hello, Mr. Spock
');
print_r(sayHello('Captain Kirk'). ' Hello, Captain Kirk
');
print_r(sayHello('Liutenant Uhura'). ' Hello, Liutenant Uhura
');
print_r(sayHello('Dr. McCoy'). ' Hello, Dr. McCoy
');