<?php
/*
|--------------------------------------------------------------------------
| Find the position!
|--------------------------------------------------------------------------
|
*/

function position(string $alphabet): string {
   return "Position of alphabet: " . (ord($alphabet) - 96);
}


function position(string $alphabet): string {
   $a = range('a', 'z');
   $result = 0;
   for ($i = 0; $i < count($a); $i++) {
      if ($a[$i] === $alphabet) {
         $result = $i + 1;
         break;
      }
   }
   return "Position of alphabet: {$result}";
}


function position(string $a): string {
   return "Position of alphabet: ".strpos(" abcdefghijklmnopqrstuvwxyz", $a);
}


print_r(position("a") . " Position of alphabet: 1
");
print_r(position("z") . " Position of alphabet: 26
");
print_r(position("e") . " Position of alphabet: 5
");