<?php
/*
|--------------------------------------------------------------------------
| Sentence Smash
|--------------------------------------------------------------------------
|
*/

function smash(array $words): string {
   return implode(' ', $words);
}


function smash(array $words): string {
   return join(' ', $words);
}


function smash(array $words): string {
   $result = '';
   for ($i = 0; $i < count($words); $i++) {
      $result .= " " . $words[$i];
   }
   return trim($result);
}


function smash(array $words): string {
   $sentence = "";
   for($i=0; $i<sizeof($words); $i++) {
      $sentence .= $words[$i];
      if($i != (sizeof($words)-1)) $sentence.= " ";
   }
   return $sentence;
}


print_r(smash(["hello", "world"]) . " hello world");