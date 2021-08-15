<?php
/*
|--------------------------------------------------------------------------
| Returning Strings
|--------------------------------------------------------------------------
|
*/

function greet($name) {
   return "Hello, {$name} how are you doing today?";
}


function greet($name) {
   return sprintf("Hello, %s how are you doing today?", $name);
}


function greet(string $name): string {
   return 'Hello, ' . $name . ' how are you doing today?';
}


function greet($name): string {
   return str_replace("<name>", $name, "Hello, <name> how are you doing today?");
}


print_r(greet("Ryan"). " Hello, Ryan how are you doing today?
");
print_r(greet("Shingles"). " Hello, Shingles how are you doing today?
");