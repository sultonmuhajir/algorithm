<?php
/*
|--------------------------------------------------------------------------
| Is there a vowel in there?
|--------------------------------------------------------------------------
|
*/

function isVow(array $a) {
   $res = [];
   foreach ($a as $i) {
      array_push($res, in_array(chr($i), str_split('aiueo')) ? chr($i) : $i);
   }
   return $res;
}


function isVow(array $a){
   return array_map(function($e){
      return array_search(chr($e), ['a', 'e', 'i', 'o', 'u']) != false ? chr($e) : $e;
   }, $a);
}


function isVow(array $a) {
   return array_map(function ($t) { 
      return in_array(chr($t), str_split("aeiou")) ? chr($t):$t;
   }, $a);
}


print_r(
   isVow([118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113, 120, 106])
);