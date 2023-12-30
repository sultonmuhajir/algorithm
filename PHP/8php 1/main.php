<?php
/*
|--------------------------------------------------------------------------
| Grasshopper - Function syntax debugging
|--------------------------------------------------------------------------
|
*/

function main(string $verb, string $noun): string {
   return $verb . $noun;
}


function main($verb, $noun) {
   return "$verb$noun";
}


function main (string $verb, string $noun): string {
   return trim($verb) . ' ' . trim($noun);
}


print_r(main("take ", "item") . " take item
");
print_r(main("use ", "sword") . " use sword
");