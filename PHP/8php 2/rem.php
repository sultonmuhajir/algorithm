<?php
/*
|--------------------------------------------------------------------------
| Remove exclamation marks
|--------------------------------------------------------------------------
|
*/


function remove_exclamation_marks($string) {
   return str_replace('!', '', $string);
}


function remove_exclamation_marks($string) {
   return implode('', explode('!', $string));
}


function remove_exclamation_marks($string) {
   $result = [];
   for ($i = 0; $i < strlen($string); $i++) {
      if ($string[$i] !== '!') {
         $result[] = $string[$i];
      }
   }
   return implode('', $result);
}


function remove_exclamation_marks($string) {
   return preg_replace('/[!]+?/', '', $string);
}


print_r(remove_exclamation_marks("Hello World!!") . " Hello World");