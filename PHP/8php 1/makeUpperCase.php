<?php
/*
|--------------------------------------------------------------------------
| MakeUpperCase
|--------------------------------------------------------------------------
|
*/

function makeUpperCase(string $input): string {
   return strtoupper($input);
}


function makeUpperCase(string $input): string {
   for ($i = 0; $i < strlen($input); $i++) {
      $char = ord($input[$i]);
      if ($char >= 97 && $char <= 122) {
         $input[$i] = chr($char - 32)[0];
      }
   }
   return $input;
}


function makeUpperCase(string $input): string {
   return mb_convert_case($input, MB_CASE_UPPER, "UTF-8");;
}


print_r(makeUpperCase("hello") . " HELLO");