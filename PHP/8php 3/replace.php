<?php
/*
|--------------------------------------------------------------------------
| Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
|--------------------------------------------------------------------------
|
*/

function replace(string $s): string {
   $res = '';
   for ($i=0; $i < strlen($s); $i++) { 
      $res .= preg_match('/^[^aeiou]*$/i', $s[$i]) ? $s[$i] : '!';
   }
   return $res;
}


function replace(string $s): string {
   return preg_replace('/[aeiou]/i', "!", $s);
}


function replace(string $s): string {
   return str_ireplace(['a', 'e', 'i', 'o', 'u'], '!', $s);
}


function replace(string $s): string {
   return str_replace(str_split('aeiouAEIOU'), '!', $s);
}


print(replace("Hi!") . " H!!
");
print(replace("!Hi! Hi!") . " !H!! H!!
");
print(replace("aeiou") . " !!!!!
");
print(replace("ABCDE") . " !BCD!
");